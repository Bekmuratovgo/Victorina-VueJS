<template>
  <div class="v-statistic">
    <router-link :to="{ name: 'game' }">
      <button class="v-statistic__menu">Back To Game</button>
    </router-link>
    <h1>Статистика</h1>
    <div class="v-statistic__block">
      <h4>
        Имя: <span>{{ staticName }}</span>
      </h4>
      <h4>
        Общий балл: <span v-if="staticPoint"> {{ staticPoint }} </span>
      </h4>
      <h4>
        Кол-во вопросов: <span v-if="staticQuantityQ"> {{ staticQuantityQ }} </span>
      </h4>
      <h4>
        Не правильно ответил: <span v-if="staticFalseAnswer"> {{ staticFalseAnswer }} </span>
      </h4>
      
      <h4>
        Правильно ответил: <span v-if="staticTrueAnswer"> {{ staticTrueAnswer }} </span>
      </h4>
    </div>

    <div class="v-statistic__history">
      <div class="v-statistic__historyLeft">
        <div class="v-statistic__one">
          <h6>Имя</h6>
        </div>
        <div class="v-statistic__two">
          <h6>Общий балл</h6>
        </div>
      </div>
      <div class="v-statistic__historyRight">
        <div class="v-statistic__three">
          <h6>Кол-во вопросов</h6>
        </div>
        <div class="v-statistic__four">
          <h6>Не правильно ответил</h6>
        </div>
        <div class="v-statistic__five">
          <h6>Правильно ответил</h6>
        </div>
      </div>
        <button @click="clearHistory">Очистить</button>
    </div>

    <div class="v-statistic__history" v-if="historyObj">
      <div class="v-statistic__historyLeft">
        <div class="v-statistic__one">
          <h6>{{historyObj.name}}</h6>
        </div>
        <div class="v-statistic__two">
          <h6>{{historyObj.point}}</h6>
        </div>
      </div>
      <div class="v-statistic__historyRight">
        <div class="v-statistic__three">
          <h6>{{historyObj.quantityQ}}</h6>
        </div>
        <div class="v-statistic__four">
          <h6>{{historyObj.answerFalse}}</h6>
        </div>
        <div class="v-statistic__five">
          <h6>{{historyObj.answerTrue}}</h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: "v-Statistic",
  components: {},
  props: {},
  data() {
    return {
      staticName: [],
      staticTrueAnswer: [],
      staticFalseAnswer: [],
      staticQuantityQ: [],
      staticPoint: [],
      historyObj: {},

    };
  },
  computed: {
    ...mapGetters([
      ""
    ])
  },
  methods: {
    ...mapActions([
      "CLEAR_HISTORY"
    ]),
    clearHistory(){
      this.CLEAR_HISTORY(1)
      this.historyObj = 0
    },
    historyGet(){
      this.historyObj  = JSON.parse(localStorage.getItem('historyObj'))
      console.log(this.historyObj, 'local his');
    },  
    getTrueanswer() {

      this.staticTrueAnswer = JSON.parse(localStorage.getItem('answerTrue'));
      this.staticFalseAnswer = JSON.parse(localStorage.getItem('answerFalse'));
      this.staticQuantityQ = JSON.parse(localStorage.getItem('quantityQ'))
      this.staticPoint = JSON.parse(localStorage.getItem('point'))

      console.log(this.staticTrueAnswer, 'asdddsa');
    },
  },
  mounted() {
    this.getTrueanswer(), 
    this.staticName = JSON.parse(localStorage["name"]);

    this.historyGet()
  },
  watch: {},
};
</script>

<style lang="scss">
.v-statistic {
  .v-statistic__history {
    // margin-top: 20px;
    display: flex;
    background: rgb(155, 155, 155);
    margin: 0 auto;
    width: 600px;
    .v-statistic__historyLeft {
      display: flex;

      .v-statistic__one {
        width: 120px;
        height: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgb(187, 187, 187);
        border: 1px solid white;
      }
      .v-statistic__two {
        width: 120px;
        height: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgb(187, 187, 187);
        border: 1px solid white;
      }
    }

    .v-statistic__historyRight {
      display: flex;

      .v-statistic__three {
        width: 120px;
        height: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgb(187, 187, 187);
        border: 1px solid white;
      }
      .v-statistic__four {
        width: 120px;
        height: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgb(187, 187, 187);
        border: 1px solid white;
      }
      .v-statistic__five {
        width: 120px;
        height: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgb(187, 187, 187);
        border: 1px solid white;
      }
    }
  }

  .v-statistic__menu {
    background: #2035f2;
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
  .v-statistic__block {
    padding: 20px;
    text-align: start;
    margin: 0 auto;
    background: rgb(226, 226, 226);
    width: 600px;
    height: 300px;
    margin-bottom: 20px;
  }
  .v-statistic__block span {
    color: blue;
  }
  .v-statistic__block h4 {
    margin-top: 10px;
  }
}
</style>