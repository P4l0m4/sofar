<script setup lang="ts">
import { onMounted, ref, computed } from "vue";
import mapboxgl from "mapbox-gl";
import {
  haversineDistance,
  convertKmToMiles,
  calculateFlightDuration,
} from "@/utils/mapGL.js";

import { LAFlights, NYFlights, miamiFlights } from "@/utils/flights";
import { parseDMS } from "@/utils/functions";

import type { Flight } from "@/utils/flights.ts";

const config = useRuntimeConfig();
mapboxgl.accessToken = config.public.MAP_BOX_API_KEY;
const mapRef = ref();
const departureAirport = ref<Flight["departure"] | null>(null);
const arrivalAirport = ref<Flight["arrival"] | null>(null);
const map = ref(null);
const midpoint = ref([-120.55174117682346, 39.15790888688196]);

const departureLat = computed(() =>
  departureAirport.value ? parseDMS(departureAirport.value.lat) : 0
);
const departureLon = computed(() =>
  departureAirport.value ? parseDMS(departureAirport.value.lon) : 0
);
const arrivalLat = computed(() =>
  arrivalAirport.value ? parseDMS(arrivalAirport.value.lat) : 0
);
const arrivalLon = computed(() =>
  arrivalAirport.value ? parseDMS(arrivalAirport.value.lon) : 0
);

const pathGeoJSON = ref({
  type: "Feature",
  properties: {},
  geometry: {
    type: "LineString",
    coordinates: [
      [departureLon.value, departureLat.value],
      [arrivalLon.value, arrivalLat.value],
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

const allFlights = [...LAFlights, ...NYFlights, ...miamiFlights];
const selectedAircraft = ref("Phenom 100");

const normalize = (s: string) =>
  s
    .replace(/\u00A0/g, " ") // transforme NBSP en espace normal
    .replace(/\s+/g, " ") // collapse multiples espaces/tabs
    .trim()
    .toLowerCase();

const availableDepartureAirports = computed<string[]>(() => [
  ...new Set(
    allFlights
      .filter(
        (f) => normalize(f.aircraft) === normalize(selectedAircraft.value)
      )
      .map((f) => f.departure.airport)
  ),
]);

const visibleFlights = computed(() => {
  if (!departureAirport.value) return [];

  return allFlights.filter((f: Flight) => {
    return (
      normalize(f.aircraft) === normalize(selectedAircraft.value) &&
      f.departure.airport === departureAirport.value.airport
    );
  });
});

function getEmitteddepartureAirport(label: string) {
  const f = allFlights.find((f) => f.departure.airport === label);
  if (!f) return;
  departureAirport.value = f.departure; // ici un objet {airport, lat, lon}
  arrivalAirport.value = null;
  placeMarker();
}
function getEmittedarrivalAirport(label: string) {
  const f = allFlights.find((f) => f.arrival.airport === label);
  if (!f) return;
  arrivalAirport.value = f.arrival;
  console.log("arrivalAirport", f.arrival);
  placeMarker();
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
    doubleClickZoom: false,
    touchZoomRotate: false,
    interactive: false,
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
  if (map.value?.getLayer("routeLine")) {
    map.value.removeLayer("routeLine");
  }
  if (map.value?.getSource("route")) {
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
    color: "#052545",
    anchor: "center",
  })
    .setLngLat([departureLon.value, departureLat.value])
    .addTo(map.value);

  if (!arrivalAirport.value) {
    return;
  }

  if (arrivalLat.value !== 39 && arrivalLon.value !== -140) {
    destinationMarker.value = new mapboxgl.Marker({
      color: "#052545",
      anchor: "center",
    })
      .setLngLat([arrivalLon.value, arrivalLat.value])
      .addTo(map.value);
  }
  if (
    departureLat.value !== 0 &&
    departureLon.value !== 0 &&
    arrivalLat.value !== 39 &&
    arrivalLon.value !== -140
  ) {
    const distanceKm = haversineDistance(
      [departureLon.value, departureLat.value],
      [arrivalLon.value, arrivalLat.value]
    );

    pathGeoJSON.value = {
      type: "Feature",
      properties: {},
      geometry: {
        type: "LineString",
        coordinates: [
          [departureLon.value, departureLat.value],
          [arrivalLon.value, arrivalLat.value],
        ],
      },
    };
    map.value?.addSource("route", {
      type: "geojson",
      data: pathGeoJSON.value,
    });

    map.value?.addLayer({
      id: "routeLine",
      type: "line",
      source: "route",
      layout: {
        "line-join": "round",
        "line-cap": "round",
      },
      paint: {
        "line-color": "#052545",
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
    bounds.extend([departureLon.value, departureLat.value]);
    bounds.extend([arrivalLon.value, arrivalLat.value]);

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

    // Fit the map to the bounds
    map.value?.fitBounds(bounds, {
      padding: 50,
      maxZoom: maxZoom,
      duration: 1000,
    });
  }
}

onMounted(() => {
  createMap();
});
</script>
<template>
  <section class="jets-map">
    <div class="jets-map__map" ref="mapRef"></div>
    <div class="jets-map__options">
      <div
        class="jets-map__options__header"
        v-if="availableDepartureAirports?.length"
      >
        <button
          class="jets-map__options__header__departure-airport"
          v-for="availableDepartureAirport in availableDepartureAirports"
          :key="availableDepartureAirport"
          @click="getEmitteddepartureAirport(availableDepartureAirport)"
        >
          {{ availableDepartureAirport }}
        </button>
      </div>
      <button
        class="jets-map__options__option"
        v-for="flight in visibleFlights"
        :key="flight.arrival.airport"
        @click="getEmittedarrivalAirport(flight.arrival.airport)"
      >
        {{ flight.arrival.airport }}
      </button>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.jets-map {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 2rem 0;
  position: relative;
  width: 100%;
  height: 100svh;

  @media (min-width: $big-tablet-screen) {
    gap: 2rem;
    margin: 4rem 0;
    height: 100vh;
  }

  &__map {
    height: 100%;
    width: 100%;
    user-select: none;
    outline: none;
    border: none;
    position: absolute;
    inset: 0;
    margin: auto;
  }

  &__options {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    z-index: 1;
    border: $secondary-color 1px solid;
    border-radius: $radius;
    background-color: $secondary-color;
    height: fit-content;
    width: 100%;
    padding: 1rem;

    @media (min-width: $big-tablet-screen) {
      max-width: 400px;
    }

    &__header {
      display: flex;
      gap: 1rem;
      justify-content: space-between;

      &__departure-airport {
        color: $text-color-alt;
      }
    }

    &__option {
      display: flex;
      align-items: center;
      color: $text-color-alt;
    }
  }
}
</style>
