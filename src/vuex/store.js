import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  callBack: 0,// 回到顶部时的处理
  DLS_pageEnter: 0,// 0 表示未进入页面 1表示已进入页面
};
const mutations = {
  update (state, data) {
    state.callBack = data;
  },
  updateDownloadLoadStatus(state, data){
    state.DLS_pageEnter = data;
  }
};
export default new Vuex.Store({
  state,
  mutations
})
