<template>
  <div>
    <div id="net-cloud-header">
      <div id="header-top">
        <div id="header-top-wrap" class="clearFix">
          <div id="header-logo" class="fl">
            <router-link to="/netCloudMusic">网易云音乐</router-link>
          </div>

          <ul class="fl clearFix">
            <li class="fl" v-bind:class="{navClickedBg: isShowFM, navRecoveryDefault: isRecoveryFM}"><router-link class="router-link" to="/findMusic" @click.native="toggleNetCloudNav(findMusic)">发现音乐</router-link><i v-bind:class="{redArrow: isShowFM}"></i></li>
            <li class="fl" v-bind:class="{navClickedBg: isShowMM, navRecoveryDefault: isRecoveryMM}"><router-link class="router-link" to="/myMusic" @click.native="toggleNetCloudNav(myMusic)">我的音乐</router-link><i v-bind:class="{redArrow: isShowMM}"></i></li>
            <li class="fl" v-bind:class="{navClickedBg: isShowF, navRecoveryDefault: isRecoveryF}"><router-link class="router-link" to="/friend" @click.native="toggleNetCloudNav(friend)">朋友</router-link><i v-bind:class="{redArrow: isShowF}"></i></li>
            <li class="fl" v-bind:class="{navClickedBg: isShowSM, navRecoveryDefault: isRecoverySM}"><a href="" class="router-link" @click.native="toggleNetCloudNav(shoppingMall)">商城</a><i v-bind:class="{redArrow: isShowSM}"></i></li>
            <li class="fl" v-bind:class="{navClickedBg: isShowSP, navRecoveryDefault: isRecoverySP}"><a href="" class="router-link" @click.native="toggleNetCloudNav(musician)">音乐人</a><i v-bind:class="{redArrow: isShowSP}"></i></li>
            <li class="fl" v-bind:class="{navClickedBg: isShowDC, navRecoveryDefault: isRecoveryDC}"><router-link class="router-link" to="/downloadClient" @click.native="toggleNetCloudNav(downloadClient)">下载客户端</router-link><i class="hot"></i><i v-bind:class="{redArrow: isShowDC}"></i></li>
          </ul>

          <div id="head" class="fr clearFix" @mouseover="showUserInfoList()" @mouseout="hideUserInfoList()">
              <div class="fl head-portrait pointer">
                <img src="http://p3.music.126.net/Xw6eKK7XwcMr4yzORH_zzA==/109951162842383781.jpg?param=30y30" alt="图片">
              </div>
              <i class="arrow fr"></i>
            <div class="user-personal-info" :class="{styleShow:showUserInfo, styleHide: hideUserInfo }">
              <ul>
                <li>
                  <a href="javascript" class="user-mask">
                    <i class="info-icon1 info-icon"></i>
                    <span class="info-description">我的主页</span>
                  </a>

                </li>
                <li>
                  <a href="javascript" class="user-mask">
                    <i class="info-icon2 info-icon"></i>
                    <span class="info-description">我的消息</span>
                  </a>

                </li>
                <li>
                  <a href="javascript" class="user-mask">
                    <i class="info-icon3 info-icon"></i>
                    <span class="info-description">我的等级</span>
                  </a>

                </li>
                <li>
                  <a href="javascript" class="user-mask">
                    <i class="info-icon4 info-icon"></i>
                    <span class="info-description">VIP会员</span>
                  </a>

                </li>
                <li>
                  <a href="javascript" class="user-mask">
                    <i class="info-icon5 info-icon"></i>
                    <span class="info-description">个人设置</span>
                  </a>

                </li>
                <li>
                  <a href="javascript" class="user-mask">
                    <i class="info-icon6 info-icon"></i>
                    <span class="info-description">退出</span>
                  </a>

                </li>
              </ul>
            </div>
          </div>

          <a  id="video" class="fr pointer video-submission">视频投稿</a>

          <div class="fr search clearFix">
            <i class="magnifier fl pointer"></i>
            <input class="fr" type="text" placeholder="音乐/视频/电台/用户">
          </div>

        </div>
      </div>

    </div>
    <IndexContent/>
  </div>

</template>

