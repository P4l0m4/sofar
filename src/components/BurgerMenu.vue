<script setup lang="ts">
import { ref } from "vue";
import { colors } from "@/utils/colors";
import partnerships from "@/assets/images/menu/partnerships.webp";
import { onClickOutside } from "@vueuse/core";

import ourStory from "@/assets/images/menu/our-story.webp";
import ourFleet from "@/assets/images/menu/our-fleet.webp";
import operations from "@/assets/images/menu/operations.webp";
import careers from "@/assets/images/menu/careers.webp";
import privateJetCharter from "@/assets/images/menu/private-jet-charter.webp";
import corporateJetCharter from "@/assets/images/menu/corporate-jet-charter.webp";
import emptyLegs from "@/assets/images/menu/empty-legs.webp";
import aircraftManagement from "@/assets/images/menu/aircraft-management.webp";
import petFriendlyJet from "@/assets/images/menu/pet-friendly-jet.webp";
import flights from "@/assets/images/menu/flights.webp";
import newYork from "@/assets/images/menu/new-york.webp";
import california from "@/assets/images/menu/california.webp";
import florida from "@/assets/images/menu/florida.webp";
import illinois from "@/assets/images/menu/illinois.webp";
import utah from "@/assets/images/menu/utah.webp";
import others from "@/assets/images/menu/others.webp";
import news from "@/assets/images/menu/news.webp";
import testimonials from "@/assets/images/menu/testimonials.webp";
import events from "@/assets/images/menu/events.webp";
import destinations from "@/assets/images/menu/destinations.webp";
import lightJet from "@/assets/images/aircraft/lightjet-sofar.svg";
import midsizeJet from "@/assets/images/aircraft/midsize-jet-sofar.svg";
import superMidsizeJet from "@/assets/images/aircraft/super-midsize-jet-sofar.svg";
import heavyJet from "@/assets/images/aircraft/heavy-jet-sofar.svg";
import ultraLongHaulJet from "@/assets/images/aircraft/ultra-long-haul-jet.svg";

interface MenuItem {
  label: string;
  link?: string;
  alt?: string;
  children?: MenuChildren[];
}

interface MenuChildren {
  label: string;
  link: string;
  image?: string;
  alt: string;
}

const isMenuOpen = ref(false);
const selectedMenuItem = ref<MenuItem | null>(null);

const target = ref<HTMLElement | null>(null);

onClickOutside(target, () => (isMenuOpen.value = false), {
  ignore: [".menu", ".burger-menu"],
});

