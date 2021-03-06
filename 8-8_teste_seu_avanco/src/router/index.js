import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/postagens',
    name: 'Postagens',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Lista.vue'),
    children: [
      {
        path: 'comentarios',
        component: () => import(/* webpackChunkName: "about" */ '../components/Comentarios.vue'),
      },
      {
        path: ':msg', 
        component: () => import(/* webpackChunkName: "about" */ '../components/Postagem.vue'),
        props:true
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
