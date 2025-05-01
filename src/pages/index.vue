<script setup lang="ts">
import { ref } from "vue";
import { stringToSlug } from "~/utils/slugify";
import { isDesktop } from "~/utils/functions";
import { colors } from "~/utils/colors";

const desktopScreen = ref(isDesktop());

window.addEventListener("resize", () => {
  desktopScreen.value = isDesktop();
});

interface Destination {
  city: string;
  stateName: string;
  country: string;
  geographicalCategories: string[];
  previewImage: {
    filename: string;
  };
}

interface State {
  name: string;
  destinationsList: Destination[];
  country: string;
}

const story = await useAsyncStoryblok("destinations", { version: "published" });
// const storyHome = await useAsyncStoryblok("home-page", {
//   version: "published",
// });

const destinations = computed(() => {
  return story.value.content.statesList.flatMap((state: State) => {
    return state.destinationsList.map((destination) => {
      return {
        ...destination,
        stateName: state.name,
        country: state.country,
      };
    });
  });
});

const destinationsCarouselElements = computed(() => {
  return destinations.value.map((destination: Destination) => {
    return {
      link: `/destinations/${stringToSlug(
        `${destination.country}-${destination.stateName}`
      )}/${stringToSlug(`${destination.city}`)}`,
      image: destination.previewImage.filename,
      label: `${destination.city}, ${destination.stateName}`,
      countryCode: destination.country,
    };
  });
});
const message = "%c 🌵TEKILAWEBFACTORY.COM🌵";
console.log(message, `color: #1EB2BC; font-weight: bold; font-size: 16px;`);

useHead({
  title:
    "Sofar | Private jet charter | On-demand private flights | Reliable Company",
  meta: [
    {
      name: "description",
      content:
        "Private jet travel with Sofar - Reliable air charter for business, family and individuals on the east and west coasts. Book now and travel with confidence.",
    },
  ],
});

useJsonld(() => ({
  "@context": "https://schema.org/",
  "@type": "WebSite",
  name: "Sofar | Private jet charter | On-demand private flights | Reliable Company",
  url: window.location.href,
}));

const breadcrumbs = [
  {
    name: "Home",
    url: window.location.origin,
  },
];

const videoRef = ref<HTMLVideoElement>();

onMounted(() => {
  if (videoRef.value) {
    const p = videoRef.value.play();
    if (p instanceof Promise) {
      p.catch((err) => {
        console.warn("Autoplay bloqué par le navigateur :", err);
      });
    }
  }
});

function onError(e: Event) {
  console.error("Erreur de chargement de la vidéo :", e);
}
</script>
<template>
  <picture class="index__banner">
    <!-- <source
      media="(min-width: 1100px)"
      :srcset="storyHome.content.bannerImageDesktop.filename"
    /> -->
    <source
      media="(min-width: 1100px)"
      srcset="@/assets/images/home/preview-desktop.webp"
    />
    <div class="index__banner__headlines">
      <NuxtLink
        class="button-primary--dark rounded-button"
        to="/booking"
        v-if="desktopScreen"
        style="z-index: 1"
        >Booking</NuxtLink
      >

      <NuxtLink class="index__banner__headlines__logo" to="/">
        <img src="@/assets/images/logo-light.svg"
      /></NuxtLink>

      <EmergencyBubble v-if="desktopScreen" style="z-index: 1" />
    </div>

    <!-- <div class="index__banner__titles">
      <h1 class="titles">On-demand Private Jet Charter</h1>
      <h2 class="subtitles">
        Fast booking, flexible routes, and personalized service―ready when you
        are
      </h2>
    </div> -->
    <video
      ref="videoRef"
      class="auto-video"
      src="@/assets/videos/homepage-desktop.mp4"
      autoplay
      muted
      loop
      playsinline
      preload="auto"
      @error="onError"
      v-if="desktopScreen"
    />
    <video
      ref="videoRef"
      class="auto-video"
      src="@/assets/videos/homepage-mobile.mp4"
      autoplay
      muted
      loop
      playsinline
      preload="auto"
      @error="onError"
      v-else
    />

    <QuoteFormDesktop
      parent="home"
      v-if="desktopScreen"
      :color="colors['secondary-color']"
    />

    <img
      class="index__banner__img"
      src="@/assets/images/home/preview.jpg"
      alt="banner image"
    />
  </picture>
  <PrivateJetCharter />
  <OurBases />

  <div class="fleet-image"></div>
  <OurFleet />
  <section class="photo-grid">
    <img
      src="@/assets/images/home/private-jet-charter-sofar6865.webp"
      alt="sofar jet charter"
    />
    <img
      src="@/assets/images/phenom-100/phenom-100-embraer-sofar (4).webp"
      alt="sofar jet charter"
    />
    <img
      src="@/assets/images/home/private-jet-charter-sofar6487.webp"
      alt="sofar jet charter"
    />
    <img
      src="@/assets/images/home/private-jet-charter-sofar0474.webp"
      alt="sofar jet charter"
    />
    <img
      src="@/assets/images/home/private-jet-charter-sofar8167.webp"
      alt="sofar jet charter"
    />
    <img
      src="@/assets/images/home/private-jet-charter-sofar6190.webp"
      alt="sofar jet charter"
    />
  </section>
  <HomeWhyFlyWithSofar />
  <EmptysForm />
  <ServicesOurServices />
  <ClientReviews />
  <h2 class="section-title titles">Top Destinations</h2>
  <h3 class="section-subtitle subtitles">
    Choose from our most popular destinations
  </h3>
  <CarouselComponent :carouselElements="destinationsCarouselElements" />
  <JsonldBreadcrumb :links="breadcrumbs" />