<script>
import IndexContent from './IndexContent'
import store from '../../vuex/store'
export default {
  name: 'IndexHeader',
  data () {
    return {
      store,
      isShowFM: true,
      isShowMM: false,
      isShowF: false,
      isShowSM: false,
      isShowSP: false,
      isShowDC: false,
      isRecoveryFM: false,
      isRecoveryMM: true,
      isRecoveryF: true,
      isRecoverySM: true,
      isRecoverySP: true,
      isRecoveryDC: true,
      findMusic: '发现音乐',
      myMusic: '我的音乐',
      friend: '朋友',
      shoppingMall: '商城',
      musician: '音乐人',
      downloadClient: '下载客户端',
      showUserInfo: false,
      hideUserInfo: true,
      netCloudNavName: ''
    }
  },
  created(){

  },
  mounted(){
    /********************************************/
    //处理在刷新页面以后导航的默认选中的背景色处理逻辑
    let routeName = window.location.hash.slice(2);
    if(routeName == 'recommend'){
      this.netCloudNavName = '发现音乐'
    }else if(routeName == 'myMusic'){
      this.netCloudNavName = '我的音乐'
    }else if(routeName == 'friend') {
      this.netCloudNavName = '朋友'
    }else if(routeName == 'downloadClient'){
      this.netCloudNavName = '下载客户端'
    }
    this.toggleNetCloudNav(this.netCloudNavName);
    /*********************************************/
  },
  methods: {
    toggleNetCloudNavBgAndArrowHandle (netCloudNavNameFP, booleanArrow, booleanRecovery) {
      /* 选中导航时箭头和背景色显示处理 */
      this.isShowFM = false
      this.isShowMM = false
      this.isShowF = false
      this.isShowSM = false
      this.isShowSP = false
      this.isShowDC = false

      /* 未选中的导航恢复默认的背景 */
      this.isRecoveryFM = true
      this.isRecoveryMM = true
      this.isRecoveryF = true
      this.isRecoverySM = true
      this.isRecoverySP = true
      this.isRecoveryDC = true

      switch (netCloudNavNameFP) {
        case '发现音乐':
          this.isShowFM = booleanArrow
          this.isRecoveryFM = booleanRecovery
          break
        case '我的音乐':
          this.isShowMM = booleanArrow
          this.isRecoveryMM = booleanRecovery
          break
        case '朋友':
          this.isShowF = booleanArrow
          this.isRecoveryF = booleanRecovery
          break
        case '商城':
          this.isShowSM = booleanArrow
          this.isRecoverySM = booleanRecovery
          break
        case '音乐人':
          this.isShowSP = booleanArrow
          this.isRecoverySP = booleanRecovery
          break
        case '下载客户端':
          this.isShowDC = booleanArrow
          this.isRecoveryDC = booleanRecovery
          break
      }
    },
    toggleNetCloudNav (netCloudNavName) {
      if (netCloudNavName === '发现音乐') {
        this.toggleNetCloudNavBgAndArrowHandle(netCloudNavName, true, false)
      } else if (netCloudNavName === '我的音乐') {
        this.toggleNetCloudNavBgAndArrowHandle(netCloudNavName, true, false)
      } else if (netCloudNavName === '朋友') {
        this.toggleNetCloudNavBgAndArrowHandle(netCloudNavName, true, false)
      } else if (netCloudNavName === '商城') {
        this.toggleNetCloudNavBgAndArrowHandle(netCloudNavName, true, false)
      } else if (netCloudNavName === '音乐人') {
        this.toggleNetCloudNavBgAndArrowHandle(netCloudNavName, true, false)
      } else if (netCloudNavName === '下载客户端') {
        this.toggleNetCloudNavBgAndArrowHandle(netCloudNavName, true, false)
      }
    },
    showUserInfoList () {
      this.showUserInfo = true
      this.hideUserInfo = false
    },
    hideUserInfoList () {
      this.showUserInfo = false
      this.hideUserInfo = true
    }


  },
  components: {
    IndexContent
  }
}
</script>

