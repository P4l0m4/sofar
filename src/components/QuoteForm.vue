<script setup>
import { ref } from "vue";
import airports from "@/utils/airports.json";
import InputField from "@/ui/InputField.vue";
import dayjs from "dayjs";

const isRoundTrip = ref(false);
const origin = ref("");
const destination = ref("");
const passengers = ref("");
const firstName = ref("");
const lastName = ref("");
const email = ref("");
const phoneNumber = ref("");
const info = ref("");

const currentStep = ref(0);

const steps = [
  {
    label: "Flight details",
  },
  {
    label: "Contact information",
  },
];

const originSearchResults = computed(() => {
  if (!origin.value) {
    return [];
  }
  return airports
    .filter(
      (airport) =>
        airport.name.toLowerCase().includes(origin.value.toLowerCase()) ||
        airport.municipality
          .toLowerCase()
          .includes(origin.value.toLowerCase()) ||
        airport.iso_country.toLowerCase().includes(origin.value.toLowerCase())
    )
    .map((airport) => `${airport.name}, ${airport.municipality}`);
});

const destinationSearchResults = computed(() => {
  if (!destination.value) {
    return [];
  }
  return airports
    .filter(
      (airport) =>
        airport.name.toLowerCase().includes(destination.value.toLowerCase()) ||
        airport.municipality
          .toLowerCase()
          .includes(destination.value.toLowerCase()) ||
        airport.iso_country
          .toLowerCase()
          .includes(destination.value.toLowerCase())
    )
    .map((airport) => `${airport.name}, ${airport.municipality}`);
});
</script>
<template>
  <form class="form">
    <div class="form__steps">
      <div class="form__steps__step" v-for="(step, i) in steps" :key="i">
        <h3
          class="form__steps__step__label"
          :class="{
            'form__steps__step__label--active': currentStep === i,
          }"
          @click="currentStep = i"
        >
          <span
            class="form__steps__step__label__number"
            :class="{
              'form__steps__step__label__number--active': currentStep === i,
            }"
          >
            {{ i + 1 }}
          </span>
          {{ step.label }}
          <div class="form__steps__step__label__corner-left"></div>
          <div class="form__steps__step__label__corner-right"></div>
        </h3>
      </div>
    </div>

    <div class="form__fields">
      <template v-if="currentStep === 0">
        <div class="form__fields__wrapper">
          <div class="form__fields__custom-field">
            <span>
              <img
                src="/assets/icons/airplanemode_active-dark.svg"
                alt="icon one way trip"
              />
              One way
            </span>
            <label class="switch" for="checkbox">
              <input type="checkbox" id="checkbox" v-model="isRoundTrip" />
              <span class="slider round"></span>
            </label>
            <span>
              <img
                src="/assets/icons/connecting_airports.svg"
                alt="icon one way trip"
              />
              Round trip
            </span>
          </div>
          <div class="form__fields__custom-field">
            <label for="number" class="sr-only">Number of passengers</label>
            <span>
              <img
                class="form__fields__custom-field__icon"
                src="/assets/icons/group_add-dark.svg"
                alt="icon number of passengers"
              />
              Passengers
            </span>
            <InputField
              class="passengers"
              v-model="passengers"
              id="passengers"
              label="Passengers"
              type="number"
              placeholder="1"
            />
          </div>
        </div>
        <div class="form__fields__wrapper">
          <InputField
            v-model="origin"
            id="origin"
            label="Departure airport"
            type="search"
            placeholder="From"
            icon="flight_takeoff"
          />

          <InputField
            v-model="destination"
            id="destination"
            label="Arrival airport"
            type="search"
            placeholder="To"
            icon="flight_land"
          />

          <div class="search-results" v-if="originSearchResults.length > 0">
            <span
              class="search-results__result"
              v-for="(result, i) in originSearchResults"
              :key="i"
              @click="origin = result"
              >{{ result }}</span
            >
          </div>
          <div
            class="search-results"
            v-if="destinationSearchResults.length > 0"
          >
            <span
              class="search-results__result"
              v-for="(result, i) in destinationSearchResults"
              :key="i"
              @click="destination = result"
              >{{ result }}</span
            >
          </div>
        </div>
        <div class="form__fields__wrapper">
          <InputField
            v-model="departureDate"
            id="departureDate"
            label="Departure date"
            type="date"
            placeholder="YYYY-MM-DD"
            icon="calendar_today"
          />
          <InputField
            v-model="returnDate"
            id="returnDate"
            label="Return date"
            type="date"
            placeholder="YYYY-MM-DD"
            icon="calendar_today"
          />
        </div>

        <button
          class="form__fields__button button-primary"
          @click="currentStep++"
        >
          Next
        </button>
      </template>
      <template v-else-if="currentStep === 1">
        <div class="form__fields__wrapper">
          <InputField
            v-model="firstName"
            id="firstName"
            label="First name"
            placeholder="John"
          />
          <InputField
            v-model="lastName"
            id="lastName"
            label="Last name"
            placeholder="Doe"
          />
        </div>

        <InputField
          v-model="email"
          id="email"
          label="Email"
          placeholder="emailadress@domain.com"
          type="email"
        />
        <InputField
          v-model="phoneNumber"
          id="phoneNumber"
          label="Phone"
          placeholder="(000) 000 - 00*"
          type="tel"
        />
        <InputField
          v-model="info"
          id="info"
          label="Additional information"
          placeholder="Tell us more about your request..."
          :required="false"
        />

        <button
          class="form__fields__button button-primary"
          @click="currentStep++"
        >
          Validate
        </button>
      </template>
    </div>
  </form>
