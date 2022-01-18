import news from "@/API/news"

const state = () => ({
    sources: null,
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
            commit("GET_SOURCES", response.data.sources)
            return Promise.resolve(response)
        } catch (err) {
            return Promise.reject(err)
        }

    },
    async getHeadlines({ commit }, params) {

        try {
            const response = await news.getHeadlines(params)

            commit("GET_HEADLINES", response.data.articles)
            return Promise.resolve(response)
        } catch (err) {
            return Promise.reject(err)
        }

    },

    async getFeatured({ commit }, params) {

        try {
            const response = await news.getHeadlines(params)
            console.log(response)
            commit("GET_FEATURED", response.data.articles)
            return Promise.resolve(response)
        } catch (err) {
            return Promise.reject(err)
        }

    },
    async getFeatured({ commit }, params) {

        try {
            const response = await news.getHeadlines(params)
            
            commit("GET_FEATURED", response.data.articles)
            return Promise.resolve(response)
        } catch (err) {
            return Promise.reject(err)
        }

    },

    async getEverything({ commit }, params = {}) {
        try {
            const response = await news.getEverything(params)
            console.log(response)
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