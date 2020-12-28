<template>
  <div class="wrapper-wishList">
    <h1 class="title">やりたいことリスト</h1>
    <div class="form_group">
      <label for="">やりたいこと</label
      ><input
        type="text"
        v-model="wishItem"
        v-on:keyup.enter="addTodo(wishItem)"
      />
    </div>
    <ul class="wishLists">
      <li v-for="item in items" :key="(item, index)" class="wishList">
        <label :class="{ done: item.isChecked }" class="wishList_flex">
          <input type="checkbox" v-model="item.isChecked" />
          <p class="wishList_item">{{ item.title }}</p>
        </label>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [{ title: "やりたいことリスト作る", isChecked: false }],
      wishItem: ""
    };
  },
  methods: {
    //methodsオプションをまるっと追加
    addTodo: function() {
      this.items.push({
        title: this.wishItem,
        isChecked: false
      });
      this.wishItem = "";
    }
  }
};
</script>

<style lang="scss" scoped>
$gray: #c3c3c3;
.wrapper-wishList {
  font-family: $font-ja;
  padding: 3rem 0;
  width: 50%;
}
.form_group {
  margin: 1rem 0;
  display: flex;
  & input {
    width: 80%;
    font-size: 16px;
    line-height: 2;
    padding: 0.3em 0.5em;
    outline-color: #000;
    border: 1px solid $gray;
  }
  & label {
    width: 20%;
    align-self: center;
    margin-right: 1em;
  }
}
.title {
  font-size: 25px;
  line-height: 2;
}

.wishLists {
  border-bottom: 1px solid $gray;
  border-top: 1px solid $gray;
  width: 100%;
  padding: 1rem;
}
.wishList_flex {
  & input {
    align-self: center;
    margin-right: 0.4em;
  }
  display: flex;
}
.wishList {
  counter-increment: number 1;
  padding-top: 0.5em;
  .wishList_item {
    &::before {
      position: relative;
      content: counter(number, decimal-leading-zero) ".";
    }
  }
}

.done {
  text-decoration: line-through;
}
</style>
