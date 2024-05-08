<script setup lang="ts">
const story = await useAsyncStoryblok("blog", { version: "published" });
import { stringToSlug } from "~/utils/slugify";
const dayjs = useDayjs();

interface Props {
  articleTitle: string;
}

const props = withDefaults(defineProps<Props>(), {
  articleTitle: "",
});

const articlesToDisplay = computed(() => {
  return story.value.content.articles.filter(
    (article) => article.title !== props.articleTitle
  );
});

const leftArrowRef = ref<HTMLButtonElement | null>(null);
const rightArrowRef = ref<HTMLButtonElement | null>(null);
const showArrows = ref(false);
const scrollableContainerRef = ref<HTMLDivElement | null>(null);

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
  <section class="wrapper">
    <h2 class="titles">Our Blog</h2>
    <div class="carousel">
      <Transition>
        <button
          class="carousel__button"
          ref="leftArrowRef"
          v-if="showArrows && articlesToDisplay.length > 4"
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
          :to="`/about-us/blog/${stringToSlug(slide.title)}`"
          class="carousel__container__slide fading"
          v-for="slide in articlesToDisplay"
          :style="{ backgroundImage: `url(${slide.previewImage.filename})` }"
          ><div class="carousel__container__slide__img">
            <span class="carousel__container__slide__img__tag">{{
              slide.tag
            }}</span>
            <span class="carousel__container__slide__img__arrow"
              ><img src="/assets/icons/arrow_upward_alt.svg" alt="icon arrow"
            /></span>
          </div>
          <h4 class="subtitles">{{ slide.title }}</h4>
          <span class="carousel__container__slide__date paragraphs">{{
            dayjs(slide.date).format("MMMM DD, YYYY")
          }}</span>
        </NuxtLink>
      </div>
      <Transition>
        <button
          class="carousel__button"
          ref="rightArrowRef"
          v-if="showArrows && articlesToDisplay.length > 4"
          @click="scroll('right')"
          @mouseenter="showArrows = true"
          @mouseleave="showArrows = false"
        >
          <img
            src="/assets/icons/arrow_scroll_dark.svg"
            alt="icon arrow scroll"
          /></button
      ></Transition>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
  padding-right: 0;
  gap: 1rem;

  @media (min-width: $big-tablet-screen) {
    padding: 4rem 2rem;
    gap: 2rem;
  }
}
.carousel {
  display: flex;
  align-items: center;
  padding-right: 0;
  overflow-x: hidden;
  width: 100%;
  position: relative;

  &__button {
    position: absolute;
    top: 0;
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

  //   @media (min-width: $big-tablet-screen) {
  //     padding: 4rem 2rem;
  //     padding-right: 0;
  //   }

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
      flex-direction: column;
      gap: 1rem;
      border-radius: $radius;
      overflow: hidden;
      height: 260px;
      min-width: 300px;
      background-size: cover;
      background-position: center;
      position: relative;
      justify-content: space-between;
      padding: 1rem;
      @media (min-width: $big-tablet-screen) {
        width: 360px;
        min-width: 360px;
        height: 340px;
        transition: filter 0.3s linear;
        filter: grayscale(30%);

        &:hover {
          filter: grayscale(0%);
        }
      }
      &::after {
        content: "";
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(45deg, $text-color, transparent 60%);
      }

      &__img {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 1rem;
        width: 100%;
        min-width: 300px;
        height: fit-content;
        text-align: center;
        overflow: hidden;
        height: 100%;

        &__tag {
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

      .subtitles {
        color: $text-color-alt;
        z-index: 1;
        text-shadow: $shadow-text;
      }
      &__date {
        z-index: 1;
        color: $primary-color-faded;
        width: 100%;
        text-align: right;
        text-shadow: $shadow-text;
      }
    }
  }
}
</style>
