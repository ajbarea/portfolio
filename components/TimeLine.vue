<template>
  <div class="opacity-100 mt-10">
    <ol class="relative border-l border-gray-200 dark:border-gray-700">
      <TimeLineItem
        v-for="(item, index) in timelineItems"
        :key="index"
        :title="item.title"
        :subtitle="item.subtitle"
        :timeframe="item.timeframe"
        :description="item.description"
        :skills="item.skills"
        :icon="item.icon"
        :current="item.current"
      />
    </ol>
  </div>
</template>
<script>
import timelineData from '@/data/timeline'

export default {
  components: {
    TimeLineItem: () => import('./TimeLineItem.vue')
  },
  data() {
    return {
      timelineItems: timelineData
    }
  }
}
</script>
