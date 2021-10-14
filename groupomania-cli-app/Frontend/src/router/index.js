import { createRouter , createWebHashHistory } from 'vue-router'
import Home from '../views/Home';
import groupomania from "@/views/groupomania";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/groupomania',
    name: 'Groupomania',
    component: groupomania
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router



