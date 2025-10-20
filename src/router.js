import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue'; // Buat file Home.vue baru
import TanamanUlang from './pages/TanamanUlang.vue';
import TanamanKonversi from './pages/TanamanKonversi.vue';
import  Pemupukan from './pages/Pemupukan.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/tanaman-ulang',
    name: 'TanamanUlang',
    component: TanamanUlang
  },
  {
    path: '/tanaman-konversi',
    name: 'TanamanKonversi',
    component: TanamanKonversi
  },
  {
    path: '/pemupukan',
    name: 'Pemupukan',
    component: Pemupukan
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;