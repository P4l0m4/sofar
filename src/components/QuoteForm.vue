<script setup>
import { ref, reactive, onMounted, watch } from "vue";
// import airports from "@/utils/airports.json";
import phoneCodes from "@/utils/phoneCodes.json";
import dayjs from "dayjs";
import { useVuelidate } from "@vuelidate/core";
import emailjs from "@emailjs/browser";
import { debounce } from "@/utils/debounce";
import { normalizeString } from "@/utils/normalize";

import {
  required,
  minLength,
  maxLength,
  email,
  requiredIf,
  minValue,
  maxValue,
} from "@vuelidate/validators";

defineProps({
  parent: String,
});

const emits = defineEmits([
  "formSubmitted",
  "originAirport",
  "destinationAirport",
]);

const airports = ref([]);

const selectedPhoneCode = ref({
  country: "United States",
  code: "+1",
  abbreviation: "US",
});
const phoneCodesListIsOpen = ref(false);
const phoneCodesList = computed(() => {
  return phoneCodes.filter(
    (code) => code.abbreviation !== selectedPhoneCode.value.abbreviation
  );
});
const isRoundTrip = ref(false);
const currentStep = ref(0);
const isSubmitting = ref(false);
const wasSent = ref(false);

//const todaysDate = dayjs().format("YYYY-MM-DDTHH:mm");
const todaysDatePlusTwoHours = dayjs()
  .add(2, "hour")
  .format("YYYY-MM-DDTHH:mm");

const phoneCodeQuery = ref("");

const flightState = reactive({
  departureDate: "",
  departureTime: 9.0,
  returnDate: "",
  returnTime: 20.0,
  origin: "",
  destination: "",
  passengers: "1",
});

const contactState = reactive({
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  info: "",
});

const formattedReturnDate = computed(() => {
  if (!flightState.returnDate) {
    return "";
  }
  return dayjs(flightState.returnDate).format("MMMM DD, YYYY [at] h:mm A");
});

const templateParams = computed(() => ({
  origin: flightState.origin,
  destination: flightState.destination,
  departureDate: dayjs(flightState.departureDate).format(
    "MMMM DD, YYYY [at] h:mm A"
  ),
  returnDate: formattedReturnDate.value,
  passengers: flightState.passengers,
  firstName: contactState.firstName,
  lastName: contactState.lastName,
  email: contactState.email,
  phoneNumber: contactState.phoneNumber,
  countryCode: selectedPhoneCode.value.code,
  info: contactState.info,
}));
const steps = [
  {
    label: "Flight details",
  },
  {
    label: "Contact information",
  },
];

function confirmSubmission() {
  isSubmitting.value = false;
  wasSent.value = true;
  vFlight$.value.$reset();
  vContact$.value.$reset();
  flightState.departureDate = "";
  flightState.returnDate = "";
  flightState.origin = "";
  flightState.destination = "";
  flightState.passengers = "1";
  contactState.firstName = "";
  contactState.lastName = "";
  contactState.email = "";
  contactState.phoneNumber = "";
  contactState.info = "";
  setTimeout(() => {
    currentStep.value = 0;
    wasSent.value = false;
    emits("formSubmitted");
  }, 1400);
}

//SEARCH AIRPORTS
const isOriginResultsOpen = ref(false);
const isDestinationResultsOpen = ref(false);
const originSearchResults = ref([]);
const destinationSearchResults = ref([]);
const handleOriginSearch = debounce(() => {
  originSearchResults.value = searchAirports(flightState.origin);
  isOriginResultsOpen.value = true;
}, 300);
const handleDestinationSearch = debounce(() => {
  destinationSearchResults.value = searchAirports(flightState.destination);
  isDestinationResultsOpen.value = true;
}, 300);

function searchAirports(searchQuery) {
  return airports.value
    .filter(
      (airport) =>
        normalizeString(airport.name).includes(normalizeString(searchQuery)) ||
        normalizeString(airport.ident).includes(normalizeString(searchQuery)) ||
        normalizeString(airport.municipality).includes(
          normalizeString(searchQuery)
        ) ||
        `${normalizeString(airport.name)}, ${normalizeString(
          airport.municipality
        ).slice(0, -1)}`.includes(normalizeString(searchQuery))
    )
    .slice(0, 12);
}

function handleCloseOriginSearchResults() {
  if (isOriginResultsOpen.value) {
    isOriginResultsOpen.value = false;
  }
}
function handleCloseDestinationSearchResults() {
  if (isDestinationResultsOpen.value) {
    isDestinationResultsOpen.value = false;
  }
}

