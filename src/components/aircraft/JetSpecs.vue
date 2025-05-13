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

const specs = [
  {
    icon: "target",
    text: "Up to 8 passengers",
  },
  {
    icon: "seat",
    text: "Up to 2000 range",
  },
  {
    icon: "airplane_takeoff",
    text: "Up to 4 hour flights",
  },
];
</script>
<template>
  <section class="jet-specs">
    <div class="jet-specs__text">
      <h1 class="titles">Light Jets</h1>
      <p class="paragraphs">
        Light jets are the perfect balance between luxury and practicality,
        offering speed, agility, and affordability for short-haul private
        flights. Ideal for business executives, weekend getaways, and regional
        travel, light jets provide a seamless flying experience with access to
        smaller airports and reduced operating costs.
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
