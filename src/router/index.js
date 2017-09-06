import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/views/Hello'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
  ]
})

router.beforeEach((to, from, next) => {
  next()
})

export default router
