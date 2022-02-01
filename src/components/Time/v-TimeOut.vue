<template>
  <div class="v-timeOut" v-if="show">
    <div class="v-timeOut__inner">
      <div class="v-timeOut__block2">
        <h1 class="v-timeOut__block2H2">Время вышло!😢</h1>
        <h1>00:00</h1>
        <router-link :to="{ name: 'game' }">
          <button class="v-timeOut__ok" @click="func">Ok</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "v-TimeOut",
  components: {},
  props: {},
  data() {
    return {
      show: true,
    };
  },
  computed: {},
  methods: {
    ...mapActions(["GET_FALSE_ANSWER", "GET_QUANTITY"]),
    func() {
      this.show = !this.show;
      this.GET_FALSE_ANSWER(1);
      this.GET_QUANTITY(1);
    },
  },
  watch: {},
};
</script>

<style lang="scss">
.v-timeOut {
  content: "";
  background: rgba(0, 0, 0, 0.747);
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  // opacity: 0.7;
  display: flex;
  align-items: center;
  z-index: 2;

  .v-timeOut__inner {
    color: black;
    background: rgb(255, 255, 255);
    margin: 0 auto;
    width: 480px;
    height: 260px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    .v-timeOut__block2 {
      margin: 10px;
      .v-timeOut__block2H2 {
        margin-bottom: 15px;
        font-size: 28px;
        color: red;
      }

      .v-timeOut__ok {
        border: none;
        color: rgb(255, 255, 255);
        background: #2d55ff;
        border-radius: 4px;
        width: 80px;
        height: 44px;
      }
    }
  }
}
</style>