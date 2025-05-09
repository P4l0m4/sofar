<script setup lang="ts">
import { ref, onMounted } from "vue";
import { isDesktop, isMobile } from "~/utils/functions";

const story = await useAsyncStoryblok("business-charters", {
  version: "published",
});

import preview from "@/assets/images/corporate-jet-charter-sofar-preview.webp";
import preview2 from "@/assets/images/corporate-jet-charter.webp";
import picture1 from "@/assets/images/corporate-charter.webp";
import picture2 from "@/assets/images/business-corporate-charter.webp";
import picture3 from "@/assets/images/corporate-jet-charter-sofar-jet.webp";

const label = ref("Get in touch");
function copyToClipboard() {
  navigator.clipboard.writeText("hq@flysofar.com");
  label.value = "Email copied to clipboard!";
  setTimeout(() => {
    label.value = "Get in touch";
  }, 1000);
}

const desktopScreen = ref(isDesktop());
const mobileScreen = ref(isMobile());

window.addEventListener("resize", () => {
  desktopScreen.value = isDesktop();
  mobileScreen.value = isMobile();
});

const questions = [
  {
    title: "How much does a corporate jet charter cost?",
    answer:
      "The cost of a corporate jet charter depends on the route, aircraft type, and schedule flexibility. At Sofar, prices typically start around $5,000 for short regional flights. Contact our team for a personalized quote based on your needs.",
  },
  {
    title: "Can I hold meetings onboard?",
    answer:
      "Yes. Our aircraft offers a quiet, private environment ideal for work and meetings. Whether you need to review documents, take calls, or hold a discussion with your team, the cabin is perfectly suited for productive travel. All our aircraft have Starlink - Wifi.",
  },
  {
    title: "How soon can I book a flight?",
    answer:
      "Sofar can accommodate bookings with just a few hours’ notice, subject to aircraft availability. For guaranteed options and best timing, we recommend booking at least 24–48 hours in advance.",
  },
  {
    title: "What airports can I fly into?",
    answer:
      "You can fly into thousands of airports across the U.S. and beyond—often closer to your final destination than commercial flights allow. Sofar operates from major business hubs as well as smaller regional airports for added convenience.",
  },
];

const previews = [
  {
    title: "Executive & C-Level Travel",
    description:
      "Ensure your CEOs, executives, and high-profile clients travel in comfort, privacy, and efficiency.",
    image: picture1,
  },
  {
    title: "Multi-City Business Travel",
    description:
      "Need to visit multiple offices, clients, or investors in one trip? We create optimized travel plans for corporate teams on tight schedules.",
    image: picture2,
  },
  {
    title: "Corporate Event & Team Travel",
    description:
      "Whether it’s a conference, seminar, or leadership retreat, we offer private flights for small corporate groups to travel together seamlessly.",
    image: picture3,
  },
];

useHead({
  title: "Corporate Jet Charters | Efficient Corporate Travel | Sofar",
  meta: [
    {
      name: "description",
      content:
        "Sofar offers you the opportunity to charter efficient and reliable business jets. Our corporate travel solutions guarantee punctual, comfortable and flexible flights for your business needs.",
    },
  ],
});

useJsonld(() => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Corporate Jet Charters | Efficient Corporate Travel | Sofar",
  url: window.location.href,
}));

const videoRef = ref<HTMLVideoElement>();
const videoRef2 = ref<HTMLVideoElement>();

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
  if (videoRef2.value) {
    const p = videoRef2.value.play();
    if (p instanceof Promise) {
      p.catch((err) => {
        console.warn("Autoplay bloqué par le navigateur :", err);
      });
    }
  }
});
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
      src="@/assets/videos/corporate-jet-charter.mp4"
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
      src="@/assets/videos/corporate-jet-charter-mobile.mp4"
      autoplay
      muted
      loop
      playsinline
      preload="auto"
      @error="onError"
      v-if="!desktopScreen"
    />

    <QuoteFormDesktop
      parent="corporate-jet-charters"
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
    title="Corporate Jet Charter"
    subtitle="Fast, Flexible, and Efficient Private Jet Travel for Executives & Teams"
    text="In business, time is money, and efficiency is everything. Whether you're heading to a high-stakes meeting, corporate event, or multi-city business trip, Sofar’s Corporate Jet Charter service ensures you arrive on time, stress-free, and fully prepared."
    :image="preview"
    ><NuxtLink
      class="button-primary--light"
      :style="{ width: desktopScreen ? 'fit-content' : '100%' }"
      :to="desktopScreen ? '/booking' : '/request-a-charter'"
      >Request to book</NuxtLink
    ></ServicesUnderBanner
  >
  <ServicesTicksList
    :list="[
      'Fly on Your Schedule. No delays, no layovers, no wasted hours.',
      'Maximize Productivity. Private cabins for focused work and discussions.',
      'Direct Access to More Airports. Reach your destination faster.',
      'Exclusive Privacy. Confidentiality for executives and high-profile clients.',
    ]"
    :image="preview2"
  />
  <OurFleet />
  <video
    class="full-width-video"
    src="@/assets/videos/homepage-desktop.mp4"
    playsinline
    preload="auto"
    muted
    loop
    autoplay
    @error="onError"
    ref="videoRef2"
  />
  <ServicesJetsPreviews title="Business Jet Solutions" :previews
    ><NuxtLink
      class="button-primary--light"
      href="mailto:hq@flysofar.com"
      @click="copyToClipboard()"
      :style="{ width: mobileScreen ? '100%' : 'fit-content', margin: 'auto' }"
      >{{ label }}</NuxtLink
    ></ServicesJetsPreviews
  >
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
