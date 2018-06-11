<template>
  <div id="app">
    <transition :name="transitionName">
      <keep-alive include="index">
        <router-view class="child-view"></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      //      transitionName: 'slide-left'
      transitionName: 'fade'
    }
  },
  watch: {
    //    '$route'(to, from) {
    //      if (to.path === '/index') {
    //        this.transitionName = 'slide-right'
    //      } else {
    //        this.transitionName = 'slide-left'
    //      }
    //    }
  }
}
</script>

<style>
.child-view {
  /*position: absolute;*/
  /*left: 0;*/
  /*top: 0;*/
  /*width: 100%;*/
  /*height: 100%;*/
  transition: all .5s cubic-bezier(.55, 0, .1, 1);
}
/*.slide-left-enter, .slide-right-leave-active {*/
/*opacity: 0;*/
/*transform: translate(100%, 0);*/
/*}*/
/*.slide-left-leave-active, .slide-right-enter {*/
/*opacity: 0;*/
/*transform: translate(-100%, 0);*/
/*}*/
.fade-enter, .fade-leave-active {
  opacity: 0;
  /*transform: translate(100%, 0);*/
}
</style>
