<script setup>
import { ref, reactive } from "vue";
import airports from "@/utils/airports.json";
import InputField from "@/ui/InputField.vue";
import dayjs from "dayjs";
import { useVuelidate } from "@vuelidate/core";
import emailjs from "@emailjs/browser";
import {
  required,
  minLength,
  maxLength,
  email,
  alphaNum,
  between,
  minValue,
  numeric,
} from "@vuelidate/validators";

const isRoundTrip = ref(false);
const currentStep = ref(0);
let isStep1Valid = ref(false);
let isStep2Valid = ref(false);
const isSubmitting = ref(false);

const state = reactive({
  sent: false,
  isSubmitting: false,
  departureDate: "",
  returnDate: "",
  roundTripDepartureDate: "",
  roundTripReturnDate: "",
  origin: "",
  destination: "",
  passengers: "1",
  firstName: "",
  lastName: "",
  emailRef: "",
  phoneNumber: "",
  info: "",
});

const steps = [
  {
    label: "Flight details",
  },
  {
    label: "Contact information",
  },
];

const originSearchResults = computed(() => {
  if (!state.origin) {
    return [];
  }
  return airports
    .filter(
      (airport) =>
        airport.name.toLowerCase().includes(state.origin.toLowerCase()) ||
        airport.municipality.toLowerCase().includes(state.origin.toLowerCase())
    )
    .slice(0, 10);
});

const destinationSearchResults = computed(() => {
  if (!state.destination) {
    return [];
  }
  return airports
    .filter(
      (airport) =>
        airport.name.toLowerCase().includes(state.destination.toLowerCase()) ||
        airport.municipality
          .toLowerCase()
          .includes(state.destination.toLowerCase())
    )
    .slice(0, 10);
});

const rules = {
  origin: {
    required,
    alphaNum,
  },
  destination: {
    required,
    alphaNum,
  },
  passengers: {
    required,
    minLength: minLength(1),
    maxLength: maxLength(99),
  },
  departureDate: {
    required,
    between: between(dayjs().format("MMM DD, YYYY"), state.returnDate),
  },
  returnDate: {
    required,
    minValue: minValue(state.departureDate),
  },
  roundTripDepartureDate: {
    required: isRoundTrip,
    between: between(dayjs().format("MMM DD, YYYY"), state.roundTripReturnDate),
  },
  roundTripReturnDate: {
    required: isRoundTrip,
    minValue: minValue(state.roundTripDepartureDate),
  },
  firstName: {
    required,
    maxLength: maxLength(50),
    alphaNum,
  },
  lastName: {
    required,
    maxLength: maxLength(50),
    alphaNum,
  },
  phoneNumber: {
    required,
    minLength: minLength(10),
    maxLength: maxLength(15),
    numeric,
  },
  email: {
    required,
    email,
  },
};

const v$ = useVuelidate(rules, state);
const form = ref(null);

async function submit() {
  const valid = await v$.value.$validate();

  if (valid) {
    await emailjs.sendForm(
      "service_n1t6qo6",
      "template_764bqrq",
      form.value,
      "8ifw_QPXgYXoWYmVW"
    );

    state.sent = true;
    state.isSubmitting = false;
    state.origin = "";
    state.destination = "";
    state.lastName = "";
    state.firstName = "";
    state.phoneNumber = "";
    state.info = "";
    state.email = "";
    v$.value.$reset();
  }
}

