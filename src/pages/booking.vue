<script setup>
import { onMounted, ref } from "vue";
import mapboxgl from "mapbox-gl";
const config = useRuntimeConfig();
const mapRef = ref();
const originAirport = ref(null);
const destinationAirport = ref(null);
const map = ref(null);
const midpoint = ref([-60.55174117682346, 40.15790888688196]);

mapboxgl.accessToken = config.public.MAP_BOX_API_KEY;

const originLat = computed(() =>
  originAirport.value ? Number(originAirport.value.latitude_deg) : 0
);
const originLon = computed(() =>
  originAirport.value ? Number(originAirport.value.longitude_deg) : 0
);
const destinationLat = computed(() =>
  destinationAirport.value ? Number(destinationAirport.value.latitude_deg) : 0
);
const destinationLon = computed(() =>
  destinationAirport.value ? Number(destinationAirport.value.longitude_deg) : 0
);

function calculateMidpoint(lat1, lon1, lat2, lon2) {
  const midpointLat = (lat1 + lat2) / 2;
  const midpointLon = (lon1 + lon2) / 2;
  midpoint.value = [midpointLon, midpointLat];

  if (map.value) {
    map.value.flyTo({
      center: midpoint.value,
      essential: true, // this animation is considered essential with respect to prefers-reduced-motion
      zoom: 2, // Optional: adjust zoom level as needed
    });
  }
}

function getEmittedOriginAirport(airport) {
  originAirport.value = airport;
  calculateMidpoint(
    originLat.value,
    originLon.value,
    destinationLat.value,
    destinationLon.value
  );
  placeMarker(originAirport.value, destinationAirport.value);
}
function getEmittedDestinationAirport(airport) {
  destinationAirport.value = airport;
  calculateMidpoint(
    originLat.value,
    originLon.value,
    destinationLat.value,
    destinationLon.value
  );
  placeMarker(originAirport.value, destinationAirport.value);
}

function createMap() {
  if (!mapRef.value) {
    console.error("Map container element is not yet available.");
    return;
  }
  map.value = new mapboxgl.Map({
    container: mapRef.value,
    style: "mapbox://styles/flysofar/cluvditjb006w01r5enddch7y",
    center: midpoint.value,
    zoom: 1,
    scrollZoom: false,
    doubleClickZoom: false,
    touchZoomRotate: false,
    projection: "mercator",
  });
}

function placeMarker() {
  new mapboxgl.Marker({ color: "06067c", anchor: "center" })
    .setLngLat([originLon.value, originLat.value])
    .addTo(map.value);

  new mapboxgl.Marker({ color: "06067c", anchor: "center" })
    .setLngLat([destinationLon.value, destinationLat.value])
    .addTo(map.value);
}

onMounted(() => {
  createMap();
});
</script>
<template>
  <section class="booking">
    <div class="booking__map" ref="mapRef"></div>
    <h1 class="titles">Book your next adventure with us</h1>
    <h2 class="subtitles">
      Choose your destination, select your dates and let us take care of the
      rest
    </h2>

    <QuoteForm
      class="booking__form"
      @origin-airport="getEmittedOriginAirport"
      @destination-airport="getEmittedDestinationAirport"
    />
  </section>
</template>
<style lang="scss" scoped>
.booking {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem 1rem;
  position: relative;

  @media (min-width: $big-tablet-screen) {
    gap: 2rem;
    padding: 4rem 2rem;
  }

  & h2 {
    @media (min-width: $big-tablet-screen) {
      margin-top: -1rem;
    }
  }

  & h1,
  & h2 {
    z-index: 1;
  }

  &__map {
    height: 100svh;
    width: 100%;
    user-select: none;
    outline: none;
    border: none;
    position: absolute;
    inset: 0;
  }
  &__form {
    height: fit-content;
    z-index: 1;
    box-shadow: $shadow;
    margin-top: 1rem;
  }
}
</style>
