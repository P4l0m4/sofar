<script setup>
import { ref, onMounted } from "vue";

const hoveredElements = ref([]);
const scrollableElement = ref(null);
const arrow = ref(null);
const isMenuOpen = ref(true);
let lastScrollTop = 0;
const menuElements = [
  {
    label: "Private jet charters",
    path: "/services/private-jet-charters",
    hoveredElements: [1, 1.2],
    src: "_nuxt/assets/icons/award_star.svg",
    alt: "menu icon private jet charters",
    id: 1.1,
  },
  {
    label: "Business charters",
    path: "/services/business-charters",
    hoveredElements: [1, 1.1, 1.3],
    src: "_nuxt/assets/icons/business_center.svg",
    alt: "menu icon business charters",
    id: 1.2,
  },
  {
    label: "Family jet charters",
    path: "/services/family-jet-charters",
    hoveredElements: [1, 1.2, 1.4],
    src: "_nuxt/assets/icons/group_add.svg",
    alt: "menu icon family jet charters",
    id: 1.3,
  },
  {
    label: "Empty legs",
    path: "/services/empty-legs",
    hoveredElements: [1, 1.3, 1.5],
    src: "_nuxt/assets/icons/flight_class.svg",
    alt: "menu icon empty legs",
    id: 1.4,
  },
  {
    label: "Pet-friendly charters",
    path: "/services/pet-friendly-charters",
    hoveredElements: [1, 1.4, 1.6],
    src: "_nuxt/assets/icons/pet_supplies.svg",
    alt: "menu icon pet-friendly charters",
    id: 1.5,
  },
  {
    label: "Private jet amenities",
    path: "/services/private-jet-amenities",
    hoveredElements: [1, 1.5, 1.7],
    src: "_nuxt/assets/icons/coffee.svg",
    alt: "menu icon private jet amenities",
    id: 1.6,
  },
  {
    label: "Off-fleet requests",
    path: "/services/off-fleet-requests",
    hoveredElements: [1, 1.6, 1.8],
    src: "_nuxt/assets/icons/network_node.svg",
    alt: "menu icon off fleet requests",
    id: 1.7,
  },
  {
    label: "Prices",
    path: "/services/prices",
    hoveredElements: [1, 1.7, 1.9],
    src: "_nuxt/assets/icons/attach_money.svg",
    alt: "menu icon prices",
    id: 1.8,
  },
  {
    label: "Aircraft management",
    path: "/services/aircraft-management",
    hoveredElements: [1, 1.8],
    src: "_nuxt/assets/icons/service_toolbox.svg",
    alt: "menu icon aircraft management",
    id: 1.9,
  },
];

function scrolling() {
  let scrollPercent =
    (event.target.scrollTop /
      (scrollableElement.value.scrollHeight -
        scrollableElement.value.clientHeight)) *
    100;

  arrow.value.style.opacity = `${100 - scrollPercent}%`;
}

