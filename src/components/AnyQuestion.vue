<template>
  <section class="any-question">
    <div class="any-question__content">
      <h2 class="titles">Any question ?</h2>
      <p class="paragraph">Please get in touch with our team</p>
      <a class="button-primary" href="tel:+19144686800">Contact us</a>
    </div>
    <img class="any-question__img" src="@/assets/images/jet-side-view.webp" />
  </section>
</template>
<style lang="scss" scoped>
.any-question {
  padding: 2rem 1rem;
  gap: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: $big-tablet-screen) {
    padding: 4rem 2rem;
    gap: 4rem;
    flex-direction: row;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    width: fit-content;

    & h2,
    p {
      white-space: nowrap;
    }

    & a {
      margin-top: 2rem;
    }
  }

  &__img {
    height: 400px;
    width: 100%;
    max-width: 600px;
    object-fit: cover;
    border-radius: $radius 0 $radius 0;
  }
}
</style>
