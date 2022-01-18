import Vue from 'vue'
import VueRouter from 'vue-router'
import store from "../store";
import Main from '@/layout/main'
import head from "@/components/Navigation/header"
import Dashboard from "@/views/Dashboard"
import Login from "@/views/Auth/Login"
import Register from "@/views/Auth/Register"
import Explore from "@/views/Explore"

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
    beforeEnter: (to, from, next) => {
      if (!store.getters["currentUser"]) {

      return  next();
      }
      return next({
        name: "home",
      });
     
    },
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    beforeEnter: (to, from, next) => {
      if (!store.getters["currentUser"]) {

       return next();
      }
      return next({
        name: "home",
      });
     
    },
  },
  {
    path: '/',
    component: Main,
    children:[
      {
        path: '/',
        name: 'home',
        component: Dashboard
      },
      {
        path: '/explore',
        name: 'explore',
        component: Explore
      },
    ],
    beforeEnter: (to, from, next) => {
      if (store.getters["currentUser"]) {

       return next();
      }
      return next({
        name: "login",
      });
     
    },
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
