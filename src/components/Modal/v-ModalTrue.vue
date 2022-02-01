<template>
  <div class="v-modalTrue" v-if="show">
    <div class="v-modalTrue__inner">
      <div class="v-modalTrue__block2">
        <h1 class="v-modalTrue__block2H2">Вы ответили правильно!🥳🎉</h1>
        <router-link :to="{ name: 'game' }">
          <button class="v-modalTrue__ok" @click="show = !show">Ok</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-ModalTrue",
  components: {},
  props: {},
  data() {
    return {
      show: true,
    };
  },
  computed: {},
  methods: {},
  watch: {},
};
</script>

<style lang="scss">
.v-modalTrue {
  content: "";
  background: rgba(0, 0, 0, 0.637);
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

  &__inner {
    color: black;
    background: white;
    margin: 0 auto;
    width: 480px;
    height: 260px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    .v-modalTrue__block2 {
      margin: 10px;
      .v-modalTrue__block2H2 {
        margin-bottom: 15px;
        font-size: 28px;
        color: green;
      }

      .v-modalTrue__ok {
        border: none;
        color: rgb(255, 255, 255);
        background: #2d55ff;
        border-radius: 4px;
        width: 80px;
        height: 44px;
        margin: 0 auto;
      }
    }
  }
}
</style>