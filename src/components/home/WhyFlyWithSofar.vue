<script setup lang="ts">
const qualities = [
  {
    img: "award_star",
    title: "Expert pilots",
    txt: "Expert pilots, passionate about precision and your travel experience.",
  },
  {
    img: "health_and_safety",
    title: "Unrivalled reliability",
    txt: "Travel with confidence on our aircraft of unrivalled reliability, where safety and peace of mind define every flight.",
  },
  {
    img: "flight_class",
    title: "Comfort and style",
    txt: "Fly in unparalleled comfort and style – comfort seats, curated refreshments, snacks, and WiFi at your fingertips. Elevate your travel experience.",
  },

  {
    img: "straighten",
    title: "Tailored journey",
    txt: "From travel essentials to specialized gear, our flexible luggage policy ensures your journey is tailored to your passions and preferences.",
  },
  {
    img: "connecting_airports_light",
    title: "Flexible schedules",
    txt: "Save valuable time and enjoy flexible schedules tailored to your needs and agenda.",
  },
];
</script>
<template>
  <section class="why-fly-with-sofar">
    <div class="why-fly-with-sofar__main-part">
      <h2 class="why-fly-with-sofar__main-part__title titles">
        Why fly with Sofar
      </h2>

      <div class="why-fly-with-sofar__main-part__qualities">
        <div
          class="why-fly-with-sofar__main-part__qualities__element"
          v-for="argument in qualities"
        >
          <span class="why-fly-with-sofar__main-part__qualities__element__img"
            ><img :src="`/assets/icons/${argument.img}.svg`"
          /></span>
          <div class="why-fly-with-sofar__main-part__qualities__element__txt">
            <h3
              class="why-fly-with-sofar__main-part__qualities__element__txt__title subtitles"
            >
              {{ argument.title }}
            </h3>
            <p
              class="why-fly-with-sofar__main-part__qualities__element__txt__paragraph paragraphs"
            >
              {{ argument.txt }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="masked-image"></div>
  </section>
</template>
<style lang="scss" scoped>
.masked-image {
  background-repeat: no-repeat;
  -webkit-mask-image: url("@/assets/images/logo-light-vertical.svg");
  mask-image: url("@/assets/images/logo-light-vertical.svg");
  mask-size: contain;
  mask-repeat: no-repeat;
  background-color: $base-color;
  width: 400px;
  height: 100%;
  transform: rotate(180deg);
  opacity: 0.5;
}
.why-fly-with-sofar {
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  min-height: 100svh;
  // max-height: 800px;
  background-image: url("@/assets/images/why-fly-with-sofar.webp");
  background-size: cover;
  background-position: center;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(80deg, $text-color, transparent 60%);
    opacity: 0.4;
  }

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
    z-index: 1;
    padding: 1rem 0;

    @media (min-width: $big-tablet-screen) {
      gap: 2rem;
      width: 70%;
    }
    &__title {
      width: fit-content;
      white-space: nowrap;
      color: $text-color-alt;
    }

    &__qualities {
      display: flex;
      gap: 1rem;
      height: fit-content;
      flex-direction: column;

      &__element {
        display: flex;
        height: fit-content;
        align-items: center;
        color: $text-color-alt;
        gap: 1rem;

        &__img {
          width: 40px;
          min-width: 40px;
          height: 40px;

          & img {
            width: 100%;
            height: 100%;
          }
        }

        &__txt {
          display: flex;
          flex-direction: column;

          &__title {
            width: fit-content;
            text-shadow: $shadow-text;
          }

          &__paragraph {
            text-wrap: balance;
            text-shadow: $shadow-text;
          }
        }
      }
    }
  }
}
</style>
