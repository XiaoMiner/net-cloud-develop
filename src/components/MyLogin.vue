<template>
  <div id="my-login" :style="{height: clientHeight+'px'}">
    <div class="login-validate-part">
      <div class="login-validate-wrap">
        <h3 class="login-validate-h3">登录</h3>
        <div class="login-validate-content">
          <form @submit.prevent="submit">
            <div class="clearFix">
              <label for="email" class="login-validate-content-label">用户帐号</label>
              <input class="login-validate-content-input" id="email" v-model="userName" name="email" type="text">
            </div>
            <br/>
            <div class="clearFix">
              <label for="password" class="login-validate-content-label">用户密码</label>
              <input type="text" class="login-validate-content-input" v-model="userPassword" id="password" name="password">
            </div>
            <p :class="{ShowStyle: isShow, hideStyle: isHide}" style="width:280px; height: 20px;">{{detectionInfo}}</p>
            <button type="submit" class="login-validate-content-button pointer" value="登录">登录</button>
          </form>
        </div>
      </div>


    </div>

  </div>
</template>

<script>
import Vue from 'vue'
import VeeValidate, { Validator } from 'vee-validate'
import zhCN from 'vee-validate/dist/locale/zh_CN'
Validator.addLocale(zhCN)
const config = {
  errorBagName: 'errors',
  fieldsBagName: 'fields',
  delay: 100,
  locale: 'zh_CN',
  strict: true,
  enableAutoClasses: true,
  events: 'blur',
  inject: true
}
Vue.use(VeeValidate, config)
const dictionary = {
  zh_CN: {
    messages: {
      email: () => '邮箱格式不正确呦',
      required: field => '请输入您的' + field,
      min: (field, ref) => field +'长度至少'+ref+ '个字符'
    },
    attributes: {
      password: '用户密码',
      email: '用户邮箱'
    }
  },

}
Validator.updateDictionary(dictionary)

// 自定义校验规则
// qq
Validator.extend('password', {
  messages: {

  },
  validate: value => {
    return /^\d{16}$/
  }
})

export default {
  name: 'MyLogin',
  data(){
    return {
      clientHeight: document.documentElement.clientHeight,
      userName: '',
      userPassword: '',
      userNameInfo: '17853100883@163.com',
      userPasswordInfo: '123456',
      isShow: false,
      isHide: true,
      detectionInfo:''
    }
  },
  methods: {
    submit(){
      if(this.userName == '' && this.userPassword == ''){
        this.isShow = true;
        this.isHide = false;
        this.detectionInfo = '用户名称不能为空'
        return ;
      }else if(this.userName != '' && this.userPassword == ''){
        this.isShow = true;
        this.isHide = false;
        this.detectionInfo = '用户密码不能为空'
        return ;
      }else if(this.userName == '' && this.userPassword != ''){
        this.isShow = true;
        this.isHide = false;
        this.detectionInfo = '用户名称不能为空'
        return ;
      }
      // 帐号 密码 都不为空。
      this.isShow = false;
      this.isHide = true;
      if(this.userName == this.userNameInfo && this.userPassword == this.userPasswordInfo){
        window.location = window.location.origin+'/#/recommend';
      }
    }
  },
  watch:{
    userName(newValue, oldValue){
      if(newValue != ''){
        this.isShow = false;
        this.isHide = true;
      }
    },
    userPassword(newValue, oldValue){
      if(newValue != ''){
        this.isShow = false;
        this.isHide = true;
      }

    }
  }
}
</script>

<style scoped>
#my-login {
  width: 100%;
  background: #C20C0C;
  border: 1px solid #c20c0c;
  box-sizing: border-box;

}
#my-login .login-validate-part {
  width: 362px;
  height: 350px;
  margin: 7% auto;
  background: #fff;
}
#my-login .login-validate-wrap {
  margin: 0 24px;
}
#my-login .login-validate-h3 {
  padding: 10px 0 0;
  text-align: center;
  color: #222;
  font-size: 24px;
}
.login-validate-part .login-validate-content {
  width: 280px;
  margin: 24px auto;
  position: relative;
}
.login-validate-content .login-validate-content-label {
  float: left;
}
.login-validate-content .login-validate-content-input {
  float: right;
  margin-right: 24px;
}
.login-validate-content .login-validate-content-button {
  position: absolute;
  outline: none;
  border: none;
  width: 174px;
  height: 34px;
  border-radius: 4px;
  left: 50%;
  margin-left: -87px;
  bottom: -54px;
}
.ShowStyle {
    visibility: visible;
}
.hideStyle {
  visibility: hidden;
}
</style>
