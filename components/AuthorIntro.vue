<template>
  <div class="mb-6">
    <h2
      class="mt-6 text-4xl text-gray-700 font-bold capitalize dark:text-blue-200"
    >
      <span>&#9996;&#127997;</span>Hello, friends! I'm AJ.
      <div class="scroller">
        <span>
          gamer.<br />
          engineer.<br />
          otaku.<br />
          developer.
        </span>
      </div>
    </h2>
    <p class="mt-6 mb-4 dark:bg-gray-800 dark:text-blue-200 text-justify">
      Welcome! This portfolio is a window into my world of creativity,
      problem-solving, and engineering expertise. <br /><br />
      Explore a curated selection of my
      <a href="https://ajbarea.github.io/portfolio/projects/"
        ><i><u>projects</u></i></a
      >
      to see the challenges I've tackled and the solutions I've built.
      <br /><br />
      Looking for a deeper dive into my experience? My
      <a href="https://ajbarea.github.io/resume/"
        ><i><u>resume</u></i></a
      >
      details my educational background and professional journey. <br /><br />
      For a more personal touch, head over to my
      <a href="https://ajbarea.github.io/portfolio/blog"
        ><i><u>blog</u></i></a
      >. There, I share insights and musings on the ever-evolving landscape of
      the field, offering a glimpse into my current explorations and passions.
      <br /><br />
      I've leveraged a powerful and growing tech stack to bring my projects to
      life:
    </p>
  </div>
</template>
<style>
.scroller {
  height: 1.2em;
  line-height: 1.2em;
  position: relative;
  overflow: hidden;
  width: 100%;
}
.scroller > span {
  position: absolute;
  top: 0;
  animation: slide 7s infinite;
}
@keyframes slide {
  0% {
    top: 0;
  }
  25% {
    top: -1.2em;
  }
  50% {
    top: -2.4em;
  }
  75% {
    top: -3.6em;
  }
}
</style>
