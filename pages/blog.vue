<template>
  <div class="blog">
    <h2 class="blog-title">Blog</h2>
    <div class="blog-article">
      <article v-for="content in contents" :key="content.id">
        <nuxt-link :to="`/${content.id}`" class="blog-article__link">
          <h1 class="blog-article__title">{{ content.title }}</h1>
          <p class="blog-article__date">{{ content.date | moment }}</p>
        </nuxt-link>
      </article>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import moment from "moment";

export default {
  data() {
    return {
      posts: []
    };
  },
  async asyncData({ $config }) {
    // const { data } = await axios.get(`${$config.apiUrl}/blog`, {
    const { data } = await axios.get(
      "https://mikuweb.microcms.io/api/v1/blog",
      {
        headers: { "X-API-KEY": "f887e442-fab1-49b3-af41-caaa81af2505" }
      }
    );
    return data;
  }
};
</script>

<style lang="scss" scoped>
.blog {
  padding-bottom: 3rem;
}
.blog-title {
  @include main-title;
}
.blog-article {
  @include text;
  margin: 0 auto 5rem auto;
  width: 90%;
  @include tab {
    width: 600px;
  }
  &__title {
    margin-top: 3em;
    text-align: center;
    font-size: 24px;
    @include tab {
      font-size: 27px;
    }
  }
  &__date {
    text-align: center;
    font-size: 12px;
    color: #707070;
    font-family: "Roboto", "游ゴシック体", "Yu Gothic", serif;
    @include tab {
      font-size: 14px;
    }
  }
  &__link {
    color: #000;
    transition: all 0.3s ease;
    &:hover {
      display: block;
      opacity: 0.6;
    }
  }
}
</style>
