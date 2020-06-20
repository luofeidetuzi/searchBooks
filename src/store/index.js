import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    collection: []
  },
  mutations: {
    add (state, info) {
      state.collection.push(info)
    },
    delete (state, info) {
      const index = state.collection.findIndex(e => {
        return JSON.stringify(info) === JSON.stringify(e)
      })
      state.collection.splice(index, 1)
    }
  }
})
export default store
