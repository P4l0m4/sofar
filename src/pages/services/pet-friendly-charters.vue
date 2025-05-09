<script setup>
import { isDesktop } from "@/utils/functions";
import { colors } from "@/utils/colors";
import pet from "@/assets/images/pet-friendly-sofar.webp";
import pet2 from "@/assets/images/pet-friendly-jet-charter-sofar.webp";

const desktopScreen = ref(isDesktop());

window.addEventListener("resize", () => {
  desktopScreen.value = isDesktop();
});

const carouselElements = [
  {
    link: "/destinations/us-florida",
    image: "/assets/images/florida.webp",
    label: "Florida",
  },
  {
    link: "/destinations/us-illinois",
    image: "/assets/images/illinois.webp",
    label: "Illinois",
  },
  {
    link: "/destinations/us-arizona",
    image: "/assets/images/arizona.webp",
    label: "Arizona",
  },
  {
    link: "/destinations/us-utah",
    image: "/assets/images/utah.webp",
    label: "Utah",
  },
];

const questions = [
  {
    title: "Can my pet sit with me in the cabin?",
    answer:
      "Yes, your pet can sit with you in the cabin during your SOFAR flight. We prioritize your comfort and your pet's well-being to make the journey as enjoyable as possible for both of you.",
  },
  {
    title: "Are there any breed or size restrictions?",
    answer:
      "Generally, there are no breed restrictions, but size may be a consideration depending on the aircraft and number of passengers. Please let us know your pet’s details when booking, and we’ll make sure to plan the best setup for your trip.",
  },
  {
    title: "Do I need special paperwork to fly with my pet?",
    answer:
      "Depending on your destination, you may need to provide vaccination records, health certificates, or other documentation. Our team will guide you through the necessary requirements to ensure a smooth travel experience.",
  },
  {
    title: "Are there pet-friendly amenities onboard?",
    answer:
      "Yes! Upon request, we can provide pet-friendly amenities such as blankets, treats, and water bowls to make your pet feel right at home during the flight. Let us know in advance so we can prepare everything for your furry companion.",
  },
];

useHead({
  title: "Pet-Friendly Jet Charters | Safe Travel for Your Pets | Sofar ",
  meta: [
    {
      name: "description",
      content:
        "Enjoy pet-friendly jet charters with Sofar. Our private jet services ensure a comfortable and safe travel experience for you and your pets. Book your pet-friendly flight today.",
    },
  ],
});

useJsonld(() => ({
  "@context": "https://schema.org/",
  "@type": "WebSite",
  name: "Pet-Friendly Jet Charters | Safe Travel for Your Pets | Sofar",
  url: window.location.href,
}));
</script>
<template>
  <picture class="services-banner">
    <source
      media="(min-width: 1100px)"
      srcset="@/assets/images/pet-friendly-charter-desktop.webp"
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
      parent="private-jet"
      v-if="desktopScreen"
      :color="colors['secondary-color']"
    />
    <img
      class="services-banner__img"
      src="@/assets/images/pet-friendly-jet-charter-mobile.webp"
      alt="banner image"
    />
  </picture>
  <ServicesUnderBanner
    title="Pet-Friendly Jet Charter"
    subtitle="Fly Comfortably with Your Furry Companion"
    text="At Sofar, we know that pets are family. That’s why we offer a seamless, pet-friendly private jet charter experiencedesigned for both you and your furry companion. Say goodbye to airline restrictions, cargo holds, and stressful airport experiences—fly together in comfort, privacy, and luxury."
    :image="pet"
  />
  <ServicesTicksList
    :list="[
      'No Separation – Your pet stays with you in the cabin.',
      'Comfort & Safety – Spacious seating and pet-friendly amenities.',
      'No Breed or Size Restrictions – Travel freely, regardless of pet size.',
      'Stress-Free Travel – Avoid the chaos of crowded airports and security checks.',
    ]"
    :image="pet2"
  />
  <div class="slides-wrapper">
    <div class="slides-wrapper__headlines">
      <h3 class="slides-wrapper__headlines__title titles">
        Pet-Friendly Destinations
      </h3>
      <p class="slides-wrapper__headlines__text paragraphs">
        Sofar flies to hundreds of pet-friendly destinations, so you and your
        pet can enjoy a seamless journey.
      </p>
    </div>
    <CarouselComponent :carouselElements v-if="!desktopScreen" />
    <ServicesSlidesGrid
      :carouselElements="carouselElements"
      v-if="desktopScreen"
    />
  </div>
  <OurFleet />
  <ServicesMiniFAQ :questions />
</template>
<style lang="scss" scoped>
@import "@/styles/planes.scss";

.slides-wrapper {
  display: flex;
  flex-direction: column;
  background-color: $secondary-color;

  &__headlines {
    padding: 2rem 1rem 0 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: $text-color-alt;

    @media (min-width: $big-tablet-screen) {
      padding: 4rem 2rem 0 2rem;
    }

    &__text {
      text-wrap: balance;
      max-width: 800px;
    }
  }
}
</style>
