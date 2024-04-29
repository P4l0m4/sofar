<script setup lang="ts">
import { stringToSlug } from "~/utils/slugify";
const story = await useAsyncStoryblok("destinations", { version: "published" });
const route = useRoute();
const citySlug = route.params.city;
const stateSlug = route.params.state;

const state = story.value.content.statesList.find(
  (s) => `${stringToSlug(s.country)}-${stringToSlug(s.name)}` === stateSlug
);

const city = state.destinationsList.find(
  (d) => stringToSlug(d.city) === citySlug
);
</script>
<template>
  <picture class="city-banner">
    <source media="(min-width: 1100px)" :srcset="city.bannerImage.filename" />
    <div class="city-banner__headlines">
      <h1 class="city-banner__headlines__title titles">
        Fly to {{ city.city }}
      </h1>
      <h1 class="city-banner__headlines__subtitle subtitles">
        Choose your destination
      </h1>
    </div>

    <img
      class="city-banner__img"
      :src="city.previewImage.filename"
      :alt="city.previewImage.alt"
    />
  </picture>
  <section class="city-description">
    <div class="city-description__txt">
      <h2 class="titles">{{ city.city }}</h2>
      <p class="paragraphs">{{ city.description }}</p>
      <QuotePopUpButton
        :label="`Fly to ${city.city}`"
        color="#fffdfa"
        :primary="true"
      />
    </div>
    <img
      class="city-description__img"
      :src="city.descriptionImage.filename"
      :alt="city.descriptionImage.alt"
    />
  </section>

  <section class="points-of-interest" v-if="city.pointsOfInterest.length > 0">
    <NuxtLink
      v-for="element in city.pointsOfInterest"
      :key="element.name"
      class="points-of-interest__point-of-interest"
      :to="element.link"
      :style="{ backgroundImage: `url(${element.picture.filename})` }"
    >
      <div class="points-of-interest__point-of-interest__headlines">
        <h3 class="titles">
          {{ element.name }}
        </h3>
        <p class="paragraphs">
          {{ element.details }}
        </p>
        <NuxtLink class="button-primary" :to="element.link" target="_blank">
          Know more
        </NuxtLink>
      </div>
    </NuxtLink>
  </section>
</template>
<style scoped lang="scss">
.city-banner {
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

.city-description {
  display: flex;
  flex-direction: column;
  background-color: $text-color;
  width: 100%;

  @media (min-width: $big-tablet-screen) {
    flex-direction: row;
    height: 100svh;
  }

  &__txt {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: $text-color-alt;
    padding: 2rem 1rem;
    justify-content: center;
    @media (min-width: $big-tablet-screen) {
      padding: 4rem 2rem;
      width: 50%;
      min-width: 50%;
      max-width: 50%;
    }

    & .paragraphs {
      margin-bottom: 1rem;
      text-wrap: balance;
    }
  }

  &__img {
    width: 100%;
    height: auto;
    object-fit: cover;
    object-position: center;

    @media (min-width: $big-tablet-screen) {
      width: 50%;
      min-width: 50%;
      max-width: 50%;
    }
  }
}

.points-of-interest {
  display: flex;
  gap: 1rem;
  padding: 2rem 1rem;
  background-color: $text-color;
  overflow-x: scroll;
  height: 60svh;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: $big-tablet-screen) {
    gap: 2rem;
    padding: 4rem 2rem;
    height: 100svh;
  }

  &__point-of-interest {
    border-radius: $radius;
    overflow: hidden;
    display: flex;
    gap: 1rem;
    flex-direction: column;
    justify-content: end;
    width: 100%;
    min-width: 300px;
    background-color: $primary-color;
    background-size: cover;
    background-position: top;
    position: relative;
    height: 100%;

    @media (min-width: $big-tablet-screen) {
      gap: 2rem;
    }

    &::after {
      content: "";
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(90deg, $text-color, transparent 60%);
    }

    &__headlines {
      z-index: 1;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 1rem;
      justify-content: space-between;
      color: $text-color-alt;
      height: 60%;
      max-height: 60%;
      min-height: 60%;

      @media (min-width: $big-tablet-screen) {
        height: 40%;
        max-height: 40%;
        min-height: 40%;
      }

      & .titles {
        text-shadow: $shadow-text;
      }
      & .paragraphs {
        height: 100%;
        text-shadow: $shadow-text;
      }

      & .button-primary {
        color: $text-color;
        border: 1px solid $text-color-alt;
        background-color: $primary-color;
      }
    }
  }
}
</style>
