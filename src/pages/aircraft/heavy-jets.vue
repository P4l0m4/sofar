<script setup lang="ts">
import { ref } from "vue";
import { colors } from "@/utils/colors";
import { isDesktop } from "@/utils/functions";
import specsImage from "@/assets/images/aircraft/heavy-jet-cabin-sofar.webp";
import specsLittlePlane from "@/assets/images/aircraft/heavy-jet-sofar.svg";

import type { SpecsTuple } from "@/components/aircraft/JetSpecs.vue";
import type { SpecificationsDetailsTuple } from "@/components/aircraft/SpecificationsDetails.vue";

const desktopScreen = ref(isDesktop());

window.addEventListener("resize", () => {
  desktopScreen.value = isDesktop();
});

const specs: SpecsTuple = [
  {
    icon: "target",
    text: "Up to 12 passengers",
  },
  {
    icon: "seat",
    text: "Up to 4.000 range",
  },
  {
    icon: "airplane_takeoff",
    text: "Up to 11 hours flights",
  },
];

const specsDescription =
  "Heavy jets offer spacious cabins, extended range, and premium in-flight amenities, making them the gold standard for corporate and luxury private travel. Designed for long-haul flights and large groups, these jets provide unmatched comfort, privacy, and efficiency for business executives and high-net-worth travelers.";

const specificationsDetails: SpecificationsDetailsTuple = [
  {
    label: "Passenger capacity",
    value: "Up to 12 passengers",
    icon: "seat",
  },
  { label: "Endurance", value: "7 hours", icon: "airplane_takeoff" },
  {
    label: "Operating range",
    value: "4.000 NM",
    icon: "target",
  },
  {
    label: "Baggage capacity",
    value: "120 Ft³",
    icon: "weight",
  },
  { label: "Speed", value: "500 knots", icon: "speedometer" },
  {
    label: "Cruising altitude",
    value: "41.000 Ft",
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
    name: "Heavy Jets",
    url: window.location.href,
  },
];

useHead({
  title: "Heavy Jet Charter | Large Cabin Private Jet Flights | Sofar",
  meta: [
    {
      name: "description",
      content:
        "Fly in maximum comfort with Sofar’s heavy jet charter options. Designed for 10+ passengers, these jets offer spacious cabins, long-range capability, and VIP service.",
    },
  ],
});

useJsonld(() => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Heavy Jet Charter | Large Cabin Private Jet Flights | Sofar",
  url: window.location.href,
}));
</script>
<template>
  <picture class="services-banner">
    <source
      media="(min-width: 1100px)"
      srcset="@/assets/images/aircraft/heavy-jet-sofar.webp"
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
      src="@/assets/images/aircraft/heavy-jet-sofar-mobile.webp"
      alt="heavy jets charter banner image"
    />
  </picture>
  <AircraftJetSpecs :specs title="Heavy Jets" :description="specsDescription" />
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
