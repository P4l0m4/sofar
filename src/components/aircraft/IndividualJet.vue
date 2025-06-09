<script setup lang="ts">
import { colors } from "@/utils/colors";
import phenom100 from "@/assets/images/phenom-100/phenom-100-embraer-sofar (3).webp";
import phenom300 from "@/assets/videos/phenom300.mp4";
import pilatus from "@/assets/images/pc-12/pilatus-pc12-sofar.webp";

import phenom100Cabin from "@/assets/images/phenom-100/phenom100-floor-plan.svg";
import phenom100Cabin2 from "@/assets/images/phenom-100/phenom100-cabin-size.svg";
import phenom100Miniature from "@/assets/images/phenom-100/phenom100-miniature.webp";
import phenom100Luggage from "@/assets/images/phenom-100/phenom100-luggage.webp";
import phenom100Capacity from "@/assets/images/phenom-100/phenom-100-luggage-capacity.png";
import phenom100CabinVideo from "@/assets/videos/Phenom 100 cabin.mp4";

import phenom300Cabin2 from "@/assets/images/phenom-300/phenom-300-floor-plan.svg";
import phenom300Cabin from "@/assets/images/phenom-300/phenom300-size-cabin.svg";
import phenom300Miniature from "@/assets/images/phenom-300/phenom-300-miniature.webp";
import phenom300CabinExperience from "@/assets/images/phenom-300/cabin-phenom300.webp";
import phenom300Capability from "@/assets/images/phenom-300/phenom-300-luggage-capacity.png";

import pilatusMiniature from "@/assets/images/pc-12/pilatus-miniature.webp";
import pilatusCapability from "@/assets/images/pc-12/pc12-cabin-size.svg";
import pilatusCabin from "@/assets/images/pc-12/pc12-floor-plan.svg";
import pilatusCabin2 from "@/assets/images/pc-12/pc12-cabin-size1.svg";
import pilatusCabin3 from "@/assets/images/pc-12/pc12-cabin-size2.svg";
import pilatusCabinBackground from "@/assets/images/pc-12/pilatus-pc12-features.webp";

// gallery images

import gPhenom100 from "@/assets/images/phenom-100/phenom-100-embraer-sofar (2).webp";
import gPhenom1001 from "@/assets/images/phenom-100/phenom-100-embraer-sofar (3).webp";
import gPhenom1002 from "@/assets/images/phenom-100/phenom100-our-fleet (2).webp";
import gPhenom1003 from "@/assets/images/phenom-100/phenom100-private-jet-charter.webp";
import gPhenom1004 from "@/assets/images/phenom-100/ph100-jet-charter-sofar.webp";

import gPhenom300 from "@/assets/images/phenom-300/phenom-300-embraer-sofar-cockpit.webp";
import gPhenom3001 from "@/assets/images/phenom-300/phenom300-our-fleet.webp";
import gPhenom3002 from "@/assets/images/phenom-300/phenom-300-embraer-sofar (2).webp";
import gPhenom3003 from "@/assets/images/phenom-300/phenom-300-embraer-sofar (4).webp";
import gPhenom3004 from "@/assets/images/phenom-300/phenom-300-embraer-sofar.webp";

import gPC12 from "@/assets/images/pc-12/pilatus-pc12-sofar (3).webp";
import gPC121 from "@/assets/images/pc-12/pilatus-pc12-sofar (2).webp";
import gPC122 from "@/assets/images/pc-12/pilatus-pc12-sofar (1).webp";
import gPC123 from "@/assets/images/pc-12/pilatus-pc12-sofar (4).webp";
import gPC124 from "@/assets/images/pc-12/pilatus-pc12-sofar (5).webp";

defineProps({
  showGallery: {
    type: Boolean,
    required: false,
  },
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  slide: {
    type: Number,
    required: true,
  },
});

