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

    <Container>
      <div class="article__txt" v-for="paragraph in article.paragraphs">
        <h3 class="subtitles">{{ paragraph.subtitle }}</h3>
        <div class="paragraphs" v-html="renderRichText(paragraph.text)"></div>
      </div>
    </Container>
  </article>

  <iframe
    class="article-video"
    :src="article.video"
    v-if="article.video"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
  ></iframe>

  <div class="images-gallery" v-if="article.gallery">
    <div
      class="images-gallery__img"
      v-for="image in article.gallery"
      :key="image.id"
    >
      <img :src="image.filename" :alt="image.alt" />
    </div>
  </div>
  <BlogArticlesCarousel :articleTitle="article.title" />
</template>
<style lang="scss" scoped>
.article {
  &__banner {
    background-size: cover;
    background-position: center;
    height: 100svh;
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
      height: 100svh;
      padding: 4rem 2rem;
    }

    &::after {
      content: "";
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(80deg, $text-color, transparent 60%);
    }

    .titles,
    .subtitles,
    &__date {
      z-index: 1;
    }

    &__date {
      font-size: 1rem;
      margin-top: 2rem;
    }
  }
  &__txt {
    display: flex;
    flex-direction: column;
    gap: 1rem;

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

.article-video {
  width: 100%;
  height: 400px;
  border: none;

  @media (min-width: $big-tablet-screen) {
    height: 100svh;
  }
}
</style>
