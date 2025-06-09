<script setup lang="ts">
import { ref } from "vue";
import { isDesktop } from "@/utils/functions";
import { colors } from "@/utils/colors";

import preview from "@/assets/images/aircraft-management-sofar-pilot.webp";
import safetyImage from "@/assets/images/aircraft-management-safety-sofar.webp";

const customerServiceList = [
  "Routine & Preventive Maintenance – Regular inspections and servicing.",
  "FAA & EASA Compliance – Adherence to global aviation regulations.",
  "Engine & Avionics Monitoring – Advanced diagnostics for peak performance.",
  "Insurance & Risk Management – Comprehensive coverage for your aircraft.",
];

const questions = [
  {
    title: "What aircraft can Sofar manage?",
    answer:
      "Yes, you can bring luggage on board. Each aircraft in the Sofar fleet has a specific luggage capacity, and we’ll advise you on what fits best depending on your destination and number of passengers. Let us know your needs in advance to ensure smooth boarding.",
  },
  {
    title: "How does Sofar help reduce aircraft ownership costs?",
    answer:
      "Absolutely. Pets are welcome on all Sofar flights. We kindly ask you to provide your pet’s details during booking so we can prepare the aircraft accordingly and ensure a comfortable experience for both of you.",
  },
  {
    title: "Is chartering my jet safe and secure?",
    answer:
      "Sofar flights offer premium comfort and essentials: inflight refreshments, phone charging outlets, and, upon request, tailored amenities such as snacks, drinks, and pet-friendly accessories. While our flights are short, your experience remains refined and seamless.",
  },
  {
    title: "How do I get started with aircraft management?",
    answer:
      "Sofar specializes in regional flights of up to 2 hours. With bases in New York, Miami, and Los Angeles, our fleet covers a wide range of popular destinations such as The Hamptons, Palm Beach, Las Vegas, and the Caribbean. Our team will help you find the best route based on your needs.",
  },
];

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
    name: "Aircraft Management",
    url: window.location.href,
  },
];

useHead({
  title: "Aircraft Management Services | Sofar",
  meta: [
    {
      name: "description",
      content:
        "Discover comprehensive aircraft management services with Sofar. We offer personalized solutions to optimize your aircraft's performance and value.",
    },
  ],
});

useJsonld(() => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Aircraft Management Services | Sofar",
  url: window.location.href,
}));

const videoRef = ref<HTMLVideoElement>();

onMounted(() => {
  if (videoRef.value) {
    const p = videoRef.value.play();
    if (p instanceof Promise) {
      p.catch((err) => {
        console.warn("Autoplay bloqué par le navigateur :", err);
      });
    }
  }
});

function onError(e: Event) {
  console.error("Erreur de chargement de la vidéo :", e);
}
</script>
<template>
  <picture class="services-banner">
    <source
      media="(min-width: 1100px)"
      srcset="@/assets/images/aircraft-management-header.webp"
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
      parent="aircraft-management"
      v-if="desktopScreen"
      :color="colors['primary-color']"
    />

    <img
      class="services-banner__img"
      src="@/assets/images/aircraft-management-header-mobile.webp"
      alt="banner image"
    />
  </picture>
  <ServicesUnderBanner
    title="Aircraft Management"
    subtitle="Expert Aircraft Ownership Solutions for Efficiency, Safety & Profitability"
    text="Owning a private jet is a significant investment, and at Sofar, we ensure that you maximize its value while eliminating the complexities of ownership. Our comprehensive aircraft management services handle everything from maintenance and operations to compliance and cost efficiency, allowing you to enjoy the benefits of ownership without the hassle."
    :image="preview"
  />
  <ServicesAircraftManagementServices />
  <video
    ref="videoRef"
    class="full-width-video"
    src="@/assets/videos/phenom100-video.mp4"
    autoplay
    muted
    loop
    playsinline
    preload="auto"
    @error="onError"
  />
  <AboutCustomerService
    title="Maintenance & Safety Compliance"
    subtitle="Our team ensures that your jet is maintained to the highest industry standards, keeping it in optimal condition at all times."
    :list="customerServiceList"
    :image="safetyImage"
  />
  <ServicesMiniFAQ :questions="questions" />
  <JsonldBreadcrumb :links="breadcrumbs" />
</template>
<style lang="scss" scoped>
@import "@/styles/planes.scss";
</style>
