import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    first_piece: null,
    second_piece: null,
    score: 0,
  },
  mutations: {
    updateScore(state,payload) {
      state.score += payload.value;
    },
    resetScore(state) {
      state.score = 0;
    },
    selectHexagon(state,payload) {
      if(payload.position === 1) {
        state.first_piece = payload.hexagon;
      } else {
        state.second_piece = payload.hexagon;
      }
    }
  },
  actions: {
    updateScore({commit}, payload) {
      commit('updateScore',payload);
    },
    selectHexagon({commit}, payload) {
      commit('selectHexagon',payload);
    },
    resetScore({commit}) {
      commit('resetScore');
    }
  }
})

new Vue({
  render: h => h(App),
  store: store,
}).$mount('#app')
