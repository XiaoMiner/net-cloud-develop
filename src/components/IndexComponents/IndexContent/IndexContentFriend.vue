<template>
<div id="friend">
  <div class="friend-top"></div>
  <div class="friend-content">
    <div class="friend-content-wrap clearFix">
      <div class="friend-content-wrap-left">
        <!--左侧部分头部-->
          <div class="wrap-left-dynamic-header">
              <h3 class="dynamic-header-h3">动态</h3>
              <i class="dynamic-header-release pointer" title="发动态"></i>
              <i class="dynamic-header-hair-dynamics pointer" title="发布视频"></i>
          </div>
        <!--左侧部分内容-->
          <div class="wrap-left-dynamic-content">
            <ul class="dynamic-content-ul">
              <li class="dynamic-content-list clearFix" v-for="singleInfo in dynamicContent">
                <a class="dynamic-content-list-a" href="javascript:void(0)">
                  <img class="dynamic-content-list-img" src="" alt="图片">
                </a>
                <div class="dynamic-content-list-div">
                    <div class="dynamic-content-name">
                      <a class="dynamic-content-name-a" href="javascript: void(0)">{{singleInfo.userName}}</a>
                      <span class="dynamic-content-name-span">{{singleInfo.videoType}}</span>
                    </div>
                    <div class="dynamic-content-date">
                      <a class="dynamic-content-date-a" href="javascript:void(0)">{{singleInfo.releaseDate}}</a>
                    </div>
                    <div class="dynamic-content-description">
                      {{singleInfo.videoDescription}}
                    </div>
                    <div class="dynamic-content-video"></div>
                    <div class="dynamic-content-feel">
                      <a class="dynamic-content-feel-a" href="javascript: void(0)">
                        <i class="dynamic-content-feel-i"></i>
                        <span>({{singleInfo.fabulous}})</span>
                      </a>
                      <span class="dynamic-content-feel-span">|</span>
                      <a class="dynamic-content-feel-a" href="javascript: void(0)">
                        转发
                        <span>({{singleInfo.forward}})</span>
                      </a>
                      <span class="dynamic-content-feel-span">|</span>
                      <a class="dynamic-content-feel-a" href="javascript: void(0)">
                        评论
                      </a>
                    </div>
                </div>
              </li>
            </ul>
          </div>
      </div>
      <div class="friend-content-wrap-right"></div>
    </div>
  </div>
  <NetCloudMusicFooter/>
</div>
</template>

<script>
  import NetCloudMusicFooter from '../../commons/NetCloudMusicFooter'

  export default {
  name: 'IndexContentFriend',
  data(){
    return {
      dynamicContent: [],
      scrollTopValue: 0,
      flag: 1
    }
  },
  components: {
    NetCloudMusicFooter
  },
    created() {
    // document.documentElement.scrollTop = 0;
    },
  mounted(){
    var _this = this;
    _this.dynamicContent = [
      {
        userName: '舞蹈侦探',
        videoType: '发布视频',
        releaseDate: '最近',
        videoDescription: '这对菲律宾“网红兄妹”跳舞越来越帅啦！',
        fabulous: '6',
        forward: '6'
      },
      {
        userName: '舞蹈侦探',
        videoType: '发布视频',
        releaseDate: '最近',
        videoDescription: '这对菲律宾“网红兄妹”跳舞越来越帅啦！',
        fabulous: '6',
        forward: '6'
      },
      {
        userName: '舞蹈侦探',
        videoType: '发布视频',
        releaseDate: '最近',
        videoDescription: '这对菲律宾“网红兄妹”跳舞越来越帅啦！',
        fabulous: '6',
        forward: '6'
      },
      {
        userName: '舞蹈侦探',
        videoType: '发布视频',
        releaseDate: '最近',
        videoDescription: '这对菲律宾“网红兄妹”跳舞越来越帅啦！',
        fabulous: '6',
        forward: '6'
      },
      {
        userName: '舞蹈侦探',
        videoType: '发布视频',
        releaseDate: '最近',
        videoDescription: '这对菲律宾“网红兄妹”跳舞越来越帅啦！',
        fabulous: '6',
        forward: '6'
      }
    ]
    window.addEventListener('scroll',function(){
      // console.log('scroll');
      if(_this.flag){// 表示刷新
        document.documentElement.scrollTop = 0
      }
      _this.flag = 0;
      if(document.documentElement.scrollHeight - Math.ceil(document.documentElement.scrollTop) < 815){
          console.log('loading......');
          let newArray = [
            {
            userName: '舞蹈侦探',
            videoType: '发布视频',
            releaseDate: '最近',
            videoDescription: '这对菲律宾“网红兄妹”跳舞越来越帅啦！',
            fabulous: '6',
            forward: '6'
          },
            {
              userName: '舞蹈侦探',
              videoType: '发布视频',
              releaseDate: '最近',
              videoDescription: '这对菲律宾“网红兄妹”跳舞越来越帅啦！',
              fabulous: '6',
              forward: '6'
            },
            {
              userName: '舞蹈侦探',
              videoType: '发布视频',
              releaseDate: '最近',
              videoDescription: '这对菲律宾“网红兄妹”跳舞越来越帅啦！',
              fabulous: '6',
              forward: '6'
            },
            {
              userName: '舞蹈侦探',
              videoType: '发布视频',
              releaseDate: '最近',
              videoDescription: '这对菲律宾“网红兄妹”跳舞越来越帅啦！',
              fabulous: '6',
              forward: '6'
            },
            {
              userName: '舞蹈侦探',
              videoType: '发布视频',
              releaseDate: '最近',
              videoDescription: '这对菲律宾“网红兄妹”跳舞越来越帅啦！',
              fabulous: '6',
              forward: '6'
            }
            ];
        newArray.forEach(function(value){
          _this.dynamicContent.push(value);
        });
      }
    })
  }
}
</script>

