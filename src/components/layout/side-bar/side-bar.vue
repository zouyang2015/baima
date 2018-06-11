<template>
  <el-scrollbar wrapClass="scrollbar-wrapper">
    <div class="side-bar">
      <div style="background: red" @click="go1">详情</div>
      <div style="background: #03DCFA" @click="go2">来文列表</div>
      <div style="background: #0091fc" @click="go3">来文详情</div>
      <div style="background: #03DCFA" @click="go4">发文列表</div>
      <div style="background: #0091fc" @click="go5">发文详情</div>
      <div style="background: #ffff00" @click="go6">组内成果</div>
      <div style="background: #00ff00" @click="go7">任务下发</div>
      1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1111
    </div>
  </el-scrollbar>
</template>

<script>
export default {
  name: 'sideBar',
  data() {
    return {

    }
  },
  methods: {
    go1() {
      this.$router.push('/index')
    },
    go2() {
      this.$router.push('/entry-info/all')
    },
    go3() {
      this.$router.push('/entry-info/detail')
    },
    go4() {
      this.$router.push('/send-info/all')
    },
    go5() {
      this.$router.push('/send-info/detail')
    },
    go6() {
      this.$router.push('/member/index')
    },
    go7() {
      this.$router.push('/task-release/index')
    },
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
</style>
