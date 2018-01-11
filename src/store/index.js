import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    cart: []
  },
  getters: {
    cartCount: state => state.cart.length,
    badgeShow: state => !!state.cart.length
  },
  mutations: {
    addToChart (state, item) {
      let cart = state.cart
      for (let i of cart) {
        if (item.id === i.id) {
          return
        }
      }
      state.cart.push(item)
    },
    deleteItem (state, id) {
      let cart = state.cart
      for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === id) {
          cart.splice(i, 1)
        }
      }
    }
  }
})
