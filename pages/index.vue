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
        <p
          class="main-visual__main__text"
        >気になったことはやってみる好奇心旺盛な性格。旅行が好きで宮古島、野沢温泉、ニュージーランドに長期滞在しながら旅をする生活をしていた。もともと何かを作ることが好きであること、将来的に場所を選ばず働くことができるという理由からエンジニアへ転職。スキルアップのため日々奮闘中。</p>
        <h1 class="main-visual__main__title">Miku Taniguchi</h1>
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
  justify-content: center;
  align-items: center;
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
      width: 100%;
      height: 100vh;
      object-fit: cover;
      @include tab {
        width: 350px;
        height: 100%;
        padding-left: 10px;
      }
      @include pc {
        padding-left: 20px;
      }
    }
    &-img::after {
      background-color: rgba(0, 0, 0, 0.4);
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      content: " ";
      @include tab {
        background-color: rgba(0, 0, 0, 0);
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
    max-width: 580px;
    padding-left: 2em;
    &__text {
      @include text;
      color: #ffffff;
      position: absolute;
      bottom: 90px;
      left: 4%;
      margin: auto;
      z-index: 1;
      width: 95%;
      @include tab {
        position: static;
        color: black;
        font-weight: 400;
        width: 100%;
      }
    }
    &__title {
      position: absolute;
      top: 30px;
      left: 3%;
      font-size: 80px;
      color: #ffffff;
      @include tab {
        position: static;
        color: #3f3f3f;
      }
    }
  }
}
</style>