async function checkFirstStep() {
  const valid = await v$.value.$validate();
  if (valid) {
    currentStep++;
  }
}
</script>
<template>
  <form class="form" ref="form" @submit.prevent="submit">
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
          <div class="form__fields__wrapper__relative">
            <InputField
              v-model="state.origin"
              id="origin"
              label="Departure airport"
              type="search"
              placeholder="From"
              icon="flight_takeoff"
            />
            <div class="search-results" v-if="originSearchResults.length > 0">
              <span
                v-for="(result, i) in originSearchResults"
                class="search-results__result"
                :key="i"
                @click="state.origin = `${result.name}, ${result.municipality}`"
                ><img
                  class="search-results__result__flag"
                  :src="`assets/flags/${result.iso_country}.svg`"
                  alt="country flag"
                />{{ result.name }}, {{ result.municipality }}</span
              >
            </div>
            <span
              v-if="v$.origin.$dirty && v$.origin.required.$invalid"
              class="error"
            >
              This field is required
            </span>
            <span
              v-if="v$.origin.$dirty && v$.origin.alphaNum.$invalid"
              class="error"
            >
              This field must contain only alphanumeric characters
            </span>
          </div>
          <div class="form__fields__wrapper__relative">
            <InputField
              v-model="state.destination"
              id="destination"
              label="Arrival airport"
              type="search"
              placeholder="To"
              icon="flight_land"
            />

            <div
              class="search-results"
              v-if="destinationSearchResults.length > 0"
            >
              <span
                v-for="(result, i) in destinationSearchResults"
                class="search-results__result"
                :key="i"
                @click="
                  state.destination = `${result.name}, ${result.municipality}`
                "
                ><img
                  class="search-results__result__flag"
                  :src="`assets/flags/${result.iso_country}.svg`"
                  alt="country flag"
                />
                {{ result.name }}, {{ result.municipality }}
              </span>
            </div>
            <span
              v-if="v$.destination.$dirty && v$.destination.required.$invalid"
              class="error"
            >
              This field is required
            </span>
            <span
              v-if="v$.destination.$dirty && v$.destination.alphaNum.$invalid"
              class="error"
            >
              This field must contain only alphanumeric characters
            </span>
          </div>
        </div>
        <div class="form__fields__wrapper">
          <InputField
            v-model="state.departureDate"
            id="departureDate"
            label="Departure date"
            type="date"
            placeholder="YYYY-MM-DD"
            icon="calendar_today"
          />
          <span
            v-if="v$.departureDate.$dirty && v$.departureDate.required.$invalid"
            class="error error--date"
          >
            This field is required
          </span>
          <span
            v-if="v$.departureDate.$dirty && v$.departureDate.between.$invalid"
            class="error"
          >
            Your departure date must be before your return date and after today
          </span>
          <InputField
            v-model="state.returnDate"
            id="returnDate"
            label="Return date"
            type="date"
            placeholder="YYYY-MM-DD"
            icon="calendar_tomorrow"
          />
          <span
            v-if="v$.returnDate.$dirty && v$.returnDate.required.$invalid"
            class="error"
          >
            This field is required
          </span>
          <span
            v-if="v$.returnDate.$dirty && v$.returnDate.minValue.$invalid"
            class="error"
          >
            Your return date must be after your departure date
          </span>
        </div>
        <div class="form__fields__wrapper">
          <div class="form__fields__custom-field">
            <span
              class="form__fields__custom-field__span"
              :class="{
                'form__fields__custom-field__span--transparent': isRoundTrip,
              }"
              @click="isRoundTrip = false"
            >
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
            <span
              class="form__fields__custom-field__span"
              :class="{
                'form__fields__custom-field__span--transparent': !isRoundTrip,
              }"
              @click="isRoundTrip = true"
            >
              <img
                src="/assets/icons/connecting_airports.svg"
                alt="icon one way trip"
              />
              Round trip
            </span>
          </div>
          <div class="form__fields__custom-field">
            <label for="number" class="sr-only">Number of passengers</label>
            <span
              class="form__fields__custom-field__span"
              style="cursor: default"
            >
              <img
                class="form__fields__custom-field__icon"
                src="/assets/icons/group_add-dark.svg"
                alt="icon number of passengers"
              />
              Passengers
            </span>
            <InputField
              v-model="state.passengers"
              class="passengers"
              id="passengers"
              label="Passengers"
              type="number"
              placeholder="1"
            />
            <span
              v-if="v$.passengers.$dirty && v$.passengers.required.$invalid"
              class="error"
            >
              This field is required
            </span>
            <span
              v-if="v$.passengers.$dirty && v$.passengers.minLength.$invalid"
              class="error"
            >
              Passengers must be between 1 and 99
            </span>
          </div>
          <Transition>
            <div class="form__fields__wrapper" v-if="isRoundTrip">
              <span class="form__fields__wrapper__second-trip"
                >Second trip</span
              >
              <InputField
                v-model="state.roundTripDepartureDate"
                id="departureDate"
                label="Departure date"
                type="date"
                placeholder="YYYY-MM-DD"
                icon="calendar_today"
              />
              <span
                v-if="
                  v$.roundTripDepartureDate.$dirty &&
                  v$.roundTripDepartureDate.required.$invalid
                "
                class="error error--date"
              >
                This field is required
              </span>
              <span
                v-if="
                  v$.roundTripDepartureDate.$dirty &&
                  v$.roundTripDepartureDate.between.$invalid
                "
                class="error error--date"
              >
                Your departure date must be before your return date
              </span>
              <InputField
                v-model="state.roundTripReturnDate"
                id="returnDate"
                label="Return date"
                type="date"
                placeholder="YYYY-MM-DD"
                icon="calendar_tomorrow"
              /><span
                v-if="
                  v$.roundTripReturnDate.$dirty &&
                  v$.roundTripReturnDate.required.$invalid
                "
                class="error error--date"
              >
                This field is required
              </span>
              <span
                v-if="
                  v$.roundTripReturnDate.$dirty &&
                  v$.roundTripReturnDate.minValue.$invalid
                "
                class="error error--date"
              >
                Your return date must be after your departure date
              </span>
            </div></Transition
          >
        </div>
        <Transition>
          <button
            class="form__fields__button button-primary"
            @click="checkFirstStep()"
          >
            Next step
          </button></Transition
        >
      </template>
      <template v-else-if="currentStep === 1">
        <div class="form__fields__wrapper--row">
          <InputField
            v-model="state.firstName"
            id="firstName"
            label="First name"
            placeholder="John"
          />
          <InputField
            v-model="state.lastName"
            id="lastName"
            label="Last name"
            placeholder="Doe"
          />
        </div>

        <InputField
          v-model="state.email"
          id="email"
          label="Email"
          placeholder="emailadress@domain.com"
          type="email"
        />
        <InputField
          v-model="state.phoneNumber"
          id="phoneNumber"
          label="Phone"
          placeholder="(000) 000 - 00*"
          type="tel"
        />
        <InputField
          v-model="state.info"
          id="info"
          label="Additional information"
          placeholder="Tell us more about your request..."
          :required="false"
        />

        <button
          class="form__fields__button button-primary"
          @click="currentStep++"
        >
          Request a quote
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

      &__span {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: $small-text;
        white-space: nowrap;
        transition: opacity 0.4s ease;
        cursor: pointer;

        &--transparent {
          opacity: 0.5;
        }

        & img {
          width: 1rem;
          height: 1rem;
        }
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

      &__relative {
        position: relative;
        width: 100%;

        .search-results {
          display: flex;
          flex-direction: column;
          grid-column: span 2;
          background-color: $primary-color;
          border-radius: 0 0 $radius $radius;
          max-height: 200px;
          width: 100%;
          overflow-y: scroll;
          overflow-x: hidden;
          z-index: 1;
          box-shadow: $shadow;
          position: absolute;
          top: 30px;
          padding: 1rem 0 0 0;

          &__result {
            display: flex;
            cursor: pointer;
            padding: 1rem;
            gap: 0.5rem;
            transition: background-color 0.4s ease;

            @media (min-width: $big-tablet-screen) {
              &:hover {
                background-color: $secondary-color-faded;
              }
            }

            &__flag {
              width: 1rem;
              height: 1rem;
            }
          }
        }
      }

      &__second-trip {
        width: 100%;
        font-size: $small-text;
        font-weight: $skinny;
        color: $text-color;
        margin-top: 0.5rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        white-space: nowrap;

        &::before {
          content: "";
          display: block;
          width: 100%;
          height: 1px;
          background-color: $text-color;
        }
        &::after {
          content: "";
          display: block;
          width: 100%;
          height: 1px;
          background-color: $text-color;
        }
      }

      &--row {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        width: 100%;
        max-width: 100%;

        div {
          min-width: 100px;
        }
      }
    }

    &__button {
      width: 100%;
    }
  }
}

.error {
  color: $error-color;
  font-size: $small-text;
  font-weight: $skinny;
  padding: 0.5rem 0 0 0.5rem;
  display: flex;

  &--date {
    padding: 0;
    padding-left: 0.5rem;
    margin-top: -0.5rem;
  }
}
</style>
