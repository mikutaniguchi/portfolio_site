<template>
  <div class="BackToTop" v-show="isShow">
    <a v-scroll-to="'body'">
      <i class="fas fa-angle-up"></i>
    </a>
  </div>
</template>
<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      scrollY: 0
    };
  },
  mounted() {
    // スクロールを取得
    window.addEventListener("scroll", this.onScroll);
    window.addEventListener("load", () => {
      this.onScroll();
    });
  },
  computed: {
    isShow() {
      return this.scrollY > 100 ? true : false;
    }
  },
  methods: {
    // スクロール値の取得
    onScroll() {
      this.scrollY = window.pageYOffset;
    }
  }
};
</script>

<style scoped lang="scss">
.BackToTop {
  position: fixed;
  right: 20px;
  bottom: 20px;
  &hover {
    opacity: 1;
  }
}
.fa-angle-up {
  background: #ffffff;
  font-size: 35px;
  text-align: center;
  line-height: 60px;
  border-radius: 50px;
  width: 60px;
  height: 60px;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.2);
  @include tab {
    display: none;
  }
}
</style>
