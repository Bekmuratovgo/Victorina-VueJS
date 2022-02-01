import Vue from 'vue'
import App from './App.vue'
import store from './Vuex/store'
import router from './Router/Router'

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
