<!-- <script setup>
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
    map.setZoom(2.3);
  }

  // Marker for New York
  new mapboxgl.Marker({ color: "#052545", anchor: "center" })
    .setLngLat([-74.006, 40.7128])
    .addTo(map);

  // Marker for Miami
  new mapboxgl.Marker({ color: "#052545", anchor: "center" })
    .setLngLat([-80.1918, 25.7617])
    .addTo(map);

  // Marker for Los Angeles
  new mapboxgl.Marker({ color: "#052545", anchor: "center" })
    .setLngLat([-118.243683, 34.052235])
    .addTo(map);
});
</script> -->
<script setup>
import { onMounted, ref } from "vue";
import mapboxgl from "mapbox-gl";
const config = useRuntimeConfig();
mapboxgl.accessToken = config.public.MAP_BOX_API_KEY;

const mapRef = ref();

const highlightCities = [
  { name: "Los Angeles", coords: [-118.243683, 34.052235] },
  { name: "San Francisco", coords: [-122.4194, 37.7749] },
  { name: "Seattle", coords: [-122.3321, 47.6062] },
  { name: "Reno", coords: [-119.8138, 39.5296] },
  { name: "Salt Lake City", coords: [-111.891, 40.7608] },
  { name: "Tucson", coords: [-110.9747, 32.2226] },
  { name: "Denver", coords: [-104.9903, 39.7392] },
  { name: "Omaha", coords: [-95.9345, 41.2565] },
  { name: "Bismarck", coords: [-100.7837, 46.8083] },
  { name: "Minneapolis", coords: [-93.265, 44.9778] },
  { name: "Chicago", coords: [-87.6298, 41.8781] },
  { name: "Des Moines", coords: [-93.6091, 41.6005] },
  { name: "Jefferson City", coords: [-92.1735, 38.5767] },
  { name: "Little Rock", coords: [-92.2896, 34.7465] },
  { name: "Austin", coords: [-97.7431, 30.2672] },
  { name: "Santa Fe", coords: [-105.9378, 35.687] },
  { name: "Phoenix", coords: [-112.074, 33.4484] },
  { name: "New York", coords: [-74.006, 40.7128] },
  { name: "Miami", coords: [-80.1918, 25.7617] },
  { name: "Washington", coords: [-77.0369, 38.9072] },
  { name: "Charlotte", coords: [-80.8431, 35.2271] },
  { name: "Charleston", coords: [-79.9311, 32.7765] },
  { name: "Boston", coords: [-71.0589, 42.3601] },
  { name: "Augusta", coords: [-82.0105, 33.4735] },
  { name: "Buffalo", coords: [-78.8784, 42.8864] },
  { name: "Columbus", coords: [-82.9988, 39.9612] },
  { name: "Indianapolis", coords: [-86.1581, 39.7684] },
  { name: "Baton Rouge", coords: [-91.1403, 30.4507] },
  { name: "Bahamas", coords: [-77.3963, 25.0343] },
];

onMounted(() => {
  const map = new mapboxgl.Map({
    container: mapRef.value,
    style: "mapbox://styles/flysofar/cluvditjb006w01r5enddch7y",
    center: [-99.55174117682346, 35.15790888688196],
    zoom: 3.5,
    scrollZoom: false,
    doubleClickZoom: false,
    touchZoomRotate: false,
    projection: "mercator",
  });

  if (window.innerWidth < 768) {
    map.setCenter([-96.55174117682346, 40.15790888688196]);
    map.setZoom(2);
    map.on("load", () => {
      map.dragPan.disable();
      map.touchZoomRotate.disable();
      map.doubleClickZoom.disable();
    });
  }

  map.on("load", () => {
    map.addSource("highlight-cities", {
      type: "geojson",
      data: {
        type: "FeatureCollection",
        features: highlightCities.map((c) => ({
          type: "Feature",
          properties: { name: c.name },
          geometry: {
            type: "Point",
            coordinates: c.coords,
          },
        })),
      },
    });

    map.addLayer({
      id: "highlight-city-labels",
      type: "symbol",
      source: "highlight-cities",
      layout: {
        "text-field": ["get", "name"],
        "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
        "text-size": 14,
        "text-offset": [0, 0.5],
        "text-anchor": "top",
        // ──────────────── collision overrides ────────────────
        // "text-allow-overlap": true,
        // "text-ignore-placement": true,
        // "symbol-sort-key": 1,
      },
      paint: {
        "text-color": "#232323",
        "text-halo-color": "#fffdfa",
        "text-halo-width": 2,
      },
      minzoom: 0,
    });
  });

  // Marker for New York
  new mapboxgl.Marker({ color: "#052545", anchor: "center" })
    .setLngLat([-74.006, 40.7128])
    .addTo(map);

  // Marker for Miami
  new mapboxgl.Marker({ color: "#052545", anchor: "center" })
    .setLngLat([-80.1918, 25.7617])
    .addTo(map);

  // Marker for Los Angeles
  new mapboxgl.Marker({ color: "#052545", anchor: "center" })
    .setLngLat([-118.243683, 34.052235])
    .addTo(map);
});
</script>
<template>
  <section class="our-bases">
    <div ref="mapRef" class="map-container"></div>
    <div class="our-bases__headlines">
      <h2 class="titles">Our Bases</h2>
      <h3 class="subtitles">Strategically positioned in the United States.</h3>
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
  overscroll-behavior: contain;
}
</style>
