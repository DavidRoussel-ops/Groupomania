import { createStore } from "vuex"

const axios = require('axios');

const instance = axios.create({
    baseURL : 'http://localhost:3000/groupomania'
});

const instanceLog = axios.create({
    baseURL : 'http://localhost:3000/groupomania/user'
})

const store = createStore({
    state : {

    },
    actions : {
        login : ({commit}, userInfos) => {
            return new Promise((resolve, reject) => {
                commit;
                instanceLog.get('/:id', userInfos)
                    .then (function (response) {
                        resolve(response);
                    })
                    .catch (function (erreur) {
                        reject(erreur);
                    });
            })
        },
        createCount : ({commit}, userInfos) => {
            return new Promise((resolve, reject) => {
                commit;
                instance.post('/user', userInfos)
                    .then (function (response) {
                        resolve(response);
                    })
                    .catch (function (erreur) {
                        reject(erreur);
                    });
            })
        }
    }
})

export default store;