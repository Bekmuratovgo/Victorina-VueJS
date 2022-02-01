<template>
  <div class="v-game">
    <div v-if="reverse" class="v-game_Toggle">
      <v-toggle :reverse="reverse" @getToggle="getToggle" />
    </div>
    <div v-else>
      <v-toggle :reverse="reverse" @getToggle="getToggle" />
    </div>

    <v-name-item v-bind:propsName="nameGame" />

    <router-link :to="{ name: 'statistic' }">
      <button class="v-game__menu">Statistic: {{QUANTITY_Q}} </button>
    </router-link>
    <button class="v-game__menu__point">Point: {{POINT}} </button>
    <div class="v-game__container">
      <div class="v-game__left">
        <div class="v-game__verticalBlock">
          <h2 v-if="uniqueID.indexOf(233) == 0">{{ ID_1 }}</h2>
          <h2 v-else-if="uniqueID.indexOf(234) == 0">{{ ID_2 }}</h2>
          <h2 v-else-if="uniqueID.indexOf(235) == 0">{{ ID_3 }}</h2>
          <h2 v-else-if="uniqueID.indexOf(228) == 0">{{ ID_4 }}</h2>
          <h2 v-else-if="uniqueID.indexOf(246) == 0">{{ ID_5 }}</h2>
        </div>
        <div class="v-game__verticalBlock">
          <h2 v-if="uniqueID.indexOf(233) == 1">{{ ID_1 }}</h2>
          <h2 v-else-if="uniqueID.indexOf(234) == 1">{{ ID_2 }}</h2>
          <h2 v-else-if="uniqueID.indexOf(235) == 1">{{ ID_3 }}</h2>
          <h2 v-else-if="uniqueID.indexOf(228) == 1">{{ ID_4 }}</h2>
          <h2 v-else-if="uniqueID.indexOf(246) == 1">{{ ID_5 }}</h2>
        </div>
        <div class="v-game__verticalBlock">
          <h2 v-if="uniqueID.indexOf(233) == 2">{{ ID_1 }}</h2>
          <h2 v-else-if="uniqueID.indexOf(234) == 2">{{ ID_2 }}</h2>
          <h2 v-else-if="uniqueID.indexOf(235) == 2">{{ ID_3 }}</h2>
          <h2 v-else-if="uniqueID.indexOf(228) == 2">{{ ID_4 }}</h2>
          <h2 v-else-if="uniqueID.indexOf(246) == 2">{{ ID_5 }}</h2>
        </div>
        <div class="v-game__verticalBlock">
          <h2 v-if="uniqueID.indexOf(233) == 3">{{ ID_1 }}</h2>
          <h2 v-else-if="uniqueID.indexOf(234) == 3">{{ ID_2 }}</h2>
          <h2 v-else-if="uniqueID.indexOf(235) == 3">{{ ID_3 }}</h2>
          <h2 v-else-if="uniqueID.indexOf(228) == 3">{{ ID_4 }}</h2>
          <h2 v-else-if="uniqueID.indexOf(246) == 3">{{ ID_5 }}</h2>
        </div>
        <div class="v-game__verticalBlock">
          <h2 v-if="uniqueID.indexOf(233) == 4">{{ ID_1 }}</h2>
          <h2 v-else-if="uniqueID.indexOf(234) == 4">{{ ID_2 }}</h2>
          <h2 v-else-if="uniqueID.indexOf(235) == 4">{{ ID_3 }}</h2>
          <h2 v-else-if="uniqueID.indexOf(228) == 4">{{ ID_4 }}</h2>
          <h2 v-else-if="uniqueID.indexOf(246) == 4">{{ ID_5 }}</h2>
        </div>
      </div>

      <div class="v-game__right">
        <div class="container">
          <div class="row">
            <div class="v-game__ccard">
              <v-game-item
                v-for="product in FIRST_PRODUCT"
                :key="product.id"
                v-bind:product_item="product"
                @showQuestion="showQuestion"

              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VGameItem from "./v-GameItem.vue";
