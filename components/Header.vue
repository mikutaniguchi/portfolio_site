<template>
  <div class="header">
    <div class="inner header-flex">
      <div>
        <p class="navbar__brand">
          <nuxt-link to="/">Miku Taniguchi</nuxt-link>
        </p>
      </div>
      <div>
        <ul class="navbar__menu">
          <li v-for="(menuItem, index) in menuItems" :key="index">
            <nuxt-link :to="menuItem.url">{{ menuItem.name }}</nuxt-link>
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
          name: "Skills",
          url: "/skills",
        },
        {
          name: "Works",
          url: "/works",
        },
        {
          name: "About",
          url: "/about",
        },
        {
          name: "Blog",
          url: "/blog",
        },
        {
          name: "Contact",
          url: "/contact",
        },
      ],
    };
  },
};
</script>
<style scoped lang="scss">
a {
  text-decoration: none;
  color: $color-font;
}
.header {
  background: #ffffff;
  font-size: 16px;
  line-height: 55px;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.1);
  @include tab {
    line-height: 65px;
    font-size: 18px;
  }
}
.header-flex {
  display: inline;
  @include tab {
    display: flex;
    justify-content: space-between;
  }
}
.inner {
  max-width: 1150px;
  margin: 0 auto;
}
.navbar__brand {
  font-weight: 500;
  font-size: 20px;
  padding-left: 10px;
  border-bottom: solid 1px #c2c2c2;
  @include tab {
    border-bottom: none;
    font-size: 24px;
  }
}
.navbar__menu {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  text-align: center;
  padding: 0;
  & li {
    width: 50%;
    border-bottom: solid 1px #c2c2c2;
    &:nth-child(1n) {
      border-right: solid 1px #c2c2c2;
      &:hover {
        background: #e5e8e1;
      }
    }
    &:nth-child(2) {
      &:hover {
        background: #f7f1d7;
      }
    }
    &:nth-child(3) {
      &:hover {
        background: #e0e3e4;
      }
    }
    &:nth-child(4) {
      &:hover {
        background: #f7e1d7;
      }
    }
    @include tab {
      width: 110px;
      text-align: center;
      border-bottom: none;
      &:nth-child(1n) {
        border-right: none;
      }
    }
    &:hover {
      -webkit-transition: all 0.3s ease;
      -moz-transition: all 0.3s ease;
      -o-transition: all 0.3s ease;
      transition: all 0.3s ease;
    }
  }
}
li a {
  width: 100%;
  display: inline-block;
  &:hover {
    opacity: 1;
  }
}
</style>
