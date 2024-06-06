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
          innerHTML: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-KKF0WKPVWR');`,

          defer: true,
          async: true,
        },
        {
          src: "https://www.googletagmanager.com/gtag/js?id=G-KKF0WKPVWR",
        },
        {
          innerHTML: `(function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:5004125,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
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
