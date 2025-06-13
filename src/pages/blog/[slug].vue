<script setup>
import { stringToSlug } from "~/utils/slugify";
const story = await useAsyncStoryblok("blog", { version: "published" });
const dayjs = useDayjs();
const route = useRoute();
const articleSlug = route.params.slug;
const article = story.value.content.articles.find(
  (a) => stringToSlug(a.title) === articleSlug
);

useHead({
  title: `${article.title} | Sofar`,
  meta: [
    {
      name: "description",
      content: article.TLDR,
    },
  ],
});

useJsonld(() => ({
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": window.location.href,
  },
  headline: article.title,
  description: article.TLDR,
  image: article.banner.filename,
  author: {
    "@type": "Organization",
    name: "Sofar, private jet charter",
    url: window.location.origin + `/blog/${articleSlug}`,
  },
  publisher: {
    "@type": "Organization",
    name: "Sofar, private jet charter",
    logo: {
      "@type": "ImageObject",
      url: "https://chamberycampus.com/_nuxt/logo-inseec.a0368931.svg",
    },
  },
  datePublished: dayjs(article.date).format("YYYY[-]MM[-]DD[T]HH[:]mm"),
}));

const breadcrumbs = [
  {
    name: "Home",
    url: window.location.origin,
  },
  {
    name: "Blog",
    url: window.location.origin + "/blog",
  },
  {
    name: article.title,
    url: window.location.href,
  },
];
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
      <div class="article__banner__buttons">
        <QuotePopUpButton :style="`light`" />
      </div>
    </div>

    <Container>
      <div class="article__content" v-for="paragraph in article.paragraphs">
        <img
          v-if="paragraph.image?.filename"
          class="article__content__img"
          :src="paragraph.image?.filename"
          :alt="paragraph.image?.alt"
        />
        <div class="article__content__txt">
          <h3 class="subtitles">{{ paragraph.subtitle }}</h3>
          <div class="paragraphs" v-html="renderRichText(paragraph.text)"></div>
        </div>
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
  <JsonldBreadcrumb :links="breadcrumbs" />
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
    height: 100svh;
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
      opacity: 0.4;
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

    &__buttons {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      width: 100%;
      margin-top: 1rem;
      z-index: 1;

      @media (min-width: $big-tablet-screen) {
        flex-direction: row;
        margin-top: 2rem;
      }

      .button-primary--light {
        @media (min-width: $big-tablet-screen) {
          width: fit-content;
        }
      }
    }
  }
  &__content {
    display: flex;
    gap: 1rem;
    flex-direction: column;

    @media (min-width: $big-tablet-screen) {
      gap: 2rem;
      flex-direction: row;
    }

    &__img {
      width: 100%;
      max-width: 500px;
      height: 300px;
      object-fit: cover;

      @media (min-width: $big-tablet-screen) {
        height: 100%;
        max-height: 500px;
        min-width: 500px;
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
        // text-decoration: line-through;
        // text-decoration-color: $sky-color-faded;
        // text-decoration-thickness: 10px;
        background: linear-gradient(transparent, $sky-color-faded, transparent);
      }
      &:deep(span) {
        color: $text-color !important;
      }
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
