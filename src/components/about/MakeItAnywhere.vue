<template>
  <section class="make-it-anywhere">
    <h3 class="titles">Make it anywhere</h3>
    <p class="make-it-anywhere__text subtitles">
      Since 2019, Sofar has been redefining private jet travel by combining
      luxury, innovation, and personalized service. With bases in New York,
      Miami, and Los Angeles, we connect you to your destinations seamlessly and
      in style.
    </p>
    <NuxtLink
      class="make-it-anywhere__button button-primary--light"
      to="/about-us/our-story"
      >Our story</NuxtLink
    >
  </section>
</template>
<style lang="scss" scoped>
.make-it-anywhere {
  display: flex;
  background-image: url("@/assets/images/our-story/our-pilots-sofar.webp");
  background-position: center;
  background-size: cover;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  padding: 2rem 1rem;
  color: $text-color-alt;
  gap: 1rem;

  @media (min-width: $big-tablet-screen) {
    padding: 4rem 4rem;
    gap: 2rem;
  }

  &__text {
    max-width: 800px;
    text-wrap: balance;
  }

  &__button {
    margin-top: 1rem;
    @media (min-width: $tablet-screen) {
      margin-top: 2rem;
      width: fit-content;
    }
  }
}
</style>
