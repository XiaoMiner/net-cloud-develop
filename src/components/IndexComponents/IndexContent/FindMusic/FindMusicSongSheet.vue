<template>
<div id="song-sheet">
  <div class="song-sheet-wrap clearFix">
    <div class="song-sheet-wrap-header">
      <h3 class="sswrap-header-h3 fs">全部</h3>
      <div class="sswrap-header-div clearFix">
        <a class="sswrap-header-div-aone" href="javascript:void(0)">热门</a>
        <a class="sswrap-header-div-atwo" href="javascript:void(0)">最新</a>
      </div>
    </div>
    <div class="song-sheet-wrap-content">
      <ul class="sswrap-content-ul">
        <li class="sswrap-content-list" v-for="singleInfo in songListData">
          <div class="sswrap-content-image-part">
            <a class="sswrap-content-image-mask" :title="singleInfo.imgDescription" href="javascript: void(0)"></a>
            <img class="sswrap-content-img" :src="singleInfo.imgUrl" alt="图片">
            <div class="sswrap-content-play">
              <i class="sswrap-content-headset-icon"></i>
              <span class="sswrap-content-play-number">{{singleInfo.player}}</span>
              <i class="sswrap-content-play-button pointer"></i>
            </div>
          </div>
          <p class="sswrap-content-image-description pointer" :title="singleInfo.imgDescription">{{singleInfo.imgDescription}}</p>
          <p>
            <span class="sswrap-content-by">by</span>
            <a class="sswrap-content-songer pointer" :title="singleInfo.singerName">{{singleInfo.singerName}}</a>
          </p>
        </li>
      </ul>
    </div>
    <div class="pagination-nav">
      <pagination :page="page" :currentPage="pageNumber"></pagination>
    </div>
  </div>
  <NetCloudMusicFooter/>

</div>
</template>

