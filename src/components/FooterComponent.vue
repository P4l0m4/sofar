<script setup lang="ts">
import type AnyQuestion from "./AnyQuestion.vue";

type MenuItem = {
  label: string;
  link: string;
  children: Child[];
};

type Child = {
  label: string;
  link: string;
};

interface Props {
  menuItems: MenuItem[];
}

defineProps<Props>();
</script>
<template>
  <footer class="footer">
    <section class="footer__content">
      <div class="footer__content__links" v-for="item in menuItems">
        <NuxtLink
          class="footer__content__links__title subtitles"
          :to="item.link"
        >
          {{ item.label }}
        </NuxtLink>
        <NuxtLink
          v-for="child in item.children"
          class="footer__content__links__elements"
          :to="child.link"
        >
          {{ child.label }}
        </NuxtLink>
      </div>

      <div class="footer__content__info">
        <span class="subtitles">Get in touch</span>
        <a class="button-tertiary" href="tel:+19144686800">+1 914-468-6800</a>
        <span>KHPN | KTEB | KOPF</span>
        <span>HQ@flysofar.com</span>
        <span>10 New King St West Harrison, NY 10604</span>
      </div>
    </section>
    <div class="footer__content">
      <div class="footer__content__logo-container">
        <img
          class="footer__content__logo-container__logo"
          src="@/assets/images/logo-light-without-icon.svg"
          alt="sofar logo"
        />
        <div class="footer__content__logo-container__socials">
          <a
            class="footer__socials__link"
            href="https://www.facebook.com/profile.php?id=100092022864510"
            aria-label="facebook"
          >
            <img src="/assets/icons/facebook.svg" alt="social media icon" />
          </a>
          <a
            class="footer__socials__link"
            href="https://www.instagram.com/fly.sofar"
            aria-label="instagram"
          >
            <img src="/assets/icons/instagram.svg" alt="social media icon" />
          </a>
          <a
            class="footer__socials__link"
            href="https://www.linkedin.com/company/melmanaviation/?viewAsMember=true"
            aria-label="linkedin"
          >
            <img src="/assets/icons/linkedin.svg" alt="social media icon" />
          </a>
          <a
            class="footer__socials__link"
            href="https://www.pinterest.fr/Sofaraviation/"
            aria-label="pinterest"
          >
            <img src="/assets/icons/pinterest1.svg" alt="social media icon" />
          </a>
          <a
            class="footer__socials__link"
            href="https://www.tiktok.com/@fly.sofar?is_from_webapp=1&sender_device=pc"
            aria-label="tiktok"
          >
            <img src="/assets/icons/tiktok.svg" alt="social media icon" />
          </a>
        </div>
      </div>
      <AnyQuestion />
    </div>
  </footer>
</template>
<style lang="scss" scoped>
.footer {
  display: flex;
  justify-content: center;
  padding: 2rem 1rem;
  padding-bottom: 4rem;
  background-color: $text-color;
  gap: 2rem;
  flex-direction: column;

  @media (min-width: $big-tablet-screen) {
    padding: 4rem 2rem;
  }

  &__content {
    display: flex;
    gap: 2rem;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    @media (min-width: $big-tablet-screen) {
      justify-content: center;
      flex-direction: row;
    }

    &__links {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      &:nth-child(1) {
        height: fit-content;
        border: 2px solid $primary-color;
        padding: 0.25rem 1rem;
        border-radius: $radius;
      }

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
    &__logo-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;

      &__logo {
        width: 140px;
      }
      &__socials {
        display: flex;
        gap: 1rem;
        justify-content: center;
        width: fit-content;

        &__link {
          width: 1.5rem;
          height: 1.5rem;
          z-index: 1;
        }
      }
    }
  }
}
</style>
