import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

// 框架页面
import Layout from 'components/layout/Layout'
// 主界面

export default new Router({
  routes: [
    {
      path: '/login',
      component: () => import('components/login/index'),
      hidden: true
    },
    {
      path: '/',
      component: Layout,
      redirect: '/index',
      name: 'Layout',
      hidden: true,
      children: [
        {
          path: 'index',
          component: () => import('components/home')
        }
      ]
    },
    {path: '*', redirect: '/404', hidden: true}
  ]
})
