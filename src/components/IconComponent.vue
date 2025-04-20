<script setup lang="ts">
interface Props {
  icon: string;
  color?: string;
  size?: string;
}

withDefaults(defineProps<Props>(), {
  size: "1rem",
});
</script>

<template>
  <span class="icon" :style="{ color, fontSize: size }">{{ icon }}</span>
</template>
<style scoped>
@font-face {
  font-family: "sofar-icons";
  /* src: url("@/assets/fonts/icomoon.woff?tskar8") format("woff"); */
  src: url("@/assets/fonts/icomoon.eot?xyz");
  src:
    url("@/assets/fonts/icomoon.eot?xyz#iefix") format("embedded-opentype"),
    url("@/assets/fonts/icomoon.woff?tskar8") format("woff"),
    url("@/assets/fonts/icomoon.woff2?xyz") format("woff2"),
    url("@/assets/fonts/icomoon.ttf?xyz") format("truetype"),
    url("@/assets/fonts/icomoon.svg?xyz#icomoon") format("svg");
  font-weight: normal;
  font-style: normal;
  font-display: block;
}

.icon {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: "sofar-icons" !important;
  speak: never;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  /* Enable Ligatures ================ */
  letter-spacing: 0;
  -webkit-font-feature-settings: "liga";
  -moz-font-feature-settings: "liga=1";
  -moz-font-feature-settings: "liga";
  -ms-font-feature-settings: "liga" 1;
  font-feature-settings: "liga";
  -webkit-font-variant-ligatures: discretionary-ligatures;
  font-variant-ligatures: discretionary-ligatures;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
