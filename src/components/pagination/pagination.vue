<template>
  <div>
    <ul class="pagination">
      <li :class="{'disabled': currentValue == 1}"><a href="javascript:;" @click="setCurrent(1)"> 首页 </a></li>
      <li :class="{'disabled': currentValue == 1}"><a href="javascript:;" @click="setCurrent(currentValue - 1)"> 上一页 </a></li>
      <li v-for="p in groupList" :class="{'active': currentValue == p.val}"><a href="javascript:;" @click="setCurrent(p.val)"> {{ p.text }} </a></li>
      <li :class="{'disabled': currentValue == page}"><a href="javascript:;" @click="setCurrent(currentValue + 1)"> 下一页</a></li>
      <li :class="{'disabled': currentValue == page}"><a href="javascript:;" @click="setCurrent(page)"> 尾页 </a></li>
      <!-- <li><span>共  {{ total }}   条</span></li>     -->
      <li><span> 每页 {{ display }}  条 </span></li>
      <li><span> 共 {{ page }} 页 </span></li>
       <li><span> 当前第 {{ currentValue }} 页 </span></li>
    </ul>
  </div>


</template>

<script>
  /**
   * [pagination 分页组件]
   * @param  {Number} total         [数据总条数]
   * @param  {Number} display     [每页显示条数 default:10]
   * @param  {Number} current     [当前页码 default:1]
   * @param  {Number} pagegroup     [分页条数(奇数) default:5]
   * @param  {Event} pagechange     [页码改动时 dispatch ]
   * @return {[type]}   [description]
   */
    export default {
    name: 'pagination',
    props: {
      page: {            // 数据总页数
        type: Number,
        default: 0
      },
      display: {            // 每页显示条数
        type: Number,
        default: 35
      },
      currentPage:{
        type:Number,
        default:1
      },
      pagegroup: {        // 分页条数 -- 奇数
        type: Number,
        default: 5,
        coerce:function(v){
          v = v > 0 ? v : 5;
          return v % 2 === 1 ? v : v + 1;
        }
      }
    },
    data(){
      return{
        currentValue:this.currentPage
      }
    },
    watch:{
      currentPage:{
        handler:function (newValue, oldValue) {
          this.currentValue=newValue;
        }
      }
    },
    computed: {
      groupList:function(){ // 获取分页页码
        var len = this.page , temp = [], list = [], count = Math.floor(this.pagegroup / 2) ,center = this.currentValue;
        if( len <= this.pagegroup ){
          while(len--){ temp.push({text:this.page-len,val:this.page-len});};
          return temp;
        }
        while(len--){ temp.push(this.page - len);};
        var idx = temp.indexOf(center);
        (idx < count) && ( center = center + count - idx);
        (this.currentValue > this.page - count) && ( center = this.page - count);
        temp = temp.splice(center - count -1, this.pagegroup);
        do {
          var t = temp.shift();
          list.push({
            text: t,
            val: t
          });
        }while(temp.length);
        if( this.page > this.pagegroup ){
          (this.currentValue > count + 1) && list.unshift({ text:'...',val: list[0].val - 1 });
          (this.currentValue < this.page - count) && list.push({ text:'...',val: list[list.length - 1].val + 1 });
        }
        return list;
      }
    },
    methods: {
      setCurrent: function(idx) {
        if( this.currentValue != idx && idx > 0 && idx < this.page + 1) {
          this.currentValue = idx;
          this.$parent.pagechange(idx);
        }
      }
    }
    }
</script>

<style scoped>
  @import './pagination.css';
  .pagination {margin: 10px 0;}
  .pagination > li > a, .pagination > li > span{padding:3px 15px;margin-left:0px;}/* z-index:0时margin-left要设置为0，默认为-1会遮住选中的页2018/5/11 */
  .pagination li a,.pagination li span{border:none;}
  .pagination > li > a:hover, .pagination > li > span:hover, .pagination > li > a:focus, .pagination > li > span:focus{border-radius: 45%;}
  .pagination > .active > a, .pagination > .active > span, .pagination > .active > a:hover, .pagination > .active > span:hover, .pagination > .active > a:focus, .pagination > .active > span:focus{
    border-radius: 45%;z-index:0;
  }
</style>
