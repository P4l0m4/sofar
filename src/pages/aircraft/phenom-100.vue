<template>
  <picture class="plane">
    <source media="(min-width: 1100px)" srcset="@/assets/images/pc12.webp" />

    <h2 class="plane__title titles">Phenom 100</h2>
    <div class="plane__stats">
      <div class="plane__stats__stat">
        <p class="plane__stats__stat paragraphs">Cruise speed</p>
        <p class="plane__stats__stat subtitles">290 knots</p>
      </div>
      <div class="plane__stats__stat">
        <p class="plane__stats__stat paragraphs">Range</p>
        <p class="plane__stats__stat subtitles">1,803 Nm</p>
      </div>
      <div class="plane__stats__stat">
        <p class="plane__stats__stat paragraphs">Payload</p>
        <p class="plane__stats__stat subtitles">1000 kg</p>
      </div>
      <div class="plane__stats__stat">
        <p class="plane__stats__stat__name paragraphs">Seating</p>
        <p class="plane__stats__stat__figure subtitles">
          6
          <span class="plane__stats__stat__figure__small-text">+ 2 pilots</span>
        </p>
      </div>
    </div>

    <div class="plane__tags">
      <span class="plane__tags__tag tags"
        ><IconComponent color="#04045c" icon="pet_supplies" />Pet friendly</span
      >
      <span class="plane__tags__tag tags"
        ><IconComponent color="#04045c" icon="group_add" />Flexible layout</span
      >
      <span class="plane__tags__tag tags"
        ><IconComponent color="#04045c" icon="pet_supplies" />Cargo space</span
      >
      <span class="plane__tags__tag tags"
        ><IconComponent color="#04045c" icon="pet_supplies" />Internet on
        board</span
      >
      <span class="plane__tags__tag tags"
        ><IconComponent color="#04045c" icon="pet_supplies" />Bagage
        compartment</span
      >
      <span class="plane__tags__tag tags"
        ><IconComponent color="#04045c" icon="pet_supplies" />USB 110V
      </span>
    </div>

    <img class="plane__img" src="@/assets/images/pc12.webp" alt="banner image"
  /></picture>
  <EmptysForm />
</template>
