<template>
  <div>
    <h2 class="contact-title">Contact</h2>
    <div class="contact-main">
      <div class="contact-main__form">
        <form>
          <div>
            <label>お名前</label>
            <br />
            <input v-model="form.name.contents" type="text" />
          </div>
          <div>
            <label>メールアドレス</label>
            <br />
            <input v-model="form.email.contents" type="text" />
          </div>
          <div>
            <label>お問い合わせ内容</label>
            <br />
            <textarea v-model="form.message.contents" type="textarea" />
          </div>
          <div>
            <button class="contact-main__form-button" type="button" @click="sendMail()">送信</button>
          </div>
        </form>
      </div>
      <div class="contact-main__sns">
        <div class="contact-main__sns__item">
          <a href>
            <i class="fab fa-twitter"></i>
          </a>
        </div>
        <div class="contact-main__sns__item">
          <a href>
            <i class="fab fa-instagram"></i>
          </a>
        </div>
        <div class="contact-main__sns__item">
          <a href>
            <i class="fab fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import firebase from "~/plugins/firebase.js";
// import { functions } from '@/plugins/firebase'

export default {
  data: () => ({
    form: {
      name: { contents: "" },
      email: { contents: "" },
      message: { contents: "" }
    }
  }),
  methods: {
    sendMail() {
      const form = this.form;
      const sendMail = firebase.functions().httpsCallable("sendMail");
      sendMail({ form })
        .then(response => {
          alert(response);
        })
        .catch(error => {
          alert(error);
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

  @include tab {
    flex-direction: row-reverse;
    max-width: 800px;
  }
  .contact-main__sns {
    color: $color-font;
    display: flex;
    justify-content: center;
    border-top: solid 1px $color-font;
    border-bottom: solid 1px $color-font;
    max-width: 60%;
    margin: 40px auto;
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
  cursor: pointer;
  font-size: 16px;
  border: none;
  border: solid 1px $color-font;
  background-color: #ffffff;
  line-height: 40px;
  margin-bottom: 30px;
  &:hover {
    background-color: $color-font;
    color: #ffffff;
    opacity: 1;
  }
}
</style>
