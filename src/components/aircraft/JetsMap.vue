<script setup lang="ts">
import { onMounted, ref, computed, watch } from "vue";
import mapboxgl from "mapbox-gl";

import { LAFlights, NYFlights, miamiFlights } from "@/utils/flights";
import { parseDMS } from "@/utils/functions";
import { normalizeString } from "@/utils/normalize.js";
import { isMobile } from "@/utils/functions";

import type { Flight } from "@/utils/flights.ts";

const props = defineProps<{
  aircraft: string;
}>();

const config = useRuntimeConfig();
mapboxgl.accessToken = config.public.MAP_BOX_API_KEY;
const mapRef = ref();
const departureAirport = ref<Flight["departure"] | null>(null);
const departureLabel = ref<string | undefined | null>(null);

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

const allFlights = [...LAFlights, ...NYFlights, ...miamiFlights];
const selectedAircraft = ref(props.aircraft);
const selectedFlight = ref<Flight | null>(null);

const availableDepartureAirports = computed<string[]>(() => [
  ...new Set(
    allFlights
      .filter(
        (f) =>
          normalizeString(f.aircraft) ===
          normalizeString(selectedAircraft.value)
      )
      .map((f) => f.departure.airport)
  ),
]);

const options = computed(() =>
  availableDepartureAirports.value.map((airport) => {
    const displayLabel = airport.includes("Van Nuys Airport (VNY)")
      ? "Los Angeles"
      : airport.includes("Miami-Opa Locka Executive Airport (OPF)")
        ? "Miami"
        : airport.includes("Westchester County Airport (HPN)")
          ? "New York"
          : airport;
    return {
      label: displayLabel,
      value: airport,
      icon: "flight_takeoff",
    };
  })
);
const visibleFlights = computed(() => {
  if (!departureAirport.value) return [];

  return allFlights.filter((f: Flight) => {
    return (
      normalizeString(f.aircraft) === normalizeString(selectedAircraft.value) &&
      f.departure.airport === departureAirport.value?.airport
    );
  });
});

function getEmittedarrivalAirport(label: string) {
  const f = allFlights.find((f) => f.arrival.airport === label);
  if (!f) return;
  selectedFlight.value = f;
  arrivalAirport.value = f.arrival;
  placeMarker();
}

