<template>
  <div class="sowing-wrap">
    <!--swiper添加swiper-no-swiping类,禁用手动滑动功能-->
    <swiper :options="swiperOption" class="swiper-no-swiping" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="imgSrc in sowingImagesData" :key="imgSrc">
          <img :src="imgSrc" alt="图片">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
    <!-- Optional controls -->
    <div class="swiper-button-prev" @click="prevButton()" slot="button-prev"></div>
    <div class="swiper-button-next" @click="nextButton()" slot="button-next"></div>
    <!--<div class="swiper-scrollbar"   slot="scrollbar"></div>-->
  </div>

</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
// import 'swiper/dist/css/swiper.css'
export default {
  name: 'SowingMap',
  data () {
    return {
      swiperOption: {
        // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
        // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        notNextTick: true,
        // swiper configs 所有的配置同swiper官方api配置
        autoplay: {
          disableOnInteraction: false
        },
        direction: 'horizontal',
        // 指针变为小手
        grabCursor: false,
        loop: true,
        setWrapperSize: true,
        autoHeight: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        scrollbar: '.swiper-scrollbar',
        mousewheelControl: true,
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
      sowingImagesData: [
        'http://p1.music.126.net/vyI6AqN4cNCLnQTathUSng==/109951163370560438.jpg',
        'http://p1.music.126.net/EL2-nhNUSkYoh6wt49fySA==/109951163324733383.jpg',
        'http://p1.music.126.net/J_Bkd7gaTwBvjj36nKdBdg==/109951163347026228.jpg',
        'http://p1.music.126.net/GEslr8WZjFye0cbjeal-7g==/109951163331654308.jpg',
        'http://p1.music.126.net/7fWvW9z07M9N1tRD3a2Dnw==/109951163366128323.jpg',
        'http://p1.music.126.net/WI6uvx7RvI_M7gbJQxdPHw==/109951163364579228.jpg',
        'http://p1.music.126.net/us8Gtfd0cxB0m4Kk6BQHZQ==/109951163364859245.jpg',
        'https://p1.music.126.net/QfbY_I7RojXCZ3ycFaXUSQ==/109951163369762973.jpg'
      ]
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted() {

  },
  methods: {
    prevButton () {
      this.$emit('sowingPrevAndNext', 'prevButton事件')
    },
    nextButton () {
      this.$emit('sowingPrevAndNext', 'nextButton事件')
    }
  },
  mounted () {
    // you can use current swiper instance object to do something(swiper methods)
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log('this is current swiper instance object', this.swiper)
    // this.swiper.slideTo(3, 1000, false)
  }
}
</script>

<style scoped>
  /*@import '../../static/swiper.css';*/
  .sowing-wrap {
    position: relative;
    width: 730px;
    float: left;
    /*z-index: 10;*/
  }
  .swiper-button-prev {
    left: -12%;
    top: 50%;
    width: 40px;
    height: 64px;
    background: url('../assets/images/sowing_button.png') 0px -358px no-repeat;
    outline-color: rgba(0,0,0,0);
  }
  .swiper-button-next {
    right: -48%;
    top: 50%;
    width: 42px;
    height: 64px;
    background: url('../assets/images/sowing_button.png') 0px -504px no-repeat;
    outline-color: rgba(0,0,0,0);
  }
  .swiper-button-prev:hover {
    background: url('../assets/images/sowing_button.png') 0px -427px black no-repeat;
  }
  .swiper-button-next:hover {
    background: url('../assets/images/sowing_button.png') 0px -574px black no-repeat;
  }
  .sowing-wrap img {
    vertical-align: middle;
  }
</style>
