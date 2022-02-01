<template>
  <div class="v-question">
    <v-time-out v-if="counter == 0" />

    <v-modal-false :itemTrueAnswer="data_item_q.answer" v-if="modalFalse" />
    <v-modal-true v-if="modalTrue" />

    <router-link :to="{ name: 'game' }">
      <button class="v-question__menu">Back To Game</button>
    </router-link>

    <div class="v-question__block">
      <div class="v-question__timer">
        <h3 class="v-question__tick">
          Осталось: <span class="v-question__over">{{ counter }}</span>
        </h3>
      </div>

      <!-- <h4 class="v-question__title" >
        <span>The question is PROPS: </span> {{ item_q.question }}
      </h4> -->
      <h4 class="v-question__title">
        <span>The question is:</span> {{ data_item_q.question }}
      </h4>

      <div class="v-question__answer">
        <input
          v-model="isAnswer"
          class="v-question__answerInp"
          type="text"
          placeholder="Answer here..."
          name=""
          id=""
        />
        <button @click="SAFE_ANSWER" class="v-question__answerBtn">
          Submit
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import VModalFalse from "../Modal/v-ModalFalse.vue";
import VModalTrue from "../Modal/v-ModalTrue.vue";
import VTimeOut from "../Time/v-TimeOut.vue";

export default {
  name: "v-Question",
  components: {
    VTimeOut,
    VModalTrue,
    VModalFalse,
  },
  props: {
    item_q: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      data_item_q: {},
      isAnswer: "",

      counter: 10,
      interval: null,
      timerActive: false,

      timeOutModal: null,
      hey: null,

      modalTrue: false,
      modalFalse: false,
    };
  },
  watch: {
    item_q: function watchT() {
      this.counter = 10;
      clearInterval(this.hey);
      this.startTimer();
    },
  },
  computed: {
    ...mapGetters(["QUESTION"]),
  },
  methods: {
    ...mapActions([
      "GET_FALSE_ANSWER",
      "GET_TRUE_ANSWER",
      "GET_POINT",
      "GET_QUANTITY",
    ]),

    SAFE_ANSWER() {
      if (this.isAnswer != "" && this.isAnswer == this.data_item_q.answer) {
        console.log(this.data_item_q.answer, 'Work??????????');
        clearInterval(this.hey);
        this.GET_TRUE_ANSWER(1);
        this.GET_POINT(this.data_item_q.value);
        this.GET_QUANTITY(1);
        this.modalTrue = true;
        console.log("Вы ответили ПРАВИЛЬНО");
      } else if (this.isAnswer != "" && this.isAnswer != this.data_item_q.answer) {
        console.log(this.data_item_q.answer, 'Work??????????');
        clearInterval(this.hey);
        this.modalFalse = true;
        this.GET_FALSE_ANSWER(1);
        this.GET_QUANTITY(1);
        console.log("УПС, Повезет в следующий раз");
      } else {
        console.log("тупо ниче не сработал");
      }
      this.isAnswer = "";
    },
    //-END-OF-TIMER--
    startTimer() {
      (this.modalFalse = false), (this.modalTrue = false);
      this.hey = setInterval(() => {
        if (this.counter >= 1) {
          this.counter--;
        } else if (this.counter == 0) {
          clearInterval(this.interval);
        }
      }, 1000);
      // if(this.status === 200){
        this.data_item_q = JSON.parse(localStorage.getItem('showQuestion_OneCard'))
      // }
    },

    getIdOfCard() {
      this.data_item_q.id;
    },
  },
  mounted() {
    // if(this.status === 200){
      this.data_item_q = JSON.parse(localStorage.getItem('showQuestion_OneCard'))
    // }
    this.startTimer();
  },
};
</script>

<style lang="scss">
.v-question {
  display: flex;
  width: 90%;
  &__menu {
    background: #2d55ff;
    width: 150px;
    height: 50px;
    border: none;
    border-radius: 3px;
    color: white;
    font-family: "Montserrat";
    position: absolute;
    top: 10px;
    right: 20px;
  }

  .v-question__timer {
    margin: 0 auto;
    margin-top: 20px;
    padding-top: 10px;
    background: rgb(255, 255, 255);
    border-radius: 5px;
    width: 150px;
    height: 100px;

    .v-question__tick {
      font-family: "Montserrat";
      .v-question__over {
        color: red;
      }
    }
  }
  .v-question__block {
    width: 800px;
    height: 400px;
    margin: 0 auto;
    border-radius: 4px;
    background: rgb(230, 230, 230);
    .v-question__title {
      padding: 20px;
      font-size: 23px;
      font-family: "Montserrat";
    }

    .v-question__answer {
      .v-question__answerInp {
        border: none;
        height: 30px;
      }
      .v-question__answerBtn {
        border: none;
        width: 80px;
        height: 45px;
        background: #2d55ff;
        color: white;
        margin: 0 10px;
        border-radius: 3px;
      }
    }
  }
}
</style>