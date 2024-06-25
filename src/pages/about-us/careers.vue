<script setup>
import { ref } from "vue";
const story = await useAsyncStoryblok("careers", { version: "published" });

useHead({
  title: "Careers at Sofar | Join Our Team",
  meta: [
    {
      name: "description",
      content:
        "Discover career opportunities at Sofar. Join our dedicated team and help us provide exceptional private jet services. Apply now and take your career to the next level.",
    },
  ],
});
const label = ref("Apply");
function copyToClipboard() {
  navigator.clipboard.writeText("people@flysofar.com");
  label.value = "Email copied to clipboard!";
  setTimeout(() => {
    label.value = "Apply";
  }, 1000);
}
</script>
<template>
  <Container>
    <div class="headlines">
      <h1 class="titles">Careers</h1>
      <p class="paragraphs">
        At Sofar, we are always looking for talented individuals to join our
        team. If you are passionate about aviation and are looking for a
        rewarding career in the private jet charter industry, we would love to
        hear from you.
      </p>
    </div>
    <div class="positions">
      <div
        class="positions__position"
        v-for="position in story.content.positions"
        :key="position._uid"
      >
        <h2 class="subtitles">{{ position.title }}</h2>
        <p class="paragraphs">{{ position.description }}</p>
      </div>
    </div>
  </Container>
  <section class="standard-spacing centered-content">
    <h2 class="titles">Interested by our opportunities ?</h2>
    <a
      class="button-primary--dark"
      href="mailto:hq@flysofar.com"
      style="margin-top: auto"
      @click="copyToClipboard()"
      >{{ label }}</a
    >
  </section>
</template>
<style lang="scss" scoped>
.headlines {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.positions {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(343px, 1fr));
  gap: 2rem;

  &__position {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: $primary-color;
    border-radius: $radius;
    padding: 1rem;
  }
}
</style>
