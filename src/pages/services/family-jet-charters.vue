<script setup lang="ts">
import { isDesktop } from "~/utils/functions";
import { colors } from "@/utils/colors";
import { ref } from "vue";
import family from "@/assets/images/family-jet-charter-sofar.webp";

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
const videoRef2 = ref<HTMLVideoElement>();
const videoRef3 = ref<HTMLVideoElement>();

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
  if (videoRef3.value) {
    const p = videoRef3.value.play();
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

const carouselElements = [
  {
    link: "/destinations/us-caribbean",
    image: "/assets/images/carribean.webp",
    label: "Carribean",
  },
  {
    link: "/destinations/us-colorado",
    image: "/assets/images/colorado.webp",
    label: "Colorado",
  },
  {
    link: "/destinations/us-new-york",
    image: "/assets/images/new-york.webp",
    label: "New York",
  },
  {
    link: "/destinations/us-california",
    image: "/assets/images/california.webp",
    label: "California",
  },
];
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
      v-if="desktopScreen"
    />

    <video
      ref="videoRef"
      class="auto-video"
      src="@/assets/videos/family-jet-charter-mobile.mp4"
      autoplay
      muted
      loop
      playsinline
      preload="auto"
      @error="onError"
      v-if="!desktopScreen"
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
    @error="onError"
    ref="videoRef2"
    class="full-width-video"
    src="@/assets/videos/family-jet-charter.mp4"
    playsinline
    preload="auto"
    autoplay
    muted
    loop
  />
  <OurFleet />
  <div class="slides-wrapper">
    <div class="slides-wrapper__headlines">
      <h3 class="slides-wrapper__headlines__title titles">
        Family Jet Charter Destinations
      </h3>
      <p class="slides-wrapper__headlines__text paragraphs">
        From coastal escapes to adventure-filled retreats, Sofar provides
        private jet travel to top family-friendly destinationsacross the U.S.
        and beyond.
      </p>
    </div>
    <CarouselComponent :carouselElements v-if="!desktopScreen" />
    <ServicesSlidesGrid
      :carouselElements="carouselElements"
      v-if="desktopScreen"
    />
  </div>
  <video
    class="full-width-video"
    src="@/assets/videos/homepage-desktop.mp4"
    playsinline
    preload="auto"
    muted
    loop
    autoplay
    @error="onError"
    ref="videoRef3"
  />
  <ServicesMiniFAQ
    :questions="[
      {
        title: 'Is there a luggage limit?',
        answer:
          'Yes, there is a luggage limit based on the aircraft type and number of passengers. Our team will advise you on the baggage allowance for your specific flight to ensure a comfortable and safe journey.',
      },
      {
        title: 'Can I bring my pet?',
        answer:
          'Yes, pets are welcome on SOFAR flights! We love to make your entire family feel at home. Please inform us in advance so we can prepare accordingly and meet all safety and comfort requirements.',
      },
      {
        title: 'Are family charter safer than commercial?',
        answer:
          'Yes, private family charters are considered very safe. At SOFAR, we adhere to the highest safety standards, offering you a secure, personalized, and stress-free flying experience compared to the complexities of commercial air travel.',
      },
      {
        title: 'How far in advance should I book?',
        answer:
          'We recommend booking as early as possible to secure your preferred schedule and aircraft, especially during peak travel seasons. However, SOFAR can also accommodate last-minute bookings depending on availability.',
      },
    ]"
  />
</template>
<style lang="scss" scoped>
@import "@/styles/planes.scss";

.slides-wrapper {
  display: flex;
  flex-direction: column;

  &__headlines {
    padding: 2rem 1rem 0 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media (min-width: $big-tablet-screen) {
      padding: 4rem 2rem 0 2rem;
    }

    &__text {
      text-wrap: balance;
      max-width: 800px;
    }
  }
}

.video {
  width: 100%;
  height: 400px;
  margin: 4rem 0;

  @media (min-width: $big-tablet-screen) {
    height: 95dvh;
  }
}
</style>
