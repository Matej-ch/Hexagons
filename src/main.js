import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    firstPiece: 0,
    secondPiece: 0,
    score: 0,
  },
  mutations: {
    updateScore(state,payload) {
      state.score += payload.value;
    }
  },
  actions: {
    updateScore(context) {
      context.commit('updateScore');
    }
  }
})

new Vue({
  render: h => h(App),
  store: store,
}).$mount('#app')
