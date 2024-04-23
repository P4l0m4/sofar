<template>
  <picture class="services-banner">
    <source
      media="(min-width: 1100px)"
      srcset="@/assets/images/private-jet-charters-banner.webp"
    />
    <div class="services-banner__headlines">
      <h1 class="services-banner__headlines__title titles">
        Private Jet Charter
      </h1>
      <h2 class="services-banner__headlines__title subtitles">
        Flexible charter flights, anytime, anywhere. Your journey, your
        schedule.
      </h2>
    </div>
    <QuoteForm />
    <img
      class="services-banner__img"
      src="@/assets/images/private-jet-charters-mobile.webp"
      alt="banner image"
    />
  </picture>
  <ServicesWhyChooseUs />
  <HomeWhyFlyWithSofar />
  <ClientReviews />
</template>
<style lang="scss" scoped>
@import "@/styles/planes.scss";
</style>
