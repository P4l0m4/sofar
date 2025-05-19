<script setup lang="ts">
import { ref } from "vue";
import { colors } from "@/utils/colors";

const label = ref("Get in touch");

function copyToClipboard() {
  navigator.clipboard.writeText("hq@flysofar.com");
  label.value = "Email copied to clipboard!";
  setTimeout(() => {
    label.value = "Get in touch";
  }, 1000);
}

export type SpecsTuple = readonly [
  { icon: "target"; text: string }, // passenger capacity
  { icon: "seat"; text: string }, // operating range
  { icon: "airplane_takeoff"; text: string }, // endurance
];

defineProps<{
  specs: SpecsTuple;
  title: string;
  description: string;
}>();
</script>
<template>
  <section class="jet-specs">
    <div class="jet-specs__text">
      <h1 class="jet-specs__text__title titles">{{ title }}</h1>
      <p class="paragraphs">
        {{ description }}
      </p>
      <NuxtLink
        to="mailto:hq@flysofar.com"
        @click="copyToClipboard()"
        class="button-primary--light"
        style="width: fit-content; margin-top: 1rem"
      >
        {{ label }}</NuxtLink
      >
    </div>
    <div class="jet-specs__specs">
      <div
        class="jet-specs__specs__spec"
        v-for="spec in specs"
        :key="spec.icon"
      >
        <span class="jet-specs__specs__spec__icon"
          ><IconComponent
            :icon="spec.icon"
            size="2.5rem"
            :color="colors['secondary-color']" /></span
        >{{ spec.text }}
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.jet-specs {
  display: flex;
  flex-direction: column;
  background-color: $secondary-color;
  padding: 2rem 1rem;
  gap: 2rem;

  @media (min-width: $big-tablet-screen) {
    flex-direction: row;
    align-items: center;
    padding: 4rem;
    gap: 4rem;
  }

  &__text {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: $text-color-alt;
    width: 100%;

    @media (min-width: $big-tablet-screen) {
      gap: 2rem;
    }

    &__title {
      text-transform: uppercase;
    }
  }

  &__specs {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 2rem;

    &__spec {
      display: flex;
      gap: 1rem;
      font-size: $subtitles;
      color: $text-color-alt;
      align-items: center;

      &__icon {
        display: flex;
        padding: 2rem;
        justify-content: center;
        align-items: center;
        background-color: $base-color;
      }
    }
  }
}
</style>
