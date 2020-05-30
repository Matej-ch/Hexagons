import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
  state : {
    firstPiece: 0,
    secondPiece: 0,
  }
})

new Vue({
  render: h => h(App),
  store: store,
}).$mount('#app')
