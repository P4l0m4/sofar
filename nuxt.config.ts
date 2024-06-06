import { getNews, getStates, getCities } from "./src/utils/sitemap.js";

// const fetchUrls = async () => {
//   try {
//     const newsPages = await getNews();
//     const statesPages = await getStates();
//     const citiesPages = await getCities();
//     return [...newsPages, ...statesPages, ...citiesPages];
//   } catch (error) {
//     console.error("Error fetching URLs for sitemap:", error);
//     return [];
//   }
// };

export default defineNuxtConfig({
  ssr: false,
  srcDir: "src/",
  css: ["@/styles/global.scss"],
  modules: [
    "@pinia/nuxt",
    "@nuxtjs/sitemap",
    "nuxt-jsonld",
    "dayjs-nuxt",
    [
      "@storyblok/nuxt",
      {
        accessToken: process.env.STORYBLOK_KEY,
        cacheProvider: "memory",
        apiOptions: { region: "us" },
      },
    ],
  ],

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
  sitemap: {
    urls: async () => {
      const newsPages = await getNews();
      const statesPages = await getStates();
      const citiesPages = await getCities();
      return [...newsPages, ...statesPages, ...citiesPages];
    },
  },

  site: {
    url: "https://flysofar.com/",
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
      script: [
        {
          hid: "gtmHead",
          innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NJGG6P35');`,

          defer: true,
          async: true,
        },
      ],
    },
  },
  runtimeConfig: {
    public: {
      MAP_BOX_API_KEY: process.env.MAP_BOX_API_KEY,
      STORYBLOK_KEY: process.env.STORYBLOK_KEY,
    },
  },
});
