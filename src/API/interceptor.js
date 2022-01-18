import axios from "axios";
import store from "@/store"

axios.defaults.baseURL = "https://newsapi.org/v2/"

axios.interceptors.request.use((config) => {
    /* config.headers.post['Content-Type'] = "application/json"
    config.headers.post['AppVersion'] = '2.2.0|android' */
    config.headers.common[
        "Authorization"
    ] = `Bearer ${process.env.VUE_APP__APIKEY}`;
    return config
})

axios.interceptors.response.use((response) => {

    return response
}, (error) => {

    if(error.response.status >=400){
        store.dispatch('addToast', {variant:"error",message:error.response.data.message})
    }
    return Promise.reject(error)
});