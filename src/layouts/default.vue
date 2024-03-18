<script setup></script>
<template>
  <NavigationComponent />
  <main>
    <slot />
  </main>
</template>
<style lang="scss">
main {
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: $big-tablet-screen) {
    gap: 4rem;
  }
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.4s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
