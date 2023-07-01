import HomeView from '@/views/HomeView.vue'
import CardView from '@/views/CardView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: HomeView },
  { path: '/card/:id(\\d+)', component: CardView },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
