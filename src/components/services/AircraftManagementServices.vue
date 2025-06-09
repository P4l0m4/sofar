<script setup lang="ts">
import { colors } from "@/utils/colors";

const services = [
  {
    label: "Cost Optimization",
    icon: "credit_card",
  },
  {
    label: "Customized services",
    icon: "target",
  },
  {
    label: "Time savings",
    icon: "speedometer",
  },
  {
    label: "Flight Crew",
    icon: "group_add",
  },
  {
    label: "Maintenance",
    icon: "hard_hat",
  },
  {
    label: "Regulation compliance",
    icon: "lifebuoy",
  },
];
</script>
<template>
  <section class="aircraft-management-services">
    <h2 class="titles">Aircraft <br />Management <br />Services</h2>
    <div class="aircraft-management-services__list">
      <div
        class="aircraft-management-services__list__service"
        v-for="service in services"
        :key="service.label"
      >
        <IconComponent
          :color="colors['primary-color']"
          size="2rem"
          :icon="service.icon"
        />{{ service.label }}
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.aircraft-management-services {
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
  gap: 2rem;
  background-color: $secondary-color;
  color: $text-color-alt;

  @media (min-width: $big-tablet-screen) {
    padding: 4rem 2rem;
    gap: 4rem;
  }

  @media (min-width: $desktop-screen) {
    flex-direction: row;
    align-items: center;
    padding: 8rem 4rem;
  }

  &__list {
    gap: 1rem;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    width: 100%;

    @media (min-width: $big-tablet-screen) {
      gap: 2rem;
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: $laptop-screen) {
      grid-template-columns: repeat(3, 1fr);
    }

    &__service {
      padding: 1rem 2rem;
      height: 140px;
      background-color: $secondary-color-lighter;
      border-radius: $radius;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 1rem;
      white-space: nowrap;

      @media (min-width: $big-tablet-screen) {
        height: 200px;
        width: 100%;
      }
    }
  }
}
</style>
