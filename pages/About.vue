<template>
  <div>
    <h2 class="about-title">About</h2>
    <div class="about-article" v-for="(aboutItem,index) in aboutItems" :key="index">
      <img :src="aboutItem.img" alt />
      <p class="about-article__title">{{aboutItem.title}}</p>
      <p class="about-article__text">{{aboutItem.text}}</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      aboutItems: [
        {
          img: require("../assets/img/about_bakery.png"),
          title: "パン作り",
          text:
            "去年からパン作りにハマり、時々家族や友人に作る。昔から細かい作業が好きで、手芸やアクセサリー作りをすることもある。メロンパンとハムパンが得意。"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.about-title {
  @include main-title;
}
.about-article {
  max-width: 510px;
  margin: 0 auto;
  font-family: $font-ja;
  & img {
    width: 100%;
    @include tab {
      width: 510px;
    }
  }

  &__title {
    font-size: 40px;
    padding: 5px 7px;
    @include tab {
      padding: 10px 0;
    }
  }
  &__text {
    @include text;
    padding: 0 7px;
    @include tab {
    }
  }
}
</style>
