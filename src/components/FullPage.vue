<template>
  <div class="fullpage-wrap">
    <!--swiper添加swiper-no-swiping类,禁用手动滑动功能-->
    <swiper :options="swiperOption" ref="mySwiper" :style="{height: client+'px'}">
      <!-- slides -->
      <!--第一张view-->
      <swiper-slide class="swiper-no-swiping fullpage-first-view fs">
          <div class="first-view-content">
            <h1 class="first-view-h1"></h1>
            <a class="first-view-now-join fs" href="javascript: void(0)">现在加入</a>
            <p><a class="first-view-des fs" href="javascript:void(0)">I'm Not Chinese Artist ></a></p>
          </div>
          <div class="first-view-btn clearFix">
            <a class="first-view-btn-a fvba-one" href="javascript: void(0)"></a>
            <a class="first-view-btn-a fvba-two" href="javascript: void(0)"></a>
            <a class="first-view-btn-a fvba-three" href="javascript: void(0)"></a>
          </div>
      </swiper-slide>
      <!--第二张view-->
      <swiper-slide class="swiper-no-swiping fullpage-two-view fs">
          <div class="second-view-content">
            <h2 class="second-view-h2 fs">自助式作品管理</h2>
            <ul class="second-view-ul clearFix">
              <li class="second-view-list">
                <i class="second-view-i svi-one"></i>
                <h3 class="second-view-h3 fs">绿色通道，快速发布</h3>
                <p class="second-view-p fs">专属上传通道，发布即上线,让您的作品第一时间和粉丝见面</p>
              </li>
              <li class="second-view-list">
                <i class="second-view-i svi-two"></i>
                <h3 class="second-view-h3 fs">透明、直观的数据报表</h3>
                <p class="second-view-p fs">每日更新作品数据、粉丝数据,帮助您更好的运营自己</p>
              </li>
              <li class="second-view-list">
                <i class="second-view-i svi-three"></i>
                <h3 class="second-view-h3 fs">简单易用的作品管理</h3>
                <p class="second-view-p fs">从封面、曲风到歌词编辑,强大又好用的作品管理</p>
              </li>
            </ul>
          </div>
      </swiper-slide>
      <!--第三张view-->
      <swiper-slide class="fullpage-three-view fs">
          <div class="three-view-content fs">
            <h2 class="three-view-h2">多维度曝光</h2>
            <p class="three-view-p">您安心做好音乐，剩下的交给我们</p>
            <ul class="three-view-banner">
              <swiper :options="swiperOptionWrap" ref="mySwiperWrap">
                <swiper-slide class="banner-view"  v-for="singleInfoOne in threeViewBannerInfo">
                  <div class="banner-view-content">
                    <h3 class="banner-view-h3">{{singleInfoOne.title}}</h3>
                    <p class="banner-view-p">{{singleInfoOne.date}}</p>
                    <div class="banner-view-mask"></div>
                    <img class="banner-view-img" :src="singleInfoOne.backgroundUrl" alt="图片">
                  </div>
                </swiper-slide>
                <!--<div class="swiper-pagination-wrap"  slot="pagination"></div>-->
              </swiper>
              <div class="swiper-scrollbar" style="top: 3px;height: 4px;"></div>
              <div class="swiper-button-prev-wrap" slot="button-prev"></div>
              <div class="swiper-button-next-wrap" slot="button-next"></div>
            </ul>
            <p class="three-view-one-p fs">
              从线上的专属主页、原创榜单、歌曲推荐，到线下的Live巡演，专辑制作、资金支持，
              <br/>
              我们倾尽全力为有实力的原创音乐人提供一系列推广扶持计划，只希望您可以更专注于做好音乐。
            </p>
          </div>
      </swiper-slide>
      <!--第四张view-->
      <swiper-slide class="swiper-no-swiping fullpage-four-view fs">
        <div class="four-view-content">
          <h2 class="four-view-h2">丰富的变现模式</h2>
          <p class="four-view-p">除了加入会员项目、售卖数字专辑外，您还可以通过开通赞赏、售卖周边获取额外收入</p>
          <ul class="four-view-ul">
            <li class="four-view-list">
              <i class="four-view-list-i fvli-one"></i>
              <p class="four-view-list-p">专辑累计销量227785张</p>
            </li>
            <li class="four-view-list">
              <i class="four-view-list-i fvli-two"></i>
              <p class="four-view-list-p">专辑累计销量303196张</p>
            </li>
            <li class="four-view-list">
              <i class="four-view-list-i fvli-three"></i>
              <p class="four-view-list-p">专辑累计销量127765张</p>
            </li>
          </ul>
        </div>
      </swiper-slide>
      <!--第五章view-->
      <swiper-slide class="swiper-no-swiping fullpage-five-view fs">
          <div class="five-view-content">
            <h2 class="five-view-h2">业内首创音乐人指数</h2>
            <p class="five-view-p">
              <span style="font-size: 54px; color: #787878;">“&nbsp;</span>音乐人指数是网易云音乐针对音乐人推出的一项综合指标，以直观的
              <br>
              分数形式体现音乐人在平台上的影响力，指数越高，享受的权益也越多 &nbsp;<span style="font-size: 54px; color: #787878;">”</span>
            </p>
            <a class="five-view-a" href="javascript: void(0)">查看指数对应的权益</a>
          </div>
      </swiper-slide>
      <!--第六章view-->
      <swiper-slide class="swiper-no-swiping fullpage-six-view fs">
        <div class="six-view-content">
          <h2 class="six-view-h2">只需三步轻松成为网易音乐人</h2>
          <p class="six-view-p">想要成为网易音乐人很简单，只要按照下面的介绍完成三个步骤的操作，我们承诺会在工作日24小时内完成审核！</p>
          <ul class="six-view-ul clearFix">
            <li class="six-view-list">
              <p class="six-view-list-p1">第一步</p>
              <p class="six-view-list-p2">阅读协议</p>
              <i class="six-view-list-i svli-one"></i>
              <p class="six-view-list-p3">由专业的法务团队提供合作协议并将其中关于版权的部分着重显示您关心的，我们也最为珍惜</p>
            </li>
            <li class="six-view-list">
              <p class="six-view-list-p1">第二步</p>
              <p class="six-view-list-p2">提交资料</p>
              <i class="six-view-list-i svli-two"></i>
              <p class="six-view-list-p3">提供您的基本信息以便验明真身，获得更好的服务我们不会将信息透露给任何第三方，我们也最为珍惜</p>
            </li>
            <li class="six-view-list">
              <p class="six-view-list-p1">第三步</p>
              <p class="six-view-list-p2">等待审核</p>
              <i class="six-view-list-i svli-three"></i>
              <p class="six-view-list-p3">承诺24小时内完成审核我们和您一样讨厌等待尤其是激动人心的时刻到来之前，我们也最为珍惜</p>
            </li>
          </ul>
        </div>
      </swiper-slide>
      <!--第七张view-->
      <swiper-slide class="swiper-no-swiping fullpage-seven-view fs">
        <div class="seven-view-content">
          <h2 class="seven-view-h2">我们在这里等您</h2>
          <p class="seven-view-p">入驻音乐人20000+ 上传作品数400000+</p>
          <ul class="seven-view-banner">
            <li class="seven-view-list clearFix" v-for="singleInfo in musicianInfo">
              <a class="seven-view-list-a" href="javascript:void(0)">
                <div class="seven-view-list-img">
                  <img class="seven-view-list-image" :src="singleInfo.musicianImage">
                  <div class="seven-view-list-mask">
                    <p class="seven-view-mask-p">{{singleInfo.musicianFans}}<br> {{singleInfo.musicianWorks}}</p>
                  </div>
                </div>
                <h3 class="seven-view-list-h3">{{singleInfo.musicianName}}</h3>
              </a>

            </li>

          </ul>
          <a class="seven-view-a" href="javascript:void(0)">现在加入</a>
        </div>
      </swiper-slide>

      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
    <!-- Optional controls -->
   <!-- <div class="swiper-button-prev" @click="prevButton()" slot="button-prev"></div>
    <div class="swiper-button-next" @click="nextButton()" slot="button-next"></div>-->
    <!--<div class="swiper-scrollbar"   slot="scrollbar"></div>-->
  </div>
