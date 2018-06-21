import $ from 'jquery'
import Vue from 'vue'
export default {
  directive() {
    Vue.directive('back-top', {
      inserted: function(el){
        el.addEventListener('click', function(){
          $('html').animate({ scrollTop: 0 }, 300);
        })
      }
    })
  }
}

