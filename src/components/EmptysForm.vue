<script setup>
import { ref, reactive, onMounted } from "vue";
import { useVuelidate } from "@vuelidate/core";
import emailjs from "@emailjs/browser";
import { required, minLength, maxLength, email } from "@vuelidate/validators";

const isSubmitting = ref(false);
const wasSent = ref(false);

const emptyState = reactive({
  firstName: "",
  lastName: "",
  email: "",
});

const emptyRules = {
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

  email: {
    required,
    email,
  },
};

const vEmpty$ = useVuelidate(emptyRules, emptyState);

const firstNameErrors = computed(() => {
  const errors = [];
  if (!vEmpty$.value.firstName.$dirty) return errors;
  vEmpty$.value.firstName.required.$invalid &&
    errors.push("Please enter your first name");
  vEmpty$.value.firstName.minLength.$invalid &&
    errors.push("Your first name is too short (min 2 characters)");
  vEmpty$.value.firstName.maxLength.$invalid &&
    errors.push("Your first name is too long (max 30 characters)");

  return errors;
});
const lastNameErrors = computed(() => {
  const errors = [];
  if (!vEmpty$.value.lastName.$dirty) return errors;

  vEmpty$.value.lastName.required.$invalid &&
    errors.push("Please enter your last name");
  vEmpty$.value.lastName.minLength.$invalid &&
    errors.push("Your last name is too short (min 2 characters)");
  vEmpty$.value.lastName.maxLength.$invalid &&
    errors.push("Your last name is too long (max 30 characters)");
  return errors;
});

const emailErrors = computed(() => {
  const errors = [];
  if (!vEmpty$.value.email.$dirty) return errors;
  vEmpty$.value.email.required.$invalid &&
    errors.push("Please enter an email address");
  vEmpty$.value.email.email.$invalid &&
    errors.push("Please enter a valid email address");
  return errors;
});

const templateParams = computed(() => ({
  firstName: emptyState.firstName,
  lastName: emptyState.lastName,
  email: emptyState.email,
}));

function confirmSubmission() {
  isSubmitting.value = false;
  wasSent.value = true;
  vEmpty$.value.$reset();
  emptyState.firstName = "";
  emptyState.lastName = "";
  emptyState.email = "";
  setTimeout(() => {
    wasSent.value = false;
  }, 1400);
}

async function submitForm() {
  isSubmitting.value = true;
  await emailjs.send(
    "service_n1t6qo6",
    "template_8jkth7m",
    templateParams.value,
    "8ifw_QPXgYXoWYmVW"
  );

  confirmSubmission();
}

async function validEmptyState() {
  event.preventDefault();
  const valid = await vEmpty$.value.$validate();

  if (valid) {
    submitForm();
  }
}
</script>
<template>
  <section class="emptys-form">
    <h2 class="titles">Join Sofar Newsletter</h2>
    <form class="emptys-form__fields">
      <div class="emptys-form__fields__field">
        <InputField
          v-model="emptyState.firstName"
          id="firstName"
          label="First name"
          placeholder="John, Jane"
          name="firstName"
          :errors="firstNameErrors[0]"
        />
        <div
          class="error"
          style="margin-top: -0.5rem"
          v-if="firstNameErrors[0]"
        >
          {{ firstNameErrors[0] }}
        </div>
      </div>
      <div class="emptys-form__fields__field">
        <InputField
          v-model="emptyState.lastName"
          id="lastName"
          label="Last name"
          placeholder="Doe"
          name="lastName"
          :errors="lastNameErrors[0]"
        />
        <div class="error" style="margin-top: -0.5rem" v-if="lastNameErrors[0]">
          {{ lastNameErrors[0] }}
        </div>
      </div>
      <div class="emptys-form__fields__field">
        <InputField
          v-model="emptyState.email"
          id="email"
          label="Email"
          placeholder="youremail@gmail.com"
          name="email"
          :errors="emailErrors[0]"
        />
        <div class="error" style="margin-top: -0.5rem" v-if="emailErrors[0]">
          {{ emailErrors[0] }}
        </div>
      </div>
      <button
        class="emptys-form__fields__button button-primary"
        @click="validEmptyState()"
        v-if="!wasSent"
      >
        <span>Get notified</span
        ><Transition
          ><img
            class="spinning"
            src="/assets/icons/loader.svg"
            v-if="isSubmitting"
            alt="loading icon"
        /></Transition>
      </button>
      <button
        class="emptys-form__fields__button emptys-form__fields__button--sent button-primary"
        v-if="wasSent"
      >
        <span>Thank you !</span
        ><Transition
          ><img src="/assets/icons/check_small_light.svg" alt="check icon"
        /></Transition>
      </button>
    </form>
  </section>
</template>
<style lang="scss" scoped>
.emptys-form {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  border-radius: $radius;
  background-color: $base-color;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem 1rem;

  @media (min-width: $big-tablet-screen) {
    padding: 4rem 2rem;
    gap: 2rem;
  }

  &__fields {
    display: flex;
    gap: 1rem;
    flex-direction: column;
    width: 100%;

    @media (min-width: $big-tablet-screen) {
      flex-direction: row;
      width: fit-content;
    }

    &__field {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    &__button {
      width: 100%;
      gap: 1rem;
      height: fit-content;

      &--sent {
        background-color: green;
      }

      & img {
        width: 1.2rem;
        height: 1.2rem;
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
      height: fit-content;
    }
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
}
</style>