</template>

<script>
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  export default {
    name: 'FullPage',
    data() {
      return {
        client: document.documentElement.clientHeight,
        swiperOption: {
          // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
          // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
          notNextTick: true,
          // swiper configs 所有的配置同swiper官方api配置
          autoplay: false,
          direction: 'vertical',
          // 指针变为小手
          grabCursor: false,
          loop: false,
          // 控制轮播图滑动的速度
          speed: 800,
          setWrapperSize: true,
          autoHeight: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          scrollbar: '.swiper-scrollbar',
          mousewheelControl: true,
          // 鼠标滚轮控制。
          mousewheel: true,
          observeParents: true,
          // if you need use plugins in the swiper, you can config in here like this
          // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
          debugger: true,
          // swiper callbacks
          // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
          onTransitionStart (swiper) {
            console.log(swiper)
          }
          // more Swiper configs and callbacks...
          // ...
        },
        // 嵌套轮播图的配置
        swiperOptionWrap: {
          // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
          // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
          notNextTick: true,
          // swiper configs 所有的配置同swiper官方api配置
          autoplay: false,
          direction: 'horizontal',
          // 指针变为小手
          grabCursor: false,
          loop: true,
          // 控制轮播图滑动的速度
          // speed: 800,
          setWrapperSize: true,
          autoHeight: true,
          /*pagination: {
            el: '.swiper-pagination-wrap',
            clickable: true
          },*/
          navigation: {
            nextEl: '.swiper-button-next-wrap',
            prevEl: '.swiper-button-prev-wrap'
          },
          scrollbar: {
            el: '.swiper-scrollbar',
            //滚动条自动隐藏
            hide: true,
            //滚动条可以拖动
            draggable: true,
            // 控制滚动条的长度
            dragSize: 210
          },
          mousewheelControl: true,
          // 鼠标滚轮控制。
          // mousewheel: true,
          observeParents: true,
          // false => 居左 true => 居中
          centeredSlides: false,
          // 可视范围内显示4个view
          slidesPerView: 4,
          // 滑一次,水平移动view的个数
          slidesPerGroup: 1,
          //每一个view的距离
          spaceBetween: 20,
          //切换的类型: coverflow=> 3d
          effect: 'coverflow',
          // 3d效果处理
          coverflowEffect: {
            rotate: 30,
            stretch: 50,
            depth: 80,
            modifier: 1,
            slideShadows : true
          },
          // if you need use plugins in the swiper, you can config in here like this
          // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
          debugger: true,
          // swiper callbacks
          // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
          onTransitionStart (swiper) {
            console.log(swiper)
          }
          // more Swiper configs and callbacks...
          // ...
        },
        //第七张view的音乐人信息
        musicianInfo: [],
        //第三张视图信息
        threeViewBannerInfo: []
      }
    },
    components: {
      swiper,
      swiperSlide
    },
    mounted(){
      //第七张view的音乐人信息
      this.musicianInfo = [
        {
          musicianImage: 'http://p1.music.126.net/1vMy219QNcZCNF_GOyVUxA==/109951163216437017.jpg?param=160y184',
          musicianFans: '粉丝: 29万',
          musicianWorks: '作品: 20首',
          musicianName: '买辣椒也用券'
        },
        {
          musicianImage: 'http://p1.music.126.net/E0naLXtRIBuB_f6RvlBscg==/109951162811539164.jpg?param=160y184',
          musicianFans: '粉丝: 69万',
          musicianWorks: '作品: 13首',
          musicianName: '宋冬野'
        },
        {
          musicianImage: 'http://p1.music.126.net/smTiMvyXTrRzFT56DG8-xQ==/109951162908080498.jpg?param=160y184',
          musicianFans: '粉丝: 21万',
          musicianWorks: '作品: 42首',
          musicianName: 'GALA'
        },
        {
          musicianImage: 'http://p1.music.126.net/5rzGVPKQ7b3RxEGUtcAGAw==/109951162931877842.jpg?param=160y184',
          musicianFans: '粉丝: 70万',
          musicianWorks: '作品: 25首',
          musicianName: '陈鸿宇'
        },
        {
          musicianImage: 'http://p1.music.126.net/4-QG0SbJBDutc39CC9kMXA==/2922501907254769.jpg?param=160y184',
          musicianFans: '粉丝: 35万',
          musicianWorks: '作品: 19首',
          musicianName: '马頔'
        },
        {
          musicianImage: 'http://p1.music.126.net/S1iHN1_FOGJciN2-QFF21A==/109951162820704351.jpg?param=160y184',
          musicianFans: '粉丝: 16万',
          musicianWorks: '作品: 24首',
          musicianName: 'Fine乐团'
        }
      ]
      //第三张view音乐信息
      this.threeViewBannerInfo = [
        {title: '赵雷《无法长大》销量破20万，创独立音乐全网新标杆', date: "2017-02", backgroundUrl: 'http://s1.music.126.net/download/other/zhaolei.jpg?param=260y160'},
        {title: '石头计划落地，向所有音乐人开通赞赏', date: "2017-02", backgroundUrl: 'http://s1.music.126.net/download/other/luodi.jpg?param=260y160'},
        {title: '发布《中国独立音乐人生存现状报告》', date: "2016-12", backgroundUrl: 'http://s1.music.126.net/download/other/duli.jpg?param=260y160'},
        {title: '李志《在每一条伤心的应天大街上》两天销售额破百万创纪录', date: "2016-11", backgroundUrl: 'http://s1.music.126.net/download/other/lizhi.jpg?param=260y160'},
        {title: '启动“石头计划” 拟一年2亿扶持独立音乐人', date: "2016-11", backgroundUrl: 'http://s1.music.126.net/download/other/shitoujihua.jpg?param=260y160'},
        {title: '陈粒《小梦大半》销售额破百万', date: "2016-08", backgroundUrl: 'http://s1.music.126.net/download/other/01.jpg?param=260y160'},
        {title: '启动理想音乐行走季，打造国内首部音乐公路电影', date: "2016-07", backgroundUrl: 'http://s1.music.126.net/download/other/07.jpg?param=260y160'},
        {title: '启动理想音乐人计划，携独立音乐人走进高校', date: "2015-10", backgroundUrl: 'http://s1.music.126.net/download/other/03.jpg?param=260y160'},
        {title: '投拍李志第一支MV —《山阴路的夏天》', date: "2014-09", backgroundUrl: 'http://s1.music.126.net/download/other/04.jpg?param=260y160'},
        {title: '与太平洋咖啡合作举办“原创音乐人咖啡之旅”', date: "2014-08", backgroundUrl: 'http://s1.music.126.net/download/other/05.jpg?param=260y160'},
        {title: '举办线下演出《 听见好时光 . 网易音乐人Live》', date: "2014-08", backgroundUrl: 'http://s1.music.126.net/download/other/06.jpg?param=260y160'},
      ]
    },
    methods: {

    },
  }
