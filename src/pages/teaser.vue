<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import duration from "dayjs/plugin/duration";
dayjs.extend(relativeTime);
dayjs.extend(duration);

const story = await useAsyncStoryblok("teaser", { version: "published" });

const targetDate = dayjs(story.value.content.releaseDate);

// Countdown function
const countdown = ref({ days: 0, hours: 0, minutes: 0, seconds: 0 });

// Function to update the countdown
function updateCountdown() {
  const now = dayjs();
  const diff = targetDate.diff(now); // Difference in milliseconds
  const duration = dayjs.duration(diff);

  countdown.value = {
    days: Math.floor(duration.asDays()),
    hours: duration.hours(),
    minutes: duration.minutes(),
    seconds: duration.seconds(),
  };
}

// Start and stop the countdown interval
let interval: number;
onMounted(() => {
  if (!story.value.content.releaseDate) return; // Don't start countdown if no release date
  updateCountdown(); // Initialize immediately
  interval = window.setInterval(updateCountdown, 1000); // Update every second
});

onUnmounted(() => {
  clearInterval(interval); // Clean up interval on component unmount
});

useHead({
  title: `Teaser | ${story.value.content.title}`,
  meta: [
    {
      name: "description",
      content: story.value.content.subtitle,
    },
  ],
});
</script>
<template>
  <picture class="index__banner">
    <source
      v-if="story.content.bannerImageDesktop.filename"
      media="(min-width: 1100px)"
      :srcset="story.content.bannerImageDesktop.filename"
    />

    <div
      class="index__banner__headlines"
      v-if="story.content.title || story.content.subtitle"
    >
      <h1 v-if="story.content.title" class="index__banner__title titles">
        {{ story.content.title }}
      </h1>
      <h2
        v-if="story.content.subtitle"
        class="index__banner__headlines__subtitle subtitles"
      >
        {{ story.content.subtitle }}
      </h2>
    </div>

    <img
      v-if="story.content.bannerImageMobile.filename"
      class="index__banner__img"
      :src="story.content.bannerImageMobile.filename"
      :alt="story.content.bannerImageMobile.alt"
    />
  </picture>
  <section class="image-with-text">
    <div
      class="image-with-text__text"
      v-if="
        story.content.firstSectionTitle || story.content.firstSectionParagraph
      "
    >
      <h3 v-if="story.content.firstSectionTitle" class="subtitles">
        {{ story.content.firstSectionTitle }}
      </h3>
      <p v-if="story.content.firstSectionParagraph" class="paragraphs">
        {{ story.content.firstSectionParagraph }}
      </p>
    </div>
    <img
      v-if="story.content.firstSectionImage.filename"
      class="image-with-text__full-width-image"
      :src="story.content.firstSectionImage.filename"
      :alt="story.content.firstSectionImage.alt"
    />
  </section>
  <section
    class="teaser"
    v-if="story.content.videoText || story.content.embedLink"
  >
    <p v-if="story.content.videoText" class="teaser__text paragraphs">
      {{ story.content.videoText }}
    </p>
    <iframe
      v-if="story.content.embedLink"
      class="teaser__video"
      :src="story.content.embedLink"
      allowfullscreen
    ></iframe>
  </section>
  <section class="release">
    <h3 v-if="story.content.releaseTitle" class="subtitles">
      {{ story.content.releaseTitle }}
    </h3>
    <p
      v-if="story.content.releaseSubtitle"
      class="release__subtitle paragraphs"
    >
      {{ story.content.releaseSubtitle }}
    </p>
    <div class="release__countdown" v-if="story.content.releaseDate">
      <div class="release__countdown__wrapper">
        <span class="titles">{{ countdown.days }}</span>
        <span>Days</span>
      </div>
      <div class="release__countdown__wrapper">
        <span class="titles">{{ countdown.hours }}</span>
        <span>Hours</span>
      </div>
      <div class="release__countdown__wrapper">
        <span class="titles">{{ countdown.minutes }}</span>
        <span>Minutes</span>
      </div>
      <div class="release__countdown__wrapper">
        <span class="titles">{{ countdown.seconds }}</span>
        <span>Seconds</span>
      </div>
    </div>
  </section>
  <EmptysForm />
  <section class="image-with-text">
    <img
      v-if="story.content.secondSectionImage.filename"
      class="image-with-text__full-width-image"
      :src="story.content.secondSectionImage.filename"
      :alt="story.content.secondSectionImage.alt"
    />
    <div
      class="image-with-text__text"
      v-if="
        story.content.secondSectionTitle || story.content.secondSectionParagraph
      "
    >
      <h3 v-if="story.content.secondSectionTitle" class="subtitles">
        {{ story.content.secondSectionTitle }}
      </h3>
      <p v-if="story.content.secondSectionParagraph" class="paragraphs">
        {{ story.content.secondSectionParagraph }}
        <NuxtLink
          :to="story.content.secondSectionButtonLink"
          class="button-primary--dark"
          style="width: fit-content"
          :aria-label="story.content.secondSectionButtonLabel"
          v-if="
            story.content.secondSectionButtonLabel &&
            story.content.secondSectionButtonLink
          "
          >{{ story.content.secondSectionButtonLabel }}</NuxtLink
        >
      </p>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.index__banner {
  display: flex;
  background-size: cover;
  background-position: center;
  min-height: 100svh;
  max-height: 800px;
  width: 100%;
  padding: 1rem;
  padding-bottom: 3rem;
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
    opacity: 0.5;
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

.image-with-text {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 4rem 0 4rem 0;

  &__full-width-image {
    width: 100%;
    height: 25dvh;
    object-fit: cover;
    object-position: center;

    @media (min-width: $big-tablet-screen) {
      height: 70dvh;
    }
  }

  &__text {
    padding: 1rem;
    display: flex;
    gap: 2rem;
    flex-direction: column;
    justify-content: space-between;
    color: $black-color;

    @media (min-width: $big-tablet-screen) {
      gap: 4rem;
      flex-direction: row;
      padding: 2rem;
      padding-right: 14vw;
    }

    & .subtitles {
      font-weight: $thick;
      display: flex;
      flex-direction: column;
      width: 100%;
      max-width: 700px;
    }

    & .paragraphs {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      list-style-position: inside;

      @media (min-width: $big-tablet-screen) {
        width: 50%;
        gap: 2rem;
      }
    }
  }
}

.teaser {
  display: flex;

  padding: 4rem 1rem 4rem 1rem;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: $big-tablet-screen) {
    gap: 4rem;
    padding: 4rem 2rem 4rem 2rem;
  }

  &__text {
    color: $black-color;
    padding-right: 14vw;
  }

  &__video {
    width: 100%;
    height: 70dvh;

    @media (min-width: $big-tablet-screen) {
      height: 100dvh;
    }
  }
}

.release {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 4rem 1rem 4rem 1rem;

  @media (min-width: $big-tablet-screen) {
    padding: 4rem 2rem 4rem 2rem;
  }

  &__subtitle {
    color: $black-color;
  }

  &__countdown {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-top: 2rem;

    &__wrapper {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      text-align: center;
      justify-content: center;
    }
  }
}
</style>
