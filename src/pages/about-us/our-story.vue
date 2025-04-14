<script setup>
import { onMounted, ref } from "vue";
import mapboxgl from "mapbox-gl";
const config = useRuntimeConfig();
const mapRef = ref();
mapboxgl.accessToken = config.public.MAP_BOX_API_KEY;

useHead({
  title: "Our Story | Sofar",
  meta: [
    {
      name: "description",
      content:
        "Learn about the history and mission of Sofar. Discover how we became a leading provider of private jet charter services, focused on safety, reliability, and customer satisfaction.",
    },
  ],
});

onMounted(() => {
  const map = new mapboxgl.Map({
    container: mapRef.value,
    style: "mapbox://styles/flysofar/cluvditjb006w01r5enddch7y",
    center: [-96, 34.15790888688196],
    zoom: 3.2,
    scrollZoom: false,
    doubleClickZoom: false,
    touchZoomRotate: false,
    projection: "mercator",
  });

  if (window.innerWidth < 768) {
    map.setCenter([-96.55174117682346, 35.15790888688196]);
    map.setZoom(2.3);
  }

  // Marker for New York
  new mapboxgl.Marker({ color: "#052545", anchor: "center" })
    .setLngLat([-74.006, 40.7128])
    .addTo(map);

  // Marker for Miami
  new mapboxgl.Marker({ color: "#052545", anchor: "center" })
    .setLngLat([-80.1918, 25.7617])
    .addTo(map);

  // Marker for Los Angeles
  new mapboxgl.Marker({ color: "#052545", anchor: "center" })
    .setLngLat([-118.243683, 34.052235])
    .addTo(map);
});

useJsonld(() => ({
  "@context": "https://schema.org/",
  "@type": "WebSite",
  name: "Our Story | Sofar",
  url: window.location.href,
}));

