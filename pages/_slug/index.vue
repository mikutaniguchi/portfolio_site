<template>
  <div class="blog-single">
    <h1 class="blog-single__title">{{ title }}</h1>
    <p class="blog-single__date">{{ date | moment }}</p>
    <div class="blog-single__content" v-html="text"></div>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";

export default {
  async asyncData({ params }) {
    const { data } = await axios.get(
      `https://mikuweb.microcms.io/api/v1/blog/${params.slug}`,
      {
        headers: { "X-API-KEY": "f887e442-fab1-49b3-af41-caaa81af2505" }
      }
    );
    return data;
  }
};
</script>
<style lang="scss" scoped>
.blog-single {
  @include text;

  margin: 0 auto;
  width: 90%;
  @include tab {
    width: 600px;
  }
  &__title {
    margin-top: 3em;
    text-align: center;
    font-size: 24px;

    @include tab {
      font-size: 30px;
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
  &__content {
    padding-bottom: 5rem;
    margin-top: 2em;
    font-size: 15px;
    line-height: 2.4;
    @include tab {
      font-size: 16px;
    }
  }
}
</style>
