export default {
  target: "static",
  router: {
    base: "/portfolio/",
  },
  head: {
    title: "AJ Barea - Portfolio",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Portfolio site showcasing computer engineering projects, technologies, and solutions." },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/portfolio/favicon.ico" },
    ],
  },
  css: ["@/assets/css/main.css"],
  plugins: [],
  components: true,
  buildModules: ["@nuxt/image"],
  modules: ["@nuxt/content", "@nuxtjs/svg", "@nuxt/image"],
  svg: {
    vueSvgLoader: {},
    svgSpriteLoader: {},
    fileLoader: {},
  },
  content: {
    liveEdit: false,
    markdown: {
      prism: {
        theme: "prism-themes/themes/prism-dracula.css",
      },
    },
  },
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  generate: {
    dir: "docs",
  },
};
