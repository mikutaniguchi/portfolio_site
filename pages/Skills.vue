<template>
  <div>
    <h2 class="skills-title">Skills</h2>
    <div class="skills-main">
      <div class="skills-main__frontend">
        <p class="skills-main__title">フロントエンド/デザイン</p>
        <div class="skills-main__frontend__skill">
          <div
            class="skills-main__frontend__skillItems"
            v-for="(front_skillItem,index) in front_skillItems"
            :key="index"
          >
            <p class="skills-main__frontend__skillItems-name">{{front_skillItem.name}}</p>
            <div
              class="skills-main__frontend__skillItems-level"
              :class="front_skillItem.length"
            >{{front_skillItem.level}}</div>
          </div>
        </div>
      </div>
      <div class="skills-main__backend">
        <p class="skills-main__title">バックエンド/ツール</p>
        <div class="skills-main__backend__skill">
          <div
            class="skills-main__frontend__skillItems"
            v-for="(back_skillItem,index) in back_skillItems"
            :key="index"
          >
            <p class="skills-main__frontend__skillItems-name">{{back_skillItem.name}}</p>
            <div
              class="skills-main__frontend__skillItems-level"
              :class="back_skillItem.length"
            >{{back_skillItem.level}}</div>
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
      front_skillItems: [
        {
          name: "HTML",
          level: "5/5",
          length: "length-5"
        },
        {
          name: "CSS",
          level: "5/5",
          length: "length-5"
        },
        {
          name: "Bootstrap",
          level: "5/5",
          length: "length-5"
        },
        {
          name: "Sass(scss)",
          level: "4/5",
          length: "length-4"
        },
        {
          name: "JavaScript/jQuery",
          level: "3/5",
          length: "length-3"
        },
        {
          name: "JavaScript/Vue.js",
          level: "3/5",
          length: "length-3"
        },
        {
          name: "Adobe XD",
          level: "4/5",
          length: "length-4"
        },
        {
          name: "Adobe Photoshop",
          level: "3/5",
          length: "length-3"
        }
      ],
      back_skillItems: [
        {
          name: "VScode",
          level: "5/5",
          length: "length-5"
        },
        {
          name: "MacOS",
          level: "5/5",
          length: "length-5"
        },
        {
          name: "Git/GitHub",
          level: "3/5",
          length: "length-3"
        },
        {
          name: "PHP",
          level: "3/5",
          length: "length-3"
        },
        {
          name: "Laravel",
          level: "3/5",
          length: "length-3"
        },
        {
          name: "SQL",
          level: "2/5",
          length: "length-2"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.skills-title {
  @include main-title;
}
.skills-main {
  display: flex;
  flex-wrap: wrap;
  width: 285px;
  margin: 0 auto;
  @include tab {
    width: 440px;
  }
  @include pc {
    width: 970px;
  }
}
.skills-main__frontend {
  @include tab {
    margin-right: 250px;
  }
}
.skills-main__title {
  @include tab {
    width: 480px;
  }
  @include pc {
    width: 100%;
  }
}
.skills-main__frontend__skill {
  height: 450px;
  @include skills;
}

.skills-main__backend__skill {
  height: 300px;
  @include skills;
}

.length-2 {
  width: 25 * 2px;
  @include tab {
    width: 40 * 2px;
  }
}
.length-3 {
  width: 25 * 3px;
  @include tab {
    width: 40 * 3px;
  }
}
.length-4 {
  width: 25 * 4px;
  @include tab {
    width: 40 * 4px;
  }
}
.length-5 {
  width: 25 * 5px;
  @include tab {
    width: 40 * 5px;
  }
}

.skills-main__title {
  font-family: $font-ja;
  font-size: 25px;
}
</style>
