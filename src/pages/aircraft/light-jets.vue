<script setup lang="ts">
import { ref } from "vue";
import { colors } from "@/utils/colors";
import { isDesktop } from "@/utils/functions";
import specsImage from "@/assets/images/aircraft/phenom300-embraer-sofar.webp";
import specsSecondaryImage from "@/assets/images/aircraft/lightjet-cabin-phenom300-sofar.webp";
import specsLittlePlane from "@/assets/images/aircraft/lightjet-sofar.svg";

import type { SpecsTuple } from "@/components/aircraft/JetSpecs.vue";
import type { SpecificationsDetailsTuple } from "@/components/aircraft/SpecificationsDetails.vue";

const desktopScreen = ref(isDesktop());

window.addEventListener("resize", () => {
  desktopScreen.value = isDesktop();
});

const specs: SpecsTuple = [
  {
    icon: "target",
    text: "Up to 8 passengers",
  },
  {
    icon: "seat",
    text: "Up to 2000 range",
  },
  {
    icon: "airplane_takeoff",
    text: "Up to 4 hour flights",
  },
];

const specsDescription =
  "Light jets are the perfect balance between luxury and practicality, offering speed, agility, and affordability for short-haul private flights. Ideal for business executives, weekend getaways, and regional travel, light jets provide a seamless flying experience with access to smaller airports and reduced operating costs.";

const specificationsDetails: SpecificationsDetailsTuple = [
  {
    label: "Passenger capacity",
    value: "Up to 8 passengers",
    icon: "seat",
  },
  { label: "Endurance", value: "4 hours", icon: "airplane_takeoff" },
  {
    label: "Operating range",
    value: "200 NM",
    icon: "target",
  },
  {
    label: "Baggage capacity",
    value: "76 Ft³",
    icon: "weight",
  },
  { label: "Speed", value: "430 knots", icon: "speedometer" },
  {
    label: "Cruising altitude",
    value: "45.000 Ft",
    icon: "cloud_arrow_up",
  },
];

const breadcrumbs = [
  {
    name: "Home",
    url: window.location.origin,
  },
  {
    name: "Aircraft",
    url: "/aircraft",
  },
  {
    name: "Light Jets",
    url: window.location.href,
  },
];

useHead({
  title: "Light Jet Charter | Efficient Short-Haul Private Flights | Sofar",
  meta: [
    {
      name: "description",
      content:
        "Discover the performance and comfort of light jets. Ideal for short flights, our light jets carry 4–6 passengers with excellent range, speed, and cabin features.",
    },
  ],
});

useJsonld(() => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Light Jet Charter | Efficient Short-Haul Private Flights | Sofar",
  url: window.location.href,
}));
</script>
<template>
  <picture class="services-banner">
    <source
      media="(min-width: 1100px)"
      srcset="@/assets/images/aircraft/header-lightjet-sofar.webp"
      type="image/webp"
    />

    <div class="services-banner__headlines">
      <NuxtLink
        class="button-primary--dark rounded-button"
        to="/booking"
        v-if="desktopScreen"
        >Booking</NuxtLink
      >
      <NuxtLink class="services-banner__headlines__logo" to="/">
        <img src="@/assets/images/logo-light.svg"
      /></NuxtLink>

      <EmergencyBubble v-if="desktopScreen" />
    </div>

    <QuoteFormDesktop
      parent="aircraft"
      v-if="desktopScreen"
      :color="colors['secondary-color']"
    />
    <img
      class="services-banner__img"
      src="@/assets/images/aircraft/light-jet-mobile.webp"
      alt="light jets charter banner image"
    />
  </picture>
  <AircraftJetSpecs :specs title="Light Jets" :description="specsDescription" />
  <AircraftSpecificationsDetails
    :image="specsImage"
    :secondaryImage="specsSecondaryImage"
    :littlePlane="specsLittlePlane"
    :specifications="specificationsDetails"
  />
  <section class="our-fleet">
    <h2 class="our-fleet__title titles">Our Fleet</h2>
    <p class="our-fleet__subtitle paragraph">
      Sofar provides a premium fleet designed to meet the needs of corporate
      travelers.
    </p>
    <div class="our-fleet__jets">
      <div class="our-fleet__jets__jet">
        <span class="our-fleet__jets__jet__description"
          >Efficient for Short-Haul Business Trips</span
        >
        <img
          class="our-fleet__jets__jet__image"
          src="@/assets/images/aircraft/light-jet-phenom100-sofar.webp"
          alt="phenom 100 private jet"
        />
        <NuxtLink class="button-primary--light" to="/aircraft/phenom-100"
          >Phenom 100</NuxtLink
        >
      </div>
      <div class="our-fleet__jets__jet">
        <span class="our-fleet__jets__jet__description"
          >The Ultimate Business Jet for Corporate Travel</span
        >
        <img
          class="our-fleet__jets__jet__image"
          src="@/assets/images/aircraft/midsize-jet-phenom300-sofar.webp"
          alt="phenom 300 private jet"
        />
        <NuxtLink class="button-primary--light" to="/aircraft/phenom-300"
          >Phenom 300</NuxtLink
        >
      </div>
    </div>
  </section>
  <JsonldBreadcrumb :links="breadcrumbs" />
</template>
<style lang="scss" scoped>
@import "@/styles/planes.scss";

.our-fleet {
  background-color: $secondary-color;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem 1rem;
  color: $text-color-alt;

  @media (min-width: $big-tablet-screen) {
    gap: 4rem;
    padding: 4rem;
    justify-content: center;
    align-items: center;
  }

  &__title {
    text-align: center;
  }

  &__subtitle {
    text-align: center;
    margin-top: -1rem;

    @media (min-width: $big-tablet-screen) {
      margin-top: -2rem;
    }
  }

  &__jets {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4rem;
    width: 100%;
    max-width: 1000px;

    @media (min-width: $big-tablet-screen) {
      flex-direction: row;
      justify-content: space-between;
    }

    &__jet {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;

      &__image {
        width: 100%;

        border-radius: $radius;
        object-fit: cover;
        object-position: center;

        @media (min-width: $big-tablet-screen) {
          max-width: 370px;
        }
      }
    }
  }
}
</style>
