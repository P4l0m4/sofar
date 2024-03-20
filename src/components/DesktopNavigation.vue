<script setup>
import { ref } from "vue";
const scrollableElement = ref({});
const arrow = ref(null);
const isMenuOpen = ref(true);
let lastScrollTop = 0;
const currentIndex = ref(null);
const currentIndexSublinks = ref(null);

const props = defineProps({
  menuItems: Array,
});

function scrolling(event) {
  let scrollPercent =
    (event.target.scrollTop /
      (scrollableElement.value.scrollHeight -
        scrollableElement.value.clientHeight)) *
    100;

  arrow.value.style.opacity = `${100 - scrollPercent}%`;
}

function scrollWithArrow(index) {
  const element = scrollableElement.value[`sublinks-${index}`];
  element.scrollBy(0, 120);
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

function shouldDisplayArrow(index) {
  const element = scrollableElement.value[`sublinks-${index}`];
  return (
    element &&
    (element.clientHeight > 400 || element.clientHeight > window.innerHeight)
  );
}
</script>
<template>
  <aside class="aside">
    <Transition>
      <nav class="aside__nav" v-if="isMenuOpen">
        <ul class="aside__nav__ul" @mouseleave="currentIndex === null">
          <li
            v-for="(item, i) in menuItems"
            :key="i"
            class="aside__nav__ul__li scale-on-hover"
            :class="{
              'aside__nav__ul__li--siblings':
                i === currentIndex - 1 || i === currentIndex + 1,
            }"
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
            <div
              v-if="item.children?.length > 0"
              :id="`scrollable-sublinks-${i}`"
              class="aside__nav__ul__li__sublinks"
              :class="{
                'aside__nav__ul__li__sublinks--scrollable':
                  shouldDisplayArrow(i),
              }"
              :ref="(el) => (scrollableElement[`sublinks-${i}`] = el)"
              @scroll.native="scrolling"
            >
              <NuxtLink
                v-for="(child, j) in item.children"
                class="aside__nav__ul__li__sublinks__link scale-on-hover"
                :to="child.link"
                exact
                :key="j"
                :class="{
                  'aside__nav__ul__li__sublinks__link--siblings':
                    j === currentIndexSublinks - 1 ||
                    j === currentIndexSublinks + 1,
                }"
                @mouseenter="currentIndexSublinks = j"
              >
                <img
                  class="aside__nav__ul__li__sublinks__link__icon"
                  :src="`assets/icons/${child.icon}.svg`"
                  :alt="child.alt"
                />
                {{ child.label }}
              </NuxtLink>
              <span
                v-if="shouldDisplayArrow(i)"
                class="aside__nav__ul__li__sublinks__arrow"
                ref="arrow"
                @click="scrollWithArrow(i)"
              >
                <img
                  class="aside__nav__ul__li__sublinks__arrow__icon"
                  src="@/assets/icons/arrow_scroll.svg"
                  alt="arrow icon scroll"
                />
              </span>
            </div>
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
  display: none;

  @media (min-width: $big-tablet-screen) {
    inset: 0 0 0 auto;
    width: fit-content;
    height: 100svh;
    display: flex;
    z-index: 3;
    position: fixed;
  }

  &__nav {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(6px);
    height: 100%;
    width: fit-content;
    background-color: $text-color-faded;

    &__ul {
      display: flex;
      padding: 1rem;
      cursor: pointer;
      flex-direction: column;
      gap: 1rem;
      overflow-x: inherit;
      width: 100%;
      background-image: none;

      &__li {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: $radius;
        backdrop-filter: blur(20px);
        position: relative;
        transition:
          0.4s background-color ease,
          0.4s transform ease;
        &:hover,
        &:active {
          background-color: $text-color;
        }

        &__link {
          padding: 1rem;
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

          &:before {
            content: "";
            z-index: -1;
            display: block;
            background-image: linear-gradient(transparent 50%, $text-color);
            width: 100%;
            height: 100%;
            border-radius: $radius;
            position: absolute;
            bottom: 0;
          }

          @media (min-width: $big-tablet-screen) {
            flex-direction: row;
            font-size: 1.1rem;
            padding: 1rem;

            &:hover,
            &:active {
              & ~ .aside__nav__ul__li__sublinks {
                display: flex;
                opacity: 1;
              }
            }

            &::before {
              display: none;
            }
          }

          &__icon {
            width: 1.5rem;
            height: 1.5rem;
          }
        }

        &__sublinks {
          flex-direction: column;
          align-items: flex-end;
          gap: 1rem;
          position: absolute;
          padding-right: 2rem;
          padding-left: 1rem;
          display: none;
          width: fit-content;
          inset: auto 8rem auto auto;
          bottom: inherit;
          opacity: 0;
          background-color: transparent;
          transition: 0.4s opacity ease;

          &:hover,
          &:active {
            display: flex;
            opacity: 1;
          }

          &__link {
            display: flex;
            align-items: center;
            padding: 1rem;
            gap: 0.5rem;
            background-color: $text-color-faded;
            backdrop-filter: blur(6px);
            border-radius: $radius;
            color: $text-color-alt;
            transition:
              background-color 0.4s ease,
              transform 0.4s ease;
            white-space: nowrap;
            width: 100%;
            text-shadow: $shadow-text;

            &:hover,
            &:active {
              background-color: $text-color;
            }

            &--siblings {
              background-color: $text-color-faded-strong;
              transform: scale(1.01);
            }

            &__icon {
              width: 1.5rem;
              height: 1.5rem;
            }
          }

          &__arrow {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1rem;
            width: 40px;
            height: 40px;
            background-color: $text-color;
            position: fixed;
            top: 210px;
            right: 250px;
            cursor: pointer;
            border-radius: 50%;
            box-shadow: $shadow;
            animation: moveDown 2s infinite;

            &:hover {
              animation-play-state: paused;
            }

            &__icon {
              width: 1rem;
              height: 1rem;
            }

            @keyframes moveDown {
              0% {
                transform: translateY(0);
              }
              90% {
                transform: translateY(10px);
              }
              100% {
                transform: translateY(0);
              }
            }
          }

          &--scrollable {
            overflow-y: scroll;
            height: 400px;
            max-height: 100svh;
            padding: 0 2rem;
            border-radius: $radius;
            justify-content: flex-start;
            scroll-behavior: smooth;
          }
        }

        &--siblings {
          background-color: $text-color-faded;
          transform: scale(1.01);
        }
      }
    }
  }
}
</style>
