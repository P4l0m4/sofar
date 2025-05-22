<script setup lang="ts">
import { isDesktop } from "@/utils/functions";
const desktopScreen = ref(isDesktop());

window.addEventListener("resize", () => {
  desktopScreen.value = isDesktop();
});

const story = await useAsyncStoryblok("phenom-100", { version: "published" });

useHead({
  title: "Embraer Phenom 100 | Sofar",
  meta: [
    {
      name: "description",
      content:
        "Explore the Embraer Phenom 100 with Sofar. Learn about the features, performance, and comfort of this light jet, perfect for short regional flights.",
    },
  ],
});

useJsonld(() => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Embraer Phenom 100 | Sofar",
  url: window.location.href,
}));

const questions = [
  {
    title: "How far can the Phenom 100 fly?",
    answer:
      "The Phenom 100 has a range of approximately 1,100 nautical miles (about 2 to 2.5 hours of flight time). It’s ideal for short regional flights such as New York to Boston, Los Angeles to Napa, or Miami to the Bahamas.",
  },
  {
    title: "Can I bring pets on a private jet?",
    answer:
      "Yes, pets are welcome on board all Sofar flights, including the Phenom 100. Your companion can stay with you in the cabin for the duration of the flight. Let us know in advance so we can prepare accordingly.",
  },
  {
    title: "Can I bring luggage on the Phenom 100?",
    answer:
      "Yes, you can bring luggage on board. The Phenom 100 offers sufficient space for soft bags, carry-ons, and personal items. For optimal comfort, we recommend traveling light and informing our team of your luggage needs in advance.",
  },
  {
    title: "How quickly can I book a Phenom 100 flight?",
    answer:
      "Phenom 100 flights can be arranged within a few hours depending on availability. For more flexibility and smooth coordination, we suggest booking 24–48 hours ahead when possible.",
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
      src="@/assets/videos/phenom100-video.mp4"
      autoplay
      muted
      loop
      playsinline
      preload="auto"
      @error="onError"
    />

    <img
      class="services-banner__img"
      :src="story.content.bannerImageMobile.filename"
      alt="banner image"
    />
  </picture>

  <AircraftIndividualJet
    title="Phenom 100 - Embraer"
    subtitle="The Perfect Light Jet for Short-Haul Private Travel"
    description="The Embraer Phenom 100 is a top-tier light jet, perfect for short-haul private flights while offering luxury, efficiency, and performance. With its spacious cabin, impressive speed, and sleek design, the Phenom 100 is a top choice for business professionals, small groups, and weekend getaways."
    :slide="0"
    :showGallery="true"
  />
  <ServicesMiniFAQ :questions />
</template>
<style lang="scss" scoped>
@import "@/styles/planes.scss";
</style>
