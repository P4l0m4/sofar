import OurBases from '~/components/OurBases.vue';
<template>
  <picture class="plane">
    <source
      media="(min-width: 1100px)"
      srcset="@/assets/images/phenom-300/phenom-300-banner.webp" />

    <h2 class="plane__title titles">Phenom 300</h2>

    <div class="plane__tags">
      <span class="plane__tags__tag tags"
        ><IconComponent color="#04045c" icon="pet_supplies" />Pet friendly</span
      >
      <span class="plane__tags__tag tags"
        ><IconComponent color="#04045c" icon="group_add" />Flexible layout</span
      >
      <span class="plane__tags__tag tags"
        ><IconComponent
          color="#04045c"
          icon="airline_seat_recline_extra"
        />Cargo space</span
      >
      <span class="plane__tags__tag tags"
        ><IconComponent color="#04045c" icon="wifi" />Internet on board</span
      >
      <span class="plane__tags__tag tags"
        ><IconComponent color="#04045c" icon="business_center" />Bagage
        compartment</span
      >
      <span class="plane__tags__tag tags"
        ><IconComponent color="#04045c" icon="cable" />USB 110V
      </span>
    </div>

    <img
      class="plane__img"
      src="@/assets/images/phenom-300/phenom-300-banner.webp"
      alt="banner image"
  /></picture>
  <section class="plane-info-horizontal">
    <div class="plane-info-horizontal__txt">
      <h2 class="titles">The Most Trusted Light Jet in The World</h2>
      <h3 class="subtitles">Efficiency, Performance, Comfort.</h3>
    </div>
    <img
      class="plane-info-horizontal__img"
      src="@/assets/images/phenom-300/phenom-300-blue-dots.svg"
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
        comfortably accommodates up to 8 passengers.
      </p>
      <p class="paragraphs">
        Maintaining a low cabin pressure altitude, even at cruising altitudes of
        45,000ft, enhances passenger comfort. It's equipped with 110V outlets
        (4), satellite phone/text capability, and Gogo WIFI for uninterrupted
        connectivity. The Phenom 300 combines luxury, comfort, and practicality
        for a superior travel experience.
      </p>
    </div>
    <img
      class="plane-info-vertical__img"
      src="@/assets/images/phenom-300/phenom-300-cabin.webp"
      alt="plane info image"
    />
  </section>

  <img
    class="full-width-img"
    src="@/assets/images/phenom-300/phenom-300-cabin-inside.webp"
    alt="private jet cabin image"
  />

  <OurBases />
  <EmptysForm />
</template>
<style lang="scss" scoped>
@import "@/styles/planes.scss";
</style>