const slides = [
  {
    planeName: "Phenom 100 Embraer",
    description:
      "The Phenom 100 is a light, agile aircraft, perfect for short-haul flights and business trips. Its compact size doesn’t compromise on luxury or comfort, providing a smooth, quick journey with all the essentials.",
    buttonLink: "/phenom-100",
    planeImage: phenom100,
    secondTitle: "Efficient for Short Private Flights",
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
          icon: "airplane_takeoff",
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
          icon: "cloud_arrow_up",
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
    cabinExperience: {
      subtitle:
        "The Phenom 100 offers a spacious, modern interior, ensuring a luxurious and private travel experience.",
      video: phenom100CabinVideo,
    },
    cabinCapability: {
      backgroundImage: phenom100Luggage,
      images: [phenom100Capacity],
    },
    aircraft: "Phenom 100",
  },
  {
    planeName: "Phenom 300 Embraer",
    description:
      "For those who require more space, speed, and versatility, the Phenom 300 is the perfect choice. Offering a spacious cabin and extended range, it’s ideal for business executives, families, and those traveling on longer trips.",
    buttonLink: "/phenom-300",
    planeVideo: phenom300,
    secondTitle: "Performance and Comfort",
    paragraph:
      "For those who require more space, speed, and versatility, the Phenom 300 is the perfect choice. Offering a spacious cabin and extended range, it’s ideal for business executives, families, and those traveling on longer trips.",
    images: {
      phenom300Cabin,
      phenom300Cabin2,
    },
    schema: {
      miniature: phenom300Miniature,
      pictograms: [
        {
          label: "Take-Off Distance",
          icon: "airplane_takeoff",
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
          icon: "cloud_arrow_up",
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

    cabinExperience: {
      subtitle:
        "The Phenom 300 offers a spacious, modern interior, ensuring a luxurious and private travel experience.",
      image: phenom300CabinExperience,
    },
    cabinCapability: {
      images: [phenom300Capability],
    },
    aircraft: "Phenom 300",
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
          icon: "airplane_takeoff",
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
          icon: "cloud_arrow_up",
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
    cabinExperience: {
      subtitle:
        "The Phenom 100 offers a spacious, modern interior, ensuring a luxurious and private travel experience.",
      image: gPC122,
    },
    cabinCapability: {
      images: [phenom100Capacity, pilatusCapability],
      backgroundImage: pilatusCabinBackground,
    },
    aircraft: "Pilatus PC-12",
  },
];

const gallery = [
  {
    images: [gPhenom1004, gPhenom1002, gPhenom100, gPhenom1003, gPhenom1001],
  },
  {
    images: [gPhenom300, gPhenom3001, gPhenom3002, gPhenom3003, gPhenom3004],
  },
  {
    images: [gPC12, gPC121, gPC122, gPC123, gPC124],
  },
];

function onError(e: Event) {
  console.error("Erreur de chargement de la vidéo :", e);
}
</script>
<template>
  <section class="individual-jet">
    <div class="individual-jet__headlines">
      <h1 class="titles">{{ title }}</h1>
      <h2 class="subtitles">{{ subtitle }}</h2>
      <span class="paragraphs">{{ description }}</span>

      <NuxtLink class="button-primary--light" to="/booking">Book now</NuxtLink>
    </div>
    <div class="individual-jet__slide">
      <img
        v-if="slides[slide].planeImage"
        class="individual-jet__slide__image"
        :src="slides[slide].planeImage"
        alt="private jet image"
      />
      <video
        v-if="slides[slide].planeVideo"
        ref="videoRef"
        class="individual-jet__slide__image"
        autoplay
        muted
        loop
        playsinline
        preload="auto"
        @error="onError"
      >
        <source :src="slides[slide].planeVideo" type="video/mp4" />
      </video>

      <div class="row">
        <div class="column">
          <h4 class="titles">{{ slides[slide].secondTitle }}</h4>
          <p class="paragraphs" style="margin-top: -1rem">
            {{ slides[slide].paragraph }}
          </p>
          <div class="column__illustrations">
            <img
              v-for="(image, i) in slides[slide].images"
              :key="i"
              :src="image"
              :alt="`${slides[slide].planeName} cabin size`"
              class="column__illustrations__illustration"
            />
          </div>
        </div>
        <div class="wrapper">
          <div class="schema">
            <img
              class="schema__miniature"
              :src="slides[slide].schema?.miniature"
            />
            <hr />
            <div class="schema__pictograms">
              <div
                class="schema__pictograms__pictogram"
                v-for="pictogram in slides[slide].schema?.pictograms"
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
            style="max-width: 250px; margin: auto"
            :to="`/aircraft${slides[slide].buttonLink}`"
            v-if="!showGallery"
            >More information</NuxtLink
          >
        </div>
      </div>
    </div>
    <AircraftJetsMap :aircraft="slides[slide].aircraft" />
    <div class="cabin-experience">
      <h3 class="subtitles">Cabin Experience</h3>
      <p class="paragraphs">
        {{ slides[slide].cabinExperience.subtitle }}
      </p>
      <img
        class="cabin-experience__image"
        v-if="slides[slide].cabinExperience.image"
        :src="slides[slide].cabinExperience.image"
      />
      <video
        v-if="slides[slide].cabinExperience.video"
        class="cabin-experience__video"
        controls
        :src="slides[slide].cabinExperience.video"
      ></video>
    </div>

    <div class="plane-gallery-book" v-if="showGallery">
      <div class="plane-gallery-book__wrapper">
        <img
          :src="image"
          alt="private jet image"
          v-for="image in gallery[slide].images"
        />
      </div>
    </div>
  </section>

  <section
    class="cabin-capability"
    :style="{
      backgroundImage: `url(${slides[slide].cabinCapability.backgroundImage})`,
    }"
  >
    <h3 class="subtitles">Cabin Capability</h3>

    <div class="cabin-capability__images">
      <img
        class="cabin-capability__images__image"
        v-for="image in slides[slide].cabinCapability.images"
        :key="image"
        :src="image"
        alt="private jet cabin capability"
      />
    </div>
    <NuxtLink class="button-primary--light" to="/booking">Book now</NuxtLink>
  </section>
</template>
<style lang="scss" scoped>
.individual-jet {
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

    .paragraphs {
      max-width: 900px;
      text-align: center;
    }

    .button-primary--light {
      margin-top: 1rem;
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

    .button-primary--light {
      width: 100%;
      max-width: 400px;

      @media (min-width: $big-tablet-screen) {
        max-width: 300px;
      }
    }

    &__image {
      width: 100%;
      max-width: 1000px;
      height: 400px;
      object-position: center;
      object-fit: cover;
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

            &:nth-child(n + 2) {
              width: 30%;
            }

            @media (min-width: $big-tablet-screen) {
              &:nth-child(1) {
                grid-column: 1 / -1;
              }

              &:nth-child(n + 2) {
                grid-column: auto;
                width: 100%;
                max-height: 180px;
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
        align-items: end;

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

.cabin-experience {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem 0;
  color: $text-color-alt;

  @media (min-width: $big-tablet-screen) {
    gap: 2rem;
    padding: 4rem 0;
  }

  .paragraphs {
    max-width: 600px;
    text-align: center;
  }

  &__image,
  &__video {
    width: 100%;
    height: 400px;
    object-fit: cover;
    object-position: center;
    border-radius: $radius;

    @media (min-width: $big-tablet-screen) {
      height: 500px;
      min-width: 900px;
      max-width: 1000px;
    }
  }
}

.cabin-capability {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 2rem 1rem;
  color: $text-color-alt;
  background-size: cover;
  background-position: center;
  min-height: 100svh;
  width: 100%;
  background-color: $secondary-color;

  @media (min-width: $big-tablet-screen) {
    gap: 2rem;
    padding: 4rem 2rem;
  }

  .subtitles {
    text-align: center;
  }

  &__images {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 100%;

    @media (min-width: $laptop-screen) {
      flex-direction: row;
      justify-content: center;
      gap: 2rem;
    }

    &__image {
      width: 100%;
      max-width: 600px;
      object-fit: contain;
    }
  }

  .button-primary--light {
    width: 100%;
    max-width: 400px;

    @media (min-width: $big-tablet-screen) {
      max-width: 300px;
    }
  }
}

.plane-gallery-book {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  padding: 2rem 0;
  width: 100%;

  @media (min-width: $big-tablet-screen) {
    flex-direction: row;
    gap: 1rem;
    padding: 4rem 0;
  }

  &__wrapper {
    display: grid;
    gap: 1rem;
    width: 100%;
    height: fit-content;
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: 250px;

    @media (min-width: $big-tablet-screen) {
      grid-template-columns: repeat(7, 1fr);
      grid-template-rows: repeat(5, 120px);
    }

    & img {
      width: 100%;
      object-fit: cover;
      object-position: center;
      height: 100%;
      border-radius: $radius;

      @media (min-width: $big-tablet-screen) {
        &:nth-child(1) {
          grid-column: span 5;
          grid-row: span 2;
        }

        &:nth-child(2) {
          grid-column: span 2;
          grid-row: span 3;
        }

        &:nth-child(3) {
          grid-column: span 3;
          grid-row: span 3;
        }
        &:nth-child(4) {
          grid-column: span 2;
          grid-row: span 3;
        }
        &:nth-child(5) {
          grid-column: span 2;
          grid-row: span 2;
        }
      }
    }
  }
}
</style>