const breadcrumbs = [
  {
    name: "Home",
    url: window.location.origin,
  },
  {
    name: "About us",
    url: window.location.origin + "/about-us",
  },
  {
    name: "Our Story",
    url: window.location.href,
  },
];
</script>
<template>
  <picture class="our-story-banner">
    <source media="(min-width: 1100px)" srcset="@/assets/images/our-story/our-story-desktop-banner2.webp" />
    <div class="our-story-banner__headlines">
      <h1 class="our-story-banner__headlines__title titles">Our story</h1>
      <h2 class="our-story-banner__headlines__subtitle subtitles">
        Learn more about our journey and our team
      </h2>
    </div>
    <img class="our-story-banner__img" src="@/assets/images/our-story/our-story-desktop-banner2.webp"
      alt="sofar jet charter banner image" />
  </picture>

  <HomeWelcomeToSofar />

   <section class="image-with-text">
    <img class="image-with-text__full-width-image" src="@/assets/images/our-story/founder-ceo-sofar.webp" alt="private jet charter sofar" />
    <div class="image-with-text__text">
      <h3 class="subtitles">The founder's voice<span class="paragraphs">Built to Fly, Driven to Succeed</span></h3>
      <ul class="list ">
        <li class="ul">
        Sofar began as a vision. Turning that dream into a reality was anything but easy. Building a Part 135 operation from scratch, without outside funding or clear FAA guidance, was like walking a tightrope in the dark. Every decision carried weight, and every mistake taught us lessons we couldn’t afford to ignore.
      </li>   <li class="ul">
        Operating jets around the clock to meet everyone’s needs isn’t just a logistical challenge—it’s a balancing act. Growing pains and rising costs have tested us at every turn, pushing us to innovate, adapt, and dig deep to keep things moving forward. There were moments when it felt like the odds were stacked against us, but we never let that stop us.</li>
      <li class="ul">What kept us going through the hardest times were the people—the team that works tirelessly behind the scenes, the pilots who go above and beyond, and the customers who put their trust in us. This company isn’t just about flying planes; it’s about solving problems, finding a way forward, and delivering excellence, even when the pressure is at its peak.</li>  
      <li class="ul">Running Sofar has been one of the hardest things I’ve ever done, but it’s also the most rewarding. We’re here today because of relentlessness, determination, and an unshakable belief in what we’re building.</li>
      <li class="ul">Thank you for being part of this journey and for believing in us as we continue to grow.</li>
      <li class="ul" style="margin-top: 2rem;">Pierre P. Lafond</li>
      </ul>
    </div>
  </section>

  <section class="image-with-text">
    <img class="image-with-text__full-width-image" src="@/assets/images/our-story/phenom-300-vision-take-flight-sofar.webp" alt="private jet charter sofar" />
    <div class="image-with-text__text">
      <h3 class="subtitles">A Vision Takes Flight</h3>
      <ul class="list ">
        <li class="ul">
        In 2019, Pierre P. Lafond’s vision took flight at Westchester County
        Airport with just a single aircraft, a Pilatus PC-12. Driven by a deep
        passion for aviation and a commitment to reimagining private air travel,
        Pierre transformed a small operation into a leading private jet company,
        renowned for its personalized services and dedication to excellence.
      </li>   <li class="ul">
       From day one, Sofar’s core has been its unwavering focus on customer care, precision, and a bespoke approach to travel. This philosophy has enabled continuous growth, allowing the company to expand its fleet and introduce advanced aircraft like the Phenom 100 and Phenom 300. These additions reflect our mission to cater to the diverse needs of our clients while maintaining the highest standards of safety and luxury.</li>
        </ul>
    </div>
  </section>

  <section class="image-with-text">
    <img class="image-with-text__full-width-image" src="@/assets/images/our-story/phenom-100-sofar-our-story.webp" alt="private jet charter sofar" />
    <div class="image-with-text__text">
      <h3 class="subtitles">The Transformation</h3>
      <p class="paragraphs">
        In 2023, as the company evolved, we adopted the name Sofar,
        symbolizing a seamless blend of sophistication and far-reaching
        travel possibilities. With key bases in New York, Miami and Los
        Angeles, our goal is to offer exclusive, tailor-made experiences to
        our clients—whether they are seeking quick city escapes, business
        trips, or gateways to remote destinations.
      <div ref="mapRef" class="map-container"></div>
      </p>
    </div>
  </section>
  <section class="image-with-text">
    <img class="image-with-text__full-width-image" src="@/assets/images/our-story/sofar-our-story-values.webp" alt="private jet charter sofar" />
    <div class="image-with-text__text">
      <h3 class="subtitles">The Values</h3>
      <ol class="list">
        <li>Client-Centric Approach: We see our clients as partners in their
          journey. Every detail of the flight experience is customized, focusing
          on what matters most to our passengers—comfort, safety, and a
          seamless travel experience.</li>
        <li>Excellence and Innovation: From our carefully selected fleet to
          the precision of our operations, we are driven by a commitment to
          excellence. We continually adapt, innovate, and refine our services
          to exceed client expectations.</li>
        <li>Passion and Integrity: Our passion for aviation and dedication to
          our craft are reflected in the service we provide. We hold ourselves
          to the highest ethical standards, building trust and delivering on our
          promises.
        </li>
        <li>Team Spirit: At Sofar, we believe in collaboration and open
          communication. Our team is united by shared values, working
          together to create exceptional moments for our clients.</li>
      </ol>
    </div>
  </section>
  <section class="image-with-text">
    <img class="image-with-text__full-width-image" src="@/assets/images/our-story/phenom-sofar-fleet-aircraft.webp" alt="private jet charter sofar" />
    <div class="image-with-text__text">
      <h3 class="subtitles">Our Expanding</h3>
      <ul class="list ">
        <li class="ul">In 2024, Sofar continued to grow by opening its first West Coast
          base in Los Angeles. With a Phenom 100 stationed there, we are
          now able to offer regional flights to popular destinations such as
          Las Vegas, San Francisco, and even locations in Mexico.</li>
        <li class="ul">As part of our ongoing commitment to excellence and to meet the
          expectations of our most loyal clients, we now also provide
          personalized support in finding the best aircraft for their journey,
          whether from our fleet or that of one of our trusted partners.</li>
        <li class="ul">Today, Sofar consists of a team of 15 pilots based across our
          different locations, supported by an administrative team of 7
          working from our new offices in Los Angeles.
        </li>
        <li class="ul">And more to come...</li>
      </ul>
    </div>
  </section>
    <section class="standard-spacing centered-content">
    <h2 class="titles">Book your next flight with us!</h2>
    <QuotePopUpButton :primary="true" />
  </section>
  <!-- <AboutTimeline /> -->
  <!-- <section>
    <h2 class="section-title titles">Our Fleet</h2>
    <p class="description paragraphs">
      With our diverse range of aircraft, including the incredibly versatile
      Pilatus PC-12 turbo-prop, the nimble and efficent Embraer Phenom 100, and
      long- range light jet, Embraer Phenom 300, Sofar offers flexibility and
      comfort for every journey. Whether you're traveling solo, with a small
      group, or a large entourage, our meticulous fleet selection ensures that
      we have the perfect aircraft to suit your needs. Depart at your preferred
      time, fly directly to your destination, and experience the convenience of
      private air travel without the constraints of rigid schedules or crowded
      airports.
    </p>
    <CarouselComponent />
  </section> -->

  <!-- <Container
    ><h2 class="titles">Our Team</h2>
    <div class="team">
      <div class="team__card">
        <img
          class="team__card__img"
          src="@/assets/images/our-story/p-lafond.webp"
          alt="circular image"
        />
        <div class="team__card__txt">
          <h3 class="team__card__name subtitles">P. Lafond</h3>
          <span class="team__card__role paragraphs">CEO founder</span>
        </div>
      </div>
      <div class="team__card">
        <img
          class="team__card__img"
          src="@/assets/images/our-story/h-rodriguez.webp"
          alt="circular image"
        />
        <div class="team__card__txt">
          <h3 class="team__card__name subtitles">H. Rodriguez</h3>
          <span class="team__card__role paragraphs">Head of operations</span>
        </div>
      </div>
      <div class="team__card">
        <img
          class="team__card__img"
          src="@/assets/images/our-story/j-sullenberg.webp"
          alt="circular image"
          style="filter: blur(8px)"
        />
        <div class="team__card__txt">
          <h3 class="team__card__name subtitles">D. Kwasniak</h3>
          <span class="team__card__role paragraphs"
            >Director of maintenance</span
          >
        </div>
      </div>
      <div class="team__card">
        <img
          class="team__card__img"
          src="@/assets/images/our-story/m-lafond.webp"
          alt="circular image"
        />
        <div class="team__card__txt">
          <h3 class="team__card__name subtitles">M. Lafond</h3>
          <span class="team__card__role paragraphs"
            >Chief marketing officer</span
          >
        </div>
      </div>
      <div class="team__card">
        <img
          class="team__card__img"
          src="@/assets/images/our-story/c-king.webp"
          alt="circular image"
        />
        <div class="team__card__txt">
          <h3 class="team__card__name subtitles">C. King</h3>
          <span class="team__card__role paragraphs">Chief pilot</span>
        </div>
      </div>
      <div class="team__card">
        <img
          class="team__card__img"
          src="@/assets/images/our-story/t-reyes.webp"
          alt="circular image"
        />
        <div class="team__card__txt">
          <h3 class="team__card__name subtitles">T. Reyes</h3>
          <span class="team__card__role paragraphs">Assistant chief pilot</span>
        </div>
      </div>
    </div>
  </Container> -->
  <JsonldBreadcrumb :links="breadcrumbs" />
