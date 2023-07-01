import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import CardView from '@/views/CardView.vue';
import BinderView from "@/views/BinderView.vue";

const routes = [
  { path: '/', component: HomeView },
  { path: '/card/:id(\\d+)', component: CardView },
  { path: '/binder/:id(\\d+)', component: BinderView },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
