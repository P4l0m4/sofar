<script setup>
import { ref } from "vue";

const currentStep = ref(0);

const form = [
  {
    label: "Flight details",
    children: [],
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
      },
      {
        label: "Last name",
        type: "text",
        placeholder: "Doe",
        required: true,
      },
      {
        label: "Email",
        type: "email",
        placeholder: "emailadress@domain.com",
        required: true,
      },
      {
        label: "Phone number",
        type: "tel",
        placeholder: "(000) 000 - 00*",
        required: true,
      },
      {
        label: "Additional information",
        type: "text",
        placeholder: "Tell us more about your request...",
        required: false,
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
            >{{ i }}</span
          >{{ step.label }}
          <div class="form__steps__step__label__corner-left"></div>
          <div class="form__steps__step__label__corner-right"></div>
        </h3>
      </div>
    </div>
    <div class="form__fields">
      <div
        class="form__fields__field"
        v-for="(child, j) in form[currentStep].children"
        :key="j"
      >
        <label class="form__fields__field__label" :for="child.label">{{
          child.label
        }}</label>
        <input
          class="form__fields__field__input"
          :type="child.type"
          :placeholder="child.placeholder"
          autocomplete="true"
          :required="child.required"
          :autofocus="{ true: j === 0 }"
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
    // flex-direction: column;
    flex-wrap: wrap;
    gap: 1rem;
    padding: 1rem;
    border-radius: 0 $radius $radius $radius;
    background-color: $base-color;

    &__field {
      display: flex;
      gap: 0.5rem;
      flex-direction: column;
      width: 100%;

      &:nth-of-type(1),
      &:nth-of-type(2) {
        width: calc(50% - 0.5rem);
      }

      &__label {
        font-size: $small-text;
        font-weight: $skinny;
        white-space: nowrap;
        width: fit-content;
        margin-left: 0.75rem;
      }

      & input,
      & textarea {
        font-size: $small-text;
        padding: 0.65rem 0.75rem;
        padding-top: 0.75rem;
        border-radius: $radius;
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

      & textarea {
        min-height: 200px;
      }
    }

    &__button {
      width: 100%;
    }
  }
}
</style>