function handleSelectOriginResult(result) {
  flightState.origin = `${result.name}, ${result.municipality} (${result.ident})`;
  isOriginResultsOpen.value = false;
  if (!vFlight$.value.origin.$dirty) {
    emits("originAirport", result);
  }
}

function handleSelectDestinationResult(result) {
  flightState.destination = `${result.name}, ${result.municipality} (${result.ident})`;
  isDestinationResultsOpen.value = false;

  if (!vFlight$.value.destination.$dirty) {
    emits("destinationAirport", result);
  }
}

const phoneCodesSearchResults = computed(() => {
  if (!phoneCodeQuery.value) {
    return phoneCodesList.value.slice(0, 10);
  }
  return phoneCodesList.value.filter(
    (code) =>
      normalizeString(code.country).includes(
        normalizeString(phoneCodeQuery.value)
      ) ||
      normalizeString(code.abbreviation).includes(
        normalizeString(phoneCodeQuery.value)
      ) ||
      normalizeString(code.code).includes(normalizeString(phoneCodeQuery.value))
  );
});

//function checkIfAirportExists(airport) {
//return airports.value.some(
//(a) =>
// `${normalizeString(a.name)}, ${normalizeString(a.municipality)}` ===
//  normalizeString(airport)
//);
//}

// Custom validator that checks if the airport exists
//const airportExistsValidator = (value) => checkIfAirportExists(value);
const notSameAsDestination = (value) => value !== flightState.destination;
const notSameAsOrigin = (value) => value !== flightState.origin;
const greaterThan = (value) => value > todaysDatePlusTwoHours;
const lowerThan = (value) => {
  if (!isRoundTrip.value) {
    return true;
  }
  return value >= flightState.departureDate;
};
// const phoneRegex =
//   /^(\d{10}|(\d{2}[-.\s]){4}\d{2}|\(\d{3}\)\s\d{3}-\d{4}|\d{3}[-.\s]\d{3}[-.\s]\d{4}|\d{3}\s\d{3}\s\d{3}\s\d)$/;
const phoneRegex =
  /^(\d{10}|(\d{2}[-.\s]){4}\d{2}|\(\d{3}\)\s\d{3}-\d{4}|\d{3}[-.\s]\d{3}[-.\s]\d{4}|\d{3}\s\d{3}\s\d{3}\s\d)$/;
const isPhoneNumber = (value) => phoneRegex.test(value);

const flightRules = {
  origin: {
    required,
    //airportExistsValidator,
    notSameAsDestination,
  },
  destination: {
    required,
    //airportExistsValidator,
    notSameAsOrigin,
  },
  passengers: {
    required,
    minValue: minValue(1),
    maxValue: maxValue(99),
  },
  departureDate: {
    required,
    greaterThan,
  },
  returnDate: {
    required: requiredIf(isRoundTrip),
    lowerThan,
  },
};

const contactRules = {
  firstName: {
    required,
    maxLength: maxLength(30),
    minLength: minLength(2),
  },
  lastName: {
    required,
    maxLength: maxLength(30),
    minLength: minLength(2),
  },
  phoneNumber: {
    required,
    isPhoneNumber,
  },
  email: {
    required,
    email,
  },
};

const vFlight$ = useVuelidate(flightRules, flightState);
const vContact$ = useVuelidate(contactRules, contactState);
const form = ref(null);

const originErrors = computed(() => {
  const errors = [];
  if (!vFlight$.value.origin.$dirty) return errors;
  vFlight$.value.origin.required.$invalid && errors.push("This field is empty");
  // vFlight$.value.origin.airportExistsValidator.$invalid &&
  //   errors.push("Please select an existing airport");
  vFlight$.value.origin.notSameAsDestination.$invalid &&
    errors.push("The departure and arrival airports must be different");
  return errors;
});

const destinationErrors = computed(() => {
  const errors = [];
  if (!vFlight$.value.destination.$dirty) return errors;
  vFlight$.value.destination.required.$invalid &&
    errors.push("This field is empty");
  // vFlight$.value.destination.airportExistsValidator.$invalid &&
  //   errors.push("Please select an existing airport");
  vFlight$.value.destination.notSameAsOrigin.$invalid &&
    errors.push("The departure and arrival airports must be different");
  return errors;
});

