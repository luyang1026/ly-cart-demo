import Vue from 'vue'
import Router from 'vue-router'

import ProductList from '@/views/ProductList'
import Cart from '@/views/Cart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/product-list',
      name: 'product-list',
      component: ProductList
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    { path: '/', redirect: '/product-list' }
  ]
})
