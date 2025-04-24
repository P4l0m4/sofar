<template>
  <section class="private-jet-charter">
    <div class="private-jet-charter__headlines">
      <h3 class="titles">Private Jet Charter</h3>
      <span class="subtitles">Make it Anywhere</span>
    </div>
    <p class="paragraphs">
      Founded in 2019, Sofar has grown from humble beginnings to become a
      trusted name in private aviation. Operating from New York, Miami, and Los
      Angeles, we offer bespoke flights tailored to meet the unique needs of
      each client. Known for our unwavering commitment to excellence, customer
      focus, and responsiveness, Sofar redefines private jet travel by
      prioritizing comfort, safety, and satisfaction. Whether for business or
      leisure, every journey reflects our dedication to providing personalized
      and reliable experiences.
    </p>
    <NuxtLink class="button-primary--light" to="/about-us/our-story"
      >Our story</NuxtLink
    >
  </section>
</template>
<style lang="scss" scoped>
.private-jet-charter {
  height: fit-content;
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  gap: 2rem;
  background-color: $secondary-color;

  @media (min-width: $big-tablet-screen) {
    padding: 4rem;
    gap: 3rem;
  }

  &__headlines {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: $text-color-alt;
    align-items: center;
  }
  .titles {
    text-align: center;
  }
  .paragraphs {
    color: $text-color-alt;
    max-width: 800px;
    text-align: justify;
    text-wrap: balance;

    @media (min-width: $big-tablet-screen) {
      text-align: center;
    }
  }

  .button-primary--light {
    width: 100%;
    max-width: 250px;
  }
}
</style>
