<template>
  <div class="dark:bg-gray-900 mt-6">
    <div class="max-w-screen-lg md:flex mx-auto dark:bg-gray-900">
      <div class="md:w-1/3 p-2 md:flex md:justify-center">
        <AuthorCard />
      </div>
      <div class="md:w-2/3 px-8">
        <AuthorIntro></AuthorIntro>
        <Expertise></Expertise>
        <TimeLine></TimeLine>
      </div>
    </div>
  </div>
</template>
<script>
import siteMetaData from '@/data/siteMetaData'
export default {
  data() {
    return { siteMetaData }
  },
  head: {
    title: siteMetaData.title,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: siteMetaData.description
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/portfolio/favicon.ico' }
    ]
  }
}
</script>
<style></style>
