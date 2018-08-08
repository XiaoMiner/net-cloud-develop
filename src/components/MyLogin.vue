<template>
  <div id="my-login" :style="{height: clientHeight+'px'}">
    <div class="login-validate-part" ref="loginPart" @mousedown="mouseDownHandle" @mousemove="mouseMoveHandle" @mouseup="mouseUpHandle">
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
      userNameInfo: this.$md5('17853100883@163.com'),
      userPasswordInfo: this.$md5('123456'),
      isShow: false,
      isHide: true,
      detectionInfo:'',
      isDown: false,//该状态表示是否按下鼠标
      mousePositionBoxX: 0,
      mousePositionBoxY: 0,
      isLeaveEle: 0,//该状态表示鼠标是否离开元素。
    }
  },
  mounted(){
    console.dir(this.$md5)
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
      if(this.$md5(this.userName) == this.userNameInfo && this.$md5(this.userPassword) == this.userPasswordInfo){
        window.location = window.location.origin+'/#/recommend';
      }
    },
    mouseDownHandle(e){
      // 鼠标按下时,计算鼠标在盒子中的位置
      // console.log(e);
      // console.log('mouseDown')
      this.mousePositionBoxX = parseInt(e.clientX) - parseInt($(this.$refs.loginPart)[0].offsetLeft);
      this.mousePositionBoxY = parseInt(e.clientY) - parseInt($(this.$refs.loginPart)[0].offsetTop);
     /* console.log('mouseDown'+ e.clientX);
      console.log('mouseDownElementOffsetLe'+$(this.$refs.loginPart)[0].offsetLeft);
      console.log('mouseInBox' + this.mousePositionBoxX)*/
      this.isDown = true;
    },
    mouseUpHandle(){
      // console.log('mouseUp');
      this.isDown = false;
    },
    mouseMoveHandle(e){
      // 鼠标是否脱离了拖动元素
    /* let differenceX = e.clientX - parseInt($(this.$refs.loginPart)[0].offsetLeft),
          differenceY = e.clientY - parseInt($(this.$refs.loginPart)[0].offsetTop),
          elementOffsetHeight = $(this.$refs.loginPart)[0].offsetHeight,
          elementOffsetWidth= $(this.$refs.loginPart)[0].offsetWidth;
      if(differenceX <= elementOffsetWidth || differenceY <= elementOffsetHeight){
        this.isLeaveEle = 0;
      }else {
        this.isLeaveEle = 1;
      }*/
      if(this.isDown){
        let distanceX = parseInt(e.clientX) - this.mousePositionBoxX;
        let distanceY = parseInt(e.clientY) - this.mousePositionBoxY;

        $(this.$refs.loginPart)[0].style.left = distanceX + 'px';
        $(this.$refs.loginPart)[0].style.top = distanceY + 'px';
        /*console.log('mouseMoveClientX'+e.clientX);
        console.log('mouseMoveOffsetLeft' + distanceX);*/
      }
      // console.log('mouseMove');
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
  position: relative;

}
#my-login .login-validate-part {
  width: 362px;
  height: 350px;
  background: #fff;
  position: absolute;
  left: 683px;
  top: 124px;
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
