<script setup>
import NavigationMenu from "@/components/NavigationMenu.vue";
</script>
<template>
  <NavigationMenu />
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
