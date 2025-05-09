<script setup lang="ts">
const breadcrumbs = [
  {
    name: "Home",
    url: window.location.origin,
  },
  {
    name: "About us",
    url: window.location.href,
  },
];

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

useJsonld(() => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Private Jet Frequently Asked Questions | Sofar",
  url: window.location.href,
}));
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
  <JsonldBreadcrumb :links="breadcrumbs" />
</template>
