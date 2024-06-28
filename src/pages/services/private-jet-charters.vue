<script setup>
const story = await useAsyncStoryblok("private-jet-charter", {
  version: "published",
});
useHead({
  title: "Private Jet Charters | Reliable & Flexible Air Travel | Sofar",
  meta: [
    {
      name: "description",
      content:
        "Experience the convenience and reliability of private jet charters with Sofar Aviation. Flexible scheduling and personalized services for all your travel needs.",
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
  <section class="standard-spacing centered-content">
    <h2 class="titles">Book your next flight with us!</h2>
    <QuotePopUpButton :primary="true" />
  </section>
  <OurBases />
</template>
<style lang="scss" scoped>
@import "@/styles/planes.scss";
</style>
