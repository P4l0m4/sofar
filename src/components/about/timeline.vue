<script setup lang="ts">
const topEvents = [
  {
    eventName: "Creation of the company",
    eventDate: "2018",
  },

  {
    eventName: "Acquirement of 1st PC-12",
    eventDate: "November 2019",
  },

  {
    eventName: "Acquirement of 2nd PC-12",
    eventDate: "November 2021",
  },

  {
    eventName: "Reception of 2nd Phenom 100",
    eventDate: "January 2023",
  },
];
const bottomEvents = [
  {
    eventName: "Flight school 4 Cirrus aircraft",
    eventDate: "2019",
  },

  {
    eventName: "Reception of 1st Phenom 300",
    eventDate: "February 2021",
  },

  {
    eventName: "Reception of 1st Phenom 100",
    eventDate: "April 2021",
  },

  {
    eventName: "Rebranding to Sofar",
    eventDate: "March 2023",
  },
];
</script>
<template>
  <section class="timeline">
    <img
      src="@/assets/images/our-story/melman.svg"
      alt="melman aviation logo"
    />
    <div class="timeline__dates">
      <ul class="timeline__dates__list">
        <li
          class="timeline__dates__list__top-date"
          v-for="event in topEvents"
          :key="event.eventName"
        >
          <span class="paragraphs">{{ event.eventDate }}</span>
          <h3 class="paragraphs">{{ event.eventName }}</h3>
          <img
            class="square-line"
            src="@/assets/images/our-story/line.svg"
            alt="line"
          />
        </li>
      </ul>
      <span class="timeline__dates__line"></span>
      <ul class="timeline__dates__list">
        <li
          class="timeline__dates__list__bottom-date"
          v-for="event in bottomEvents"
          :key="event.eventName"
        >
          <img
            class="square-line"
            src="@/assets/images/our-story/line.svg"
            alt="line"
          />
          <span class="paragraphs">{{ event.eventDate }}</span>
          <h3 class="paragraphs">{{ event.eventName }}</h3>
        </li>
      </ul>
    </div>
    <img src="@/assets/images/logo-dark.svg" alt="sofar logo" />
  </section>
</template>
<style scoped lang="scss">
.timeline {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem 1rem;
  justify-content: center;
  align-items: center;

  @media (min-width: $big-tablet-screen) {
    flex-direction: row;
    gap: 2rem;
    padding: 4rem 2rem;
  }

  & img {
    width: 100%;
    max-width: 200px;
  }

  &__dates {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    height: fit-content;

    @media (min-width: $big-tablet-screen) {
      padding: 2rem 4rem;
      flex-direction: column;
      background-color: $primary-color;
      border-radius: 100px 100px 100px 100px;
    }

    &__line {
      width: 1px;
      height: 450px;
      background-color: $text-color;

      @media (min-width: $big-tablet-screen) {
        width: 100%;
        height: 1px;
      }
    }

    &__list {
      display: flex;
      gap: 1rem;
      list-style: none;
      flex-direction: column;

      @media (min-width: $big-tablet-screen) {
        flex-direction: row;
      }

      &__bottom-date,
      &__top-date {
        display: flex;
        flex-direction: column;
        width: fit-content;

        & .square-line {
          width: 1.5rem;
          height: 1.5rem;
          margin-left: -3px;

          transform: rotate(-90deg);

          @media (min-width: $big-tablet-screen) {
            margin: auto;
            margin-top: -3px;
            transform: rotate(0);
          }
        }
      }

      &__top-date {
        & .square-line {
          transform: rotate(90deg);
          margin-right: -3px;
          margin-left: auto;

          @media (min-width: $big-tablet-screen) {
            margin-bottom: -3px;
            margin-top: 0;
            margin-right: 0;
            margin-left: 0;
            transform: rotate(180deg);
          }
        }
      }
      &__bottom-date {
        & h3,
        & span {
          margin-left: 2rem;
          @media (min-width: $big-tablet-screen) {
            margin-left: 0;
          }
        }
      }

      & span {
        opacity: 0.8;
        font-size: 0.85rem;
      }

      & h3 {
        font-weight: $thick;
        font-size: 1.125rem;
        text-wrap: balance;
      }
    }
  }
}
</style>
