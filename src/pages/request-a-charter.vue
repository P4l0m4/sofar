<template>
  <div class="request-a-charter">
    <img class="logo" src="@/assets/images/logo-light.svg" alt="logo" />
    <h1 class="titles">Request a trip</h1>
    <h2 class="paragraphs">
      Fill out the form to be put in touch with our sales team available 24/7.
    </h2>
    <QuoteForm parent="request-a-charter" />
  </div>
</template>

<style scoped lang="scss">
.request-a-charter {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
  height: 100svh;
  gap: 1rem;
  justify-content: center;
  text-align: center;
  position: relative;
  background-image: url("@/assets/images/request-a-charter.webp");
  background-size: cover;
  background-position: center;

  .titles {
    color: $primary-color;
    font-weight: 600;
    font-size: 1.5rem;
  }

  .paragraphs {
    color: $primary-color;
    margin-bottom: 1rem;
  }

  .logo {
    width: 60px;
    height: 60px;
    position: absolute;
    top: 1rem;
    left: 1rem;
    right: 1rem;
    margin: auto;
  }
}
</style>
