<template>
  <div class="v-nameItem">
    <!-- <router-link :to="{ name: 'catalog' }"> -->
      <button class="v-nameItem__menu">Gamer: {{ propsName.title }}</button>
    <!-- </router-link> -->
  </div>
</template>

<script>
export default {
  name: "v-NameItem",
  props: {
    propsName: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  mounted(){
    localStorage.getItem('name')
  }
};
</script>

<style lang="scss">
.v-nameItem {
  .v-nameItem__menu {
    position: absolute;
    top: 10px;
    left: 10px;
    width: 160px;
    padding: 11px 0;
    font-size: 18px;
    // background: rgb(252, 186, 6);
    background: #2d55ff;
    color: white;
    border-radius: 3px;
    border: none;
  }
}
</style>