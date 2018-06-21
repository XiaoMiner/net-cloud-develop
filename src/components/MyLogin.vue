<template>
  <div>
    <input v-validate="'required|email'" id="email" name="email" type="text">
    <span>{{errors.first('email')}}</span>
    <br/>
    <input type="text" v-validate="'required|qq'" id="qq" name="qq">
    <span>{{errors.first('qq')}}</span>
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
      required: (field) => '请输入您的' + field
    }
  },
  attributes: {
    email: '邮箱',
    qq: 'qq账号'
  }
}
Validator.updateDictionary(dictionary)

// 自定义校验规则
// qq
Validator.extend('qq', {
  messages: {
    zh_CN: field => 'qq号码输入不正确'
  },
  validate: value => {
    return /^[1-9][0-9]{4,8}$/.test(value)
  }
})

export default {
  name: 'MyLogin'
}
</script>

<style scoped>

</style>