</template>
<style scoped lang="scss">
.our-story-banner {
  display: flex;
  background-size: cover;
  background-position: center;
  min-height: 100svh;
  max-height: 800px;
  width: 100%;
  padding: 1rem;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  position: relative;

  @media (min-width: $big-tablet-screen) {
    padding: 2rem;
    gap: 2rem;
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    background-color: $text-color;
    z-index: -1;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(80deg, $text-color, transparent 60%);
    opacity: 0.2;
    z-index: -1;
  }

  & source {
    display: none;
  }

  &__headlines {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    z-index: 1;
    color: $text-color-alt;

    @media (min-width: $big-tablet-screen) {
      gap: 2rem;
    }

    &__title {
      display: flex;
      line-height: 4.5rem;
      color: $text-color-alt;
      height: fit-content;
      width: fit-content;
      font-size: 4rem;

      @media (min-width: $big-tablet-screen) {
        line-height: 6rem;
        font-size: 6rem;
      }
    }
  }

  &__subtitle {
    color: $text-color-alt;
    line-height: 1.6rem;
    position: absolute;
    inset: 2rem;
    bottom: inherit;
    margin: auto;
    width: fit-content;
    height: fit-content;
    opacity: 0.8;
    font-family: "Custom";
    font-weight: 100;
  }

  &__img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }
}

.description {
  padding: 1rem 1rem 0 1rem;

  @media (min-width: $big-tablet-screen) {
    padding: 1rem 2rem 0 2rem;
    max-width: calc(100% - 12rem);
  }
}

.team {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;

  @media (min-width: $big-tablet-screen) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  &__card {
    display: flex;
    align-items: center;
    background-color: $primary-color;
    border-radius: $radius;
    overflow: hidden;
    height: fit-content;
    width: 100%;
    gap: 1rem;

    &__img {
      width: 150px;
      height: 150px;
    }

    &__txt {
      display: flex;
      flex-direction: column;
    }
  }
}

.image-with-text {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-bottom: 4rem;

  &__full-width-image {
    width: 100%;
    height: 25dvh;
    object-fit: cover;
    object-position: center;

      @media (min-width: $big-tablet-screen) {
        height: 70dvh;
      }
  }

  &__text {
    padding: 1rem;
    display: flex;
    gap: 2rem;
    flex-direction: column;
    justify-content: space-between;
    color: $black-color;

    @media (min-width: $big-tablet-screen) {
      gap: 4rem;
      flex-direction: row;
      padding: 2rem;
      padding-right: 14vw;

    }

    & .subtitles {
      white-space: nowrap;
      font-weight: $thick;
      display: flex;
      flex-direction: column;
    }

    & .paragraphs,
    .list {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      list-style-position: inside;

      @media (min-width: $big-tablet-screen) {
        width: 50%;
        gap: 2rem;
      }

      .ul {
        list-style: none;
      }
    }
  }
}

.map-container {
  height: 50dvh;
  width: 100%;
}
</style>
