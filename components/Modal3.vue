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
                  SANGO様を模写
                  <br class="br-display" />させていただきました。
                </p>
                <p>時期：2019年12月</p>
                <p>時間：20時間</p>
                <p>※PCサイズのみ</p>
              </div>
              <div class="modal-text__item">
                <h1>使ったもの</h1>
                <ul class="text__item">
                  <li class="text__item-child">
                    HTML5/CSS3
                    <p>▶︎position,z-index</p>
                    <p>▶︎CSSアニメーション</p>
                    <p>▶︎FlexBox</p>
                  </li>
                  <li class="text__item-child">
                    Bootstrap
                    <p>▶︎タブ切り替え</p>
                    <p>▶︎検索項目</p>
                  </li>
                  <li class="text__item-child">
                    その他
                    <p>▶︎Fontawesome</p>
                  </li>
                  <li class="text__item-child"></li>
                </ul>
              </div>
              <div class="modal-text__item displayNone">
                <a href="https://unruffled-hermann-b67586.netlify.com/" target="_brank">
                  <button class="modal-text__item-btn">実際作ったものを見る</button>
                </a>
              </div>
            </div>
            <div class="modal-img">
              <img src="../assets/img/SANGO_PC.png" alt />
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
  flex-direction: column;
  justify-content: flex-start;
  @include tab {
    flex-direction: row;
    justify-content: space-around;
  }
}
.modal-img {
  @include Modalimg(260px);
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
.displayNone {
  display: none;
  @include tab {
    display: block;
  }
}
.br-display {
  display: none;
  @include tab {
    display: block;
  }
}
</style>
