<script setup lang="ts">
const props = defineProps({
  menuItems: Array,
});
</script>
<template>
  <footer class="footer">
    <img
      class="footer__logo"
      src="@/assets/images/logo-light.svg"
      alt="sofar logo"
    />
    <div class="footer__links" v-for="item in menuItems">
      <NuxtLink class="footer__links__title subtitles" :to="item.link">{{
        item.label
      }}</NuxtLink>
      <NuxtLink
        class="footer__links__elements"
        :to="link.link"
        v-for="link in item.children"
        >{{ link.label }}</NuxtLink
      >
    </div>
  </footer>
</template>
<style lang="scss" scoped>
.footer {
  display: flex;
  justify-content: center;
  padding: 2rem 1rem;
  background-color: $text-color;
  gap: 2rem;
  flex-direction: column;

  @media (min-width: $big-tablet-screen) {
    flex-direction: row;
    padding: 4rem 2rem;
  }

  &__logo {
    width: 100px;

    @media (min-width: $big-tablet-screen) {
      width: 300px;
      transform: rotate(-90deg);
    }
  }

  &__links {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    &__title {
      color: $base-color;
    }

    &__elements {
      color: $base-color;
      font-size: $small-text;
      font-weight: $skinny;
    }
  }
}
</style>
