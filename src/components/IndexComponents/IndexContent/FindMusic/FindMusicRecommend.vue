<template>
  <div class="root-element">
    <!--内容部分-->
    <div class="find-music-content">
      <!--内容-上部分-->
      <div class="find-music-content-top">
        <div class="find-music-wrap">
          <SowingMap @sowingPrevAndNext="toggleMusicContentBg"></SowingMap>
          <div class="find-music-download">
            <a href="javascript;">下载客户端</a>
            <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
          </div>
        </div>
      </div>
      <!--内容-中间部分-->
      <div class="find-music-content-middle">
        <div class="find-music-wrap">
          <!--左侧部分-->
          <div class="wrap-middle-left">
            <div class="wrap-middle-left-wrap">
              <!--热门推荐-->
              <div class="hot-recommendation-header">
                <i class="record-img"></i>
                <a href="javascript:void(0)">热门推荐</a>
                <div class="hot-recommendation-music-type clearFix">
                  <a href="javascript: void(0)" class="pointer">华语</a>
                  <span class="line">|</span>
                  <a href="javascript: void(0)" class="pointer">流行</a>
                  <span class="line">|</span>
                  <a href="javascript: void(0)" class="pointer">摇滚</a>
                  <span class="line">|</span>
                  <a href="javascript: void(0)" class="pointer">民谣</a>
                  <span class="line">|</span>
                  <a href="javascript: void(0)" class="pointer">电子</a>
                </div>
                <div class="hot-recommendation-more clearFix">
                  <a href="javascript: void(0)" class="pointer">更多</a>
                  <i class="hot-recommendation-arrow"></i>
                </div>
              </div>
              <div class="hot-recommendation-content clearFix">
                <ul>
                  <li v-for="singleInfo in hotRecommendationData">
                    <div class="hot-img">
                      <img :src="singleInfo.img" alt="图片">
                      <a href="javascript: void(0)" class="pointer hot-link" :title="singleInfo.imgDes"></a>
                    </div>
                    <div class="playback">
                      <a href="javascript: void(0)"></a>
                      <span class="headset"></span>
                      <span style="font-size: 12px; color: #ccc">{{singleInfo.playbackDes}}</span>
                    </div>
                    <a href="javascript: void(0)" class="hot-description" :title="singleInfo.imgDes">{{singleInfo.imgDes}}</a>
                  </li>
                </ul>
              </div>
              <!--个性化推荐-->
              <div class="individualization-recommend-header">
                <i class="record-img"></i>
                <a href="javascript:void(0)">个性化推荐</a>
              </div>
              <div class="individualization-recommend-content clearFix">
                <div>
                  <ul>
                    <li>
                      <div class="individualization-img-first">
                        <span class="individualization-week">{{individualizationRecommendData[0].week}}</span>
                        <span class="individualization-day">{{individualizationRecommendData[0].day}}</span>
                        <span class="day-icon"></span>
                        <a href="javascript: void(0);" class="individualization-img-link pointer"
                           :title="individualizationRecommendData[0].imgDes"></a>
                      </div>
                      <a href="javascript:void (0);" class="individualization-img-des">{{individualizationRecommendData[0].imgDes}}</a>
                      <p>{{individualizationRecommendData[0].personalTasteDes}}</p>
                    </li>
                    <li v-for="(singleInfo, index) in individualizationRecommendData" v-if="index > 0">
                      <div class="individualization-img">
                        <a href="javascript: void(0);" class="pointer individualization-link"
                           :title="singleInfo.personalTasteDes"></a>
                        <img :src="singleInfo.img" alt="图片">
                      </div>
                      <div class="playback">
                        <i class="headset"></i>
                        <span style="font-size: 12px; color: #ccc">{{singleInfo.playbackDes}}</span>
                        <a href="javascript:void(0)"></a>
                      </div>
                      <a href="javascript:void (0);" class="individualization-description-one"
                         :title="singleInfo.imgDes">{{singleInfo.imgDes}}</a>
                      <a href="javascript:void (0);" class="individualization-description-two"
                         :title="singleInfo.personalTasteDes">{{singleInfo.personalTasteDes}}</a>
                      <p></p>
                    </li>

                  </ul>
                </div>
              </div>
              <!--新碟上架-->
              <div class="new-plate-header">
                <i class="record-img"></i>
                <a href="javascript:void(0)">新碟上架</a>
                <div class="new-plate-more clearFix">
                  <a href="javascript: void(0)" class="pointer">更多</a>
                  <i class="new-plate-arrow"></i>
                </div>
              </div>
              <div class="new-plate-content">
                <div class="new-plate-sowing clearFix"  >
                  <a href="javascript: void (0)" class="sowing-left" @click="leftSowing()"></a>
                    <div class="new-plate-sowing-list">
                      <div class="new-plate-sowing-wrap" v-bind:class="{PrevToTwo: sowingPrevTwo,PrevToOne: sowingPrevOne,nextToTwo: sowingNextTwo,nextToThree: sowingNextThree}">
                        <ul class="clearFix">
                          <li v-for="singleInfoOne in newPlateData[0]">
                            <div class="new-plate-img">
                              <img :src="singleInfoOne.img" alt="图片">
                              <a href="javascript: void(0)" :title="singleInfoOne.imgDes" classs="pointer"></a>
                            </div>
                            <i class="new-plate-play-icon pointer" title="播放"></i>
                            <a href="javascript: void(0)" :title="singleInfoOne.imgDes" class="pointer">{{singleInfoOne.imgDes}}</a>
                            <span :title="singleInfoOne.singerName" class="pointer">{{singleInfoOne.singerName}}</span>
                          </li>
                        </ul>
                        <ul class="clearFix">
                          <li v-for="singleInfoTwo in newPlateData[1]">
                            <div class="new-plate-img">
                              <img :src="singleInfoTwo.img" alt="图片">
                              <a href="javascript: void(0)" :title="singleInfoTwo.imgDes" class="pointer"></a>
                            </div>
                            <i class="new-plate-play-icon pointer" title="播放"></i>
                            <a href="javascript: void(0)" :title="singleInfoTwo.imgDes" class="pointer">{{singleInfoTwo.imgDes}}</a>
                            <span :title="singleInfoTwo.singerName" class="pointer">{{singleInfoTwo.singerName}}</span>
                          </li>
                        </ul>
                        <ul class="clearFix">
                          <li v-for="singleInfoOne in newPlateData[0]">
                            <div class="new-plate-img">
                              <img :src="singleInfoOne.img" alt="图片">
                              <a href="javascript: void(0)" :title="singleInfoOne.imgDes" classs="pointer"></a>
                            </div>
                            <i class="new-plate-play-icon pointer" title="播放"></i>
                            <a href="javascript: void(0)" :title="singleInfoOne.imgDes" class="pointer">{{singleInfoOne.imgDes}}</a>
                            <span :title="singleInfoOne.singerName" class="pointer">{{singleInfoOne.singerName}}</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                  <a href="javascript: void(0)" class="sowing-right" @click="rightSowing()"></a>
                </div>
              </div>
              <!--榜单-->
              <div class="billboard-header">
                <i class="record-img"></i>
                <a href="javascript:void(0)">榜单</a>
                <div class="billboard-more clearFix">
                  <a href="javascript: void(0)" class="pointer">更多</a>
                  <i class="billboard-arrow"></i>
                </div>
              </div>
              <div class="billboard-content clearFix">
                <div class="billboard-list" v-for="singleInfo in billboardListData">
                  <div class="billboard-list-header">
                    <div class="billboard-play-list-icon">
                      <img :src="singleInfo.img" width="80" alt="图片">
                      <a href="javascript: void(0)" :title="singleInfo.title"></a>
                    </div>
                    <div class="billboard-title clearFix">
                      <h3 class="pointer" style="font-weight: bold" :title="singleInfo.title">{{singleInfo.title}}</h3>
                      <i class="title-play-icon pointer"></i>
                      <i class="title-add-icon pointer"></i>
                    </div>
                  </div>
                  <div class="billboard-play-list">
                    <ul>
                      <li v-for="singleMusicInfo in singleInfo.musicList">
                        <span class="music-number">{{singleMusicInfo.id}}</span>
                        <a href="javascript:void(0);" :title="singleMusicInfo.name" class="play-list-music-name">{{singleMusicInfo.name}}</a>
                      </li>
                      <li><a class="select-all" href="javascript: void(0)">查看全部>></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="wrap-middle-left"></div>
          </div>
          <!--右侧部分-->
          <div class="wrap-middle-right">
              <div class="middle-right-sign-in">
                <div class="sin-in-top clearFix">
                  <div class="header-img-link">
                    <img src="http://p1.music.126.net/Xw6eKK7XwcMr4yzORH_zzA==/109951162842383781.jpg?param=80y80" alt="图片">
                    <a href="javascript:void(0)" class="pointer"></a>
                  </div>
                  <div class="name-grade-sign">
                      <a class="name pointer" href="javascript: void(0)">NetCloudMiner</a>
                      <a href="javascript:void(0)" class="grade pointer">
                      <span class="grade-number">6</span>
                      <i></i>
                      </a>
                      <a href="javascript:void(0)" class="pointer sign">签到</a>
                  </div>
                </div>
                <div class="dynamic-fans-follow">
                  <ul class="clearFix">
                    <li>
                      <a href="javascript: void(0)">
                        <span class="show-number">999</span>
                        <span>动态</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0)">
                        <span class="show-number">999</span>
                        <span>关注</span>
                      </a>
                    </li>
                    <li class="last">
                      <a href="javascript: void(0)">
                        <span class="show-number">999</span>
                        <span>粉丝</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="live-singer-part">
                <div class="live-singer-wrap">
                  <div class="live-singer-top">
                    <h3>入驻歌手</h3>
                    <span>查看全部>></span>
                  </div>
                  <div class="live-singer-info">
                    <ul class="clearFix">
                      <li v-for="singleInfo in liveSingerData">
                        <a href="javascript:void(0)">
                          <img :src="singleInfo.img" alt="图片">
                          <div class="singer-info">
                            <h3>{{singleInfo.singerName}}</h3>
                            <span :title="singleInfo.singerIntro">{{singleInfo.singerIntro}}</span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <a class="live-singer-bottom" href="javascript:void(0)">申请成为网易音乐人</a>
                </div>
              </div>
              <div class="popular-anchor-part">
                <div class="popular-anchor-wrap">
                  <h3>热门主播</h3>
                  <div class="popular-anchor-info">
                      <ul class="clearFix">
                        <li v-for="singleInfo in popularAnchorData">
                          <div class="anchor-header">
                            <img :src="singleInfo.img" alt="图片">
                            <a href="javascript:void(0)"></a>
                          </div>
                            <div class="anchor-info">
                              <div>
                                <a href="javascript:void (0)">{{singleInfo.name}}</a>
                                <i class="v-icon"></i>
                              </div>
                              <p :title="singleInfo.anchorInfo">{{singleInfo.anchorInfo}}</p>
                            </div>
                        </li>
                      </ul>
                  </div>
                </div>

              </div>
          </div>
        </div>
      </div>
    </div>
    <!--尾部-->
    <a href="javascript: void(0)" v-back-top class="callback-top" :class="{scrollButton: isShowScrollButton}" @click="callbackTop()"></a>
    <NetCloudMusicFooter/>
  </div>