<script>
import pagination from './../../../pagination/pagination'
import NetCloudMusicFooter from './../../../commons/NetCloudMusicFooter'
export default {
  name: 'FindMusicSongSheet',
  data(){
    return {
      page: 3,
      pageNumber: 1,
      songListData: [],
    }
  },
  mounted(){
      this.getSongListData(this.pageNumber);
  },
  methods:{
    getSongListData(currentPage){
      if(currentPage == 1){
        this.songListData = [
          //第一组
          {
            imgUrl: 'http://p1.music.126.net/GQNAdcJpe95voMbMQnyn5g==/19139198905314433.jpg?param=140y140',
            player: '69790',
            imgDescription: '岁月留声｜港乐里的王家卫式情话',
            singerName: '猫头罐与六便士'
          },
          {
            imgUrl: 'http://p1.music.126.net/Av1WXaORMVx9yC-Y1LRKIg==/109951163399962868.jpg?param=140y140',
            player: '34169',
            imgDescription: '梦幻流行 | 庄生梦蝶，噪音也迷人',
            singerName: 'AirRadio空气赫兹'
          },
          {
            imgUrl: 'http://p1.music.126.net/_3jkl_Hmqr2zi0UoO6ekbg==/109951163400283899.jpg?param=140y140',
            player: '59122',
            imgDescription: '没音乐会死星人的日常',
            singerName: '六个翅膀的小粉'
          },
          {
            imgUrl: 'http://p1.music.126.net/oRr1GGfQCnlpj8R3e2haSA==/109951163401451378.jpg?param=140y140',
            player: '25165',
            imgDescription: '【提琴电音】自悠扬起，余韵无穷',
            singerName: '谐星七十六号'
          },
          {
            imgUrl: 'http://p1.music.126.net/dNMp_W_H1zefIOcVZ3yWKw==/19000660440208767.jpg?param=140y140',
            player: '29580',
            imgDescription: '日系纯音 / 与你在樱花树下的誓言',
            singerName: 'Solitudeheart'
          },
          //第二组
          {
            imgUrl: 'http://p1.music.126.net/GQNAdcJpe95voMbMQnyn5g==/19139198905314433.jpg?param=140y140',
            player: '69790',
            imgDescription: '岁月留声｜港乐里的王家卫式情话',
            singerName: '猫头罐与六便士'
          },
          {
            imgUrl: 'http://p1.music.126.net/Av1WXaORMVx9yC-Y1LRKIg==/109951163399962868.jpg?param=140y140',
            player: '34169',
            imgDescription: '梦幻流行 | 庄生梦蝶，噪音也迷人',
            singerName: 'AirRadio空气赫兹'
          },
          {
            imgUrl: 'http://p1.music.126.net/_3jkl_Hmqr2zi0UoO6ekbg==/109951163400283899.jpg?param=140y140',
            player: '59122',
            imgDescription: '没音乐会死星人的日常',
            singerName: '六个翅膀的小粉'
          },
          {
            imgUrl: 'http://p1.music.126.net/oRr1GGfQCnlpj8R3e2haSA==/109951163401451378.jpg?param=140y140',
            player: '25165',
            imgDescription: '【提琴电音】自悠扬起，余韵无穷',
            singerName: '谐星七十六号'
          },
          {
            imgUrl: 'http://p1.music.126.net/dNMp_W_H1zefIOcVZ3yWKw==/19000660440208767.jpg?param=140y140',
            player: '29580',
            imgDescription: '日系纯音 / 与你在樱花树下的誓言',
            singerName: 'Solitudeheart'
          },
          //第三组
          {
            imgUrl: 'http://p1.music.126.net/GQNAdcJpe95voMbMQnyn5g==/19139198905314433.jpg?param=140y140',
            player: '69790',
            imgDescription: '岁月留声｜港乐里的王家卫式情话',
            singerName: '猫头罐与六便士'
          },
          {
            imgUrl: 'http://p1.music.126.net/Av1WXaORMVx9yC-Y1LRKIg==/109951163399962868.jpg?param=140y140',
            player: '34169',
            imgDescription: '梦幻流行 | 庄生梦蝶，噪音也迷人',
            singerName: 'AirRadio空气赫兹'
          },
          {
            imgUrl: 'http://p1.music.126.net/_3jkl_Hmqr2zi0UoO6ekbg==/109951163400283899.jpg?param=140y140',
            player: '59122',
            imgDescription: '没音乐会死星人的日常',
            singerName: '六个翅膀的小粉'
          },
          {
            imgUrl: 'http://p1.music.126.net/oRr1GGfQCnlpj8R3e2haSA==/109951163401451378.jpg?param=140y140',
            player: '25165',
            imgDescription: '【提琴电音】自悠扬起，余韵无穷',
            singerName: '谐星七十六号'
          },
          {
            imgUrl: 'http://p1.music.126.net/dNMp_W_H1zefIOcVZ3yWKw==/19000660440208767.jpg?param=140y140',
            player: '29580',
            imgDescription: '日系纯音 / 与你在樱花树下的誓言',
            singerName: 'Solitudeheart'
          },
          //第四组
          {
            imgUrl: 'http://p1.music.126.net/GQNAdcJpe95voMbMQnyn5g==/19139198905314433.jpg?param=140y140',
            player: '69790',
            imgDescription: '岁月留声｜港乐里的王家卫式情话',
            singerName: '猫头罐与六便士'
          },
          {
            imgUrl: 'http://p1.music.126.net/Av1WXaORMVx9yC-Y1LRKIg==/109951163399962868.jpg?param=140y140',
            player: '34169',
            imgDescription: '梦幻流行 | 庄生梦蝶，噪音也迷人',
            singerName: 'AirRadio空气赫兹'
          },
          {
            imgUrl: 'http://p1.music.126.net/_3jkl_Hmqr2zi0UoO6ekbg==/109951163400283899.jpg?param=140y140',
            player: '59122',
            imgDescription: '没音乐会死星人的日常',
            singerName: '六个翅膀的小粉'
          },
          {
            imgUrl: 'http://p1.music.126.net/oRr1GGfQCnlpj8R3e2haSA==/109951163401451378.jpg?param=140y140',
            player: '25165',
            imgDescription: '【提琴电音】自悠扬起，余韵无穷',
            singerName: '谐星七十六号'
          },
          {
            imgUrl: 'http://p1.music.126.net/dNMp_W_H1zefIOcVZ3yWKw==/19000660440208767.jpg?param=140y140',
            player: '29580',
            imgDescription: '日系纯音 / 与你在樱花树下的誓言',
            singerName: 'Solitudeheart'
          },
          // 第五组
          {
            imgUrl: 'http://p1.music.126.net/GQNAdcJpe95voMbMQnyn5g==/19139198905314433.jpg?param=140y140',
            player: '69790',
            imgDescription: '岁月留声｜港乐里的王家卫式情话',
            singerName: '猫头罐与六便士'
          },
          {
            imgUrl: 'http://p1.music.126.net/Av1WXaORMVx9yC-Y1LRKIg==/109951163399962868.jpg?param=140y140',
            player: '34169',
            imgDescription: '梦幻流行 | 庄生梦蝶，噪音也迷人',
            singerName: 'AirRadio空气赫兹'
          },
          {
            imgUrl: 'http://p1.music.126.net/_3jkl_Hmqr2zi0UoO6ekbg==/109951163400283899.jpg?param=140y140',
            player: '59122',
            imgDescription: '没音乐会死星人的日常',
            singerName: '六个翅膀的小粉'
          },
          {
            imgUrl: 'http://p1.music.126.net/oRr1GGfQCnlpj8R3e2haSA==/109951163401451378.jpg?param=140y140',
            player: '25165',
            imgDescription: '【提琴电音】自悠扬起，余韵无穷',
            singerName: '谐星七十六号'
          },
          {
            imgUrl: 'http://p1.music.126.net/dNMp_W_H1zefIOcVZ3yWKw==/19000660440208767.jpg?param=140y140',
            player: '29580',
            imgDescription: '日系纯音 / 与你在樱花树下的誓言',
            singerName: 'Solitudeheart'
          },
          // 第六组
          {
            imgUrl: 'http://p1.music.126.net/GQNAdcJpe95voMbMQnyn5g==/19139198905314433.jpg?param=140y140',
            player: '69790',
            imgDescription: '岁月留声｜港乐里的王家卫式情话',
            singerName: '猫头罐与六便士'
          },
          {
            imgUrl: 'http://p1.music.126.net/Av1WXaORMVx9yC-Y1LRKIg==/109951163399962868.jpg?param=140y140',
            player: '34169',
            imgDescription: '梦幻流行 | 庄生梦蝶，噪音也迷人',
            singerName: 'AirRadio空气赫兹'
          },
          {
            imgUrl: 'http://p1.music.126.net/_3jkl_Hmqr2zi0UoO6ekbg==/109951163400283899.jpg?param=140y140',
            player: '59122',
            imgDescription: '没音乐会死星人的日常',
            singerName: '六个翅膀的小粉'
          },
          {
            imgUrl: 'http://p1.music.126.net/oRr1GGfQCnlpj8R3e2haSA==/109951163401451378.jpg?param=140y140',
            player: '25165',
            imgDescription: '【提琴电音】自悠扬起，余韵无穷',
            singerName: '谐星七十六号'
          },
          {
            imgUrl: 'http://p1.music.126.net/dNMp_W_H1zefIOcVZ3yWKw==/19000660440208767.jpg?param=140y140',
            player: '29580',
            imgDescription: '日系纯音 / 与你在樱花树下的誓言',
            singerName: 'Solitudeheart'
          },
          // 第七组
          {
            imgUrl: 'http://p1.music.126.net/GQNAdcJpe95voMbMQnyn5g==/19139198905314433.jpg?param=140y140',
            player: '69790',
            imgDescription: '岁月留声｜港乐里的王家卫式情话',
            singerName: '猫头罐与六便士'
          },
          {
            imgUrl: 'http://p1.music.126.net/Av1WXaORMVx9yC-Y1LRKIg==/109951163399962868.jpg?param=140y140',
            player: '34169',
            imgDescription: '梦幻流行 | 庄生梦蝶，噪音也迷人',
            singerName: 'AirRadio空气赫兹'
          },
          {
            imgUrl: 'http://p1.music.126.net/_3jkl_Hmqr2zi0UoO6ekbg==/109951163400283899.jpg?param=140y140',
            player: '59122',
            imgDescription: '没音乐会死星人的日常',
            singerName: '六个翅膀的小粉'
          },
          {
            imgUrl: 'http://p1.music.126.net/oRr1GGfQCnlpj8R3e2haSA==/109951163401451378.jpg?param=140y140',
            player: '25165',
            imgDescription: '【提琴电音】自悠扬起，余韵无穷',
            singerName: '谐星七十六号'
          },
          {
            imgUrl: 'http://p1.music.126.net/dNMp_W_H1zefIOcVZ3yWKw==/19000660440208767.jpg?param=140y140',
            player: '29580',
            imgDescription: '日系纯音 / 与你在樱花树下的誓言',
            singerName: 'Solitudeheart'
          },
          /*,
          {
            imgUrl: '',
            player: '',
            imgDescription: '',
            singerName: ''
          }*/
        ]
      } else if(currentPage == 2){
        this.songListData = [
          //第一组
          {
            imgUrl: 'http://p1.music.126.net/tys4PiLbkIBsWl1fRSi-ug==/109951163389897774.jpg?param=140y140',
            player: '19万',
            imgDescription: '都散了吧！故事始末注定没有我和你',
            singerName: '友Xyi'
          },
          {
            imgUrl: 'http://p1.music.126.net/DGka2Wu_5PSaqLyKaQT7ww==/18988565812043578.jpg?param=140y140',
            player: '45万',
            imgDescription: '这位同学 打扰一下，有个恋爱想和你谈谈',
            singerName: '不安定的滑稽'
          },
          {
            imgUrl: 'http://p1.music.126.net/gstmWooDYD73CQdx3HgMcA==/109951163393158141.jpg?param=140y140',
            player: '181万',
            imgDescription: '我们所怀念的，都是记忆里的自己而已',
            singerName: '黑板抱'
          },
          {
            imgUrl: 'http://p1.music.126.net/Ik_2ud_6tUtfLi94LtupSQ==/109951163390002383.jpg?param=140y140',
            player: '180万',
            imgDescription: '暗恋始终是一个人的流离失所',
            singerName: '-情殇雨夜-'
          },
          {
            imgUrl: 'http://p1.music.126.net/VVHU6FzAisT1JAtlPdwdCQ==/18738976674416019.jpg?param=140y140',
            player: '24万',
            imgDescription: '最新神曲合集，这个夏天就靠它们过了！',
            singerName: '卿公子的字'
          },
          //第二组
          {
            imgUrl: 'http://p1.music.126.net/tys4PiLbkIBsWl1fRSi-ug==/109951163389897774.jpg?param=140y140',
            player: '19万',
            imgDescription: '都散了吧！故事始末注定没有我和你',
            singerName: '友Xyi'
          },
          {
            imgUrl: 'http://p1.music.126.net/DGka2Wu_5PSaqLyKaQT7ww==/18988565812043578.jpg?param=140y140',
            player: '45万',
            imgDescription: '这位同学 打扰一下，有个恋爱想和你谈谈',
            singerName: '不安定的滑稽'
          },
          {
            imgUrl: 'http://p1.music.126.net/gstmWooDYD73CQdx3HgMcA==/109951163393158141.jpg?param=140y140',
            player: '181万',
            imgDescription: '我们所怀念的，都是记忆里的自己而已',
            singerName: '黑板抱'
          },
          {
            imgUrl: 'http://p1.music.126.net/Ik_2ud_6tUtfLi94LtupSQ==/109951163390002383.jpg?param=140y140',
            player: '180万',
            imgDescription: '暗恋始终是一个人的流离失所',
            singerName: '-情殇雨夜-'
          },
          {
            imgUrl: 'http://p1.music.126.net/VVHU6FzAisT1JAtlPdwdCQ==/18738976674416019.jpg?param=140y140',
            player: '24万',
            imgDescription: '最新神曲合集，这个夏天就靠它们过了！',
            singerName: '卿公子的字'
          },
          //第三组
          {
            imgUrl: 'http://p1.music.126.net/tys4PiLbkIBsWl1fRSi-ug==/109951163389897774.jpg?param=140y140',
            player: '19万',
            imgDescription: '都散了吧！故事始末注定没有我和你',
            singerName: '友Xyi'
          },
          {
            imgUrl: 'http://p1.music.126.net/DGka2Wu_5PSaqLyKaQT7ww==/18988565812043578.jpg?param=140y140',
            player: '45万',
            imgDescription: '这位同学 打扰一下，有个恋爱想和你谈谈',
            singerName: '不安定的滑稽'
          },
          {
            imgUrl: 'http://p1.music.126.net/gstmWooDYD73CQdx3HgMcA==/109951163393158141.jpg?param=140y140',
            player: '181万',
            imgDescription: '我们所怀念的，都是记忆里的自己而已',
            singerName: '黑板抱'
          },
          {
            imgUrl: 'http://p1.music.126.net/Ik_2ud_6tUtfLi94LtupSQ==/109951163390002383.jpg?param=140y140',
            player: '180万',
            imgDescription: '暗恋始终是一个人的流离失所',
            singerName: '-情殇雨夜-'
          },
          {
            imgUrl: 'http://p1.music.126.net/VVHU6FzAisT1JAtlPdwdCQ==/18738976674416019.jpg?param=140y140',
            player: '24万',
            imgDescription: '最新神曲合集，这个夏天就靠它们过了！',
            singerName: '卿公子的字'
          },
          //第四组
          {
            imgUrl: 'http://p1.music.126.net/tys4PiLbkIBsWl1fRSi-ug==/109951163389897774.jpg?param=140y140',
            player: '19万',
            imgDescription: '都散了吧！故事始末注定没有我和你',
            singerName: '友Xyi'
          },
          {
            imgUrl: 'http://p1.music.126.net/DGka2Wu_5PSaqLyKaQT7ww==/18988565812043578.jpg?param=140y140',
            player: '45万',
            imgDescription: '这位同学 打扰一下，有个恋爱想和你谈谈',
            singerName: '不安定的滑稽'
          },
          {
            imgUrl: 'http://p1.music.126.net/gstmWooDYD73CQdx3HgMcA==/109951163393158141.jpg?param=140y140',
            player: '181万',
            imgDescription: '我们所怀念的，都是记忆里的自己而已',
            singerName: '黑板抱'
          },
          {
            imgUrl: 'http://p1.music.126.net/Ik_2ud_6tUtfLi94LtupSQ==/109951163390002383.jpg?param=140y140',
            player: '180万',
            imgDescription: '暗恋始终是一个人的流离失所',
            singerName: '-情殇雨夜-'
          },
          {
            imgUrl: 'http://p1.music.126.net/VVHU6FzAisT1JAtlPdwdCQ==/18738976674416019.jpg?param=140y140',
            player: '24万',
            imgDescription: '最新神曲合集，这个夏天就靠它们过了！',
            singerName: '卿公子的字'
          },
          //第五组
          {
            imgUrl: 'http://p1.music.126.net/tys4PiLbkIBsWl1fRSi-ug==/109951163389897774.jpg?param=140y140',
            player: '19万',
            imgDescription: '都散了吧！故事始末注定没有我和你',
            singerName: '友Xyi'
          },
          {
            imgUrl: 'http://p1.music.126.net/DGka2Wu_5PSaqLyKaQT7ww==/18988565812043578.jpg?param=140y140',
            player: '45万',
            imgDescription: '这位同学 打扰一下，有个恋爱想和你谈谈',
            singerName: '不安定的滑稽'
          },
          {
            imgUrl: 'http://p1.music.126.net/gstmWooDYD73CQdx3HgMcA==/109951163393158141.jpg?param=140y140',
            player: '181万',
            imgDescription: '我们所怀念的，都是记忆里的自己而已',
            singerName: '黑板抱'
          },
          {
            imgUrl: 'http://p1.music.126.net/Ik_2ud_6tUtfLi94LtupSQ==/109951163390002383.jpg?param=140y140',
            player: '180万',
            imgDescription: '暗恋始终是一个人的流离失所',
            singerName: '-情殇雨夜-'
          },
          {
            imgUrl: 'http://p1.music.126.net/VVHU6FzAisT1JAtlPdwdCQ==/18738976674416019.jpg?param=140y140',
            player: '24万',
            imgDescription: '最新神曲合集，这个夏天就靠它们过了！',
            singerName: '卿公子的字'
          },
          //第六组
          {
            imgUrl: 'http://p1.music.126.net/tys4PiLbkIBsWl1fRSi-ug==/109951163389897774.jpg?param=140y140',
            player: '19万',
            imgDescription: '都散了吧！故事始末注定没有我和你',
            singerName: '友Xyi'
          },
          {
            imgUrl: 'http://p1.music.126.net/DGka2Wu_5PSaqLyKaQT7ww==/18988565812043578.jpg?param=140y140',
            player: '45万',
            imgDescription: '这位同学 打扰一下，有个恋爱想和你谈谈',
            singerName: '不安定的滑稽'
          },
          {
            imgUrl: 'http://p1.music.126.net/gstmWooDYD73CQdx3HgMcA==/109951163393158141.jpg?param=140y140',
            player: '181万',
            imgDescription: '我们所怀念的，都是记忆里的自己而已',
            singerName: '黑板抱'
          },
          {
            imgUrl: 'http://p1.music.126.net/Ik_2ud_6tUtfLi94LtupSQ==/109951163390002383.jpg?param=140y140',
            player: '180万',
            imgDescription: '暗恋始终是一个人的流离失所',
            singerName: '-情殇雨夜-'
          },
          {
            imgUrl: 'http://p1.music.126.net/VVHU6FzAisT1JAtlPdwdCQ==/18738976674416019.jpg?param=140y140',
            player: '24万',
            imgDescription: '最新神曲合集，这个夏天就靠它们过了！',
            singerName: '卿公子的字'
          },
          //第七组
          {
            imgUrl: 'http://p1.music.126.net/tys4PiLbkIBsWl1fRSi-ug==/109951163389897774.jpg?param=140y140',
            player: '19万',
            imgDescription: '都散了吧！故事始末注定没有我和你',
            singerName: '友Xyi'
          },
          {
            imgUrl: 'http://p1.music.126.net/DGka2Wu_5PSaqLyKaQT7ww==/18988565812043578.jpg?param=140y140',
            player: '45万',
            imgDescription: '这位同学 打扰一下，有个恋爱想和你谈谈',
            singerName: '不安定的滑稽'
          },
          {
            imgUrl: 'http://p1.music.126.net/gstmWooDYD73CQdx3HgMcA==/109951163393158141.jpg?param=140y140',
            player: '181万',
            imgDescription: '我们所怀念的，都是记忆里的自己而已',
            singerName: '黑板抱'
          },
          {
            imgUrl: 'http://p1.music.126.net/Ik_2ud_6tUtfLi94LtupSQ==/109951163390002383.jpg?param=140y140',
            player: '180万',
            imgDescription: '暗恋始终是一个人的流离失所',
            singerName: '-情殇雨夜-'
          },
          {
            imgUrl: 'http://p1.music.126.net/VVHU6FzAisT1JAtlPdwdCQ==/18738976674416019.jpg?param=140y140',
            player: '24万',
            imgDescription: '最新神曲合集，这个夏天就靠它们过了！',
            singerName: '卿公子的字'
          },

          /*{
            imgUrl: '',
            player: '',
            imgDescription: '',
            singerName: ''
          },*/
        ]
      }else if(currentPage == 3){
        this.songListData = [
          // 第一组
          {
            imgUrl: 'http://p1.music.126.net/P5nEwTSKXqDxbHzYSqADow==/109951163381912807.jpg?param=140y140',
            player: '89954',
            imgDescription: '韩式小众女声，慢热的人最长情',
            singerName: '时光如水你好'
          },
          {
            imgUrl: 'http://p1.music.126.net/-GU6rDGfut2k9PZUsNfz0Q==/109951163395653143.jpg?param=140y140',
            player: '71万',
            imgDescription: '心碎日语| 好想触碰你，好想见到你',
            singerName: '莉犬'
          },
          {
            imgUrl: 'http://p1.music.126.net/sxt9hGs8-g4ASnZxsgUsew==/19128203789020861.jpg?param=140y140',
            player: '206万',
            imgDescription: '听了几个故事，正好讲给你玩',
            singerName: '佯佯得意'
          },
          {
            imgUrl: 'http://p1.music.126.net/VFW7oMXZkPzwQtNmvnjUAg==/19212866184371108.jpg?param=140y140',
            player: '37万',
            imgDescription: '日语丨水风空落眼前花',
            singerName: '咩咩稀饭你'
          },
          {
            imgUrl: 'http://p1.music.126.net/TLL-xfjw81s6PbDPPqZ2LA==/19211766672751955.jpg?param=140y140',
            player: '160万',
            imgDescription: '华语情歌｜一个字就戳中泪点的情话',
            singerName: '猫头罐与六便士'
          },
          // 第二组
          {
            imgUrl: 'http://p1.music.126.net/P5nEwTSKXqDxbHzYSqADow==/109951163381912807.jpg?param=140y140',
            player: '89954',
            imgDescription: '韩式小众女声，慢热的人最长情',
            singerName: '时光如水你好'
          },
          {
            imgUrl: 'http://p1.music.126.net/-GU6rDGfut2k9PZUsNfz0Q==/109951163395653143.jpg?param=140y140',
            player: '71万',
            imgDescription: '心碎日语| 好想触碰你，好想见到你',
            singerName: '莉犬'
          },
          {
            imgUrl: 'http://p1.music.126.net/sxt9hGs8-g4ASnZxsgUsew==/19128203789020861.jpg?param=140y140',
            player: '206万',
            imgDescription: '听了几个故事，正好讲给你玩',
            singerName: '佯佯得意'
          },
          {
            imgUrl: 'http://p1.music.126.net/VFW7oMXZkPzwQtNmvnjUAg==/19212866184371108.jpg?param=140y140',
            player: '37万',
            imgDescription: '日语丨水风空落眼前花',
            singerName: '咩咩稀饭你'
          },
          {
            imgUrl: 'http://p1.music.126.net/TLL-xfjw81s6PbDPPqZ2LA==/19211766672751955.jpg?param=140y140',
            player: '160万',
            imgDescription: '华语情歌｜一个字就戳中泪点的情话',
            singerName: '猫头罐与六便士'
          },
          // 第三组
          {
            imgUrl: 'http://p1.music.126.net/P5nEwTSKXqDxbHzYSqADow==/109951163381912807.jpg?param=140y140',
            player: '89954',
            imgDescription: '韩式小众女声，慢热的人最长情',
            singerName: '时光如水你好'
          },
          {
            imgUrl: 'http://p1.music.126.net/-GU6rDGfut2k9PZUsNfz0Q==/109951163395653143.jpg?param=140y140',
            player: '71万',
            imgDescription: '心碎日语| 好想触碰你，好想见到你',
            singerName: '莉犬'
          },
          {
            imgUrl: 'http://p1.music.126.net/sxt9hGs8-g4ASnZxsgUsew==/19128203789020861.jpg?param=140y140',
            player: '206万',
            imgDescription: '听了几个故事，正好讲给你玩',
            singerName: '佯佯得意'
          },
          {
            imgUrl: 'http://p1.music.126.net/VFW7oMXZkPzwQtNmvnjUAg==/19212866184371108.jpg?param=140y140',
            player: '37万',
            imgDescription: '日语丨水风空落眼前花',
            singerName: '咩咩稀饭你'
          },
          {
            imgUrl: 'http://p1.music.126.net/TLL-xfjw81s6PbDPPqZ2LA==/19211766672751955.jpg?param=140y140',
            player: '160万',
            imgDescription: '华语情歌｜一个字就戳中泪点的情话',
            singerName: '猫头罐与六便士'
          },
          // 第四组
          {
            imgUrl: 'http://p1.music.126.net/P5nEwTSKXqDxbHzYSqADow==/109951163381912807.jpg?param=140y140',
            player: '89954',
            imgDescription: '韩式小众女声，慢热的人最长情',
            singerName: '时光如水你好'
          },
          {
            imgUrl: 'http://p1.music.126.net/-GU6rDGfut2k9PZUsNfz0Q==/109951163395653143.jpg?param=140y140',
            player: '71万',
            imgDescription: '心碎日语| 好想触碰你，好想见到你',
            singerName: '莉犬'
          },
          {
            imgUrl: 'http://p1.music.126.net/sxt9hGs8-g4ASnZxsgUsew==/19128203789020861.jpg?param=140y140',
            player: '206万',
            imgDescription: '听了几个故事，正好讲给你玩',
            singerName: '佯佯得意'
          },
          {
            imgUrl: 'http://p1.music.126.net/VFW7oMXZkPzwQtNmvnjUAg==/19212866184371108.jpg?param=140y140',
            player: '37万',
            imgDescription: '日语丨水风空落眼前花',
            singerName: '咩咩稀饭你'
          },
          {
            imgUrl: 'http://p1.music.126.net/TLL-xfjw81s6PbDPPqZ2LA==/19211766672751955.jpg?param=140y140',
            player: '160万',
            imgDescription: '华语情歌｜一个字就戳中泪点的情话',
            singerName: '猫头罐与六便士'
          },
          // 第五组
          {
            imgUrl: 'http://p1.music.126.net/P5nEwTSKXqDxbHzYSqADow==/109951163381912807.jpg?param=140y140',
            player: '89954',
            imgDescription: '韩式小众女声，慢热的人最长情',
            singerName: '时光如水你好'
          },
          {
            imgUrl: 'http://p1.music.126.net/-GU6rDGfut2k9PZUsNfz0Q==/109951163395653143.jpg?param=140y140',
            player: '71万',
            imgDescription: '心碎日语| 好想触碰你，好想见到你',
            singerName: '莉犬'
          },
          {
            imgUrl: 'http://p1.music.126.net/sxt9hGs8-g4ASnZxsgUsew==/19128203789020861.jpg?param=140y140',
            player: '206万',
            imgDescription: '听了几个故事，正好讲给你玩',
            singerName: '佯佯得意'
          },
          {
            imgUrl: 'http://p1.music.126.net/VFW7oMXZkPzwQtNmvnjUAg==/19212866184371108.jpg?param=140y140',
            player: '37万',
            imgDescription: '日语丨水风空落眼前花',
            singerName: '咩咩稀饭你'
          },
          {
            imgUrl: 'http://p1.music.126.net/TLL-xfjw81s6PbDPPqZ2LA==/19211766672751955.jpg?param=140y140',
            player: '160万',
            imgDescription: '华语情歌｜一个字就戳中泪点的情话',
            singerName: '猫头罐与六便士'
          },
          // 第六组
          {
            imgUrl: 'http://p1.music.126.net/P5nEwTSKXqDxbHzYSqADow==/109951163381912807.jpg?param=140y140',
            player: '89954',
            imgDescription: '韩式小众女声，慢热的人最长情',
            singerName: '时光如水你好'
          },
          {
            imgUrl: 'http://p1.music.126.net/-GU6rDGfut2k9PZUsNfz0Q==/109951163395653143.jpg?param=140y140',
            player: '71万',
            imgDescription: '心碎日语| 好想触碰你，好想见到你',
            singerName: '莉犬'
          },
          {
            imgUrl: 'http://p1.music.126.net/sxt9hGs8-g4ASnZxsgUsew==/19128203789020861.jpg?param=140y140',
            player: '206万',
            imgDescription: '听了几个故事，正好讲给你玩',
            singerName: '佯佯得意'
          },
          {
            imgUrl: 'http://p1.music.126.net/VFW7oMXZkPzwQtNmvnjUAg==/19212866184371108.jpg?param=140y140',
            player: '37万',
            imgDescription: '日语丨水风空落眼前花',
            singerName: '咩咩稀饭你'
          },
          {
            imgUrl: 'http://p1.music.126.net/TLL-xfjw81s6PbDPPqZ2LA==/19211766672751955.jpg?param=140y140',
            player: '160万',
            imgDescription: '华语情歌｜一个字就戳中泪点的情话',
            singerName: '猫头罐与六便士'
          },
          // 第七组
          {
            imgUrl: 'http://p1.music.126.net/P5nEwTSKXqDxbHzYSqADow==/109951163381912807.jpg?param=140y140',
            player: '89954',
            imgDescription: '韩式小众女声，慢热的人最长情',
            singerName: '时光如水你好'
          },
          {
            imgUrl: 'http://p1.music.126.net/-GU6rDGfut2k9PZUsNfz0Q==/109951163395653143.jpg?param=140y140',
            player: '71万',
            imgDescription: '心碎日语| 好想触碰你，好想见到你',
            singerName: '莉犬'
          },
          {
            imgUrl: 'http://p1.music.126.net/sxt9hGs8-g4ASnZxsgUsew==/19128203789020861.jpg?param=140y140',
            player: '206万',
            imgDescription: '听了几个故事，正好讲给你玩',
            singerName: '佯佯得意'
          },
          {
            imgUrl: 'http://p1.music.126.net/VFW7oMXZkPzwQtNmvnjUAg==/19212866184371108.jpg?param=140y140',
            player: '37万',
            imgDescription: '日语丨水风空落眼前花',
            singerName: '咩咩稀饭你'
          },
          {
            imgUrl: 'http://p1.music.126.net/TLL-xfjw81s6PbDPPqZ2LA==/19211766672751955.jpg?param=140y140',
            player: '160万',
            imgDescription: '华语情歌｜一个字就戳中泪点的情话',
            singerName: '猫头罐与六便士'
          },
          /*{
            imgUrl: '',
            player: '',
            imgDescription: '',
            singerName: ''
          },*/
        ]
      }

    },
    pagechange(pageNumber){
      this.pageNumber = pageNumber;
      this.getSongListData(pageNumber);
    }
  },
  components:{
    pagination,
    NetCloudMusicFooter
  }
}
</script>

