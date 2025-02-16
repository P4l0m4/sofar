import { defineNuxtPlugin } from "#app";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import "@/styles/datepicker.css";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("VueDatePicker", VueDatePicker);
});
