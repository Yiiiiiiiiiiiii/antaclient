import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from "./login.js"
import Register from "./register.js"
import Register2 from "./register2.js"
import ucenter from "./ucenter.js"
import adminlogin from "./adminlogin.js"
import Index from '../views/Index.vue'
import Cultrue from '../views/Cultrue.vue'
import Productsdetail from '../views/Productsdetail.vue'
import Car from '../views/Car.vue'
Vue.use(VueRouter)

const routes = [
  
  Login,Register,Register2,ucenter,adminlogin,
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/cultrue',
    name: 'cultrue',
    component: Cultrue
  },
  {
    path: '/allshoes',
    name: 'allshoes',
    component: () => import('@/views/allShoes.vue'),
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('@/views/admin.vue'),
    
  },
  {
    path: '/revise',
    name: 'revise',
    component: () => import('@/views/revise.vue'),
  },
  {
    path: '/addinfo',
    name: 'addinfo',
    component: () => import('@/views/addinfo.vue'),
  },
  {
    path: '/man',
    name: 'man',
    component: () => import('@/views/Man.vue'),
  },
  {
    path: '/productsdetail',
    name: 'productsdetail',
    component: Productsdetail
  },
  {
    path: '/car',
    name: 'car',
    component: Car
  }
]

const router = new VueRouter({
  routes
})

export default router