<style scoped>
  #friend {}
  #friend .friend-top {
    height: 5px;
    background-color: #C20C0C;
  }
  #friend .friend-content {
    background: #f5f5f5;
  }
  .friend-content .friend-content-wrap {
    width: 980px;
    height: 100%;
    margin: 0 auto;
    border: 1px solid #d3d3d3;
    border-width: 0 1px;
  }
  .friend-content-wrap .friend-content-wrap-left {
    width: 620px;
    padding: 20px 30px;
    float: left;
    /*background: skyblue;*/
  }
  /*左侧部分头部处理*/
  .friend-content-wrap-left .wrap-left-dynamic-header {
    height: 40px;
    border-bottom: 2px solid #c20c0c;
  }
  .wrap-left-dynamic-header .dynamic-header-h3 {
    float: left;
    font-size: 24px;
    font-weight: normal;
  }
  .wrap-left-dynamic-header .dynamic-header-release {
    float: right;
    width: 84px;
    height: 24px;
    margin: 6px 0 0 10px;
    overflow: hidden;
    background: url('./../../../assets/images/frd_dyn_sprite.png') no-repeat -100px -452px;
  }
  .wrap-left-dynamic-header .dynamic-header-release:hover {
    background-position: -100px -480px;
  }
  .wrap-left-dynamic-header .dynamic-header-hair-dynamics {
    float: right;
    width: 71px;
    height: 24px;
    margin: 6px 0 0 10px;
    background: url('./../../../assets/images/frd_dyn_sprite.png') no-repeat 0 -452px;
  }
  .wrap-left-dynamic-header .dynamic-header-hair-dynamics:hover {
    background-position: 0px -480px;
  }
  /*左侧部分内容处理*/
  .friend-content-wrap-left .wrap-left-dynamic-content {
    /*position: relative;
    zoom: 1;
    text-shadow: none;*/
  }
  .wrap-left-dynamic-content .dynamic-content-list {
    padding: 20px 0;
    border-bottom: 1px solid #e8e8e9;
  }
  .dynamic-content-list .dynamic-content-list-a {
    float: left;
    display: block;
    width: 45px;
    height: 45px;
    background: red;
  }
  .dynamic-content-list .dynamic-content-list-div {
    float: right;
    width: 565px;
  }
  .dynamic-content-list-div .dynamic-content-name {}
  .dynamic-content-name .dynamic-content-name-a {
    color: #0c73c2;
    font-size: 14px;
  }
  .dynamic-content-name .dynamic-content-name-a:hover {
    text-decoration: underline;
  }
  .dynamic-content-name .dynamic-content-name-span{
    margin-left: 5px;
    color: #666;
    font-size: 14px;
  }
  .dynamic-content-list-div .dynamic-content-date{
    margin-top: 7px;
  }
  .dynamic-content-date .dynamic-content-date-a {
    font-size: 12px;
    color: #333;
  }
  .dynamic-content-date .dynamic-content-date-a:hover {
    text-decoration: underline;
  }
  .dynamic-content-list-div .dynamic-content-description {
    margin-top: 10px;
    line-height: 24px;
    font-size: 14px;
    word-break: break-word;
    color: #333;
  }
  .dynamic-content-list-div .dynamic-content-video {
    width: 338px;
    height: 189px;
    margin: 4px 0 5px;
    background: orange;
  }
  .dynamic-content-list-div .dynamic-content-feel {
    margin: 18px 0 -2px;
    text-align: right;
  }
  .dynamic-content-feel .dynamic-content-feel-a {
    color: #0c73c2;
    font-size: 12px;
  }
  .dynamic-content-feel .dynamic-content-feel-a:hover {
    text-decoration: underline;
  }
  .dynamic-content-feel .dynamic-content-feel-i {
    display: inline-block;
    width: 14px;
    height: 14px;
    background: url('./../../../assets/images/frd_dyn_sprite.png') 0 -20px no-repeat;
    margin: -1px 0 -1px 0;
  }
  .dynamic-content-feel .dynamic-content-feel-span {
    width: 2px;
    color: #c7c7c7;
    margin: 0 7px;
  }

  /*右侧部分处理*/
  .friend-content-wrap .friend-content-wrap-right {
    float: right;
    width: 296px;
    height: 100%;
    border-left:1px solid #d3d3d3;
  }
</style>
