<template>
  <div class="net-cloud-music-footer">
    <div class="music-footer-wrap">
      <div class="net-cloud-basic-info">
        <div class="info-nav">
          <a href="javascript: void(0)">关于网易</a>
          <span>|</span>
          <a href="javascript: void(0)">客户服务</a>
          <span>|</span>
          <a href="javascript: void(0)">服务条款</a>
          <span>|</span>
          <a href="javascript: void(0)">网站导航</a>
          <span>|</span>
          <a href="javascript: void(0)">意见反馈</a>
        </div>
        <div class="net-cloud-address">
          <span>网易公司版权所有©1997-2018</span>
          &nbsp;
          <span>杭州乐读科技有限公司运营：</span>
          <a href="javascript:void(0)">浙网文[2018]3506-263号</a>
        </div>
        <div class="net-cloud-communication-mode">
          <span>违法和不良信息举报电话:</span>
          <span>0571-89853516</span>
          &nbsp;
          <span>举报邮箱:</span>
          <a href="javascript:void(0)">cloudmusicservice@163.com</a>
        </div>
      </div>
      <ul class="clearFix">
        <li><a href="javascript:void(0)" class="pointer icon1"></a></li>
        <li><a href="javascript:void(0)" class="pointer icon2"></a></li>
        <li><a href="javascript:void(0)" class="pointer icon3"></a></li>
        <li><a href="javascript:void(0)" class="pointer icon4"></a></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NetCloudMusicFooter"
  }
</script>

<style scoped>
  /* 结尾部分 */
  .net-cloud-music-footer {
    height: 133px;
    padding-top: 15px;
    background: #f2f2f2;
    border-top: 1px solid #d3d3d3;
  }
  .net-cloud-music-footer .music-footer-wrap {
    width: 984px;
    height: 100%;
    margin: 0 auto;
    /*background: red;*/
  }
  .music-footer-wrap .net-cloud-basic-info {
    float: left;
  }
  .music-footer-wrap .net-cloud-basic-info span{
    color: #999;
    font-size: 12px;
  }
  .music-footer-wrap .net-cloud-basic-info a{
    color: #999;
    font-size: 12px;
  }
  .net-cloud-basic-info .info-nav span {
    display: inline-block;
    margin: 0 10px;
  }
  .net-cloud-basic-info .net-cloud-address {
    line-height: 28px;
  }
  .net-cloud-basic-info .net-cloud-address span {
    color: #666;
  }
  .net-cloud-basic-info .net-cloud-address a {
    color: #666;
  }
  .net-cloud-basic-info .net-cloud-address a:hover{
    text-decoration: underline;
  }
  .net-cloud-basic-info .net-cloud-communication-mode a:hover {
    text-decoration: underline;
  }
  .net-cloud-basic-info .net-cloud-communication-mode span {
    color: #666;
  }
  .net-cloud-basic-info .net-cloud-communication-mode a {
    color: #666;
  }
  .music-footer-wrap ul {
    float: right;
  }
  .music-footer-wrap ul li {
    float: left;
    margin-left: 30px;
  }
  .music-footer-wrap ul li a{
    display: inline-block;
    width: 60px;
    height: 70px;
    background: red;
  }
  .music-footer-wrap ul li .icon1 {
    background: url('../../assets/images/foot_enter.png') -60px -80px no-repeat
  }
  .music-footer-wrap ul li .icon2 {
    background: url('../../assets/images/foot_enter.png') 0 -80px no-repeat
  }
  .music-footer-wrap ul li .icon3 {
    background: url('../../assets/images/foot_enter.png') 0 0 no-repeat
  }
  .music-footer-wrap ul li .icon4 {
    background: url('../../assets/images/foot_enter.png') -60px 0 no-repeat
  }
</style>
