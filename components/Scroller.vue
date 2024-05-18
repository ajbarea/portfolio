<template>
  <div class="scroller"> <span> gamer.<br /> engineer.<br /> otaku.<br /> developer. </span> </div>
</template>
<script>export default { name: 'Scroller', } </script>
<style
  scoped>
  .scroller {
    height: 1.2em;
    line-height: 1.2em;
    position: relative;
    overflow: hidden;
    width: 100%;
  }

  .scroller>span {
    position: absolute;
    top: 0;
    animation: slide 7s infinite;
  }
</style>
<style>
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