<script setup lang="ts">
import { ref } from "vue";
import { colors } from "@/utils/colors";
import { isDesktop } from "@/utils/functions";
import specsImage from "@/assets/images/aircraft/super-midsize-jet-cabin-sofar.webp";
import specsLittlePlane from "@/assets/images/aircraft/super-midsize-jet-sofar.svg";

import type { SpecsTuple } from "@/components/aircraft/JetSpecs.vue";
import type { SpecificationsDetailsTuple } from "@/components/aircraft/SpecificationsDetails.vue";

const desktopScreen = ref(isDesktop());

window.addEventListener("resize", () => {
  desktopScreen.value = isDesktop();
});

const specs: SpecsTuple = [
  {
    icon: "target",
    text: "Up to 10 passengers",
  },
  {
    icon: "seat",
    text: "Up to 3.400 range",
  },
  {
    icon: "airplane_takeoff",
    text: "Up to 7 hours flights",
  },
];

const specsDescription =
  "Super midsize jets provide the perfect combination of speed, range, and comfort, making them ideal for coast-to-coast and international flights. With spacious cabins, advanced technology, and superior performance, these jets offer first-class luxury and efficiency for business and leisure travelers alike.";

const specificationsDetails: SpecificationsDetailsTuple = [
  {
    label: "Passenger capacity",
    value: "Up to 10 passengers",
    icon: "seat",
  },
  { label: "Endurance", value: "7 hours", icon: "airplane_takeoff" },
  {
    label: "Operating range",
    value: "3.400 NM",
    icon: "target",
  },
  {
    label: "Baggage capacity",
    value: "120 Ft³",
    icon: "weight",
  },
  { label: "Speed", value: "550 knots", icon: "speedometer" },
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
    name: "Super Midsize Jets",
    url: window.location.href,
  },
];

useHead({
  title: "Super Midsize Jet Charter | Long-Range Private Flights | Sofar",
  meta: [
    {
      name: "description",
      content:
        "Charter a super midsize jet for extended range and comfort. Perfect for 7–9 passengers, these aircraft offer coast-to-coast capability, spacious cabins, and fast travel.",
    },
  ],
});

useJsonld(() => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Super Midsize Jet Charter | Long-Range Private Flights | Sofar",
  url: window.location.href,
}));
</script>
<template>
  <picture class="services-banner">
    <source
      media="(min-width: 1100px)"
      srcset="@/assets/images/aircraft/super-midsize-jet-sofar.webp"
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
      src="@/assets/images/aircraft/super-midsize-jet-sofar-mobile.webp"
      alt="super midsize jets charter banner image"
    />
  </picture>
  <AircraftJetSpecs
    :specs
    title="Super Midsize Jets"
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
