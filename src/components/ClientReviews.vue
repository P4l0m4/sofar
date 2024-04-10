<script setup lang="ts">
const reviews = [
  {
    name: "John Doe",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec ultricies.",
    stars: 5,
  },
  {
    name: "Jane Doe",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec ultricies.",
    stars: 5,
  },
  {
    name: "John Smith",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec ultricies.",
    stars: 5,
  },
];
</script>
<template>
  <section class="satisfied-clients">
    <h2 class="titles">Satisfied clients</h2>
    <div class="satisfied-clients__reviews">
      <div class="satisfied-clients__reviews__review" v-for="review in reviews">
        <span class="satisfied-clients__reviews__review__name subtitles">{{
          review.name
        }}</span>
        <p class="paragraphs">{{ review.review }}</p>
        <span class="satisfied-clients__reviews__review__stars"
          ><img
            v-for="star in review.stars"
            src="/assets/icons/star.svg"
            alt="star icon"
        /></span>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.satisfied-clients {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem 1rem;

  @media (min-width: $big-tablet-screen) {
    gap: 4rem;
    padding: 4rem 2rem;
  }

  &__reviews {
    display: flex;
    overflow: scroll;
    gap: 1rem;

    &::-webkit-scrollbar {
      display: none;
    }

    &__review {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      max-width: 400px;
      text-wrap: wrap;

      &__stars {
        display: flex;
        gap: 0.5rem;

        & img {
          width: 1rem;
          height: 1rem;
        }
      }
    }
  }
}
</style>
