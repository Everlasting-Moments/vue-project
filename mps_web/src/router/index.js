import { createRouter, createWebHashHistory } from 'vue-router'
import login from '../views/account/login.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: ()=>import('../views/account/login.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
