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
const { data } = await Storyblok.get("cdn/stories/teaser", {});

export const useCommonAssetsStore = defineStore("common", {
  state: () => {
    return {
      teaserVideo: data.story.content.embedLink,
    };
  },
});
