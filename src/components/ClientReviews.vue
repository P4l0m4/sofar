<script setup lang="ts">
import { ref } from "vue";
import { colors } from "@/utils/colors";

const leftArrowRef = ref<HTMLButtonElement | null>(null);
const rightArrowRef = ref<HTMLButtonElement | null>(null);
const showArrows = ref(false);
const scrollableContainerRef = ref<HTMLDivElement | null>(null);
const reviews = [
  {
    review:
      "Exceptional service and attentive crew. An unparalleled private flight experience!",
    origin: "VNY",
    destination: "LAS",
    name: "Chris. K",
  },
  {
    review:
      "Pleasant and comfortable flight. I highly recommend it for a carefree trip.",
    origin: "HPN",
    destination: "BOS",
    name: "Lila. J",
  },
  {
    review:
      "Simple booking and perfect flight. Excellent company, I've recommended it to everyone.",
    origin: "JFK",
    destination: "OPF",
    name: "James. V",
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
        <div class="satisfied-clients__reviews__review__header">
          <span class="satisfied-clients__reviews__review__header__tag"
            >Bag tag</span
          ><img
            class="satisfied-clients__reviews__review__header__logo"
            src="@/assets/images/logo-dark.svg"
            alt="sofar logo dark"
          />
        </div>
        <div class="wrapper">
          <div class="journey">
            <span class="journey__location">{{ review.origin }}</span>

            <IconComponent
              class="journey__icon"
              :color="colors['secondary-color']"
              icon="airplanemode_active"
              size="1.5rem"
            />
            <span class="journey__location">{{ review.destination }}</span>
          </div>
          <hr />
          <p class="paragraphs">{{ review.review }}</p>
          <span class="name">{{ review.name }}</span>
          <hr />
          <span class="flight">EMB-500</span>
        </div>
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
  background-color: $secondary-color;

  @media (min-width: $big-tablet-screen) {
    gap: 4rem;
    padding: 4rem 2rem;
    align-items: center;
  }

  .titles {
    color: $text-color-alt;
    text-align: center;
  }

  &__reviews {
    display: flex;
    overflow: scroll;
    gap: 1rem;

    @media (min-width: $big-tablet-screen) {
      gap: 2rem;
    }

    &::-webkit-scrollbar {
      display: none;
    }

    &__review {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 1rem;
      gap: 0.5rem;
      width: 100%;
      max-width: 300px;
      min-width: 250px;
      background-color: $base-color;
      position: relative;
      height: 410px;
      clip-path: polygon(
        32px 0,
        /* coin haut‑gauche */ calc(100% - 32px) 0,
        /* coin haut‑droite */ 100% 32px,
        /* côté droit haut */ 100% calc(100% - 32px),
        /* coin bas‑droite */ calc(100% - 32px) 100%,
        /* bas‑droite */ 32px 100%,
        /* bas‑gauche */ 0 calc(100% - 32px),
        /* côté gauche bas */ 0 32px /* côté gauche haut */
      );

      &::before {
        content: "";
        position: absolute;
        top: 16px;
        left: 50%;
        transform: translateX(-50%);
        width: 32px;
        height: 32px;
        background: $secondary-color;
        border-radius: 50%;
      }

      &__header {
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding: 0 1rem;
        gap: 1rem;
        align-items: center;

        &__tag {
          white-space: nowrap;
          font-size: $small-text;
          font-weight: $skinny;
        }

        &__logo {
          width: 40px;
        }
      }

      .wrapper {
        display: flex;
        flex-direction: column;
        height: calc(100% - 80px);
        padding: 1rem;
        gap: 1rem;
        border: $secondary-color 1px solid;
        justify-content: center;

        hr {
          color: $secondary-color;
          opacity: 0.4;
        }

        .journey {
          display: flex;
          gap: 1rem;
          justify-content: space-between;
          align-items: center;
          padding: 0 1rem;

          &__location {
            font-weight: $thick;
            font-size: 1.25rem;
          }

          &__icon {
            transform: rotate(90deg);
          }
        }

        .paragraphs {
          text-align: center;
          text-wrap: balance;
          height: 100%;
        }

        .name {
          font-weight: $thick;
          text-align: center;
        }

        .flight {
          text-align: center;
          font-weight: $thick;
          font-size: 1.25rem;
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
