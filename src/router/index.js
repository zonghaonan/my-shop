import Vue from 'vue'
import VueRouter from 'vue-router'
const Home=()=>import('views/home/Home.vue')
const Category=()=>import('views/category/Category.vue')
const Cart=()=>import('views/cart/Cart.vue')
const Person=()=>import('views/person/Person.vue')
const Detail=()=>import('views/detail/Detail.vue')
const Communication=()=>import('components/communication/Communication.vue')
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/person',
    component: Person
  },
  {
    path: '/detail/:iid',
    name:'Detail',
    component: Detail
  },
  {
    path: '/communication',
    component: Communication
  },
]

const router = new VueRouter({
  routes,
  mode: "history",
})

export default router
