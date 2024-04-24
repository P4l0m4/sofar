<script setup lang="ts">
import { ref } from "vue";

const showQuoteForm = ref(false);
interface Props {
  color: string;
}
const props = withDefaults(defineProps<Props>(), {
  color: "#06067c",
});

function closePopUp() {
  showQuoteForm.value = false;
}
</script>
<template>
  <button
    class="button-secondary"
    @click="showQuoteForm = !showQuoteForm"
    :style="{
      color: props.color,
      borderColor: props.color,
    }"
  >
    Request a quote
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
</style>
