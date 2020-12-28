<template>
  <div class="header">
    <div class="inner header-flex">
      <div>
        <p class="navbar__brand">
          <nuxt-link to="/">Miku Taniguchi</nuxt-link>
        </p>
      </div>
      <div>
        <ul class="navbar__menu pc_only">
          <li v-for="(menuItem, index) in menuItems" :key="index">
            <nuxt-link :to="menuItem.url">{{ menuItem.name }}</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="sp_only">
        <div @click="toggle" class="menu" v-bind:class="{ menuopen: open }">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div class="mask" v-bind:class="{ menuopened_mask: open }">
          <div class="menu-content">
            <ul class="menu-content__list">
              <li><nuxt-link to="/">HOME</nuxt-link></li>
              <li v-for="(menuItem, index) in menuItems" :key="index">
                <nuxt-link :to="menuItem.url">{{ menuItem.name }}</nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      open: false,
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
  watch: {
    $route: function (to, from) {
      setTimeout(() => {
        if (to.path !== from.path) {
          this.open = false;
        }
      }, 100);
    },
  },
  methods: {
    toggle: function () {
      this.open = !this.open;
    },
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
  @include tab {
    box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.1);
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
  @include tab {
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
.pc_only {
  display: none;
  @include tab {
    display: flex;
  }
}
.sp_only {
  @include tab {
    display: none;
  }
}

body {
  position: relative;
}
.menu {
  position: fixed;
  display: flex;
  color: $color-font;
  justify-content: flex-start;
  top: 0;
  right: 0;
  width: 50px;
  height: 50px;
  transition: all 0.5s;
  cursor: pointer;
  z-index: 12;
}
.menu span {
  margin-top: 15px;
  position: absolute;
  left: 10px;
  width: 28px;
  height: 2px;
  background-color: $color-font;
  border-radius: 4px;
  transition: all 0.5s;
}
.menu span:nth-child(1) {
  top: 0;
}
.menu span:nth-child(2) {
  top: 11px;
}
.menu span:nth-child(3) {
  top: 22px;
}
.menu.menuopen span {
  background-color: $color-font;
}
.menu.menuopen span:nth-child(1) {
  transform: translateY(10px) rotate(-45deg);
}
.menu.menuopen span:nth-child(2) {
  opacity: 0;
}
.menu.menuopen span:nth-child(3) {
  transform: translateY(-11.5px) rotate(45deg);
}

/*#mask*/
.mask {
  display: none;
  transition: all 0.5s;
  -webkit-transform: translateX(105%);
  transform: translateX(105%);
}
.mask.menuopened_mask {
  -webkit-transform: translateX(0%);
  transform: translateX(0%);
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #eee;
  z-index: 11;
}
.menu-content {
  margin: auto;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 90%;
}
.menu-content__list {
  margin-top: 2rem;
  & a {
    font-size: 22px;
  }
}

a {
  display: block;
}
</style>
