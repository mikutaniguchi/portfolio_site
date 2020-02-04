<template>
  <div>
    <h2 class="contact-title">Contact</h2>
    <div class="contact-main">
      <div class="contact-main__form">
        <form action="#" method="post">
          <div>
            <label for="name">お名前</label>
            <br />
            <input type="text" name="mail" class="contact-main__form__name" />
          </div>

          <div>
            <label for="name">メールアドレス</label>
            <br />
            <input type="text" name="mail" />
          </div>
          <div>
            <label for="name">お問い合わせ内容</label>
            <br />
            <textarea type="text" name="mail" />
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
</style>
