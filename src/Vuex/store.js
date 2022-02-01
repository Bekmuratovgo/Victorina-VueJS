import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        firstArr: [],

        getterArray: [],

        question: {},
        name: [],

        falseAnswer: [],
        trueAnswer: [],
        quantityQ: 0,
        point: 0,

        history: [],

        idOfGrey: [],


        id1: '',
        id2: '',
        id3: '',
        id4: '',
        id5: '',
    },
    // --------------------------
    mutations: {
        SET_FIRST_PRODUCTS_TO_STATE: (state, product) => {
            state.id1 = product.title
            let data = product.clues.slice(0, 5)
            // console.log(data, 'asd1');
            data.map((item) => {
                return (
                    state.firstArr.push(item)
                )
            })
        },
        SET_SECOND_PRODUCTS_TO_STATE: (state, product) => {
            state.id2 = product.title
            let data = product.clues.slice(0, 5)

            data.map((item) => {
                return (
                    state.firstArr.push(item)
                )
            })
        },
        SET_THIRD_PRODUCTS_TO_STATE: (state, product) => {
            state.id3 = product.title
            let data = product.clues.slice(0, 5)

            data.map((item) => {
                return (
                    state.firstArr.push(item)
                )
            })
        },
        SET_FOURTH_PRODUCTS_TO_STATE: (state, product) => {
            state.id4 = product.title
            let data = product.clues.slice(0, 5)

            data.map((item) => {
                return (
                    state.firstArr.push(item)
                )
            })
        },
        SET_FIFTH_PRODUCTS_TO_STATE: (state, product) => {
            state.id5 = product.title
            let data = product.clues.slice(0, 5)

            data.map((item) => {
                return (
                    state.firstArr.push(item)
                )
            })
        },


        SET_SHOW_QUESTION: (state, question) => {
            // console.log(question, 'hola');
            // if(this.status === 200){
                let asd = JSON.parse(localStorage.getItem("showQuestion_OneCard"));
                state.question = asd
                console.log(asd, 'asd');
            // }
        },

        ADD_NAME(state, todo) {
            state.name = todo
        },

        SET_TRUE_ANSWER: (state, answerT) => {
            state.trueAnswer.push(answerT)
            console.log(state.trueAnswer, 'asd');
        },
        SET_FALSE_ANSWER: (state, answerF) => {
            state.falseAnswer.push(answerF)
        },
        SET_QUANTITY: (state, id) => {
          state.quantityQ += id  
        },
        SET_POINT: (state, point) => {
            state.point += point
        },
        SET_HISTORY: (state, history) => {
            state.history.push(history)
        },
        SET_CLEAR: (state) => {
            state.history = ''
        },
        SET_ID_OF_GREY(state, id) {
            // if ( this.status === 200) {
                // ...success...
                let a =JSON.parse(localStorage.getItem('idOfGreyCard'));
                a.push(id)
                console.log(id);
                localStorage.setItem('idOfGreyCard', JSON.stringify(a))
            // } else { }
            state.idOfGrey.push(id)
            console.log(state.idOfGrey, 'id asd OFF');
        },

      
    },
    // --------------------------


    actions: {

        SET_LOCAL({commit}, card){
            commit("SET_LOCAL", card)
        },
        //---FIRST---
         async GET_FIRST_PRODUCTS_FROM_API({ commit }) {
            return axios('http://jservice.io/api/category?id=233')
                .then((products) => {
                    commit('SET_FIRST_PRODUCTS_TO_STATE', products.data);
                    return products
                })
                .catch((err) => {
                    console.log(err, 'err FIRST');
                    return err
                })
        },
        //---SECOND---
        async GET_SECOND_PRODUCTS_FROM_API({ commit }) {
            return axios('http://jservice.io/api/category?id=234')
                .then((products) => {
                    commit('SET_SECOND_PRODUCTS_TO_STATE', products.data);
                    return products
                })
                .catch((err) => {
                    console.log(err, 'err SECOND');
                    return err
                })
        },
        //---THIRD---
        async GET_THIRD_PRODUCTS_FROM_API({ commit }) {
            return axios('http://jservice.io/api/category?id=235')
                .then((products) => {
                    commit('SET_THIRD_PRODUCTS_TO_STATE', products.data);
                    return products
                })
                .catch((err) => {
                    console.log(err, 'err THIRD');
                    return err
                })
        },
        //---FOUTH---
        async GET_FOURTH_PRODUCTS_FROM_API({ commit }) {
            return axios('http://jservice.io/api/category?id=228')
                .then((products) => {
                    commit('SET_FOURTH_PRODUCTS_TO_STATE', products.data);
                    return products
                })
                .catch((err) => {
                    console.log(err, 'err FOURTH');
                    return err
                })
        },
        //---FIFTH---
        async GET_FIFTH_PRODUCTS_FROM_API({ commit }) {
            return axios('http://jservice.io/api/category?id=246')
                .then((products) => {
                    commit('SET_FIFTH_PRODUCTS_TO_STATE', products.data);
                    return products
                })
                .catch((err) => {
                    console.log(err, 'err FIFTH');
                    return err
                })
        },

        ID_OF_GREY_CARD({commit}, id) {
            commit("SET_ID_OF_GREY", id)
        },

        SHOW_QUESTION({ commit }, product) {
            commit('SET_SHOW_QUESTION', product)
        },

        GET_TRUE_ANSWER({commit}, answerT){
            commit('SET_TRUE_ANSWER', answerT)
            let getPoint = localStorage.getItem('answerTrue')
            let setPoint = JSON.parse(getPoint)
            let sum = setPoint + answerT
            localStorage.setItem('answerTrue',JSON.stringify(sum))
        },
        GET_FALSE_ANSWER({commit}, answerF){
            commit('SET_FALSE_ANSWER', answerF)
            let getPoint = localStorage.getItem('answerFalse')
            let setPoint = JSON.parse(getPoint)
            let sum = setPoint + answerF
            localStorage.setItem('answerFalse',JSON.stringify(sum))
        },
        GET_QUANTITY({commit}, id){
            commit('SET_QUANTITY', id)
            let getPoint = localStorage.getItem('quantityQ')
            let setPoint = JSON.parse(getPoint)
            let sum = setPoint + id
            localStorage.setItem('quantityQ',JSON.stringify(sum))
        },
        GET_POINT({commit}, point) {
            commit('SET_POINT', point)
            console.log(point);

            let getPoint = localStorage.getItem('point')
            let setPoint = JSON.parse(getPoint)
            let sum = setPoint + point
            console.log(sum ,'sun POint ');
            localStorage.setItem('point',JSON.stringify(sum))
        },

        GET_HISTORY({commit}, history) {
            commit('SET_HISTORY', history)
            localStorage.setItem('historyObj', JSON.stringify(history))
        },
        CLEAR_HISTORY({commit}, hey){
            commit('SET_CLEAR', hey)
        },

        ADD_NAME({commit}, name) {
            commit('ADD_NAME', name)
            // console.log(name, 'name');
        },

       
    },
    // --------------------------
    getters: {
        FIRST_PRODUCT(state) {
            // console.log(state.firstArr, 'ola');
            return state.firstArr
        },

        ID_OF_GREY(state){
            return state.idOfGrey
        },

        QUESTION(state) {
            return state.question 
        },

        NAME(state) {
            return state.name
        },

        ID_1(state) {
            return state.id1
        },
        ID_2(state) {
            return state.id2
        },
        ID_3(state) {
            return state.id3
        },
        ID_4(state) {
            return state.id4
        },
        ID_5(state) {
            return state.id5
        },

        FALSE_ANSWER() {
            let asd = localStorage.getItem('answerFalse')
            return asd
        },
        TRUE_ANSWER() {
            let asd = localStorage.getItem('answerTrue')
            return asd
        },
        QUANTITY_Q() {
            let asd = localStorage.getItem('quantityQ')
            return asd
        },
        POINT() {
            let asd = localStorage.getItem('point')
            return asd
        },
        HISTORY(state) {
            return state.history
        },

       
    }
})

export default store