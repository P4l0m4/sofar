<script setup>
import { onMounted, ref } from "vue";
import mapboxgl from "mapbox-gl";
import {
  interpolateGreatCircle,
  haversineDistance,
  convertKmToMiles,
  calculateFlightDuration,
} from "~/utils/mapGL.js";

const config = useRuntimeConfig();
mapboxgl.accessToken = config.public.MAP_BOX_API_KEY;
const mapRef = ref();
const originAirport = ref(null);
const destinationAirport = ref(null);
const map = ref(null);
const midpoint = ref([-60.55174117682346, 40.15790888688196]);

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

const pathGeoJSON = ref({
  type: "Feature",
  properties: {},
  geometry: {
    type: "LineString",
    coordinates: [
      [originLon.value, originLat.value],
      [destinationLon.value, destinationLat.value],
    ],
  },
});

function calculateMidpoint(lat1, lon1, lat2, lon2) {
  const midpointLat = (lat1 + lat2) / 2;
  const midpointLon = (lon1 + lon2) / 2;
  midpoint.value = [midpointLon, midpointLat];

  if (map.value) {
    map.value.flyTo({
      center: midpoint.value,
      essential: true,
      zoom: 1.5,
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
    return;
  }
  map.value = new mapboxgl.Map({
    container: mapRef.value,
    style: "mapbox://styles/flysofar/cluvditjb006w01r5enddch7y",
    center: midpoint.value,
    zoom: 1,
    projection: "mercator",
    scrollZoom: false,
  });
}
const originMarker = ref(null);
const destinationMarker = ref(null);
const popupRef = ref(null);

function removeMarkersAndPopUp() {
  if (originMarker.value) {
    originMarker.value.remove();
  }
  if (destinationMarker.value) {
    destinationMarker.value.remove();
  }
  if (map.value.getLayer("routeLine")) {
    map.value.removeLayer("routeLine");
  }
  if (map.value.getSource("route")) {
    map.value.removeSource("route");
  }
  if (popupRef.value) {
    popupRef.value.remove();
    popupRef.value = null;
  }
}

let dashArraySeq = [0, 2];
function placeMarker() {
  removeMarkersAndPopUp();
  originMarker.value = new mapboxgl.Marker({
    color: "#06067c",
    anchor: "center",
  })
    .setLngLat([originLon.value, originLat.value])
    .addTo(map.value);

  if (destinationLat.value !== 0 && destinationLon.value !== 0) {
    destinationMarker.value = new mapboxgl.Marker({
      color: "#06067c",
      anchor: "center",
    })
      .setLngLat([destinationLon.value, destinationLat.value])
      .addTo(map.value);
  }
  if (
    originLat.value !== 0 &&
    originLon.value !== 0 &&
    destinationLat.value !== 0 &&
    destinationLon.value !== 0
  ) {
    const distanceKm = haversineDistance(
      [originLon.value, originLat.value],
      [destinationLon.value, destinationLat.value]
    );

    pathGeoJSON.value = {
      type: "Feature",
      properties: {},
      geometry: {
        type: "LineString",
        coordinates: [
          [originLon.value, originLat.value],
          [destinationLon.value, destinationLat.value],
        ],
      },
    };
    map.value.addSource("route", {
      type: "geojson",
      data: pathGeoJSON.value,
    });

    map.value.addLayer({
      id: "routeLine",
      type: "line",
      source: "route",
      layout: {
        "line-join": "round",
        "line-cap": "round",
      },
      paint: {
        "line-color": "#06067c",
        "line-width": 2,
        "line-dasharray": dashArraySeq,
      },
    });

    popupRef.value = new mapboxgl.Popup({ closeOnClick: false })
      .setLngLat(midpoint.value) // Set to midpoint or any relevant point
      .setHTML(
        `<p>${convertKmToMiles(distanceKm).toFixed(2)} miles</p>
        <p>${distanceKm.toFixed(2)} km</p>
      <span>Aprox. ${calculateFlightDuration(distanceKm).toFixed(
        2
      )} hours</span>`
      )
      .addTo(map.value);
  }
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
  <BlogArticlesCarousel />
</template>
<style lang="scss" scoped>
.booking {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem 1rem;
  position: relative;
  margin-bottom: 6rem;

  @media (min-width: $big-tablet-screen) {
    gap: 2rem;
    padding: 4rem 2rem;
    margin-bottom: 4rem;
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