</template>
<style lang="scss" scoped>
.form {
  border-radius: 1rem;
  width: 100%;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  &__steps {
    display: flex;

    &__step {
      display: flex;

      &__label {
        width: fit-content;
        display: flex;
        font-size: $small-text;
        font-weight: $skinny;
        background-color: $base-color;
        opacity: 0.8;
        border-radius: $radius $radius 0 0;
        gap: 0.5rem;
        padding: 0.5rem;
        align-items: center;
        cursor: pointer;
        white-space: nowrap;
        position: relative;
        transition: opacity 0.4s ease;

        &--active {
          opacity: 1;
        }

        &__number {
          display: flex;
          font-size: 1rem;
          font-weight: $skinny;
          height: 30px;
          width: 30px;
          padding-top: 0.1rem;
          border-radius: 50%;
          align-items: center;
          justify-content: center;
          background-color: transparent;
          color: $text-color;
          border: 2px solid $text-color;
          z-index: 1;
          transition: background-color 0.4s ease, color 0.4s ease;

          &--active {
            background-color: $text-color;
            color: $text-color-alt;
          }
        }

        &__corner-left,
        &__corner-right {
          background-color: transparent;
          height: 30px;
          width: 20px;
          box-shadow: 10px -10px 0 0 $base-color;
          border-bottom-right-radius: calc($radius * 2);
          border-top-right-radius: calc($radius * 2);
          position: absolute;
        }

        &__corner-left {
          bottom: -5px;
          left: -23px;
          transform: rotate(70deg);
        }
        &__corner-right {
          bottom: -1px;
          right: -20px;
          transform: rotate(170deg);
        }
      }
    }
  }

  &__fields {
    display: flex;
    gap: 1rem;
    padding: 1rem;
    border-radius: 0 $radius $radius $radius;
    background-color: $base-color;
    flex-wrap: wrap;

    &__custom-field {
      display: flex;
      gap: 0.5rem;
      align-items: center;
      border-radius: $radius;
      width: fit-content;

      @media (min-width: $big-tablet-screen) {
        width: calc(50% - 0.5rem);
        gap: 1rem;
      }

      .passengers {
        min-width: 40px;
        max-width: 40px;
        padding: 0 0.5rem;

        @media (min-width: $big-tablet-screen) {
          max-width: 100%;
        }
      }

      &__icon {
        width: 1.2rem;
        height: 1.2rem;
      }

      & span {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: $small-text;
        white-space: nowrap;

        & img {
          width: 1rem;
          height: 1rem;
        }
      }

      .switch {
        position: relative;
        display: inline-block;
        width: 60px;
        height: 34px;
        border-radius: $radius;
        box-shadow: $shadow;
      }

      /* Hide default HTML checkbox */
      .switch input {
        opacity: 0;
        width: 0;
        height: 0;
      }

      /* The slider */
      .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: $primary-color;
        -webkit-transition: 0.4s;
        transition: 0.4s;
      }

      .slider:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: $secondary-color-faded;
        -webkit-transition: 0.4s;
        transition: 0.4s ease;
      }

      input:checked + .slider {
        background-color: $secondary-color-faded;

        &:before {
          background-color: $primary-color;
        }
      }

      input:focus + .slider {
        box-shadow: $shadow;
      }

      input:checked + .slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
      }

      /* Rounded sliders */
      .slider.round {
        border-radius: 34px;
      }

      .slider.round:before {
        border-radius: 50%;
      }
    }

    &__wrapper {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 1rem;
      width: 100%;

      .search-results {
        display: flex;
        flex-direction: column;
        grid-column: span 2;
        gap: 1rem;
        background-color: $primary-color;
        top: 6.5rem;
        padding: 1rem;
        border-radius: $radius;
        max-height: 350px;
        width: 100%;
        overflow-y: scroll;
        z-index: 1;
        box-shadow: $shadow;

        &__result {
          display: flex;
          cursor: pointer;
        }
      }
    }

    &__button {
      width: 100%;
    }
  }
}
</style>
