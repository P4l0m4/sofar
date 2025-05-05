<script setup lang="ts">
import { ref } from "vue";

type CarouselElement = {
  link: string;
  image: string;
  label: string;
};

interface Props {
  carouselElements: CarouselElement[];
}

const props = withDefaults(defineProps<Props>(), {
  carouselElements: () => [
    {
      link: "/aircraft/phenom-100",
      image: "/assets/images/100.webp",
      label: "Phenom 100",
    },
    {
      link: "/aircraft/phenom-300",
      image: "/assets/images/300.webp",
      label: "Phenom 300",
    },
    {
      link: "/aircraft/pc12",
      image: "/assets/images/12.webp",
      label: "Pilatus PC 12",
    },
  ],
});
const leftArrowRef = ref<HTMLButtonElement | null>(null);
const rightArrowRef = ref<HTMLButtonElement | null>(null);
const showArrows = ref(false);
const scrollableContainerRef = ref<HTMLDivElement | null>(null);
const scrollAmount = 300;

const scroll = (direction: "left" | "right") => {
  if (scrollableContainerRef.value) {
    if (direction === "left") {
      scrollableContainerRef.value.scrollTo({
        left: scrollableContainerRef.value.scrollLeft - scrollAmount,
        behavior: "smooth",
      });
    } else {
      scrollableContainerRef.value.scrollTo({
        left: scrollableContainerRef.value.scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  }
};
</script>
<template>
  <section class="slides-grid">
    <NuxtLink
      :to="slide.link"
      class="slides-grid__slide fading"
      :style="{ backgroundImage: `url(${slide.image})` }"
      v-for="slide in props.carouselElements"
    >
      <span class="slides-grid__slide__label">{{ slide.label }}</span>
      <span class="slides-grid__slide__arrow"
        ><img src="/assets/icons/arrow_upward_alt.svg" alt="icon arrow"
      /></span>
    </NuxtLink>
  </section>
</template>
<style lang="scss" scoped>
.slides-grid {
  display: flex;
  align-items: center;
  padding: 2rem 1rem;
  width: 100%;
  gap: 1rem;

  @media (min-width: $big-tablet-screen) {
    padding: 4rem 2rem;
    gap: 2rem;
  }

  &__slide {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;
    width: 100%;
    height: 240px;
    background-size: cover;
    background-position: center;
    text-align: center;
    padding: 1rem;
    border-radius: $radius;
    position: relative;
    overflow: hidden;
    transition: filter 0.3s linear;

    filter: grayscale(30%);

    &:hover {
      filter: grayscale(0%);
    }

    &::after {
      content: "";
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(45deg, $text-color, transparent 60%);
      opacity: 0.8;
    }

    @media (min-width: $big-tablet-screen) {
      height: 280px;
    }

    &__label {
      font-size: 1rem;
      font-weight: $skinny-thick;
      background-color: $base-color;
      padding: 0.75rem 0.75rem 0.5rem 0.75rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: $radius;
      color: $text-color;
      height: fit-content;
      z-index: 1;
      box-shadow: $shadow;
    }

    &__arrow {
      padding: 0.5rem;
      background-color: $base-color;
      border-radius: $radius;
      display: flex;
      justify-content: center;
      align-items: center;
      height: fit-content;
      z-index: 1;
      box-shadow: $shadow;

      & img {
        width: 1rem;
        height: 1rem;
        transform: rotate(45deg);
      }
    }

    &__country-code {
      font-size: 8rem;
      color: $primary-color-faded;
      font-weight: $skinny-thick;
      text-align: center;
      z-index: 1;
      width: 100%;
      margin-top: auto;

      @media (min-width: $big-tablet-screen) {
        font-size: 10rem;
      }
    }
  }
}
</style>
