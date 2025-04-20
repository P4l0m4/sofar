<script setup lang="ts">
import { ref } from "vue";
import { colors } from "@/utils/colors";
import phenom100 from "@/assets/images/phenom-100/phenom100-embraer.webp";
import phenom300 from "@/assets/images/phenom-300/phenom300-embraer-sofar.webp";
import pilatus from "@/assets/images/pc-12/pilatus-pc12-sofar.webp";

import phenom100Cabin from "@/assets/images/phenom-100/phenom100-floor-plan.svg";
import phenom100Cabin2 from "@/assets/images/phenom-100/phenom100-cabin-size.svg";
import phenom100Miniature from "@/assets/images/phenom-100/phenom100-miniature.webp";

import phenom300Cabin2 from "@/assets/images/phenom-300/phenom-300-floor-plan.svg";
import phenom300Cabin from "@/assets/images/phenom-300/phenom300-size-cabin.svg";
import phenom300Miniature from "@/assets/images/phenom-300/phenom-300-miniature.webp";

import pilatusMiniature from "@/assets/images/pc-12/pilatus-miniature.webp";
import pilatusCabin from "@/assets/images/pc-12/pc12-floor-plan.svg";
import pilatusCabin2 from "@/assets/images/pc-12/pc12-cabin-size1.svg";
import pilatusCabin3 from "@/assets/images/pc-12/pc12-cabin-size2.svg";

const slides = [
  {
    planeName: "Phenom 100 Embraer",
    description:
      "The Phenom 100 is a light, agile aircraft, perfect for short-haul flights and business trips. Its compact size doesn’t compromise on luxury or comfort, providing a smooth, quick journey with all the essentials.",
    buttonLink: "/phenom-100",
    planeImage: phenom100,
    secondTitle: "Suited for your every journey",
    paragraph:
      "Efficient, luxurious and tailored for swift travel, our jets combine comfort, speed and cutting-edge technology, perfect for both routine travel or shorts-distance journeys. Efficient, luxurious and tailored for swift travel, our jets combine comfort, speed and cutting-edge technology, perfect for both routine travel or shorts-distance journeys.",
    images: {
      phenom100Cabin,
      phenom100Cabin2,
    },
    schema: {
      miniature: phenom100Miniature,
      pictograms: [
        {
          label: "Take-Off Distance",
          icon: "airplane-takeoff",
          data: "3.199 ft",
        },
        {
          label: "Max Cruise Speed",
          icon: "speedometer",
          data: "750 kh/h",
        },
        {
          label: "Range",
          icon: "target",
          data: "2.182 km",
        },
        {
          label: "Max Altitude",
          icon: "cloud-arrow-up",
          data: "41.000 ft",
        },
        {
          label: "Passengers",
          icon: "seat",
          data: "4 pax",
        },
        {
          label: "Max Payload",
          icon: "weight",
          data: "7.220 lb",
        },
      ],
    },
  },
  {
    planeName: "Phenom 300 Embraer",
    description:
      "For those who require more space, speed, and versatility, the Phenom 300 is the perfect choice. Offering a spacious cabin and extended range, it’s ideal for business executives, families, and those traveling on longer trips.",
    buttonLink: "/phenom-300",
    planeImage: phenom300,
    secondTitle: "Efficiency, Performance, Comfort.",
    paragraph:
      "Efficient, luxurious and tailored for swift travel, our jets combine comfort, speed and cutting-edge technology, perfect for both routine travel or shorts-distance journeys. Efficient, luxurious and tailored for swift travel, our jets combine comfort, speed and cutting-edge technology, perfect for both routine travel or shorts-distance journeys.",
    images: {
      phenom300Cabin,
      phenom300Cabin2,
    },
    schema: {
      miniature: phenom300Miniature,
      pictograms: [
        {
          label: "Take-Off Distance",
          icon: "airplane-takeoff",
          data: "3.209 ft",
        },
        {
          label: "Max Cruise Speed",
          icon: "speedometer",
          data: "464 ktas",
        },
        {
          label: "Range",
          icon: "target",
          data: "2.010 nm",
        },
        {
          label: "Max Altitude",
          icon: "cloud-arrow-up",
          data: "45.000 ft",
        },
        {
          label: "Passengers",
          icon: "seat",
          data: "7 pax",
        },
        {
          label: "Max Payload",
          icon: "weight",
          data: "7.220 lb",
        },
      ],
    },
  },
  {
    planeName: "Pilatus PC 12",
    description:
      "When selecting the perfect aircraft for your upcoming trip, you'll find that the PC-12 offers a world of advantages waiting to enhance your travel experience. This isn't just any aircraft; it's a promise of versatility, safety, reliability, and a proven track record that has won the trust of countless travelers worldwide.",
    buttonLink: "/pc12",
    planeImage: pilatus,
    secondTitle: "Range. Space. Comfort.",
    paragraph:
      "The PC-12 cabin is spacious, providing optimal comfort for passengers. It is designed to typically accommodate between six and nine passengers, depending on the chosen configuration.",
    images: {
      pilatusCabin,
      pilatusCabin2,
      pilatusCabin3,
    },
    schema: {
      miniature: pilatusMiniature,
      pictograms: [
        {
          label: "Take-Off Distance",
          icon: "airplane-takeoff",
          data: "2.485 ft",
        },
        {
          label: "Max Cruise Speed",
          icon: "speedometer",
          data: "290 ktas",
        },
        {
          label: "Range",
          icon: "target",
          data: "1.803 nm",
        },
        {
          label: "Max Altitude",
          icon: "cloud-arrow-up",
          data: "3.000 ft",
        },
        {
          label: "Passengers",
          icon: "seat",
          data: "6 pax",
        },
        {
          label: "Max Payload",
          icon: "weight",
          data: "2.236 lb",
        },
      ],
    },
  },
];

