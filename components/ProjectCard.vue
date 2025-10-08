<template>
  <div class="p-4 md:w-1/2 md" style="max-width: 544px">
    <div
      class="h-full overflow-hidden border-2 border-gray-200 rounded-md border-opacity-60 dark:border-gray-700"
    >
      <div class="p-6">
        <div class="flex flex-row justify-between items-center">
          <div class="my-2">
            <Folder class="text-indigo-800"></Folder>
          </div>
          <div class="flex flex-row justify-between">
            <div class="mx-1">
              <a
                class="text-sm flex items-center text-gray-500 transition hover:text-gray-600"
                target="_blank"
                rel="noopener noreferrer"
                :href="href"
                :title="isYoutubeLink ? 'View on YouTube' : 'View Live Demo'"
              >
                <img
                  v-if="isYoutubeLink"
                  class="w-6 h-6 mr-1"
                  src="../assets/icon/youtube.svg"
                />
                <External v-else class="w-6 h-6 mr-1" />
                <span>{{ isYoutubeLink ? 'YouTube' : 'Demo' }}</span>
              </a>
            </div>
            <div class="mx-2">
              <a
                class="text-sm flex items-center text-gray-500 transition hover:text-gray-600"
                target="_blank"
                rel="noopener noreferrer"
                :href="github"
                title="View on GitHub"
              >
                <img class="w-6 h-6 mr-1" src="../assets/icon/github_new.svg" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
        <h2 class="text-2xl font-bold leading-8 tracking-tight mb-3">
          {{ title }}
        </h2>
        <p class="prose text-gray-500 max-w-none dark:text-gray-400 mb-3">
          {{ description }}
        </p>
        <div class="flex flex-row justify-between">
          <div class="text-gray-400 text-sm font-extralight">
            {{ tech1 }} • {{ tech2 }} • {{ tech3 }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Folder from '../assets/icon/folder.svg?inline'
import External from '../assets/icon/external.svg?inline'

export default {
  components: { Folder, External },
  props: {
    title: { type: String, required: true },
    description: { type: String, required: true },
    href: { type: String, default: '#' },
    github: { type: String, default: '#' },
    tech1: { type: String, default: '' },
    tech2: { type: String, default: '' },
    tech3: { type: String, default: '' },
    linkType: { type: String, default: 'demo' }
  },
  computed: {
    isYoutubeLink() {
      return this.href.includes('youtu') || this.linkType === 'youtube'
    }
  }
}
</script>
<style></style>