import { mapActions, mapGetters } from "vuex";
import VNameItem from "../Name/v-NameItem.vue";
import VToggle from "../Toggle/v-Toggle.vue";

export default {
  name: "v-Game",
  components: {
    VGameItem,
    VNameItem,
    VToggle,
  },
  props: {},
  data() {
    return {
      nameGame: {
        title: "",
      },
      reverse: true,
      categoryID: [],
      uniqueID: [],
    };
  },
  computed: {
    ...mapGetters([
      "FIRST_PRODUCT",
      "QUESTION",
      "ID_1",
      "ID_4",
      "ID_2",
      "ID_5",
      "ID_3",
      "NAME",
      "QUANTITY_Q",
      "POINT",
    ]),
  },
  methods: {
    ...mapActions([
      "GET_FIRST_PRODUCTS_FROM_API",
      "GET_SECOND_PRODUCTS_FROM_API",
      "GET_THIRD_PRODUCTS_FROM_API",
      "GET_FOURTH_PRODUCTS_FROM_API",
      "GET_FIFTH_PRODUCTS_FROM_API",
      "SHOW_QUESTION",
      "ID_OF_GREY_CARD",
    ]),
    getToggle() {
      let asd = localStorage.getItem("reverse");
      this.reverse = !asd;
      console.log(this.reverse);

      localStorage.setItem("reverse", this.reverse);
    },
    showQuestion(data) {
      this.ID_OF_GREY_CARD(data.id)
      this.SHOW_QUESTION(data);
      localStorage.setItem('showQuestion_OneCard',JSON.stringify(data))
    },
    sortTitle() {
      let unique;
      let backToArray;
      if (this.FIRST_PRODUCT.length == 25) {
        this.FIRST_PRODUCT.map((item) => {
          return this.categoryID.push(item.category_id);
        });
        unique = new Set(this.categoryID);
        backToArray = [...unique];
        this.uniqueID = backToArray;
      } else {
        console.log("Подожди пока данные подгрузятся");
      }
      // console.log(this.uniqueID, "sort");
    },
  },
  mounted() {
    this.GET_FIRST_PRODUCTS_FROM_API().then(() => {
      this.sortTitle();
    });
    this.GET_SECOND_PRODUCTS_FROM_API().then(() => {
      this.sortTitle();
    }),
      this.GET_THIRD_PRODUCTS_FROM_API().then(() => {
        this.sortTitle();
      }),
      this.GET_FOURTH_PRODUCTS_FROM_API().then(() => {
        this.sortTitle();
      }),
      this.GET_FIFTH_PRODUCTS_FROM_API().then(() => {
        this.sortTitle();
      });

    let asd = localStorage.getItem("reverse");
    this.reverse = !asd;
    
    const data = localStorage.getItem("name");
    this.nameGame.title = JSON.parse(data);

  },
};
</script>

<style lang="scss">
.v-game {
  display: flex;
  justify-content: center;
  margin-top: 90px;

  .v-game_Toggle {
    width: 100%;
    height: 100%;
    opacity: 0.7;
    position: absolute;
    top: 0;
    z-index: 2;
    background: #000;
  }
  .v-game__menu {
    background: #2d55ff;
    width: 100px;
    height: 45px;
    border: none;
    border-radius: 3px;
    color: white;
    font-size: 18px;
    position: absolute;
    top: 10px;
    right: 20px;
  }
  .v-game__menu__point{
    background: #2d55ff;
    width: 100px;
    height: 45px;
    border: none;
    border-radius: 3px;
    color: white;
    font-size: 18px;
    position: absolute;
    top: 70px;
    right: 20px;
  }
  &__container {
    display: flex;
    width: 90%;

    .v-game__left {
      .v-game__verticalBlock {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 10px 5px;
        width: 280px;
        height: 82px;
        // background: #87d37c;
        background: #89c4f4;
      }
    }
    .v-game__right {
      display: flex;

      .container {
        .row {
          margin-top: 4px;

          .v-game__ccard {
            display: flex;
            flex-wrap: wrap;
            padding: 0 0px;
          }
        }
      }
    }
  }
}
</style>