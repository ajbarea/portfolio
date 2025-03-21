<template>
  <div class="max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0">
    <div class="pt-6 pb-8 space-y-2 md:space-y-5">
      <h1
        class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
        Blog
      </h1>
      <p class="text-lg leading-7 text-gray-500 dark:text-gray-400">
        Structured thoughts, notes, resources, and recommendations.
      </p>
    </div>
    <div class="container py-12">
      <div class="flex flex-wrap -m-4">
        <blog-item v-for="article in articles" :key="article.title" :title="article.title"
          :description="article.description" :date="article.date" :slug="article.slug"></blog-item>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content("articles")
      .only([
        "title",
        "description",
        "img",
        "slug",
        "tag",
        "author",
        "date",
        "draft",
      ])
      .sortBy("date", "asc")
      .fetch();
    return { articles };
  },
  head: {
    title: "AJ Barea | Blog",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Structure thoughts, capture ideas, take notes",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/portfolio/favicon.ico" },
    ],
  },
};
</script>
<style></style>
