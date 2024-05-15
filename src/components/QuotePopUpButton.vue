<script setup lang="ts">
import { ref } from "vue";

const showQuoteForm = ref(false);
interface Props {
  style?: string;
  label?: string;
  primary?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  style: "dark",
  label: "Request a quote",
  primary: false,
});

function closePopUp() {
  showQuoteForm.value = false;
}
</script>
<template>
  <button
    v-if="props.primary && props.style === 'light'"
    class="button-primary--light"
    @click="showQuoteForm = !showQuoteForm"
    @click.prevent
  >
    {{ props.label }}
  </button>
  <button
    v-if="props.primary && props.style === 'dark'"
    class="button-primary--dark"
    @click="showQuoteForm = !showQuoteForm"
    @click.prevent
  >
    {{ props.label }}
  </button>
  <button
    v-if="!props.primary && props.style === 'light'"
    class="button-secondary--light"
    @click="showQuoteForm = !showQuoteForm"
    @click.prevent
  >
    {{ props.label }}
  </button>
  <button
    v-if="!props.primary && props.style === 'dark'"
    class="button-secondary--dark"
    @click="showQuoteForm = !showQuoteForm"
    @click.prevent
  >
    {{ props.label }}
  </button>
  <Teleport to="body">
    <div
      class="pop-up-form"
      v-if="showQuoteForm"
      @click="showQuoteForm = false"
    >
      <QuoteForm
        parent="quote-popup"
        @click.stop
        @form-submitted="closePopUp()"
      /></div
  ></Teleport>
</template>
<style lang="scss" scoped>
.pop-up-form {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  inset: 0;
  background-color: $text-color-faded;
  backdrop-filter: blur($blur);
  z-index: 3;
  width: 100vw;
  height: 100svh;
  padding: 1rem;

  &:hover {
    cursor: url("/assets/icons/add.svg");
  }
}

.button-secondary--light,
.button-secondary--dark,
.button-primary--light,
.button-primary--dark {
  @media (min-width: $big-tablet-screen) {
    width: fit-content;
  }
}
</style>
