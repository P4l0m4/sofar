<script setup lang="ts">
defineProps({
  title: String,
  subtitle: String,
  text: String,
  image: String,
});
</script>
<template>
  <section class="under-banner">
    <div class="under-banner__text">
      <h1 class="titles">{{ title }}</h1>
      <h2 class="subtitles">{{ subtitle }}</h2>
      <p class="paragraphs">{{ text }}</p>
      <slot />
    </div>
    <img
      class="under-banner__img"
      :src="image"
      alt="sofar private jet charter"
    />
  </section>
</template>
<style lang="scss" scoped>
.under-banner {
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

  &__text {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;

    @media (min-width: $big-tablet-screen) {
      gap: 2rem;

      & .subtitles {
        margin-top: -1rem;
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