const passengersErrors = computed(() => {
  const errors = [];
  if (!vFlight$.value.passengers.$dirty) return errors;
  vFlight$.value.passengers.required.$invalid &&
    errors.push("This field is empty");
  vFlight$.value.passengers.minValue.$invalid &&
    errors.push("Passengers must be between 1 and 99");
  vFlight$.value.passengers.maxValue.$invalid &&
    errors.push("Passengers must be between 1 and 99");
  return errors;
});

const departureDateErrors = computed(() => {
  const errors = [];
  if (!vFlight$.value.departureDate.$dirty) return errors;
  vFlight$.value.departureDate.required.$invalid &&
    errors.push("This field is empty");
  vFlight$.value.departureDate.greaterThan.$invalid &&
    errors.push("Your departure time must be at least 2 hours from now");
  return errors;
});

const returnDateErrors = computed(() => {
  const errors = [];
  if (!vFlight$.value.returnDate.$dirty) return errors;
  vFlight$.value.returnDate.required.$invalid &&
    errors.push("This field is empty");
  vFlight$.value.returnDate.lowerThan.$invalid &&
    errors.push(
      "Your return date must be the same day of after your departure"
    );
  return errors;
});

const firstNameAndLastNameErrors = computed(() => {
  const errors = [];
  if (!vContact$.value.firstName.$dirty && !vContact$.value.lastName.$dirty)
    return errors;
  vContact$.value.firstName.required.$invalid &&
    errors.push("Please enter your first name");
  vContact$.value.firstName.minLength.$invalid &&
    errors.push("Your first name is too short (min 2 characters)");
  vContact$.value.firstName.maxLength.$invalid &&
    errors.push("Your first name is too long (max 30 characters)");
  vContact$.value.lastName.required.$invalid &&
    errors.push("Please enter your last name");
  vContact$.value.lastName.minLength.$invalid &&
    errors.push("Your last name is too short (min 2 characters)");
  vContact$.value.lastName.maxLength.$invalid &&
    errors.push("Your last name is too long (max 30 characters)");
  return errors;
});

const phoneNumberErrors = computed(() => {
  const errors = [];
  if (!vContact$.value.phoneNumber.$dirty) return errors;
  vContact$.value.phoneNumber.required.$invalid &&
    errors.push("Please enter your phone number");
  vContact$.value.phoneNumber.isPhoneNumber.$invalid &&
    errors.push("This field must contain a valid phone number");

  return errors;
});

const emailErrors = computed(() => {
  const errors = [];
  if (!vContact$.value.email.$dirty) return errors;
  vContact$.value.email.required.$invalid &&
    errors.push("Please enter an email address");
  vContact$.value.email.email.$invalid &&
    errors.push("Please enter a valid email address");
  return errors;
});

async function submitForm() {
  isSubmitting.value = true;
  await emailjs.send(
    "service_n1t6qo6",
    "template_764bqrq",
    templateParams.value,
    "8ifw_QPXgYXoWYmVW"
  );

  confirmSubmission();
}

async function validFlightState() {
  const valid = await vFlight$.value.$validate();
  if (valid) {
    currentStep.value = 1;
  }
}
async function validContactState() {
  const valid = await vContact$.value.$validate();

  if (valid) {
    submitForm();
  }
}

async function changeSteps() {
  const valid = await vFlight$.value.$validate();

  if (currentStep.value === 0 && valid) {
    currentStep.value = 1;
  } else if (currentStep.value === 1 && !valid) {
    currentStep.value = 0;
  } else {
    currentStep.value = 0;
  }
}

