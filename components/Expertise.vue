<template>
  <div class="mt-8">
    <div v-for="(category, index) in categories" :key="index" class="mt-4">
      <h2
        class="mb-2 text-xl text-gray-700 font-bold dark:text-blue-200 capitalize"
      >
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
const importIcon = name => {
  return () => import(`../assets/devicon/${name}.svg?inline`)
}

export default {
  components: {
    angular: importIcon('angular'),
    bootstrap: importIcon('bootstrap'),
    css: importIcon('css'),
    html5: importIcon('html5'),
    javascript: importIcon('javascript'),
    markdown: importIcon('markdown'),
    nuxt: importIcon('nuxtjs'),
    tailwindcss: importIcon('tailwindcss'),
    c: importIcon('c'),
    cpp: importIcon('cpp'),
    express: importIcon('express'),
    java: importIcon('java'),
    node: importIcon('node'),
    postgres: importIcon('postgresql'),
    python: importIcon('python'),
    spring: importIcon('spring'),
    chrome: importIcon('chrome'),
    github: importIcon('github'),
    linux: importIcon('linux'),
    npm: importIcon('npm'),
    pycharm: importIcon('pycharm'),
    trello: importIcon('trello'),
    visualstudio: importIcon('visualstudio'),
    vscode: importIcon('vscode')
  },
  data() {
    return {
      categories: [
        {
          name: 'Frontend',
          technologies: [
            {
              name: 'Angular',
              component: 'angular',
              url: 'https://angular.dev/tutorials/learn-angular'
            },
            {
              name: 'Bootstrap',
              component: 'bootstrap',
              url: 'https://getbootstrap.com/docs/5.0/getting-started/introduction/'
            },
            {
              name: 'CSS',
              component: 'css',
              url: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
            },
            {
              name: 'HTML',
              component: 'html5',
              url: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
            },
            {
              name: 'JavaScript',
              component: 'javascript',
              url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
            },
            {
              name: 'Markdown',
              component: 'markdown',
              url: 'https://www.markdownguide.org/getting-started/'
            },
            {
              name: 'Nuxt.js',
              component: 'nuxt',
              url: 'https://nuxt.com/docs/getting-started/introduction'
            },
            {
              name: 'Tailwind CSS',
              component: 'tailwindcss',
              url: 'https://tailwindcss.com/docs'
            }
          ]
        },
        {
          name: 'Backend',
          technologies: [
            { name: 'C', component: 'c', url: 'https://devdocs.io/c/' },
            {
              name: 'C++',
              component: 'cpp',
              url: 'https://isocpp.org/get-started'
            },
            {
              name: 'Express.js',
              component: 'express',
              url: 'https://expressjs.com/en/starter/installing.html'
            },
            {
              name: 'Java',
              component: 'java',
              url: 'https://docs.oracle.com/en/java/'
            },
            {
              name: 'Node.js',
              component: 'node',
              url: 'https://nodejs.org/en/docs/'
            },
            {
              name: 'PostgreSQL',
              component: 'postgres',
              url: 'https://www.postgresql.org/docs/'
            },
            {
              name: 'Python',
              component: 'python',
              url: 'https://docs.python.org/3/'
            },
            {
              name: 'Spring Boot',
              component: 'spring',
              url: 'https://spring.io/projects/spring-boot'
            }
          ]
        },
        {
          name: 'Design Tools',
          technologies: [
            {
              name: 'Chrome',
              component: 'chrome',
              url: 'https://developer.chrome.com/docs/devtools/'
            },
            {
              name: 'GitHub',
              component: 'github',
              url: 'https://docs.github.com/en'
            },
            {
              name: 'Linux',
              component: 'linux',
              url: 'https://www.linux.org/pages/download/'
            },
            { name: 'npm', component: 'npm', url: 'https://docs.npmjs.com/' },
            {
              name: 'PyCharm',
              component: 'pycharm',
              url: 'https://www.jetbrains.com/pycharm/learn/'
            },
            {
              name: 'Trello',
              component: 'trello',
              url: 'https://trello.com/guide'
            },
            {
              name: 'Microsoft Visual Studio',
              component: 'visualstudio',
              url: 'https://visualstudio.microsoft.com/'
            },
            {
              name: 'Visual Studio Code',
              component: 'vscode',
              url: 'https://code.visualstudio.com/docs'
            }
          ]
        }
      ]
    }
  }
}
</script>
