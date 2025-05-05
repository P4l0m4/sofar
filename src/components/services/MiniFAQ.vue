<script setup>
const props = defineProps({
  questions: {
    type: Array,
    required: true,
  },
});

const jsonLdQuestions = props.questions.map((question) => {
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
  mainEntity: [jsonLdQuestions],
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
  <div class="faq" v-if="questions">
    <div class="faq__headlines">
      <h3 class="titles">FAQ's</h3>
      <h4 class="subtitles">Common questions about our services at Sofar</h4>
    </div>
    <div class="faq__questions">
      <div
        class="faq__questions__card"
        v-for="(question, index) in questions"
        :key="index"
        @click="toggleQuestion(index)"
      >
        <h5 class="faq__questions__card__question">
          <IconComponent
            :icon="
              questionOpened === index ? 'caret_down_bold' : 'caret_right_bold'
            "
            size="1.5rem"
          />
          {{ question.title }}
        </h5>
        <p class="faq__questions__card__answer" v-if="questionOpened === index">
          {{ question.answer }}
        </p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.faq {
  width: 100%;
  padding: 2rem 1rem;
  background-color: $secondary-color;
  color: $text-color-alt;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: $big-tablet-screen) {
    padding: 4rem 2rem;
    flex-direction: row;
    justify-content: space-between;
  }

  @media (min-width: $laptop-screen) {
    padding: 4rem;
  }

  &__headlines {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: fit-content;

    & .subtitles {
      text-wrap: balance;
    }
  }

  &__questions {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: fit-content;
    gap: 1rem;

    @media (min-width: $big-tablet-screen) {
      gap: 0;
    }

    &__card {
      border-radius: $radius;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      width: 100%;
      max-width: 700px;
      height: fit-content;
      gap: 1rem;
      cursor: pointer;

      @media (min-width: $big-tablet-screen) {
        min-width: 400px;
        padding: 1rem;
      }

      @media (min-width: $laptop-screen) {
        min-width: 700px;
      }

      &__question {
        display: flex;
        align-items: center;
        gap: 1rem;
        width: 100%;
        height: fit-content;
        font-size: 1rem;
        font-weight: $skinny;
        color: $text-color-alt;

        @media (min-width: $big-tablet-screen) {
          font-size: $subtitles;
        }
      }

      &__answer {
        font-size: 1rem;
        font-weight: $skinny;
        animation: fading 0.3s;
        width: 100%;
        line-height: $subtitles;
      }

      &__link {
        animation: fading 0.4s;
        width: fit-content;
      }
    }
  }
}
</style>
