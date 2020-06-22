import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
});

new Vue({
  el: '#App',
  router,
  render: h => h(App),
}).$mount('#app')
