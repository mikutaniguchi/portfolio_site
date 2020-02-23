<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <button class="modal-default-button" @click="$emit('close')">
            <i class="fas fa-times"></i>
          </button>
          <div class="modal-container__main">
            <div class="modal-text">
              <div class="modal-text__item">
                <h1>制作</h1>
                <p>Nuxt.jsにより制作</p>
                <p>時期：2020年2月</p>
                <p>時間：40時間</p>
              </div>
              <div class="modal-text__item">
                <h1>使ったもの</h1>
                <ul class="text__item">
                  <li class="text__item-child">
                    デザイン
                    <p>▶︎Adobe XD</p>
                  </li>
                  <li class="text__item-child">
                    HTML5/CSS3
                    <p>▶︎BEM記法</p>
                    <p>▶︎Sass(scss)</p>
                  </li>
                  <li class="text__item-child">
                    Vue.js
                    <p>▶︎モーダル</p>
                    <p>▶︎バリデーション</p>
                    <p>▶︎配列表示</p>
                  </li>
                  <li class="text__item-child">
                    Vue.js/plugins
                    <p>▶︎vue-scrollto.js</p>
                    <p>▶︎vue-awesome-swiper.js</p>
                  </li>
                  <li class="text__item-child">
                    Firebase
                    <p>▶︎お問い合わせフォーム</p>
                  </li>
                  <li class="text__item-child"></li>
                </ul>
              </div>
              <div class="modal-text__item">
                <a
                  href="https://xd.adobe.com/view/87c9eb8f-37d9-4606-4ca0-73f467a67202-f1f8/"
                  target="_brank"
                >
                  <button class="modal-text__item-btn">デザインカンプ</button>
                </a>
              </div>
            </div>
            <div class="modal-img">
              <img src="../assets/img/portfolio_site_about.png" alt />
              <img src="../assets/img/portfolio_site_skills.png" alt />
              <img src="../assets/img/portfolio_site_works.png" alt />
              <img src="../assets/img/portfolio_site_contact.png" alt />
            </div>
          </div>
          <button class="modal-default-button close-button" @click="$emit('close')">閉じる</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.modal-mask {
  @include modalMask;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
  height: 100vh;
  overflow-y: hidden;
}

.modal-container {
  @include modalContainer;
}
.modal-default-button {
  @include modalDefaultButton;
}
.close-button {
  @include btn;
  @include closeButton;
}
.modal-enter {
  opacity: 0;
}
.modal-leave-active {
  opacity: 0;
}
.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
.modal-container__main {
  display: flex;
  flex-direction: column-reverse;
  @include tab {
    flex-direction: row;
    justify-content: space-around;
  }
}
.modal-img {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  & img {
    width: 95%;
    margin: auto;
    margin-bottom: 5px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.4);
    @include tab {
      width: 250px;
      object-fit: contain;
    }
  }
}
.modal-text {
  @include modalText;
}
.text__item {
  @include modalTextItem;
}
h1 {
  @include modal-h1;
}
</style>