const menuItems = [
  {
    label: "Booking",
    link: "/booking",
  },
  {
    label: "Our story",

    children: [
      {
        label: "Our story",
        link: "/our-story",
        alt: "private jet our story",
        image: ourStory,
      },
      {
        label: "Our fleet",
        link: "/our-story/our-fleet",
        alt: "private jet our fleet",
        image: ourFleet,
      },
      {
        label: "Operations",
        link: "/our-story/operations",
        alt: "private jet operations",
        image: operations,
      },
      {
        label: "Careers",
        link: "/our-story/careers",
        alt: "private jet contact",
        image: careers,
      },
    ],
  },
  {
    label: "Services",

    children: [
      {
        label: "Private jet charter",
        link: "/services/private-jet-charters",
        alt: "private jet private jet charters",
        image: privateJetCharter,
      },
      {
        label: "Corporate jet charter",
        link: "/services/corporate-jet-charters",
        alt: "private jet corporate charters",
        image: corporateJetCharter,
      },
      {
        label: "Empty legs",
        link: "/services/empty-legs",
        alt: "private jet empty legs",
        image: emptyLegs,
      },
      {
        label: "Aircraft management",
        link: "/services/aircraft-management",
        alt: "private jet aircraft management",
        image: aircraftManagement,
      },
      {
        label: "Pet-friendly jet",
        link: "/services/pet-friendly-charters",
        alt: "private jet pet-friendly charters",
        image: petFriendlyJet,
      },
      {
        label: "Off fleet request",
        link: "/services/off-fleet-requests",
        alt: "private jet off fleet requests",
        image: flights,
      },
      {
        label: "Family jet charter",
        link: "/services/family-jet-charters",
        alt: "private jet family jet charters",
      },
    ],
  },
  {
    label: "Aircraft",

    children: [
      {
        label: "Light Jets",
        link: "/aircraft/light-jets",
        alt: "private jet light jets",
      },
      {
        label: "Midsize Jets",
        link: "/aircraft/midsize-jets",
        alt: "private jet midsize jets",
      },
      {
        label: "Super Midsize Jets",
        link: "/aircraft/super-midsize-jets",
        alt: "private jet super midsize jets",
      },
      {
        label: "Heavy Jets",
        link: "/aircraft/heavy-jets",
        alt: "private jet heavy jets",
      },
      {
        label: "Ultra Long Haul Jets",
        link: "/aircraft/ultra-long-haul-jets",
        alt: "private jet ultra long jets",
      },
    ],
  },
  {
    label: "Destinations",

    children: [
      {
        label: "New York",
        link: "/destinations/us-new-york",
        alt: "private jet new york",
        image: newYork,
      },
      {
        label: "California",
        link: "/destinations/us-california",
        alt: "private jet california",
        image: california,
      },
      {
        label: "Florida",
        link: "/destinations/us-florida",
        alt: "private jet florida",
        image: florida,
      },
      {
        label: "Illinois",
        link: "/destinations/us-illinois",
        alt: "private jet illinois",
        image: illinois,
      },
      {
        label: "Utah",
        link: "/destinations/us-utah",
        alt: "private jet utah",
        image: utah,
      },
      {
        label: "Others",
        link: "/destinations",
        alt: "private jet destinations",
        image: others,
      },
    ],
  },
  {
    label: "Blog",
    link: "/blog",
    alt: "private jet blog",

    children: [
      {
        label: "News",
        link: "/blog#News",
        alt: "private jet news",
        image: news,
      },
      {
        label: "Flights",
        link: "/blog#Flights",
        alt: "private jet flights",
        image: flights,
      },
      {
        label: "Testimonials",
        link: "/blog#Testimonials",
        alt: "private jet testimonials",
        image: testimonials,
      },
      {
        label: "Destinations",
        link: "/blog#Destinations",
        alt: "private jet destinations",
        image: destinations,
      },
      {
        label: "Events",
        link: "/blog#Events",
        alt: "private jet events",
        image: events,
      },
      {
        label: "Partnerships",
        link: "/blog#Partnerships",
        alt: "private jet partnerships",
        image: partnerships,
      },
    ],
  },
  {
    label: "Q&A",
    link: "/q-and-a",
    alt: "private jet questions and answers",
  },
  {
    label: "Contact",
    link: "/contact-us",
    alt: "private jet contact",
  },
];
</script>
<template>
  <span
    ref="target"
    class="burger-menu"
    tabindex="0"
    @click="isMenuOpen = !isMenuOpen"
    @keyup.enter="isMenuOpen = !isMenuOpen"
  >
    <IconComponent
      v-if="!isMenuOpen"
      icon="menu"
      size="1.5rem"
      :color="colors['primary-color']"
    />
    <IconComponent
      v-else
      icon="add"
      size="2rem"
      :color="colors['primary-color']"
      :style="{ transform: isMenuOpen ? 'rotate(45deg)' : 'rotate(0deg)' }"
    />
  </span>
  <Transition>
    <aside class="menu" v-if="isMenuOpen">
      <nav class="menu__nav">
        <ul class="menu__nav__list">
          <NuxtLink class="menu__nav__list__logo" to="/">
            <img src="@/assets/images/logo-light.svg"
          /></NuxtLink>
          <li
            class="menu__nav__list__item"
            v-for="item in menuItems"
            :key="item.label"
            @click="selectedMenuItem = item"
            @keyup.enter="selectedMenuItem = item"
            @keyup.escape="
              isMenuOpen = false;
              selectedMenuItem = null;
            "
            tabindex="0"
          >
            <NuxtLink
              v-if="item.link"
              class="menu__nav__list__item__link"
              :to="item.link"
              ><IconComponent
                v-if="selectedMenuItem?.label === item.label"
                icon="caret_right_bold"
                size="1rem"
                :color="colors['primary-color']"
              />
              {{ item.label }}</NuxtLink
            ><template v-else>
              <IconComponent
                v-if="selectedMenuItem?.label === item.label"
                icon="caret_right_bold"
                size="1rem"
                :color="colors['primary-color']"
              />
              {{ item.label }}</template
            >
          </li>
        </ul>
        <ul v-if="selectedMenuItem?.children" class="menu__nav__children-list">
          <li
            class="menu__nav__children-list__item"
            v-for="child in selectedMenuItem?.children"
            :key="child.label"
            :style="{
              backgroundImage: child.image ? `url(${child.image})` : 'none',
            }"
            @keyup.escape="
              isMenuOpen = false;
              selectedMenuItem = null;
            "
          >
            <NuxtLink
              class="menu__nav__children-list__item__link"
              :to="child.link"
            >
              {{ child.label }}</NuxtLink
            >
          </li>
        </ul>
      </nav>
    </aside></Transition
  >
