<script setup>
import { useMenuItemsStore } from "@/stores/menuItems";
const menuItemsStore = useMenuItemsStore();
</script>
<template>
  <section class="services">
    <h1 class="titles">Services</h1>
    <div class="services__list">
      <NuxtLink
        class="services__list__link scale-on-hover"
        :to="item.link"
        v-for="item in menuItemsStore.menuItems[1].children"
        :key="item.label"
        ><IconComponent color="#04045c" size="2rem" :icon="item.icon" />{{
          item.label
        }}</NuxtLink
      >
    </div>
  </section>
  <ServicesWhyChooseUs />
</template>
<style lang="scss" scoped>
.services {
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
  gap: 1rem;

  @media (min-width: $big-tablet-screen) {
    padding: 4rem 2rem;
    gap: 2rem;
  }

  &__list {
    gap: 1rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

    @media (min-width: $big-tablet-screen) {
      max-width: calc(100vw - 18rem);
    }

    &__link {
      padding: 1rem 2rem;
      height: 140px;
      background-color: $primary-color;
      border-radius: $radius;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 1rem;
      white-space: nowrap;

      &:hover {
        box-shadow: $shadow;
      }
    }
  }
}
</style>
