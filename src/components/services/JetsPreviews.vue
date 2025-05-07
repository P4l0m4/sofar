<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: false,
  },
  previews: {
    type: Array,
    required: true,
  },
});
</script>
<template>
  <section class="jets-previews">
    <h2 class="jets-previews__title titles" v-if="title">{{ title }}</h2>
    <div class="jets-previews__cards">
      <div
        class="jets-previews__cards__card"
        v-for="preview in previews"
        :key="preview.title"
      >
        <h3 class="jets-previews__cards__card__title subtitles">
          {{ preview.title }}
        </h3>
        <p class="jets-previews__cards__card__description">
          {{ preview.description }}
        </p>
        <img
          :src="preview.image"
          :alt="preview.title"
          class="jets-previews__cards__card__image"
        />
      </div>
    </div>
    <slot />
  </section>
</template>
<style scoped lang="scss">
.jets-previews {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem 1rem;
  background-color: $secondary-color;
  width: 100%;

  @media (min-width: $big-tablet-screen) {
    padding: 4rem 2rem;
    gap: 4rem;
  }

  @media (min-width: $desktop-screen) {
    padding: 4rem 4rem;
  }

  &__title {
    color: $text-color-alt;
  }

  &__cards {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    width: 100%;

    @media (min-width: $big-tablet-screen) {
      justify-content: space-between;
      flex-direction: row;
    }

    &__card {
      display: flex;
      flex-direction: column;
      width: 100%;
      color: $text-color-alt;
      gap: 1rem;

      @media (min-width: $big-tablet-screen) {
        max-width: 300px;
        &:nth-child(2) {
          .jets-previews__cards__card__image {
            order: -1;
            box-shadow: $shadow;
            margin-top: 0;
            margin-bottom: 2rem;
          }
        }
      }

      @media (min-width: $desktop-screen) {
        max-width: 400px;
      }

      &__title {
        width: 100%;

        @media (min-width: $big-tablet-screen) {
          text-wrap: balance;
        }

        @media (min-width: $desktop-screen) {
          max-width: 400px;
        }
      }

      &__description {
        font-size: 1rem;
        width: 100%;

        // @media (min-width: $big-tablet-screen) {
        //   max-width: 300px;
        // }

        @media (min-width: $desktop-screen) {
          max-width: 400px;
          text-wrap: balance;
        }
      }

      &__image {
        width: 100%;
        height: 300px;
        object-fit: cover;
        object-position: center;
        margin-top: 2rem;

        @media (min-width: $big-tablet-screen) {
          max-width: 400px;
          height: 100%;
        }

        @media (min-width: $desktop-screen) {
          max-width: 400px;
          min-height: 420px;
        }
      }
    }
  }
}
</style>
