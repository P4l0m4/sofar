<script setup lang="ts">
const story = await useAsyncStoryblok("welcome-to-sofar", {
  version: "published",
});
</script>
<template>
  <div class="welcome-to-sofar">
    <h2 class="welcome-to-sofar__title titles">Welcome to Sofar</h2>
    <p class="welcome-to-sofar__text subtitles">
      Sofar is a private jet company offering customized, tailored and reliable
      travel.
    </p>
    <div class="two-columns">
      <div class="text-column">
        <p class="welcome-to-sofar__text paragraphs">
          Founded in 2019, Sofar has grown from humble beginnings to become a
          trusted name in private aviation. Operating from New York, Miami, and
          Los Angeles, we offer bespoke flights tailored to meet the unique
          needs of each client.
        </p>
        <p class="welcome-to-sofar__text paragraphs">
          Known for our unwavering commitment to excellence, customer focus, and
          responsiveness, Sofar redefines private jet travel by prioritizing
          comfort, safety, and satisfaction. Whether for business or leisure,
          every journey reflects our dedication to providing personalized and
          reliable experiences.
        </p>
        <div class="welcome-to-sofar__buttons">
          <NuxtLink class="button-primary--dark" to="/about-us/our-story"
            >Learn more about our story</NuxtLink
          >
          <QuotePopUpButton />
        </div>
      </div>

      <iframe
        v-if="story.content.link"
        class="video"
        :src="story.content.link"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <!-- <img class="welcome-to-sofar__img" src="@/assets/images/clouds.png" /> -->
  </div>
</template>
<style lang="scss" scoped>
.welcome-to-sofar {
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem 1rem;
  width: 100%;
  min-height: 100svh;
  justify-content: center;
  background-color: $base-color;
  position: relative;

  @media (min-width: $big-tablet-screen) {
    padding: 4rem 2rem;
    gap: 2rem;
    background-image: url("@/assets/images/mini-logo-light.svg");
    background-size: 200px;
    background-repeat: no-repeat;
    background-position: right 2rem top 2rem;
  }

  &__title {
    color: $text-color;
    z-index: 1;
  }

  &__text {
    color: $black-color;
    z-index: 1;

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
      // justify-content: flex-end;
      margin-top: 2rem;
    }
    @media (min-width: $laptop-screen) {
      max-width: calc(100% - 160px);
    }

    .button-primary--dark {
      @media (min-width: $big-tablet-screen) {
        width: fit-content;
      }
    }
  }

  // &__img {
  //   position: absolute;
  //   bottom: -12rem;
  //   left: 0;
  //   width: 100%;
  //   height: 440px;
  //   pointer-events: none;
  //   display: none;
  //   z-index: 1;

  //   @media (min-width: $big-tablet-screen) {
  //     display: block;
  //   }
  // }
}

.two-columns {
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: $big-tablet-screen) {
    flex-direction: row;
    gap: 2rem;
  }

  .text-column {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }

  .video {
    width: 100%;
    height: 300px;

    @media (min-width: $big-tablet-screen) {
      height: 400px;
      margin-top: 4rem;
    }
  }
}
</style>
