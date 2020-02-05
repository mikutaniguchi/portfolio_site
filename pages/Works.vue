<template>
  <div>
    <h2 class="works-title">Works</h2>
    <div class="works-main">
      <div class="works-main__item" v-for="(worksItem,index) in worksItems" :key="index">
        <a href="#">
          <img :src="worksItem.img" alt />
          <p class="works-main__item__title">{{worksItem.title}}</p>
          <p class="works-main__item__text">{{worksItem.text}}</p>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import anime from "animejs";
export default {
  data() {
    return {
      worksItems: [
        {
          img: require("../assets/img/PAS-POL.png"),
          title: "コーディング模写１",
          text: "PAS-POL様のサイトを模写させていただきました。"
        },
        {
          img: require("../assets/img/SANGO.png"),
          title: "コーディング模写２",
          text: "SANGO様のサイトを模写させていただきました。"
        },
        {
          img: require("../assets/img/PHPService.png"),
          title: "PHP/Laravel",
          text: "写真と旅行の感想が投稿できる写真共有サービスを作りました。"
        },
        {
          img: require("../assets/img/LikeSlack.png"),
          title: "Nuxt.js/Firebase",
          text:
            "Googleアカウントを使ってログインできるSlack風アプリを作成しました。※チュートリアルあり"
        }
      ]
    };
  },
  components: {
    anime // animeという名前でコンポーネント登録
  }
};
</script>

<style lang="scss" scoped>
.works-title {
  @include main-title;
}
.works-main {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @include tab {
    justify-content: space-around;
  }
  &__item {
    font-family: $font-ja;
    margin-bottom: 50px;
    max-width: 90%;
    @include tab {
      width: 350px;
    }
    & img {
      width: 100%;
    }
    &__title {
      font-weight: 700;
      font-size: 17px;
      padding: 5px 0;
    }
  }
}
</style>
