<template>
    <div id="musician">
      <div class="musician-header">
        <div class="musician-header-wrap">
          <router-link class="header-logo" to="/recommend">网易云音乐</router-link>
          <ul class="header-nav">
            <li class="header-nav-list fs"><a class="nav-list-a" style="color: #fff" href="javascript:void(0)">首页</a></li>
            <li class="header-nav-list fs"><a class="nav-list-a" href="javascript:void(0)">个人中心</a></li>
            <li class="header-nav-list fs"><a class="nav-list-a" href="javascript:void(0)">常见问题</a></li>
          </ul>
          <div class="header-user-info">
            <a class="header-join-musician" href="javascript:void(0)">加入音乐人</a>
            <a class="header-user-name" href="javascript:void(0)">NetCloudMiner</a>
            <a class="header-message-icon" href="javascript:void(0)"></a>
            <span class="header-hr-line"></span>
            <a class="header-sign-out" href="javascript:void(0)">退出</a>
          </div>
        </div>
      </div>
      <FullPage/>
    </div>
</template>

<script>
  import FullPage from './../FullPage'
  export default {
    name: 'AppOutputMusician',
    components: {
      FullPage
    }
  }
</script>

<style scoped>
  #musician {}

  #musician .musician-header {
    /*height: 60px;*/
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    right: 0;
    background: #242424;
    /*background: rgba(36,36,36,0.7);*/
    /*transition: background 1s ease-in;*/
  }
  #musician .musician-header .musician-header-wrap {
    width: 1200px;
    height: 60px;
    margin: 0 auto;
    /*background: white;*/
  }
  .musician-header-wrap .header-logo {
    display: block;
    float: left;
    width: 200px;
    height: 100%;
    text-indent: -9999px;
    background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKoAAAA8CAYAAAD2SSHcAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MUFBMTg5QjQ4N0QzMTFFNkE3OUVEOTBCM0QxQ0QyN0QiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MUFBMTg5QjU4N0QzMTFFNkE3OUVEOTBCM0QxQ0QyN0QiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxQUExODlCMjg3RDMxMUU2QTc5RUQ5MEIzRDFDRDI3RCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxQUExODlCMzg3RDMxMUU2QTc5RUQ5MEIzRDFDRDI3RCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PlmJ9HAAAAaHSURBVHja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') no-repeat;
    vertical-align: middle;
    overflow: hidden;
  }
  .musician-header-wrap .header-nav {
    width: 600px;
    height: 100%;
    float: left;
    margin-left: 35px;
    line-height: 60px;
  }
  .header-nav .header-nav-list {
    float: left;
    width: 88px;
    margin-right: 62px;
    text-align: center;
  }
  .header-nav .header-nav-list .nav-list-a {
    color: #aaa;
    font-size: 16px;
  }
  .header-nav .header-nav-list .nav-list-a:hover {
    color: #fff;
  }
  .musician-header-wrap .header-user-info {
    float: right;
    padding-top: 14px;
    height: 32px;
    line-height: 32px;
  }
  .musician-header-wrap .header-join-musician {
    display: inline-block;
    width: 81px;
    height: 23px;
    line-height: 23px;
    margin-right: 20px;
    margin-top: 5px;
    text-align: center;
    color: #ea524e;
    border: 1px solid #8e413e;
  }
  .musician-header-wrap .header-user-name {
    color: #fff;
    font-size: 12px;
  }
  .musician-header-wrap .header-user-name:hover {
    text-decoration: underline;
  }
  .header-user-info .header-message-icon {
    display: inline-block;
    width: 29px;
    height: 23px;
    background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAXCAYAAAD3CERpAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAOxJREFUeNpi/P//PwO9ARPDAIBRS2kKWPDIWQFxHRCLkGHuGyBuAuJj2CQZ8aTeHWRaiGyxB6k+RbbwG9Tle/CodwXiWiDmwqKf5DjdDjWoA4hLsDiUBSreDlW3nRoJCeT6LiD+BcQRQDwbiMWgcmJQfgRUvguqnuyEhAxWAfEVqKG6QLwUiBcBcRwQCwLxCyAuA+Jr1M4yIAOjoSkSZFE+lD4GFb9GjSyDDXwE4gIgTgRiByA+AMTzgfgftfIpLgCyYC4UjxaDZAfvG2gGP0Om2W/J8WkzPo0EwCtoCcZAatk7Wp+OWko0AAgwAAbkMbasmGaMAAAAAElFTkSuQmCC') no-repeat;
    margin: -1px 8px -7px 4px;
  }
  .header-user-info .header-hr-line {
    display: inline-block;
    width: 1px;
    height: 12px;
    margin: -2px 14px 0 0;
    background: #929292;
    vertical-align: middle;
  }
  .header-user-info .header-sign-out {
    color: #aaa;
    font-size: 12px;
  }
  .header-user-info .header-sign-out:hover {
    text-decoration: underline;
    color: white;
  }
</style>