<style scoped>
#song-sheet {
  background: #f5f5f5;
}
#song-sheet .song-sheet-wrap {
  width: 900px;
  /*min-height: 780px;*/
  padding: 40px;
  margin: 0 auto;
  background: #fff;
  border-left: 1px solid #d3d3d3;
  border-right: 1px solid #d3d3d3;
}
/*头部部分*/
.song-sheet-wrap .song-sheet-wrap-header {
  height: 40px;
  border-bottom: 2px solid #c20c0c;
}
.song-sheet-wrap-header .sswrap-header-h3 {
  float: left;
  font-size: 24px;
}
.song-sheet-wrap-header .sswrap-header-div {
  float: right;
}
.sswrap-header-div .sswrap-header-div-aone {
  float: left;
  width: 46px;
  height: 29px;
  line-height: 29px;
  text-align: center;
  font-size: 12px;
  background: #c20c0c;
  color: #fff;
  border-radius: 4px;
}
.sswrap-header-div .sswrap-header-div-atwo {
  float: left;
  width: 46px;
  height: 29px;
  line-height: 29px;
  text-align: center;
  border-radius: 4px;
  font-size: 12px;
  color: #333;
  background: #f5f5f5;
}
.sswrap-header-div .sswrap-header-div-aone:hover,
.sswrap-header-div .sswrap-header-div-atwo:hover {
  text-decoration: underline;
}
/*内容部分*/
.song-sheet-wrap .song-sheet-wrap-content {
  margin: 30px 0 0 0px;
}
.song-sheet-wrap-content .sswrap-content-image-part {
  position: relative;
}
.sswrap-content-list .sswrap-content-play {
  height: 27px;
  width: 100%;
  position: absolute;
  bottom: 4px;
}
.song-sheet-wrap-content .sswrap-content-list {
  float: left;
  display: inline-block;
  width: 140px;
  height: 188px;
  padding: 0 30px 30px 10px;
}
.sswrap-content-list .sswrap-content-image-mask {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: url('./../../../../assets/images/coverall.png') 0 0 no-repeat;
}
.sswrap-content-play .sswrap-content-headset-icon {
  float: left;
  display: inline-block;
  width: 14px;
  height: 11px;
  background: url('./../../../../assets/images/iconall.png') 0 -24px no-repeat;
  margin: 9px 5px 9px 10px;
}
.sswrap-content-play .sswrap-content-play-number {
  float: left;
  margin: 7px 0 0 0;
  color: #ccc;
}
.sswrap-content-play .sswrap-content-play-button {
  display: inline-block;
  float: right;
  width: 16px;
  height: 17px;
  background: url('./../../../../assets/images/iconall.png') 0 0 no-repeat;
  margin: 5px 10px 0 0;
}
.sswrap-content-play .sswrap-content-play-button:hover {
  background-position: 0 -60px;
}
.sswrap-content-list .sswrap-content-image-description {
  margin: 8px 0 3px;
  font-size: 14px;
  color: #000;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
}
.sswrap-content-list .sswrap-content-image-description:hover {
  text-decoration: underline;
}
.sswrap-content-list .sswrap-content-by {
  font-size: 12px;
  color: #999;
}
.sswrap-content-list .sswrap-content-songer {
  width: 100px;
  font-size: 12px;
  color: #666;
}
.sswrap-content-list .sswrap-content-songer:hover {
  text-decoration: underline;
}
.song-sheet-wrap .pagination-nav {
  text-align: center;
}
</style>
