
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: null
  },
  mutations: {
    SET_CURRENT_USER(state, data) {
      state.currentUser = data
    }
  },
  actions: {
    Register({ commit }, data) {
      return new Promise((resolve, reject) => {
        localStorage.setItem(data.userName, JSON.stringify(data))
        localStorage.setItem('currentUser', JSON.stringify(data))
        commit("SET_CURRENT_USER", data)
        resolve(true)
      })
    },

    login({ commit }, data) {
      return new Promise((resolve, reject) => {
        const user=JSON.parse(localStorage.getItem(data.userName))
        console.log(user,data)
        if(!user || user.password!=data.password){
          return reject("Username or Password incorrect")
        }
        localStorage.setItem('currentUser', JSON.stringify(user))
        commit("SET_CURRENT_USER", user)
        resolve(true)
      })
    },

    logout({commit}){
      return new Promise((resolve,reject)=>{
        localStorage.removeItem("currentUser")
        commit("SET_CURRENT_USER", null)
        return resolve(true)
      })
    },

    getCurrentUser({ commit }) {
      return new Promise((resolve, reject) => {
        if (!localStorage.getItem('currentUser')) {
          return resolve(true)
        }
        const user = JSON.parse(localStorage.getItem('currentUser'))
        console.log(user)
        commit("SET_CURRENT_USER", user)
        return resolve(true)
      })
    }
  },
  getters: {
    currentUser(state) {
      return state.currentUser
    }
  },
  modules: {
  }
})
