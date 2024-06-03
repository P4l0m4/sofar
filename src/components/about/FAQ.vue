<script setup>
const story = await useAsyncStoryblok("faq", { version: "published" });
const questions = story.value.content.questions.map((question) => {
  return {
    "@type": "Question",
    name: question.title,
    acceptedAnswer: {
      "@type": "Answer",
      text: question.answer,
    },
  };
});
useJsonld(() => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [questions],
}));

const questionOpened = ref("");
function toggleQuestion(index) {
  if (questionOpened.value === index) {
    questionOpened.value = "";
  } else {
    questionOpened.value = index;
  }
}
</script>
<template>
  <div class="faq">
    <div
      class="faq__card"
      v-for="(question, index) in story.content.questions"
      :key="index"
      @click="toggleQuestion(index)"
    >
      <h2 class="faq__card__question">
        {{ question.title }}
        <img
          class="faq__card__question__img"
          src="@/assets/icons/arrow.svg"
          alt="icon arrow inseec"
          :class="{
            'faq__card__question__img--rotated': questionOpened === index,
          }"
        />
      </h2>
      <p class="faq__card__answer" v-if="questionOpened === index">
        {{ question.answer }}
      </p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.faq {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(343px, 1fr));
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;
  width: 100%;

  @media (min-width: $big-tablet-screen) {
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  }

  @media (min-width: $super-big-screen) {
    grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));
  }

  &__card {
    background-color: $primary-color;
    border-radius: $radius;
    box-shadow: $shadow;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;
    padding: 1rem;
    gap: 1rem;
    cursor: pointer;

    &__question {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      font-size: $subtitles;
      font-weight: $thick;
      align-self: stretch;

      &__img {
        width: 16px;
        height: 16px;
        transition: transform 0.2s;

        &--rotated {
          transform: rotate(180deg);
        }
      }
    }

    &__answer {
      font-size: 1rem;
      font-weight: $skinny;
      animation: fading 0.4s;
      width: 100%;
    }

    &__link {
      animation: fading 0.4s;
      width: fit-content;
    }
  }
}
</style>
