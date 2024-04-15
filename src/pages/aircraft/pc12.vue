<template>
  <picture class="plane">
    <source media="(min-width: 1100px)" srcset="@/assets/images/pc12.webp" />

    <h2 class="plane__title titles">PILATUS PC 12</h2>
    <div class="plane__stats">
      <div class="plane__stats__stat">
        <p class="plane__stats__stat paragraphs">Cruise speed</p>
        <p class="plane__stats__stat subtitles">290 knots</p>
      </div>
      <div class="plane__stats__stat">
        <p class="plane__stats__stat paragraphs">Range</p>
        <p class="plane__stats__stat subtitles">1,803 Nm</p>
      </div>
      <div class="plane__stats__stat">
        <p class="plane__stats__stat paragraphs">Payload</p>
        <p class="plane__stats__stat subtitles">1000 kg</p>
      </div>
      <div class="plane__stats__stat">
        <p class="plane__stats__stat__name paragraphs">Seating</p>
        <p class="plane__stats__stat__figure subtitles">
          6
          <span class="plane__stats__stat__figure__small-text">+ 2 pilots</span>
        </p>
      </div>
    </div>

    <!-- <div class="plane__buttons">
      <NuxtLink class="button-primary" to="/aircraft"
        >Learn more about our birds</NuxtLink
      >
      <QuotePopUpButton color="#fffdfa" />
    </div> -->

    <img class="plane__img" src="@/assets/images/pc12.webp" alt="banner image"
  /></picture>
</template>
<style lang="scss" scoped>
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

  &__buttons {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    margin-top: 1rem;

    @media (min-width: $big-tablet-screen) {
      flex-direction: row;
      margin-top: 2rem;
    }

    .button-primary {
      background-color: $primary-color;
      color: $text-color;

      @media (min-width: $big-tablet-screen) {
        width: fit-content;
      }
    }
  }
}
</style>