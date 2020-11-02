<template>
  <div class="center">
    <div class="main-visual">
      <div class="main-visual-img main-visual__item1">
        <div class="main-visual-img-img">
          <img src="../assets/img/main-visual.png" width="340px" alt />
        </div>
        <div class="main-visual-img-line"></div>
      </div>
      <div class="main-visual__main main-visual__item2">
        <p class="main-visual__main__text">
          気になったことはやってみる好奇心旺盛な性格。旅行が好きで宮古島、野沢温泉、ニュージーランドに長期滞在しながら旅をする生活をしていた。もともと何かを作ることが好きで、実際にプログラミングを始めた時に楽しいと感じてエンジニアに転職。デザインに強いフロントエンドエンジニアを目指して日々修行中。</p>
        <h1 class="main-visual__main__title">
          Miku
          <br class="sp_br" />Taniguchi
        </h1>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.center {
  margin: 0 auto;
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
    display: flex;
    flex-direction: column-reverse;
    @include tab {
      flex-direction: column;
    }
  }
  &-img {
    width: 90%;
    margin: 0 auto;
    text-align: center;
    @include tab {
      width: auto;
      text-align: left;
    }
    & img {
      width: 87%;
      object-fit: cover;
      margin-top: 2.5em;
      text-align: center;
      @include tab {
        width: 350px;
        height: 100%;
        margin-top: 1em;
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
        width: 320px;
        height: 420px;
        position: absolute;
        top: 60px;
        right: 60px;
        z-index: -1;
      }
      @include pc {
        top: 85px;
        right: 60px;
      }
    }
  }
  &__main {
    width: 95%;
    margin: 0 auto;
    position: relative;
    @include tab {
      padding-left: 2em;
      max-width: 580px;
    }
    &__text {
      @include text;
      margin-top: 2em;
      @include tab {
        margin-top: 1em;
      }
    }
    &__title {
      position: absolute;
      top: -2.5em;
      left: 12%;
      font-size: 47px;
      color: #fffff0;
      text-align: left;
      @include tab {
        color: #3f3f3f;
        font-size: 80px;
        text-align: left;
        position: static;
      }
    }
  }
}
.sp_br {
  display: block;
  @include tab {
    display: none;
  }
}
</style>
