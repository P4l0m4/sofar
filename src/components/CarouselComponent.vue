<script setup lang="ts">
import { ref, onMounted } from "vue";
const leftArrowRef = ref<HTMLButtonElement | null>(null);
const rightArrowRef = ref<HTMLButtonElement | null>(null);
const showArrows = ref(false);
const scrollableContainerRef = ref<HTMLDivElement | null>(null);

interface Props {
  carouselElements: {
    link: string;
    image: string;
    label: string;
  }[];
}

const props = withDefaults(defineProps<Props>(), {
  carouselElements: [
    {
      link: "/",
      image: "100",
      label: "Phenom 100",
    },
    {
      link: "/",
      image: "100",
      label: "Phenom 100",
    },
    {
      link: "/",
      image: "100",
      label: "Phenom 100",
    },
  ],
});

const scroll = (direction: "left" | "right") => {
  if (scrollableContainerRef.value) {
    const scrollAmount = 300;

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
  <section class="carousel">
    <Transition>
      <button
        class="carousel__button"
        ref="leftArrowRef"
        v-if="showArrows"
        @click="scroll('left')"
        @mouseenter="showArrows = true"
        @mouseleave="showArrows = false"
      >
        <img
          src="/assets/icons/arrow_scroll_dark.svg"
          alt="icon arrow scroll"
        /></button
    ></Transition>

    <div
      class="carousel__container"
      ref="scrollableContainerRef"
      @mouseenter="showArrows = true"
      @mouseleave="showArrows = false"
    >
      <NuxtLink
        :to="slide.link"
        class="carousel__container__slide"
        :style="{ backgroundImage: `url(/assets/images/${slide.image}.webp)` }"
        v-for="slide in props.carouselElements"
      >
        <span class="carousel__container__slide__label">{{ slide.label }}</span>
        <span class="carousel__container__slide__arrow"
          ><img src="/assets/icons/arrow_upward_alt.svg" alt="icon arrow"
        /></span>
      </NuxtLink>
    </div>
    <Transition>
      <button
        class="carousel__button"
        ref="rightArrowRef"
        v-if="showArrows"
        @click="scroll('right')"
        @mouseenter="showArrows = true"
        @mouseleave="showArrows = false"
      >
        <img
          src="/assets/icons/arrow_scroll_dark.svg"
          alt="icon arrow scroll"
        /></button
    ></Transition>
  </section>
</template>
<style lang="scss" scoped>
.carousel {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0 2rem 1rem;
  overflow-x: hidden;
  width: 100%;
  position: relative;

  &__button {
    position: absolute;
    top: 4rem;
    bottom: 0;
    left: 2rem;
    width: 80px;
    height: 280px;
    background-image: linear-gradient(90deg, $base-color, transparent);
    z-index: 1;
    border: none;
    display: none;
    justify-content: center;
    align-items: center;
    border-radius: 0;
    cursor: pointer;

    & img {
      transform: rotate(90deg);
    }

    @media (min-width: $big-tablet-screen) {
      display: flex;
    }

    &:nth-of-type(2) {
      left: auto;
      right: 2rem;
      background-image: linear-gradient(-90deg, $base-color, transparent);
      & img {
        transform: rotate(-90deg);
      }
    }
  }

  @media (min-width: $big-tablet-screen) {
    padding: 4rem 2rem;
  }

  &__container {
    display: flex;
    gap: 1rem;
    width: fit-content;
    overflow-x: scroll;

    &::-webkit-scrollbar {
      display: none;
    }

    &__slide {
      display: flex;
      justify-content: space-between;
      gap: 1rem;
      width: 300px;
      min-width: 300px;
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
      }

      @media (min-width: $big-tablet-screen) {
        width: 360px;
        min-width: 360px;
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
    }
  }
}
</style>