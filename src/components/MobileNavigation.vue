<script setup>
import { ref } from "vue";
const scrollableElement = ref({});
const arrow = ref(null);
const isMenuOpen = ref(true);
let lastScrollTop = 0;

const currentIndex = ref(null);
const currentIndexSublinks = ref(null);

const menuItems = [
  {
    label: "Booking",
    link: "/booking",
    icon: "airplane_ticket",
    alt: "menu icon booking",
  },
  {
    label: "Services",
    link: "/booking",
    icon: "concierge",
    alt: "menu icon booking",
    children: [
      {
        label: "Private jet charters",
        link: "/services/private-jet-charters",
        icon: "award_star",
        alt: "menu icon private jet charters",
      },
      {
        label: "Business charters",
        link: "/services/business-charters",
        icon: "business_center",
        alt: "menu icon business charters",
      },
      {
        parent: "services",
        label: "Family jet charters",
        link: "/services/family-jet-charters",
        icon: "group_add",
        alt: "menu icon family jet charters",
      },
      {
        parent: "services",
        label: "Empty legs",
        link: "/services/empty-legs",
        icon: "flight_class",
        alt: "menu icon empty legs",
      },
      {
        label: "Pet-friendly charters",
        link: "/services/pet-friendly-charters",
        icon: "pet_supplies",
        alt: "menu icon pet-friendly charters",
      },
      {
        label: "Private jet amenities",
        link: "/services/private-jet-amenities",
        icon: "coffee",
        alt: "menu icon private jet amenities",
      },
      {
        label: "Off-fleet requests",
        link: "/services/off-fleet-requests",
        icon: "network_node",
        alt: "menu icon off fleet requests",
      },
      {
        label: "Prices",
        link: "/services/prices",
        icon: "attach_money",
        alt: "menu icon prices",
      },
      {
        label: "Aircraft management",
        link: "/services/aircraft-management",
        icon: "service_toolbox",
        alt: "menu icon aircraft management",
      },
    ],
  },
  {
    label: "Airports",
    link: "/booking",
    icon: "map",
    alt: "menu icon booking",
  },
  {
    label: "Aircraft",
    link: "/booking",
    icon: "airlines",
    alt: "menu icon booking",
    children: [
      {
        label: "PC12",
        link: "/services/pc12",
        icon: "airplanemode_active",
        alt: "menu icon pc12",
      },
      {
        label: "Phenom 100",
        link: "/services/phenom-100",
        icon: "airplanemode_active",
        alt: "menu icon phenom 100",
      },
      {
        label: "Phenom 300",
        link: "/services/phenom-300",
        icon: "airplanemode_active",
        alt: "menu icon phenom 300",
      },
      {
        label: "Safety",
        link: "/services/safety",
        icon: "health_and_safety",
        alt: "menu icon safety",
      },
    ],
  },
  {
    label: "About us",
    link: "/booking",
    icon: "info",
    alt: "menu icon booking",
    children: [
      {
        label: "Our story",
        link: "/services/our-story",
        icon: "book_2",
        alt: "menu icon our story",
      },
      {
        label: "Blog",
        link: "/services/blog",
        icon: "article",
        alt: "menu icon blog",
      },
      {
        label: "Contact",
        link: "/services/contact",
        icon: "alternate_email",
        alt: "menu icon contact",
      },
    ],
  },
];

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

function handleDrag() {
  if (draggableElement.value) {
    // draggableElement.value.style.height += `${
    //   event.touches[0].clientY / 4.4
    // }px`;
    draggableElement.value.style.height = "fit-content";
  }
}

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
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $text-color-faded-strong;
    width: 100%;
    height: fit-content;
    backdrop-filter: blur(6px);

    &__ul {
      background-image: linear-gradient(transparent, $text-color 40%);
      display: flex;
      gap: 0.5rem;
      width: 100%;
      overflow-x: scroll;
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
        position: relative;
        transition:
          0.4s background-color ease,
          0.4s transform ease;
        &:hover,
        &:active {
          background-color: $text-color;
        }

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

          // &:before {
          //   content: "";
          //   z-index: -1;
          //   display: block;
          //   background-image: linear-gradient(transparent 50%, $text-color);
          //   width: 100%;
          //   height: 100%;
          //   border-radius: $radius;
          //   position: absolute;
          //   bottom: 0;
          // }

          &__icon {
            width: 1.2rem;
            height: 1.2rem;
          }
        }
      }
    }

    &__mobile-sublinks {
      z-index: -2;
      position: absolute;
      bottom: 6.55rem;
      display: flex;
      width: 100%;
      flex-direction: column;
      background-color: $text-color-faded;
      height: 70px;

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
      height: calc(100svh - 70px);
      position: fixed;
      bottom: calc(6.55rem + 70px);
    }
  }
}
</style>
