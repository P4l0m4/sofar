<script setup lang="ts">
import { colors } from "@/utils/colors";
import { useMenuItemsStore } from "@/stores/menuItems";
const menuItemsStore = useMenuItemsStore();
</script>
<template>
  <section class="services">
    <h1 class="titles">Our services</h1>
    <div class="services__list">
      <NuxtLink
        class="services__list__link scale-on-hover"
        :to="item.link"
        v-for="item in menuItemsStore.menuItems[1].children"
        :key="item.label"
        ><IconComponent
          :color="colors['primary-color']"
          size="2rem"
          :icon="item.icon"
        />{{ item.label }}</NuxtLink
      >
    </div>
  </section>
</template>
<style lang="scss" scoped>
.services {
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
  gap: 1rem;
  background-color: $secondary-color;

  @media (min-width: $big-tablet-screen) {
    padding: 4rem 2rem;
    gap: 2rem;
  }

  .titles {
    color: $text-color-alt;
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
      background-color: $secondary-color-lighter !important;
      border-radius: $radius;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 1rem;
      white-space: nowrap;
      color: $text-color-alt;

      &:hover {
        box-shadow: $shadow;
      }
    }
  }
}
</style>
