<template>
  <div id="find-music">
     <div class="find-music-top">
       <div class="find-music-top-wrap">
         <ul>
           <li class="fl"><router-link to="/recommend" @click.native="toggleMusicTopNav(recommend)" v-bind:class="{musicTopNavBg: recIsShowBg, musicTopNavDefaultBg: recIsShowDefaultBg}">推荐</router-link></li>
           <li class="fl"><router-link to="/rankingList" @click.native="toggleMusicTopNav(rankingList)" v-bind:class="{musicTopNavBg: rankIsShowBg, musicTopNavDefaultBg: rankIsShowDefaultBg}">排行榜</router-link></li>
           <li class="fl"><router-link to="/songSheet" @click.native="toggleMusicTopNav(songSheet)" v-bind:class="{musicTopNavBg: songIsShowBg, musicTopNavDefaultBg: songIsShowDefaultBg}">歌单</router-link></li>
           <li class="fl"><router-link to="/anchorsPlatform" @click.native="toggleMusicTopNav(anchorsPlatform)" v-bind:class="{musicTopNavBg: ancIsShowBg, musicTopNavDefaultBg: ancIsShowDefaultBg}">主播平台</router-link></li>
           <li class="fl"><router-link to="/singer" @click.native="toggleMusicTopNav(singer)" v-bind:class="{musicTopNavBg: singerIsShowBg, musicTopNavDefaultBg: singerIsShowDefaultBg}">歌手</router-link></li>
           <li class="fl"><router-link to="/newPlate" @click.native="toggleMusicTopNav(newPlate)" v-bind:class="{musicTopNavBg: newpIsShowBg, musicTopNavDefaultBg: newpIsShowDefaultBg}">新碟上架</router-link></li>
         </ul>
       </div>
     </div>
    <FindMusic/>
  </div>
</template>

<script>
import FindMusic from './FindMusic'
import store from '../../../vuex/store'
export default {
  name: 'IndexContentFindMusic',
  data () {
    return {
      store,
      recommend: '推荐',
      rankingList: '排行榜',
      songSheet: '歌单',
      anchorsPlatform: '主播平台',
      singer: '歌手',
      newPlate: '新碟上架',
      recIsShowBg: true,
      rankIsShowBg: false,
      songIsShowBg: false,
      ancIsShowBg: false,
      singerIsShowBg: false,
      newpIsShowBg: false,
      recIsShowDefaultBg: false,
      rankIsShowDefaultBg: true,
      songIsShowDefaultBg: true,
      ancIsShowDefaultBg: true,
      singerIsShowDefaultBg: true,
      newpIsShowDefaultBg: true
    }
  },
  created(){

  },
  computed: {
    getValue(){
      console.log(this.$store.state.DLS_pageEnter);
      return this.$store.state.DLS_pageEnter;
    }
  },
  methods: {
    isShowMusicNavBg (musicNavTopNameFP, booleanBg, booleanDefaultBg) {
      /* 发现音乐子导航背景色处理 */
      this.recIsShowBg = false
      this.rankIsShowBg = false
      this.songIsShowBg = false
      this.ancIsShowBg = false
      this.singerIsShowBg = false
      this.newpIsShowBg = false

      /* 发现音乐子导航背景色恢复默认处理 */
      this.recIsShowDefaultBg = true
      this.rankIsShowDefaultBg = true
      this.songIsShowDefaultBg = true
      this.ancIsShowDefaultBg = true
      this.singerIsShowDefaultBg = true
      this.newpIsShowDefaultBg = true

      switch (musicNavTopNameFP) {
        case '推荐':
          this.recIsShowBg = booleanBg
          this.recIsShowDefaultBg = booleanDefaultBg
          break
        case '排行榜':
          this.rankIsShowBg = booleanBg
          this.rankIsShowDefaultBg = booleanDefaultBg
          break
        case '歌单':
          this.songIsShowBg = booleanBg
          this.songIsShowDefaultBg = booleanDefaultBg
          break
        case '主播平台':
          this.ancIsShowBg = booleanBg
          this.ancIsShowDefaultBg = booleanDefaultBg
          break
        case '歌手':
          this.singerIsShowBg = booleanBg
          this.singerIsShowDefaultBg = booleanDefaultBg
          break
        case '新碟上架':
          this.newpIsShowBg = booleanBg
          this.newpIsShowDefaultBg = booleanDefaultBg
          break
      }
    },
    toggleMusicTopNav (musicNavTopName) {
      if (musicNavTopName === '推荐') {
        this.isShowMusicNavBg(musicNavTopName, true, false)
      } else if (musicNavTopName === '排行榜') {
        this.isShowMusicNavBg(musicNavTopName, true, false)
      } else if (musicNavTopName === '歌单') {
        this.isShowMusicNavBg(musicNavTopName, true, false)
      } else if (musicNavTopName === '主播平台') {
        this.isShowMusicNavBg(musicNavTopName, true, false)
      } else if (musicNavTopName === '歌手') {
        this.isShowMusicNavBg(musicNavTopName, true, false)
      } else if (musicNavTopName === '新碟上架') {
        this.isShowMusicNavBg(musicNavTopName, true, false)
      }
    }
  },
  components: {
    FindMusic
  }
}
</script>

<style scoped>
  #find-music {}
  .find-music-top {
    height: 35px;
    background-color: #C20C0C;
  }
  .find-music-top .find-music-top-wrap{
    width: 1100px;
    margin: 0 auto;
  }
  .find-music-top-wrap ul {
    margin-left: 180px;
  }
  .find-music-top-wrap ul li {
    padding: 0 17px 0 17px;
    line-height: 35px;

  }
  .find-music-top-wrap ul li a {
    color: #fff;
    font-size: 12px;
    padding: 4px 13px 4px 13px;
  }
  .find-music-top-wrap ul li a:hover {
    border-radius: 13px;
    background-color: #9b0909;
  }
  .musicTopNavBg {
    border-radius: 13px;
    background-color: #9b0909;
  }
  .musicTopNavDefaultBg {
    background-color: #C20C0C;
  }
</style>
