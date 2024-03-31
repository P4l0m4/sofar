<script setup lang="ts">
import { ref } from "vue";
import dayjs from "dayjs";
interface Props {
  id: string;
  label: string;
  placeholder: string;
  type?: string;
  icon?: string;
  required?: boolean;
  autofocus?: boolean;
  error?: string;
}

const props = withDefaults(defineProps<Props>(), {
  type: "text",
  required: true,
  autofocus: false,
});

const model = defineModel<string | number>();
const inputRef = ref<HTMLInputElement | null>(null);

function triggerDatepicker() {
  inputRef.value?.showPicker();
}

const dateAsString = computed(() => {
  if (!model.value) return "";
  return dayjs(model.value).format("MMMM DD, YYYY");
});

function changePassengers(amount: number) {
  model.value = Number(model.value) + amount;
}
</script>
<template>
  <div
    class="input-field"
    :class="{ 'input-field--passengers': type === 'number' }"
  >
    <label class="input-field__label sr-only" :for="id">
      {{ label }}
    </label>
    <img
      v-if="icon"
      class="input-field__icon"
      :src="`/assets/icons/${icon}.svg`"
      :alt="`icon ${label}`"
    />
    <input
      v-model="model"
      ref="inputRef"
      :id="id"
      class="input-field__input"
      :type="type"
      :placeholder="placeholder"
      autocomplete="true"
      :autofocus="autofocus"
      :aria-label="label"
      :aria-labelledby="label"
      :title="label"
      :aria-placeholder="placeholder"
    />

    <span
      v-if="type === 'date'"
      class="input-field__date"
      @click="triggerDatepicker()"
    >
      <span>{{ label }}:</span> {{ dateAsString }}
    </span>
    <div class="passengers-arrows" v-if="type === 'number'">
      <button
        class="passengers-arrows__button"
        :class="{
          'passengers-arrows__button--disabled': model >= 99 || model === null,
        }"
        @click="changePassengers(1)"
      >
        +
      </button>
      <button
        class="passengers-arrows__button"
        :class="{
          'passengers-arrows__button--disabled': model <= 1 || model === null,
        }"
        @click="changePassengers(-1)"
      >
        -
      </button>
    </div>
  </div>
  <div class="input-error" v-if="error">{{ error }}</div>
</template>
<style lang="scss" scoped>
.input-field {
  display: flex;
  gap: 0.5rem;
  width: 100%;
  align-items: center;
  background-color: $primary-color;
  border-radius: $radius;
  padding: 0 0.75rem;
  box-shadow: $shadow;
  overflow: hidden;

  &--passengers {
    background-color: $base-color;
    padding: 0;
    gap: 0rem;
    border-radius: 0;
    overflow: visible;
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

  input {
    font-size: 1rem;
    padding: 0.65rem 0;
    padding-top: 0.75rem;
    border: none;
    color: $text-color;
    background-color: $primary-color;
    width: 100% !important;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;

    &::placeholder {
      color: $text-color-faded;
      font-size: 1rem;
      font-weight: $skinny;
    }

    &[type="search"] {
      max-width: 100%;
    }
    &[type="date"] {
      max-width: 1px;
      position: absolute;
      top: 200px;
      opacity: 0;
    }
    &[type="number"] {
      min-width: 40px;
      max-width: 50px;
      text-align: center;
    }
  }

  &__date {
    width: 100%;
    font-size: 1rem;
    padding: 0.65rem 0;
    font-weight: $skinny;
    color: $text-color;
    caret-color: $text-color;
    cursor: pointer;

    &:focus {
      outline: none;
      border: none;
    }

    span {
      font-size: 1rem;
      font-weight: $skinny;
      color: $text-color-faded;
      white-space: nowrap;
    }
  }
}
.input-error {
  color: $error-color;
  font-size: $small-text;
  font-weight: $skinny;
  display: flex;
  background-color: rgba(255, 0, 0, 0.2);
  padding: 0.25rem 0.5rem;
  border-radius: $radius;
  width: fit-content;
}

.passengers-arrows {
  display: flex;
  gap: 0.5rem;
  flex-direction: column;

  &__button {
    width: 1rem;
    height: 1rem;
    cursor: pointer;
    border: $secondary-color 2px solid;
    background-color: $primary-color;
    color: $secondary-color;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;

    &--disabled {
      cursor: not-allowed;
      opacity: 0.5;
      pointer-events: none;
    }
  }
}
</style>
