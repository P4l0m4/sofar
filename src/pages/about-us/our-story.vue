<script setup>
useHead({
  title: "Our Story | Sofar",
  meta: [
    {
      name: "description",
      content:
        "Learn about the history and mission of Sofar. Discover how we became a leading provider of private jet charter services, focused on safety, reliability, and customer satisfaction.",
    },
  ],
});
</script>
<template>
  <picture class="our-story-banner">
    <source
      media="(min-width: 1100px)"
      srcset="@/assets/images/our-story/our-story-desktop-banner.webp"
    />
    <div class="our-story-banner__headlines">
      <h1 class="our-story-banner__headlines__title titles">Our story</h1>
      <h2 class="our-story-banner__headlines__subtitle subtitles">
        Learn more about our journey and our team
      </h2>
    </div>
    <img
      class="our-story-banner__img"
      src="@/assets/images/our-story/our-story-desktop-banner.webp"
      alt="our story banner image"
    />
  </picture>
  <HomeWelcomeToSofar />
  <AboutTimeline />
  <section>
    <h2 class="section-title titles">Our Fleet</h2>
    <p class="description paragraphs">
      With our diverse range of aircraft, including the incredibly versatile
      Pilatus PC-12 turbo-prop, the nimble and efficent Embraer Phenom 100, and
      long- range light jet, Embraer Phenom 300, Sofar offers flexibility and
      comfort for every journey. Whether you're traveling solo, with a small
      group, or a large entourage, our meticulous fleet selection ensures that
      we have the perfect aircraft to suit your needs. Depart at your preferred
      time, fly directly to your destination, and experience the convenience of
      private air travel without the constraints of rigid schedules or crowded
      airports.
    </p>
    <CarouselComponent />
  </section>

  <Container
    ><h2 class="titles">Our Team</h2>
    <div class="team">
      <div class="team__card">
        <img
          class="team__card__img"
          src="@/assets/images/our-story/p-lafond.webp"
          alt="circular image"
        />
        <div class="team__card__txt">
          <h3 class="team__card__name subtitles">P. Lafond</h3>
          <span class="team__card__role paragraphs">CEO founder</span>
        </div>
      </div>
      <div class="team__card">
        <img
          class="team__card__img"
          src="@/assets/images/our-story/h-rodriguez.webp"
          alt="circular image"
        />
        <div class="team__card__txt">
          <h3 class="team__card__name subtitles">H. Rodriguez</h3>
          <span class="team__card__role paragraphs">Head of operations</span>
        </div>
      </div>
      <div class="team__card">
        <img
          class="team__card__img"
          src="@/assets/images/our-story/j-sullenberg.webp"
          alt="circular image"
          style="filter: blur(8px)"
        />
        <div class="team__card__txt">
          <h3 class="team__card__name subtitles">D. Kwasniak</h3>
          <span class="team__card__role paragraphs">Chief of maintenance</span>
        </div>
      </div>
      <div class="team__card">
        <img
          class="team__card__img"
          src="@/assets/images/our-story/m-lafond.webp"
          alt="circular image"
        />
        <div class="team__card__txt">
          <h3 class="team__card__name subtitles">M. Lafond</h3>
          <span class="team__card__role paragraphs">Chief marketing</span>
        </div>
      </div>
      <div class="team__card">
        <img
          class="team__card__img"
          src="@/assets/images/our-story/c-king.webp"
          alt="circular image"
        />
        <div class="team__card__txt">
          <h3 class="team__card__name subtitles">C. King</h3>
          <span class="team__card__role paragraphs">Chief pilot</span>
        </div>
      </div>
      <div class="team__card">
        <img
          class="team__card__img"
          src="@/assets/images/our-story/t-reyes.webp"
          alt="circular image"
        />
        <div class="team__card__txt">
          <h3 class="team__card__name subtitles">T. Reyes</h3>
          <span class="team__card__role paragraphs">Assistant chief pilot</span>
        </div>
      </div>
    </div>
  </Container>
</template>
<style scoped lang="scss">
.our-story-banner {
  display: flex;
  background-size: cover;
  background-position: center;
  min-height: 100svh;
  max-height: 800px;
  width: 100%;
  padding: 1rem;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  position: relative;

  @media (min-width: $big-tablet-screen) {
    padding: 2rem;
    gap: 2rem;
  }
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

  & source {
    display: none;
  }

  &__headlines {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    z-index: 1;
    color: $text-color-alt;

    @media (min-width: $big-tablet-screen) {
      gap: 2rem;
    }

    &__title {
      display: flex;
      line-height: 4.5rem;
      color: $text-color-alt;
      height: fit-content;
      width: fit-content;
      font-size: 4rem;

      @media (min-width: $big-tablet-screen) {
        line-height: 6rem;
        font-size: 6rem;
      }
    }
  }
  &__subtitle {
    color: $text-color-alt;
    line-height: 1.6rem;
    position: absolute;
    inset: 2rem;
    bottom: inherit;
    margin: auto;
    width: fit-content;
    height: fit-content;
    opacity: 0.8;
    font-family: "Custom";
    font-weight: 100;
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
}

.description {
  padding: 1rem 1rem 0 1rem;

  @media (min-width: $big-tablet-screen) {
    padding: 1rem 2rem 0 2rem;
    max-width: calc(100% - 12rem);
  }
}

.team {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;

  @media (min-width: $big-tablet-screen) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  &__card {
    display: flex;
    align-items: center;
    background-color: $primary-color;
    border-radius: $radius;
    overflow: hidden;
    height: fit-content;
    width: 100%;
    gap: 1rem;

    &__img {
      width: 150px;
      height: 150px;
    }

    &__txt {
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
