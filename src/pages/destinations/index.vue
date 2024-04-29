<script setup lang="ts">
import { ref, computed } from "vue";
import { stringToSlug } from "~/utils/slugify";
import { normalizeString } from "@/utils/normalize";
const story = await useAsyncStoryblok("destinations", { version: "published" });

//type for destination
interface Destination {
  city: string;
  stateName: string;
  country: string;
  geographicalCategories: string[];
  previewImage: {
    filename: string;
  };
}
//type for state
interface State {
  name: string;
  destinationsList: Destination[];
  country: string;
}

const destinations = computed(() => {
  return story.value.content.statesList.flatMap((state: State) => {
    return state.destinationsList.map((destination) => {
      return {
        ...destination,
        stateName: state.name,
        country: state.country,
      };
    });
  });
});

const queryRef = ref("");

const matchingDestinations = computed(() => {
  if (queryRef.value.length === 0) {
    return destinations.value;
  } else {
    return destinations.value.filter((destination: Destination) => {
      return (
        normalizeString(destination.city).includes(
          normalizeString(queryRef.value)
        ) ||
        normalizeString(destination.stateName).includes(
          normalizeString(queryRef.value)
        ) ||
        normalizeString(destination.country).includes(
          normalizeString(queryRef.value)
        )
      );
    });
  }
});

const tagsSelectedRef = ref("");

const tags = computed(() => {
  let allTags = destinations.value.flatMap((destination: Destination) => {
    return destination.geographicalCategories;
  });

  let uniqueTags = new Set(allTags);

  return Array.from(uniqueTags);
});

const addOrRemoveTag = (tag: string) => {
  if (tagsSelectedRef.value === tag) {
    tagsSelectedRef.value = "";
  } else {
    tagsSelectedRef.value = tag;
  }
};

const carouselElements = computed(() => {
  if (tagsSelectedRef.value === "") {
    return matchingDestinations.value.map((destination: Destination) => {
      return {
        link: `/destinations/${stringToSlug(
          `${destination.country}-${destination.stateName}`
        )}/${stringToSlug(`${destination.city}`)}`,
        image: destination.previewImage.filename,
        label: `${destination.city}, ${destination.stateName}`,
        countryCode: destination.country,
      };
    });
  } else {
    return matchingDestinations.value
      .filter((destination: Destination) => {
        return destination.geographicalCategories.includes(
          tagsSelectedRef.value
        );
      })
      .map((destination: Destination) => {
        return {
          link: `/destinations/${stringToSlug(
            `${destination.country}-${destination.stateName}`
          )}/${stringToSlug(`${destination.city}`)}`,
          image: destination.previewImage.filename,
          label: `${destination.city}, ${destination.stateName}`,
          countryCode: destination.country,
        };
      });
  }
});
</script>
<template>
  <section class="destinations">
    <div class="destinations__header">
      <h1 class="titles">Browse destinations</h1>

      <DestinationsSearchBar v-model="queryRef" />
      <div class="destinations__header__filtering">
        <button
          class="destinations__header__filtering__tag tags"
          :class="{
            'destinations__header__filtering__tag--selected':
              tagsSelectedRef === tag,
          }"
          v-for="(tag, i) in tags"
          :key="i"
          @click="addOrRemoveTag(tag)"
        >
          {{ tag }}
        </button>
      </div>
    </div>
    <div class="destinations__top">
      <Transition>
        <CarouselComponent :carouselElements="carouselElements"
      /></Transition>
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
        white-space: nowrap;

        &--selected {
          border: 1px solid $text-color;
        }
      }
    }
  }
}
</style>
