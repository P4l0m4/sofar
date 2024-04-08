<script setup>
const carouselElements = [
  {
    link: "/aircraft/phenom-100",
    image: "100",
    label: "Phenom 100",
  },
  {
    link: "/aicraft/phenom-300",
    image: "300",
    label: "Phenom 300",
  },
  {
    link: "/aircraft/pc-12",
    image: "12",
    label: "Pilatus PC 12",
  },
];
</script>
<template>
  <picture class="index__banner">
    <source
      media="(min-width: 1100px)"
      srcset="@/assets/images/landscape.webp" />
    <div class="index__banner__headlines">
      <NuxtLink to="/">
        <img
          class="index__banner__headlines__logo"
          src="@/assets/images/logo-light.svg"
      /></NuxtLink>
      <h1 class="index__banner__headlines__title titles">MAKE IT ANYWHERE</h1>
    </div>
    <QuoteForm />

    <img
      class="index__banner__img"
      src="@/assets/images/landscape-mobile.webp"
      alt="banner image"
  /></picture>
  <HomeWelcomeToSofar />
  <OurBases />
  <HomeOurBirds />
  <CarouselComponent :carouselElements="carouselElements" />
  <HomeWhyFlyWithSofar />
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
    align-items: center;
    gap: 1rem;
    z-index: 1;
    color: $text-color-alt;

    @media (min-width: $big-tablet-screen) {
      gap: 2rem;
      align-items: end;
    }

    &__logo {
      width: 70px;

      @media (min-width: $big-tablet-screen) {
        width: 200px;
      }
    }

    &__title {
      // white-space: nowrap;
      display: flex;
      height: fit-content;
      line-height: 2.5rem;

      @media (min-width: $big-tablet-screen) {
        line-height: 1.5rem;
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
</style>
