<script setup lang="ts">
const model = defineModel<string | number>();
</script>
<template>
  <div class="search-bar">
    <input
      type="search"
      placeholder="Search for a continent, a city..."
      v-model="model"
    /><IconComponent icon="search" color="#052545" size="1.5rem" />
  </div>
</template>
<style scoped lang="scss">
.search-bar {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: $primary-color;
  box-shadow: $shadow;
  border-radius: 50px;
  padding: 0 1rem;
  width: calc(100% - 1rem);
  max-width: 500px;

  & input {
    padding: 1rem 0;
    font-size: 1rem;
    width: 100%;
  }
}
</style>
