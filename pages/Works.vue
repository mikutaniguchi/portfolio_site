<template>
  <div>
    <h2 class="works-title">Works</h2>
    <div class="works-main">
      <div
        class="works-main__item"
        v-for="(worksItem, index) in worksItems"
        :key="index"
      >
        <img :src="worksItem.img" alt />
        <button :class="worksItem.class" @click="showModal">
          <p class="works-main__item__title">{{ worksItem.title }}</p>
          <p class="works-main__item__text">{{ worksItem.text }}</p>
        </button>
      </div>
    </div>
    <Modal1 v-if="isVisible1" @close="isVisible1 = false" />
    <Modal2 v-if="isVisible2" @close="isVisible2 = false" />
    <Modal3 v-if="isVisible3" @close="isVisible3 = false" />
    <Modal4 v-if="isVisible4" @close="isVisible4 = false" />
    <Modal5 v-if="isVisible5" @close="isVisible5 = false" />
  </div>
</template>

<script>
import Modal1 from "~/components/Modal1.vue";
import Modal2 from "~/components/Modal2.vue";
import Modal3 from "~/components/Modal3.vue";
import Modal4 from "~/components/Modal4.vue";
import Modal5 from "~/components/Modal5.vue";

export default {
  components: {
    Modal1,
    Modal2,
    Modal3,
    Modal4,
    Modal5,
  },
  methods: {
    showModal(e) {
      console.log(e.target.classList);
      if (e.target.classList.contains("model1")) {
        this.isVisible1 = true;
      } else if (e.target.classList.contains("model2")) {
        this.isVisible2 = true;
      } else if (e.target.classList.contains("model3")) {
        this.isVisible3 = true;
      } else if (e.target.classList.contains("model4")) {
        this.isVisible4 = true;
      } else if (e.target.classList.contains("model5")) {
        this.isVisible5 = true;
      }
    },
  },
  data() {
    return {
      isVisible1: false,
      isVisible2: false,
      isVisible3: false,
      isVisible4: false,
      isVisible5: false,
      worksItems: [
        {
          img: require("../assets/img/wp_site.png"),
          title: "WPテーマ自作",
          text: "WordPress",
          class: "model5",
        },
        {
          img: require("../assets/img/portfolio_site.png"),
          title: "このサイト",
          text: "Nuxt.js/Firebase",
          class: "model1",
        },
        {
          img: require("../assets/img/PAS-POL.png"),
          title: "コーディング模写1",
          text: "HTML/CSS(scss)/jQuery",
          class: "model2",
        },
        {
          img: require("../assets/img/SANGO.png"),
          title: "コーディング模写2",
          text: "HTML/CSS/Bootstrap",
          class: "model3",
        },
        {
          img: require("../assets/img/PHPService.png"),
          title: "写真共有サービス",
          text: "PHP/Laravel",
          class: "model4",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.works-title {
  @include main-title;
}
.works-main::after {
  display: block;
  content: "";
  max-width: 90%;
  @include tab {
    width: 450px;
  }
}
.works-main {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @include tab {
    justify-content: space-around;
  }
  &__item {
    position: relative;
    font-family: $font-ja;
    margin-bottom: 50px;
    max-width: 90%;
    @include tab {
      width: 450px;
      height: 300px;
      object-fit: cover;
      overflow: hidden;
    }
    & img {
      width: 100%;
    }
    &__title {
      font-weight: 700;
      font-size: 15px;
      pointer-events: none;
      text-align: center;
      @include tab {
        font-size: 18px;
      }
    }
    &__text {
      font-size: 14px;
      pointer-events: none;
      text-align: center;
    }
  }
}
button {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: #ffffff;
  opacity: 0;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
  &:hover {
    background-color: rgba(0, 0, 0, 0.9);
  }
}
</style>
