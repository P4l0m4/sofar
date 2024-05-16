<script setup lang="ts">
defineProps({
  title: String,
  text: String,
});
</script>
<template>
  <section class="text-container standard-spacing">
    <h2 class="titles">{{ title }}</h2>
    <p class="paragraphs">{{ text }}</p>
  </section>
</template>
<style lang="scss" scoped>
.text-container {
  display: flex;
  flex-direction: column;
  background-color: $text-color;
  color: $text-color-alt;
}
</style>
