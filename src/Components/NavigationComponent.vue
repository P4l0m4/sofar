<script setup>
import { ref } from "vue";

const hoveredElements = ref([]);
</script>
<template>
  <aside class="aside">
    <nav class="aside__nav">
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
          <div id="scrollable-sublinks" class="aside__nav__ul__li__sublinks">
            <NuxtLink
              class="aside__nav__ul__li__sublinks__link scale-on-hover"
              to="/services/private-jet-charters"
              exact
              @mouseenter="hoveredElements = [1, 1.2]"
              @mouseleave="hoveredElements = []"
              :class="{
                'aside__nav__ul__li__sublinks__link--siblings':
                  hoveredElements.includes(1.1),
              }"
              ><img
                class="aside__nav__ul__li__sublinks__link__icon"
                src="@/assets/icons/concierge.svg"
                alt="menu icon booking"
              />Private jet charters</NuxtLink
            >
            <NuxtLink
              class="aside__nav__ul__li__sublinks__link scale-on-hover"
              to="/services/business-charters"
              exact
              @mouseenter="hoveredElements = [1, 1.1, 1.3]"
              @mouseleave="hoveredElements = []"
              :class="{
                'aside__nav__ul__li__sublinks__link--siblings':
                  hoveredElements.includes(1.2),
              }"
              ><img
                class="aside__nav__ul__li__sublinks__link__icon"
                src="@/assets/icons/concierge.svg"
                alt="menu icon booking"
              />Business charters</NuxtLink
            >
            <NuxtLink
              class="aside__nav__ul__li__sublinks__link scale-on-hover"
              to="/services/family-jet-charters"
              exact
              @mouseenter="hoveredElements = [1, 1.2, 1.4]"
              @mouseleave="hoveredElements = []"
              :class="{
                'aside__nav__ul__li__sublinks__link--siblings':
                  hoveredElements.includes(1.3),
              }"
              ><img
                class="aside__nav__ul__li__sublinks__link__icon"
                src="@/assets/icons/concierge.svg"
                alt="menu icon booking"
              />Family jet charters</NuxtLink
            >
            <NuxtLink
              class="aside__nav__ul__li__sublinks__link scale-on-hover"
              to="/services/empty-legs"
              exact
              @mouseenter="hoveredElements = [1, 1.3, 1.5]"
              @mouseleave="hoveredElements = []"
              :class="{
                'aside__nav__ul__li__sublinks__link--siblings':
                  hoveredElements.includes(1.4),
              }"
              ><img
                class="aside__nav__ul__li__sublinks__link__icon"
                src="@/assets/icons/flight_class.svg"
                alt="menu icon booking"
              />Empty legs</NuxtLink
            >
            <NuxtLink
              class="aside__nav__ul__li__sublinks__link scale-on-hover"
              to="/services/pet-friendly-charters"
              exact
              @mouseenter="hoveredElements = [1, 1.4, 1.6]"
              @mouseleave="hoveredElements = []"
              :class="{
                'aside__nav__ul__li__sublinks__link--siblings':
                  hoveredElements.includes(1.5),
              }"
              ><img
                class="aside__nav__ul__li__sublinks__link__icon"
                src="@/assets/icons/pet_supplies.svg"
                alt="menu icon booking"
              />Pet-friendly charters</NuxtLink
            >
            <NuxtLink
              class="aside__nav__ul__li__sublinks__link scale-on-hover"
              to="/services/private-jet-amenities"
              exact
              @mouseenter="hoveredElements = [1, 1.5, 1.7]"
              @mouseleave="hoveredElements = []"
              :class="{
                'aside__nav__ul__li__sublinks__link--siblings':
                  hoveredElements.includes(1.6),
              }"
              ><img
                class="aside__nav__ul__li__sublinks__link__icon"
                src="@/assets/icons/concierge.svg"
                alt="menu icon booking"
              />Private jet amenities</NuxtLink
            >
            <NuxtLink
              class="aside__nav__ul__li__sublinks__link scale-on-hover"
              to="/services/off-fleet-requests"
              exact
              @mouseenter="hoveredElements = [1, 1.6, 1.8]"
              @mouseleave="hoveredElements = []"
              :class="{
                'aside__nav__ul__li__sublinks__link--siblings':
                  hoveredElements.includes(1.7),
              }"
              ><img
                class="aside__nav__ul__li__sublinks__link__icon"
                src="@/assets/icons/concierge.svg"
                alt="menu icon booking"
              />Off fleet requests</NuxtLink
            >
            <NuxtLink
              class="aside__nav__ul__li__sublinks__link scale-on-hover"
              to="/services/prices"
              exact
              @mouseenter="hoveredElements = [1, 1.7, 1.9]"
              @mouseleave="hoveredElements = []"
              :class="{
                'aside__nav__ul__li__sublinks__link--siblings':
                  hoveredElements.includes(1.8),
              }"
              ><img
                class="aside__nav__ul__li__sublinks__link__icon"
                src="@/assets/icons/concierge.svg"
                alt="menu icon booking"
              />Prices</NuxtLink
            >

            <NuxtLink
              class="aside__nav__ul__li__sublinks__link scale-on-hover"
              to="/services/aircraft-management"
              exact
              @mouseenter="hoveredElements = [1, 1.8]"
              @mouseleave="hoveredElements = []"
              :class="{
                'aside__nav__ul__li__sublinks__link--siblings':
                  hoveredElements.includes(1.9),
              }"
              ><img
                class="aside__nav__ul__li__sublinks__link__icon"
                src="@/assets/icons/concierge.svg"
                alt="menu icon booking"
              />Aircraft management</NuxtLink
            >
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
              alt="menu icon booking"
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
              alt="menu icon booking"
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
                src="@/assets/icons/concierge.svg"
                alt="menu icon booking"
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
                src="@/assets/icons/concierge.svg"
                alt="menu icon booking"
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
                src="@/assets/icons/concierge.svg"
                alt="menu icon booking"
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
                src="@/assets/icons/concierge.svg"
                alt="menu icon booking"
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
              alt="menu icon booking"
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
                src="@/assets/icons/concierge.svg"
                alt="menu icon booking"
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
                src="@/assets/icons/concierge.svg"
                alt="menu icon booking"
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
                src="@/assets/icons/concierge.svg"
                alt="menu icon booking"
              />Contact</NuxtLink
            >
          </div>
        </li>
      </ul>
    </nav>
  </aside>
