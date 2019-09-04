import Vue from 'vue'
import Router from 'vue-router'
import baseLayout from '@/layout/baseLayout.vue'
import userList from '@/modules/authority/user/userList.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'baseLayout',
      component: baseLayout,
      redirect: '/authority/user/list',
      children: [
        {path: '/authority/user/list', component: userList}
      ]
    }
  ]
})
