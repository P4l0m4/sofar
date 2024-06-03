<script setup lang="ts">
import { stringToSlug } from "~/utils/slugify";
const story = await useAsyncStoryblok("destinations", { version: "published" });
const storyHome = await useAsyncStoryblok("home-page", {
  version: "published",
});

const destinations = computed(() => {
  return story.value.content.statesList.flatMap((state: State) => {
    return state.destinationsList.map((destination) => {
      return {
        ...destination,
        stateName: state.name,
        country: state.country,
      };
    });
  });
});

const destinationsCarouselElements = computed(() => {
  return destinations.value.map((destination: Destination) => {
    return {
      link: `/destinations/${stringToSlug(
        `${destination.country}-${destination.stateName}`
      )}/${stringToSlug(`${destination.city}`)}`,
      image: destination.previewImage.filename,
      label: `${destination.city}, ${destination.stateName}`,
      countryCode: destination.country,
    };
  });
});
const message = "%c 🌵TEKILAWEBFACTORY.COM🌵";
console.log(message, `color: #1EB2BC; font-weight: bold; font-size: 16px;`);

useHead({
  title: "Sofar, private jet charter services",
  meta: [
    {
      name: "description",
      content:
        "Sofar offers premium private jet charter services that are tailored to your needs. Whether you're flying for business or pleasure, our team of experts will ensure that your journey is smooth, comfortable, and stress-free. Contact us today to learn more about our private jet charter services.",
    },
  ],
});
</script>
<template>
  <picture class="index__banner">
    <source
      media="(min-width: 1100px)"
      :srcset="storyHome.content.bannerImageDesktop.filename"
    />
    <div class="index__banner__headlines">
      <NuxtLink class="index__banner__headlines__logo" to="/">
        <img src="@/assets/images/logo-light.svg"
      /></NuxtLink>
      <h2 class="index__banner__headlines__subtitle subtitles">
        Make It Anywhere ™
      </h2>
    </div>

    <h1 class="index__banner__title titles">Book your next flight with us!</h1>

    <QuoteForm parent="home" />

    <img
      class="index__banner__img"
      :src="storyHome.content.bannerImageMobile.filename"
      alt="banner image"
    />
  </picture>
  <HomeWelcomeToSofar />
  <OurBases />

  <HomeOurBirds />
  <section>
    <h2 class="section-title titles">Sofar Fleet</h2>
    <CarouselComponent />
  </section>
  <HomeWhyFlyWithSofar />

  <ClientReviews />
  <h2 class="section-title titles">Top Destinations</h2>
  <h3 class="section-subtitle subtitles">Book your next flight with us!</h3>
  <CarouselComponent :carouselElements="destinationsCarouselElements" />
  <BlogArticlesCarousel />
  <EmptysForm />
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
  justify-content: end;

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
    gap: 1rem;
    color: $text-color-alt;
    position: absolute;
    inset: 1rem;
    bottom: inherit;
    margin: auto;
    align-items: end;

    @media (min-width: $big-tablet-screen) {
      inset: 2rem;
      bottom: inherit;
      gap: 2rem;
    }

    &__logo {
      width: fit-content;
      height: fit-content;

      & img {
        width: 120px;
        height: 60px;

        @media (min-width: $big-tablet-screen) {
          width: 150px;
          height: 70px;
        }
      }
    }
    &__subtitle {
      color: $text-color-alt;
      line-height: 1.6rem;
      width: fit-content;
      height: fit-content;
      opacity: 0.8;
      font-family: "Custom";
      font-weight: 100;
      white-space: nowrap;

      @media (min-width: $big-tablet-screen) {
        gap: 2rem;
        display: flex;
        line-height: 1.4rem;
        justify-content: center;
        width: 100%;
      }
    }
  }
  &__title {
    // white-space: nowrap;
    display: flex;
    line-height: 2.5rem;
    color: $text-color-alt;
    height: fit-content;
    width: fit-content;

    @media (min-width: $big-tablet-screen) {
      line-height: 2rem;
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

.section-subtitle {
  padding: 1rem;
  padding-bottom: 0;
  @media (min-width: $big-tablet-screen) {
    padding: 1rem 2rem;
    padding-bottom: 0;
  }
}
</style>
