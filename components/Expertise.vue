<template>
  <div class="mt-8">
    <div v-for="(category, index) in categories" :key="index" class="mt-4">
      <h2 class="mb-2 text-xl text-gray-700 font-bold dark:text-blue-200 capitalize">
        {{ category.name }}
      </h2>
      <ul class="flex flex-wrap gap-4 items-center mb-6">
        <li v-for="(tech, techIndex) in category.technologies" :key="techIndex">
          <a :href="tech.url" target="_blank" class="inline-block">
            <component :is="tech.component" class="h-10 w-10">
              <title>{{ tech.name }}</title>
            </component>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import angular from "../assets/devicon/angular.svg?inline";
import bootstrap from "../assets/devicon/bootstrap.svg?inline";
import css from "../assets/devicon/css.svg?inline";
import html5 from "../assets/devicon/html5.svg?inline";
import javascript from "../assets/devicon/javascript.svg?inline";
import markdown from "../assets/devicon/markdown.svg?inline";
import nuxt from "../assets/devicon/nuxtjs.svg?inline";
import tailwindcss from "../assets/devicon/tailwindcss.svg?inline";
import c from "../assets/devicon/c.svg?inline";
import cpp from "../assets/devicon/cpp.svg?inline";
import express from "../assets/devicon/express.svg?inline";
import java from "../assets/devicon/java.svg?inline";
import node from "../assets/devicon/node.svg?inline";
import postgres from "../assets/devicon/postgresql.svg?inline";
import python from "../assets/devicon/python.svg?inline";
import spring from "../assets/devicon/spring.svg?inline";
import chrome from "../assets/devicon/chrome.svg?inline";
import github from "../assets/devicon/github.svg?inline";
import linux from "../assets/devicon/linux.svg?inline";
import npm from "../assets/devicon/npm.svg?inline";
import pycharm from "../assets/devicon/pycharm.svg?inline";
import trello from "../assets/devicon/trello.svg?inline";
import visualstudio from "../assets/devicon/visualstudio.svg?inline";
import vscode from "../assets/devicon/vscode.svg?inline";
export default {
  components: {
    angular,
    bootstrap,
    css,
    html5,
    javascript,
    markdown,
    nuxt,
    tailwindcss,
    c,
    cpp,
    express,
    java,
    node,
    postgres,
    python,
    spring,
    chrome,
    github,
    linux,
    npm,
    pycharm,
    trello,
    visualstudio,
    vscode,
  },
  data() {
    return {
      categories: [
        {
          name: 'Frontend',
          technologies: [
            { name: 'Angular', component: 'angular', url: 'https://angular.dev/tutorials/learn-angular' },
            { name: 'Bootstrap', component: 'bootstrap', url: 'https://getbootstrap.com/docs/5.0/getting-started/introduction/' },
            { name: 'CSS', component: 'css', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
            { name: 'HTML', component: 'html5', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
            { name: 'JavaScript', component: 'javascript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
            { name: 'Markdown', component: 'markdown', url: 'https://www.markdownguide.org/getting-started/' },
            { name: 'Nuxt.js', component: 'nuxt', url: 'https://nuxt.com/docs/getting-started/introduction' },
            { name: 'Tailwind CSS', component: 'tailwindcss', url: 'https://tailwindcss.com/docs' },
          ]
        },
        {
          name: 'Backend',
          technologies: [
            { name: 'C', component: 'c', url: 'https://devdocs.io/c/' },
            { name: 'C++', component: 'cpp', url: 'https://isocpp.org/get-started' },
            { name: 'Express.js', component: 'express', url: 'https://expressjs.com/en/starter/installing.html' },
            { name: 'Java', component: 'java', url: 'https://docs.oracle.com/en/java/' },
            { name: 'Node.js', component: 'node', url: 'https://nodejs.org/en/docs/' },
            { name: 'PostgreSQL', component: 'postgres', url: 'https://www.postgresql.org/docs/' },
            { name: 'Python', component: 'python', url: 'https://docs.python.org/3/' },
            { name: 'Spring Boot', component: 'spring', url: 'https://spring.io/projects/spring-boot' },
          ]
        },
        {
          name: 'Design Tools',
          technologies: [
            { name: 'Chrome', component: 'chrome', url: 'https://developer.chrome.com/docs/devtools/' },
            { name: 'GitHub', component: 'github', url: 'https://docs.github.com/en' },
            { name: 'Linux', component: 'linux', url: 'https://www.linux.org/pages/download/' },
            { name: 'npm', component: 'npm', url: 'https://docs.npmjs.com/' },
            { name: 'PyCharm', component: 'pycharm', url: 'https://www.jetbrains.com/pycharm/learn/' },
            { name: 'Trello', component: 'trello', url: 'https://trello.com/guide' },
            { name: 'Microsoft Visual Studio', component: 'visualstudio', url: 'https://visualstudio.microsoft.com/' },
            { name: 'Visual Studio Code', component: 'vscode', url: 'https://code.visualstudio.com/docs' },
          ]
        }
      ]
    };
  }
};
</script>
