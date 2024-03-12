<template>
  <aside class="aside">
    <nav class="aside__nav">
      <ul class="aside__nav__ul">
        <li class="aside__nav__ul__li">
          <NuxtLink class="aside__nav__ul__li__link" to="/booking"
            >Booking</NuxtLink
          >
        </li>
      </ul>
    </nav>
  </aside>
</template>
<style lang="scss" scoped>
.aside {
  position: fixed;
  inset: 0 0 0 auto;
  height: 100svh;

  &__nav {
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: $text-color-faded;
    padding: 1rem;
    gap: 1rem;
    height: 100%;
    backdrop-filter: blur(6px);

    &__ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 1rem;

      &__li {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        border-radius: $radius;
        background-color: $text-color-faded;

        &__link {
          text-decoration: none;
          color: $text-color-alt;
          font-size: 1.1rem;
          font-weight: $skinny-thick;
        }
      }
    }
  }
}
</style>