onMounted(() => {
  import("@/utils/airports.json").then((json) => {
    airports.value = json.default;
  });
});
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
          @click="changeSteps()"
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
      <EmergencyBubble />
    </div>

    <div class="form__fields">
      <template v-if="currentStep === 0">
        <div class="form__fields__wrapper">
          <div class="form__fields__wrapper__relative">
            <InputField
              v-model="flightState.origin"
              id="origin"
              label="Departure airport"
              type="search"
              placeholder="From (airport code, city...)"
              icon="flight_takeoff"
              :error="originErrors[0]"
              name="origin"
              autocomplete="off"
              @update:modelValue="handleOriginSearch"
            />

            <div
              class="search-results"
              v-if="isOriginResultsOpen && originSearchResults.length > 0"
              v-click-outside="handleCloseOriginSearchResults"
            >
              <span
                v-for="(result, i) in originSearchResults"
                class="search-results__result"
                :key="i"
                @click="handleSelectOriginResult(result)"
                ><img
                  class="search-results__result__flag"
                  :src="`/assets/flags/${result.iso_country}.svg`"
                  alt="country flag"
                />{{ result.name }}, {{ result.municipality }}</span
              >
            </div>
          </div>
          <div class="form__fields__wrapper__relative">
            <InputField
              v-model="flightState.destination"
              id="destination"
              label="Arrival airport"
              type="search"
              placeholder="To (airport code, city...)"
              icon="flight_land"
              :error="destinationErrors[0]"
              name="destination"
              autocomplete="off"
              @update:modelValue="handleDestinationSearch"
            />

            <div
              class="search-results"
              v-if="
                isDestinationResultsOpen && destinationSearchResults.length > 0
              "
              v-click-outside="handleCloseDestinationSearchResults"
            >
              <span
                v-for="(result, i) in destinationSearchResults"
                class="search-results__result"
                :key="i"
                @click="handleSelectDestinationResult(result)"
                ><img
                  class="search-results__result__flag"
                  :src="`/assets/flags/${result.iso_country}.svg`"
                  alt="country flag"
                />
                {{ result.name }}, {{ result.municipality }}
              </span>
            </div>
          </div>
        </div>
        <div class="form__fields__wrapper--row">
          <InputField
            v-model="flightState.departureDate"
            id="departureDate"
            label="Departure date"
            type="datetime-local"
            placeholder="YYYY-MM-DD"
            icon="calendar_today"
            name="departureDate"
          />

          <!-- <HourSelection v-model="flightState.departureTime" /> -->
        </div>
        <div
          class="error"
          style="margin-top: -0.5rem"
          v-if="departureDateErrors[0]"
        >
          {{ departureDateErrors[0] }}
        </div>
        <div class="form__fields__wrapper--row">
          <div class="form__fields__wrapper--row__custom-field">
            <button
              class="form__fields__wrapper--row__custom-field__button"
              :class="{
                'form__fields__wrapper--row__custom-field__button--transparent':
                  isRoundTrip,
              }"
              @click="isRoundTrip = false"
            >
              <img
                src="/assets/icons/airplanemode_active-dark.svg"
                alt="icon one way trip"
              />
              One way
            </button>
            <label class="switch" :for="`${parent}-round-trip-toggle`">
              <input
                type="checkbox"
                :id="`${parent}-round-trip-toggle`"
                v-model="isRoundTrip"
              />
              <span class="slider round"></span>
            </label>
            <button
              class="form__fields__wrapper--row__custom-field__button"
              :class="{
                'form__fields__wrapper--row__custom-field__button--transparent':
                  !isRoundTrip,
              }"
              @click="isRoundTrip = true"
            >
              <img
                src="/assets/icons/connecting_airports.svg"
                alt="icon one way trip"
              />
              Round trip
            </button>
          </div>
          <div class="passengers-field">
            <label for="number" class="sr-only">Number of passengers</label>
            <span class="passengers-field__span" style="cursor: default">
              <img
                class="passengers-field__icon"
                src="/assets/icons/group_add-dark.svg"
                alt="icon number of passengers"
              />
              Passengers
            </span>
            <InputField
              v-model="flightState.passengers"
              class="passengers"
              id="passengers"
              label="Passengers"
              type="number"
              placeholder="1"
              name="passengers"
            />
          </div>
        </div>
        <div class="error" v-if="passengersErrors[0]">
          {{ passengersErrors[0] }}
        </div>
        <div class="form__fields__wrapper--row" v-if="isRoundTrip">
          <InputField
            v-model="flightState.returnDate"
            id="returnDate"
            label="Return date"
            type="datetime-local"
            placeholder="YYYY-MM-DD"
            icon="calendar_tomorrow"
            name="returnDate"
          />
          <!-- <HourSelection v-model="flightState.returnTime" /> -->
        </div>
        <div
          class="error"
          style="margin-top: -0.5rem"
          v-if="returnDateErrors[0]"
        >
          {{ returnDateErrors[0] }}
        </div>
        <Transition>
          <button
            class="form__fields__button button-primary--dark"
            @click="validFlightState()"
          >
            Next step
          </button>
        </Transition>
      </template>
      <template v-else-if="currentStep === 1">
        <div class="form__fields__wrapper--row">
          <InputField
            v-model="contactState.firstName"
            id="firstName"
            label="First name"
            placeholder="John, Mary Jane"
            name="firstName"
          />
          <InputField
            v-model="contactState.lastName"
            id="lastName"
            label="Last name"
            placeholder="Doe"
            name="lastName"
          />
        </div>
        <div
          class="error"
          style="margin-top: -0.5rem"
          v-if="firstNameAndLastNameErrors[0]"
        >
          {{ firstNameAndLastNameErrors[0] }}
        </div>
        <div class="form__fields__wrapper__not-relative">
          <InputField
            v-model="contactState.email"
            id="email"
            label="Email"
            placeholder="emailadress@domain.com"
            type="email"
            name="email"
            :error="emailErrors[0]"
          />
        </div>
        <div class="form__fields__wrapper--row">
          <div class="phone-codes">
            <span
              class="phone-codes__selected"
              :class="{
                'phone-codes__selected--active':
                  phoneCodesListIsOpen && phoneCodesSearchResults.length > 0,
              }"
              @click="phoneCodesListIsOpen = !phoneCodesListIsOpen"
              ><img
                class="phone-codes__selected__flag"
                :src="`/assets/flags/${selectedPhoneCode.abbreviation}.svg`"
                alt="country flag"
                v-if="!phoneCodesListIsOpen" />
              <span v-if="!phoneCodesListIsOpen">{{
                selectedPhoneCode.code
              }}</span>
              <input
                class="phone-codes__selected__search-input"
                type="search"
                autofocus
                placeholder="Country"
                v-model="phoneCodeQuery"
                v-if="phoneCodesListIsOpen"
                @click.stop /><img
                class="phone-codes__selected__arrow"
                :class="{
                  'phone-codes__selected__arrow--up': phoneCodesListIsOpen,
                }"
                :src="`/assets/icons/arrow_scroll_dark.svg`"
                alt="arrow icon"
            /></span>

            <Transition>
              <div class="phone-codes__list" v-if="phoneCodesListIsOpen">
                <span
                  class="phone-codes__list__element disabled"
                  v-if="
                    phoneCodesListIsOpen && phoneCodesSearchResults.length === 0
                  "
                  >No country found</span
                >
                <span
                  class="phone-codes__list__element"
                  v-for="(element, i) in phoneCodesSearchResults"
                  :key="i"
                  @click="
                    (selectedPhoneCode = element),
                      (phoneCodesListIsOpen = false)
                  "
                  ><img
                    class="phone-codes__list__element__flag"
                    :src="`/assets/flags/${element.abbreviation}.svg`"
                    alt="country flag"
                  />{{ element.country }}</span
                >
              </div></Transition
            >
          </div>

          <InputField
            v-model="contactState.phoneNumber"
            id="phoneNumber"
            label="Phone"
            placeholder="(000) 000-000, 00 00 00 00 00"
            type="tel"
            name="phoneNumber"
          />
        </div>
        <div
          class="error"
          style="margin-top: -0.5rem"
          v-if="phoneNumberErrors[0]"
        >
          {{ phoneNumberErrors[0] }}
        </div>

        <InputField
          v-model="contactState.info"
          id="info"
          label="Additional information"
          placeholder="Flexible schedule, pets, special luggages, others information..."
          :required="false"
          name="info"
        />

        <button
          class="form__fields__button button-primary--dark"
          @click="validContactState()"
          v-if="!wasSent"
        >
          <span>Request a quote</span
          ><Transition
            ><img
              class="spinning"
              src="/assets/icons/loader.svg"
              v-if="isSubmitting"
              alt="loading icon"
          /></Transition>
        </button>
        <button
          class="form__fields__button form__fields__button--sent button-primary--dark"
          v-if="wasSent"
        >
          <span>Thank you !</span
          ><Transition
            ><img src="/assets/icons/check_small_light.svg" alt="check icon"
          /></Transition>
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
        color: $text-color;
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
          font-size: $small-text;
          font-weight: $skinny;
          height: 24px;
          width: 24px;
          padding-top: 0.1rem;
          border-radius: 50%;
          align-items: center;
          justify-content: center;
          color: $text-color;
          border: 2px solid $text-color;
          z-index: 1;
          transition:
            background-color 0.4s ease,
            color 0.4s ease;

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

    &__wrapper {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 1rem;
      width: 100%;
      justify-content: space-between;

      &__relative {
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

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
      &__not-relative {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }

      &--row {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        width: 100%;
        justify-content: space-between;
        align-items: center;

        &__custom-field {
          display: flex;
          gap: 1rem;
          align-items: center;
          border-radius: $radius;
          width: fit-content;

          @media (min-width: $big-tablet-screen) {
            width: calc(50% - 0.5rem);
          }

          &__button {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-size: $small-text;
            font-weight: $skinny;
            color: $text-color;
            white-space: nowrap;
            transition: opacity 0.4s ease;
            cursor: pointer;
            border-bottom: $text-color 2px solid;
            padding-bottom: 2px;
            padding-top: 1rem;
            margin-top: -1rem;
            border-radius: 0 !important;

            &--transparent {
              opacity: 0.5;
              border-color: transparent;
            }

            & img {
              width: 1rem;
              height: 1rem;
            }
          }

          &__icon {
            width: 1.2rem;
            height: 1.2rem;
          }

          .switch {
            position: relative;
            width: 60px;
            height: 34px;
            border-radius: $radius;
            box-shadow: $shadow;
            display: none;

            @media (min-width: $big-tablet-screen) {
              display: inline-block;
            }

            input {
              opacity: 0;
              width: 0;
              height: 0;
            }
          }

          /* Hide default HTML checkbox */
          // .switch input {
          //   opacity: 0;
          //   width: 0;
          //   height: 0;
          // }

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

            &:before {
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

        .passengers-field {
          display: flex;
          gap: 0.5rem;

          &__span {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-size: $small-text;
            font-weight: $skinny;
          }

          &__icon {
            width: 1.2rem;
            height: 1.2rem;
          }
        }

        .phone-codes {
          display: flex;
          flex-direction: column;
          position: relative;
          width: 140px;
          min-width: 140px;
          max-width: 140px;

          &__selected {
            display: flex;
            gap: 0.5rem;
            align-items: center;
            background-color: $primary-color;
            padding: 0.5rem 0.75rem;
            height: 40px;
            border-radius: $radius;
            font-size: 1rem;
            font-weight: $skinny;
            cursor: pointer;
            width: 140px;
            min-width: 140px;
            max-width: 140px;

            &--active {
              border-bottom-left-radius: 0;
              border-bottom-right-radius: 0;
            }

            &__flag {
              width: 1rem;
              height: 1rem;
            }

            &__arrow {
              width: 0.75rem;
              height: 0.75rem;
              margin-left: auto;
              transition: transform 0.4s;
              opacity: 0.6;

              &--up {
                transform: rotate(180deg);
              }
            }

            &__search-input {
              width: 100%;
              outline: none;
              border: none;
              font-family: "Custom";

              &:focus {
                outline: none;
              }
              &::placeholder {
                font-family: "Custom";
                color: $text-color-faded;
              }
            }
          }
          &__list {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 1.75rem;
            left: 0;
            padding: 0.25rem;
            width: 140px;
            min-width: 140px;
            max-width: 140px;
            background-color: $primary-color;
            border-radius: 0 0 $radius $radius;
            box-shadow: $shadow;
            z-index: 1;
            gap: 0.5rem;
            overflow-y: scroll;
            overflow-x: hidden;
            max-height: 110px;

            &__element {
              display: flex;
              gap: 0.5rem;
              padding: 0.5rem;
              cursor: pointer;
              align-items: center;
              font-size: $small-text;
              font-weight: $skinny;
              border-radius: $radius;
              transition: background-color 0.3s linear;

              &:hover {
                background-color: $text-color-faded;
                border-radius: $radius;
              }

              &__flag {
                width: 1rem;
                height: 1rem;
              }
            }
          }
        }
      }
    }

    &__button {
      width: 100%;
      gap: 1rem;

      &--sent {
        background-color: green;
      }

      & img {
        width: 1.2rem;
        height: 1.2rem;
      }
    }
  }

  &__thanks {
    color: $text-color;
    font-size: 1rem;
    font-weight: $skinny;
    padding: 0.5rem 0 0 0.5rem;
    display: flex;
    background-color: rgba(0, 255, 0, 0.2);
    padding: 4px 8px;
    border-radius: $radius;
    margin-top: -1rem;
    width: fit-content;
  }
}

.error {
  color: $error-color;
  font-size: $small-text;
  font-weight: $skinny;
  display: flex;
  border: $error-color 1px solid;
  background-color: rgba(255, 0, 0, 0.2);
  padding: 0.25rem 0.5rem;
  line-height: 1rem;
  border-radius: $radius;
  width: fit-content;

  &:nth-of-type(2) {
    margin-top: 0rem;
  }
}

.spinning {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