<style scoped>
  #header-top-wrap #head {
    position: relative;
  }
  #header-top-wrap #head .user-personal-info {
    width: 158px;
    height: 204px;
    background: #2b2b2b;
    border: 1px solid #202020;
    z-index: 12;
    position: absolute;
    box-shadow: 0 8px 24px 0 rgba(0,0,0,0.50);
    border-radius: 4px;
    top: 40px;
    left: -60px;
  }
  #header-top-wrap #head .styleShow {
    display: block;
  }
  #header-top-wrap #head .styleHide {
    display: none;
  }
  #header-top-wrap #head .user-personal-info:before {
    content: '';
    display: inline-block;
    width: 10px;
    height: 10px;
    background: #fff;
    transform: rotate(45deg);
    position: absolute;
    top: -4px;
    left: 50%;
    margin-left: -10px;
    background: #2b2b2b;
  }
  #header-top-wrap #head .user-personal-info ul li {
    width: 158px;
    height: 34px;
    position: relative;
    line-height: 34px;
  }
  #header-top-wrap #head .user-personal-info ul li:hover {
    background: #353535;
  }
  #header-top-wrap #head .user-personal-info ul li .user-mask {
    width: 158px;
    height: 34px;
    float: left;
    position: absolute;
    top: 0;
    left: 0;
  }
  .user-personal-info ul li .info-icon {
    display: block;
    width: 18px;
    height: 18px;
    float: left;
    margin: 7px 10px 0 20px;
  }
  .user-personal-info ul li .info-icon1 {
    background: url('../../assets/images/toplist.png') 0 -80px no-repeat;
  }
  .user-personal-info ul li .info-icon2 {
    background: url('../../assets/images/toplist.png') -21px -120px no-repeat;

  }
  .user-personal-info ul li .info-icon3 {
    background: url('../../assets/images/toplist.png') 0 -101px no-repeat;

  }
  .user-personal-info ul li .info-icon4 {
    background: url('../../assets/images/toplist.png') 0 -161px no-repeat;

  }
  .user-personal-info ul li .info-icon5 {
    background: url('../../assets/images/toplist.png') 0 -142px no-repeat;

  }
  .user-personal-info ul li .info-icon6 {
    background: url('../../assets/images/toplist.png') 0 -121px no-repeat;

  }
  .user-personal-info ul li .info-description{
    float: left;
    font-size: 12px;
    color: #ccc;
  }
  .user-personal-info ul li .user-mask:hover .info-description {
    color: #fff;
  }
  /*网易云音乐头部处理*/
  #net-cloud-header {
    width: 100%;
    color: #ccc;
  }

  #header-top {
    height: 70px;
    background: #242424;
  }

  #header-top-wrap {
    width: 1100px;
    margin:0 auto;
  }
  /*logo部分处理*/
  #header-logo {
    width: 153px;
    height: 69px;
    margin-right: 30px;
    background: url('../../assets/images/header.png') no-repeat;
  }
  #header-logo a {
    display: inline-block;
    width: 153px;
    height: 100%;
    /*text-indent首行文本的缩进*/
    text-indent: -9999px;
  }

  /*列表部分处理*/
  #header-top-wrap ul li {
    line-height: 70px;
    height: 70px;
    position: relative;
  }
  /* 显示红色箭头 */
  #header-top-wrap ul li .redArrow{
    display: inline-block;
    width: 12px;
    height: 6px;
    background: url('../../assets/images/header.png') -226px 0 no-repeat;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -6px;
  }

  /* 选择网易云导航后背景色 */
  .navClickedBg {
    background-color: #000;
    color: #fff;
  }
  .navRecoveryDefault {
    background-color: #242424;
    color: #ccc;
  }
  #header-top-wrap ul li .router-link {
    display: inline-block;
    height: 70px;
    padding: 0 14px 0 14px;
    color: #ccc;
  }
  #header-top-wrap ul li:hover {
    background-color: #000;
    color: #fff;
  }

  #header-top-wrap ul .hot {
    display: inline-block;
    width: 26px;
    height: 13px;
    background: url('../../assets/images/header.png') -192px 0 no-repeat;
    position: relative;
    top: -4px;
    right: 7px;
  }

  /*搜索框处理部分*/
  #header-top-wrap .search {
    width: 158px;
    height: 32px;
    border-radius: 30px;
    background-color: #fff;
    margin-top: 19px;
    position: relative;
  }
  #header-top-wrap .search .magnifier{
    display: inline-block;
    width: 14px;
    height: 14px;
    background: url('../../assets/images/header.png') -9px -108px no-repeat;
    position: absolute;
    top: 8px;
    left: 10px;
  }
  #header-top-wrap .search input {
    width: 120px;
    line-height: 16px;
    font-size: 12px;
    outline: none;
    border: none;
    position: relative;
    top: 8px;
    right: 4px;
  }

  /*摄影机处理*/

  #header-top-wrap .video-submission {
    display: inline-block;
    width: 58px;
    height: 32px;
    color: #ccc;
    font-size: 12px;
    line-height: 32px;
    background: url('../../assets/images/header.png') 0px -140px no-repeat;
    margin: 19px 0 0 12px;
    padding-left: 32px;
  }
  #header-top-wrap .video-submission:hover{
    background: url('../../assets/images/header.png') -100px -140px no-repeat;
    color: #fff;
  }
  /*头像部分处理*/
  #header-top-wrap #head {
    margin: 19px 0 0 20px;
    height: 45px;
  }
  #header-top-wrap #head .head-portrait {
      padding-right: 12px;
  }
  #header-top-wrap #head .head-portrait img {
    border-radius: 30px;
  }
  #header-top-wrap #head .arrow {
    display: inline-block;
    width:12px;
    height: 7px;
    background: url('../../assets/images/header.png') right -60px no-repeat;
    position: relative;
    top: 12px;
  }
</style>
