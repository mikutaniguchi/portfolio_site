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
                  旅行の写真を共有する
                  <br />サービスを作りました。
                </p>
                <p>時期：2019年7月</p>
                <p>時間：30時間</p>
              </div>
              <div class="modal-text__item">
                <h1>使ったもの</h1>
                <ul class="text__item">
                  <li class="text__item-child">
                    PHP/Laravel
                    <p>▶︎投稿、編集、削除</p>
                    <p>▶︎検索</p>
                    <p>▶︎新規登録、ログイン</p>
                  </li>
                  <li class="text__item-child">
                    Bootstrap4
                    <p>▶︎レスポンシブ</p>
                    <p>▶︎画面レイアウト</p>
                    <p>▶︎ボタン、装飾</p>
                  </li>
                  <li class="text__item-child">
                    AWS
                    <p>▶︎Cloud9</p>
                    <p>▶︎S3</p>
                  </li>
                  <li class="text__item-child"></li>
                </ul>
              </div>
              <div class="modal-text__item">
                <a href="https://tripper-miku.herokuapp.com/" target="_brank">
                  <button class="modal-text__item-btn">実際作ったサイト</button>
                </a>
              </div>
            </div>
            <div class="modal-img">
              <img src="../assets/img/Tripper.png" alt />
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
  @include Modalimg(290px);
  & img {
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.4);
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
