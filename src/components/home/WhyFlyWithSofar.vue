<script setup lang="ts">
const qualities = [
  {
    title: "Expert pilots",
    txt: "Expert pilots, passionate about precision and your travel experience.",
  },
  {
    title: "Unrivalled reliability",
    txt: "Travel with confidence on our aircraft of unrivalled reliability, where safety and peace of mind define every flight.",
  },
  {
    title: "Comfort and style",
    txt: "Fly in unparalleled comfort and style – comfort seats, curated refreshments, snacks, and WiFi at your fingertips. Elevate your travel experience.",
  },

  {
    title: "Tailored journey",
    txt: "From travel essentials to specialized gear, our flexible luggage policy ensures your journey is tailored to your passions and preferences.",
  },
  {
    title: "Flexible schedules",
    txt: "Save valuable time and enjoy flexible schedules tailored to your needs and agenda.",
  },
];
</script>
<template>
  <section class="why-fly-with-sofar">
    <div class="why-fly-with-sofar__main-part">
      <h2 class="why-fly-with-sofar__main-part__title titles">
        Why fly with Sofar ?
      </h2>

      <div class="why-fly-with-sofar__main-part__qualities">
        <div
          class="why-fly-with-sofar__main-part__qualities__element"
          v-for="argument in qualities"
        >
          <h3
            class="why-fly-with-sofar__main-part__qualities__element__title subtitles"
          >
            {{ argument.title }}
          </h3>
          <p
            class="why-fly-with-sofar__main-part__qualities__element__txt paragraphs"
          >
            {{ argument.txt }}
          </p>
        </div>
      </div>
    </div>
    <div class="why-fly-with-sofar__gallery">
      <img
        class="why-fly-with-sofar__gallery__img"
        src="@/assets/images/logo-dark.svg"
        alt="private jet clouds background"
      />
      <img
        class="why-fly-with-sofar__gallery__img"
        src="@/assets/images/pilot.webp"
        alt="private jet clouds background"
      />
      <img
        class="why-fly-with-sofar__gallery__img"
        src="@/assets/images/seats.webp"
        alt="private jet clouds background"
      />

      <img
        class="why-fly-with-sofar__gallery__img"
        src="@/assets/images/seats2.webp"
        alt="private jet clouds background"
      />
    </div>
  </section>
</template>
<style lang="scss" scoped>
.why-fly-with-sofar {
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  height: 100svh;
  max-height: 800px;

  @media (min-width: $big-tablet-screen) {
    gap: 4rem;
    padding: 2rem;
    flex-direction: row;
  }

  &__main-part {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    max-width: 760px;
    height: fit-content;

    @media (min-width: $big-tablet-screen) {
      gap: 2rem;
      width: 60%;
    }

    &__qualities {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      height: fit-content;

      &__element {
        display: flex;
        flex-direction: column;
        height: fit-content;
        &__title {
          width: fit-content;
          white-space: nowrap;
        }
        &__txt {
          text-wrap: balance;
        }
      }
    }
  }

  &__gallery {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    height: 100%;

    @media (min-width: $big-tablet-screen) {
      width: 40%;
    }

    &__img {
      width: 100%;
      height: 100%;
      object-fit: cover;

      &:nth-of-type(1) {
        object-fit: contain;
        grid-row: span 1;
      }
      &:nth-of-type(2) {
        border-radius: calc($radius * 3) 0 calc($radius * 3) 0;
        grid-row: span 2;
        object-position: left;
      }
      &:nth-of-type(3) {
        border-radius: calc($radius * 3) 0 calc($radius * 3) 0;
        grid-row: span 3;
      }

      &:nth-of-type(4) {
        border-radius: 0 calc($radius * 3) 0 calc($radius * 3);
        grid-row: span 2;
      }
    }
  }
}
</style>
