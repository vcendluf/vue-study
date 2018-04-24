import Vue from 'vue'
import Router from 'vue-router'
// import Index from '@/components/Index'
import RandomPass from '@/components/RandomPass'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/randomPass',
      name: 'RandomPass',
      component: RandomPass
    }
  ]
})