function createMap() {
  if (!mapRef.value) {
    return;
  }

  map.value = new mapboxgl.Map({
    container: mapRef.value,
    style: "mapbox://styles/flysofar/cluohiwuc00x501pe1javcdf6",
    center: midpoint.value,
    zoom: 3,
    projection: "mercator",
    scrollZoom: false,
    doubleClickZoom: false,
    touchZoomRotate: false,
    interactive: false,
  });

  map.value?.setPadding({
    left: isMobile() ? 50 : 200,
    top: 0,
    right: 0,
    bottom: 0,
  });

  map.value?.on("load", () => {
    map.value!.addSource("points", {
      type: "geojson",
      data: { type: "FeatureCollection", features: [] },
    });
    map.value!.addLayer({
      id: "pointsLayer",
      type: "circle",
      source: "points",
      paint: {
        "circle-color": "#fffdfa",
        "circle-radius": 4,
        "circle-stroke-color": "#009e81",
        "circle-stroke-width": 3,
        "circle-blur": 0.3,
      },
    });
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

function placeMarker() {
  removeMarkersAndPopUp();

  const features: GeoJSON.Feature[] = [];
  if (departureAirport.value) {
    features.push({
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [departureLon.value, departureLat.value],
      },
      properties: {},
    });
  }
  if (arrivalAirport.value) {
    features.push({
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [arrivalLon.value, arrivalLat.value],
      },
      properties: {},
    });
  }
  (map.value!.getSource("points") as mapboxgl.GeoJSONSource).setData({
    type: "FeatureCollection",
    features,
  });

  if (!arrivalAirport.value) {
    return;
  }

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
  if (map.value!.getSource("route")) {
    (map.value!.getSource("route") as mapboxgl.GeoJSONSource).setData(
      pathGeoJSON.value
    );
  } else {
    map.value!.addSource("route", { type: "geojson", data: pathGeoJSON.value });
    map.value!.addLayer({
      id: "routeLine",
      type: "line",
      source: "route",
      layout: { "line-join": "round", "line-cap": "round" },
      paint: {
        "line-color": "#009e81",
        "line-width": 4,
      },
    });
  }

  map.value!.moveLayer("pointsLayer");

  const bounds = new mapboxgl.LngLatBounds(
    [departureLon.value, departureLat.value],
    [arrivalLon.value, arrivalLat.value]
  );
  map.value!.fitBounds(bounds, {
    maxZoom: isMobile() ? 4.5 : 6,
    duration: 2000,
  });
}

onMounted(() => {
  createMap();
});

watch(departureLabel, (label) => {
  if (!label) return;
  const f = allFlights.find((f) => f.departure.airport === label);
  if (f) departureAirport.value = f.departure;
});
</script>
<template>
  <section class="jets-map">
    <div class="jets-map__map" ref="mapRef"></div>
    <div class="jets-map__data" v-if="selectedFlight">
      <span class="jets-map__data__trip">
        {{ selectedFlight.departure.label }} to
        {{ selectedFlight.arrival.label }}</span
      >
      <div class="jets-map__data__details">
        <span>{{ selectedFlight.departure.airport }}</span>
        |
        <span>{{ selectedFlight.arrival.airport }}</span>
      </div>
      <span class="jets-map__data__duration"
        ><IconComponent icon="speedometer" />{{ selectedFlight.duration }}</span
      >
    </div>
    <div class="jets-map__options">
      <div
        class="jets-map__options__header"
        v-if="availableDepartureAirports?.length"
      >
        <AircraftSegmentedControl :options v-model="departureLabel" />
      </div>
      <div class="jets-map__options__arrivals">
        <button
          class="jets-map__options__arrivals__arrival"
          v-for="flight in visibleFlights"
          :key="flight.arrival.airport"
          @click="getEmittedarrivalAirport(flight.arrival.airport)"
          type="button"
        >
          <IconComponent icon="location_on" />
          {{ flight.arrival.label }}
        </button>
      </div>
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
  height: 90svh;

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

  &__data {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    padding: 1rem;
    color: $text-color-alt;
    border: $secondary-color 1px solid;
    border-radius: $radius;
    backdrop-filter: blur(2px);
    height: fit-content;
    background-color: rgba(#05192c, 0.4);
    width: 100%;
    max-width: 500px;

    @media (min-width: $big-tablet-screen) {
      top: 1rem;
      left: 1rem;
      width: fit-content;
    }

    &__trip {
      font-size: $subtitles;
      font-size: $skinny-thick;
    }

    &__details {
      font-size: $small-text;
      font-weight: $skinny;
      color: $primary-color-faded;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      flex-wrap: wrap;
    }

    &__duration {
      display: flex;
      font-size: 1rem;
      gap: 0.5rem;
      align-items: center;
      font-weight: $skinny;
      margin-left: auto;
    }
  }

  &__options {
    gap: 1rem;
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 1;
    border: $secondary-color 1px solid;
    border-radius: $radius;
    backdrop-filter: blur(2px);
    background-color: rgba(#05192c, 0.4);
    height: fit-content;
    width: 100%;
    padding: 1rem;

    @media (min-width: $big-tablet-screen) {
      width: fit-content;
      min-width: 360px;
      gap: 0.5rem;
      bottom: 1rem;
      left: 1rem;
    }

    &__arrivals {
      display: flex;
      overflow-x: scroll;
      gap: 0.75rem;

      @media (min-width: $big-tablet-screen) {
        flex-direction: column;
      }

      &__arrival {
        display: flex;
        gap: 0.5rem;
        align-items: center;
        color: $text-color-alt;
        padding: 0.75rem;
        border-radius: 0;
        white-space: nowrap;
        border: 2px solid #093156;
        border-radius: $radius;

        &:hover {
          background-color: $secondary-color;
          cursor: pointer;
        }

        &:focus {
          outline: none;
        }

        @media (min-width: $big-tablet-screen) {
          border: none;
        }
      }
    }
  }
}
</style>