function scrollWithArrow() {
  scrollableElement.value.scrollBy(0, 100);
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
    <Transition>
      <nav class="aside__nav" v-if="isMenuOpen">
        <ul class="aside__nav__ul">
          <li
            class="aside__nav__ul__li scale-on-hover"
            @mouseenter="hoveredElements = [1]"
            @mouseleave="hoveredElements = []"
            :class="{
              'aside__nav__ul__li--siblings': hoveredElements.includes(0),
            }"
          >
            <NuxtLink class="aside__nav__ul__li__link" to="/booking" exact
              ><img
                class="aside__nav__ul__li__link__icon"
                src="@/assets/icons/airplane_ticket.svg"
                alt="menu icon booking"
              />Booking</NuxtLink
            >
          </li>
          <li
            class="aside__nav__ul__li scale-on-hover"
            @mouseenter="hoveredElements = [0, 2]"
            @mouseleave="hoveredElements = []"
            :class="{
              'aside__nav__ul__li--siblings': hoveredElements.includes(1),
            }"
          >
            <NuxtLink class="aside__nav__ul__li__link" to="/booking" exact
              ><img
                class="aside__nav__ul__li__link__icon"
                src="@/assets/icons/concierge.svg"
                alt="menu icon booking"
              />Services</NuxtLink
            >

            <div
              id="scrollable-sublinks"
              class="aside__nav__ul__li__sublinks"
              v-on:scroll.native="scrolling"
              ref="scrollableElement"
            >
              <NuxtLink
                class="aside__nav__ul__li__sublinks__link scale-on-hover"
                to="/services/private-jet-charters"
                exact
                v-for="menuElement in menuElements"
                :key="menuElement.id"
                @mouseenter="hoveredElements = menuElement.hoveredElements"
                @mouseleave="hoveredElements = []"
                :class="{
                  'aside__nav__ul__li__sublinks__link--siblings':
                    hoveredElements.includes(menuElement.id),
                }"
                ><img
                  class="aside__nav__ul__li__sublinks__link__icon"
                  :src="menuElement.src"
                  :alt="menuElement.alt"
                />{{ menuElement.label }}</NuxtLink
              >
              <span
                class="aside__nav__ul__li__sublinks__arrow"
                ref="arrow"
                @click="scrollWithArrow"
                ><img
                  class="aside__nav__ul__li__sublinks__arrow__icon"
                  src="@/assets/icons/arrow_scroll.svg"
                  alt="arrow icon scroll"
              /></span>
            </div>
          </li>
          <li
            class="aside__nav__ul__li scale-on-hover"
            @mouseenter="hoveredElements = [1, 3]"
            @mouseleave="hoveredElements = []"
            :class="{
              'aside__nav__ul__li--siblings': hoveredElements.includes(2),
            }"
          >
            <NuxtLink class="aside__nav__ul__li__link" to="/booking" exact
              ><img
                class="aside__nav__ul__li__link__icon"
                src="@/assets/icons/map.svg"
                alt="menu icon airports"
              />Airports</NuxtLink
            >
          </li>
          <li
            class="aside__nav__ul__li scale-on-hover"
            @mouseenter="hoveredElements = [2, 4]"
            @mouseleave="hoveredElements = []"
            :class="{
              'aside__nav__ul__li--siblings': hoveredElements.includes(3),
            }"
          >
            <NuxtLink class="aside__nav__ul__li__link" to="/booking" exact
              ><img
                class="aside__nav__ul__li__link__icon"
                src="@/assets/icons/airlines.svg"
                alt="menu icon aircrafts"
              />Aircrafts</NuxtLink
            >
            <div class="aside__nav__ul__li__sublinks">
              <NuxtLink
                class="aside__nav__ul__li__sublinks__link scale-on-hover"
                to="/aircrafts/pc12"
                exact
                @mouseenter="hoveredElements = [3, 3.2]"
                @mouseleave="hoveredElements = []"
                :class="{
                  'aside__nav__ul__li__sublinks__link--siblings':
                    hoveredElements.includes(3.1),
                }"
                ><img
                  class="aside__nav__ul__li__sublinks__link__icon"
                  src="@/assets/icons/airplanemode_active.svg"
                  alt="menu icon PC12"
                />PC12</NuxtLink
              >
              <NuxtLink
                class="aside__nav__ul__li__sublinks__link scale-on-hover"
                to="/aircrafts/phenom-100"
                exact
                @mouseenter="hoveredElements = [3, 3.1, 3.3]"
                @mouseleave="hoveredElements = []"
                :class="{
                  'aside__nav__ul__li__sublinks__link--siblings':
                    hoveredElements.includes(3.2),
                }"
                ><img
                  class="aside__nav__ul__li__sublinks__link__icon"
                  src="@/assets/icons/airplanemode_active.svg"
                  alt="menu icon Phenom 100"
                />Phenom 100</NuxtLink
              >

              <NuxtLink
                class="aside__nav__ul__li__sublinks__link scale-on-hover"
                to="/aircrafts/phenom-300"
                exact
                @mouseenter="hoveredElements = [3, 3.2, 3.4]"
                @mouseleave="hoveredElements = []"
                :class="{
                  'aside__nav__ul__li__sublinks__link--siblings':
                    hoveredElements.includes(3.3),
                }"
                ><img
                  class="aside__nav__ul__li__sublinks__link__icon"
                  src="@/assets/icons/airplanemode_active.svg"
                  alt="menu icon phenom 300"
                />Phenom 300</NuxtLink
              >
              <NuxtLink
                class="aside__nav__ul__li__sublinks__link scale-on-hover"
                to="/aircrafts/safety"
                exact
                @mouseenter="hoveredElements = [3, 3.3, 3.5]"
                @mouseleave="hoveredElements = []"
                :class="{
                  'aside__nav__ul__li__sublinks__link--siblings':
                    hoveredElements.includes(3.4),
                }"
                ><img
                  class="aside__nav__ul__li__sublinks__link__icon"
                  src="@/assets/icons/health_and_safety.svg"
                  alt="menu icon safety"
                />Safety</NuxtLink
              >
            </div>
          </li>
          <li
            class="aside__nav__ul__li scale-on-hover"
            @mouseenter="hoveredElements = [3]"
            @mouseleave="hoveredElements = []"
            :class="{
              'aside__nav__ul__li--siblings': hoveredElements.includes(4),
            }"
          >
            <NuxtLink class="aside__nav__ul__li__link" to="/booking" exact
              ><img
                class="aside__nav__ul__li__link__icon"
                src="@/assets/icons/info.svg"
                alt="menu icon about us"
              />About us</NuxtLink
            >
            <div class="aside__nav__ul__li__sublinks">
              <NuxtLink
                class="aside__nav__ul__li__sublinks__link scale-on-hover"
                to="/booking"
                exact
                @mouseenter="hoveredElements = [4, 4.2]"
                @mouseleave="hoveredElements = []"
                :class="{
                  'aside__nav__ul__li__sublinks__link--siblings':
                    hoveredElements.includes(4.1),
                }"
                ><img
                  class="aside__nav__ul__li__sublinks__link__icon"
                  src="@/assets/icons/book_2.svg"
                  alt="menu icon our story"
                />Our story</NuxtLink
              >
              <NuxtLink
                class="aside__nav__ul__li__sublinks__link scale-on-hover"
                to="/booking"
                exact
                @mouseenter="hoveredElements = [4, 4.1, 4.3]"
                @mouseleave="hoveredElements = []"
                :class="{
                  'aside__nav__ul__li__sublinks__link--siblings':
                    hoveredElements.includes(4.2),
                }"
                ><img
                  class="aside__nav__ul__li__sublinks__link__icon"
                  src="@/assets/icons/article.svg"
                  alt="menu icon blog"
                />Blog</NuxtLink
              >

              <NuxtLink
                class="aside__nav__ul__li__sublinks__link scale-on-hover"
                to="/booking"
                exact
                @mouseenter="hoveredElements = [4, 4.2]"
                @mouseleave="hoveredElements = []"
                :class="{
                  'aside__nav__ul__li__sublinks__link--siblings':
                    hoveredElements.includes(4.3),
                }"
                ><img
                  class="aside__nav__ul__li__sublinks__link__icon"
                  src="@/assets/icons/alternate_email.svg"
                  alt="menu icon contact"
                />Contact</NuxtLink
              >
            </div>
          </li>
        </ul>
      </nav></Transition
    >
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
    inset: 0 0 0 auto;
    width: fit-content;
    height: 100svh;
  }

  &__nav {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $text-color-faded;
    width: 100%;
    height: fit-content;
    backdrop-filter: blur(6px);

    @media (min-width: $big-tablet-screen) {
      height: 100%;
      width: fit-content;
    }

    &__ul {
      display: flex;
      gap: 0.5rem;
      width: 100%;
      padding: 0.5rem 0 0.5rem 0.5rem;
      overflow-x: scroll;

      @media (min-width: $big-tablet-screen) {
        flex-direction: column;
        padding: 1rem;
        gap: 1rem;
        overflow-x: inherit;
        width: 100%;
      }

      &__li {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: $radius;
        backdrop-filter: blur(6px);
        position: relative;
        transition:
          0.4s background-color ease,
          0.4s transform ease;
        &:hover {
          background-color: $text-color;
        }

        &__link {
          padding: 0.5rem 1rem;
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

          @media (min-width: $big-tablet-screen) {
            flex-direction: row;
            font-size: 1.1rem;
            padding: 1rem;

            &:hover {
              & ~ .aside__nav__ul__li__sublinks {
                display: flex;
                opacity: 1;
              }
            }
          }

          &__icon {
            width: 1.2rem;
            height: 1.2rem;

            @media (min-width: $big-tablet-screen) {
              width: 1.5rem;
              height: 1.5rem;
            }
          }
        }

        &__sublinks {
          display: none;
          opacity: 0;
          flex-direction: column;
          align-items: flex-end;
          gap: 1rem;
          position: absolute;
          padding-right: 2rem;
          padding-left: 1rem;
          right: 8rem;
          transition: 0.4s opacity ease;

          &:hover {
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

            &:hover {
              background-color: $text-color;
            }

            &--siblings {
              background-color: $text-color-faded-strong;
              transform: scale(1.01);
            }

            &__icon {
              width: 1.2rem;
              height: 1.2rem;

              @media (min-width: $big-tablet-screen) {
                width: 1.5rem;
                height: 1.5rem;
              }
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
        }
        #scrollable-sublinks {
          overflow-y: scroll;
          height: 400px;
          padding: 0 2rem;
          border-radius: $radius;
          justify-content: flex-start;
          scroll-behavior: smooth;
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
