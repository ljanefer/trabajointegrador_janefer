import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import clientes from '../views/Clientes.vue'
import Productos from '../views/Productos.vue'
import Producto from '../views/Producto.vue'
import info from '../views/info.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '/',
    component: HomeView
  },
  {
    path: '/info',
    name: 'info',
    component: info
  },
  {
    path: '/producto/:id',
    name: 'Producto',
    props: true,
    component: Producto
  },

  {
    path: '/clientes',
    name: 'clientes',
    component: clientes
  },
  {
    path: '/productos',
    name: 'productos',
    component: Productos
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
