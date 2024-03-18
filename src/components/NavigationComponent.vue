<script setup>
import { ref } from "vue";
import { groupBy } from "@/utils/groupBy.js";
const hoveredElements = ref([]);
const mobileSublinksToDisplay = ref("");
const scrollableElement = ref(null);
const draggableElement = ref();
const arrow = ref(null);
const isMenuOpen = ref(true);
let childrenLinksHaveBeenDisplayed = false;
let lastScrollTop = 0;
const menuElements = [
  {
    parent: "services",
    label: "Private jet charters",
    path: "/services/private-jet-charters",
    hoveredElements: [1, 1.2],
    src: "_nuxt/assets/icons/award_star.svg",
    alt: "menu icon private jet charters",
    id: 1.1,
  },
  {
    parent: "services",
    label: "Business charters",
    path: "/services/business-charters",
    hoveredElements: [1, 1.1, 1.3],
    src: "_nuxt/assets/icons/business_center.svg",
    alt: "menu icon business charters",
    id: 1.2,
  },
  {
    parent: "services",
    label: "Family jet charters",
    path: "/services/family-jet-charters",
    hoveredElements: [1, 1.2, 1.4],
    src: "_nuxt/assets/icons/group_add.svg",
    alt: "menu icon family jet charters",
    id: 1.3,
  },
  {
    parent: "services",
    label: "Empty legs",
    path: "/services/empty-legs",
    hoveredElements: [1, 1.3, 1.5],
    src: "_nuxt/assets/icons/flight_class.svg",
    alt: "menu icon empty legs",
    id: 1.4,
  },
  {
    parent: "services",
    label: "Pet-friendly charters",
    path: "/services/pet-friendly-charters",
    hoveredElements: [1, 1.4, 1.6],
    src: "_nuxt/assets/icons/pet_supplies.svg",
    alt: "menu icon pet-friendly charters",
    id: 1.5,
  },
  {
    parent: "services",
    label: "Private jet amenities",
    path: "/services/private-jet-amenities",
    hoveredElements: [1, 1.5, 1.7],
    src: "_nuxt/assets/icons/coffee.svg",
    alt: "menu icon private jet amenities",
    id: 1.6,
  },
  {
    parent: "services",
    label: "Off-fleet requests",
    path: "/services/off-fleet-requests",
    hoveredElements: [1, 1.6, 1.8],
    src: "_nuxt/assets/icons/network_node.svg",
    alt: "menu icon off fleet requests",
    id: 1.7,
  },
  {
    parent: "services",
    label: "Prices",
    path: "/services/prices",
    hoveredElements: [1, 1.7, 1.9],
    src: "_nuxt/assets/icons/attach_money.svg",
    alt: "menu icon prices",
    id: 1.8,
  },
  {
    parent: "services",
    label: "Aircraft management",
    path: "/services/aircraft-management",
    hoveredElements: [1, 1.8],
    src: "_nuxt/assets/icons/service_toolbox.svg",
    alt: "menu icon aircraft management",
    id: 1.9,
  },
  {
    parent: "aircrafts",
    label: "PC12",
    path: "/services/pc12",
    hoveredElements: [3, 3.2],
    src: "_nuxt/assets/icons/airplanemode_active.svg",
    alt: "menu icon pc12",
    id: 3.1,
  },
  {
    parent: "aircrafts",
    label: "Phenom 100",
    path: "/services/phenom-100",
    hoveredElements: [3, 3.1, 3.3],
    src: "_nuxt/assets/icons/airplanemode_active.svg",
    alt: "menu icon phenom 100",
    id: 3.2,
  },
  {
    parent: "aircrafts",
    label: "Phenom 300",
    path: "/services/phenom-300",
    hoveredElements: [3, 3.2, 3.4],
    src: "_nuxt/assets/icons/airplanemode_active.svg",
    alt: "menu icon phenom 300",
    id: 3.3,
  },
  {
    parent: "aircrafts",
    label: "Safety",
    path: "/services/safety",
    hoveredElements: [3, 3.3],
    src: "_nuxt/assets/icons/health_and_safety.svg",
    alt: "menu icon safety",
    id: 3.4,
  },
  {
    parent: "aboutUs",
    label: "Our story",
    path: "/services/our-story",
    hoveredElements: [4, 4.2],
    src: "_nuxt/assets/icons/book_2.svg",
    alt: "menu icon our story",
    id: 4.1,
  },
  {
    parent: "aboutUs",
    label: "Blog",
    path: "/services/blog",
    hoveredElements: [4, 4.1, 4.3],
    src: "_nuxt/assets/icons/article.svg",
    alt: "menu icon blog",
    id: 4.2,
  },
  {
    parent: "aboutUs",
    label: "Contact",
    path: "/services/contact",
    hoveredElements: [4, 4.2],
    src: "_nuxt/assets/icons/alternate_email.svg",
    alt: "menu icon contact",
    id: 4.3,
  },
];
const linksGroupedByParent = groupBy(menuElements, "parent");

