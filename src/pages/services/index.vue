<script setup>
import { colors } from "@/utils/colors";
import { isDesktop } from "~/utils/functions";
import { useMenuItemsStore } from "@/stores/menuItems";
const menuItemsStore = useMenuItemsStore();
const story = await useAsyncStoryblok("services", {
  version: "published",
});

const desktopScreen = ref(isDesktop());

window.addEventListener("resize", () => {
  desktopScreen.value = isDesktop();
});

useHead({
  title: "Private Jet Charter Services | Sofar",
  meta: [
    {
      name: "description",
      content:
        "Explore Sofar's private jet charter services for business, family, and personal travel. Experience reliable, flexible, and efficient private air travel tailored to your needs.",
    },
  ],
});

useJsonld(() => ({
  "@context": "https://schema.org/",
  "@type": "WebSite",
  name: "Private Jet Charter Services | Sofar",
  url: window.location.href,
}));

const breadcrumbs = [
  {
    name: "Home",
    url: window.location.origin,
  },
  {
    name: "Services",
    url: window.location.href,
  },
];
</script>
<template>
  <picture class="services-banner">
    <source
      media="(min-width: 1100px)"
      :srcset="story.content.bannerImageDesktop.filename"
    />
    <div class="services-banner__headlines-mobile">
      <h1 class="services-banner__headlines__title titles">
        {{ story.content.bannerTitle }}
      </h1>
      <h2 class="services-banner__headlines__title subtitles">
        {{ story.content.bannerSubtitle }}
      </h2>
    </div>
    <div class="services-banner__headlines">
      <NuxtLink
        class="button-primary--dark rounded-button"
        to="/booking"
        v-if="desktopScreen"
        >Booking</NuxtLink
      >
      <NuxtLink class="services-banner__headlines__logo" to="/">
        <img src="@/assets/images/logo-light.svg"
      /></NuxtLink>

      <EmergencyBubble v-if="desktopScreen" />
    </div>

    <QuoteFormDesktop
      parent="services"
      v-if="desktopScreen"
      :color="colors['secondary-color']"
    />
    <img
      class="services-banner__img"
      :src="story.content.bannerImageMobile.filename"
      alt="banner image"
    />
  </picture>
  <TextComponent
    :title="story.content.textSectionTitle"
    :text="story.content.textSectionParagraph"
  />
  <section class="services">
    <h1 class="titles">Services</h1>
    <div class="services__list">
      <NuxtLink
        class="services__list__link scale-on-hover"
        :to="item.link"
        v-for="item in menuItemsStore.menuItems[1].children"
        :key="item.label"
        ><IconComponent color="#052545" size="2rem" :icon="item.icon" />{{
          item.label
        }}</NuxtLink
      >
    </div>
  </section>
  <ServicesContentBlok
    v-for="contentBlok in story.content?.ContentBloks"
    :key="contentBlok._uid"
    :title="contentBlok.title"
    :text="contentBlok.text"
    :image="contentBlok.image.filename"
    :alt="contentBlok.image.alt"
  />
  <ServicesWhyChooseUs />
  <section>
    <h2 class="section-title titles">Sofar Fleet</h2>
    <CarouselComponent />
  </section>
  <OurBases />
  <JsonldBreadcrumb :links="breadcrumbs" />
</template>
<style lang="scss" scoped>
@import "@/styles/planes.scss";

.services {
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
  gap: 1rem;

  @media (min-width: $big-tablet-screen) {
    padding: 4rem 2rem;
    gap: 2rem;
  }

  &__list {
    gap: 1rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

    @media (min-width: $big-tablet-screen) {
      max-width: calc(100vw - 18rem);
    }

    &__link {
      padding: 1rem 2rem;
      height: 140px;
      background-color: $primary-color;
      border-radius: $radius;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 1rem;
      white-space: nowrap;

      &:hover {
        box-shadow: $shadow;
      }
    }
  }
}
</style>
