<template>
  <footer aria-label="Site footer">
    <div class="flex flex-col items-center mt-16">
      <div class="flex mb-3 space-x-4">
        <a v-for="(link, index) in socialLinks" :key="index"
          class="text-sm text-gray-500 transition hover:text-gray-600" target="_blank" rel="noopener noreferrer"
          :href="link.url" :aria-label="link.label">
          <span class="sr-only">{{ link.name }}</span>
          <img class="w-8 h-8" :src="link.icon" :alt="`${link.name} icon`" />
        </a>
      </div>
      <div class="flex mb-2 space-x-2 text-sm text-gray-500 dark:text-gray-400">
        <a href="https://ajbarea.github.io/portfolio/">{{ siteMetadata.slogan }}</a>
      </div>
      <div class="mb-8 text-sm text-gray-500 dark:text-gray-400">
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/ajbarea/"></a>
      </div>
    </div>
  </footer>
</template>
<script>
import siteMetaData from "@/data/siteMetaData";
export default {
  data() {
    return {
      siteMetadata: siteMetaData,
      socialLinks: [
        {
          name: 'github',
          url: siteMetaData.github,
          icon: require('@/assets/icon/github_new.svg'),
          label: 'GitHub Profile'
        },
        {
          name: 'linkedin',
          url: siteMetaData.linkedin,
          icon: require('@/assets/icon/linkeding.svg'),
          label: 'LinkedIn Profile'
        },
        {
          name: 'mail',
          url: `mailto:${siteMetaData.email}`,
          icon: require('@/assets/icon/mail.svg'),
          label: 'Email'
        },
        {
          name: 'youtube',
          url: siteMetaData.youtube,
          icon: require('@/assets/icon/youtube.svg'),
          label: 'YouTube Channel'
        }
      ]
    };
  },
};
</script>