const index = ref(0);
</script>
<template>
  <section class="our-fleet">
    <div class="our-fleet__headlines">
      <h3 class="titles">Our Fleet</h3>
      <span class="subtitles"
        >We chose the most reliable on the market. Come fly on a smaller fleet
        of efficient aircraft.</span
      >
    </div>
    <div class="our-fleet__menu">
      <button
        class="our-fleet__menu__button"
        :class="{ 'our-fleet__menu__button--selected': index === 0 }"
        @click="index = 0"
      >
        Phenom 100
      </button>
      <button
        class="our-fleet__menu__button"
        :class="{ 'our-fleet__menu__button--selected': index === 1 }"
        @click="index = 1"
      >
        Phenom 300
      </button>
      <button
        class="our-fleet__menu__button"
        :class="{ 'our-fleet__menu__button--selected': index === 2 }"
        @click="index = 2"
      >
        Pilatus PC 12
      </button>
    </div>
    <div class="our-fleet__slide">
      <h4 class="subtitles">{{ slides[index].planeName }}</h4>
      <span class="our-fleet__slide__description">{{
        slides[index].description
      }}</span>

      <div
        class="our-fleet__slide__image"
        :style="{ backgroundImage: `url(${slides[index].planeImage})` }"
      ></div>
      <div class="row">
        <div class="column">
          <h4 class="titles">{{ slides[index].secondTitle }}</h4>
          <p class="paragraphs" style="margin-top: -1rem">
            {{ slides[index].paragraph }}
          </p>
          <div class="column__illustrations">
            <img
              v-for="(image, i) in slides[index].images"
              :key="i"
              :src="image"
              :alt="`${slides[index].planeName} cabin size`"
              class="column__illustrations__illustration"
            />
          </div>
        </div>
        <div class="wrapper">
          <div class="schema">
            <img
              class="schema__miniature"
              :src="slides[index].schema?.miniature"
            />
            <hr />
            <div class="schema__pictograms">
              <div
                class="schema__pictograms__pictogram"
                v-for="pictogram in slides[index].schema?.pictograms"
                :key="pictogram.label"
              >
                <span class="schema__pictograms__pictogram__icon">
                  <IconComponent
                    size="1.5rem"
                    :color="colors['primary-color']"
                    :icon="pictogram.icon"
                /></span>
                <span class="schema__pictograms__pictogram__label">{{
                  pictogram.label
                }}</span>
                <span class="schema__pictograms__pictogram__data">{{
                  pictogram.data
                }}</span>
              </div>
            </div>
          </div>
          <NuxtLink
            class="button-primary--light"
            :to="`/aircraft${slides[index].buttonLink}`"
            style="max-width: 300px"
            >More information</NuxtLink
          >
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.our-fleet {
  height: fit-content;
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  gap: 1rem;
  background-color: $secondary-color;

  @media (min-width: $big-tablet-screen) {
    padding: 4rem;
    gap: 2rem;
  }

  &__headlines {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: $text-color-alt;
    align-items: center;

    .subtitles {
      text-wrap: balance;
      max-width: 600px;
      text-align: center;
    }
  }

  &__menu {
    display: flex;
    background-color: $base-color;
    padding: 0.2rem;
    align-items: center;
    border-radius: 130px;

    &__button {
      display: flex;
      padding: 0.75rem;
      border-radius: 100px;
      color: $text-color;
      transition: background-color 0.3s linear;
      white-space: nowrap;
      font-size: $small-text;
      font-weight: $skinny;
      cursor: pointer;

      @media (min-width: $tablet-screen) {
        font-size: 1rem;
        padding: 1rem;
      }

      &--selected {
        background-color: $secondary-color;
        color: $text-color-alt;
      }
    }
  }

  &__slide {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    color: $text-color-alt;
    margin-top: 1rem;
    align-items: center;

    @media (min-width: $big-tablet-screen) {
      margin-top: 2rem;
      gap: 3rem;
    }

    &__description {
      max-width: 900px;
      text-align: center;
      margin-top: -1rem;
      text-wrap: balance;
    }

    .button-primary--light {
      width: 100%;
      max-width: 400px;

      @media (min-width: $big-tablet-screen) {
        max-width: 280px;
      }
    }

    &__image {
      width: 100%;
      max-width: 1000px;
      height: 400px;
      background-position: center;
      background-size: cover;
      border-radius: 40px;

      @media (min-width: $big-tablet-screen) {
        height: 500px;
      }
    }

    .row {
      display: flex;
      gap: 2rem;
      width: 100%;
      max-width: 1000px;
      flex-direction: column;

      @media (min-width: $big-tablet-screen) {
        flex-direction: row;
      }

      .column {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 2rem;

        &__illustrations {
          border: gren solid 1px;
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 2rem;
          max-width: 500px;

          @media (min-width: $big-tablet-screen) {
            grid-template-columns: repeat(2, 1fr);
          }

          &__illustration {
            width: 100%;

            @media (min-width: $big-tablet-screen) {
              &:nth-child(1) {
                grid-column: 1 / -1;
              }

              &:nth-child(n + 2) {
                grid-column: auto;
              }
            }
          }
        }
      }

      .wrapper {
        display: flex;
        gap: 2rem;
        flex-direction: column;
        width: 100%;

        @media (min-width: $big-tablet-screen) {
          width: 450px;
        }

        .schema {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          background-color: $base-color;
          border-radius: 4px;
          height: fit-content;
          width: 100%;
          padding: 1rem;

          &__miniature {
            object-fit: contain;
            width: 100%;
            height: 100px;
          }

          &__pictograms {
            display: grid;
            gap: 1rem;
            grid-template-columns: repeat(2, 1fr);

            &__pictogram {
              display: flex;
              flex-direction: column;
              gap: 0.5rem;
              color: $text-color;
              align-items: center;

              &__icon {
                display: flex;
                align-items: center;
                border-radius: 50%;
                padding: 1rem;
                justify-content: center;
                align-items: center;
                background-color: $secondary-color;
                height: 50px;
                width: 50px;
              }

              &__label {
                font-weight: $skinny;
                font-size: $small-text;
                text-align: center;
              }

              &__data {
                font-weight: $skinny-thick;
                text-align: center;
              }
            }
          }
        }
      }
    }
  }
}
</style>
