<script setup>
import { onMounted, ref } from "vue";
import mapboxgl from "mapbox-gl";
const config = useRuntimeConfig();
const mapRef = ref();
mapboxgl.accessToken = config.public.MAP_BOX_API_KEY;

onMounted(() => {
  const map = new mapboxgl.Map({
    container: mapRef.value,
    style: "mapbox://styles/flysofar/cluo5ywcv003z01qz3ek81gzn",
    center: [-80.55174117682346, 35.15790888688196],
    zoom: 3.8,
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
  <section class="our-bases">
    <div ref="mapRef" class="map-container"></div>
    <div class="our-bases__headlines">
      <h2 class="titles">Our Bases</h2>
      <h3 class="subtitles">Strategically positioned for the east coast.</h3>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.our-bases {
  position: relative;
  margin-top: -2rem;
  height: 90svh;

  @media (min-width: $big-tablet-screen) {
    margin-top: -4rem;
  }

  &__headlines {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: $text-color-alt;
    position: absolute;
    z-index: 1;
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
