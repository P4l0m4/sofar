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
      "Sofar specializes in the management of light jets and turboprops, including models such as the Phenom 100, Phenom 300, and Pilatus PC-12. Our flexible management solutions can also be tailored to other aircraft types on a case-by-case basis. Whether your aircraft is based in New York, Miami, or Los Angeles, our team ensures optimal operations, maintenance, and charter revenue generation.",
  },
  {
    title: "How does Sofar help reduce aircraft ownership costs?",
    answer:
      "By integrating your aircraft into our charter fleet when not in personal use, Sofar helps offset operational expenses through revenue-generating flights. Our in-house sales team, optimized scheduling, and preferred vendor network allow us to reduce repositioning costs, maintenance fees, and crew expenses. We handle every detail to maximize your jet’s performance and financial efficiency.",
  },
  {
    title: "Is chartering my jet safe and secure?",
    answer:
      "Absolutely. Safety is our top priority. Sofar maintains the highest operational standards and ensures full compliance with FAA regulations. All flights are operated by experienced, professional pilots, and every charter request is carefully vetted. We protect your aircraft, your crew, and your reputation as if it were our own.",
  },
  {
    title: "How do I get started with aircraft management?",
    answer:
      "Getting started is simple. Contact our team to schedule a consultation. We’ll assess your aircraft, operational goals, and preferences, then provide a tailored management proposal. From there, we handle everything—from staffing and compliance to charter promotion and maintenance oversight—so you can enjoy the benefits of ownership without the stress.",
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
