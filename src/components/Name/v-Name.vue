<template>
  <div class="v-name">
    <div class="v-name__btnsMenu">
      <v-name-item v-bind:propsName="todoName" />
    </div>
    <div class="v-name__modal">
      <h1 class="v-name__title">Введите свое имя</h1>
      <input
        type="text"
        name="name"
        placeholder="Enter your Name"
        class="v-name__inp"
        v-model="todoName.title"
      />
      <router-link v-if="todoName.title" :to="{ name: 'game' }">
        <button @click="ADD_TODO_NAME" class="v-name__submit">Submit</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
// import { v1 } from "uuid";
import VNameItem from "./v-NameItem.vue";

export default {
  name: "v-Name",
  components: {
    VNameItem,
  },
  props: {
    dataName: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      todoName: {
        title: "",
      },
      timeOutModal: false,
      validName: true,
    };
  },
  computed: {},
  methods: {
    ...mapActions(["ADD_NAME"]),

    ADD_TODO_NAME() {
      if (this.todoName.title != "" && this.validName == true) {
        localStorage.setItem("name", JSON.stringify(this.todoName.title));
        this.ADD_NAME(this.todoName.title);
      }

      localStorage.setItem("point", 0);
      localStorage.setItem("answerFalse", 0);
      localStorage.setItem("answerTrue", 0);
      localStorage.setItem("quantityQ", 0);
      localStorage.setItem("reverse", true);
      let d = JSON.stringify([1])
      localStorage.setItem("idOfGreyCard", d);
      // let asd = {a:1}
      let s = JSON.stringify({})
      localStorage.setItem("showQuestion_OneCard", s)
    },
  },
  mounted() {
    const data = localStorage.getItem("name");
    this.todoName.title = JSON.parse(data);
  },
};
</script>

<style lang="scss">
.v-name {
  .v-name__modal {
    width: 400px;
    height: 200px;
    margin: 0 auto;
    background: rgb(227, 245, 255);
    border-radius: 5px;
    padding-top: 10px;

    .v-name__submit {
      border-radius: 2px;
      border: none;
      background: #fcba06;
      margin: 0 10px;
      height: 40px;
      width: 80px;
    }
    .v-name__inp {
      border: none;
      height: 25px;
      border-radius: 3px;
      color: rgb(61, 61, 61);
    }
    .v-name__title {
      margin: 25px;
      font-size: 25px;
      font-family: "Montserrat";
    }
  }
}
</style>