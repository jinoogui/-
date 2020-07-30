import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../components/index.vue'
// import sale from '../components/sale.vue'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'index',
    component: index,
    // children:[
    //   {path:'sale',redirect:'/sale'}
    // ]
  }
]

const router = new VueRouter({
  routes
})

export default router
