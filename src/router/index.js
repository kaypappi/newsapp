import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '@/layout/main'
import head from "@/components/Navigation/header"
import Dashboard from "@/views/Dashboard"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Main,
    children:[
      {
        path: '/',
        name: 'home',
        component: Dashboard
      },
    ]
  },
  {
    path: '/head',
    name: 'head',
    component: head
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
