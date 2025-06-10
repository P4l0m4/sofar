<script setup lang="ts">
interface Props {
  title: string;
  subtitle: string;
  list: string[];
  image?: string;
}
withDefaults(defineProps<Props>(), {
  title: "Customer Service",
  subtitle:
    " Our dedicated customer service team is available around the clock to ensure that every aspect of your flight is managed with precision.",
  list: () => [
    "No Hidden Fees - Transparent pricing with no last-minute surprises.",
    "Personalized Travel Experiences - Flights tailored to your schedule and preferences.",
    "Loyalty & Exclusive Benefits - Special perks for repeat clients and VIP travelers.",
    "Confidentiality & Discretion - Your privacy is our priority.",
  ],
});
</script>
<template>
  <section
    class="customer-service"
    :style="{ backgroundImage: `url(${image})` }"
  >
    <h2 class="titles">{{ title }}</h2>
    <p class="paragraphs">
      {{ subtitle }}
    </p>
    <ul class="customer-service__list">
      <li v-for="element in list" :key="element">{{ element }}</li>
    </ul>
  </section>
</template>
<style lang="scss" scoped>
.customer-service {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  color: $text-color-alt;
  padding: 2rem 1rem;
  background-color: $secondary-color;
  background-size: cover;
  background-position: center;
  min-height: 100svh;

  @media (min-width: $big-tablet-screen) {
    gap: 2rem;
    padding: 4rem;
  }

  @media (min-width: $desktop-screen) {
    padding: 8rem 4rem;
  }

  .paragraphs {
    max-width: 800px;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    list-style-type: disc;
    list-style-position: inside;
    margin-top: 2rem;
  }
}
</style>
