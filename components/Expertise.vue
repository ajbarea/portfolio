<template>
  <div class="mt-8">
    <div v-for="(category, index) in categories" :key="index" class="mt-4">
      <h2 class="mb-2 text-xl text-gray-700 font-bold dark:text-blue-200 capitalize">
        {{ category.name }}
      </h2>
      <ul class="flex flex-wrap gap-4 items-center mb-6">
        <li v-for="(tech, techIndex) in category.technologies" :key="techIndex" class="flex items-center">
          <component :is="tech.component" class="h-10 w-10">
            <title>{{ tech.name }}</title>
          </component>
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
            { name: 'Angular', component: 'angular' },
            { name: 'Bootstrap', component: 'bootstrap' },
            { name: 'CSS', component: 'css' },
            { name: 'HTML', component: 'html5' },
            { name: 'JavaScript', component: 'javascript' },
            { name: 'Markdown', component: 'markdown' },
            { name: 'Nuxt.js', component: 'nuxt' },
            { name: 'Tailwind CSS', component: 'tailwindcss' },
          ]
        },
        {
          name: 'Backend',
          technologies: [
            { name: 'C', component: 'c' },
            { name: 'C++', component: 'cpp' },
            { name: 'Express.js', component: 'express' },
            { name: 'Java', component: 'java' },
            { name: 'Node.js', component: 'node' },
            { name: 'PostgreSQL', component: 'postgres' },
            { name: 'Python', component: 'python' },
            { name: 'Spring Boot', component: 'spring' },
          ]
        },
        {
          name: 'Design Tools',
          technologies: [
            { name: 'Chrome', component: 'chrome' },
            { name: 'GitHub', component: 'github' },
            { name: 'Linux', component: 'linux' },
            { name: 'npm', component: 'npm' },
            { name: 'PyCharm', component: 'pycharm' },
            { name: 'Trello', component: 'trello' },
            { name: 'Microsoft Visual Studio', component: 'visualstudio' },
            { name: 'Visual Studio Code', component: 'vscode' },
          ]
        }
      ]
    };
  }
};
</script>