function scrolling() {
  let scrollPercent =
    (event.target.scrollTop /
      (scrollableElement.value.scrollHeight -
        scrollableElement.value.clientHeight)) *
    100;

  arrow.value.style.opacity = `${100 - scrollPercent}%`;
}

function scrollWithArrow() {
  scrollableElement.value.scrollBy(0, 120);
}

window.addEventListener("scroll", function () {
  let st = window.pageYOffset || document.documentElement.scrollTop;
  if (st > window.innerHeight / 2 && st > lastScrollTop) {
    if (mobileSublinksToDisplay.value !== "" && draggableElement.value) {
      // draggableElement.value.style.maxHeight = "fit-content";
      childrenLinksHaveBeenDisplayed = true;
    } else {
      isMenuOpen.value = false;
    }
  } else if (st > window.innerHeight / 2 && st < lastScrollTop) {
    isMenuOpen.value = true;
    mobileSublinksToDisplay.value = "";
  }
  lastScrollTop = st <= 0 ? 0 : st;
});

function handleDrag() {
  if (draggableElement.value) {
    draggableElement.value.style.height = `${
      draggableElement.value.scrollTop * 2
    }px`;
    draggableElement.value.style.maxHeight = "fit-content";
    console.log(
      draggableElement.value.scrollTop,
      draggableElement.value.style.height
    );
    if (draggableElement.value.scrollTop <= 40) {
      mobileSublinksToDisplay = "";
    }
  }
}
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
            @touchstart.prevent="mobileSublinksToDisplay = 'services'"
            @mouseenter="hoveredElements = [0, 2]"
            @mouseleave="hoveredElements = []"
            :class="{
              'aside__nav__ul__li--siblings': hoveredElements.includes(1),
            }"
          >
            <NuxtLink class="aside__nav__ul__li__link" to="/services" exact
              ><img
                class="aside__nav__ul__li__link__icon"
                src="@/assets/icons/concierge.svg"
                alt="menu icon services"
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
                :to="link.path"
                exact
                v-for="link in linksGroupedByParent.services"
                :key="link.id"
                @mouseenter="hoveredElements = link.hoveredElements"
                @mouseleave="hoveredElements = []"
                :class="{
                  'aside__nav__ul__li__sublinks__link--siblings':
                    hoveredElements.includes(link.id),
                }"
                ><img
                  class="aside__nav__ul__li__sublinks__link__icon"
                  :src="link.src"
                  :alt="link.alt"
                />{{ link.label }}</NuxtLink
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
            <NuxtLink class="aside__nav__ul__li__link" to="/airports" exact
              ><img
                class="aside__nav__ul__li__link__icon"
                src="@/assets/icons/map.svg"
                alt="menu icon airports"
              />Airports</NuxtLink
            >
          </li>
          <li
            class="aside__nav__ul__li scale-on-hover"
            @touchstart="mobileSublinksToDisplay = 'aircrafts'"
            @mouseenter="hoveredElements = [2, 4]"
            @mouseleave="hoveredElements = []"
            :class="{
              'aside__nav__ul__li--siblings': hoveredElements.includes(3),
            }"
          >
            <NuxtLink class="aside__nav__ul__li__link" to="/aircrafts" exact
              ><img
                class="aside__nav__ul__li__link__icon"
                src="@/assets/icons/airlines.svg"
                alt="menu icon aircrafts"
              />Aircrafts</NuxtLink
            >
            <div class="aside__nav__ul__li__sublinks">
              <NuxtLink
                class="aside__nav__ul__li__sublinks__link scale-on-hover"
                :to="link.path"
                exact
                v-for="link in linksGroupedByParent.aircrafts"
                :key="link.id"
                @mouseenter="hoveredElements = link.hoveredElements"
                @mouseleave="hoveredElements = []"
                :class="{
                  'aside__nav__ul__li__sublinks__link--siblings':
                    hoveredElements.includes(link.id),
                }"
                ><img
                  class="aside__nav__ul__li__sublinks__link__icon"
                  :src="link.src"
                  :alt="link.alt"
                />{{ link.label }}</NuxtLink
              >
            </div>
          </li>
          <li
            class="aside__nav__ul__li scale-on-hover"
            @touchstart.prevent="mobileSublinksToDisplay = 'aboutUs'"
            @mouseenter="hoveredElements = [3]"
            @mouseleave="hoveredElements = []"
            :class="{
              'aside__nav__ul__li--siblings': hoveredElements.includes(4),
            }"
          >
            <NuxtLink class="aside__nav__ul__li__link" to="/about-us" exact
              ><img
                class="aside__nav__ul__li__link__icon"
                src="@/assets/icons/info.svg"
                alt="menu icon about us"
              />About us</NuxtLink
            >
            <div class="aside__nav__ul__li__sublinks">
              <NuxtLink
                class="aside__nav__ul__li__sublinks__link scale-on-hover"
                :to="link.path"
                v-for="link in linksGroupedByParent.aboutUs"
                :key="link.id"
                exact
                @mouseenter="hoveredElements = link.hoveredElements"
                @mouseleave="hoveredElements = []"
                :class="{
                  'aside__nav__ul__li__sublinks__link--siblings':
                    hoveredElements.includes(link.id),
                }"
                ><img
                  class="aside__nav__ul__li__sublinks__link__icon"
                  :src="link.src"
                  :alt="link.alt"
                />Our story</NuxtLink
              >
            </div>
          </li>
        </ul>
        <Transition>
          <ul
            class="aside__nav__mobile-sublinks"
            ref="draggableElement"
            v-if="mobileSublinksToDisplay"
            @mouseenter="handleDrag()"
            @mousemove="handleDrag()"
          >
            <li
              class="aside__nav__mobile-sublinks__li"
              v-for="link in linksGroupedByParent[mobileSublinksToDisplay]"
              :key="link.id"
            >
              <NuxtLink
                class="aside__nav__mobile-sublinks__li__link"
                :to="link.path"
              >
                <img
                  class="aside__nav__mobile-sublinks__li__link__icon"
                  :src="link.src"
                  :alt="link.alt"
                />{{ link.label }}
              </NuxtLink>
            </li>
          </ul></Transition
        >
        <span
          class="aside__nav__invisible"
          @click="mobileSublinksToDisplay = ''"
          v-if="mobileSublinksToDisplay"
        ></span></nav
    ></Transition>
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
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $text-color-faded-strong;
    width: 100%;
    height: fit-content;
    backdrop-filter: blur(6px);

    @media (min-width: $big-tablet-screen) {
      height: 100%;
      width: fit-content;
      background-color: $text-color-faded;
    }

    &__ul {
      display: flex;
      gap: 0.5rem;
      width: 100%;
      overflow-x: scroll;
      padding: 1rem;

      @media (min-width: $big-tablet-screen) {
        flex-direction: column;
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

    &__mobile-sublinks {
      overflow: scroll;
      z-index: -2;
      position: absolute;
      bottom: 4.55rem;
      display: flex;
      width: 100%;
      flex-direction: column;
      background-color: $text-color-faded;
      max-height: 80px;
      min-height: 80px;
      height: 80px;
      transition: max-height 0.4s ease;

      &:after {
        content: "";
        display: block;
        background-image: linear-gradient(transparent, $text-color 80%);
        width: 100%;
        height: 100px;
        position: absolute;
        bottom: -4.55rem;
      }

      // overflow: scroll;

      @media (min-width: $big-tablet-screen) {
        display: none;
      }

      &__li {
        position: relative;

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
    &__invisible {
      display: block;
      z-index: -3;
      opacity: 0.4;
      width: 100%;
      height: calc(100svh - 80px);
      position: fixed;
      bottom: calc(4.55rem + 80px);
      @media (min-width: $big-tablet-screen) {
        display: none;
      }
    }
  }
}
</style>
