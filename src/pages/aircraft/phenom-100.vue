<script setup lang="ts">
useHead({
  title: "Embraer Phenom 100 | Sofar",
  meta: [
    {
      name: "description",
      content:
        "Explore the Embraer Phenom 100 with Sofar. Learn about the features, performance, and comfort of this light jet, perfect for short regional flights.",
    },
  ],
});
</script>
<template>
  <picture class="plane">
    <source
      media="(min-width: 1100px)"
      srcset="
        @/assets/images/phenom-100/phenom-100-embraer-sofar-jet-charter.webp
      " />

    <h2 class="plane__title titles">Phenom 100</h2>

    <div class="plane__tags">
      <span class="plane__tags__tag tags"
        ><IconComponent color="#04045c" icon="pet_supplies" />Pet friendly</span
      >
      <span class="plane__tags__tag tags"
        ><IconComponent
          color="#04045c"
          icon="airplanemode_active"
        />Lightjet</span
      >
      <span class="plane__tags__tag tags"
        ><IconComponent
          color="#04045c"
          icon="airline_seat_recline_extra"
        />Comfort</span
      >
      <span class="plane__tags__tag tags"
        ><IconComponent color="#04045c" icon="flight_class" />Club seat</span
      >
      <span class="plane__tags__tag tags"
        ><IconComponent color="#04045c" icon="business_center" />Bagages
        capacity</span
      >
    </div>

    <img
      class="plane__img"
      src="@/assets/images/phenom-100/phenom-100-embraer-sofar-jet-charter.webp"
      alt="banner image"
  /></picture>
  <section class="plane-info-horizontal">
    <div class="plane-info-horizontal__txt">
      <h2 class="titles">
        Experience Exceptional Travel with Sofar's Phenom 100
      </h2>
      <h3 class="subtitles">
        Introducing the Phenom 100 - your ultimate ticket to travel in
        unrivalled style.
      </h3>
      <p class="paragraphs">
        Designed for business trips and family getaways, this small aircraft
        harmoniously combines the need for speed with uncompromising comfort,
        all at an incredibly attractive price. Despite its compact size, the
        Phenom 100 ensures that you don't have to sacrifice luxury for
        efficiency. Enjoy the comfort of its spacious, well appointed seats for
        a sumptuous experience, whether you're on a business mission or escaping
        with the family. High-speed travel becomes an uncompromising reality, as
        the Phenom 100 sets a new benchmark for small jets, offering efficiency
        and luxury in an elegant package.
      </p>
      <p class="paragraphs">
        What really sets the Phenom 100 apart is its reliability. Count on this
        exceptional aircraft for a journey that's not only smooth, but also
        safe, so you can reach your destination with pinpoint accuracy. Elevate
        your travel experience with the Phenom 100 - an unrivalled blend of
        speed, comfort and affordability that defines the pinnacle of private
        aviation.
      </p>
    </div>
    <img
      class="plane-info-horizontal__img"
      src="@/assets/images/phenom-100/phenom-100-embraer-sofar-jet-charter-blue-dots.webp"
      alt="plane info image"
    />
  </section>
  <!-- <iframe
    class="full-screen-video"
    src="https://www.youtube.com/embed/uxzphXYWoQI?si=P1hoPbxjJONbZ5ZF"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe> -->
  <section class="plane-info-vertical">
    <div class="plane-info-vertical__txt">
      <h3 class="subtitles">The cabin</h3>
      <p class="paragraphs">
        The Phenom 100 also claims to have the tallest and widest cross section,
        cabin dimensions in its class, offering more head and leg room than its
        competitors. The Phenom 100 also possesses the largest entrance door,
        and is unique due to the fact that most entry-level and small jets do
        not have an air-stair option!
      </p>
      <p class="paragraphs">
        The Phenom 100 windows are also the largest among entry-level and light
        jets, measuring 1.2 square feet, and are strategically positioned to
        provide the most natural light possible for occupants. The Phenom 100
        contains a forward wardrobe for storing coats, jackets, and up to 4
        laptops with 6 cubic feet of storage capacity.
      </p>
      <p class="paragraphs">
        The Phenom 100 has a large cabin cross-section and offers more head and
        legroom than many competitors. Depending on the configuration, there is
        room for 4 to 6 passengers in the cabin without feeling cramped. The
        large windows give the cabin a light and bright feel-good ambience.
      </p>
    </div>
    <img
      class="plane-info-vertical__img"
      src="@/assets/images/phenom-100/phenom-100-cabin-layout-sofar.webp"
      alt="plane info image"
    />
  </section>
  <section class="plane-info-vertical">
    <div class="plane-info-vertical__txt" style="position: relative">
      <h3 class="subtitles">Aircraft Specifics and Cabin Capability</h3>
      <p class="paragraphs">Enclosed Bathroom</p>
      <p class="paragraphs">Widest Cabin in Light Jet Category</p>
      <p class="paragraphs">Cabin Pressure Altitude as Low as 8,000ft</p>
      <p class="paragraphs">At Cruise Altitude of 41,000ft</p>
      <p class="paragraphs">110V Outlets (2)</p>
      <p class="paragraphs">Satellite Phone/Text Capability/Airtext</p>
    </div>
    <img
      class="plane-info-vertical__img"
      src="@/assets/images/phenom-100/pehnom100-cabin-capability.webp"
      alt="private jet cabin image"
    />
    <img
      class="inside-img"
      src="@/assets/images/phenom-100/phenom-100-luggage-capacity (2).webp"
    />
  </section>
  <section class="standard-spacing centered-content">
    <h2 class="titles">Have you been impressed by the Phenom 100 ?</h2>
    <QuotePopUpButton :primary="true" />
  </section>
  <section class="plane-gallery-book">
    <div class="plane-gallery-book__special-wrapper">
      <img
        src="@/assets/images/phenom-100/phenom-100-embraer-sofar.webp"
        alt="private jet image"
      />
      <img
        src="@/assets/images/phenom-100/phenom-100-embraer-sofar (1).webp"
        alt="private jet image"
      />
      <img
        src="@/assets/images/phenom-100/phenom-100-embraer-sofar (2).webp"
        alt="private jet image"
      />
      <img
        src="@/assets/images/phenom-100/phenom-100-embraer-sofar (3).webp"
        alt="private jet image"
      />
      <img
        src="@/assets/images/phenom-100/phenom-100-embraer-sofar (4).webp"
        alt="private jet image"
      />
      <img
        src="@/assets/images/phenom-100/phenom-100-embraer-sofar-jet-charter.webp"
        alt="private jet image"
      />
      <img
        src="@/assets/images/phenom-100/phenom-100-embraer-sofar (5).webp"
        alt="private jet image"
      />
      <img
        src="@/assets/images/phenom-100/phenom-100-embraer-sofar (6).webp"
        alt="private jet image"
      />
      <img
        src="@/assets/images/phenom-100/phenom-100-embraer-sofar (7).webp"
        alt="private jet image"
      />
    </div>
  </section>
  <!-- <OurBases />
  <EmptysForm /> -->
</template>
<style lang="scss" scoped>
@import "@/styles/planes.scss";
</style>