</script>

<style scoped>

  /*第一张view*/
  .fullpage-wrap .fullpage-first-view {
    background: url('./../assets/images/musician_first_view.jpg') #282828 no-repeat 50%;
    background-size: contain;
  }
  .fullpage-first-view .first-view-content {
    height: 480px;
  }
  .first-view-content .first-view-h1 {
    width: 100%;
    height: 100%;
    margin-top: 7%;
    background: url(http://p1.music.126.net/uqVB0u2spm_t0OUAdvXbCQ==/18493785580103375.jpg) no-repeat 50%;
    background-size: contain;
  }
  .first-view-content .first-view-now-join {
    display: block;
    width: 173px;
    height: 52px;
    line-height: 52px;
    text-align: center;
    margin: -200px auto 0;
    border: 2px solid #ea524e;
    color: #ea524e;
    font-size: 18px;
  }
  .first-view-content .first-view-des {
    display: block;
    width: 160px;
    color: #ea524e;
    font-size: 13px;
    margin: 10px auto;
  }
  .fullpage-first-view .first-view-btn {
    text-align: center;
  }
  .first-view-btn .first-view-btn-a {
    display: inline-block;
    width: 111px;
    height: 76px;
    margin: 0 77px;
  }
  .first-view-btn .fvba-one {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG8AAABMCAYAAABj/en4AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTYyOEM2MUQ4ODhCMTFFNkE3OUVEOTBCM0QxQ0QyN0QiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTYyOEM2MUU4ODhCMTFFNkE3OUVEOTBCM0QxQ0QyN0QiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFNjI4QzYxQjg4OEIxMUU2QTc5RUQ5MEIzRDFDRDI3RCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFNjI4QzYxQzg4OEIxMUU2QTc5RUQ5MEIzRDFDRDI3RCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PoMXFAAAAAleSURBVHja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) no-repeat;
  }
  .first-view-btn .fvba-one:hover {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG8AAABMCAYAAABj/en4AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTYyOEM2MjE4ODhCMTFFNkE3OUVEOTBCM0QxQ0QyN0QiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTYyOEM2MjI4ODhCMTFFNkE3OUVEOTBCM0QxQ0QyN0QiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFNjI4QzYxRjg4OEIxMUU2QTc5RUQ5MEIzRDFDRDI3RCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFNjI4QzYyMDg4OEIxMUU2QTc5RUQ5MEIzRDFDRDI3RCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pg5TsMEAAAjTSURBVHja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) no-repeat;
  }
  .first-view-btn .fvba-two {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG8AAABMCAYAAABj/en4AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzA2NERFQzI4ODkxMTFFNkE3OUVEOTBCM0QxQ0QyN0QiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzA2NERFQzM4ODkxMTFFNkE3OUVEOTBCM0QxQ0QyN0QiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFNjI4QzYyMzg4OEIxMUU2QTc5RUQ5MEIzRDFDRDI3RCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFNjI4QzYyNDg4OEIxMUU2QTc5RUQ5MEIzRDFDRDI3RCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqOSkjwAAAmmSURBVHja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) no-repeat;
  }
  .first-view-btn .fvba-two:hover {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG8AAABMCAYAAABj/en4AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzA2NERFQzY4ODkxMTFFNkE3OUVEOTBCM0QxQ0QyN0QiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzA2NERFQzc4ODkxMTFFNkE3OUVEOTBCM0QxQ0QyN0QiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDMDY0REVDNDg4OTExMUU2QTc5RUQ5MEIzRDFDRDI3RCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDMDY0REVDNTg4OTExMUU2QTc5RUQ5MEIzRDFDRDI3RCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PoobZEUAAAklSURBVHja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) no-repeat;
  }
  .first-view-btn .fvba-three {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG8AAABMCAYAAABj/en4AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDg0QzE5NEY4ODkyMTFFNkE3OUVEOTBCM0QxQ0QyN0QiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDg0QzE5NTA4ODkyMTFFNkE3OUVEOTBCM0QxQ0QyN0QiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDMDY0REVDQzg4OTExMUU2QTc5RUQ5MEIzRDFDRDI3RCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowODRDMTk0RTg4OTIxMUU2QTc5RUQ5MEIzRDFDRDI3RCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pu2enA0AAAjsSURBVHja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) no-repeat;
  }
  .first-view-btn .fvba-three:hover {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG8AAABMCAYAAABj/en4AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzA2NERFQ0E4ODkxMTFFNkE3OUVEOTBCM0QxQ0QyN0QiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzA2NERFQ0I4ODkxMTFFNkE3OUVEOTBCM0QxQ0QyN0QiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDMDY0REVDODg4OTExMUU2QTc5RUQ5MEIzRDFDRDI3RCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDMDY0REVDOTg4OTExMUU2QTc5RUQ5MEIzRDFDRDI3RCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PnVwYH0AAAjiSURBVHja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) no-repeat;
  }

  /*第二张view*/
  .fullpage-wrap .fullpage-two-view {
    background: url('./../assets/images/musician_second_view.jpg') #fefefe no-repeat 50% 50%;
    background-size: contain;
  }
  .fullpage-two-view .second-view-content {
    width: 1025px;
    height: 500px;
    text-align: center;
    margin: 9% auto;
  }
  .second-view-content .second-view-h2 {
    font-size: 28px;
    text-align: center;
    margin-bottom: 88px;
  }
  .second-view-content .second-view-h2:before {
    content: "";
    display: block;
    margin: 0 auto;
    position: relative;
    top: 56px;
    height: 2px;
    width: 100px;
    background: #f83934;
  }
  .second-view-content .second-view-ul .second-view-list {
    float: left;
    width: 311px;
    height: 367px;
    margin-left: 28px;
    background: url('./../assets/images/second_view_one.png') no-repeat;
  }
  .second-view-ul .second-view-i {
    display: block;
    width: 67px;
    height: 67px;
    margin: 76px auto 21px;
  }
  .second-view-ul .second-view-h3 {
    font-size: 18px;
    margin-bottom: 14px;
  }
  .second-view-ul .second-view-p {
    font-size: 16px;
    line-height: 24px;
    color: #999;
  }
  .second-view-ul .second-view-list .svi-one {
     background: url(data:image/png;base64,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) no-repeat;
   }
  .second-view-ul .second-view-list .svi-two {
       background: url(data:image/png;base64,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) no-repeat;
     }
  .second-view-ul .second-view-list .svi-three {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAABDCAYAAADHyrhzAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAAHMUlEQVR42u2cy1MUVxTGfwzDQ5TwkDQKIigaMApujLGoZJO47kUvk8o/kLKsrPKosqKFizxWqRjzD6QsK5te9NqskjKWceEDS7A0QgiiDfJUQAYhi3OaGcaZYejpnhmMX9VUc28Pd+739b33nHvuvV1CHuBaZgSoA2qBbcBWoBIoB6JACbACLAGLwALwDHgKTAOThu28CLueJSEKsAVoBt4E6oFIDsWtAJOAC/xr2M580YuhLaAZaFEBvPJXgFkl9FQ/c0grWDJsZ1n/N4q0liqkBW1DWlR1UlkTwDAwYtjOclGJ4VpmKdAK7AMqNHsJeKSfJ4btLOZQfjmwHdihn6jeeg7cBwaD6EY5i+Fa5k7gILBFs2aAB8hTC7yfq/DNwB7gDc1eAPoM2xktiBiuZVYB3ciY4InQb9jO46AFyFCHRqAzQZQx4KZhO3N5E8O1zF1AF9JcY0A/MGTYzkq+hEioSwnSRTuBMqR79hm2MxyqGDrIHQTaNOsR8iSe51uEFHWrQFrqDs0aBG5vZIDNWgzXMqPAEaRbLAN3DNv5u9AipKjnXuAAYsrHgGuG7SwFJoZrmWXAMcRpeg78ZdjOZKGJZ6hvHfAOYtmmgCuG7cRyFkOFeBex93Na8LNCE86i3luRB1iVrSCRdQqMIF2jDpgHLm8GIQC0npeRB1gLHFE+/sRABssGxFP8Myw3OERB5oErWv8G5bNxMdSZakMGy6ubpUWkEOQZcFV5tCmv7MVQh+qwJvuKebDMUpBJoE+Th5VfdmKoEGXAqGE7Q4UmE5AgQ8Co8jqc6jsvieFaZjPSv2LArUKTCBi3lFeDetHpxdBJ0Nua7C8GzzJIKJ9+TR5QvqnFQAbMSiS69Ep0jxQYUn6VxKcVQILTpTb4Q/3S1XzOPrOBRs6+BD5GgkfDwAXg242afJ3tHkWm/r9585fEltGkQswUoRBVwCXga6AdiYa1a/pSOuuQDspvRvk2e/mJYuzWa9FNvpAW0VNqNFJ75iwNF36l9sxZSo1GgB7gcx9lPtBri5cRhdUmWI/EAh76rbFrmb8D74WlSPWJk5QdPARAWVc31Sc/Y+rUVwBfAGc2WNwI4pHWu5a5xbCdea9lNCPjx6N8hOT9Itq+b026bP9b3p8VGy1LeT5S3s0QD6x6obucYoiG7bwfhgiuZd4D2mN3ByjvjvtLsQHPSjLos+hRYJfyvxdRK1KPhOCfhEEmAFwEmD1/jsUb11lZWGDxxnVmfvzBu/+Lz3LHlXe9a5mRKDI9jwBT2QRACoRvgA+Wx8d6pntPJ9+7DHznp1DDdpZcy5xGpvh1EaBG700VmnGGSs8Bx4FeZJ1kUa+9wHG/0XDFtF5ro8TD7EU9RVfH6rR+gsRTvVZHkbBYYmZOCNJTzBM83lUR4mYp55YRtKeYJ3hdrMJb7AWZ2uaKMDzFsOEtI0QTxchqbWEdfATqKXZ1U1JZueopKj4pNPNMYkQ9MQJa2m+BjJ7iXtcyw1iC/MOvw6fmFbRlLMHqFD5XDAPE7g6syUzwFMNCLgvoXs9YjqoYXgvxvYdCcRE4NXv+HNWfnqCso5PYQD+zP//k3e81bCdo05grPDFeeGKABEpzFSMUTzFPYixGkLVTkE1nOSFkTzEseOZ+IYrY2e3I/ik3AEHC8hTDwja9zkWQjWcQQMvYpPDEmI0Sn6DVFrpWmRCim+9NVKcjyHbEZaAmwcwUFcJy85VvjfKfiKizNYHY6oZCE0+DsNz8BuU9YdjOsudojel1p78yQ0dYbr7HdwziNnYE2S23w7XMUr9B4bCj4xnc/D0+6lqKbIZbUf6ybqID0ISK0xQWmVyRwc33sybcpHwnvAE4ccD8B/E39qBzjI0ixOj4WTK7+d/7KNZrTatcE8V4iHSVGtcyG4tsiTFQN1/XWmuQfWojXv7qTFWtyj1NdujO26JAkG6+8urQ5P3E0EWyXzEM7FfVWvG/OBOGIEG5+a3KbwEZGlaxJoahVsTb+9SpRxteGSifTk3eSbaaLwV09JjCGDKl7y40gYDRrbzGDdv5N/lmuujWTSRAvNO1zNZCMwgCrmXuRpysGHAj1XdSiqEDkvcPh3Qv9qaF1r9Lk2nPo6SNe2p3GdTvHNW92JsOWu+jymPQsJ20+0/WCwLfRlaqy4FjOo3eNND6HtP6jyuftMgohtrga0jMowroKdJVsVRCVCEzWu9UwbX1lkNenzfZqBj6A69PIiX9UAQ4hHhxUNxn1IaQQwDBn1FL+uEWFaVYTi/uRlpD/k4vJlViK2K7vc1x08BAAc61dhAP6o4Bt/yejQnixHMTsp+yUrNmkI21D0M88dwE7GXtiefbmXyIvIiRUME2JGL9/z0Ln1Tp9d6SMIHsEJpFVvJeIG9JWFJrFQVKEd+gGlnYqmczvSUhjTBBvz9jCnjMZnl/RgZhEt+sUo08+fXerDKHtKBpZI9qEDuLMuI/jBjx+7j5QbUAAAAASUVORK5CYII=) no-repeat;
  }

  /*第三张view*/
  .fullpage-wrap .fullpage-three-view {
    background: url('./../assets/images/musician_third_view.jpg') #2c2c2c no-repeat top;
  }
  .fullpage-three-view .three-view-content {
    height: 460px;
    text-align: center;
    margin-top: 9%;
  }
  .three-view-content .three-view-h2 {
    font-size: 28px;
    color: #fff;
    text-align: center;
  }
  .three-view-content .three-view-h2:after {
    content: '';
    display: block;
    margin: 0 auto;
    position: relative;
    top: 24px;
    height: 2px;
    width: 100px;
    background: #f83934;
  }
  .three-view-content .three-view-p {
    margin-top: 50px;
    font-size: 18px;
    text-align: center;
    color: #aaa;
  }
  .three-view-content .three-view-banner {
    position: relative;
    width: 1206px;
    height: 160px;
    margin: 94px auto 0;
  }
  .three-view-banner .swiper-button-prev-wrap {
    position: absolute;
    top: 74px;
    left: -58px;
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23aaa'%2F%3E%3C%2Fsvg%3E");
  }
  .three-view-banner .swiper-button-next-wrap {
    position: absolute;
    top: 74px;
    right: -58px;
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23aaa'%2F%3E%3C%2Fsvg%3E");
   }
  .three-view-banner .swiper-button-prev-wrap:hover {
    position: absolute;
    top: 74px;
    left: -58px;
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23fff'%2F%3E%3C%2Fsvg%3E");
  }
  .three-view-banner .swiper-button-next-wrap:hover {
    position: absolute;
    top: 74px;
    right: -58px;
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23fff'%2F%3E%3C%2Fsvg%3E");
  }
  .three-view-banner .banner-view .banner-view-content{
      position: relative;
      margin-right: 20px;
      width: 260px;
      height: 160px;
      color: #fff;
      text-shadow: 1px 1px 1px rgba(0,0,0,.4);
    }
  .banner-view-content .banner-view-h3 {
      position: absolute;
      padding: 0 40px;
      top: 47px;
      z-index: 11;
      vertical-align: middle;
      font-size: 16px;
      text-shadow: 1px 1px 1px rgba(0,0,0,.4);
      color: #fff;
      font-weight: normal;
    }
  .banner-view-content .banner-view-p {
      position: absolute;
      z-index: 11;
      bottom: 10px;
      left: 50%;
      margin-left: -27px;
      color: #bbb;
      font-size: 12px;
      text-shadow: 1px 1px 1px rgba(0,0,0,.4);
    }
  .banner-view-content .banner-view-mask {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 1;
      color: #fff;
      text-shadow: 1px 1px 1px rgba(0,0,0,.4);
      background: #000;
      opacity: .4;
    }
  .three-view-content .three-view-one-p {
    margin-top: 47px;
    line-height: 28px;
    font-size: 16px;
    color: #ccc;
  }

  /*第四张view*/
  .fullpage-wrap .fullpage-four-view {
    background: url('./../assets/images/musician_four_view.jpg') #fff no-repeat 50% 50%;
    background-size: contain;
  }
  .fullpage-four-view .four-view-content {
    height: 510px;
    margin-top: 9%;
    text-align: center;

  }
  .four-view-content .four-view-h2 {
    font-size: 28px;
    text-align: center;
  }
  .four-view-content .four-view-h2:after {
    content: "";
    display: block;
    margin: 0 auto;
    position: relative;
    top: 24px;
    height: 2px;
    width: 100px;
    background: #f83934;
  }
  .four-view-content .four-view-p {
    margin-top: 50px;
    font-size: 18px;
    text-align: center;
    color: #888;
  }
  .four-view-content .four-view-ul {
    width: 1014px;
    margin: 55px auto 0;
  }
  .four-view-content .four-view-list {
    width: 270px;
    float: left;
    margin: 0 34px;
  }
  .four-view-list .four-view-list-i {
    display: block;
    width: 270px;
    height: 315px;
    margin-top: 25px;
    background-position: 0 0;
  }
  .four-view-list .fvli-one {
    background: url('http://p1.music.126.net/VgEPOkSv9odw8EjJIjs8VA==/19041342369925821.jpg') no-repeat;
  }
  .four-view-list .fvli-one:hover {
    background-position: -270px 0;
  }
  .four-view-list .fvli-two {
    background: url('http://p1.music.126.net/xE_vm4l7Et7G_NyegbI0wg==/19041342369925823.jpg') no-repeat;
  }
  .four-view-list .fvli-two:hover {
    background-position: -270px 0;
  }
  .four-view-list .four-view-list-p {
    font-size: 16px;
    margin-top: 25px;
  }
  .four-view-list .fvli-three {
    background: url('http://p1.music.126.net/0mkzk1iyA4eYFAr5e7y0pg==/19041342369925822.jpg') no-repeat;
  }
  .four-view-list .fvli-three:hover {
    background-position: -270px 0;
  }
  /*第五张view*/
  .fullpage-wrap .fullpage-five-view {
    background: url('./../assets/images/musician_five_view.jpg') #282828 no-repeat 50% 50%;
    background-size: contain;
  }
  .fullpage-five-view .five-view-content {
    height: 450px;
    width: 840px;
    margin: 9% auto;
  }
  .five-view-content .five-view-h2 {
    font-size: 24px;
    color: #fff;
    text-align: center;
  }
  .five-view-content .five-view-h2:after {
    content: "";
    display: block;
    margin: 0 auto;
    position: relative;
    top: 24px;
    height: 2px;
    width: 100px;
    background: #f83934;
  }
  .five-view-content .five-view-p {
    font-size: 24px;
    line-height: 48px;
    margin: 120px 0 66px;
    color: #fff;
    text-align: center;
  }
  .five-view-content .five-view-a {
    display: block;
    width: 237px;
    height: 56px;
    margin-left: 36%;
    color: #b64845;
    font-size: 18px;
    border: 2px solid #b64845;
    line-height: 56px;
    text-align: center;
  }
  /*第六张view*/
  .fullpage-wrap .fullpage-six-view {
    background: url('./../assets/images/musician_six_view.jpg') #f8f8f8 no-repeat bottom;
  }
  .fullpage-six-view .six-view-content {
    width: 1100px;
    height: 485px;
    margin: 9% auto;
  }
  .six-view-content .six-view-h2 {
    text-align: center;
    font-size: 28px;
  }
  .six-view-content .six-view-h2:after {
    content: "";
    display: block;
    margin: 0 auto;
    position: relative;
    top: 24px;
    height: 2px;
    width: 100px;
    background: #f83934;
  }
  .six-view-content .six-view-p {
    font-size: 18px;
    text-align: center;
    margin-bottom: 40px;
    margin-top: 50px;
    color: #333;
    opacity: .6;
  }
  .six-view-content .six-view-ul {
    width: 1100px;
  }
  .six-view-ul .six-view-list {
    float: left;
    margin-left: 80px;
    width: 280px;
    height: 350px;
    background: #fff;
    background: hsla(0,0%,100%,.9);
  }
  .six-view-ul .six-view-list-i{
    display: block;
    width: 100px;
    height: 115px;
    margin: 32px auto 20px;
  }
  .six-view-ul .svli-one {
    background: url(data:image/png;base64,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) no-repeat;
  }
  .six-view-ul .svli-two {
    background: url(data:image/png;base64,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) no-repeat;
  }
  .six-view-ul .svli-three {
    background: url(data:image/png;base64,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) no-repeat;
  }
  .six-view-ul .six-view-list .six-view-list-p1 {
    text-align: center;
    line-height: 24px;
    margin: 24px 0 14px;
    font-size: 18px;
    color: #999;
  }
  .six-view-ul .six-view-list .six-view-list-p2 {
    text-align: center;
    line-height: 24px;
    font-size: 24px;
    color: #333;
  }
  .six-view-ul .six-view-list .six-view-list-p3 {
    text-align: center;
    line-height: 24px;
    padding: 0 15px;
    font-size: 14px;
    color: #999;
    font-family: simsun,\5b8b\4f53;
  }
  /*第七张view*/
  .fullpage-wrap .fullpage-seven-view {
    background: url('./../assets/images/musician_seven_view.jpg') #292928 no-repeat 50% 50%;
    background-size: contain;
  }
  .fullpage-seven-view .seven-view-content {
    width: 1200px;
    height: 570px;
    margin: 9% auto;
  }
  .seven-view-content .seven-view-h2 {
    text-align: center;
    font-size: 28px;
    color: #fff
  }
  .seven-view-content .seven-view-h2:after {
    content: "";
    display: block;
    margin: 0 auto;
    position: relative;
    top: 20px;
    height: 2px;
    width: 100px;
    background: #f83934;
  }
  .seven-view-content .seven-view-p {
    text-align: center;
    margin-top: 50px;
    margin-bottom: 55px;
    font-size: 18px;
    color: #ccc;
  }
  .seven-view-content .seven-view-banner {
    width: 1200px;
    height: 210px;
  }
  .seven-view-content .seven-view-a {
    display: block;
    width: 173px;
    height: 52px;
    line-height: 52px;
    margin: 47px auto 0;
    text-align: center;
    border: 2px solid #ea524e;
    font-size: 18px;
    color: #ea524e;
  }
  .seven-view-banner .seven-view-list {
      float: left;
      position: relative;
      width: 160px;
      margin-left: 36px;
      text-align: center;
    }
  .seven-view-list  .seven-view-list-a:hover .seven-view-list-mask {
    display: block;
  }
  .seven-view-list .seven-view-list-img {
      position: relative;
      width: 160px;
      height: 184px;
      -webkit-mask: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAAC4CAYAAABkSufbAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDhCRkQ3QTQ4OTMxMTFFNkE3OUVEOTBCM0QxQ0QyN0QiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDhCRkQ3QTU4OTMxMTFFNkE3OUVEOTBCM0QxQ0QyN0QiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpEOEJGRDdBMjg5MzExMUU2QTc5RUQ5MEIzRDFDRDI3RCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpEOEJGRDdBMzg5MzExMUU2QTc5RUQ5MEIzRDFDRDI3RCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv+A7M8AAAcTSURBVHja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) no-repeat;
    }
  .seven-view-list-img .seven-view-list-image {
      background: #888;
      width: 160px;
      height: 184px;
      -webkit-filter: grayscale(1);
    }
  .seven-view-list-img .seven-view-list-mask {
      display: none;
      position: absolute;
      width: 160px;
      height: 184px;
      top: -69px;
      left: 0;
      margin-top: 69px;
      font-size: 16px;
      line-height: 24px;
      text-align: center;
      color: #ea524e;
      z-index: 10;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAAC4CAYAAABkSufbAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MEM2Rjg4QjM4OTQ2MTFFNkE3OUVEOTBCM0QxQ0QyN0QiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MEM2Rjg4QjQ4OTQ2MTFFNkE3OUVEOTBCM0QxQ0QyN0QiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpEOEJGRDdBNjg5MzExMUU2QTc5RUQ5MEIzRDFDRDI3RCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowQzZGODhCMjg5NDYxMUU2QTc5RUQ5MEIzRDFDRDI3RCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PtyGGvoAABAUSURBVHja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);
    }
  .seven-view-list-img .seven-view-list-mask:after {
      content: "";
      position: absolute;
      top: -58px;
      left: -24px;
      right: -24px;
      bottom: -58px;
      display: block;
      background: url('./../assets/images/seven_view_img.png') no-repeat;
    }
  .seven-view-list-mask .seven-view-mask-p {
    margin-top: 64px;
  }
  .seven-view-list .seven-view-list-h3 {
      position: relative;
      z-index: 1;
      font-size: 16px;
      color: #fff;
      margin-top: 10px;
    }
</style>
