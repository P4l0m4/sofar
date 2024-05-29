<script setup>
const story = await useAsyncStoryblok("business-charters", {
  version: "published",
});

useHead({
  title: "Business charters | Sofar",
  meta: [
    {
      name: "description",
      content:
        "Sofar offers premium business charter services that are tailored to your needs. Whether you're flying for business or pleasure, our team of experts will ensure that your journey is smooth, comfortable, and stress-free. Contact us today to learn more about our business charter services.",
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
  <ServicesWhyChooseUs />
  <section>
    <h2 class="section-title titles">Sofar Fleet</h2>
    <CarouselComponent />
  </section>
  <HomeWhyFlyWithSofar />
  <ClientReviews />

  <BlogArticlesCarousel />
</template>
<style lang="scss" scoped>
@import "@/styles/planes.scss";
</style>
