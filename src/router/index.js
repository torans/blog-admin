import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/login/Login'
import Userinfo from '../components/userinfo/Userinfo'
import PostEdit from '../components/posts/Edit.vue'
import PostReview from '../components/posts/Review.vue'
import Taglists from '../components/tags/Lists.vue'
import iView from 'iview'
import 'iview/dist/styles/iview.css'

Vue.use(Router)
Vue.use(iView)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      meta: {
        'title': '后台管理系统'
      },
      component: Login
    },
    {
      path: '/userinfo',
      name: 'userinfo',
      meta: {
        'title': '后台管理系统'
      },
      component: Userinfo
    },
    {
      path: '/post',
      name: 'post',
      meta: {
        'title': '后台管理系统'
      },
      component: PostEdit
    },
    {
      path: '/review',
      name: 'review',
      meta: {
        'title': '后台管理系统'
      },
      component: PostReview
    },
    {
      path: '/tags',
      name: 'tags',
      meta: {
        'title': '后台管理系统'
      },
      component: Taglists
    }
  ]
})