</template>

<script>
  import SowingMap from '../../../SowingMap'
  import NetCloudMusicFooter from '../../../commons/NetCloudMusicFooter'
  import store from '../../../../vuex/store'
  export default {
    name: 'FindMusicRecommend',
    data() {
      return {
        store,
        hotRecommendationData:[],
        individualizationRecommendData: [],
        billboardListData: [],
        liveSingerData: [],
        popularAnchorData: [],
        newPlateData: [],
        sowingNextTwo: false,
        sowingNextThree: false,
        sowingPrevTwo: false,
        sowingPrevOne: false,
        sowingIndex: 1,
        isShowScrollButton: false
      }
    },
    components: {
      SowingMap,
      NetCloudMusicFooter
    },
    created() {

    },
    mounted() {
      /* 热门推荐数据 */
      this.hotRecommendationData = [
        {img:'http://p1.music.126.net/cuC7puVR4nCPS3OO3KiB0A==/18601537720899888.jpg?param=140y140', imgDes:'我只想做个被宠的小盆友', playbackDes:'37万'},
        {img:'http://p1.music.126.net/4XAnpr6ge3IIn05HHK0BSQ==/109951163325743996.jpg?param=140y140', imgDes:'华语新声代 | 遗世独立 别具新格', playbackDes:'7.7万'},
        {img:'http://p1.music.126.net/Nw94dOYbDmjhuIevGiSdCA==/1421668540881897.jpg?param=140y140', imgDes:'此歌单有毒、打开需谨慎（电音）', playbackDes:'129万'},
        {img:'http://p1.music.126.net/mP94NtkN2_mDUWccEo5jLg==/19058934556465483.jpg?param=140y140', imgDes:'有种射手叫做ADC', playbackDes:'10.5万'},
        {img:'http://p1.music.126.net/1IHWBO2vOFf9dDUxPITijQ==/109951163177239665.jpg?param=140y140', imgDes:'咖啡厅常放的小清新', playbackDes:'62.3万'},
        {img:'http://p1.music.126.net/XnxcKxrzKsxISp8aMz-0Pw==/109951163327010410.jpg?param=140y140', imgDes:'养你一辈子', playbackDes:'8558'},
        {img:'http://p1.music.126.net/StS-_Ua-D6ZGTFs7GYm0dQ==/109951163248814836.jpg?param=140y140', imgDes:'【China国风电音II】之二胡与笛子的双重奏', playbackDes:'14万'},
        {img:'http://p1.music.126.net/XzKvWKJlORJodjL-cAca_A==/109951163324927363.jpg?param=140y140', imgDes:'空心-丸子', playbackDes:'10822'}
      ]
      /* 个性化推荐数据 */
      this.individualizationRecommendData = [
        {
          imgDes: '每日歌曲推荐',
          personalTasteDes: '根据你的口味生成，每天6:00更新',
          week: this.currentWeek(),
          day: this.currentDay()
        },
        {
          img: 'http://p1.music.126.net/ICv1ZqD39lvvS0CdhHl1EA==/109951163320645123.jpg?param=140y140',
          imgDes: 'Space Club/蹦迪必备',
          playbackDes: '104.4万',
          personalTasteDes: '根据你喜欢的单曲《Beautiful Now》推荐'
        },
        {
          img: 'http://p1.music.126.net/OyKbCF136u4_U7A3Ctxc6A==/18525671418486772.jpg?param=140y140',
          imgDes: '转瞬的时间 你说了再见',
          playbackDes: '26.7万',
          personalTasteDes: '根据你喜欢的单曲《山外小楼夜听雨》推荐'
        },
        {
          img: 'http://p1.music.126.net/hRtKO6RRcV_dhtSsonpsQA==/109951163060924836.jpg?param=140y140',
          imgDes: '別愛了 不會是你男友',
          playbackDes: '449.5万',
          personalTasteDes: '根据你喜欢的单曲《全部都是你》推荐'
        }
      ]
      /* 榜单数据 */
      this.billboardListData = [
        {
          img: 'http://p3.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=100y100', title: "云音乐飙升榜", musicList: [
            {id: 1, name: '童话镇(Live)'},
            {id: 2, name: '这个人(Live)'},
            {id: 3, name: 'Like That'},
            {id: 4, name: '大城市'},
            {id: 5, name: '谁(Live)'},
            {id: 6, name: '给陌生你的听'},
            {id: 7, name: '自然而然(Live)'},
            {id: 8, name: '养你'},
            {id: 9, name: '同类'},
            {id: 10, name: '与你常在'}
          ]
        },
        {
          img: 'http://p4.music.126.net/N2HO5xfYEqyQ8q6oxCw8IQ==/18713687906568048.jpg?param=100y100', title: "云音乐新歌榜", musicList: [
            {id: 1, name: '成全'},
            {id: 2, name: 'Like That'},
            {id: 3, name: '纸短情长'},
            {id: 4, name: '肆无忌惮'},
            {id: 5, name: '往后余生'},
            {id: 6, name: '哑巴'},
            {id: 7, name: '我有多么喜欢你'},
            {id: 8, name: '房间(新版)'},
            {id: 9, name: '这个人(Live版)'},
            {id: 10, name: '双子'}
          ]
        },
        {
          img: 'http://p4.music.126.net/bZvjH5KTuvAT0YXlVa-RtQ==/109951163326845001.jpg?param=100y100', title: "抖音排行榜", musicList: [
            {id: 1, name: '如果写不出好的和弦就该在洒满阳光的钢琴前一起吃布丁'},
            {id: 2, name: '今晚的月亮'},
            {id: 3, name: '山之茶'},
            {id: 4, name: '再见'},
            {id: 5, name: '天际线'},
            {id: 6, name: '给陌生你的听'},
            {id: 7, name: '原来的我'},
            {id: 8, name: '你'},
            {id: 9, name: '君不见'},
            {id: 10, name: 'Don\'t Turn Around'}
          ]
        },
      ]
    /* 入驻歌手数据 */
      this.liveSingerData = [
        {img: 'http://p1.music.126.net/p9U80ex1B1ciPFa125xV5A==/5931865232210340.jpg?param=62y62', singerName: '张惠妹aMEI', singerIntro: '台湾歌手张惠妹'},
        {img: 'http://p1.music.126.net/1EN_iqQWU_E3DafzEOh3cA==/3302932937408956.jpg?param=62y62', singerName: 'Fine乐团', singerIntro: '独立音乐人'},
        {img: 'http://p1.music.126.net/ZuktZvjcxpYBjcWC3gmbPg==/19027048718765608.jpg?param=62y62', singerName: '萬曉利', singerIntro: '民谣歌手、中国现代民谣的代表人物之一'},
        {img: 'http://p1.music.126.net/v_zYgE9kmAwVGWV2c8hFxA==/7943971513291094.jpg?param=62y62', singerName: '音乐人赵雷', singerIntro: '民谣歌手'},
        {img: 'http://p1.music.126.net/U-duMw2-FE0wNRsuwGktPw==/109951162895674268.jpg?param=62y62', singerName: '王三溥', singerIntro: '音乐人'}
      ]
    /* 热门主播数据 */
      this.popularAnchorData = [
        {img: 'http://p1.music.126.net/H3QxWdf0eUiwmhJvA4vrMQ==/1407374893913311.jpg?param=40y40', name: '陈立', anchorInfo:'心理学家、美食家陈立教授'},
        {img: 'http://p1.music.126.net/y5-sM7tjnxnu_V9LWKgZlw==/7942872001461517.jpg?param=40y40', name: 'DJ艳秋', anchorInfo:'著名音乐节目主持人'},
        {img: 'http://p1.music.126.net/6cc6lgOfQTo6ovNnTHPyJg==/3427177769086282.jpg?param=40y40', name: '国家大剧院古典音乐频道', anchorInfo:'国家大剧院古典音乐官方'},
        {img: 'http://p1.music.126.net/xa1Uxrrn4J0pm_PJwkGYvw==/3130309604335651.jpg?param=40y40', name: '谢谢收听', anchorInfo:'南京电台主持人王馨'},
        {img: 'http://p1.music.126.net/slpd09Tf5Ju82Mv-h8MP4w==/3440371884651965.jpg?param=40y40', name: 'DJ晓苏', anchorInfo:'独立DJ，CRI环球旅游广播特邀DJ'}
      ]
    /* 新碟上架数据 */
      this.newPlateData = [
        [
        {img:'http://p3.music.126.net/5-7H2abcxgwSQoE3jP1g_A==/109951163315260754.jpg?param=100y100', imgDes: 'Shawn Mendes', singerName: 'Shawn Mendes'},
        {img:'http://p4.music.126.net/BRq1VI4EgUVYY3lFA4IITg==/109951163298379812.jpg?param=100y100', imgDes: 'LOVE YOURSELF 轉 \'Tear\'', singerName: 'BTS (防弹少年团)'},
        {img:'http://p3.music.126.net/DnTvmdHlL6laM3vIV-V06w==/109951163298316770.jpg?param=100y100', imgDes: '李志、电声与管弦乐II', singerName: '李志'},
        {img:'http://p4.music.126.net/DwXcCDty6kbYaI3Fgf1tRA==/109951163264134431.jpg?param=100y100', imgDes: '哦！我的皇帝陛下 原声专辑', singerName: '群星'},
        {img:'http://p3.music.126.net/XWMiED2ryCj2xVovjDRDSQ==/109951163281594877.jpg?param=100y100', imgDes: 'Voicenotes', singerName: 'Charlie Puth'}
        ],
        [
          {img:'http://p4.music.126.net/vY0tEWh2Qfe_gzo2sVuYxg==/109951163323858601.jpg?param=100y100', imgDes: '平凡的一天', singerName: '毛不易'},
          {img:'http://p3.music.126.net/bBM_SiadR2t44kJfNLgTpw==/109951163302888245.jpg?param=100y100', imgDes: 'E能量', singerName: '群星'},
          {img:'http://p4.music.126.net/t4DtjelrazJXS4W1xPSq9w==/109951163313505249.jpg?param=100y100', imgDes: 'Red Diary Page.2', singerName: '脸红的思春期'},
          {img:'http://p3.music.126.net/w6XSrAvUXrU_VSI8_H29MA==/109951163317131519.jpg?param=100y100', imgDes: '我有多么喜欢你', singerName: '萧敬腾  /  林宥嘉'},
          {img:'http://p4.music.126.net/rnIoOdEStcFPBpD-37x4pA==/109951163302871949.jpg?param=100y100', imgDes: 'Voicenotes', singerName: '吴亦凡'}
        ]
      ]
    },
    methods: {
      toggleMusicContentBg(uploadValue) {
        console.log(uploadValue)
      },
      currentWeek(){
        let date = new Date();
        let week = date.getDay();
        let weekString = '';
        switch (week) {
          case 1: weekString = '星期一'
            break;
          case 2: weekString = '星期二'
            break;
          case 3: weekString = '星期三'
            break;
          case 4: weekString = '星期四'
            break;
          case 5: weekString = '星期五'
            break;
          case 6: weekString = '星期六'
            break;
          case 0: weekString = '星期天'
            break;
          default : weekString = ''
            break;
        }
        return weekString
      },
      currentDay() {
        let date = new Date();
        let day = date.getDate();
        return day;
      },
      leftSowing() {
        this.sowingIndex = this.sowingIndex-1;
        console.log(this.sowingIndex)
        if(this.sowingIndex == 2){
          this.sowingPrevTwo = true;
          this.sowingNextTwo = false;
          this.sowingNextThree = false;
          this.sowingPrevOne = false;
        }else if(this.sowingIndex == 1){
          this.sowingPrevTwo = false;
          this.sowingNextTwo = false;
          this.sowingNextThree = false;
          this.sowingPrevOne = true;
        }else if(this.sowingIndex == 0){
          this.sowingPrevTwo = false;
          this.sowingNextTwo = false;
          this.sowingNextThree = true;
          this.sowingPrevOne = false;
          this.sowingPrevTwo = true;
          this.sowingNextTwo = false;
          this.sowingNextThree = false;
          this.sowingPrevOne = false;
          this.sowingIndex = 2;
        }
      },
      rightSowing() {
        this.sowingIndex = this.sowingIndex + 1;
        if(this.sowingIndex == 2){
          this.sowingNextTwo = true;
          this.sowingPrevTwo = false;
          this.sowingNextThree = false;
          this.sowingPrevOne = false;
        }else if(this.sowingIndex == 3){
          this.sowingNextTwo = false;
          this.sowingNextThree = true;
          this.sowingPrevTwo = false;
          this.sowingPrevOne = false;
        }else{
          this.sowingNextTwo = false;
          this.sowingNextThree = false;
          this.sowingPrevTwo = false;
          this.sowingPrevOne = true;
          this.sowingNextTwo = true;
          this.sowingNextThree = false;
          this.sowingPrevTwo = false;
          this.sowingPrevOne = false;
          this.sowingIndex = 2;
        }
      },
      callbackTop() {
        this.$store.commit('update', 0)
        this.isShowScrollButton = false
      }
    },
    computed: {
      getValue(){
        // console.log(this.$store.state.callBack)
        return this.$store.state.callBack
      }
    },
    watch: {
      getValue(newValue, oldValue){
        if(newValue == 0){
          this.isShowScrollButton = false
        }else if(newValue == 1){
          this.isShowScrollButton = true
        }else {
          console.log('监听$store.state.callback的值出错')
        }
      }
    }
  }
