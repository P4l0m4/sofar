<script setup></script>
<template>
  <picture class="index__banner">
    <source
      media="(min-width: 1100px)"
      srcset="@/assets/images/index-banner-desktop.webp"
    />
    <div class="index__banner__headlines">
      <h1 class="index__banner__headlines__title titles">MAKE IT ANYWHERE</h1>
      <h2 class="index__banner__headlines__subtitle subtitles">
        Request a quote
      </h2>
    </div>
<QuoteForm />
    <img
      class="index__banner__img"
      src="@/assets/images/index-banner-mobile.webp"
      alt="banner image"
    /></picture
  >

</template>
<style lang="scss" scoped>
.index__banner {
  display: flex;
  background-size: cover;
  background-position: center;
  height: 100svh;
  max-height: 1200px;
  width: 100%;
  padding: 1rem;
  flex-direction: column;
justify-content: center;
  gap: 1rem;
  position: relative;

  @media (min-width: $big-tablet-screen) {
    padding: 2rem;
    gap: 2rem;
    max-width: 2500px;
  }

  & source {
    display: none;
  }

&__headlines{
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 1;
  color: $text-color-alt;
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
</style>
