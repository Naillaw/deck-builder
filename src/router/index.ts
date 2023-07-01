import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import CardView from '@/views/CardView.vue';
import DeckCreationView from "@/views/DeckCreationView.vue";

const routes = [
  { path: '/', component: HomeView },
  { path: '/card/:id(\\d+)', component: CardView },
  { path: '/deck/add', component: DeckCreationView },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
