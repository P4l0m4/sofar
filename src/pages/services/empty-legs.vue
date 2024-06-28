<script setup>
import OurBases from "~/components/OurBases.vue";

const story = await useAsyncStoryblok("empty-legs", {
  version: "published",
});

useHead({
  title: "Empty Leg Flights | Affordable Private Jet Charters | Sofar",
  meta: [
    {
      name: "description",
      content:
        "Sofar offers empty leg flights at unbeatable prices. Whether you're flying for business or pleasure, our empty leg flights are the perfect way to travel in style and comfort. Contact us today to learn more about our empty leg flights.",
    },
  ],
});
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
</style>
