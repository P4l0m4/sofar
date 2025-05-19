<script setup lang="ts">
import { colors } from "@/utils/colors";

const factors = [
  {
    text: "Distance & Flight Time – Short, medium, or long-haul trips?",
    icon: "airplane_takeoff",
  },
  {
    text: "Passenger Capacity – Flying solo, with family, or in a corporate team?",
    icon: "seat",
  },
  {
    text: "Budget & Comfort Level – Looking for efficiency or ultimate luxury?",
    icon: "target",
  },
  {
    text: "Luggage Requirements – Bringing extra luggage, golf clubs, or ski gear?",
    icon: "weight",
  },
];

const label = ref("Get in touch");

function copyToClipboard() {
  navigator.clipboard.writeText("hq@flysofar.com");
  label.value = "Email copied to clipboard!";
  setTimeout(() => {
    label.value = "Get in touch";
  }, 1000);
}
</script>
<template>
  <section class="how-to-choose">
    <div class="how-to-choose__text">
      <h2 class="titles">How to Choose the Right Private Jet?</h2>
      <h3 class="subtitles">Not sure which jet suits your needs?</h3>
      <span>Consider these factors:</span>
      <ul class="how-to-choose__text__factors">
        <li
          class="how-to-choose__text__factors__factor"
          v-for="factor in factors"
          :key="factor.text"
        >
          <IconComponent
            :icon="factor.icon"
            :color="colors['primary-color']"
            size="1.5rem"
          />
          <span class="how-to-choose__text__factors__factor__text">{{
            factor.text
          }}</span>
        </li>
      </ul>
    </div>
    <div class="how-to-choose__our-team">
      <p class="how-to-choose__our-team__disclaimer">
        Our team is here to help you find the perfect jet for your trip!
      </p>
      <NuxtLink
        to="mailto:hq@flysofar.com"
        @click="copyToClipboard()"
        class="button-primary--dark"
      >
        {{ label }}</NuxtLink
      >
    </div>
  </section>
</template>
<style lang="scss" scoped>
.how-to-choose {
  display: flex;
  flex-direction: column;
  background-color: $secondary-color;
  min-height: 100svh;
  align-items: center;

  @media (min-width: $big-tablet-screen) {
    flex-direction: row;
  }

  &__text {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem 1rem;
    color: $text-color-alt;
    width: 100%;

    @media (min-width: $big-tablet-screen) {
      padding: 2rem;
    }

    &__factors {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      &__factor {
        display: flex;
        gap: 0.5rem;
        align-items: center;
      }
    }
  }

  &__our-team {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    height: 100%;
    min-height: 100svh;
    background-color: $base-color;
    width: 100%;

    &__disclaimer {
      text-align: center;
      text-wrap: balance;
      font-size: 2rem;
      font-weight: $skinny-thick;
    }
  }
}
</style>
