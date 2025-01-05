<script setup lang="ts">
import { stringToSlug } from "~/utils/slugify";
import { ref } from "vue";
const story = await useAsyncStoryblok("blog", { version: "published" });
const dayjs = useDayjs();
const categorySelected = ref("all");

const allCategories = computed(() => {
  let categories = new Set();
  story.value.content.articles.forEach((article) => {
    categories.add(article.tag);
  });
  return Array.from(categories);
});

const articlesMatchingCategory = computed(() => {
  if (categorySelected.value === "all") {
    return story.value.content.articles;
  }
  return story.value.content.articles.filter(
    (article) => article.tag === categorySelected.value
  );
});

useHead({
  title: "Blog | Private Jet Charter | Sofar",
  meta: [
    {
      name: "description",
      content:
        "Stay up to date with the latest news, tips and ideas on private jet travel from Sofar. Read our blog for expert advice and industry updates.",
    },
  ],
});

useJsonld(() => ({
  "@context": "https://schema.org/",
  "@type": "WebSite",
  name: "Private Jet Frequently Asked Questions | Sofar",
  url: window.location.origin + "/blog",
}));

const breadcrumbs = [
  {
    name: "Home",
    url: window.location.origin,
  },
  {
    name: "About us",
    url: window.location.origin + "/about-us",
  },
  {
    name: "Blog",
    url: window.location.href,
  },
];
</script>
<template>
  <section class="blog">
    <h1 class="titles">Our Blog</h1>
    <h2 class="subtitles">Learn about our latest news, travels and trends</h2>

    <div class="blog__tags">
      <span
        class="blog__tags__tag tags scale-on-hover"
        :class="{
          'blog__tags__tag--selected': categorySelected === 'all',
        }"
        @click="categorySelected = 'all'"
        >All</span
      >
      <span
        class="blog__tags__tag tags scale-on-hover"
        :class="{
          'blog__tags__tag--selected': categorySelected === category,
        }"
        v-for="(category, i) in allCategories"
        :key="i"
        @click="categorySelected = category"
        >{{ category }}</span
      >
    </div>
    <div class="blog__articles">
      <NuxtLink
        :to="`/about-us/blog/${stringToSlug(article.title)}`"
        class="blog__articles__article shadow-on-hover"
        v-for="article in articlesMatchingCategory"
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
  <JsonldBreadcrumb :links="breadcrumbs" />
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

  &__tags {
    display: flex;
    gap: 1rem;
    width: 100%;
    overflow-x: scroll;
    margin-bottom: 1rem;

    &::-webkit-scrollbar {
      display: none;
    }

    &__tag {
      cursor: pointer;
      transition: border 0.3s;

      &--selected {
        border: 1px solid $text-color;
      }
    }
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
