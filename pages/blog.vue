<template>
  <div>
    <h2 class="blog-title">Blog</h2>
    <div class="blog-article">
      <article v-for="post in posts" :key="post.id">
        <p class="blog-article__title">{{ post.title.rendered }}</p>
        <p class="blog-article__date">{{ post.date | moment }}</p>
        <div class="blog-article__content" v-html="post.content.rendered"></div>
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
  mounted() {
    axios
      .get("https://wp.mikuweb.net/wp-json/wp/v2/blog/")
      .then((response) => (this.posts = response.data));
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
    font-size: 14px;
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

$main-color: #fff;
$small-color: #d48a8a;
$dark-color: #e94046;
$background: #f4f4f4;
.article {
  width: 100%;
}
.article-background {
  background: #fff;
}

.post-nav {
  display: flex;
  justify-content: space-between;
}

.article-content {
  margin-bottom: 50px;
}
.article-content h1 {
  margin: 20px 0;
  font-size: 25px;
  color: $dark-color;
}
.article-content h2 {
  margin: 20px 0;
  font-size: 24px;
  font-weight: 700;
  border-left: solid 5px $main-color;
}
.article-content h3 {
  margin: 20px 0;
  font-size: 20px;
  font-weight: 700;
}
.article-content p,
.article-content h1,
.article-content h2,
.article-content h3 {
  line-height: 1.8;
  letter-spacing: 1px;
}
.article-content table {
  border: dashed 2px #9c9a9a;
  width: 100%;
}
.article-content td {
  padding: 5px;
  padding-left: 10px;
}
</style>