</template>
<style lang="scss">
.index__banner {
  display: flex;
  background-size: cover;
  background-position: center;
  min-height: 100svh;
  max-height: 800px;
  width: 100%;
  padding: 1rem;
  padding-bottom: 3rem;
  flex-direction: column;
  justify-content: end;
  gap: 1rem;
  position: relative;

  @media (min-width: $big-tablet-screen) {
    height: 100vh;
    max-height: 100vh;
    min-height: 100vh;
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
    background-image: linear-gradient(45deg, $primary-color, transparent 100%);
    z-index: -1;
    opacity: 0.2;
  }

  & source {
    display: none;
  }

  &__titles {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: $text-color-alt;
    position: absolute;
    top: 40%;
    padding: 0 1rem;

    @media (min-width: $big-tablet-screen) {
      padding: 0 2rem;
    }
  }

  &__headlines {
    display: flex;
    gap: 1rem;
    color: $text-color-alt;
    position: absolute;
    inset: 1rem;
    bottom: inherit;
    margin: auto;
    align-items: center;

    @media (min-width: $big-tablet-screen) {
      inset: 2rem;
      bottom: inherit;
      gap: 2rem;
      padding-right: 12rem;
    }

    &__logo {
      width: fit-content;
      height: fit-content;
      margin: auto;
      z-index: 1;

      // @media (min-width: $big-tablet-screen) {
      //   padding-left: 4rem;
      //   border: red solid 2px;
      // }

      & img {
        width: 60px;
        height: 60px;

        @media (min-width: $big-tablet-screen) {
          width: 150px;
          height: 70px;
        }
      }
    }
    &__subtitle {
      color: $text-color-alt;
      line-height: 1.6rem;
      width: fit-content;
      height: fit-content;
      opacity: 0.8;
      font-family: "Custom";
      font-weight: 100;
      white-space: nowrap;

      @media (min-width: $big-tablet-screen) {
        gap: 2rem;
        display: flex;
        line-height: 1.4rem;
        justify-content: center;
        width: 100%;
      }
    }
  }
  &__title {
    // white-space: nowrap;
    display: flex;
    line-height: 2.5rem;
    color: $text-color-alt;
    height: fit-content;
    width: fit-content;

    @media (min-width: $big-tablet-screen) {
      line-height: 2rem;
    }
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

.section-subtitle {
  padding: 1rem;
  padding-bottom: 0;
  @media (min-width: $big-tablet-screen) {
    padding: 1rem 2rem;
    padding-bottom: 0;
  }
}

.fleet-image {
  background-size: cover;
  background-position: center;
  min-height: 50svh;
  max-height: 600px;
  width: 100%;
  min-width: 100%;
  background-image: url("@/assets/images/home/sofar-fleet-mobile.webp");

  @media (min-width: $big-tablet-screen) {
    background-image: url("@/assets/images/home/sofar-fleet-desktop.webp");
    width: 100vw !important;
    max-height: 800px;
    min-height: 70svh;
  }
}

.photo-grid {
  display: grid;
  gap: 1rem;
  width: 100%;
  height: fit-content;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-rows: 200px;
  background-color: $secondary-color;
  padding: 2rem 1rem;

  @media (min-width: $big-tablet-screen) {
    grid-template-columns: repeat(5, 1fr);
    padding: 4rem 2rem;
    grid-auto-rows: 80px;
  }

  & img {
    width: 100%;
    object-fit: cover;
    object-position: center;
    height: 100%;
    // border-radius: $radius;

    @media (min-width: $big-tablet-screen) {
      &:nth-child(1) {
        grid-column: span 1;
        grid-row: span 2;
      }

      &:nth-child(2) {
        grid-column: span 3;
        grid-row: span 7;
      }

      &:nth-child(3) {
        grid-column: span 1;
        grid-row: span 2;
      }
      &:nth-child(4) {
        grid-column: span 1;
        grid-row: span 5;
      }
      &:nth-child(5) {
        grid-column: span 1;
        grid-row: span 3;
      }
      &:nth-child(6) {
        grid-column: span 1;
        grid-row: span 2;
      }
    }
  }
}
</style>
