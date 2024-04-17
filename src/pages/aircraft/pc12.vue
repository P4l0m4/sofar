<template>
  <picture class="plane">
    <source media="(min-width: 1100px)" srcset="@/assets/images/pc12.webp" />

    <h2 class="plane__title titles">PILATUS PC 12</h2>
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

    <img class="plane__img" src="@/assets/images/pc12.webp" alt="banner image"
  /></picture>
  <EmptysForm />
  <section class="gallery">
    <div class="gallery__img">
      <img src="@/assets/images/pc-12/pc-12-1.webp" />
    </div>
    <div class="gallery__img">
      <img src="@/assets/images/pc-12/pc-12-2.webp" />
    </div>
    <div class="gallery__img">
      <img src="@/assets/images/pc-12/pc-12-3.webp" />
    </div>
    <div class="gallery__img">
      <img src="@/assets/images/pc-12/pc-12-4.webp" />
    </div>
    <div class="gallery__img">
      <img src="@/assets/images/pc-12/pc-12-1.webp" />
    </div>
    <div class="gallery__img">
      <img src="@/assets/images/pc-12/pc-12-5.webp" />
    </div>
    <div class="gallery__img">
      <img src="@/assets/images/pc-12/pc-12-1.webp" />
    </div>
    <div class="gallery__img">
      <img src="@/assets/images/pc-12/pc-12-6.webp" />
    </div>
    <div class="gallery__img">
      <img src="@/assets/images/pc-12/pc-12-1.webp" />
    </div>
    <div class="gallery__img">
      <img src="@/assets/images/pc-12/pc-12-7.webp" />
    </div>
    <div class="gallery__img">
      <img src="@/assets/images/pc-12/pc-12-8.webp" />
    </div>
  </section>
</template>
<style lang="scss">
.plane {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  padding: 2rem 1rem;
  width: 100%;
  height: 100svh;
  max-height: 800px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    background-color: $text-color;
    z-index: -1;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(80deg, $text-color, transparent 60%);
    z-index: -1;
  }

  @media (min-width: $big-tablet-screen) {
    padding: 4rem 2rem;
    gap: 2rem;
    background-position: right 2rem top 2rem;
  }

  & source {
    display: none;
  }

  &__title {
    font-size: 4rem;
  }

  &__img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }

  &__title {
    color: $primary-color;
    text-shadow: $shadow-text;
  }
  &__stats {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    &__stat {
      color: $primary-color;
      text-wrap: balance;
      display: flex;
      align-items: center;
      gap: 1rem;
      white-space: nowrap;

      @media (min-width: $laptop-screen) {
        max-width: calc(100% - 160px);
      }
      &__name {
        text-shadow: $shadow-text;
      }
      &__figure {
        text-shadow: $shadow-text;

        &__small-text {
          font-size: 1rem;
        }
      }
    }
  }

  &__tags {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    max-width: 500px;
    margin-top: auto;

    &__tag {
      display: flex;
      gap: 0.5rem;
      align-items: center;
      color: $text-color;
      background-color: $primary-color-faded;
    }
  }
}
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(343px, 1fr));
  gap: 1rem;

  &__img {
    width: 100%;

    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
