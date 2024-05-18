<template>
  <div class="md:fixed">
    <div class="md:block flex justify-center items-center">
      <a href="https://ajbarea.github.io/" target="_blank">
        <nuxt-img :src="siteMetadata.author_image" loading="lazy" alt="me"
          class="shadow-xl md:h-60 md:w-60 h-40 w-40 rounded-full" />
      </a>
      <div class="mb-2 mx-7 mt-4 justify-center items-center">
        <h1 class="md:text-3xl text-2xl text-gray-800 font-bold dark:text-blue-100">
          AJ Barea
        </h1>
        <div class="md:text-lg text-gray-600 dark:text-blue-100">
          {{ siteMetadata.quote }}
        </div>
      </div>
    </div>
    <div class="mx-7 hidden md:block">
      <div class="my-2 text-gray-600 flex dark:text-blue-100">
        <Mail />
        <p>{{ siteMetadata.email }}</p>
      </div>
      <div class="my-2 text-gray-600 flex dark:text-blue-100">
        <Globe />
        <p>{{ siteMetadata.location }}</p>
      </div>
      <div class="my-2 text-gray-600 flex dark:text-blue-200">
        <Github />
        <a :href="siteMetadata.github" target="_blank"> {{ `GitHub @${siteMetadata.githubUser}` }}</a>
      </div>
      <div class="my-2 text-gray-600 flex dark:text-blue-200">
        <LinkedIn />
        <a :href="siteMetadata.linkedin" target="_blank"> {{ `LinkedIn @${siteMetadata.linkedinUser}` }}</a>
      </div>
    </div>
  </div>
</template>
<script>
import Mail from "../assets/icon/mail.svg?inline";
import Globe from "../assets/icon/glob.svg?inline";
import Github from "../assets/icon/github_new.svg?inline";
import LinkedIn from "../assets/icon/linkeding.svg?inline";
import siteMetaData from "@/data/siteMetaData";
export default {
  components: { Mail, Globe, Github, LinkedIn },
  data: () => {
    return { siteMetadata: siteMetaData };
  },
};
</script>
