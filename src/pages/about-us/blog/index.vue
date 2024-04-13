<script setup>
import { stringToSlug } from "~/utils/slugify";
const dayjs = useDayjs();

const story = await useAsyncStoryblok("blog", { version: "published" });
</script>
<template>
  <section class="blog">
    <h1 class="titles">Our Blog</h1>
    <h2 class="subtitles">Learn about our latest news, travels and trends</h2>
    <div class="blog__articles">
      <NuxtLink
        :to="`/about-us/blog/${stringToSlug(article.title)}`"
        class="blog__articles__article shadow-on-hover"
        v-for="article in story.content.articles"
      >
        <img
          class="blog__articles__article__img"
          :src="article.previewImage.filename"
          :alt="article.previewImage.alt"
        />
        <div class="blog__articles__article__txt">
          <span class="blog__articles__article__txt__tag tags">{{
            article.tag
          }}</span>
          <h2 class="blog__articles__article__txt__title">
            {{ article.title }}
          </h2>
          <span class="blog__articles__article__txt__date">{{
            dayjs(article.date).format("MMMM DD, YYYY")
          }}</span>
          <p class="paragraphs">
            {{ article.TLDR }}
          </p>
          <NuxtLink :to="`/about-us/blog/${stringToSlug(article.title)}`">
            <span
              class="blog__articles__article__txt__read-more button-tertiary"
              >Read more</span
            ></NuxtLink
          >
        </div>
      </NuxtLink>
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
    padding: 4rem 2rem;
  }

  & h2 {
    margin-top: -1rem;
  }

  &__articles {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(343px, 1fr));
    gap: 1rem;

    @media (min-width: $big-tablet-screen) {
      gap: 2rem;
      grid-template-columns: repeat(auto-fill, minmax(480px, 1fr));
    }

    &__article {
      align-items: center;
      display: flex;
      gap: 1rem;
      height: 340px;
      max-width: 600px;

      @media (min-width: $big-tablet-screen) {
        min-width: 500px;
      }

      &__img {
        width: 50%;
        max-width: 50%;
        min-width: 50%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }

      &__txt {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        &__tag {
          margin-bottom: 1rem;
        }

        &__title {
          font-weight: $skinny;
          font-size: 1.4rem;
        }

        &__date {
          color: $text-color-faded-strong;
          font-size: $small-text;
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
