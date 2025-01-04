<script setup lang="ts">
import { stringToSlug } from "~/utils/slugify";
import { onMounted, ref } from "vue";
const story = await useAsyncStoryblok("destinations", { version: "published" });
const route = useRoute();
const citySlug = route.params.city;
const stateSlug = route.params.state;

const state = story.value.content.statesList.find(
  (s) => `${stringToSlug(s.country)}-${stringToSlug(s.name)}` === stateSlug
);

const city = state.destinationsList.find(
  (d) => stringToSlug(d.city) === citySlug
);

import mapboxgl from "mapbox-gl";
const config = useRuntimeConfig();
const mapRef = ref();
mapboxgl.accessToken = config.public.MAP_BOX_API_KEY;

onMounted(() => {
  const map = new mapboxgl.Map({
    container: mapRef.value,
    style: "mapbox://styles/flysofar/cluvditjb006w01r5enddch7y",
    center: [-90.55174117682346, 35.15790888688196],
    zoom: 3.5,
    scrollZoom: false,
    doubleClickZoom: false,
    touchZoomRotate: false,
    projection: "mercator",
  });

  if (window.innerWidth < 768) {
    map.setCenter([-96.55174117682346, 35.15790888688196]);
    map.setZoom(2.2);
  }

  city.airports.forEach((airport) => {
    if (map) {
      new mapboxgl.Marker({ color: "#06067c", anchor: "center" })
        .setLngLat([airport.longitude, airport.latitude])
        .addTo(map);
      map.flyTo({
        center: [airport.longitude, airport.latitude],
        essential: true,
        zoom: 10.5,
      });
    }
  });
});

useHead({
  title: `Private Jet Destinations: ${city.city}, ${state.name} | Sofar`,
  meta: [
    {
      name: "description",
      content: city.description,
    },
  ],
});
</script>
<template>
  <picture class="city-banner">
    <source media="(min-width: 1100px)" :srcset="city.bannerImage.filename" />
    <div class="city-banner__headlines">
      <h1 class="city-banner__headlines__title titles">
        Fly to {{ city.city }}
      </h1>
      <h2 class="city-banner__headlines__subtitle subtitles">
        Choose your destination
      </h2>
    </div>

    <img
      class="city-banner__img"
      :src="city.previewImage.filename"
      :alt="city.previewImage.alt"
    />
  </picture>
  <section class="city-description">
    <div class="city-description__txt">
      <h2 class="titles">{{ city.city }}</h2>
      <p class="paragraphs">{{ city.description }}</p>

      <QuotePopUpButton
        :label="`Fly to ${city.city}`"
        :style="`light`"
        :primary="true"
      />
    </div>
    <img
      class="city-description__img"
      :src="city.descriptionImage.filename"
      :alt="city.descriptionImage.alt"
    />
  </section>

  <Container>
    <h2 class="titles">Discover iconic attractions</h2>
    <div
      v-for="attraction in city.attractions"
      class="destination"
      :key="attraction.name"
    >
      <img
        class="destination__img"
        :src="attraction.image.filename"
        :alt="attraction.image.alt"
      />
      <div class="destination__headlines">
        <h1 class="subtitles">
          {{ attraction.name }}
        </h1>
        <p class="paragraphs">
          {{ attraction.details }}
        </p>
        <QuotePopUpButton :label="`Fly to ${city.city}`" />
      </div>
    </div>
  </Container>

  <section class="city-airports">
    <div ref="mapRef" class="map-container"></div>
    <div class="city-airports__headlines">
      <h2 class="titles">Airports in {{ city.city }}</h2>
      <h3 class="subtitles">Find all airports in this area</h3>
    </div>
  </section>
  <section class="points-of-interest" v-if="city.pointsOfInterest.length > 0">
    <NuxtLink
      v-for="element in city.pointsOfInterest"
      :key="element.name"
      class="points-of-interest__point-of-interest"
      :to="element.link"
      :style="{ backgroundImage: `url(${element.picture.filename})` }"
    >
      <div class="points-of-interest__point-of-interest__headlines">
        <h3 class="subtitles">
          {{ element.name }}
        </h3>
        <p class="paragraphs">
          {{ element.details }}
        </p>
        <NuxtLink
          class="button-primary--light"
          :to="element.link"
          target="_blank"
        >
          Know more
        </NuxtLink>
      </div>
    </NuxtLink>
  </section>
  <DestinationsHowToBook :city="city.city" />
</template>
<style scoped lang="scss">
.city-banner {
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
    opacity: 0;
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

.city-description {
  display: flex;
  flex-direction: column;
  background-color: $text-color;
  width: 100%;

  @media (min-width: $big-tablet-screen) {
    flex-direction: row;
    height: 100svh;
    max-height: 1500px;
  }

  &__txt {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: $text-color-alt;
    padding: 2rem 1rem;
    justify-content: center;
    @media (min-width: $big-tablet-screen) {
      padding: 4rem 2rem;
      width: 50%;
      min-width: 50%;
      max-width: 50%;
    }

    & .paragraphs {
      margin-bottom: 1rem;
      text-wrap: balance;
    }
  }

  &__img {
    width: 100%;
    height: auto;
    object-fit: cover;
    object-position: center;

    @media (min-width: $big-tablet-screen) {
      width: 50%;
      min-width: 50%;
      max-width: 50%;
    }
  }
}

.destination {
  display: flex;
  gap: 1rem;
  flex-direction: column;
  width: 100%;

  @media (min-width: $big-tablet-screen) {
    gap: 2rem;
    flex-direction: row;
  }

  &__img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    max-width: 500px;
    @media (min-width: $big-tablet-screen) {
      min-width: 500px;
    }
  }

  &__headlines {
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
  }
}

.points-of-interest {
  display: flex;
  gap: 1rem;
  padding: 2rem 1rem;
  background-color: $text-color;
  overflow-x: scroll;
  height: 60svh;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: $big-tablet-screen) {
    gap: 2rem;
    padding: 4rem 2rem;
    height: 70svh;
  }

  &__point-of-interest {
    border-radius: $radius;
    overflow: hidden;
    display: flex;
    gap: 1rem;
    flex-direction: column;
    justify-content: end;
    width: 100%;
    min-width: 300px;
    background-color: $primary-color;
    background-size: cover;
    background-position: top;
    position: relative;
    height: 100%;

    @media (min-width: $big-tablet-screen) {
      gap: 2rem;
    }

    &::after {
      content: "";
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(90deg, $text-color, transparent 60%);
      opacity: 0;
    }

    &__headlines {
      z-index: 1;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 1rem;
      justify-content: space-between;
      color: $text-color-alt;
      height: 50%;
      max-height: 50%;
      min-height: 50%;

      @media (min-width: $big-tablet-screen) {
        height: 60%;
        max-height: 60%;
        min-height: 60%;
        padding: 2rem;
      }

      & .titles {
        text-shadow: $shadow-text;
      }
      & .paragraphs {
        height: 100%;
        text-shadow: $shadow-text;
      }

      & .button-primary--light {
        color: $text-color;
        border: 1px solid $text-color-alt;
        background-color: $primary-color;
      }
    }
  }
}

.city-airports {
  position: relative;
  height: 100svh;
  max-height: 800px;

  &__headlines {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: $text-color;
    position: absolute;
    padding: 2rem 1rem;

    @media (min-width: $big-tablet-screen) {
      padding: 4rem 2rem;
    }
  }
}
.map-container {
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
}
</style>
