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
    window.addEventListener("scroll", this.onScroll);
    window.addEventListener("load", () => {
      this.onScroll();
    });
  },
  computed: {
    isShow() {
      return this.scrollY > 200 ? true : false;
    }
  },
  methods: {
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
  z-index: 20;
}
.fa-angle-up {
  background: #ffffff;
  font-size: 30px;
  text-align: center;
  line-height: 50px;
  border-radius: 50px;
  width: 50px;
  height: 50px;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.2);
  @include tab {
    display: none;
  }
}
</style>