</script>

<style scoped>
  .callback-top {
    display: block;
    width: 49px;
    height: 44px;
    background: url("../../../../assets/images/sprite.png") -265px -47px no-repeat;
    position: fixed;
    bottom: 160px;
    left: 50%;
    margin-left: 510px;
    display: none;
  }
  .callback-top:hover {
    background: url("../../../../assets/images/sprite.png") -325px -47px no-repeat;
  }
  .scrollButton {
    display: block;
  }
  /*========================*/
  .find-music-content {

  }

  /* 头部 */
  .find-music-content-top {
    background: url('../../../../assets/images/sowing_imgbg5.png') 0px 0 repeat;
  }
  .find-music-content-top .find-music-wrap {
    width: 984px;
    height: 336px;
    margin: 0 auto;
  }
  .find-music-content-top .find-music-download {
    float: left;
    width: 254px;
    height: 336px;
    background: url('../../../../assets/images/download.png') 0 0 no-repeat;
  }
  .find-music-download a {
    display: inline-block;
    width: 215px;
    height: 56px;
    margin: 212px 0 0 19px;
    text-indent: -9999px;
  }
  .find-music-download a:hover {
    background: url('../../../../assets/images/download.png') 0px -340px no-repeat;
  }
  .find-music-download p {
    font-size: 12px;
    color: #8d8d8d;
    margin: 10px auto;
    text-align: center;
  }

  /* 中间部分 */
  .find-music-content .find-music-content-middle {
    height: 1674px;
  }
  .find-music-content-middle .find-music-wrap {
    width: 984px;
    height: 100%;
    /*background: blue;*/
    margin: 0 auto;
    border-left: 1px solid #d3d3d3;
    border-bottom: 1px solid #d3d3d3;
    border-right: 1px solid #d3d3d3;

  }

  /* 中间部分-左侧处理 */
  .find-music-content-middle .wrap-middle-left {
    width: 728px;
    /*height: 100%;*/
    /*background: yellow;*/
    margin: 0 auto;
    float: left;
    border-right: 1px solid #ccc;
  }
  .wrap-middle-left .wrap-middle-left-wrap {
    padding: 20px 20px 38px 20px;
    height: 100%;
    background: #fff;
  }

  /* 热门推荐的头部处理 */
  .wrap-middle-left-wrap .hot-recommendation-header {
    height: 33px;
    border-bottom: 2px solid #C10D0C;
    /*background: grey;*/
    line-height: 35px;
  }
  .hot-recommendation-header .record-img {
    float: left;
    width: 35px;
    height: 35px;
    background: url('../../../../assets/images/index.png') -226px -154px no-repeat;
  }
  .hot-recommendation-header a {
    float: left;
    color: #000;
    font-size: 18px;
  }
  .hot-recommendation-header .hot-recommendation-music-type {
    float: left;
    margin-left: 20px;
  }
  .hot-recommendation-header .hot-recommendation-music-type a {
    color: #666;
    font-size: 12px;
    float: left;
  }
  .hot-recommendation-header .hot-recommendation-music-type a:hover{
    text-decoration: underline;
  }
  .hot-recommendation-header .hot-recommendation-music-type .line {
    float: left;
    margin: 0 10px;
    color: #ccc;
  }
  .hot-recommendation-header .hot-recommendation-more {
    float: right;
    position: relative;
    right: 12px;
  }
  .hot-recommendation-header .hot-recommendation-more a {
    font-size: 12px;
    color: #666;
    float: left;
  }
  .hot-recommendation-header .hot-recommendation-more a:hover{
    text-decoration: underline;
  }
  .hot-recommendation-header .hot-recommendation-arrow {
    float: right;
    position: absolute;
    width: 12px;
    height: 12px;
    background: url('../../../../assets/images/index.png') 0 -240px no-repeat;
    top: 50%;
    margin-top: -6px;
  }
  .find-music-wrap .wrap-middle-right {
    width: 254px;
    height: 970px;
    float: right;
    /*background: green;*/
  }

  /* 热门推荐内容部分 */

  .wrap-middle-left-wrap .hot-recommendation-content {
  }
  .hot-recommendation-content ul li {
    float: left;
    width: 140px;
    height: 204px;
    margin: 18px 15px;
  }
  .hot-recommendation-content .hot-img {
    position: relative;
  }
  .hot-recommendation-content .hot-img .hot-link {
    display: inline-block;
    width: 140px;
    height: 118px;
    position: absolute;
    top: 0;
    background: url('../../../../assets/images/coverall.png') 0 0 no-repeat;
  }
  .hot-recommendation-content .playback {
    position: relative;
    bottom: 27px;
    background: url('../../../../assets/images/coverall.png') 0 -540px no-repeat;
    height: 27px;
    line-height: 27px;
  }
  .hot-recommendation-content .playback a {
    display: inline-block;
    width: 17px;
    height: 18px;
    background: url('../../../../assets/images/iconall.png') 0 0 no-repeat;
    position: absolute;
    right: 10px;
    top: 50%;
    margin-top: -10px;
  }
  .hot-recommendation-content .playback a:hover {
    background: url('../../../../assets/images/iconall.png') 0 -60px no-repeat;
  }
  .hot-recommendation-content .playback .headset {
    display: inline-block;
    width: 14px;
    height: 11px;
    background: url('../../../../assets/images/iconall.png') 0 -24px no-repeat;
    margin-left: 10px;
  }
  .hot-recommendation-content .hot-description {
    position: relative;
    top: -20px;
    color: #000;
  }
  .hot-recommendation-content .hot-description:hover {
    text-decoration: underline;
  }
  /* 个性化推荐头部 */
  .wrap-middle-left-wrap .individualization-recommend-header {
    height: 33px;
    border-bottom: 2px solid #C10D0C;
    /*background: grey;*/
    line-height: 35px;
  }
  .individualization-recommend-header .record-img {
    float: left;
    width: 35px;
    height: 35px;
    background: url('../../../../assets/images/index.png') -226px -154px no-repeat;
  }
  .individualization-recommend-header a {
    float: left;
    color: #000;
    font-size: 18px;
  }

  /* 个人推荐内容部分 */
  .individualization-recommend-content ul li {
    width: 140px;
    height: 260px;
    margin: 18px 15px;
    float: left;
  }
  .individualization-recommend-content .individualization-img {
    position: relative;
  }
  .individualization-recommend-content .individualization-img .individualization-link {
    display: inline-block;
    width: 140px;
    height: 118px;
    position: absolute;
    top: 0;
    background: url('../../../../assets/images/coverall.png') 0 0 no-repeat;
  }
  .individualization-recommend-content .playback {
    position: relative;
    bottom: 27px;
    background: url('../../../../assets/images/coverall.png') 0 -540px no-repeat;
    height: 27px;
    line-height: 27px;
  }
  .individualization-recommend-content .playback a {
    display: inline-block;
    width: 17px;
    height: 18px;
    background: url('../../../../assets/images/iconall.png') 0 0 no-repeat;
    position: absolute;
    right: 10px;
    top: 50%;
    margin-top: -10px;
  }
  .individualization-recommend-content .playback a:hover {
    background: url('../../../../assets/images/iconall.png') 0 -60px no-repeat;
  }
  .individualization-recommend-content .playback .headset {
    display: inline-block;
    width: 14px;
    height: 11px;
    background: url('../../../../assets/images/iconall.png') 0 -24px no-repeat;
    margin-left: 10px;
  }
  .individualization-recommend-content .individualization-description-one {
    position: relative;
    top: -20px;
    color: #000;
  }
  .individualization-recommend-content .individualization-description-one:hover {
    text-decoration: underline;
  }
  .individualization-recommend-content .individualization-description-two {
    position: relative;
    display: block;
    font-size: 12px;
    color: #999;
    top: -20px;
  }
  .hot-recommendation-content .individualization-description-one:hover {
    text-decoration: underline;
  }
  .individualization-recommend-content .individualization-img-first {
    width: 140px;
    height: 140px;
    background: url('../../../../assets/images/date.png') 0 0 no-repeat;
    position: relative;
  }
  .individualization-img-first .individualization-week {
    display: block;
    height: 30px;
    line-height: 30px;
    text-align: center;
    color: #fff;
  }
  .individualization-img-first .individualization-day {
    width: 100%;
    font-size: 94px;
    font-weight: bold;
    color: #202020;
    position: absolute;
    line-height: 102px;
    text-align: center;
  }
  .individualization-img-first .day-icon {
    display: inline-block;
    width: 140px;
    height: 107px;
    background: url('../../../../assets/images/date.png') 0 -150px no-repeat;
    margin-top: 2px;
  }
  .individualization-img-first .individualization-img-link {
    position: absolute;
    width: 140px;
    height: 140px;
    top: 0;
    /*background: black;*/
  }
  .individualization-recommend-content .individualization-img-des {
    display: block;
    color: #000;
    text-align: center;
    line-height: 30px;
  }
  .individualization-recommend-content .individualization-img-des:hover {
    text-decoration: underline;
  }
  .individualization-recommend-content p {
    font-size: 12px;
    color: #999;
  }

  /* 新碟上架头部处理 */
  .wrap-middle-left-wrap .new-plate-header {
    height: 33px;
    border-bottom: 2px solid #C10D0C;
    /*background: grey;*/
    line-height: 35px;
  }
  .new-plate-header a {
    float: left;
    color: #000;
    font-size: 18px;
  }
  .new-plate-header .record-img {
    float: left;
    width: 35px;
    height: 35px;
    background: url('../../../../assets/images/index.png') -226px -154px no-repeat;
  }
  .new-plate-header .new-plate-more {
    float: right;
    position: relative;
    right: 12px;
  }
  .new-plate-header .new-plate-more a {
    font-size: 12px;
    color: #666;
    float: left;
  }
  .new-plate-header .new-plate-more a:hover {
    text-decoration: underline;
  }
  .new-plate-header .new-plate-arrow {
    float: right;
    position: absolute;
    width: 12px;
    height: 12px;
    background: url('../../../../assets/images/index.png') 0 -240px no-repeat;
    top: 50%;
    margin-top: -6px;
  }

  /* 新碟上架内容部分 */
  .wrap-middle-left-wrap .new-plate-content {
    height: 186px;
    border: 1px solid #ccc;
    background: #f4f4f4;
    margin: 20px 0 20px 0;
  }
  .new-plate-content .new-plate-sowing {
    position: relative;
    height: 100%;
  }
  .new-plate-content .new-plate-sowing-list {
    float: left;
    width: 645px;
    height: 155px;
    margin: 25px 0 0 20px;
    overflow: hidden;
    position: relative;
  }
  .new-plate-sowing-list .new-plate-sowing-wrap {
    width: 1940px;
    height: 100%;
    position: relative;
  }
  .nextToTwo {
    left: -645px;
  }
  .nextToThree {
    left: -1290px;
  }
  .PrevToTwo {
    left: -645px;
  }
  .PrevToOne {
    left: 0px;
  }
  .prev {
    transform: translate(640px);
  }
  .new-plate-sowing-wrap ul {
    width: 645px;
    float: left;
  }
  .new-plate-sowing-list ul li {
    float: left;
    width: 118px;
    height: 150px;
    margin-left: 11px;
    position: relative;
  }
  .new-plate-sowing-list ul li a {
    display: block;
    width: 106px;
    font-weight: normal;
    font-size: 12px;
    color: #000;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 18px;
  }
  .new-plate-sowing-list ul li a:hover {
    text-decoration: underline;
  }
  .new-plate-sowing-list ul li span {
    font-size: 12px;
    color: #666;
  }
  .new-plate-sowing-list ul li span:hover {
    text-decoration: underline;
  }
  .new-plate-sowing-list ul li .new-plate-img {
    position: relative;
  }
  .new-plate-sowing-list ul li .new-plate-img a{
    position: absolute;
    width: 118px;
    height: 100px;
    top: 0;
    left: 0;
    background: url('../../../../assets/images/coverall.png') 0 -570px no-repeat;
  }
  .new-plate-sowing-list ul li .new-plate-play-icon {
    display: block;
    position: absolute;
    width: 20px;
    height: 20px;
    background: url('../../../../assets/images/iconall.png') -1px -86px no-repeat;
    right: 27px;
    top: 73px;
  }
  .new-plate-sowing-list ul li .new-plate-play-icon:hover {
    background: url('../../../../assets/images/iconall.png') -1px -111px no-repeat;
  }
  .new-plate-sowing .sowing-left {
    float: left;
    position: absolute;
    width: 17px;
    height: 17px;
    background: url('../../../../assets/images/index.png') -260px -75px no-repeat;
    top: 50%;
    margin-top: -17px;
  }
  .new-plate-sowing .sowing-left:hover {
    background-position: -280px -75px;
  }
  .new-plate-sowing .sowing-right {
    float: left;
    position: absolute;
    width: 17px;
    height: 17px;
    background: url('../../../../assets/images/index.png') -300px -75px no-repeat;
    top: 50%;
    margin-top: -17px;

  }
  .new-plate-sowing .sowing-right:hover {
    background-position: -320px -75px;
  }

  /*榜单头部部分*/
  .wrap-middle-left-wrap .billboard-header {
    height: 33px;
    border-bottom: 2px solid #C10D0C;
    /*background: grey;*/
    line-height: 35px;
  }
  .billboard-header a {
    float: left;
    color: #000;
    font-size: 18px;
  }
  .billboard-header .record-img {
    float: left;
    width: 35px;
    height: 35px;
    background: url('../../../../assets/images/index.png') -226px -154px no-repeat;
  }
  .billboard-header .billboard-more {
    float: right;
    position: relative;
    right: 12px;
  }
  .billboard-header .billboard-more a {
    font-size: 12px;
    color: #666;
    float: left;
  }
  .billboard-header .billboard-more a:hover {
    text-decoration: underline;
  }
  .billboard-header .billboard-arrow {
    float: right;
    position: absolute;
    width: 12px;
    height: 12px;
    background: url('../../../../assets/images/index.png') 0 -240px no-repeat;
    top: 50%;
    margin-top: -6px;
  }

  /* 榜单内容 */
  .wrap-middle-left-wrap .billboard-content {
    height: 472px;
    background: url('../../../../assets/images/index_bill.png') 0 0 no-repeat;
  }
  .billboard-content .billboard-list {
    width: 229px;
    float: left;
  }
  .billboard-list .billboard-list-header {
    height: 100px;
    padding: 20px 0 0 20px;
    /*background: #000;*/
  }
  .billboard-list-header .billboard-play-list-icon {
    float: left;
    position: relative;
  }
  .billboard-play-list-icon a {
    position: absolute;
    width: 80px;
    height: 80px;
    top: 0;
    background: url('../../../../assets/images/coverall.png') -145px -57px no-repeat;
  }
  .billboard-list-header .billboard-title {
    float: left;
    margin: 6px 0 0 10px;
  }
  .billboard-title h3:hover {
    text-decoration: underline;
  }
  .billboard-title .title-play-icon {
    display: block;
    width: 22px;
    height: 22px;
    float: left;
    background: url('../../../../assets/images/index.png') -267px -205px no-repeat;
    margin-top: 10px;
  }
  .billboard-title .title-play-icon:hover {
    background: url('../../../../assets/images/index.png') -267px -235px no-repeat;
  }
  .billboard-title .title-add-icon {
    display: block;
    width: 22px;
    height: 22px;
    float: left;
    background: url('../../../../assets/images/index.png') -300px -205px no-repeat;
    margin: 10px 0 0 10px;
  }
  .billboard-title .title-add-icon:hover {
    background: url('../../../../assets/images/index.png') -300px -235px no-repeat;
  }
  .billboard-list .billboard-play-list {
    height: 319px;
    /*background: orange;*/
  }
  .billboard-play-list ul li {
    height: 32px;
    /*background: seashell;*/
    line-height: 32px;
  }
  .billboard-play-list ul li .music-number{
    float: left;
    color: #c10d0c;
    font-size: 18px;
    margin-left: 26px;
  }
  .billboard-play-list ul li .play-list-music-name {
    display: inline-block;
    width: 160px;
    font-size: 12px;
    color: #000;
    margin-left: 10px;
    white-space:nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .billboard-play-list ul .select-all {
    font-size: 12px;
    color: #000;
    float: right;
    margin-right: 32px;
  }
  .billboard-play-list ul .select-all:hover {
    text-decoration: underline;
  }
  .billboard-play-list ul li .play-list-music-name:hover {
    text-decoration: underline;
  }

  /* 中间部分-右侧部分 */
  .find-music-wrap .wrap-middle-right {
    width: 253px;
    height: 970px;
    float: right;
    /*border-right: 1px solid #d3d3d3;*/
    /*background: green;*/
  }
  /* 用户信息 */
  .wrap-middle-right .middle-right-sign-in {
    height: 165px;
    padding-top: 20px;
    background: url('../../../../assets/images/index.png') 1px -269px no-repeat;
  }
  .middle-right-sign-in .sin-in-top {

  }
  .sin-in-top .header-img-link {
    position: relative;
    float: left;
    margin-left: 20px;
    border: 1px solid #dadada;
    padding: 2px;
    background: #fff;
  }
  .sin-in-top .header-img-link img {
    vertical-align: middle;
  }
  .sin-in-top .header-img-link a {
    position: absolute;
    width: 80px;
    height: 80px;
    left: 0;
    top: 0;
  }
  .sin-in-top .name-grade-sign {
    float: left;
    margin-left: 18px;
  }
  .sin-in-top .name-grade-sign .name{
    color: #000;
    font-weight: bold;
    display: block;
  }
  .sin-in-top .name-grade-sign .name:hover {
    text-decoration: underline;
  }
  .sin-in-top .name-grade-sign .grade {
    display: inline-block;
    width: 40px;
    height: 17px;
    background: url('../../../../assets/images/icon2.png') -130px -64px no-repeat;
    position: relative;
  }
  .sin-in-top .name-grade-sign .grade-number {
    display: inline-block;
    position: absolute;
    right: 7px;
    top: 1px;
    font-size: 12px;
    color: #999;
    font-weight: bold;
    font-style: italic;
  }
  .name-grade-sign .grade i {
    display: inline-block;
    width: 8px;
    height: 17px;
    background: url('../../../../assets/images/icon2.png') -192px -64px no-repeat;
    float: right;
  }
  .name-grade-sign .sign {
    display: block;
    width: 70px;
    height: 31px;
    line-height: 31px;
    text-align: center;
    color: #bebebe;
    font-size: 12px;
    background: #3887D2;
    border-radius: 4px;
    border: 1px solid #ccc;
    margin-top: 15px;
    color: white;
  }
  .middle-right-sign-in .dynamic-fans-follow {
    margin: 22px 0 0 2px;
  }
  .dynamic-fans-follow ul li {
    float: left;
    width: 40px;
    padding: 0 18px;
    border-right: 1px solid #e4e4e4;
  }
  .dynamic-fans-follow ul .last {
    border-right: none;
  }
  .dynamic-fans-follow ul li a span {
    color: #666;
    font-size: 12px;
  }
  .dynamic-fans-follow ul li .show-number {
    display: block;
    font-size: 20px;
  }
  /* 入住歌手信息 */
  .wrap-middle-right .live-singer-part {
    margin-top: 15px;
  }
  .live-singer-part .live-singer-wrap {
    width: 210px;
    margin: 0 auto;
  }
  .live-singer-part .live-singer-top {
    height: 23px;
    border-bottom: 1px solid #ccc;
  }
  .live-singer-top h3 {
    font-size: 12px;
    font-weight: bold;
    float: left;
  }
  .live-singer-top span {
    font-size: 12px;
    color: #666;
    float: right;
  }
  .live-singer-wrap .live-singer-info {
    margin: 6px 0 14px 0;
  }
  .live-singer-info ul li {
    float: left;
    width: 210px;
    height: 62px;
    background: #fafafa;
    margin: 14px 0 0 0;
  }
  .live-singer-info ul li a {
    display: block;
    width: 100%;
    height: 100%;
  }
  .live-singer-info ul li a img {
    float: left;
  }
  .live-singer-info ul li a .singer-info {
    float: left;
    height: 60px;
    width: 133px;
    padding-left: 14px;
    background: #fdfdfd;
    border-right: 1px solid #d3d3d3;
    border-bottom: 1px solid #d3d3d3;
    border-top: 1px solid #d3d3d3;
  }
  .live-singer-info ul li a .singer-info:hover {
    background: #f0f0f0;
  }
  .singer-info h3 {
    font-weight: bold;
    color: #000;
    margin: 8px 0;
  }
  .singer-info span {
    display: inline-block;
    font-size: 12px;
    color: #666;
    width: 120px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .live-singer-wrap .live-singer-bottom {
    display: block;
    height: 31px;
    width: 205px;
    background: #fdfdfd;
    border: 1px solid #d3d3d3;
    text-align: center;
    line-height: 31px;
    color: #000;
    font-weight: bold;
    font-size: 12px;
    border-radius: 4px;
    box-shadow: 0 1px 1px 0px #ccc;
  }
  .live-singer-wrap .live-singer-bottom:hover {
    background: #f0f0f0;
  }
  /* 热门主播 */
  .wrap-middle-right .popular-anchor-part {
    margin-top: 30px;
  }
  .popular-anchor-part .popular-anchor-wrap {
    width: 210px;
    margin: 0 auto;
  }
  .popular-anchor-wrap h3 {
    font-weight: bold;
    color: #000;
    font-size: 12px;
    height: 23px;
    border-bottom: 1px solid #ccc;
  }
  .popular-anchor-wrap .popular-anchor-info {
    margin: 20px 0 0 0;
  }
  .popular-anchor-info ul li {
    float: left;
    width: 210px;
    height: 50px;
  }
  .popular-anchor-info .anchor-header {
    float: left;
    position: relative;
  }
  .popular-anchor-info .anchor-header a {
    display: inline-block;
    width: 40px;
    height: 40px;
    position: absolute;
    top: 0;
  }
  .popular-anchor-info .anchor-info {
    float: left;
    width: 160px;
    height: 60px;
    margin-left: 10px;
    line-height: 22px;
  }
  .popular-anchor-info .anchor-info a {
    font-size: 12px;
    color: #000;
  }
  .popular-anchor-info .anchor-info a:hover {
    text-decoration: underline;
  }
  .popular-anchor-info .anchor-info .v-icon{
    display: inline-block;
    width: 11px;
    height: 13px;
    background: url('../../../../assets/images/icon.png') 0 1px no-repeat;
  }
  .popular-anchor-info .anchor-info p {
    color: #666;
    font-size: 12px;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
