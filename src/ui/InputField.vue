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
}

const props = withDefaults(defineProps<Props>(), {
  type: "text",
  required: true,
  autofocus: false,
});

const model = defineModel<string>();
</script>
<template>
  <div class="input-field">
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
      :id="id"
      class="input-field__input"
      :type="type"
      :placeholder="placeholder"
      autocomplete="true"
      :required="required"
      :autofocus="autofocus"
      :aria-label="label"
      :aria-labelledby="label"
      :title="label"
      :aria-placeholder="placeholder"
    />
    <span class="input-field__date" v-if="type === 'date'"
      >{{ label }}: {{ dayjs(model).format("MMMM DD, YYYY") }}</span
    >
  </div>
</template>
<style lang="scss" scoped>
.input-field {
  display: flex;
  gap: 0.5rem;
  width: 100%;
  min-width: 300px;
  align-items: center;
  background-color: $primary-color;
  border-radius: $radius;
  padding: 0 0.75rem;
  box-shadow: $shadow;
  overflow: hidden;

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
    }
  }

  &__date {
    width: 100%;
    margin-left: -0.5rem;
    font-size: 1rem;
    padding: 0.65rem 0;
    font-weight: $skinny;
    color: $text-color;
    caret-color: $text-color;

    &:focus {
      outline: none;
      border: none;
    }
  }
}
</style>
