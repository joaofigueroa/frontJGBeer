import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
  

const store = new Vuex.Store({
  state: {
    FavoritesBeers: [],    
  },
  mutations: {
    change(state, beer) {
      state.FavoritesBeers.push(beer);
    },
  },
    getters: {
      FavoritesBeers: state => state.FavoritesBeers
    }

  ,
})

export default store;