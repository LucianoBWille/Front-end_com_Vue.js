import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Inicial from "./components/Inicial.vue"
import Usuarios from "./components/Usuarios.vue"
import NovoUsuario from "./components/NovoUsuario.vue"

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {path: '/', component:Inicial},
    {
      path: '/usuarios', 
      component:Usuarios,
      children: [
        {path:'novo', component:NovoUsuario}
      ]
    },
  ]
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
