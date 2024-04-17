<script setup lang="ts">
import { ref, computed } from "vue";
import { stringToSlug } from "~/utils/slugify";
import { normalizeString } from "@/utils/normalize";
const story = await useAsyncStoryblok("destinations", { version: "published" });

const queryRef = ref("");

// const tags = computed(() => {
//   //for all destinations inside story.value.content.destinationsList, get all services tags inside story.value.content.destinationsList.services and return a unique array of tags
//   return story.value.content.destinationsList
//     .map((destination) => destination.services)
//     .flat()
//     .filter((tag, i, tags) => tags.indexOf(tag) === i);
// });
const tagsSelectedRef = ref([]);

// function addOrRemoveTag(tag: string) {
//   if (tagsSelectedRef.value.includes(tag)) {
//     tagsSelectedRef.value = tagsSelectedRef.value.filter((t) => t !== tag);
//   } else {
//     tagsSelectedRef.value.push(tag);
//   }
// }

const matchingDestinations = computed(() => {
  return story.value.content.destinationsList;
});

const carouselElements = computed(() => {
  return [
    {
      link: stringToSlug(
        `${matchingDestinations.value[0].city}-${matchingDestinations.value[0].state}`
      ),
      image: matchingDestinations.value[0].previewImage.filename,
      label: `${matchingDestinations.value[0].city}, ${matchingDestinations.value[0].state}`,
      countryCode: matchingDestinations.value[0].country,
    },
  ];
});
</script>
<template>
  <section class="destinations">
    <div class="destinations__header">
      <h1 class="titles">Browse destinations</h1>
      <DestinationsSearchBar v-model="queryRef" />
      <!-- <div class="destinations__header__filtering">
        <button
          class="destinations__header__filtering__tag tags"
          :class="{
            'destinations__header__filtering__tag--selected':
              tagsSelectedRef.includes(tag),
          }"
          v-for="(tag, i) in tags"
          :key="i"
          @click="addOrRemoveTag(tag)"
        >
          {{ tag }}
        </button>
      </div> -->
    </div>
    <div class="destinations__top">
      <CarouselComponent :carouselElements="carouselElements" />
    </div>
  </section>
</template>
<style scoped lang="scss">
.destinations {
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;

  @media (min-width: $big-tablet-screen) {
    padding: 4rem 2rem;
  }

  &__header {
    display: flex;
    gap: 1rem;
    flex-direction: column;

    @media (min-width: $big-tablet-screen) {
      gap: 2rem;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      max-width: calc(100vw - 16rem);
    }

    &__filtering {
      display: flex;
      gap: 1rem;
      width: 100%;
      overflow-x: scroll;

      &::-webkit-scrollbar {
        display: none;
      }

      &__tag {
        cursor: pointer;
        transition: border 0.3s;

        &--selected {
          border: 1px solid $text-color;
        }
      }
    }
  }
}
</style>
