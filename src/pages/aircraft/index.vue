<script setup lang="ts">
import { colors } from "@/utils/colors";
import { isDesktop } from "~/utils/functions";
const desktopScreen = ref(isDesktop());

window.addEventListener("resize", () => {
  desktopScreen.value = isDesktop();
});

const story = await useAsyncStoryblok("aircraft", {
  version: "published",
});

const breadcrumbs = [
  {
    name: "Home",
    url: window.location.origin,
  },
  {
    name: "Aircraft",
    url: window.location.href,
  },
];

useHead({
  title: "Our Private Jet Aircraft Fleet | Sofar",
  meta: [
    {
      name: "description",
      content:
        "Explore Sofar's fleet of private jets. Discover the specifications and amenities of our aircraft to find the perfect jet for your travel needs.",
    },
  ],
});

useJsonld(() => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Our Private Jet Aircraft Fleet | Sofar",
  url: window.location.href,
}));
</script>
<template>
  <picture class="services-banner">
    <source
      media="(min-width: 1100px)"
      :srcset="story.content.bannerImageDesktop.filename"
    />
    <div
      class="services-banner__headlines-mobile"
      :style="{ color: `${colors['secondary-color']}` }"
    >
      <h1 class="services-banner__headlines__title titles">
        {{ story.content.bannerTitle }}
      </h1>
      <h2 class="services-banner__headlines__title subtitles">
        {{ story.content.bannerSubtitle }}
      </h2>
    </div>
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
      parent="aircraft"
      v-if="desktopScreen"
      :color="colors['secondary-color']"
    />
    <img
      class="services-banner__img"
      :src="story.content.bannerImageMobile.filename"
      alt="banner image"
    />
  </picture>

  <TextComponent
    :title="story.content.textSectionTitle"
    :text="story.content.textSectionParagraph"
  />
  <section>
    <h2 class="section-title titles">Sofar Fleet</h2>
    <CarouselComponent />
  </section>
  <ServicesContentBlok
    v-for="contentBlok in story.content?.ContentBloks"
    :key="contentBlok._uid"
    :title="contentBlok.title"
    :text="contentBlok.text"
    :image="contentBlok.image.filename"
    :alt="contentBlok.image.alt"
  />
  <ServicesWhyChooseUs />
  <ServicesContentBlok
    title="Off-Fleet Requests"
    text="At Sofar, we understand that each journey is unique, and sometimes our existing fleet may not perfectly match your needs. That's why we offer our off-fleet request service. This service allows us to source any aircraft you require, ensuring we can accommodate special requests or specific preferences. Whether you need a particular aircraft model, additional luxury features, or a specialized configuration, our team will find the perfect solution to meet your exact specifications."
  />
  <section class="standard-spacing centered-content">
    <h2 class="titles">
      With Sofar, you can trust that every detail of your flight will be handled
      with the utmost care and professionalism.
    </h2>
    <QuotePopUpButton :primary="true" />
  </section>
  <OurBases />
  <JsonldBreadcrumb :links="breadcrumbs" />
</template>
<style lang="scss" scoped>
@import "@/styles/planes.scss";
</style>
