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
const midpoint = ref([-120.55174117682346, 39.15790888688196]);

const originLat = computed(() =>
  originAirport.value ? Number(originAirport.value.latitude_deg) : 0
);
const originLon = computed(() =>
  originAirport.value ? Number(originAirport.value.longitude_deg) : 0
);
const destinationLat = computed(() =>
  destinationAirport.value ? Number(destinationAirport.value.latitude_deg) : 39
);
const destinationLon = computed(() =>
  destinationAirport.value
    ? Number(destinationAirport.value.longitude_deg)
    : -140
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
      zoom: 3,
    });
  }
}

function getEmittedOriginAirport(airport) {
  removeMarkersAndPopUp();
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
  removeMarkersAndPopUp();
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
    zoom: 2,
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

  if (destinationLat.value !== 39 && destinationLon.value !== -140) {
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
    destinationLat.value !== 39 &&
    destinationLon.value !== -140
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
      .setLngLat(midpoint.value)
      .setHTML(
        `<p>${convertKmToMiles(distanceKm).toFixed(2)} miles</p>
        <p>${distanceKm.toFixed(2)} km</p>
      <span>Aprox. ${calculateFlightDuration(distanceKm).toFixed(
        2
      )} hours</span>`
      )
      .addTo(map.value);

    // Calculate the bounding box
    const bounds = new mapboxgl.LngLatBounds();
    bounds.extend([originLon.value, originLat.value]);
    bounds.extend([destinationLon.value, destinationLat.value]);

    let maxZoom;
    if (distanceKm < 1) {
      maxZoom = 16; // Zoom in very close
    } else if (distanceKm < 10) {
      maxZoom = 12; // Zoom in closer for short distances
    } else if (distanceKm < 50) {
      maxZoom = 10; // Zoom out for medium distances
    } else if (distanceKm < 300) {
      maxZoom = 7; // Default zoom level for longer distances
    } else {
      maxZoom = 4; // Default zoom level for longer distances
    }

    console.log(distanceKm);

    // Fit the map to the bounds
    map.value.fitBounds(bounds, {
      padding: 50,
      maxZoom: maxZoom,
      duration: 1000,
    });
  }
}

onMounted(() => {
  createMap();
});

useHead({
  title: "Book a Private Jet | Sofar",
  meta: [
    {
      name: "description",
      content:
        "Book your private jet online with Sofar. Enjoy flexible planning, personalized service and a seamless travel experience. Book your private flight now.",
    },
  ],
});

useJsonld(() => ({
  "@context": "https://schema.org/",
  "@type": "WebSite",
  name: `Book a Private Jet | Sofar`,
  url: window.location.href,
}));

const breadcrumbs = [
  {
    name: "Home",
    url: window.location.origin,
  },
  {
    name: "Booking",
    url: window.location.href,
  },
];
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
      parent="booking"
      class="booking__form"
      @origin-airport="getEmittedOriginAirport"
      @destination-airport="getEmittedDestinationAirport"
    />
  </section>
  <BlogArticlesCarousel />
  <JsonldBreadcrumb :links="breadcrumbs" />
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
