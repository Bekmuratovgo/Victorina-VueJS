<template>
  <div class="v-modalFalse" v-if="show">
    <div class="v-modalFalse__inner">
      <div class="v-modalFalse__block1">
        <h1 class="v-modalFalse__block1H1">Неверный ответ!</h1>
      </div>
      <div class="v-modalFalse__block2">
        <h1 class="v-modalFalse__block2H2">Правильный ответ:</h1>
        <h4>{{ itemTrueAnswer }}</h4>
      </div>
      <router-link :to="{ name: 'game' }">
        <button class="v-modalFalse__ok" @click="show = !show">Ok</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-ModalFalse",
  components: {},
  props: {
    itemTrueAnswer: {
      type: String,
    },
  },
  data() {
    return {
      show: true,

    };
  },
  computed: {},
  methods: {

  },
  watch: {
  },
};
</script>

<style lang="scss">
.v-modalFalse {
  content: "";
  background: rgba(0, 0, 0, 0.623);
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  // opacity: 0.7;
  // z-index: 9999;
  display: flex;
  align-items: center;

  &__inner {
    color: black;
    background: white;
    margin: 0 auto;
    width: 480px;
    height: 280px;
    border-radius: 10px;

    .v-modalFalse__ok {
      border: none;
      color: rgb(255, 255, 255);
      background: #2d55ff;
      border-radius: 4px;
      width: 80px;
      height: 44px;
    }
    .v-modalFalse__block1 {
      border-bottom: 1px solid black;
      height: 130px;
      display: flex;
      align-items: center;
      justify-content: center;

      .v-modalFalse__block1H1 {
        font-size: 30px;
        color: red;
        margin: 10px;
      }
    }
    .v-modalFalse__block2 {
      margin: 10px;

      .v-modalFalse__block2H2 {
        margin-bottom: 15px;
        font-size: 28px;
        color: green;
      }
    }
  }
}
</style>