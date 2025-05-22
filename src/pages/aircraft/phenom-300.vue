<script setup lang="ts">
import { isDesktop } from "@/utils/functions";
const desktopScreen = ref(isDesktop());

window.addEventListener("resize", () => {
  desktopScreen.value = isDesktop();
});

import randomImage300 from "@/assets/images/phenom-300/phenom-300-embraer-sofar.webp";

useHead({
  title: "Embraer Phenom 300 | Sofar",
  meta: [
    {
      name: "description",
      content:
        "Learn about the Embraer Phenom 300 at Sofar Aviation. Discover its advanced features, exceptional performance, and luxurious comfort for longer regional flights.",
    },
  ],
});

useJsonld(() => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Embraer Phenom 300 | Sofar",
  url: window.location.href,
}));

const questions = [
  {
    title: "How many passengers can the Phenom 300 accommodate?",
    answer:
      "The Phenom 300 comfortably accommodates up to 7 passengers. The cabin layout offers spacious seating, a private enclosed lavatory, and a refined travel experience for business or leisure trips.",
  },
  {
    title: "How far can the Phenom 300 fly?",
    answer:
      "The Phenom 300 has a range of approximately 2,000 nautical miles (about 4 hours of flight time), making it ideal for routes like New York to Miami, Los Angeles to Dallas, or Chicago to the Caribbean without refueling.",
  },
  {
    title: "Can I bring luggage on the Phenom 300?",
    answer:
      "Yes, the Phenom 300 offers one of the largest baggage compartments in its category. It can easily accommodate suitcases, garment bags, golf clubs, and other essentials for your trip. Just let us know your needs when booking.",
  },
  {
    title: "How quickly can I book a Phenom 300 flight?",
    answer:
      "You can book a Phenom 300 flight with just a few hours’ notice, depending on aircraft availability. For better coordination and aircraft positioning, we recommend booking 24–48 hours in advance.",
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
      srcset="@/assets/images/phenom-300/phenom300-embraer-sofar.webp"
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
    <img
      class="services-banner__img"
      src="@/assets/images/phenom-300/phenom300-embraer-sofar.webp"
      alt="banner image"
    />
  </picture>

  <AircraftIndividualJet
    title="Phenom 300 - Embraer"
    subtitle="One of the Most Popular Business Jets"
    description="The Embraer Phenom 300 is the best-selling light business jet in the world, offering exceptional speed, range, and luxury. Designed for executives, families, and frequent travelers, this aircraft provides superior comfort, efficiency, and state-of-the-art technology for a seamless flying experience."
    :slide="1"
    :showGallery="true"
  />
  <img :src="randomImage300" class="random-image" alt="private jet charter" />
  <ServicesMiniFAQ :questions />
</template>
<style lang="scss" scoped>
@import "@/styles/planes.scss";

.random-image {
  width: 100%;
  height: 400px;
  object-fit: cover;
  object-position: center;
  padding: 1rem 0;
  background-color: $secondary-color;

  @media (min-width: $big-tablet-screen) {
    height: 100vh;
    padding: 2rem 0;
  }
}
</style>
