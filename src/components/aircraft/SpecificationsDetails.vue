<script setup lang="ts">
import { colors } from "@/utils/colors";

export type SpecificationDetailsItem = {
  label: string;
  value: string;
  icon: string;
};

export type SpecificationsDetailsTuple = readonly [
  SpecificationDetailsItem, // Passenger capacity
  SpecificationDetailsItem, // Endurance
  SpecificationDetailsItem, // Operating range
  SpecificationDetailsItem, // Baggage capacity
  SpecificationDetailsItem, // Speed
  SpecificationDetailsItem, // Cruising altitude
];

defineProps<{
  image: string;
  secondaryImage?: string;
  littlePlane: string;
  specifications: SpecificationsDetailsTuple;
  reverse?: boolean;
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
        SPECIFICATIONS<img
          class="specifications-details__first-part__title__little-plane"
          :src="littlePlane"
          alt="private jet miniature"
        />
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
      :class="{
        'specifications-details__image__reverse': reverse,
      }"
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

  @media (min-width: $laptop-screen) {
    flex-direction: row;
    padding: 4rem;
    gap: 0;
  }

  &__first-part {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    color: $text-color-alt;
    width: 100%;

    &__title {
      display: flex;
      align-items: center;
      gap: 1rem;
      justify-content: space-between;

      &__little-plane {
        width: 100px;

        @media (min-width: $big-tablet-screen) {
          width: 200px;
        }
      }
    }

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
    object-fit: cover;
    object-position: center;

    &__reverse {
      order: -1;

      @media (min-width: $laptop-screen) {
        margin-right: 2rem;
      }
    }
  }
}
</style>
