<script setup lang="ts">
import { ref } from "vue";
import { colors } from "@/utils/colors";
import { isDesktop } from "@/utils/functions";
import specsImage from "@/assets/images/aircraft/midsize-jet-cabin-sofar.webp";
import specsLittlePlane from "@/assets/images/aircraft/midsize-jet-sofar.svg";

import type { SpecsTuple } from "@/components/aircraft/JetSpecs.vue";
import type { SpecificationsDetailsTuple } from "@/components/aircraft/SpecificationsDetails.vue";

const desktopScreen = ref(isDesktop());

window.addEventListener("resize", () => {
  desktopScreen.value = isDesktop();
});

const specs: SpecsTuple = [
  {
    icon: "target",
    text: "Up to 9 passengers",
  },
  {
    icon: "seat",
    text: "Up to 2.500 range",
  },
  {
    icon: "airplane_takeoff",
    text: "Up to 5 hours flights",
  },
];

const specsDescription =
  "Midsize jets offer a superior blend of performance, space, and efficiency, making them ideal for longer regional and cross-country flights. With spacious cabins, extended range, and enhanced in-flight comfort, these jets are perfect for business travelers, families, and small groups seeking a seamless private flight experience.";

const specificationsDetails: SpecificationsDetailsTuple = [
  {
    label: "Passenger capacity",
    value: "Up to 9 passengers",
    icon: "seat",
  },
  { label: "Endurance", value: "5 hours", icon: "airplane_takeoff" },
  {
    label: "Operating range",
    value: "2.500 NM",
    icon: "target",
  },
  {
    label: "Baggage capacity",
    value: "80 Ft³",
    icon: "weight",
  },
  { label: "Speed", value: "450 knots", icon: "speedometer" },
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
    name: "Midsize Jets",
    url: window.location.href,
  },
];

useHead({
  title:
    "Midsize Jet Charter | Private Flights with More Space & Range | Sofar",
  meta: [
    {
      name: "description",
      content:
        "Fly farther in comfort with Sofar’s midsize jet options. Ideal for 6–8 passengers, these aircraft offer greater range, cabin height, and onboard productivity.",
    },
  ],
});

useJsonld(() => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Midsize Jet Charter | Private Flights with More Space & Range | Sofar",
  url: window.location.href,
}));
</script>
<template>
  <picture class="services-banner">
    <source
      media="(min-width: 1100px)"
      srcset="@/assets/images/aircraft/midsize-jet-sofar.webp"
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
      :color="colors['primary-color']"
    />
    <img
      class="services-banner__img"
      src="@/assets/images/aircraft/midsize-jet-sofar-mobile.webp"
      alt="midsize jets charter banner image"
    />
  </picture>
  <AircraftJetSpecs
    :specs
    title="Midsize Jets"
    :description="specsDescription"
  />
  <AircraftSpecificationsDetails
    :image="specsImage"
    :littlePlane="specsLittlePlane"
    :specifications="specificationsDetails"
    :reverse="true"
  />

  <JsonldBreadcrumb :links="breadcrumbs" />
</template>
<style lang="scss" scoped>
@import "@/styles/planes.scss";
</style>
