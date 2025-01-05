// import { defineStore } from "pinia";

// import StoryblokClient from "storyblok-js-client";
// const Storyblok = new StoryblokClient({
//   accessToken: "EnRhwF6FbbFy29gtg3NYhQtt",
//   cache: {
//     clear: "auto",
//     type: "memory",
//   },
//   region: "us",
// });
// const { data } = await Storyblok.get("cdn/stories/teaser", {});

// export const useCommonAssetsStore = defineStore("common", {
//   state: () => {
//     return {
//       teaserVideo: data.story.content.embedLink,
//     };
//   },
// });

import { defineStore } from "pinia";
import StoryblokClient from "storyblok-js-client";

const Storyblok = new StoryblokClient({
  accessToken: "EnRhwF6FbbFy29gtg3NYhQtt",
  cache: {
    clear: "auto",
    type: "memory",
  },
  region: "us",
});

export const useCommonAssetsStore = defineStore("common", {
  state: () => ({
    teaserVideo: null, // Initialize state as null
  }),
  actions: {
    async fetchTeaserVideo() {
      const { data } = await Storyblok.get("cdn/stories/teaser", {});
      this.teaserVideo = data.story.content.embedLink; // Update the state
    },
  },
});
