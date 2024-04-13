<script setup lang="ts">
const props = defineProps({
  menuItems: Array,
});
</script>
<template>
  <footer class="footer">
    <img
      class="footer__logo"
      src="@/assets/images/logo-light.svg"
      alt="sofar logo"
    />
    <div class="footer__socials">
      <a
        class="footer__socials__link"
        href="https://www.facebook.com/profile.php?id=100092022864510"
        aria-label="facebook"
        ><img src="/assets/icons/facebook.svg" alt="social media icon"
      /></a>
      <a
        class="footer__socials__link"
        href="https://www.instagram.com/fly.sofar"
        aria-label="instagram"
        ><img src="/assets/icons/instagram.svg" alt="social media icon"
      /></a>
      <a
        class="footer__socials__link"
        href="https://www.linkedin.com/company/melmanaviation/?viewAsMember=true"
        aria-label="linkedin"
        ><img src="/assets/icons/linkedin.svg" alt="social media icon"
      /></a>
      <a
        class="footer__socials__link"
        href="https://www.pinterest.fr/Sofaraviation/"
        aria-label="pinterest"
        ><img src="/assets/icons/pinterest1.svg" alt="social media icon"
      /></a>
      <a
        class="footer__socials__link"
        href="https://www.tiktok.com/@fly.sofar?is_from_webapp=1&sender_device=pc"
        aria-label="tiktok"
        ><img src="/assets/icons/tiktok.svg" alt="social media icon"
      /></a>
    </div>
    <div class="footer__links" v-for="item in menuItems">
      <NuxtLink class="footer__links__title subtitles" :to="item.link">{{
        item.label
      }}</NuxtLink>
      <NuxtLink
        class="footer__links__elements"
        :to="link.link"
        v-for="link in item.children"
        >{{ link.label }}</NuxtLink
      >
    </div>

    <div class="footer__info">
      <span class="subtitles">Get in touch</span>
      <a class="button-tertiary" href="tel:+19144686800"> +1 914-468-6800</a
      ><span>KHPN | KTEB | KOPF</span>
      <span>HQ@flysofar.com</span>
      <span>10 New King St West Harrison, NY 10604</span>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
.footer {
  display: flex;
  justify-content: center;
  padding: 2rem 1rem;
  background-color: $text-color;
  gap: 2rem;
  flex-direction: column;

  @media (min-width: $big-tablet-screen) {
    flex-direction: row;
    padding: 4rem 2rem;
  }

  &__logo {
    width: 140px;

    @media (min-width: $big-tablet-screen) {
      width: 300px;
      margin-left: -5rem;
      transform: rotate(-90deg);
    }
  }

  &__links {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    &__title {
      color: $base-color;
    }

    &__elements {
      color: $base-color;
      font-size: $small-text;
      font-weight: $skinny;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    color: $text-color-alt;
    font-size: $small-text;
    gap: 1rem;

    & .button-tertiary {
      color: $text-color-alt;
    }
  }

  &__socials {
    display: flex;
    gap: 1rem;
    justify-content: center;
    width: fit-content;
    @media (min-width: $big-tablet-screen) {
      flex-direction: column;
      margin-left: -6rem;
    }

    &__link {
      width: 1.5rem;
      height: 1.5rem;
      z-index: 1;
    }
  }
}
</style>
