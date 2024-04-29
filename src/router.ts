import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/job/analytics',
    component: () => import('./pages/job/Analytics.vue')
  },
  {
    path: '/job/contracts',
    component: () => import('./pages/job/Contracts.vue')
  },
  {
    path: '/job/import',
    component: () => import('./pages/job/Import.vue')
  },
  {
    path: '/settings',
    component: () => import('./pages/Settings.vue')
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router