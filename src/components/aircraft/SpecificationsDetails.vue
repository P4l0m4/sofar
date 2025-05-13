<script setup lang="ts">
import { colors } from "@/utils/colors";

type SpecItem = { label: string; value: string; icon: string };

type SpecsTuple = readonly [
  SpecItem, // Passenger capacity
  SpecItem, // Endurance
  SpecItem, // Operating range
  SpecItem, // Baggage capacity
  SpecItem, // Speed
  SpecItem, // Cruising altitude
];

defineProps<{
  image: string;
  secondaryImage?: string;
  specifications: SpecsTuple;
}>();
</script>
<template>
  <section class="specifications-details">
    <div class="specifications-details__first-part">
      <img
        v-if="secondaryImage"
        class="specifications-details__first-part__secondary-image"
        :src="secondaryImage"
        alt="private jet details"
      />
      <h2 class="specifications-details__first-part__title subtitles">
        SPECIFICATIONS
      </h2>
      <ul class="specifications-details__first-part__list">
        <li
          class="specifications-details__first-part__list__item"
          v-for="specification in specifications"
          :key="specification.label"
        >
          <span class="specifications-details__first-part__list__item__label">
            {{ specification.label }}</span
          ><span class="specifications-details__first-part__list__item__value">
            <IconComponent
              :icon="specification.icon"
              size="2rem"
              :color="colors['primary-color']"
            />
            {{ specification.value }}</span
          >
        </li>
      </ul>
    </div>
    <img
      class="specifications-details__image"
      :src="image"
      alt="private jet specifications"
    />
  </section>
</template>
<style lang="scss" scoped>
.specifications-details {
  background-color: $secondary-color;
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
  gap: 2rem;

  @media (min-width: $big-tablet-screen) {
    flex-direction: row;
    padding: 4rem;
    gap: 0;
  }

  &__first-part {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    color: $text-color-alt;
    width: 100%;

    &__secondary-image {
      width: 100%;
    }

    &__list {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      &__item {
        display: grid;
        gap: 1rem;
        grid-template-columns: 1fr 1fr;

        &__label {
          text-transform: uppercase;
          display: flex;
          align-items: center;
        }

        &__value {
          white-space: nowrap;
          display: flex;
          gap: 1rem;
          align-items: center;
        }
      }
    }
  }

  &__image {
    width: 100%;
  }
}
</style>
