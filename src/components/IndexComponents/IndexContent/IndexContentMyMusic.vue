<template>
<div id="my-music">
  <div class="my-music-top"></div>
  <div class="my-music-content">
    <div class="my-music-content-wrap clearFix">
      <ul class="content-wrap-ul">
        <li class="content-wrap-list-one">
          <div class="content-wrap-list-description">用户ID</div>
          <div class="content-wrap-list-description">用户名称</div>
          <div class="content-wrap-list-description">用户手机号</div>
          <div class="content-wrap-list-description">用户项目数量</div>
        </li>
        <li class="content-wrap-list" v-for="singleInfo in userInfo">
          <div class="content-wrap-list-description">{{singleInfo.userId}}</div>
          <div class="content-wrap-list-description">{{singleInfo.userName}}</div>
          <div class="content-wrap-list-description">{{singleInfo.userPhone}}</div>
          <div class="content-wrap-list-description">{{singleInfo.userProjCount}}</div>
        </li>
      </ul>
    </div>
  </div>

</div>
</template>

<script>
import qs from 'qs'
import store from './../../../vuex/store'
export default {
  name: 'IndexContentMyMusic',
  data(){
    return {
      userInfo: []
    }
  },
  created(){
    var _this = this;
    console.dir(_this)
    /*var params = new URLSearchParams();
    params.append('userId', '2638')
    params.append('userName', '')
    params.append('userPhone', '')
    params.append('Num', '1')
    params.append('rowNum', '30')
    params.append('platformId', '1')*/
    // 代理服务器解决跨域的问题
   /* _this.$axios({
      baseURL: '/api',
      url: '/Terminal1/LN_AreaUserInfoManager.asmx/SelectUserInfoApi',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: qs.stringify({
        userId: '2638',
        userName: '',
        userPhone: '',
        Num: 1,
        rowNum: 30,
        platformId: 1
      }),
    }).then(function(responseData){
      console.log(responseData)
    }).catch(function(){
      console.log('抛出一个错误')
    })*/
    _this.$axios({
      url: 'http://39.106.219.106:8090/Terminal2/LN_AreaUserInfoManager.asmx/SelectUserInfoApi',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: qs.stringify({
        userId: '2638',
        userName: '',
        userPhone: '',
        Num: 1,
        rowNum: 30,
        platformId: 1
      }),
    }).then(function(responseData){
      // console.log(responseData)
      if(responseData.status == 200) {
        // console.log(responseData.message);
        _this.userInfo = responseData.data.row
        _this.$store.dispatch('update');
      }else {
        console.log(responseData.message)
      }
    }).catch(function(){
      console.log('抛出一个错误')
    })
    // jquery中ajax请求。
  /*  $.ajax({
      url: 'http://39.106.219.106:8090/Terminal1/LN_AreaUserInfoManager.asmx/SelectUserInfoApi',
      type: 'post',
      data: {
        userId: '2638',
        userName: '',
        userPhone: '',
        Num: 1,
        rowNum: 30,
        platformId: 1
      },
      dataType: 'json',
      success: function(responseData){
        // console.log(responseData);
        if(responseData.status == '1') {
          // console.log(responseData.message);
          _this.userInfo = responseData.row
        }else {
          console.log(responseData.message)
        }
      },
      error: function(){
        console.log('请求出错!')
      }
    })*/
  }
}
</script>

<style scoped>
  #my-music {

  }
  #my-music .my-music-top {
    height: 5px;
    background-color: #C20C0C;
  }
  #my-music .my-music-content-wrap {
    width: 700px;
    margin: 9% auto;
    background: #f5f5f5;
    border: 1px solid #c20c0c;
  }
  .my-music-content-wrap .content-wrap-list-one {
    /*float: left;*/
  }
  .content-wrap-list-one .content-wrap-list-description {
    width: 175px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    float: left;
    background: #ccc;
  }
  .my-music-content-wrap .content-wrap-list {

  }
  .content-wrap-list .content-wrap-list-description {
    width: 175px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    float: left;
  }
</style>
