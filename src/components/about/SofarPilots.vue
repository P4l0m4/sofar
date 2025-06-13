<template>
  <section class="sofar-pilots">
    <img
      class="sofar-pilots__image"
      src="@/assets/images/our-story/sofar-pilots.webp"
      alt="sofar pilots"
    />
    <div class="sofar-pilots__text">
      <h3 class="sofar-pilots__text__title big-titles">Sofar Pilots</h3>
      <p class="sofar-pilots__text__paragraph subtitles">
        At Sofar, we take pride in our team of highly skilled, certified pilots
        who ensure every flight is safe, smooth, and exceptional. With extensive
        experience in private aviation, our pilots are committed to providing a
        luxurious and stress-free journey, whether you're flying for business or
        leisure.
      </p>
      <NuxtLink
        class="sofar-pilots__text__button button-primary--light"
        to="/blog#Testimonials"
        >Sofar team</NuxtLink
      >
    </div>
  </section>
</template>
<style lang="scss" scoped>
.sofar-pilots {
  display: flex;
  flex-direction: column;
  background-color: $secondary-color;
  min-height: 90vh;
  height: fit-content;
  align-items: center;
  color: $text-color-alt;
  gap: 2rem;

  @media (min-width: $big-tablet-screen) {
    gap: 2rem;
    flex-direction: row;
  }
  @media (min-width: $desktop-screen) {
    gap: 4rem;
  }

  &__image {
    width: 100%;
    height: 100%;
    min-height: 340px;
    background-image: url("@/assets/images/our-story/sofar-pilots.webp");
    object-fit: cover;
    object-position: center;

    @media (min-width: $big-tablet-screen) {
      width: 50%;
      height: 90vh;
    }
    @media (min-width: $desktop-screen) {
      width: 40%;
    }
  }

  &__text {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;

    @media (min-width: $big-tablet-screen) {
      gap: 2rem;
      padding: 2rem 0;
      width: 100%;
      max-width: 800px;
    }
    @media (min-width: $desktop-screen) {
      padding: 0 2rem;
    }

    &__title {
      width: fit-content;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      @media (min-width: $big-tablet-screen) {
        gap: 1rem;
      }
      &::after {
        content: "";
        display: block;
        width: 100%;
        height: 2px;
        background-color: $base-color-faded;
      }
    }

    &__paragraph {
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
}
</style>
