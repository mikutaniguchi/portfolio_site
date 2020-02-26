<template>
  <div>
    <h2 class="contact-title">Contact</h2>
    <div class="contact-main">
      <div class="contact-main__sns">
        <div class="contact-main__sns__item" v-for="(snsItem,index) in snsItems" :key="index">
          <a :href="snsItem.url" target="_brank">
            <i :class="snsItem.class"></i>
          </a>
        </div>
      </div>
      <div class="contact-main__form">
        <div>
          <label>お名前</label>
          <p class="validation-list__item">{{errors.name}}</p>
          <input v-model="form.name.contents" type="text" />
        </div>
        <div>
          <label>メールアドレス</label>
          <p class="validation-list__item">{{errors.email}}</p>
          <input v-model="form.email.contents" type="text" />
        </div>
        <div>
          <label>お問い合わせ内容</label>
          <p class="validation-list__item">{{errors.message}}</p>
          <textarea v-model="form.message.contents" type="textarea" />
        </div>
        <div class="space-end">
          <button class="contact-main__form-button" @click="sendMail">送信</button>
          <transition name="fade">
            <div class="sentMessage" v-if="sentMessage">
              <p>{{ sentMessage }}</p>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import firebase from "~/plugins/firebase.js";

export default {
  data: () => ({
    snsItems: [
      {
        url: "https://github.com/mikutaniguchi",
        class: "fab fa-github"
      },
      {
        url: "https://www.instagram.com/milaaai/",
        class: "fab fa-instagram"
      },
      {
        url: "https://twitter.com/milaaai2",
        class: "fab fa-twitter"
      }
    ],
    form: {
      name: { contents: "" },
      email: { contents: "" },
      message: { contents: "" }
    },
    sentMessage: "",
    errors: {
      name: "",
      email: "",
      message: ""
    }
  }),
  methods: {
    checkForm: function(e) {
      this.errors = [];
      if (!this.form.name.contents) {
        this.errors.name = "お名前を入力してください";
      }
      if (!this.form.email.contents) {
        this.errors.email = "メールアドレスを入力してください";
      } else if (!this.validEmail(this.form.email.contents)) {
        this.errors.email = "メールアドレスを正しく入力してください";
      }
      if (!this.form.message.contents) {
        this.errors.message = "お問い合わせ内容を入力してください";
      }
      if (!this.errors.email && !this.errors.email && !this.errors.message) {
        return true;
      }
      return false;
    },
    validEmail: function(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    sendMail() {
      if (!this.checkForm()) {
        return;
      }
      const form = this.form;
      const sendMail = firebase.functions().httpsCallable("sendMail");
      sendMail({ form })
        .then(response => {
          this.sentMessage =
            "お問い合わせありがとうございます。送信完了しました。";
          setTimeout(() => {
            this.sentMessage = false;
          }, 3000);
          this.form.name.contents = "";
          this.form.email.contents = "";
          this.form.message.contents = "";
        })
        .catch(error => {
          this.sentMessage =
            "送信できませんでした。もう一度ご入力をお願いします。";
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.contact-title {
  @include main-title;
}
.contact-main {
  font-family: $font-ja;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-bottom: 30px;

  @include tab {
    flex-direction: row;
    max-width: 800px;
  }
  .contact-main__sns {
    color: $color-font;
    display: flex;
    justify-content: center;
    border-top: solid 1px $color-font;
    border-bottom: solid 1px $color-font;
    max-width: 60%;
    margin: 0 auto 80px auto;
    @include tab {
      flex-direction: column;
      height: 230px;
      margin: 7px auto 0 auto;
    }
    &__item {
      padding: 10px 20px;
      font-size: 30px;
      &:hover {
        animation: big 0.4s;
        animation-fill-mode: forwards;
      }
      &:active {
        animation: small 0.4s;
        animation-fill-mode: forwards;
      }
    }
  }
  @keyframes big {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.1);
    }
  }
  @keyframes small {
    100% {
      transform: scale(1);
    }
  }
  .contact-main__form {
    width: 100%;
    padding: 0 20px;
    @include tab {
      max-width: 500px;
    }
  }
}
input {
  @include input;
}
textarea {
  @include input;
  height: 200px;
}
.contact-main__form-button {
  width: 100%;
  font-size: 16px;
  border: solid 1px $color-font;
  @include btn;
  margin: 0;
}
.sentMessage {
  border: double 4px $color-font;
  padding: 8px;
  margin: 10px 0 30px 0;
}
.validation-list__item {
  font-size: 14px;
  color: red;
}
label {
  position: relative;
  &::after {
    position: absolute;
    bottom: 0;
    right: 30;
    content: "必須";
    font-size: 13px;
    background: #e9bac6;
    width: 32px;
    text-align: center;
    margin-left: 7px;
    border-radius: 10%;
  }
}
.space-end {
  margin-bottom: 70px;
}
</style>
