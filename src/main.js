import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue,IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import VueResource from 'vue-resource'
import VueRouter from 'vue-router';
import { routes } from './routes'

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

const router = new VueRouter({
  //history remove o hash da url
  mode: 'history',
  routes: routes
})

new Vue({
  el: '#app',
  router:router,
  render: h => h(App)
})
