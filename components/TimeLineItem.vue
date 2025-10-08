<template>
  <li class="mb-10 ml-6">
    <span
      class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"
    >
      <img class="w-3 h-3 text-blue-600 dark:text-blue-400" :src="iconUrl" />
    </span>
    <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
      {{ title }}
      <span
        v-if="current"
        class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-2"
      >
        Currently
      </span>
    </h3>
    <h4 v-if="subtitle" class="mb-1 text-md text-gray-700 dark:text-gray-300">
      {{ subtitle }}
    </h4>
    <time
      class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
    >
      {{ timeframe }}
    </time>
    <p class="text-base font-normal text-gray-500 dark:text-gray-400">
      {{ description }}
    </p>
    <div class="flex flex-row justify-between">
      <div class="text-gray-400 text-sm font-extralight">
        {{ skills }}
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      default: ''
    },
    timeframe: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    skills: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    current: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    iconUrl() {
      return require(`@/assets/icon/${this.icon}`)
    }
  }
}
</script>
