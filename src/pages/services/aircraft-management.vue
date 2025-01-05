<script setup lang="ts">
import { ref } from "vue";

import { useCommonAssetsStore } from "@/stores/commonAssets";
const commonAssetsStore = useCommonAssetsStore();

const story = await useAsyncStoryblok("aircraft-management", {
  version: "published",
});

const label = ref("Get in touch with our team");
function copyToClipboard() {
  navigator.clipboard.writeText("hq@flysofar.com");
  label.value = "Email copied to clipboard!";
  setTimeout(() => {
    label.value = "Get in touch with our team";
  }, 1000);
}

useHead({
  title: "Aircraft Management Services | Sofar",
  meta: [
    {
      name: "description",
      content:
        "Discover comprehensive aircraft management services with Sofar. We offer personalized solutions to optimize your aircraft's performance and value.",
    },
  ],
});

useJsonld(() => ({
  "@context": "https://schema.org/",
  "@type": "WebSite",
  name: "Aircraft Management Services | Sofar",
  url: window.location.origin,
}));
</script>
<template>
  <picture class="services-banner">
    <source
      media="(min-width: 1100px)"
      :srcset="story.content.bannerImageDesktop.filename"
    />
    <div class="services-banner__headlines">
      <h1 class="services-banner__headlines__title titles">
        {{ story.content.bannerTitle }}
      </h1>
      <h2 class="services-banner__headlines__title subtitles">
        {{ story.content.bannerSubtitle }}
      </h2>
    </div>
    <!-- <QuoteForm parent="private-jet" /> -->
    <a
      class="button-primary--light"
      href="mailto:hq@flysofar.com"
      style="width: fit-content"
      @click="copyToClipboard()"
      >{{ label }}</a
    >
    <img
      class="services-banner__img"
      :src="story.content.bannerImageMobile.filename"
      alt="banner image"
    />
  </picture>
  <ServicesWhyChooseUs />
  <TextComponent
    :title="story.content.textSectionTitle"
    :text="story.content.textSectionParagraph"
  />

  <iframe
    v-if="
      commonAssetsStore.teaserVideo && commonAssetsStore.teaserVideo.length > 0
    "
    class="video"
    :src="commonAssetsStore.teaserVideo"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>

  <ServicesContentBlok
    v-for="contentBlok in story.content?.ContentBloks"
    :key="contentBlok._uid"
    :title="contentBlok.title"
    :text="contentBlok.text"
    :image="contentBlok.image.filename"
    :alt="contentBlok.image.alt"
  />
  <section class="standard-spacing centered-content">
    <h2 class="titles">Book your next flight with us!</h2>
    <QuotePopUpButton :primary="true" />
  </section>
  <OurBases />
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
