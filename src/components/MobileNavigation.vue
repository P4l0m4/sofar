<script setup>
import { ref } from "vue";
const scrollableElement = ref({});
const isMenuOpen = ref(true);
let lastScrollTop = 0;
const currentIndex = ref(null);
const currentIndexSublinks = ref(null);
const initialTouchPosition = ref();
const initialBottomPosition = ref();
const draggableElement = ref(null);
const childrenToDisplay = ref([]);

const props = defineProps({
  menuItems: Array,
});

props.menuItems.forEach((item) => {
  childrenToDisplay.value.push(item.children);
});

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();

  // Element's bottom position should be greater than 0 to be in the viewport.
  // The element's top position can be less than 0 up to -130px if its height compensates this shift.
  const isVisibleVertically = rect.bottom > 0 && rect.top - 73 >= 0;

  return !isVisibleVertically;
}

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

function storeTouchPosition() {
  initialTouchPosition.value = event.touches[0].clientY;
  initialBottomPosition.value =
    draggableElement.value.getBoundingClientRect().bottom;
}
function resizeSublinks() {
  document.body.style.overflow = "hidden";
  let delta = event.touches[0].clientY - initialTouchPosition.value;
  const bottom = draggableElement.value.getBoundingClientRect().bottom;

  console.log(isElementInViewport(draggableElement.value));

  if (draggableElement.value && !isElementInViewport(draggableElement.value)) {
    draggableElement.value.style.transform = `translateY(${delta * 2}px)`;
  }
}
function stopDragging() {
  document.body.style.overflow = "auto";
  initialTouchPosition.value = null;
}
</script>
<template>
  <aside class="aside">
    <Transition>
      <div
        class="aside__mobile-sublinks"
        ref="draggableElement"
        v-if="childrenToDisplay[currentIndex]"
        @touchstart="storeTouchPosition()"
        @touchmove="resizeSublinks()"
        @touchend="stopDragging()"
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
            @mouseenter="currentIndex = i"
          >
            <NuxtLink class="aside__nav__ul__li__link" :to="item.path" exact>
              <img
                class="aside__nav__ul__li__link__icon"
                :src="`assets/icons/${item.icon}.svg`"
                :alt="item.alt"
              />
              {{ item.label }}
            </NuxtLink>
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

  @media (min-width: $big-tablet-screen) {
    display: none;
  }

  &__nav {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $text-color-faded-strong;
    width: 100%;
    height: fit-content;
    backdrop-filter: blur(6px);
    position: relative;

    &__ul {
      display: flex;
      gap: 0.5rem;
      width: 100%;
      padding: 0.5rem;
      cursor: pointer;

      &__li {
        height: fit-content;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: $radius;
        backdrop-filter: blur(20px);

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

          &__icon {
            width: 1.2rem;
            height: 1.2rem;
          }
        }
      }
    }
  }

  &__mobile-sublinks {
    position: absolute;
    left: 0;
    top: -130px;
    display: flex;
    width: 100vw;
    flex-direction: column;
    background-color: $text-color-faded;
    height: fit-content;

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
