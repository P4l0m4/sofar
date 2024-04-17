<template>
  <picture class="plane">
    <source media="(min-width: 1100px)" srcset="@/assets/images/pc12.webp" />

    <h2 class="plane__title titles">Phenom 100</h2>
    <div class="plane__stats">
      <div class="plane__stats__stat">
        <p class="plane__stats__stat__name paragraphs">Cruise speed</p>
        <p class="plane__stats__stat__figure subtitles">
          290
          <span class="plane__stats__stat__figure__small-text">Knots /</span>
          333,726
          <span class="plane__stats__stat__figure__small-text">Mph</span>
        </p>
      </div>
      <div class="plane__stats__stat">
        <p class="plane__stats__stat__name paragraphs">Range</p>
        <p class="plane__stats__stat__figure subtitles">
          1,803 <span class="plane__stats__stat__figure__small-text">Nm</span>
        </p>
      </div>
      <div class="plane__stats__stat">
        <p class="plane__stats__stat__name paragraphs">Payload</p>
        <p class="plane__stats__stat__figure subtitles">
          2204 <span class="plane__stats__stat__figure__small-text">Lbs</span>
        </p>
      </div>
      <div class="plane__stats__stat">
        <p class="plane__stats__stat__name paragraphs">Seating</p>
        <p class="plane__stats__stat__figure subtitles">
          6
          <span class="plane__stats__stat__figure__small-text">+ 2 pilots</span>
        </p>
      </div>
    </div>

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

    <img class="plane__img" src="@/assets/images/birds.webp" alt="banner image"
  /></picture>
  <EmptysForm />
  <section class="gallery">
    <div class="gallery__img">
      <img src="@/assets/images/phenom-100/phenom-100-1.webp" />
    </div>
    <div class="gallery__img">
      <img src="@/assets/images/phenom-100/phenom-100-2.webp" />
    </div>
    <div class="gallery__img">
      <img src="@/assets/images/phenom-100/phenom-100-3.webp" />
    </div>
    <div class="gallery__img">
      <img src="@/assets/images/phenom-100/phenom-100-4.webp" />
    </div>
    <div class="gallery__img">
      <img src="@/assets/images/phenom-100/phenom-100-1.webp" />
    </div>
    <div class="gallery__img">
      <img src="@/assets/images/phenom-100/phenom-100-5.webp" />
    </div>
    <div class="gallery__img">
      <img src="@/assets/images/phenom-100/phenom-100-1.webp" />
    </div>
    <div class="gallery__img">
      <img src="@/assets/images/phenom-100/phenom-100-6.webp" />
    </div>
    <div class="gallery__img">
      <img src="@/assets/images/phenom-100/phenom-100-1.webp" />
    </div>
    <div class="gallery__img">
      <img src="@/assets/images/phenom-100/phenom-100-7.webp" />
    </div>
    <div class="gallery__img">
      <img src="@/assets/images/phenom-100/phenom-100-8.webp" />
    </div>
    <div class="gallery__img">
      <img src="@/assets/images/phenom-100/phenom-100-9.webp" />
    </div>
    <div class="gallery__img">
      <img src="@/assets/images/phenom-100/phenom-100-10.webp" />
    </div>
    <div class="gallery__img">
      <img src="@/assets/images/phenom-100/phenom-100-11.webp" />
    </div>
    <div class="gallery__img">
      <img src="@/assets/images/phenom-100/phenom-100-12.webp" />
    </div>
    <div class="gallery__img">
      <img src="@/assets/images/phenom-100/phenom-100-13.webp" />
    </div>
    <div class="gallery__img">
      <img src="@/assets/images/phenom-100/phenom-100-14.webp" />
    </div>
  </section>
</template>
