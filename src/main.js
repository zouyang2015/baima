// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import 'common/styles/index.scss'
import 'animate.css'

import i18n from './lang'

Vue.use(ElementUI, {
  size: 'medium', // set element-ui default size
  i18n: (key, value) => i18n.t(key, value)
})

import './permission' // permission control

Vue.config.productionTip = false

import store from './store'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})
