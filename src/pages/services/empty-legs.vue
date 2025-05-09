<script setup lang="ts">
import { isDesktop } from "~/utils/functions";
import { colors } from "@/utils/colors";
import { ref, onMounted } from "vue";
import preview from "@/assets/images/empty-legs-flight.webp";
import preview2 from "@/assets/images/corporate-jet-charter-sofar-preview.webp";

const desktopScreen = ref(isDesktop());

window.addEventListener("resize", () => {
  desktopScreen.value = isDesktop();
});

const story = await useAsyncStoryblok("empty-legs", {
  version: "published",
});

const questions = [
  {
    title: "How much can I save with an empty leg flight?",
    answer:
      "Empty leg flights can offer savings of up to 75% compared to standard charter prices. It’s a great opportunity to enjoy private jet travel at a more accessible rate.",
  },
  {
    title: "Can I request an empty leg on a specific route?",
    answer:
      "Yes. You can let us know your preferred route and dates, and we’ll notify you if a matching empty leg becomes available. While we can’t guarantee availability, our team will do its best to accommodate your request.",
  },
  {
    title: "Are empty leg flights guaranteed?",
    answer:
      "Empty legs are subject to change or cancellation, as they depend on the original booked flight. While we’ll always inform you promptly of any changes, flexibility is key when booking an empty leg.",
  },
  {
    title: "Can I change the departure time of an empty leg flight?",
    answer:
      "In most cases, the departure time is fixed due to the aircraft’s positioning schedule. However, if timing adjustments are possible, they may incur additional costs. Our team will inform you of any available options.",
  },
];

const videoRef = ref<HTMLVideoElement>();

function onError(e: Event) {
  console.error("Erreur de chargement de la vidéo :", e);
}

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

useHead({
  title: "Empty Leg Flights | Affordable Private Jet Charters | Sofar",
  meta: [
    {
      name: "description",
      content:
        "Take advantage of discounted empty leg flights with Sofar. Enjoy the benefits of private jet travel at a fraction of the cost with our empty leg charter deals.",
    },
  ],
});

useJsonld(() => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Empty Leg Flights | Affordable Private Jet Charters | Sofar",
  url: window.location.href,
}));
</script>
<template>
  <picture class="services-banner">
    <source
      media="(min-width: 1100px)"
      :srcset="story.content.bannerImageDesktop.filename"
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

    <video
      ref="videoRef"
      class="auto-video"
      src="@/assets/videos/empty-legs.mp4"
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
      class="auto-video"
      src="@/assets/videos/empty-legs-mobile.mp4"
      autoplay
      muted
      loop
      playsinline
      preload="auto"
      @error="onError"
      v-if="!desktopScreen"
    />

    <QuoteFormDesktop
      parent="private-jet"
      v-if="desktopScreen"
      :color="colors['primary-color']"
    />
    <img
      class="services-banner__img"
      :src="story.content.bannerImageMobile.filename"
      alt="banner image"
    />
  </picture>

  <ServicesUnderBanner
    title="Empty Legs"
    subtitle="Fly Private for Less"
    text="When a private jet needs to reposition after dropping off a client or returning to base, it often flies empty. These flights, known as Empty Legs, are available at significantly reduced prices, making them a cost-effective way to fly privatewithout compromising on luxury."
    :image="preview"
  />
  <ServicesTicksList
    :list="[
      'Exclusive Discounts – Save up to 75% on private jet flights.',
      'Same Luxury, Lower Price – Enjoy the comfort and speed of a private jet.',
      'Last-Minute Availability – New routes added daily.',
      'Flexible Routes – Fly to top destinations at reduced rates.',
    ]"
    :image="preview2"
  />
  <EmptyLegs />
  <ServicesMiniFAQ :questions />
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
