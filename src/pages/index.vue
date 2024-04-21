<script setup>
const carouselElements = [
  {
    link: "/aircraft/phenom-100",
    image: "/assets/images/100.webp",
    label: "Phenom 100",
  },
  {
    link: "/aicraft/phenom-300",
    image: "/assets/images/300.webp",
    label: "Phenom 300",
  },
  {
    link: "/aircraft/pc12",
    image: "/assets/images/12.webp",
    label: "Pilatus PC 12",
  },
];
</script>
<template>
  <picture class="index__banner">
    <source
      media="(min-width: 1100px)"
      srcset="@/assets/images/landscape.webp"
    />
    <div class="index__banner__headlines">
      <NuxtLink class="index__banner__headlines__logo" to="/">
        <img src="@/assets/images/logo-light.svg"
      /></NuxtLink>

      <h1 class="index__banner__headlines__title titles">
        Private Jet Charter
      </h1>
    </div>

    <QuoteForm />

    <img
      class="index__banner__img"
      src="@/assets/images/landscape-mobile.webp"
      alt="banner image"
    />
    <h2 class="index__banner__subtitle subtitles">Make It Anywhere</h2></picture
  >
  <HomeWelcomeToSofar />
  <OurBases />

  <HomeOurBirds />
  <h2 class="fleet titles">SoFar Fleet</h2>
  <CarouselComponent :carouselElements="carouselElements" />
  <HomeWhyFlyWithSofar />

  <ClientReviews />
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

    &__logo {
      width: fit-content;
      height: fit-content;

      & img {
        width: 120px;
        height: 60px;

        @media (min-width: $big-tablet-screen) {
          width: 200px;
          height: 90px;
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

.fleet {
  padding: 2rem 1rem;
  padding-bottom: 0;
  @media (min-width: $big-tablet-screen) {
    padding: 4rem 2rem;
    padding-bottom: 0;
  }
}
</style>