</template>
<style scoped lang="scss">
.burger-menu {
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 1000;
  background-color: $secondary-color;
  padding: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;

  @media (min-width: $big-tablet-screen) {
    padding: 2rem;
    top: 2rem;
    right: 4rem;
    width: 4rem;
    height: 4rem;
  }
}

.menu {
  background-color: $secondary-color;
  inset: 0 0 0 auto;
  position: fixed;
  z-index: 3;
  width: 100%;

  @media (min-width: $tablet-screen) {
    width: 12rem;
  }

  &__nav {
    display: flex;
    margin-top: 6rem;
    justify-content: end;

    @media (min-width: $desktop-screen) {
      margin-top: 8rem;
    }

    &__list {
      display: flex;
      flex-direction: column;
      list-style: none;
      width: fit-content;
      align-items: end;

      &__logo {
        width: 100%;
        max-width: 100px;
        padding: 1rem;

        @media (min-width: $tablet-screen) {
          padding: 1rem 2rem;
          max-width: 120px;
        }

        @media (min-width: $laptop-screen) {
          max-width: 150px;
        }

        & img {
          width: 100%;
          height: auto;
        }
      }

      &__item {
        display: flex;
        justify-content: end;
        gap: 0.5rem;
        color: $text-color-alt;
        font-size: 1.25rem;
        font-weight: $skinny-thick;
        transition: background-color 0.3s linear;
        padding: 1rem;

        @media (min-width: $tablet-screen) {
          padding: 1rem 2rem;
        }

        &:hover {
          background-color: $secondary-color-darker;
          cursor: pointer;
        }

        &__link {
          color: $text-color-alt;
        }
      }
    }

    &__children-list {
      display: flex;
      flex-direction: column;
      list-style: none;
      inset: 0 9.5rem 0 auto;
      position: fixed;
      z-index: 3;
      background-color: $secondary-color;
      justify-content: center;
      width: calc(100% - 9.35rem);

      @media (min-width: $tablet-screen) {
        inset: 0 12rem 0 auto;
        width: fit-content;
      }

      &__item {
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        filter: contrast(2);
        width: 100%;
        height: 100%;

        @media (min-width: $tablet-screen) {
          width: 220px;
        }

        &__link {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 1rem;
          color: $text-color-alt;
          font-size: 0.85rem;
          font-weight: $skinny-thick;
          letter-spacing: 0.05rem;
          text-transform: uppercase;
          background-color: $secondary-color-faded;
          text-shadow: $shadow-text;
          text-align: center;
          height: 100%;
          transition: background-color 0.3s linear;

          @media (min-width: $tablet-screen) {
            width: 220px;
            white-space: nowrap;
          }

          &:hover {
            background-color: rgba($secondary-color-faded, 0.5);
          }
        }
      }
    }
  }
}
</style>
