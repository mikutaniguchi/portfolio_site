<template>
  <div>
    <h2 class="about-title">About</h2>
    <swiper :options="swiperOption">
      <swiper-slide>
        <div class="about-article">
          <!-- <div class="about-article" v-for="(aboutItem,index) in aboutItems" :key="index"> -->
          <img src="../assets/img/about_bakery.png" alt />
          <p class="about-article__title">パン作り</p>
          <p
            class="about-article__text"
          >去年からパン作りにハマり、時々家族や友人に作っています。昔から細かい作業が好きで、手芸やアクセサリー作りに夢中になっている時期もありました。細かい工程が好きなのでメロンパンはよく作ります。</p>
          <!-- </div> -->
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="about-article">
          <img src="../assets/img/domesticTrip.png" alt />
          <p class="about-article__title">国内旅行</p>
          <p
            class="about-article__text"
          >自然のアクティビティや綺麗な景色、美味しい食べ物巡りが好きです。宮古島ではシュノーケリング、野沢温泉ではスノーボードを楽しみました。最近では伊豆方面に行って海鮮丼を食べたり海の見えるカフェでまったりしたりします。</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="about-article">
          <img src="../assets/img/abroad.png" alt />
          <p class="about-article__title">海外</p>
          <p
            class="about-article__text"
          >ワーキングホリデービザを使ってNZで9ヶ月間過ごしました。壮大な自然の中、様々な国の友人を作って英語上達と海外生活を楽しみました。ただ、食べ物は日本が一番と気づき、今後の拠点は日本だと確信しました。</p>
        </div>
      </swiper-slide>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  data() {
    return {
      swiperOption: {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      // TODO: 配列表示できるかどうか
      aboutItems: [
        {
          img: require("../assets/img/about_bakery.png"),
          title: "パン作り",
          text:
            "去年からパン作りにハマり、時々家族や友人に作っています。昔から細かい作業が好きで、手芸やアクセサリー作りに夢中になっている時期もありました。細かい工程が好きなのでメロンパンはよく作ります。"
        },
        {
          img: require("../assets/img/about_bakery.png"),
          title: "国内旅行",
          text:
            "自然のアクティビティや綺麗な景色、美味しい食べ物巡りが好きです。宮古島ではシュノーケリング、野沢温泉ではスノーボードを楽しみました。最近では伊豆方面に行って海鮮丼を食べたり海の見えるカフェでまったりしたりします。"
        },
        {
          img: require("../assets/img/about_bakery.png"),
          title: "海外",
          text:
            "ワーキングホリデービザを使ってNZで9ヶ月間過ごしました。壮大な自然の中、様々な国の友人を作って英語上達と海外生活を楽しみました。ただ、食べ物は日本が一番と気づき、今後の拠点は日本だと確信しました。"
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
    text-align: center;
    @include tab {
      padding: 10px 0;
      text-align: left;
    }
  }
  &__text {
    @include text;
    padding: 0 7px;
    @include tab {
      padding: 0;
    }
  }
}
@mixin slider {
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0);
  width: 50px;
  height: 50px;
  border-radius: 50px;
  margin-bottom: 50px;
  outline: none;
  background-size: 30px 30px;
  @include tab {
    width: 80px;
    height: 80px;
    box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.1);
  }
}
.swiper-button-prev {
  @include slider;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%233f3f3f'%2F%3E%3C%2Fsvg%3E");
}

.swiper-button-next {
  padding-bottom: 50px;
  @include slider;
  // fill%3D’%23のあとのコードを変える
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%233f3f3f'%2F%3E%3C%2Fsvg%3E");
}
</style>
