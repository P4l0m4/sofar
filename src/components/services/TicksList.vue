<script setup lang="ts">
import { colors } from "@/utils/colors";
defineProps({
  list: {
    type: Array<String>,
    required: true,
  },

  image: String,
});
</script>
<template>
  <section class="ticks-list">
    <img
      v-if="image"
      class="ticks-list__img"
      :src="image"
      alt="sofar jet charter"
    />
    <ul class="ticks-list__list">
      <li
        class="ticks-list__list__element"
        v-for="(element, i) in list"
        :key="i"
      >
        <span class="ticks-list__list__element__icon">
          <IconComponent icon="check_small" :color="colors['primary-color']"
        /></span>
        {{ element }}
      </li>
    </ul>
  </section>
</template>
<style lang="scss" scoped>
.ticks-list {
  display: flex;
  flex-direction: column;
  background-color: $text-color;
  color: $text-color-alt;
  padding: 2rem 1rem;
  gap: 2rem;

  @media (min-width: $big-tablet-screen) {
    padding: 4rem;
    flex-direction: row;
    gap: 4rem;
    align-items: center;
  }
  @media (min-width: $desktop-screen) {
    gap: 8rem;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    list-style: none;

    @media (min-width: $big-tablet-screen) {
      gap: 2rem;
    }

    &__element {
      display: flex;
      align-items: center;
      gap: 1rem;
      font-size: 1rem;
      text-wrap: balance;
      font-weight: $skinny;

      @media (min-width: $big-tablet-screen) {
        font-size: 2rem;
        gap: 2rem;
      }

      &__icon {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        width: 44px;
        height: 44px;
        border-radius: 50%;
        border: 2px solid $primary-color;
      }
    }
  }

  &__img {
    width: 100%;
    height: auto;
    object-fit: cover;
    object-position: center;

    @media (min-width: $big-tablet-screen) {
      width: 50%;
    }
    @media (min-width: $laptop-screen) {
      max-height: 500px;
    }
  }
}
</style>
