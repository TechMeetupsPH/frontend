import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import UserLogout from '@/components/UserLogout'
import Dashboard from '@/components/hboard'
import Dashboard from '@/components/Dashboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/user/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/user/logout',
      name: 'Logout',
      component: UserLogout
    },
    //handled by Laravel app, if path is login, http-redirect to be done to laravel app login:
    {
      path: '/user/login',
      name: 'Login',
      component: UserLogout
    }
  ]
})
