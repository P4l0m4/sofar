<script setup lang="ts">
import { ref } from "vue";

const rangeIsOpenRef = ref(false);
const model = defineModel<string | number>();
const hours = computed(() => {
  return Math.floor(model.value).toString().padStart(2, "0");
});

const minutes = computed(() => {
  const mins = Math.round((model.value - Math.floor(model.value)) * 60);
  return mins.toString().padStart(2, "0");
});
const formattedTime = computed(() => {
  return `${hours.value}:${minutes.value}`;
});
const isPM = computed(() => {
  return model.value >= 12;
});
</script>
<template>
  <div
    class="hour-selection"
    :class="{ 'hour-selection--active': rangeIsOpenRef }"
  >
    <span
      class="hour-selection__selected"
      @click="rangeIsOpenRef = !rangeIsOpenRef"
    >
      {{ formattedTime }} <span>{{ isPM ? "PM" : "AM" }}</span>
      <img
        class="hour-selection__selected__arrow"
        :class="{
          'hour-selection__selected__arrow--up': rangeIsOpenRef,
        }"
        :src="`assets/icons/arrow_scroll_dark.svg`"
        alt="arrow icon"
    /></span>
    <Transition>
      <div
        class="hour-selection__field"
        v-if="rangeIsOpenRef"
        @onmouseleave="rangeIsOpenRef = false"
      >
        <img src="/assets/icons/light_mode.svg" alt="icon" />
        <input
          type="range"
          step="0.5"
          min="0.0"
          max="23.30"
          value="9.0"
          v-model="model"
        /><img src="/assets/icons/bedtime.svg" alt="icon" /></div
    ></Transition>
  </div>
</template>
<style scoped lang="scss">
.hour-selection {
  display: flex;
  position: relative;
  width: 116px;
  max-width: 116px;
  min-width: 116px;
  justify-content: center;
  background-color: $primary-color;
  border-radius: $radius;

  &--active {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  &__selected {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    padding: 0.5rem 0.75rem;
    height: 40px;
    font-size: 1rem;
    font-weight: $skinny;
    cursor: pointer;
    width: 100%;

    span {
      font-size: $small-text;
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
  }

  &__field {
    background-color: $primary-color;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
    height: 140px;
    width: 116px;
    max-width: 116px;
    min-width: 116px;
    position: absolute;
    top: 1.7rem;
    z-index: 1;
    padding: 0.5rem 0;
    border-radius: 0 0 $radius $radius;
    box-shadow: $shadow;

    input[type="range"] {
      transform: rotate(90deg);
      width: 80px;
      height: 46px;
      -webkit-appearance: none;
      background-color: $base-color;
      box-shadow: inset $shadow;
      outline: none;
      border: none;

      &::-webkit-slider-thumb {
        width: 26px;
        -webkit-appearance: none;
        height: 40px;
        border-radius: $radius;
        cursor: grab;
        background: $text-color;
      }
      /** FF*/
      &::-moz-range-progress {
        background-color: $base-color;
      }
      &::-moz-range-track {
        background-color: $text-color;
      }
      /* IE*/
      &::-ms-fill-lower {
        background-color: $base-color;
      }
      &::-ms-fill-upper {
        background-color: $text-color;
      }
    }
  }
}
</style>
