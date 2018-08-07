// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './vuex/store'
import BackTop from './directive/v-back-top'
import axios from 'axios'
import $ from 'jquery'
Vue.use(Vuex)

// axios配置 (axios实例在配置时会有一个优先级顺序,首先从lib/default.js找到库的默认值, 然后是实例的default属性,
// 最后是请求的[axios(config)]config参数)
axios.defaults.timeout = 5000;
axios.defaults.baseURL = '/api';

// interceptors(C:拦截器) 可以在请求或者响应的then或catch之前做拦截处理。
// request拦截器。
axios.interceptors.request.use(config =>{
  console.log(config);
  // 让每一个axios请求都携带token。
  var access_token = '010656B5899DE588F12007DDD030E1F6';
    Object.assign(config.headers, {'access_token': access_token});
    return config
}, error=>{
    return Promise.reject(error);
})
// response 拦截器
axios.interceptors.response.use(response=>response,error => {
  return Promise.reject(error);
})
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
