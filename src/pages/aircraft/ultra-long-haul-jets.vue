<script setup lang="ts">
import { ref } from "vue";
import { colors } from "@/utils/colors";
import { isDesktop } from "@/utils/functions";
import specsImage from "@/assets/images/aircraft/ultra-long-jet-cabin-sofar.webp";
import specsLittlePlane from "@/assets/images/aircraft/ultra-long-haul-jet.svg";

import type { SpecsTuple } from "@/components/aircraft/JetSpecs.vue";
import type { SpecificationsDetailsTuple } from "@/components/aircraft/SpecificationsDetails.vue";

const desktopScreen = ref(isDesktop());

window.addEventListener("resize", () => {
  desktopScreen.value = isDesktop();
});

const specs: SpecsTuple = [
  {
    icon: "target",
    text: "Up to 14+ passengers",
  },
  {
    icon: "seat",
    text: "Up to 7.200 range",
  },
  {
    icon: "airplane_takeoff",
    text: "Up to 16 hours flights",
  },
];

const specsDescription =
  "Ultra long haul jets redefine luxury, range, and performance, offering non-stop intercontinental travel with unmatched comfort and cutting-edge technology. Designed for VIPs, corporate leaders, and high-net-worth individuals, these jets provide spacious cabins, premium amenities, and the longest flight ranges in private aviation.";

const specificationsDetails: SpecificationsDetailsTuple = [
  {
    label: "Passenger capacity",
    value: "Up to 14 passengers",
    icon: "seat",
  },
  { label: "Endurance", value: "16 hours", icon: "airplane_takeoff" },
  {
    label: "Operating range",
    value: "7.200 NM",
    icon: "target",
  },
  {
    label: "Baggage capacity",
    value: "195 Ft³",
    icon: "weight",
  },
  { label: "Speed", value: "600 knots", icon: "speedometer" },
  {
    label: "Cruising altitude",
    value: "43.000 Ft",
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
    name: "Ultra Long Haul Jets",
    url: window.location.href,
  },
];

useHead({
  title: "Ultra Long Haul Jet Charter | Global Private Flights | Sofar",
  meta: [
    {
      name: "description",
      content:
        "Charter an ultra long haul jet for international travel with maximum comfort. Fly nonstop between continents with luxurious cabin space and advanced performance.",
    },
  ],
});

useJsonld(() => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Ultra Long Haul Jet Charter | Global Private Flights | Sofar",
  url: window.location.href,
}));
</script>
<template>
  <picture class="services-banner">
    <source
      media="(min-width: 1100px)"
      srcset="@/assets/images/aircraft/ultra-long-jet-sofar.webp"
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
      src="@/assets/images/aircraft/ultra-long-jet-sofar-mobile.webp"
      alt="ultra long haul jets charter banner image"
    />
  </picture>
  <AircraftJetSpecs
    :specs
    title="Ultra Long Haul Jets"
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
