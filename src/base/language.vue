<template>
  <div class="language">
    <el-dropdown trigger="click" @command="handleSetLanguage">
      <span class="el-dropdown-link">
        {{$t('common.language')}}<i class="el-icon-caret-bottom el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="zh" :disabled="language==='zh'">中文</el-dropdown-item>
        <el-dropdown-item command="en" :disabled="language==='en'">English</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

    <!--<el-dropdown trigger="click" class='international' @command="handleSetLanguage">-->
      <!--<div>-->
        <!--<svg-icon class-name='international-icon' icon-class="language" />-->
      <!--</div>-->
      <!--<el-dropdown-menu slot="dropdown">-->
        <!--<el-dropdown-item command="zh" :disabled="language==='zh'">中文</el-dropdown-item>-->
        <!--<el-dropdown-item command="en" :disabled="language==='en'">English</el-dropdown-item>-->
      <!--</el-dropdown-menu>-->
    <!--</el-dropdown>-->
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'advert',
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'language'
    ])
  },
  methods: {
    handleSetLanguage(lang){
      this.$i18n.locale = lang
      this.$store.commit('SET_LANGUAGE', lang)
    }
  }
}

</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "common/styles/variable.scss";
@import "common/styles/element-ui.scss";
.language {
  position: fixed;
  top: 18px;
  right: 20px;
}
</style>
