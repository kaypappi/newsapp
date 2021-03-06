import news from "@/API/news"

const state = () => ({
    sources: null,
    headlines:null,
    featured:null,
})

const mutations = {
    GET_SOURCES(state, data) {

        state.sources = data

    },
    GET_HEADLINES(state, data) {

        state.headlines = data

    },
    GET_FEATURED(state, data) {

        state.featured = data

    }
}

const getters = {

}


const actions = {

    async getSources({ commit }) {

        try {
            const response = await news.getSources()
            commit("GET_SOURCES", response.data.sources.slice(0,4))
            return Promise.resolve(response)
        } catch (err) {
            return Promise.reject(err)
        }

    },
    async getHeadlines({ commit }, params) {

        try {
            const response = await news.getHeadlines(params)

            commit("GET_HEADLINES", response.data.articles.slice(0,6))
            return Promise.resolve(response)
        } catch (err) {
            return Promise.reject(err)
        }

    },

    async getFeatured({ commit }, params) {

        try {
            const response = await news.getHeadlines(params)
           
            commit("GET_FEATURED", response.data.articles.slice(0,3))
            return Promise.resolve(response)
        } catch (err) {
            return Promise.reject(err)
        }

    },

    async getEverything({ commit }, params = {}) {
        try {
            const response = await news.getEverything(params)
          
            commit("GET_FEATURED", response.data.articles)
            return Promise.resolve(response)
        } catch (err) {
            return Promise.reject(err)
        }

    }

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}