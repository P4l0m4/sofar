<script setup lang="ts">
const qualities = [
  {
    title: "Expert pilots",
    txt: "Expert pilots, passionate about precision and your travel experience.",
  },
  {
    title: "Flexible schedules",
    txt: "Save valuable time and enjoy flexible schedules tailored to your needs and agenda.",
  },
  {
    title: "Unrivalled reliability",
    txt: "Travel with confidence on our aircraft of unrivalled reliability, where safety and peace of mind define every flight.",
  },
  {
    title: "24/7 Availability",
    txt: "Our team is available 24/7 to cater to your needs, fostering a close and attentive relationship, and always striving to fulfill your requests.",
  },
  {
    title: "Tailored journey",
    txt: "From travel essentials to specialized gear, our flexible luggage policy ensures your journey is tailored to your passions and preferences.",
  },
  {
    title: "Seamless journey",
    txt: "Sofar's private jets ensure access to convenient regional airports, saving time and money on ground transportation for a seamless journey.",
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
          <div class="why-fly-with-sofar__main-part__qualities__element__txt">
            <p
              v-if="argument.txt"
              class="why-fly-with-sofar__main-part__qualities__element__txt__paragraph paragraphs"
            >
              {{ argument.txt }}
            </p>
          </div>
        </div>
      </div>
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
  min-height: 100svh;
  background-size: cover;
  background-position: center;
  position: relative;
  background-color: $secondary-color;

  @media (min-width: $big-tablet-screen) {
    gap: 4rem;
    padding: 2rem;
    flex-direction: row;
  }

  &__main-part {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100% !important;
    height: fit-content;
    padding: 1rem 0;

    @media (min-width: $big-tablet-screen) {
      gap: 2rem;
      width: 70%;
    }
    &__title {
      width: fit-content;

      color: $text-color-alt;
      margin-bottom: 2rem;
    }

    &__qualities {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 3rem;
      height: fit-content;

      @media (min-width: $big-tablet-screen) {
        grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
      }

      &__element {
        display: flex;
        width: 100%;
        height: fit-content;
        color: $text-color-alt;
        position: relative;

        @media (min-width: $tablet-screen) {
          &:nth-of-type(1),
          &:nth-of-type(2),
          &:nth-of-type(3),
          &:nth-of-type(4) {
            height: 100px;

            &::after {
              content: "";
              display: block;
              width: 100%;
              height: 2px;
              background-color: $base-color-faded;
              position: absolute;
              bottom: -2rem;
            }
          }
          &:nth-of-type(3),
          &:nth-of-type(4),
          &:nth-of-type(5),
          &:nth-of-type(6) {
            margin-top: 4rem;
          }
        }

        @media (min-width: $desktop-screen) {
          &:nth-of-type(1),
          &:nth-of-type(2),
          &:nth-of-type(3) {
            height: 100px;
            margin-top: 0;

            &::after {
              content: "";
              display: block;
              width: 100%;
              height: 2px;
              background-color: $base-color-faded;
              position: absolute;
              bottom: -2rem;
            }
          }
          &:nth-of-type(4),
          &:nth-of-type(5),
          &:nth-of-type(6) {
            margin-top: 4rem;

            &::after {
              content: "";
              display: none;
            }
          }
        }

        &__txt {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          width: 100%;

          &__title {
            width: fit-content;
            text-shadow: $shadow-text;
            font-size: 1rem;
            font-size: $subtitles;
          }

          &__paragraph {
            text-wrap: balance;
          }
        }
      }
    }
  }
}
</style>
