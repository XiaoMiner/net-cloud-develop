// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './vuex/store'
import BackTop from './directive/v-back-top'
import axios from 'axios'

import token from './js/set_refresh_token';
// import cookie from './js/set_refresh_cookie';
import $ from 'jquery'

Vue.use(Vuex)

// 把axios绑定到vue实例的原型中,以便于在全局使用, 在其他组件中使用。
Vue.prototype.$axios = axios;
Vue.config.productionTip = false
window.onscroll = function() {
  let distanceTop = Math.ceil(document.documentElement.scrollTop);
  // console.log(distanceTop);
  if(distanceTop > 0){
    store.commit('update', 1);
  }else if(distanceTop == 0) {
    store.commit('update', 0)
  }
}
BackTop.directive()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
