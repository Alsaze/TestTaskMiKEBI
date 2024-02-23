import { createRouter, createWebHistory } from 'vue-router'
import Test from '@/pages/test.vue'

const routes = [
  {
    path: '/',
    component: Test,
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(),
})

export default router
