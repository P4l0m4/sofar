<script setup lang="ts">
const steps = [
  {
    title: "Request quote online",
    description:
      "Provide your information, departure, arrival, passengers, time...",
  },
  {
    title: "Contact",
    description:
      "our sales team will contact you to define your exact requirements (aircraft type, budget...)",
  },
  {
    title: "Quote",
    description: "We provide a solution for your journey",
  },
  {
    title: "Booking Confirmation",
    description:
      "Finalize the booking and handle all logistics (ground transportation or catering)",
  },
];
</script>
<template>
  <section class="request-process">
    <h3 class="subtitles">Request process with Sofar</h3>
    <div class="request-process__steps">
      <div class="request-process__steps__step" v-for="(step, i) in steps">
        <span class="request-process__steps__step__circle">{{ i + 1 }}</span>
        <h4 class="request-process__steps__step__title subtitles">
          {{ step.title }}
        </h4>
        <p class="request-process__steps__step__description">
          {{ step.description }}
        </p>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.request-process {
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
  gap: 2rem;
  align-items: center;
  background-color: $secondary-color;
  color: $text-color-alt;

  @media (min-width: $big-tablet-screen) {
    padding: 4rem 2rem;
    gap: 4rem;
  }

  @media (min-width: $big-tablet-screen) {
    padding: 4rem;
  }

  &__steps {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    gap: 2rem;

    &::after {
      content: "";
      display: block;
      width: 2px;
      top: 2rem;
      left: 2rem;
      right: 2rem;
      margin: auto;
      height: 74%;
      background-color: $base-color-faded;
      position: absolute;
    }

    @media (min-width: $big-tablet-screen) {
      flex-direction: row;
      align-items: start;

      &::after {
        content: "";
        display: block;
        width: 74%;
        top: 1.75rem;
        left: 2rem;
        right: 2rem;
        margin: auto;
        height: 2px;
        background-color: $base-color-faded;
        position: absolute;
      }
    }

    &__step {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;

      &__circle {
        display: flex;
        align-items: center;
        justify-content: center;
        color: $text-color;
        background-color: $base-color;
        font-size: 1.25rem;
        font-weight: $thick;
        border-radius: 50%;
        width: 60px;
        min-width: 60px;
        height: 60px;
        min-height: 60px;
        padding-top: 0.4rem;
        z-index: 1;
      }

      &__title {
        text-align: center;
        background-color: $secondary-color;
        z-index: 1;
      }

      &__description {
        text-align: center;
        text-wrap: balance;
        max-width: 400px;
        background-color: $secondary-color;
        z-index: 1;
        margin-top: -1rem;

        @media (min-width: $big-tablet-screen) {
          margin-top: 0;
        }
      }
    }
  }
}
</style>
