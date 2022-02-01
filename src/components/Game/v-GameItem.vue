<template>
  <div>
    <div v-if="dontShowCard" class="v-gameItem">
      <router-link
        style="text-decoration: none"
        :to="{ name: 'question', params: { item_q: QUESTION } }"
      >
        <router-link :to="{ name: 'game' }">
          <div class="v-question__card col-lg-3" @click="showQuestion">
            <h5 class="v-question__h1">{{ product_item.value }}</h5>
          </div>
        </router-link>
      </router-link>
    </div>

    <div v-else class="v-gameItem">
      <!-- Green Card-->
      <router-link
        style="text-decoration: none"
        :to="{ name: 'question', params: { item_q: QUESTION } }"
      >
        <div class="v-question__card_Red col-lg-3" @click="showQuestion">
          <h5 class="v-question__h1">{{ product_item.value }}</h5>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "v-GameItem",
  props: {
    product_item: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      dontShowCard: false,
    };
  },
  computed: {
    ...mapGetters(["QUESTION", "ID_OF_GREY"]),

  },
  methods: {
    check_id() {
      // let ids_grey;
      // if (this.status === 200) {

      // this.cardID = JSON.parse(localStorage.getItem("showQuestion_OneCard"));
      let ids_grey = JSON.parse(localStorage.getItem("idOfGreyCard"));
      // console.log(ids_grey, "dond Show CARD");

      // this.dontShowCard = true;
      ids_grey.map((item) => {
        if (item == this.product_item.id) {
          this.dontShowCard = true;
        }
      });

      // }
    },
    showQuestion() {
      console.log(this.QUESTION, 'what is it???');
      this.check_id();
      this.$emit("showQuestion", this.product_item);
      if (this.status === 200) {
        // ...success...
        let isTimeStart = localStorage.getItem("isTimeStart");
        isTimeStart = true;
        localStorage.setItem("isTimeStart", isTimeStart);
      }
    },
  },
  mounted() {
    this.check_id();
    // this.QUESTION = JSON.parse(localStorage.getItem("showQuestion_OneCard");)
  },
  watch: {},
};
</script>

<style lang="scss">
.v-question {
  display: flex;

  &__card {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 6px;
    width: 150px;
    height: 80px;
    // background: #00b16a;
    background: #676768;

    .v-question__h1 {
      color: white;
      font-size: 18px;
      font-weight: 400;
      font-family: "Montserrat";
    }
  }
  &__card_Red {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 6px;
    width: 150px;
    height: 80px;
    background: #00b16a;
    // background: #4871f7;

    .v-question__h1 {
      color: white;
      font-size: 18px;
      font-weight: 400;
      font-family: "Montserrat";
    }
  }
}
</style>