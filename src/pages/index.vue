<script setup></script>
<template>
  <SampleComponent />
  <picture class="index__banner">
    <source
      media="(min-width: 1100px)"
      srcset="@/assets/images/index-banner-desktop.webp"
    />

    <img
      class="index__banner__img"
      src="@/assets/images/index-banner-mobile.webp"
      alt="banner image"
    />
  </picture>
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
  justify-content: flex-end;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;
  position: relative;

  @media (min-width: $big-tablet-screen) {
    flex-direction: row;
    justify-content: space-between;
    padding: 2rem;
    gap: 2rem;
    max-width: 2500px;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      190deg,
      rgba(255, 255, 255, 0) 60%,
      $secondary-color
    );
  }

  & source {
    display: none;
  }

  &__img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
