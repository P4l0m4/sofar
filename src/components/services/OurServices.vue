<script setup lang="ts">
import { colors } from "@/utils/colors";
import { useMenuItemsStore } from "@/stores/menuItems";

type ServiceItem = {
  label: string;
  link: string;
  icon: string;
  alt: string;
  parent?: string;
};

const menuItemsStore = useMenuItemsStore();

const VISIBLE_SERVICE_LABELS: string[] = [
  "Private jet charters",
  "Corporate jet charter",
  "Family jet charters",
  "Empty legs",
  "Pet-friendly charters",
  "Aircraft management",
];

function filterDisplayedServices(items?: ServiceItem[]): ServiceItem[] {
  if (!items) return [];
  const keepSet = new Set<string>(VISIBLE_SERVICE_LABELS);
  return items.filter((i) => keepSet.has(i.label));
}

const displayedServices = computed(() => {
  const services = menuItemsStore.menuItems.find((m) => m.label === "Services");
  return services ? filterDisplayedServices(services.children) : [];
});
</script>
<template>
  <section class="services">
    <h1 class="titles">Our services</h1>
    <div class="services__list">
      <NuxtLink
        class="services__list__link scale-on-hover"
        :to="item.link"
        v-for="item in displayedServices"
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
    grid-template-columns: repeat(1, 1fr);

    @media (min-width: $big-tablet-screen) {
      gap: 2rem;
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: $laptop-screen) {
      grid-template-columns: repeat(3, 1fr);
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
