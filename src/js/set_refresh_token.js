import axios from 'axios'

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
