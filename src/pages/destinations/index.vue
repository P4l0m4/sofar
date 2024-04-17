<script setup></script>
<template>
  <section class="destinations">
    <div class="destinations__header">
      <h1 class="titles">Browse destinations</h1>
      <DestinationsSearchBar />
    </div>
  </section>
</template>
<style scoped lang="scss">
.destinations {
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;

  @media (min-width: $big-tablet-screen) {
    padding: 4rem 2rem;
  }

  &__header {
    display: flex;
    gap: 1rem;
    flex-direction: column;

    @media (min-width: $big-tablet-screen) {
      gap: 2rem;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      max-width: calc(100vw - 16rem);
    }
  }
}
</style>
