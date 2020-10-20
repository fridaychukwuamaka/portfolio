import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import { routes } from './routes';

Vue.config.productionTip = false
Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  router,
  render: function (h) { return h(App) },
}).$mount('#app')
