<script setup lang="ts">
import { ref, onMounted } from "vue";
const leftArrowRef = ref<HTMLButtonElement | null>(null);
const rightArrowRef = ref<HTMLButtonElement | null>(null);
const showArrows = ref(false);
const scrollableContainerRef = ref<HTMLDivElement | null>(null);
const reviews = [
  {
    review:
      "Exceptional service and attentive crew. An unparalleled private flight experience!",
    stars: 5,
  },
  {
    review:
      "Pleasant and comfortable flight. I highly recommend it for a carefree trip.",
    stars: 5,
  },
  {
    review:
      "Simple booking and perfect flight. Excellent company, I've recommended it to everyone.",
    stars: 5,
  },
];

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
  <section class="satisfied-clients">
    <Transition>
      <button
        class="satisfied-clients__button"
        ref="leftArrowRef"
        v-if="showArrows && reviews.length > 4"
        @click="scroll('left')"
        @mouseenter="showArrows = true"
        @mouseleave="showArrows = false"
      >
        <img
          src="/assets/icons/arrow_scroll_dark.svg"
          alt="icon arrow scroll"
        /></button
    ></Transition>
    <h2 class="titles">Satisfied clients</h2>
    <div
      class="satisfied-clients__reviews"
      ref="scrollableContainerRef"
      @mouseenter="showArrows = true"
      @mouseleave="showArrows = false"
    >
      <div class="satisfied-clients__reviews__review" v-for="review in reviews">
        <p class="paragraphs">{{ review.review }}</p>
        <span class="satisfied-clients__reviews__review__stars"
          ><img
            v-for="star in review.stars"
            src="/assets/icons/star.svg"
            alt="star icon"
        /></span>
      </div>
    </div>
    <Transition>
      <button
        class="satisfied-clients__button"
        ref="rightArrowRef"
        v-if="showArrows && reviews.length > 4"
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
.satisfied-clients {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem 1rem;
  padding-right: 0;
  position: relative;

  @media (min-width: $big-tablet-screen) {
    gap: 2rem;
    padding: 4rem 2rem;
  }

  &__reviews {
    display: flex;
    overflow: scroll;
    gap: 1rem;

    &::-webkit-scrollbar {
      display: none;
    }

    &__review {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      max-width: 400px;
      min-width: 240px;
      text-wrap: wrap;
      height: 100%;

      &__stars {
        display: flex;
        gap: 0.5rem;
        margin-top: auto;

        & img {
          width: 1rem;
          height: 1rem;
        }
      }
    }
  }

  &__button {
    position: absolute;
    top: 7rem;
    bottom: 0;
    left: 2rem;
    margin: auto;
    width: 80px;
    height: 80px;
    background-color: $base-color;
    z-index: 1;
    border: none;
    display: none;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
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
}
</style>
