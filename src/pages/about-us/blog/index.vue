<template>
  <section class="blog">
    <h1 class="titles">Blog</h1>
    <div class="blog__articles">
      <div class="blog__articles__article">
        <img
          class="blog__articles__article__img"
          src="@/assets/images/clouds.webp"
          alt="article preview image"
        />
        <div class="blog__articles__article__txt">
          <span class="blog__articles__article__txt__tag tags"
            >Subject of the article</span
          >
          <h2 class="blog__articles__article__txt__title">Article title</h2>
          <p class="paragraphs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            libero saepe quod repellat repudiandae.
          </p>
          <NuxtLink to="/blog/article">
            <span
              class="blog__articles__article__txt__read-more button-tertiary"
              >Read more</span
            ></NuxtLink
          >
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.blog {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem 1rem;

  @media (min-width: $big-tablet-screen) {
    gap: 2rem;
    padding: 4rem 1rem;
  }

  &__articles {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(460px, 1fr));
    gap: 1rem;

    @media (min-width: $big-tablet-screen) {
      gap: 2rem;
    }

    &__article {
      align-items: center;
      display: flex;
      gap: 1rem;
      height: 360px;

      &__img {
        width: 50%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }

      &__txt {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        &__tag {
        }

        &__title {
          font-weight: $skinny;
          font-size: 1.4rem;
        }

        & .paragraphs {
          color: $text-color-faded-strong;
        }

        &__read-more {
        }
      }
    }
  }
}
</style>
