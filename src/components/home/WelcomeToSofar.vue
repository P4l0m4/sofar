<template>
  <div class="welcome-to-sofar">
    <h2 class="welcome-to-sofar__title titles">Welcome to Sofar</h2>
    <p class="welcome-to-sofar__text subtitles">
      Sofar is a specialized private jet charter offering tailor-made travel
      experiences from Westchester or Miami.
    </p>
    <p class="welcome-to-sofar__text paragraphs">
      Founded in 2019, this small scale company distinguishes itself through its
      customer proximity, responsiveness, and commitment to personalized
      service.
    </p>
    <p class="welcome-to-sofar__text paragraphs">
      With a fleet of state-of-the-art jets, Sofar is dedicated to providing
      comfortable travel, with a focus on meeting the individual needs of each
      passenger. Whether for business or leisure travel, Sofar collaborates
      closely with its clients to customize every aspect of their journey. The
      company regards its clients as travel partners, prioritizing their
      comfort, safety, and satisfaction.Joining Sofar means discovering a new
      dimension of private jet travel and turning travel dreams into reality.
    </p>
    <div class="welcome-to-sofar__buttons">
      <NuxtLink class="button-primary" to="/about-us/our-story"
        >Learn more about Sofar</NuxtLink
      >
      <QuotePopUpButton />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.welcome-to-sofar {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem 1rem;
  width: 100%;
  height: 100svh;
  justify-content: center;
  background-color: $base-color;
  margin-top: -2rem;
  background-image: url("@/assets/images/mini-logo.svg");
  background-size: 200px;
  background-repeat: no-repeat;
  background-position: right 1rem top 1rem;

  @media (min-width: $big-tablet-screen) {
    padding: 4rem 2rem;
    gap: 2rem;
    margin-top: -4rem;
    background-position: right 2rem top 2rem;
  }

  &__title {
    color: $text-color;
  }

  &__text {
    color: $text-color;

    @media (min-width: $laptop-screen) {
      max-width: calc(100% - 160px);
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
      justify-content: flex-end;
      margin-top: 2rem;
    }
    @media (min-width: $laptop-screen) {
      max-width: calc(100% - 160px);
    }

    .button-primary {
      background-color: $secondary-color;
      color: $text-color-alt;

      @media (min-width: $big-tablet-screen) {
        width: fit-content;
      }
    }
  }
}
</style>
