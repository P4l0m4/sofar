import { stringToSlug } from "./slugify.js";
const StoryblokClient = require("storyblok-js-client");
// import StoryblokClient from "storyblok-js-client";

const Storyblok = new StoryblokClient({
  accessToken: "EnRhwF6FbbFy29gtg3NYhQtt",
  cache: {
    clear: "auto",
    type: "memory",
  },
});

export async function getNews() {
  const { data } = await Storyblok.get("cdn/stories/blog", {});

  const articles = data.story.content.articles;
  console.log(articles);
  return articles.map((article) => ({
    loc: `/about-us/blog/${stringToSlug(article.title)}`,
    changefreq: "daily",
    priority: 0.9,
  }));
}

export async function getStates() {
  const { data } = await Storyblok.get("cdn/stories/destinations", {});

  const states = data.story.content.statesList;

  return states.map((state) => ({
    loc: `/destinations/${stringToSlug(state.country)}-${stringToSlug(
      state.name
    )}`,
    changefreq: "daily",
    priority: 0.9,
  }));
}

export async function getCities() {
  const { data } = await Storyblok.get("cdn/stories/destinations", {});
  const states = data.story.content.statesList;

  const cities = [];

  for (const state of states) {
    const stateDestinations = state.destinationsList.map((destination) => ({
      loc: `/destinations/${stringToSlug(state.country)}-${stringToSlug(
        state.name
      )}/${stringToSlug(destination.city)}`,
      changefreq: "daily",
      priority: 0.9,
    }));

    cities.push(...stateDestinations);
  }

  return cities;
}
