export default defineNuxtConfig({
  ssr: false,
  srcDir: "src/",
  css: ["@/styles/global.scss"],
  modules: [
    "nuxt-simple-sitemap",
    "nuxt-jsonld",
    "dayjs-nuxt",
    "@vite-pwa/nuxt",
    [
      "@storyblok/nuxt",
      {
        accessToken: process.env.STORYBLOK_KEY,
        cacheProvider: "memory",
        apiOptions: { region: "us" },
      },
    ],
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
  runtimeConfig: {
    public: {
      MAP_BOX_API_KEY: process.env.MAP_BOX_API_KEY,
    },
  },
});
