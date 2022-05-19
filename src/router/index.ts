import VueRouter from 'vue-router'
import { PAGES } from '@/utils/guard'

const routes = [
  {
    path: '/',
    component: () => import('../components/MainLayout.vue')
  },
  {
    path: PAGES.CREATE_TODO,
    component: () => import('../components/CreateTodoList.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
