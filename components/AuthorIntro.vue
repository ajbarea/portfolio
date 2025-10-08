<template>
  <div class="mb-6">
    <h2 class="mt-6 text-4xl text-gray-700 font-bold capitalize dark:text-blue-200">
      <span>&#9996;&#127997;</span>Hello, friends! I'm AJ.
      <Scroller />
    </h2>

    <div class="mt-6 mb-4 dark:bg-gray-800 dark:text-blue-200 text-justify leading-relaxed welcome-content">
      <p>Welcome! This portfolio showcases my dev work, projects, and technical expertise.</p>
      <p>Check out my <router-link to="/projects" class="portfolio-link">projects</router-link> to see what I've built.</p>
      <p>Watch my <a href="https://www.youtube.com/ajbarea" target="_blank" rel="noopener noreferrer" class="portfolio-link">YouTube videos</a> for project explanations and demos.</p>
      <p>View my <a href="https://ajbarea.github.io/resume/" target="_blank"
          rel="noopener noreferrer" class="portfolio-link">resume</a> for educational background and professional experience.</p>
      <p>Read my <router-link to="/blog" class="portfolio-link">blog</router-link> for insights on software engineering and current explorations.</p>
    </div>
  </div>
</template>

<script>
import Scroller from './Scroller.vue';

export default {
  components: {
    Scroller
  }
};
</script>

<style scoped>
.portfolio-link {
  color: #3182ce;
  font-weight: 500;
  padding: 0.1rem 0.3rem;
  border-radius: 0.25rem;
  text-decoration: underline;
  transition: all 0.2s ease-in-out;
}

.portfolio-link:hover {
  background-color: #3182ce;
  color: white;
  text-decoration: none;
}

.dark .portfolio-link {
  color: #63b3ed;
}

.dark .portfolio-link:hover {
  background-color: #63b3ed;
  color: #1a202c;
}

.welcome-content p {
  margin-bottom: 1rem;
}

.welcome-content p:last-child {
  margin-bottom: 0;}
</style>