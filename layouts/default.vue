<template>
  <div>
    <Header />
    <main>
      <nuxt />
    </main>
    <BackToTop />
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import BackToTop from "@/components/BackToTop.vue";
export default {
  components: {
    Header,
    BackToTop
  }
};
</script>
<style lang="scss">
html {
  font-family: "Lato", sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

main {
  max-width: 1000px;
  margin: 0 auto;
}
</style>
