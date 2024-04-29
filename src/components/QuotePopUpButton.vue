<script setup lang="ts">
import { ref } from "vue";

const showQuoteForm = ref(false);
interface Props {
  color?: string;
  label?: string;
  primary?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  color: "#06067c",
  label: "Request a quote",
  primary: false,
});

function closePopUp() {
  showQuoteForm.value = false;
}
</script>
<template>
  <button
    v-if="props.primary"
    class="button-primary"
    @click="showQuoteForm = !showQuoteForm"
    @click.prevent
    :style="{
      backgroundColor: props.color,
      borderColor: props.color,
      color: '#04045c',
    }"
  >
    {{ props.label }}
  </button>
  <button
    v-if="!props.primary"
    class="button-secondary"
    @click="showQuoteForm = !showQuoteForm"
    @click.prevent
    :style="{
      color: props.color,
      borderColor: props.color,
    }"
  >
    {{ props.label }}
  </button>
  <div class="pop-up-form" v-if="showQuoteForm" @click="showQuoteForm = false">
    <QuoteForm
      parent="quote-popup"
      @click.stop
      @form-submitted="closePopUp()"
    />
  </div>
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

.button-secondary {
  border-color: $primary-color;
  color: $text-color-alt;
  @media (min-width: $big-tablet-screen) {
    width: fit-content;
  }
}

.button-primary {
  @media (min-width: $big-tablet-screen) {
    width: fit-content;
  }
}
</style>
