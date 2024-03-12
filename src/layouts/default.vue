<script setup>
import NavigationComponent from "~/Components/NavigationComponent.vue";
</script>

<template>
  <NavigationComponent />
  <main>
    <slot />
  </main>
</template>
<style scoped lang="scss">
main {
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: $big-tablet-screen) {
    gap: 4rem;
  }
}
</style>
