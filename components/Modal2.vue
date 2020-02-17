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
                <p>
                  PAS-POL様を模写
                  <br />させていただきました。
                </p>
                <p>時期：2020年1月</p>
                <p>時間：20時間</p>
              </div>
              <div class="modal-text__item">
                <h1>使ったもの</h1>
                <ul class="text__item">
                  <li class="text__item-child">
                    HTML5/CSS3
                    <p>▷CSSアニメーション</p>
                    <p>▷BEM記法</p>
                    <p>▷Sass(scss)</p>
                  </li>
                  <li class="text__item-child">
                    jQuery
                    <p>▶︎ドロワーメニュー</p>
                    <p>▶︎スクロールトップ</p>
                    <p>▶︎スライダー</p>
                  </li>
                  <li class="text__item-child">
                    レスポンシブ対応
                    <p>▷メディアクエリ</p>
                    <p>▷FlexBox</p>
                  </li>
                  <li class="text__item-child">
                    その他
                    <p>▶︎Fontawesome</p>
                  </li>
                </ul>
              </div>
              <div class="modal-text__item">
                <button class="modal-text__item-btn">実際の模写サイト</button>
              </div>
            </div>
            <div class="modal-img">
              <img src="../assets/img/PAS-POL_PC.png" alt />
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
  & img {
    width: 95%;
    margin: auto;
    @include tab {
      width: 220px;
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
  font-size: 18px;
  font-family: $font-ja;
  position: relative;
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
  margin-top: 20px;

  &::before,
  &::after {
    content: "";
    z-index: 100;
    position: absolute;
    top: 50%;
    display: inline-block;
    width: 25%;
    height: 1px;
    background-color: #ffffff;
    @include tab {
      width: 15%;
      background-color: black;
    }
  }
  &:before {
    left: 0;
  }
  &:after {
    right: 0;
  }
}
</style>
