<template>
  <div class="advert">
    <div class="logo-text"><img src="../images/text-logo_text.png" alt=""></div>
    <div class="logo"><img src="../images/img-logo.png" alt=""></div>
    <p class="slogan">视频 • 加速 • 通道 • 企业级</p>
    <strong>本产品为专属加速应用<br>不支持中国大陆向海外的翻墙服务，感谢支持！</strong>
  </div>
</template>

<script>
export default {
  name: 'advert',
  data() {
    return {
    }
  },
  created() {
  }
}

</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "common/styles/variable.scss";
.advert {
  flex: 1;
  background: $orange;
  position: relative;
  color: $white;
  .logo-text {
    position: absolute;
    top: 15px;
    left: 20px;
  }
  .logo {
    position: absolute;
    top: 66px;
    left: 32px;
  }
  .slogan {
    position: absolute;
    top: 416px;
    width: 100%;
    font-size: 20px;
    text-align: center;
  }
  strong {
    position: absolute;
    bottom: 20px;
    width: 100%;
    font-size: 12px;
    text-align: center;
    line-height: 20px;
  }
}
</style>