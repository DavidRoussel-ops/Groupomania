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
    path: '/id',
    name: 'Groupomania',
    component: groupomania,
    props : true
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router



