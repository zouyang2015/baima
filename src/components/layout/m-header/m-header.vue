<template>
  <div class="m-header">
    <div class="people-wrapper">
      <div class="avatar"></div>
      <dl>
        <dt>张三</dt>
        <dd>103舰舰长</dd>
      </dl>
    </div>
    <div class="center-wrapper">
      <h1>蓝盾行动</h1>
      <ul>
        <li>课程编号：XXXXX</li>
        <li>课程名称：XXXXX</li>
      </ul>
    </div>
    <div class="time-wrapper">
      <ul>
        <li>天文时间：2018年5月18日 15:05:12</li>
        <li>作战时间：2012年3月27日 08:30:45</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'm-header',
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "src/common/styles/variable";

.m-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  background: $bg;
  color: $white;
  height: $headerHeight;
}
</style>
