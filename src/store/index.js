import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
  

const store = new Vuex.Store({
  state: {
    FavoritesBeers: [],
    FavoritesIds : []    
  },
  mutations: {
    newFav(state, beer) {
      state.FavoritesBeers.push(beer);
      state.FavoritesIds.push(beer.id);
    },  
  },
    getters: {
      FavoritesBeers: state => state.FavoritesBeers
    }

  ,
})

export default store;