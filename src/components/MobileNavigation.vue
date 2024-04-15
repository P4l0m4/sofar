<script setup>
import { ref } from "vue";

const isMenuOpen = ref(true);
let lastScrollTop = 0;
const currentIndex = ref(null);
const childrenToDisplay = ref([]);

const props = defineProps({
  menuItems: Array,
});

props.menuItems.forEach((item) => {
  childrenToDisplay.value.push(item.children);
});

function scrolling(event) {
  let scrollPercent =
    (event.target.scrollTop /
      (scrollableElement.value.scrollHeight -
        scrollableElement.value.clientHeight)) *
    100;
}

window.addEventListener("scroll", function () {
  let st = window.pageYOffset || document.documentElement.scrollTop;
  if (st > window.innerHeight / 2 && st > lastScrollTop) {
    isMenuOpen.value = false;
  } else if (st > window.innerHeight / 2 && st < lastScrollTop) {
    isMenuOpen.value = true;
  }
  lastScrollTop = st <= 0 ? 0 : st;
});
</script>
<template>
  <aside class="aside">
    <span
      class="invisible"
      @click="currentIndex = null"
      v-if="currentIndex !== null"
    ></span>
    <Transition>
      <div
        class="aside__mobile-sublinks"
        ref="draggableElement"
        v-if="childrenToDisplay[currentIndex] && isMenuOpen"
      >
        <NuxtLink
          class="aside__mobile-sublinks__link"
          :to="child.link"
          v-for="(child, j) in childrenToDisplay[currentIndex]"
          :key="j"
          exact
          ><img
            class="aside__mobile-sublinks__link__icon"
            :src="`assets/icons/${child.icon}.svg`"
            :alt="child.alt"
          />
          {{ child.label }}</NuxtLink
        >
      </div></Transition
    >
    <Transition>
      <nav class="aside__nav" v-if="isMenuOpen">
        <ul class="aside__nav__ul" @mouseleave="currentIndex === null">
          <li
            v-for="(item, i) in menuItems"
            :key="i"
            class="aside__nav__ul__li"
          >
            <NuxtLink class="aside__nav__ul__li__link" :to="item.link" exact>
              <!-- <img
                class="aside__nav__ul__li__link__icon"
                :src="`assets/icons/${item.icon}.svg`"
                :alt="item.alt"
              /> -->
              <IconComponent :icon="item.icon" color="#fffdfa" size="1rem" />
              {{ item.label }}
            </NuxtLink>
            <span
              class="invisible-opener"
              @mouseenter="currentIndex = i"
              v-if="item.children?.length > 0"
              :class="{
                'invisible-opener--no-display': currentIndex === i,
              }"
            ></span>
          </li>
        </ul>
      </nav>
    </Transition>
  </aside>
</template>
<style lang="scss" scoped>
.router-link-exact-active {
  background-color: $text-color-faded;
}

.aside {
  z-index: 3;
  position: fixed;
  width: 100%;
  inset: auto 0 0 0;
  height: fit-content;
  display: flex;
  flex-direction: column;

  @media (min-width: $laptop-screen) {
    display: none;
  }

  .invisible {
    height: 100svh;
    width: 100%;
    position: fixed;
    top: 0;
  }

  &__nav {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $text-color-faded-strong;
    width: 100%;
    height: fit-content;
    backdrop-filter: blur(6px);

    &__ul {
      display: flex;
      gap: 0.5rem;
      width: 100%;
      max-width: 600px;
      cursor: pointer;

      &__li {
        height: fit-content;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: $radius;

        &__link {
          height: fit-content;
          padding: 0.5rem;
          text-decoration: none;
          color: $text-color-alt;
          font-size: $small-text;
          font-weight: $skinny;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 0.5rem;
          border-radius: $radius;
          white-space: nowrap;
          text-shadow: $shadow-text;
          position: relative;

          &__icon {
            width: 1.2rem;
            height: 1.2rem;
          }
        }

        .invisible-opener {
          margin-left: -65px;
          width: 65px;
          height: 57px;
          // background-color: rgba(255, 0, 0, 0.8);
          border-radius: $radius;
          z-index: 1;

          // &--no-display {
          //   background-color: green;
          //   pointer-events: none;
          // }
        }
      }
    }
  }

  &__mobile-sublinks {
    position: absolute;
    left: 0;
    bottom: 57px;
    display: flex;
    width: 100vw;
    flex-direction: column;
    background-color: $text-color-faded-strong;
    height: fit-content;
    backdrop-filter: blur($blur);

    &__link {
      text-decoration: none;
      color: $text-color-alt;
      font-size: 1rem;
      font-weight: $skinny;
      text-shadow: $shadow-text;
      display: flex;
      align-items: center;
      padding: 1rem;
      gap: 0.5rem;

      &__icon {
        width: 1.2rem;
        height: 1.2rem;
      }
    }
  }
}
</style>
