// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
/* eslint-disable no-new */

// 引入四个页面
import Home from './Home.vue'
import ShoppingCart from './ShoppingCart.vue'
import Cart from './Cart.vue'
import Me from './Me.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  linkActiveClass: 'active',
  routes: [
    {name: 'Home', path: '/', component: Home},
    {name: 'Categories', path: '/categories', component: Cart},
    {name: 'ShoppingCart', path: '/shopping-cart', component: ShoppingCart},
    {name: 'Me', path: '/me', component: Me}
  ]

})

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
