<script setup lang="ts">
import { ref, onMounted } from "vue";
import { colors } from "@/utils/colors";
import { isDesktop } from "~/utils/functions";

import preview from "@/assets/images/aircraft/phenom300-embraer-sofar.webp";

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
    name: "Aircraft",
    url: window.location.href,
  },
];

const questions = [
  {
    title: "What’s the best jet for corporate travel?",
    answer:
      "For corporate travel, light jets like the Phenom 300 are an excellent choice. They offer speed, comfort, and connectivity—ideal for short business trips with 4 to 7 passengers. Our team can help you select the aircraft that best fits your schedule and preferences.",
  },
  {
    title: "Can I bring pets on a private jet?",
    answer:
      "Yes, you can bring your pets on board. At Sofar, we welcome furry companions and ensure they travel comfortably alongside you in the cabin. Just let us know in advance so we can make the necessary arrangements.",
  },
  {
    title: "How do I book a private jet?",
    answer:
      "Booking with Sofar is simple. You can request a quote on our website, call our team directly. We’ll guide you step by step to finalize your trip.",
  },
  {
    title: "What’s the difference between a light jet and a midsize jet?",
    answer:
      "Light jets, like the Phenom 100 or 300, are perfect for short to medium-haul flights and typically accommodate 4–7 passengers. Midsize jets offer more cabin space, longer range, and often include additional features like enclosed lavatories and standing headroom—ideal for longer trips or larger groups.",
  },
];

useHead({
  title: "Our Private Jet Aircraft Fleet | Sofar",
  meta: [
    {
      name: "description",
      content:
        "Explore Sofar's fleet of private jets. Discover the specifications and amenities of our aircraft to find the perfect jet for your travel needs.",
    },
  ],
});

useJsonld(() => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Our Private Jet Aircraft Fleet | Sofar",
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
      srcset="@/assets/images/aircraft/aircraft-privatejet-size-sofar.webp"
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
      src="@/assets/images/our-story/our-fleet-sofar-private-jet-mobile.webp"
      alt="private jet charter banner image"
    />
  </picture>

  <ServicesUnderBanner
    title="Aircraft Guide"
    subtitle="Find the Perfect Jet for Your Next Flight"
    text="Choosing the right private jet for your trip is essential to ensuring comfort, efficiency, and cost-effectiveness. Whether you need a light jet for short-haul business travel or an ultra-long-range jet for intercontinental flights, Sofar provides expert insights to help you make the best choice."
    :image="preview"
  />
  <AircraftJetCategories />
  <video
    ref="videoRef"
    class="full-width-video"
    src="@/assets/videos/aircraft-privatejet-sofar.mp4"
    autoplay
    muted
    loop
    playsinline
    preload="auto"
    @error="onError"
    v-if="desktopScreen"
  />
  <video
    ref="videoRef"
    class="full-width-video"
    src="@/assets/videos/aircraft-privatejet-sofar-mobile.mp4"
    autoplay
    muted
    loop
    playsinline
    preload="auto"
    @error="onError"
    v-else
  />
  <AircraftHowToChoose />
  <ServicesMiniFAQ :questions />
  <JsonldBreadcrumb :links="breadcrumbs" />
</template>
<style lang="scss" scoped>
@import "@/styles/planes.scss";
</style>
