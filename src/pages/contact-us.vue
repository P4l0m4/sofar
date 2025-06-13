<script setup>
import { colors } from "@/utils/colors";
import { isDesktop } from "@/utils/functions";

import preview from "@/assets/images/contact-us/sofar-contact-us.webp";

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
    name: "Contact us",
    url: window.location.href,
  },
];

useHead({
  title: "Contact Sofar | Private Jet Charter",
  meta: [
    {
      name: "description",
      content:
        "Get in touch with Sofar to book a private flight, ask a question, or speak with our team. Call, email, or visit us at one of our locations in New York, LA, or Miami.",
    },
  ],
});

useJsonld(() => ({
  "@context": "https://schema.org/",
  "@type": "WebSite",
  name: "Contact Sofar | Private Jet Charter",
  url: window.location.href,
}));
</script>
<template>
  <picture class="services-banner">
    <source
      media="(min-width: 1100px)"
      srcset="@/assets/images/contact-us/contact-us-sofar-jetcharter.webp"
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
      parent="off-fleet-requests"
      v-if="desktopScreen"
      :color="colors['primary-color']"
    />

    <img
      class="services-banner__img"
      src="@/assets/images/contact-us/contact-us-sofar-jetcharter-mobile.webp"
      alt="banner image"
    />
  </picture>
  <ServicesUnderBanner title="Contact Us" :image="preview">
    <div class="under-banner-cta">
      <IconComponent
        icon="phone_fill"
        size="3rem"
        class="under-banner-cta__icon"
      /><span class="under-banner-cta__label subtitles">Phone</span
      ><NuxtLink class="under-banner-cta__link" href="tel:+12137698008"
        >+1 213-769-8008</NuxtLink
      >
    </div>
    <div class="under-banner-cta">
      <IconComponent
        icon="envelope_bold"
        size="3rem"
        class="under-banner-cta__icon"
      /><span class="under-banner-cta__label subtitles">Email</span
      ><NuxtLink class="under-banner-cta__link" href="mailto:HQ@flysofar.com"
        >HQ@flysofar.com</NuxtLink
      >
    </div>
    <div class="under-banner-cta">
      <IconComponent
        icon="map_pin_fill"
        size="3rem"
        class="under-banner-cta__icon"
      /><span class="under-banner-cta__label subtitles">Address</span
      ><span class="under-banner-cta__link"
        >11911 San Vincente Blvd Suite 340, LA 90049</span
      >
    </div>
  </ServicesUnderBanner>
  <EmptysForm />
  <JsonldBreadcrumb :links="breadcrumbs" />
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

.under-banner-cta {
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: 2fr;
  align-items: center;
  width: fit-content;
  grid-column-gap: 1rem;
  grid-row-gap: 0;
  color: $text-color-alt;

  &__icon {
    grid-column: 1;
    grid-row: 1 / span 2;
  }

  &__link {
    color: $base-color;
    font-size: 1rem;
    font-weight: $skinny;
  }
}
</style>
