import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  callBack: 0,// 回到顶部时的处理
};
const mutations = {
  update (state, data) {
    state.callBack = data;
  }
};
export default new Vuex.Store({
  state,
  mutations
})
