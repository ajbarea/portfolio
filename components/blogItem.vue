<template>
  <div>
    <article class="relative flex flex-col max-w-3xl lg:ml-auto xl:max-w-none xl:w-[50rem]">
      <h3 class="mb-4 text-4xl text-slate-700 tracking-tight font-bold dark:text-slate-200">
        <NuxtLink :to="{ name: 'blog-slug', params: { slug: slug } }">
          {{ title }}</NuxtLink>
      </h3>
      <div class="mb-6 prose prose-slate dark:prose-dark">
        <p>{{ description }}</p>
      </div>
      <div class="mt-auto flex flex-row-reverse items-center justify-end">
        <dl>
          <dt class="sr-only">Date</dt>
          <dd
            class="text-sm leading-6 dark:text-slate-400 lg:absolute lg:top-0 lg:right-full lg:mr-8 lg:whitespace-nowrap font-bold">
            <time class="bg-indigo-500 text-white py-1 px-2 rounded-md" datetime="2022-02-24T12:00:00.000Z">{{
              formatDate(date) }}</time>
          </dd>
        </dl>
      </div>
      <br />
    </article>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    slug: {
      type: String,
      required: true
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
  },
};
</script>
<style></style>
