<script setup lang="ts">
useHead({
  title: "About us | Sofar",
  meta: [
    {
      name: "description",
      content:
        "Sofar is a private jet charter company that offers premium private jet charter services at unbeatable prices. Whether you're flying for business or pleasure, our team of experts will ensure that your journey is smooth, comfortable, and stress-free. Contact us today to learn more about our private jet charter services.",
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
