<template>
  <div class="p-4 md:w-1/2 md" style="max-width: 544px">
    <div
      class="h-full overflow-hidden border-2 border-gray-200 rounded-md border-opacity-60 dark:border-gray-700"
    >
      <div class="p-6">
        <div class="mb-3">
          <time
            class="bg-indigo-500 text-white py-1 px-2 rounded-md text-sm"
            :datetime="date"
          >
            {{ formatDate(date) }}
          </time>
        </div>
        <h2
          class="text-2xl font-bold leading-8 tracking-tight mb-3 text-slate-700 dark:text-slate-200"
        >
          <NuxtLink :to="{ name: 'blog-slug', params: { slug: slug } }">
            {{ title }}
          </NuxtLink>
        </h2>
        <p class="prose text-gray-500 max-w-none dark:text-gray-400 mb-3">
          {{ description }}
        </p>
        <div class="flex justify-end mt-4">
          <NuxtLink
            :to="{ name: 'blog-slug', params: { slug: slug } }"
            class="text-indigo-500 hover:text-indigo-600 text-sm font-medium"
          >
            Read more →
          </NuxtLink>
        </div>
      </div>
    </div>
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
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  }
}
</script>

<style></style>
