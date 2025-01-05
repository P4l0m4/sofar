<script setup lang="ts">
useHead({
  title: "Pilatus PC-12 | Sofar",
  meta: [
    {
      name: "description",
      content:
        "Discover the Pilatus PC-12 at Sofar. Learn about the specifications, performance, and amenities of this versatile and efficient aircraft. Ideal for various travel needs.",
    },
  ],
});

useJsonld(() => ({
  "@context": "https://schema.org/",
  "@type": "WebSite",
  name: "Embraer Pilatus PC-12 | Sofar",
  url: window.location.href,
}));
</script>
<template>
  <picture class="plane">
    <source
      media="(min-width: 1100px)"
      srcset="@/assets/images/pc-12/pc-12-banner.webp" />

    <h1 class="plane__title titles">PILATUS PC 12</h1>

    <div class="plane__tags">
      <span class="plane__tags__tag tags"
        ><IconComponent color="#04045c" icon="group_add" />6 passengers</span
      >
      <span class="plane__tags__tag tags"
        ><IconComponent
          color="#04045c"
          icon="airplanemode_active"
        />Turboprop</span
      >
      <span class="plane__tags__tag tags"
        ><IconComponent color="#04045c" icon="pet_supplies" />Pet friendly</span
      >
      <span class="plane__tags__tag tags"
        ><IconComponent color="#04045c" icon="gate" />Cargo door</span
      >
    </div>

    <img
      class="plane__img"
      src="@/assets/images/pc-12/pc-12-banner.webp"
      alt="banner image"
  /></picture>
  <section class="plane-info-horizontal">
    <div class="plane-info-horizontal__txt">
      <h2 class="titles">PC-12: The Aircraft you can trust</h2>
      <h3 class="subtitles">Range. Space. Comfort. Reliability.</h3>
      <p class="paragraphs">
        When selecting the perfect aircraft for your upcoming trip, you'll find
        that the PC-12 offers a world of advantages waiting to enhance your
        travel experience. This isn't just any aircraft; it's a promise of
        versatility, safety, reliability, and a proven track record that has won
        the trust of countless travelers worldwide.
      </p>
    </div>

    <img
      class="plane-info-horizontal__img"
      src="@/assets/images/pc-12/pc-12-blue-dots.svg"
      alt="plane info image"
    />
  </section>
  <section class="plane-gallery-book">
    <div class="plane-gallery-book__special-wrapper">
      <img src="@/assets/images/pc-12/pc-12-g1.webp" alt="private jet image" />
      <img src="@/assets/images/pc-12/pc-12-g2.webp" alt="private jet image" />
      <img src="@/assets/images/pc-12/pc-12-g3.webp" alt="private jet image" />
      <img src="@/assets/images/pc-12/pc-12-g4.webp" alt="private jet image" />
    </div>
  </section>
  <section class="plane-info-vertical">
    <div class="plane-info-vertical__txt">
      <h3 class="subtitles">
        The cabin of the Pilatus PC-12 is one of its major assets.
      </h3>
      <p class="paragraphs">
        Here are some additional details about the cabin of this aircraft:
      </p>
      <p class="paragraphs">
        1. Generous Space: The PC-12 cabin is spacious, providing optimal
        comfort for passengers. It is designed to typically accommodate between
        six and nine passengers, depending on the chosen configuration.
      </p>
      <p class="paragraphs">
        2. Flexible Configurations: The cabin layout is flexible and can be
        adapted to suit the needs of the trip. You can opt for comfortable
        passenger seats, a VIP configuration with club seats, or even a cargo
        configuration for transporting goods.
      </p>
      <p class="paragraphs">
        3. Pressurization: The PC-12 cabin is pressurized, allowing you to
        travel at higher altitudes while maintaining a comfortable cabin
        pressure. This helps reduce fatigue and stress during long-haul flights.
      </p>
      <p class="paragraphs">
        4. Quality and Comfort: The cabin's materials and finishes are of high
        quality, ensuring a pleasant onboard environment. The seats are
        ergonomic and well-padded, providing optimal comfort for passengers.
      </p>
      <p class="paragraphs">
        5. Natural Light: The cabin also features panoramic windows that allow
        natural light to enter, offering stunning views of the outside scenery.
      </p>
      <p class="paragraphs">
        Overall, the Pilatus PC-12 cabin provides a comfortable and flexible
        environment, catering to passengers' needs for a variety of travel
        purposes, whether for business, leisure, or cargo transport.
      </p>
    </div>
    <img
      class="plane-info-vertical__img"
      src="@/assets/images/pc-12/pc-12-cabin.webp"
      alt="plane info image"
    />
  </section>
  <section class="plane-info-horizontal">
    <div class="plane-info-horizontal__txt">
      <h3 class="subtitles">A flexible cabin</h3>
      <p class="paragraphs">
        The cabin of the Pilatus PC-12 is designed to be incredibly versatile,
        catering to a wide range of travel needs. This adaptability is one of
        the features that makes the PC-12 truly exceptional.
      </p>
      <p class="paragraphs">
        You have the option to customize the cabin to suit your specific travel
        mission. Need extra space for luggage? Seats can be removed to
        accommodate a significant amount of baggage. Transporting goods or
        special equipment? The cabin can be configured in cargo mode to ensure
        the safe transportation of your cargo.
      </p>
      <p class="paragraphs">
        The flexibility of the PC-12's cabin gives you the freedom to travel as
        you see fit, whether it's for business trips, leisure getaways, or the
        transportation of valuable cargo. It ensures that your journey is
        convenient and that your belongings are handled with the utmost
        efficiency.
      </p>
    </div>
    <img
      class="plane-info-horizontal__img"
      src="@/assets/images/pc-12/pc-12-cabin-structure.svg"
      alt="plane info image"
    />
  </section>
  <section class="plane-info-vertical">
    <div class="plane-info-vertical__txt">
      <h3 class="subtitles">Cargo door and Cabin Capability</h3>
      <p class="paragraphs">
        The PC-12 stands out as the sole single-engine turboprop that offers a
        pallet-sized cargo door as a standard feature. Within the PC-12, you'll
        find a well-designed, heated, and pressurized cargo area that maximizes
        the benefits of its flat floor architecture, opening up a world of
        possibilities for its use.
      </p>
      <p class="paragraphs">
        Moreover, with the addition of a forward lavatory, you need not worry
        about compromising on your baggage space. So, when you're preparing for
        your upcoming PC-12 journey, you won't face the dilemma of selecting
        which pair of shoes to bring along. You might even decide to include
        your cherished surfboard, golf bag, or mountain bike.
      </p>
      <p class="paragraphs">
        Amenities: Leather club seating, writing tables, air conditioning, light
        snacks, refreshments and an enclosed lavatory, USB (110 v), petfriendly,
        smoking not allowed.
      </p>
      <p class="paragraphs">Cargo Door Height: 4 ft 4 in</p>
      <p class="paragraphs">Cargo Door Usable Width: 4 ft 5 in</p>
      <p class="paragraphs">Bagage Comptarment: 40 ft 3</p>
    </div>
    <img
      class="plane-info-vertical__img"
      src="@/assets/images/pc-12/pc-12-cabin-structure-slice.webp"
      alt="plane info image"
    />
  </section>
  <section class="standard-spacing centered-content">
    <h2 class="titles">Book your next flight with us!</h2>
    <QuotePopUpButton :primary="true" />
  </section>
  <OurBases />
  <EmptysForm />
</template>
<style lang="scss" scoped>
@import "@/styles/planes.scss";
</style>
