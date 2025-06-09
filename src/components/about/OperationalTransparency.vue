<script setup lang="ts">
const list = [
  "Upfront Pricing – No hidden costs, just clear and competitive rates.",
  "Reliable Scheduling – Accurate flight itineraries and real-time updates.",
  "Fleet Safety & Compliance – Every aircraft meets strict aviation standards.",
  "Secure Payment & Contracts – Simple, straightforward agreements with full transparency.",
];
</script>
<template>
  <section class="operational-transparency">
    <h2 class="titles">Operational Transparency</h2>
    <p class="paragraphs">
      We believe that clarity and trust are the foundation of a great private
      jet experience. <br />That’s why we prioritize:
    </p>
    <hr class="operational-transparency__separator" />
    <ul class="operational-transparency__list">
      <li
        class="operational-transparency__list__element"
        v-for="(element, index) in list"
        :key="element"
      >
        <span class="operational-transparency__list__element__number"
          >0{{ index + 1 }}</span
        >{{ element }}
      </li>
    </ul>
  </section>
</template>
<style lang="scss" scoped>
.operational-transparency {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: $text-color-alt;
  padding: 2rem 1rem;
  background-image: url("@/assets/images/operations/operational-transparency.webp");
  background-size: cover;
  background-position: center;

  @media (min-width: $big-tablet-screen) {
    gap: 2rem;
    padding: 4rem;
  }

  @media (min-width: $desktop-screen) {
    padding: 8rem 4rem;
  }

  &__separator,
  .paragraphs {
    max-width: 800px;
    color: $text-color-alt;
  }

  &__list {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    list-style-type: none;
    margin-top: 2rem;

    @media (min-width: $big-tablet-screen) {
      grid-template-columns: 1fr 1fr;
    }

    &__element {
      display: flex;
      align-items: center;
      gap: 1rem;
      max-width: 500px;

      &__number {
        font-weight: $thick;
        font-size: $titles;
      }
    }
  }
}
</style>
