<script setup>
defineProps({
  title: String,
  text: String,
  image: String,
  alt: String,
});
</script>

<template>
  <section class="content-blok">
    <img v-if="image" class="content-blok__img" :src="image" :alt="alt" />

    <div v-if="text" class="content-blok__text">
      <h2 class="subtitles">{{ title }}</h2>
      <p class="paragraphs">
        {{ text }}
      </p>
    </div>
  </section>
</template>
<style scoped lang="scss">
.content-blok {
  display: flex;
  align-items: center;
  color: $text-color-alt;
  background-color: $secondary-color;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: $big-tablet-screen) {
    flex-direction: row;
    gap: 2rem;
  }

  &__img {
    width: 100%;
    // height: auto;
    object-fit: cover;
    object-position: center;
    // max-height: 100dvh;
    aspect-ratio: 2 / 1;
  }

  &__text {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem 1rem;

    @media (min-width: $big-tablet-screen) {
      padding: 4rem 2rem;
    }
  }
}
</style>
