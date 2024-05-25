<script setup>
const story = await useAsyncStoryblok("off-fleet-requests", {
  version: "published",
});
const fleetCarouselElements = [
  {
    link: "/aircraft/phenom-100",
    image: "/assets/images/100.webp",
    label: "Phenom 100",
  },
  {
    link: "/aicraft/phenom-300",
    image: "/assets/images/300.webp",
    label: "Phenom 300",
  },
  {
    link: "/aircraft/pc12",
    image: "/assets/images/12.webp",
    label: "Pilatus PC 12",
  },
];
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

  <TextComponent
    :title="story.content.textSectionTitle"
    :text="story.content.textSectionParagraph"
  />
  <section>
    <h2 class="section-title titles">Sofar Fleet</h2>
    <CarouselComponent :carouselElements="fleetCarouselElements" />
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
  <HomeWhyFlyWithSofar />
  <ClientReviews />

  <BlogArticlesCarousel />
</template>
<style lang="scss" scoped>
@import "@/styles/planes.scss";
</style>
