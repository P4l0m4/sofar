<script setup lang="ts">
interface Props {
  color?: string;
  city: string;
}
const props = withDefaults(defineProps<Props>(), {});
</script>
<template>
  <section class="how-to-book">
    <h2 class="titles">
      How to book your private jet charter to {{ props.city }}
    </h2>
    <p class="paragraphs">
      Booking your private jet charter with Sofar is a seamless process. Request
      a quote online or directly contact our 24/7 team to discuss your
      requirements. Our aviation experts will handle the details while you focus
      on making the most of your time in {{ props.city }}.
    </p>
    <div class="how-to-book__buttons">
      <QuotePopUpButton
        label="Request a quote"
        color="#fffdfa"
        background="#06067c"
        :primary="true"
      />
      <a class="emergency-button button-secondary--dark" href="tel:+19144686800"
        >Call us</a
      >
    </div>
  </section>
</template>
<style scoped lang="scss">
.how-to-book {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem 1rem;
  text-align: center;

  @media (min-width: $big-tablet-screen) {
    padding: 4rem 2rem;
  }

  & .paragraphs {
    @media (min-width: $big-tablet-screen) {
      max-width: calc(100% - 16rem);
    }
  }

  &__buttons {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
    flex-direction: column;
    width: 100%;

    @media (min-width: $big-tablet-screen) {
      flex-direction: row;
      justify-content: center;
    }
  }
}
</style>
