<template>
  <picture class="our-birds">
    <source media="(min-width: 1100px)" srcset="@/assets/images/birds2.webp" />

    <h2 class="our-birds__title titles">Our Birds</h2>
    <p class="our-birds__text subtitles">
      We understand cancellation is never fun.
    </p>
    <p class="our-birds__text paragraphs">
      We chose the most reliable on the market. Come fly on a smaller fleet of
      efficient aircraft. Pilatus PC-12s, Phenom 100, Phenom 300. Three names in
      the industry known for their dispatch rate.
    </p>

    <div class="our-birds__buttons">
      <NuxtLink class="button-primary--dark" to="/aircraft"
        >Learn more about our aircraft</NuxtLink
      >
      <QuotePopUpButton :style="`dark`" />
    </div>

    <img
      class="our-birds__img"
      src="@/assets/images/our-birds-sofar-jet-charter-mobile.webp"
      alt="banner image"
  /></picture>
</template>
<style lang="scss" scoped>
.our-birds {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem 1rem;
  width: 100%;
  height: 100svh;
  max-height: 800px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    // background-image: linear-gradient(80deg, $text-color, transparent 60%);
    background-image: linear-gradient(120deg, $primary-color, transparent 60%);
    // opacity: 0.1;
    z-index: -1;
  }

  @media (min-width: $big-tablet-screen) {
    padding: 4rem 2rem;
    gap: 2rem;
    background-position: right 2rem top 2rem;
  }

  & source {
    display: none;
  }

  &__img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 70%;
    z-index: -1;
  }

  &__title {
    color: $text-color;
  }
  &__text {
    color: $text-color;
    text-wrap: balance;
    @media (min-width: $laptop-screen) {
      max-width: calc(100% - 160px);
    }
  }

  &__buttons {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    margin-top: auto;

    @media (min-width: $big-tablet-screen) {
      flex-direction: row;
      margin-top: 2rem;
    }

    .button-primary--light {
      @media (min-width: $big-tablet-screen) {
        width: fit-content;
      }
    }
  }
}
</style>
