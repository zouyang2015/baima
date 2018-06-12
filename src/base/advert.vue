<template>
  <div class="advert">
    <div class="logo-text"><img src="../images/text-logo_text.png" alt=""></div>
    <div class="logo"><img src="../images/img-logo.png" alt=""></div>
    <p class="slogan">{{$t('common.slogan')}}</p>
    <strong v-html="$t('common.introduction')"></strong>
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
    width: 100%;
    text-align: center;
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
    color: $gray_introduction;
  }
}
</style>
