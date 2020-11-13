<template>
  <div>
    <h2 class="blog-title">Blog</h2>
    <div class="blog-article">
      <article v-for="content in contents" :key="content.id">
        <p class="blog-article__title">{{ content.title }}</p>
        <p class="blog-article__date">{{ content.date | moment }}</p>
        <div class="blog-article__content" v-html="content.text"></div>
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
      posts: [],
    };
  },
  async asyncData() {
    const { data } = await axios.get(
      // your-service-id部分は自分のサービスidに置き換えてください
      "https://mikuweb.microcms.io/api/v1/blog",
      {
        // your-api-key部分は自分のapi-keyに置き換えてください
        headers: { "X-API-KEY": "f887e442-fab1-49b3-af41-caaa81af2505" },
      }
    );
    return data;
  },
};
</script>

<style lang="scss" scoped>
.blog-title {
  @include main-title;
}
.blog-article {
  @include text;
  margin: -4rem auto 5rem auto;
  width: 90%;
  @include tab {
    width: 600px;
  }
  &__title {
    margin-top: 6em;
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
  &__content {
    margin-top: 2em;
    font-size: 15px;
    @include tab {
      font-size: 16px;
    }
  }
}

.main-visual {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  @include tab {
    position: static;
    flex-direction: row;
    padding-top: 100px;
    padding-left: 35px;
  }

  &__item2 {
    align-self: flex-end;
  }
  &-img {
    & img {
      width: 60%;
      object-fit: cover;
      margin-top: 3em;
      text-align: center;
      @include tab {
        width: 350px;
        height: 100%;
      }
      @include pc {
        padding-left: 20px;
      }
    }

    @include tab {
      position: relative;
    }
    &-line {
      @include tab {
        border: solid 1px #707070;
        padding-left: 10px;
        width: 300px;
        height: 400px;
        position: absolute;
        top: 60px;
        right: 65px;
        z-index: -1;
      }
      @include pc {
        top: 80px;
        right: 80px;
      }
    }
  }
  &__main {
    @include tab {
      padding-left: 2em;
      max-width: 580px;
    }
    &__text {
      @include text;
      margin: 0 auto;
      width: 95%;
      @include tab {
        width: 100%;
      }
    }
    &__title {
      font-size: 80px;
      @include tab {
        position: static;
        color: #3f3f3f;
      }
    }
  }
}
</style>
