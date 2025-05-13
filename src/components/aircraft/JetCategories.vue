<script setup lang="ts">
import jet1 from "@/assets/images/aircraft/lightjet-sofar.svg";
import jet2 from "@/assets/images/aircraft/midsize-jet-sofar.svg";
import jet3 from "@/assets/images/aircraft/super-midsize-jet-sofar.svg";
import jet4 from "@/assets/images/aircraft/heavy-jet-sofar.svg";
import jet5 from "@/assets/images/aircraft/ultra-long-haul-jet.svg";

const jets = [
  {
    name: "LIGHT JETS",
    image: jet1,
    alt: "light jets",
    path: "/aircraft/light-jets",
  },
  {
    name: "MIDSIZE JETS",
    image: jet2,
    alt: "midsize jets",
    path: "/aircraft/midsize-jets",
  },
  {
    name: "SUPER MIDSIZE JETS",
    image: jet3,
    alt: "super midsize jets",
    path: "/aircraft/super-midsize-jets",
  },
  {
    name: "HEAVY JETS",
    image: jet4,
    alt: "heavy jets",
    path: "/aircraft/heavy-jets",
  },
  {
    name: "ULTRA LONG HAUL JETS",
    image: jet5,
    alt: "ultra long haul jets",
    path: "/aircraft/ultra-long-haul-jets",
  },
];
</script>
<template>
  <section class="jet-categories">
    <h2 class="jet-categories__title titles">Private Jet Categories</h2>
    <div class="jet-categories__jets">
      <NuxtLink
        class="jet-categories__jets__jet"
        v-for="jet in jets"
        :key="jet.name"
        :to="jet.path"
      >
        <img :src="jet.image" :alt="jet.alt" />
        <h3 class="jet-categories__jets__jet__name">{{ jet.name }}</h3>
      </NuxtLink>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.jet-categories {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2rem 1rem;
  background-color: $secondary-color;
  color: $text-color-alt;

  @media (min-width: $big-tablet-screen) {
    flex-direction: row;
    justify-content: space-between;
    gap: 4rem;
    padding: 4rem;
  }

  &__title {
    text-align: center;

    @media (min-width: $big-tablet-screen) {
      text-align: left;
    }
  }

  &__jets {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    @media (min-width: $big-tablet-screen) {
      justify-content: center;
      padding-right: 4rem;
    }

    &__jet {
      display: flex;
      flex-direction: column;
      width: 100%;
      align-items: center;

      @media (min-width: $big-tablet-screen) {
        max-width: 250px;
      }

      &__name {
        font-weight: $skinny;
        font-size: 1rem;
        color: $text-color-alt;
      }

      & img {
        width: 100%;
        height: auto;
      }
    }
  }
}
</style>
