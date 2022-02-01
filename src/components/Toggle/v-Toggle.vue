<template>
  <div class="v-toggle">
    <!-- <router-link :to="{ game: 'game' }"> -->
    <button @click="togglee" class="v-toggle__show">
      <router-link :to="{ name: 'name' }">
        <div class="v-toggle__show" @click="get" v-if="!this.reverse">
          {{ toggle.title1 }}
        </div>
      </router-link>

      <router-link :to="{ name: 'game' }">
        <div class="v-toggle__show_Start" v-if="this.reverse">
          {{ toggle.title2 }}
        </div>
      </router-link>
    </button>
    <!-- </router-link> -->
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "v-Toggle",
  props: {
    reverse: {
      type: Boolean,
    },
  },
  data() {
    return {
      // answerToggle: "",answerToggle: "",
      toggle: {
        is: false,
        title1: "Остановить Игру",
        title2: "Начать Игру",
      },
    };
  },
  computed: {
    ...mapGetters([
      "HISTORY",
      "POINT",
      "FALSE_ANSWER",
      "TRUE_ANSWER",
      "QUANTITY_Q",
      "NAME"
    ]),
  },
  watch: {},
  methods: {
    ...mapActions(["GET_HISTORY","ADD_NAME"]),
    toggleGame() {
      let isToggle = (this.toggle.is = !this.toggle.is);
      window.localStorage.setItem("toggle", JSON.stringify(isToggle));
      console.log(isToggle);

      const res = localStorage.getItem("toggle");
      this.answerToggle = JSON.parse(res);
    },
    togglee() {
      this.$emit("getToggle");
    },

    get() {
      let name = JSON.parse(localStorage.getItem("name"));
      let point = localStorage.getItem("point");
      let quantityQ = localStorage.getItem("quantityQ");
      let answerTrue = localStorage.getItem("answerTrue");
      let answerFalse = localStorage.getItem("answerFalse");
      let objHis = {
        name: name,
        point: point,
        quantityQ: quantityQ,
        answerFalse: answerFalse,
        answerTrue: answerTrue,
      };
      // console.log(name, 'hEy Nurba');
      this.GET_HISTORY(objHis).then(
        localStorage.removeItem('reverse'),
        localStorage.removeItem("name"),
        localStorage.removeItem("point"),
        localStorage.removeItem("answerFalse"),
        localStorage.removeItem("answerTrue"),
        localStorage.removeItem("quantityQ"),
        localStorage.removeItem("answerTrue"),
        localStorage.removeItem("isTimeStart"),
        localStorage.removeItem('idOfGreyCard'),
      );
      this.ADD_NAME('')
      // this.POINT = ''
      // this.QUANTITY_Q = ''
      // this.FALSE_ANSWER = ''
      // this.TRUE_ANSWER = ''
    },
  },
  mounted() {
    const res = localStorage.getItem("toggle");
    this.answerToggle = JSON.parse(res);
  },
};
</script>

<style lang="scss">
.v-toggle {
  position: absolute;
  top: 10px;
  right: 150px;
  width: 160px;
  padding: 8px 0;
  background: #2d55ff;
  border-radius: 3px;
  .v-toggle__show {
    border: none;
    background: #2d55ff;
    color: white;
    font-size: 18px;
  }
  .v-toggle__show_Start {
    border: none;
    background: #2d55ff;
    color: white;
    font-size: 18px;
    // opacity: 0.7;
    // z-index: 2;
    display: flex;
    align-items: center;
  }
}
</style>