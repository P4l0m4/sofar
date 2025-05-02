<script setup lang="ts">
import { colors } from "@/utils/colors";
const perks = [
  {
    title: "No Membership Required",
    icon: "user-circle-cross-fill",
  },
  {
    title: "Transparent Pricing",
    icon: "credit-card-fill",
  },
  {
    title: "Fast & Efficient",
    icon: "lightning-fill",
  },
  {
    title: "Top Safety Standard",
    icon: "hard-hat-fill",
  },
];
</script>
<template>
  <section class="perks">
    <div class="perks__perk" v-for="(perk, i) in perks">
      <IconComponent
        :icon="perk.icon"
        size="3rem"
        :color="colors['base-color']"
      />
      <h4 class="perks__perk__title subtitles">
        {{ perk.title }}
      </h4>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.perks {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 2rem 1rem;
  background-color: $secondary-color;
  color: $text-color-alt;

  @media (min-width: $big-tablet-screen) {
    flex-direction: row;
    align-items: start;
    padding: 4rem 2rem;
    gap: 4rem;
  }

  @media (min-width: $big-tablet-screen) {
    padding: 4rem;
  }

  &__perk {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    &__title {
      text-align: center;
      background-color: $secondary-color;
      z-index: 1;
    }

    &__description {
      text-align: center;
      text-wrap: balance;
      max-width: 400px;
    }
  }
}
</style>
