<script setup>
import { stringToSlug } from "~/utils/slugify";
const story = await useAsyncStoryblok("blog", { version: "published" });
const dayjs = useDayjs();
const route = useRoute();
const articleSlug = route.params.slug;
const article = story.value.content.articles.find(
  (a) => stringToSlug(a.title) === articleSlug
);
</script>
<template>
  <article class="article">
    <Container>
      <div
        class="article__banner"
        :style="{ backgroundImage: `url(${article.banner.filename})` }"
      >
        <h1 class="titles">{{ article.title }}</h1>
        <h2 class="subtitles">{{ article.TLDR }}</h2>
        <span class="article__banner__date">{{
          dayjs(article.date).format("MMMM DD, YYYY")
        }}</span>
      </div>
    </Container>
    <Container>
      <div class="article__txt" v-for="paragraph in article.paragraphs">
        <h3 class="subtitles">{{ paragraph.subtitle }}</h3>
        <div class="paragraphs" v-html="renderRichText(paragraph.text)"></div>
      </div>
    </Container>
  </article>
</template>
<style lang="scss" scoped>
.article {
  &__banner {
    background-size: cover;
    background-position: center;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem 1rem;
    // align-items: center;
    color: $text-color-alt;
    height: 400px;
    gap: 1rem;
    position: relative;
    text-shadow: $shadow-text;

    @media (min-width: $big-tablet-screen) {
      height: 500px;
      padding: 4rem 2rem;
    }

    &__date {
      font-size: 1rem;
    }
  }
  &__txt {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0 1rem 0 1rem;

    @media (min-width: $big-tablet-screen) {
      padding: 0;
    }

    &:deep(ul) {
      list-style: square;
      padding-top: 1rem;
      padding-left: 1rem;
    }
    &:deep(a) {
      text-decoration: line-through;
      text-decoration-color: $secondary-color-faded;
      text-decoration-thickness: 10px;
    }
  }
}
</style>
