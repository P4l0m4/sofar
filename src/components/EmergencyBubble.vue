<template>
  <a class="emergency-bubble" href="tel:+19144686800">
    <img class="emergency-bubble__icon" src="/assets/icons/call_quality.svg" />
    <span class="emergency-bubble__number">+1 (914) 468-6800</span>
  </a>
</template>
<style lang="scss" scoped>
.emergency-bubble {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: $text-color-faded-strong;
  border-radius: $radius;
  padding: 0.5rem 1rem;
  gap: 0.5rem;
  margin-left: 0.5rem;
  margin-bottom: 0.5rem;
  width: fit-content;
  cursor: pointer;

  &__icon {
    width: 1rem;
    height: 1rem;
  }

  &__number {
    font-size: $small-text;
    color: $text-color-alt;
    white-space: nowrap;
    display: none;

    @media (min-width: $big-tablet-screen) {
      display: block;
    }
  }
}
</style>
