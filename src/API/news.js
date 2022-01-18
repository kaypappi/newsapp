import axios from "axios";

export default {
    getSources() {
        return new Promise((resolve, reject) => {
            axios
                .get(`top-headlines/sources`)
                .then((response) => {
                    resolve(response);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    },
    getHeadlines(params) {
        return new Promise((resolve, reject) => {
            axios
                .get(`top-headlines`,{params})
                .then((response) => {
                    resolve(response);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    },
    getEverything(params={}) {
        return new Promise((resolve, reject) => {
            axios
                .get(`everything`,{params})
                .then((response) => {
                    resolve(response);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    },
}