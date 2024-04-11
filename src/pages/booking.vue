<script setup>
import { onMounted, ref } from "vue";
import mapboxgl from "mapbox-gl";
const config = useRuntimeConfig();
const mapRef = ref();
mapboxgl.accessToken = config.public.MAP_BOX_API_KEY;

onMounted(() => {
  const map = new mapboxgl.Map({
    container: mapRef.value,
    style: "mapbox://styles/flysofar/cluvditjb006w01r5enddch7y",
    center: [60.55174117682346, 35.15790888688196],
    zoom: 1,
    scrollZoom: false,
    doubleClickZoom: false,
    touchZoomRotate: false,
    projection: "mercator",
  });

  // Marker for New York with a custom color
  new mapboxgl.Marker({ color: "#06067c", anchor: "center" })
    .setLngLat([-74.006, 40.7128])
    .addTo(map);

  // Marker for Miami with a different custom color
  new mapboxgl.Marker({ color: "#06067c", anchor: "center" })
    .setLngLat([-80.1918, 25.7617])
    .addTo(map);
});
</script>
<template>
  <section class="booking">
    <h1 class="titles">Book your next adventure with us</h1>
    <h2 class="subtitles">
      Choose your destination, select your dates and let us take care of the
      rest
    </h2>
    <div class="booking__map" ref="mapRef">
      <QuoteForm class="booking__map__form" />
    </div>
  </section>
</template>
<style lang="scss" scoped>
.booking {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem 0;

  @media (min-width: $big-tablet-screen) {
    gap: 2rem;
    padding: 4rem 0;
  }

  & h1,
  h2 {
    padding: 0 1rem;

    @media (min-width: $big-tablet-screen) {
      padding: 0 2rem;
    }
  }

  &__map {
    position: relative;
    height: 100svh;
    width: 100%;
    user-select: none;
    outline: none;
    border: none;
    &__form {
      position: absolute;
      inset: 0;
      margin: auto;
      height: fit-content;
      z-index: 1;
    }
  }
}
</style>
