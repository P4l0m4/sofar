<template>
  <picture class="our-story-banner">
    <source
      media="(min-width: 1100px)"
      srcset="@/assets/images/our-story/our-story-desktop-banner.webp"
    />
    <div class="our-story-banner__headlines">
      <h1 class="our-story-banner__headlines__title titles">Our story</h1>
      <h2 class="our-story-banner__headlines__subtitle subtitles">
        Learn more about our journey and our team
      </h2>
    </div>
    <img
      class="our-story-banner__img"
      src="@/assets/images/our-story/our-story-desktop-banner.webp"
      alt="our story banner image"
    />
  </picture>
  <HomeWelcomeToSofar />
  <AboutTimeline />
</template>
<style scoped lang="scss">
.our-story-banner {
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
</style>
