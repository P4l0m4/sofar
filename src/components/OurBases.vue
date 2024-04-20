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

  // Marker for New York
  new mapboxgl.Marker({ color: "#06067c", anchor: "center" })
    .setLngLat([-74.006, 40.7128])
    .addTo(map);

  // Marker for Miami
  new mapboxgl.Marker({ color: "#06067c", anchor: "center" })
    .setLngLat([-80.1918, 25.7617])
    .addTo(map);

  // Marker for Los Angeles
  new mapboxgl.Marker({ color: "#06067c", anchor: "center" })
    .setLngLat([-118.243683, 34.052235])
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
  height: 100svh;
  max-height: 800px;

  &__headlines {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: $text-color;
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
