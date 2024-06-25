<script setup lang="ts">
useHead({
  title: "Private Jet Frequently Asked Questions | Sofar",
  meta: [
    {
      name: "description",
      content:
        "Find the answers to your questions about Sofar's private jet services. You'll find information on reservations, services, rates and much more in our FAQ section.",
    },
  ],
});
</script>
<template>
  <Container>
    <h1 class="titles">About us</h1>
    <AboutFAQ />
  </Container>
  <section class="standard-spacing centered-content">
    <h2 class="titles">Book your next flight with us!</h2>
    <QuotePopUpButton :primary="true" />
  </section>
</template>
