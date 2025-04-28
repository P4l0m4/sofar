<script setup lang="ts">
import { useCommonAssetsStore } from "@/stores/commonAssets";
import { isDesktop } from "~/utils/functions";
import { colors } from "@/utils/colors";
import { ref } from "vue";
import family from "@/assets/images/family-jet-charter-sofar.webp";

const commonAssetsStore = useCommonAssetsStore();
await commonAssetsStore.fetchTeaserVideo();

const desktopScreen = ref(isDesktop());

window.addEventListener("resize", () => {
  desktopScreen.value = isDesktop();
});

const story = await useAsyncStoryblok("family-jet-charters", {
  version: "published",
});
useHead({
  title: "Family Jet Charters | Safe and Comfortable Travel | Sofar",
  meta: [
    {
      name: "description",
      content:
        "With Sofar, you benefit from a safe and comfortable family jet charter. Our private jet services offer the ideal travel solution for family vacations and special occasions.",
    },
  ],
});

useJsonld(() => ({
  "@context": "https://schema.org/",
  "@type": "WebSite",
  name: "Family Jet Charters | Safe and Comfortable Travel | Sofar",
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
  <picture class="index__banner">
    <source
      media="(min-width: 1100px)"
      :srcset="story.content.bannerImageDesktop.filename"
    />

    <div class="index__banner__headlines">
      <NuxtLink
        class="button-primary--dark rounded-button"
        to="/booking"
        v-if="desktopScreen"
        style="z-index: 1"
        >Booking</NuxtLink
      >

      <NuxtLink class="index__banner__headlines__logo" to="/">
        <img src="@/assets/images/logo-light.svg"
      /></NuxtLink>

      <EmergencyBubble v-if="desktopScreen" style="z-index: 1" />
    </div>

    <div class="index__banner__titles">
      <h1 class="titles">{{ story.content.bannerTitle }}</h1>
      <h2 class="subtitles">
        {{ story.content.bannerSubtitle }}
      </h2>
    </div>

    <video
      ref="videoRef"
      class="auto-video"
      src="@/assets/videos/family jet charter sofar.mp4"
      autoplay
      muted
      loop
      playsinline
      preload="auto"
      @error="onError"
    />

    <QuoteFormDesktop
      parent="family-jet"
      v-if="desktopScreen"
      :color="colors['secondary-color']"
    />

    <img
      class="index__banner__img"
      :src="story.content.bannerImageMobile.filename"
      alt="banner image"
    />
  </picture>

  <ServicesUnderBanner
    title="Family Jet Charter"
    subtitle="Travel Together in Comfort & Privacy"
    text="Flying with family should be about comfort, convenience, and making memories—not dealing with airport crowds, long security lines, or flight delays. At Sofar, our Family Jet Charter service provides a seamless, private, and hassle-free experience, ensuring that every journey is as enjoyable as the destination."
    :image="family"
  />
  <ServicesTicksList
    :list="[
      'Direct Flights to Your Destination – Avoid unnecessary layovers and connections.',
      'Exclusive Privacy & Comfort – A cabin designed for your family\'s needs.',
      'Pet-Friendly Travel – Bring your furry family members onboard.',
      'Fly on Your Schedule – No waiting, no delays, no stress.',
    ]"
  />
  <video
    class="full-width-video"
    src="@/assets/videos/family-jet-charter.mp4"
    playsinline
    preload="auto"
    controls
  />
  <OurFleet />
  <video
    class="full-width-video"
    src="@/assets/videos/homepage-desktop.mp4"
    playsinline
    preload="auto"
    controls
  />
  <ServicesMiniFAQ
    :questions="[
      {
        title: 'Is there a luggage limit?',
        answer:
          'A Family Jet Charter is a private jet service designed for families, offering convenience, comfort, and privacy during travel.',
      },
      {
        title: 'Can I bring my pet?',
        answer:
          'Sofar prioritizes safety by adhering to strict aviation regulations and conducting thorough pre-flight checks.',
      },
      {
        title: 'Are family charter safer than commercial?',
        answer:
          'Yes, Sofar allows pets on board, ensuring a comfortable experience for all family members.',
      },
      {
        title: 'How far in advance should I book?',
        answer:
          'Booking is easy! Simply visit our website or contact our customer service team for assistance.',
      },
    ]"
  />
  <!-- <iframe
    v-if="
      commonAssetsStore.teaserVideo && commonAssetsStore.teaserVideo.length > 0
    "
    class="video"
    :src="commonAssetsStore.teaserVideo"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe> -->

  <!-- <ServicesContentBlok
    v-for="contentBlok in story.content?.ContentBloks"
    :key="contentBlok._uid"
    :title="contentBlok.title"
    :text="contentBlok.text"
    :image="contentBlok.image.filename"
    :alt="contentBlok.image.alt"
  /> -->
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
