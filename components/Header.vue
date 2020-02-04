<template>
  <div class="header">
    <div class="inner header-flex">
      <div>
        <p class="navbar__brand">
          <nuxt-link to="/">Profile</nuxt-link>
        </p>
      </div>
      <div>
        <ul class="navbar__menu">
          <li v-for="(menuItem,index) in menuItems" :key="index">
            <nuxt-link :to="menuItem.url">{{menuItem.name}}</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menuItems: [
        {
          name: "Top",
          url: "/"
        },
        {
          name: "About",
          url: "/about"
        },
        {
          name: "Skills",
          url: "/skills"
        },
        {
          name: "Works",
          url: "/works"
        },
        {
          name: "Contact",
          url: "/contact"
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
a {
  text-decoration: none;
  color: $color-font;
}
.header {
  background: #ffffff;
  font-size: 20px;
  line-height: 65px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
}
.header-flex {
  display: flex;
  justify-content: space-between;
}
.inner {
  max-width: 1150px;
  margin: 0 auto;
}
.navbar__brand {
  font-weight: 500;
  font-size: 30px;
  padding-left: 10px;
}
.navbar__menu {
  list-style: none;
  padding: 0;
  & li {
    display: none;
    @include tab {
      display: inline-block;
      width: 110px;
      text-align: center;
    }
    &:hover {
      background: $color-sub;
      -webkit-transition: all 0.3s ease;
      -moz-transition: all 0.3s ease;
      -o-transition: all 0.3s ease;
      transition: all 0.3s ease;
    }
  }
}
</style>
