<template>
  <div class="app-wrapper">
    <m-header></m-header>
    <!--<sidebar class="sidebar-container"></sidebar>-->
    <div class="main-container">
      <app-main></app-main>
    </div>
  </div>
</template>

<script>
import MHeader from 'components/layout/m-header/m-header'
import sidebar from 'components/layout/side-bar/side-bar'
import AppMain from 'components/layout/app-main/app-main'

export default {
  name: 'Layout',
  components: {
    MHeader,
    sidebar,
    AppMain
  },
  methods: {}
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
</style>