</template>
<style lang="scss" scoped>
.router-link-exact-active {
  background-color: $text-color-faded;
}

.aside {
  position: fixed;
  inset: 0 0 0 auto;
  height: 100svh;

  &__nav {
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: $text-color-faded;
    padding: 1rem;
    gap: 1rem;
    height: 100%;
    backdrop-filter: blur(6px);

    &__ul {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      &__li {
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
          padding: 1rem;
          text-decoration: none;
          color: $text-color-alt;
          font-size: 1.1rem;
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

            &:hover {
              & ~ .aside__nav__ul__li__sublinks {
                display: flex;
                opacity: 1;
              }
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
          right: 8rem;
          transition: 0.4s opacity ease;

          &:hover {
            display: flex;
            opacity: 1;
          }

          &__link {
            display: flex;
            align-items: center;
            justify-content: center;
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
            width: fit-content;
            text-shadow: $shadow-text;

            &:hover {
              background-color: $text-color;
            }

            &--siblings {
              background-color: $text-color-faded-strong;
              transform: scale(1.01);
            }

            @keyframes scroll {
              0% {
                transform: translateY(0px);
              }

              100% {
                transform: translateY(-14px);
              }
            }
          }
        }
        #scrollable-sublinks {
          overflow-y: scroll;
          height: 400px;
          padding-top: 1rem;
          padding-bottom: 1rem;

          & a {
            animation: scroll alternate 6s infinite;
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
