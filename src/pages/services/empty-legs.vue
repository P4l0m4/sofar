<script setup>
import { useCommonAssetsStore } from "@/stores/commonAssets";
const commonAssetsStore = useCommonAssetsStore();
await commonAssetsStore.fetchTeaserVideo();

const story = await useAsyncStoryblok("empty-legs", {
  version: "published",
});

useHead({
  title: "Empty Leg Flights | Affordable Private Jet Charters | Sofar",
  meta: [
    {
      name: "description",
      content:
        "Take advantage of discounted empty leg flights with Sofar. Enjoy the benefits of private jet travel at a fraction of the cost with our empty leg charter deals.",
    },
  ],
});

useJsonld(() => ({
  "@context": "https://schema.org/",
  "@type": "WebSite",
  name: "Empty Leg Flights | Affordable Private Jet Charters | Sofar",
  url: window.location.href,
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
    <QuoteForm parent="private-jet" />
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
  <EmptyLegs />
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
