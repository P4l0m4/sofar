<script setup>
import { ref } from "vue";
const label = ref("Get in touch with our team");
function copyToClipboard() {
  navigator.clipboard.writeText("hq@flysofar.com");
  label.value = "Email copied to clipboard!";
  setTimeout(() => {
    label.value = "Get in touch with our team";
  }, 1000);
}
</script>
<template>
  <section class="any-question">
    <h2 class="titles">Any question ?</h2>
    <a
      class="button-primary--light"
      href="mailto:hq@flysofar.com"
      @click="copyToClipboard()"
      >{{ label }}</a
    >
  </section>
</template>
<style lang="scss" scoped>
.any-question {
  // padding: 2rem 1rem;
  gap: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: $text-color;

  @media (min-width: $big-tablet-screen) {
    padding: 4rem 2rem;
    gap: 2rem;
    flex-direction: row;
  }

  & h2 {
    color: $text-color-alt;
  }

  & .button-primary--light {
    width: 100%;

    @media (min-width: $big-tablet-screen) {
      width: fit-content;
    }
  }
}
</style>
