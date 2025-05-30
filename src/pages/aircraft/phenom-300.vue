<script setup lang="ts">
const story = await useAsyncStoryblok("phenom-300", { version: "published" });
useHead({
  title: "Embraer Phenom 300 | Sofar",
  meta: [
    {
      name: "description",
      content:
        "Learn about the Embraer Phenom 300 at Sofar Aviation. Discover its advanced features, exceptional performance, and luxurious comfort for longer regional flights.",
    },
  ],
});

useJsonld(() => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Embraer Phenom 300 | Sofar",
  url: window.location.href,
}));
</script>
<template>
  <picture class="plane">
    <source
      media="(min-width: 1100px)"
      :srcset="story.content.bannerImageDesktop.filename" />

    <h2 class="plane__title titles">Phenom 300</h2>

    <div class="plane__tags">
      <span class="plane__tags__tag tags"
        ><IconComponent color="#052545" icon="pet_supplies" />Pet friendly</span
      >
      <span class="plane__tags__tag tags"
        ><IconComponent
          color="#052545"
          icon="airplanemode_active"
        />Lightjet</span
      >
      <span class="plane__tags__tag tags"
        ><IconComponent
          color="#052545"
          icon="airline_seat_recline_extra"
        />Comfort</span
      >
      <span class="plane__tags__tag tags"
        ><IconComponent color="#052545" icon="wifi" />WIFI</span
      >
      <span class="plane__tags__tag tags"
        ><IconComponent color="#052545" icon="business_center" />Baggages
        capacity</span
      >
    </div>

    <img
      class="plane__img"
      :src="story.content.bannerImageMobile.filename"
      :alt="story.content.bannerImageMobile.alt"
  /></picture>
  <section class="plane-info-horizontal">
    <div class="plane-info-horizontal__txt">
      <h2 class="titles">The Most Trusted Light Jet in The World</h2>
      <h3 class="subtitles">Efficiency, Performance, Comfort.</h3>
      <p class="paragraphs">
        The Phenom 300 offers luxury and efficiency. With its spacious
        nine-passenger cabin, ergonomic seating and top-of-the-line
        entertainment, this light jet ensures comfort and performance for your
        business or leisure travels.
      </p>
    </div>
    <img
      class="plane-info-horizontal__img"
      src="@/assets/images/phenom-300/phenom300-embraer-sofar-private-jet2.webp"
      alt="plane info image"
    />
  </section>
  <section class="plane-info-vertical">
    <div class="plane-info-vertical__txt">
      <h3 class="subtitles">The cabin</h3>
      <p class="paragraphs">
        The Phenom 300 cabin is the epitome of luxury and practicality. Designed
        meticulously, it offers a remarkable travel experience. The cabin's
        spaciousness, ergonomic seats, and premium finishes create an inviting
        atmosphere.
      </p>
      <p class="paragraphs">
        Large windows fill the cabin with natural light. This jet features an
        enclosed bathroom and the widest cabin in its category, offering both
        privacy and roominess. With a generous luggage capacity of 76ft³, it
        comfortably accommodates up to 7 passengers.
      </p>
      <p class="paragraphs">
        Maintaining a low cabin pressure altitude, even at cruising altitudes of
        45,000ft, enhances passenger comfort. It's equipped with 110V outlets
        (4), satellite phone/text capability, and Gogo WIFI for uninterrupted
        connectivity. The Phenom 300 combines luxury, comfort, and practicality
        for a superior travel experience.
      </p>
      <img
        class="plane-info-vertical__txt__img"
        src="@/assets/images/phenom-300/phenom-300-cabin-capability.webp"
        alt="private jet cabin image"
      />
    </div>
    <img
      class="plane-info-vertical__img"
      src="@/assets/images/phenom-300/cabin-phenom300-embraer.webp"
      alt="plane info image"
    />
  </section>

  <section class="standard-spacing centered-content">
    <h2 class="titles">Have you been impressed by the Phenom 300 ?</h2>
    <QuotePopUpButton :primary="true" />
  </section>

  <section class="plane-gallery-book">
    <div class="plane-gallery-book__wrapper">
      <img
        src="@/assets/images/phenom-300/phenom-300-embraer-sofar-cockpit.webp"
        alt="private jet image"
      />
      <img
        src="@/assets/images/phenom-300/phenom-300-embraer-sofar-window.webp"
        alt="private jet image"
      />
      <img
        src="@/assets/images/phenom-300/phenom-300-embraer-sofar (2).webp"
        alt="private jet image"
      />
      <img
        src="@/assets/images/phenom-300/phenom-300-embraer-sofar (4).webp"
        alt="private jet image"
      />
      <img
        src="@/assets/images/phenom-300/phenom-300-embraer-sofar.webp"
        alt="private jet image"
      />
    </div>
  </section>
</template>
<style lang="scss" scoped>
@import "@/styles/planes.scss";
</style>
