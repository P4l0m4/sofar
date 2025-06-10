<script setup>
import { colors } from "@/utils/colors";
import { isDesktop } from "@/utils/functions";

import preview from "@/assets/images/off-fleet-request-sales.webp";
import preview2 from "@/assets/images/off-fleet-request-aircraft-sofar.webp";

const desktopScreen = ref(isDesktop());

window.addEventListener("resize", () => {
  desktopScreen.value = isDesktop();
});

const breadcrumbs = [
  {
    name: "Home",
    url: window.location.origin,
  },
  {
    name: "Services",
    url: "/services",
  },
  {
    name: "Off Fleet Requests",
    url: window.location.href,
  },
];

const questions = [
  {
    title: "Is brokering different from a regular charter?",
    answer:
      "Yes, brokering allows us to offer flights beyond our in-house fleet by sourcing aircraft from a trusted network of certified operators. While regular charters are flown on Sofar-managed jets, brokered flights provide greater flexibility in terms of aircraft type, availability, and location—ensuring we always find the best solution for your mission.",
  },
  {
    title: "How do you ensure the quality and safety of brokered flights?",
    answer:
      "Every brokered flight is vetted with the same high standards we apply to our own fleet. We only work with FAA-certified operators who meet our strict criteria for aircraft maintenance, pilot experience, and operational reliability. Your safety, comfort, and peace of mind remain our top priority, regardless of the aircraft.",
  },
  {
    title: "Are brokered flights more expensive?",
    answer:
      "Not necessarily. Brokered flights can be competitively priced depending on availability, location, and demand. In many cases, they offer cost-effective solutions—especially for one-way or last-minute routes. Our team always sources the best aircraft at the best value without compromising safety or service quality.",
  },
  {
    title: "Can I request a specific aircraft or model?",
    answer:
      "Absolutely. Whether you're looking for a Phenom 300, a Citation CJ2, or a light jet with a specific interior layout, our team can find exactly what you're looking for. We tailor each flight to your preferences, sourcing the aircraft that best matches your comfort, performance, and budget requirements.",
  },
];

useHead({
  title: "Private Jet Sourcing & Off-Fleet Requests | Sofar",
  meta: [
    {
      name: "description",
      content:
        "Looking for a specific aircraft not in our fleet? Sofar offers access to a global network of private jets tailored to your route, schedule, and preferences.",
    },
  ],
});

useJsonld(() => ({
  "@context": "https://schema.org/",
  "@type": "WebSite",
  name: "Private Jet Sourcing & Off-Fleet Requests | Sofar",
  url: window.location.href,
}));
</script>
<template>
  <picture class="services-banner">
    <source
      media="(min-width: 1100px)"
      srcset="@/assets/images/off-fleet-request-header.webp"
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
      parent="off-fleet-requests"
      v-if="desktopScreen"
      :color="colors['primary-color']"
    />

    <img
      class="services-banner__img"
      src="@/assets/images/off-fleet-request-header-mobile.webp"
      alt="banner image"
    />
  </picture>
  <ServicesUnderBanner
    title="Off-Fleet Jet Requests"
    subtitle="Need a Jet Outside Our Fleet? We’ll Find It for You"
    text="Expand your travel options with Sofar's off-fleet requests service. When our in-house fleet, including the Pilatus PC-12, Phenom 100, and Phenom 300, doesn't meet your specific needs, we can source additional aircraft to ensure you have the perfect private jet for your journey. Our extensive network of trusted partners allows us to provide a wide range of aircraft options, tailored to your unique travel requirements."
    :image="preview"
  />
  <ServicesRequestProcess />
  <ServicesTicksList
    title="Why use off fleet request services?"
    subtitle="Our off fleet request service is designed to offer the same quality, transparency, and seamless experience you expect from our in-house fleet—while opening up an even wider range of options."
    :list="[
      'Exclusive Discounts – Save up to 75% on private jet flights.',
      'Same Luxury, Lower Price – Enjoy the comfort and speed of a private jet.',
      'Last-Minute Availability – New routes added daily.',
      'Flexible Routes – Fly to top destinations at reduced rates.',
    ]"
    :image="preview2"
  />
  <AircraftJetCategories />
  <ServicesMiniFAQ :questions="questions" />
  <JsonldBreadcrumb :links="breadcrumbs" />
</template>
<style lang="scss" scoped>
@import "@/styles/planes.scss";
.video {
  width: 100%;
  height: 400px;
  margin: 4rem 0;

  @media (min-width: $big-tablet-screen) {
    height: 95dvh;
  }
}
</style>
