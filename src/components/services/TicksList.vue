<script setup lang="ts">
import { colors } from "@/utils/colors";
defineProps({
  title: {
    type: String,
    required: false,
  },
  subtitle: {
    type: String,
    required: false,
  },
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
      <h2 v-if="title" class="subtitles">{{ title }}</h2>
      <p v-if="subtitle" class="paragraphs">{{ subtitle }}</p>
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

  @media (min-width: $laptop-screen) {
    padding: 4rem;
    padding-left: 0;
    flex-direction: row;
    align-items: center;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    list-style: none;
    order: -1;

    @media (min-width: $big-tablet-screen) {
      order: inherit;
    }

    @media (min-width: $laptop-screen) {
      gap: 2rem;
      padding-left: 4rem;
    }

    &__element {
      display: flex;
      align-items: center;
      gap: 1rem;
      font-size: 1rem;
      // text-wrap: balance;
      font-weight: $skinny;

      @media (min-width: $big-tablet-screen) {
        font-size: 1.5rem;
        gap: 2rem;
      }

      @media (min-width: $desktop-screen) {
        font-size: 1.75rem;
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
    height: 100%;
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
