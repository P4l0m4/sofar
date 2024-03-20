export default defineNuxtConfig({
  ssr: false,
  srcDir: "src/",
  css: ["@/styles/global.scss"],
  modules: ["nuxt-simple-sitemap", "nuxt-jsonld", "dayjs-nuxt"],
  // pwa: {
  //   manifest: {
  //     name: "Ma Super Application",
  //     short_name: "App",
  //     lang: "fr",
  //     useWebmanifestExtension: false,
  //     display: "standalone",
  //     theme_color: "#123456",
  //     background_color: "#123456",
  //     description: "Une description de votre application",
  //     icons: [
  //       {
  //         src: "/icon.png",
  //         sizes: "512x512",
  //         type: "image/png",
  //       },
  //     ],
  //   },
  //   workbox: {
  //     // Options de Workbox
  //   },
  // },
  dayjs: {
    locales: ["fr"],
    defaultLocale: "fr",
  },

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
