<script setup lang="ts">
import { isDesktop, isMobile } from "@/utils/functions";
import { colors } from "@/utils/colors";
import { ref } from "vue";
import preview from "@/assets/images/operations/operations-sales-sofar.webp";
import safetyInspectionsImage from "@/assets/images/operations/maintenance-operations-jetcharter.webp";
import pilotTrainingImage from "@/assets/images/operations/pilot-safety-operations-sofar.webp";

const desktopScreen = ref(isDesktop());
const mobileScreen = ref(isMobile());

window.addEventListener("resize", () => {
  desktopScreen.value = isDesktop();
  mobileScreen.value = isMobile();
});

const list = [
  "Tailored Flight Solutions – We match you with the best aircraft and pricing for your needs.",
  "Fast Response Time – Quotes and confirmations within minutes.",
  "Industry Expertise – Deep knowledge of aircraft, routes, and travel regulations.",
  "Client-Centric Approach – We prioritize your schedule, preferences, and special requests.",
];

const customerServiceList = [
  "Minimum Hours Requirement – Our pilots exceed industry flight-hour standards.",
  "Regular Re-Certifications – Continuous training and proficiency checks.",
  "Advanced Simulator Training – Preparation for all possible flight scenarios.",
  "Real-World Experience – Skilled in handling various weather conditions and air traffic complexities.",
];

const questions = [
  {
    title: "How can I get a flight quote?",
    answer:
      "Yes, you can bring luggage on board. Each aircraft in the Sofar fleet has a specific luggage capacity, and we’ll advise you on what fits best depending on your destination and number of passengers. Let us know your needs in advance to ensure smooth boarding.",
  },
  {
    title: "How does Sofar ensure transparency in pricing?",
    answer:
      "Absolutely. Pets are welcome on all Sofar flights. We kindly ask you to provide your pet’s details during booking so we can prepare the aircraft accordingly and ensure a comfortable experience for both of you.",
  },
  {
    title: "Can I make last-minute changes to my booking?",
    answer:
      "Sofar flights offer premium comfort and essentials: inflight refreshments, phone charging outlets, and, upon request, tailored amenities such as snacks, drinks, and pet-friendly accessories. While our flights are short, your experience remains refined and seamless.",
  },
  {
    title: "What kind of support is available during my trip?",
    answer:
      "Sofar specializes in regional flights of up to 2 hours. With bases in New York, Miami, and Los Angeles, our fleet covers a wide range of popular destinations such as The Hamptons, Palm Beach, Las Vegas, and the Caribbean. Our team will help you find the best route based on your needs.",
  },
];

const label = ref("Get in touch");

function copyToClipboard() {
  navigator.clipboard.writeText("hq@flysofar.com");
  label.value = "Email copied to clipboard!";
  setTimeout(() => {
    label.value = "Get in touch";
  }, 1000);
}

useHead({
  title:
    "Private Jet Operations & Customer Service | 24/7 Booking Support | Sofar",
  meta: [
    {
      name: "description",
      content:
        "Meet Sofar’s sales and operations team. Enjoy 24/7 customer service, transparent flight booking, and a safety-first approach from quote to touchdown.",
    },
  ],
});

useJsonld(() => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Private Jet Operations & Customer Service | 24/7 Booking Support | Sofar",
  url: window.location.href,
}));

const breadcrumbs = [
  {
    name: "Home",
    url: window.location.origin,
  },
  {
    name: "Our story",
    url: "/our-story",
  },
  {
    name: "Operations",
    url: window.location.href,
  },
];

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
      srcset="
        @/assets/images/operations/operations-sofar-privte-jet-header.webp
      "
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
      :color="colors['primary-color']"
    />
    <img
      class="services-banner__img"
      src="@/assets/images/operations/operations-sofar-privte-jet-header-mobile.webp"
      alt="private jet charter banner image"
    /> </picture
  ><ServicesUnderBanner
    title="Private Jet Operations"
    subtitle="Our Sales & Operations Team: Dedicated to You"
    text="At Sofar, our Operations Team is committed to delivering a premium, hassle-free private aviation experience. From sales and customer relationships to flight coordination and service transparency, we ensure that every aspect of your journey is handled with precision, professionalism, and care."
    :image="preview"
    ><NuxtLink
      class="button-primary--light"
      to="mailto:hq@flysofar.com"
      @click="copyToClipboard()"
      :style="{ width: mobileScreen ? '100%' : 'fit-content' }"
      >{{ label }}</NuxtLink
    ></ServicesUnderBanner
  ><ServicesRequestProcess />
  <div class="tickslist-headlines">
    <h3 class="titles">Our sales team</h3>
    <p class="paragraphs">
      Our experienced sales professionals are here to guide you through every
      step of your private jet journey, ensuring a seamless and efficient
      booking experience.
    </p>
  </div>
  <ServicesTicksList :list />
  <video
    ref="videoRef"
    class="full-width-video"
    src="@/assets/videos/homepage-desktop.mp4"
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
    src="@/assets/videos/homepage-mobile.mp4"
    autoplay
    muted
    loop
    playsinline
    preload="auto"
    @error="onError"
    v-else
  /><AboutCustomerService />
  <AboutOperationalTransparency />
  <AboutCustomerService
    title="Pilot Training & Certification"
    subtitle="Our pilots are among the most skilled and experienced in private aviation. Each one undergoes extensive training, recurrent testing, and strict certification processes to ensure they are always prepared for any flight condition."
    :list="customerServiceList"
    :image="pilotTrainingImage"
  />
  <ServicesMiniFAQ :questions="questions" />
  <JsonldBreadcrumb :links="breadcrumbs" />
</template>
<style lang="scss" scoped>
@import "@/styles/planes.scss";

.tickslist-headlines {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: $text-color-alt;
  padding: 2rem 1rem 0 1rem;
  background-color: $secondary-color;

  @media (min-width: $big-tablet-screen) {
    gap: 2rem;
    padding: 4rem 4rem 0 4rem;
  }

  .paragraphs {
    max-width: 800px;
  }
}
</style>
