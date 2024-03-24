<script setup>
import { ref } from "vue";

const currentStep = ref(0);

const form = [
  {
    label: "Flight details",
    children: [
      {
        label: "Departure airport",
        type: "text",
        placeholder: "From",
        icon: "flight-takeoff",
        required: true,
        short: true,
      },
      {
        label: "Arrival airport",
        type: "text",
        icon: "flight-land",
        placeholder: "To",
        required: true,
        short: true,
      },
      {
        label: "Departure date",
        type: "date",
        icon: "calendar",
        placeholder: "YYYY-MM-DD",
        required: true,
        short: true,
      },
      {
        label: "Return date",
        type: "date",
        icon: "calendar",
        placeholder: "YYYY-MM-DD",
        required: true,
        short: true,
      },
    ],
    button: "Next",
  },
  {
    label: "Contact information",
    button: "Validate",
    children: [
      {
        label: "First name",
        type: "text",
        placeholder: "John",
        required: true,
        short: true,
      },
      {
        label: "Last name",
        type: "text",
        placeholder: "Doe",
        required: true,
        short: true,
      },
      {
        label: "Email",
        type: "email",
        placeholder: "emailadress@domain.com",
        required: true,
        short: false,
      },
      {
        label: "Phone number",
        type: "tel",
        placeholder: "(000) 000 - 00*",
        required: true,
        short: false,
      },
      {
        label: "Additional information",
        type: "text",
        placeholder: "Tell us more about your request...",
        required: false,
        short: false,
      },
    ],
  },
];
</script>
<template>
  <form class="form">
    <div class="form__steps">
      <div class="form__steps__step" v-for="(step, i) in form" :key="i">
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
            >{{ i + 1 }}</span
          >{{ step.label }}
          <div class="form__steps__step__label__corner-left"></div>
          <div class="form__steps__step__label__corner-right"></div>
        </h3>
      </div>
    </div>

    <div class="form__fields">
      <div class="form__fields__custom-field" v-if="currentStep === 0">
        <span
          ><img
            src="/assets/icons/airplanemode_active-dark.svg"
            alt="icon one way trip"
          />One way</span
        >
        <label class="switch">
          <input type="checkbox" />
          <span class="slider round"></span>
        </label>
        <span
          ><img
            src="/assets/icons/connecting_airports.svg"
            alt="icon one way trip"
          />Round trip</span
        >
      </div>
      <div class="form__fields__custom-field" v-if="currentStep === 0">
        <label for="number" class="sr-only">Number of passengers</label>
        <span>
          <img
            class="form__fields__custom-field__icon"
            src="/assets/icons/group_add-dark.svg"
            alt="icon number of passengers"
          />
          Passengers</span
        >
        <input
          class="form__fields__custom-field__input"
          id="number"
          type="number"
          inputmode="numeric"
          max="99"
          value="1"
          placeholder="1"
        />
      </div>
      <div
        class="form__fields__field"
        :class="{ 'form__fields__field--short': child.short }"
        v-for="(child, j) in form[currentStep].children"
        :key="j"
      >
        <label class="form__fields__field__label sr-only" :for="child.label">{{
          child.label
        }}</label>
        <img
          class="form__fields__field__icon"
          v-if="child.icon"
          :src="`/assets/icons/${child.icon}.svg`"
          :alt="`icon ${child.label}`"
        />
        <input
          :id="child.label"
          class="form__fields__field__input"
          :type="child.type"
          :placeholder="child.placeholder"
          autocomplete="true"
          :required="child.required"
          :autofocus="{ true: j === 0 }"
          :aria-label="child.label"
          :aria-labelledby="child.label"
          :title="child.label"
          :aria-placeholder="child.placeholder"
        />
      </div>
      <button
        class="form__fields__button button-primary"
        @click="currentStep++"
      >
        {{ form[currentStep].button }}
      </button>
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
  overflow-x: hidden;

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
    flex-wrap: wrap;
    gap: 1rem;
    padding: 1rem;
    border-radius: 0 $radius $radius $radius;
    background-color: $base-color;

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

      &:nth-of-type(2) {
        & input {
          width: 40px;
          padding-left: 0.5rem;
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

    &__field {
      display: flex;
      gap: 0.5rem;
      width: 100%;
      align-items: center;
      background-color: $primary-color;
      border-radius: $radius;
      padding-left: 0.75rem;

      &--short {
        width: calc(50% - 0.5rem);
      }

      &__label {
        font-size: $small-text;
        font-weight: $skinny;
        white-space: nowrap;
        width: fit-content;
        margin-left: 0.75rem;
      }

      &__icon {
        width: 1rem;
        height: 1rem;
      }
    }

    &__button {
      width: 100%;
    }
  }
}

input {
  font-size: 1rem;
  padding: 0.65rem 0;
  padding-top: 0.75rem;
  border: none;
  color: $text-color;
  background-color: $primary-color;
  box-shadow: $shadow;
  width: 100%;

  &::placeholder {
    color: $text-color-faded;
    font-size: 1rem;
    font-weight: $skinny;
  }
}
</style>
