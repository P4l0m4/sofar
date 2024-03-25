export default defineNuxtConfig({
  ssr: false,
  srcDir: "src/",
  css: ["@/styles/global.scss"],
  modules: [
    "nuxt-simple-sitemap",
    "nuxt-jsonld",
    "dayjs-nuxt",
    "@vite-pwa/nuxt",
  ],

  pwa: {
    /* PWA options */
  },

  // dayjs: {
  //   locales: ["en-us"],
  //   defaultLocale: "en-us",
  // },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/styles/_variables.scss";',
        },
      },
    },
  },
  vue: {
    compilerOptions: {
      isCustomElement: (tag) =>
        ["swiper-container", "swiper-slide"].includes(tag),
    },
  },
  app: {
    head: {
      htmlAttrs: { lang: "en" },
    },
  },
});
