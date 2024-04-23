<template>
  <section class="why-choose-us">
    <h2 class="titles">Why choose us</h2>

    <ol class="why-choose-us__reasons titles">
      <li class="why-choose-us__reasons__content">
        <h3 class="subtitles"><span>01.</span>Extensive Fleet</h3>
        <p class="paragraphs">
          Choose from a diverse fleet of over 6,000 turboprops, executive jets,
          and airliners.
        </p>
      </li>
      <li class="why-choose-us__reasons__content">
        <h3 class="subtitles"><span>02.</span>Personalized Selection</h3>
        <p class="paragraphs">
          Select the specific make and model of the jet for each flight,
          ensuring your preferences are met.
        </p>
      </li>
      <li class="why-choose-us__reasons__content">
        <h3 class="subtitles"><span>03.</span>Availability Around the Clock</h3>
        <p class="paragraphs">
          Our jet aircraft charters are available 24/7, 365 days a year,
          providing you the flexibility to travel on your terms.
        </p>
      </li>
      <li class="why-choose-us__reasons__content">
        <h3 class="subtitles"><span>04.</span>Swift Departures</h3>
        <p class="paragraphs">
          With just a 4-hour notice (or even less), one phone call is all it
          takes to arrange your private jet charter.
        </p>
      </li>
      <li class="why-choose-us__reasons__content">
        <h3 class="subtitles"><span>05.</span>Hassle-Free Travel</h3>
        <p class="paragraphs">
          Skip airport traffic, avoid long security lines, and bid farewell to
          travel hassles. Your journey begins seamlessly with us.
        </p>
      </li>
    </ol>
  </section>
</template>
<style lang="scss" scoped>
.why-choose-us {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem 1rem;

  @media (min-width: $big-tablet-screen) {
    padding: 4rem 2rem;
    gap: 2rem;
  }

  &__reasons {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media (min-width: $big-tablet-screen) {
      gap: 2rem;
      flex-direction: row;
      flex-wrap: wrap;
    }

    &__content {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      max-width: 343px;

      & .subtitles {
        display: flex;
        flex-direction: column;
        color: $secondary-color;

        & span {
          font-size: $titles;
          color: $secondary-color;
        }
      }
    }
  }
}
</style>
