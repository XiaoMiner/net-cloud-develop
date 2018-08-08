import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  callBack: 0,// 回到顶部时的处理
  testData: 'token'
};
const mutations = {
  update (state, data) {
    state.callBack = data;
  },
  test (state, data){
    state.testData = data;
    // mutations混合异步调用会导致你的程序很难调试, 无法追踪回调的顺序。所以mutations处理的必须同步事务。
    setTimeout(function(){
      state.testData = 'mutationsUpdateToken';
    }, 1000)
  }
};
const actions = {
  update (context) {
    console.log('dispatch')
    setTimeout(function(){
      context.commit('test', 'updateToken');
    }, 2000)
  }
}
export default new Vuex.Store({
  state,
  mutations,
  actions
})
