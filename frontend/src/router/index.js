import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import DetailUser from '@/components/DetailUser'

Vue.use(Router)

export default new Router({
  model: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/:id',
      name: 'DetailUser',
      component: DetailUser
    }
  ]
})
