<script setup lang="ts">
import { isDesktop } from "@/utils/functions";
const desktopScreen = ref(isDesktop());

window.addEventListener("resize", () => {
  desktopScreen.value = isDesktop();
});

useHead({
  title: "Pilatus PC-12 | Sofar",
  meta: [
    {
      name: "description",
      content:
        "Discover the Pilatus PC-12 at Sofar. Learn about the specifications, performance, and amenities of this versatile and efficient aircraft. Ideal for various travel needs.",
    },
  ],
});

useJsonld(() => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Pilatus PC-12 | Sofar",
  url: window.location.href,
}));

const questions = [
  {
    title: "How far can the PC-12 fly?",
    answer:
      "The Pilatus PC-12 has a range of approximately 1,500 nautical miles (about 3 hours of flight time), making it ideal for regional trips such as New York to Chicago or Los Angeles to Aspen, with non-stop performance and exceptional efficiency.",
  },
  {
    title: "Can I bring pets on a private jet?",
    answer:
      "Yes, pets are welcome on all Sofar flights, including on the PC-12. The spacious cabin allows your pet to stay comfortably with you during the journey. Let us know in advance so we can prepare accordingly.",
  },
  {
    title: "Can I bring luggage on the PC-12?",
    answer:
      "Yes, the PC-12 offers generous luggage capacity for its category. You can bring suitcases, duffel bags, and even sporting equipment like golf clubs or skis—just let us know what you plan to bring so we can ensure everything fits safely.",
  },
  {
    title: "How quickly can I book a PC-12 flight?",
    answer:
      "Flights aboard the PC-12 can often be booked within just a few hours’ notice, depending on availability. For the best flexibility and coordination, we recommend booking 24–48 hours in advance.",
  },
];
</script>
<template>
  <picture class="services-banner">
    <source
      media="(min-width: 1100px)"
      srcset="@/assets/images/pc-12/pc-12-banner.webp"
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
      src="@/assets/images/pc-12/pc-12-banner.webp"
      alt="banner image"
    />
  </picture>

  <AircraftIndividualJet
    title="Pilatus PC-12"
    subtitle="Versatile and Reliable Turboprop Aircraft"
    description="When selecting the perfect aircraft for your upcoming trip, you'll find that the PC-12 offers a world of advantages waiting to enhance your travel experience. This isn't just any aircraft; it's a promise of versatility, safety, reliability, and a proven track record that has won the trust of countless travelers worldwide."
    :slide="2"
    :showGallery="true"
  />

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
