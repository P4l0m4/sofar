<script setup lang="ts">
import { stringToSlug } from "~/utils/slugify";
const story = await useAsyncStoryblok("destinations", { version: "published" });
const route = useRoute();
const stateSlug = route.params.state;

const state = story.value.content.statesList.find(
  (s: { country: any; name: any }) =>
    `${stringToSlug(s.country)}-${stringToSlug(s.name)}` === stateSlug
);

useHead({
  title: `Private Jet Destinations: ${state.name} | Sofar`,
  meta: [
    {
      name: "description",
      content: `${state.description}`,
    },
  ],
});

useJsonld(() => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: `Private Jet Destinations: ${state.name} | Sofar`,
  url: window.location.href,
}));
</script>
<template>
  <picture class="state-banner">
    <source
      media="(min-width: 1100px)"
      :srcset="state.desktopBanner.filename"
    />
    <div class="state-banner__headlines">
      <h1 class="state-banner__headlines__title titles">
        Fly to {{ state.name }}
      </h1>
      <h2 class="state-banner__headlines__subtitle subtitles">
        Choose your destination
      </h2>
    </div>

    <img
      class="state-banner__img"
      :src="state.mobileBanner.filename"
      :alt="state.mobileBanner.alt"
    />
  </picture>
  <Container>
    <NuxtLink
      v-for="destination in state.destinationsList"
      class="destination"
      :to="`${stringToSlug(state.country)}-${stringToSlug(
        state.name
      )}/${stringToSlug(destination.city)}`"
    >
      <img
        class="destination__img"
        :src="destination.previewImage.filename"
        :alt="destination.previewImage.alt"
      />
      <div class="destination__headlines">
        <h1 class="titles">
          {{ destination.city }}
        </h1>
        <p class="paragraphs">
          {{ destination.description }}
        </p>
        <QuotePopUpButton :label="`Fly to ${destination.city}`" />
      </div>
    </NuxtLink>
  </Container>
</template>
<style lang="scss" scoped>
.state-banner {
  display: flex;
  background-size: cover;
  background-position: center;
  min-height: 100svh;
  max-height: 800px;
  width: 100%;
  padding: 1rem;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  position: relative;

  @media (min-width: $big-tablet-screen) {
    padding: 2rem;
    gap: 2rem;
  }
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    background-color: $text-color;
    z-index: -1;
  }
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(80deg, $text-color, transparent 60%);
    opacity: 0.2;
    z-index: -1;
  }

  & source {
    display: none;
  }

  &__headlines {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    z-index: 1;
    color: $text-color-alt;

    @media (min-width: $big-tablet-screen) {
      gap: 2rem;
    }

    &__title {
      display: flex;
      line-height: 4.5rem;
      color: $text-color-alt;
      height: fit-content;
      width: fit-content;
      font-size: 4rem;

      @media (min-width: $big-tablet-screen) {
        line-height: 6rem;
        font-size: 6rem;
      }
    }
  }
  &__subtitle {
    color: $text-color-alt;
    line-height: 1.6rem;
    position: absolute;
    inset: 2rem;
    bottom: inherit;
    margin: auto;
    width: fit-content;
    height: fit-content;
    opacity: 0.8;
    font-family: "Custom";
    font-weight: 100;
  }
  &__img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }
}
.destination {
  display: flex;
  gap: 1rem;
  flex-direction: column;
  width: 100%;

  @media (min-width: $big-tablet-screen) {
    gap: 2rem;
    flex-direction: row;
  }

  &__img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    max-width: 500px;
    @media (min-width: $big-tablet-screen) {
      min-width: 500px;
    }
  }

  &__headlines {
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
  }
}
</style>
