import { createStore } from "vuex"

const axios = require('axios');

const instance = axios.create({
    baseURL : 'http://localhost:3000/user',
});

const store = createStore({
    state : {
        status : '',
        user : {
            result : [],
            token : '',
        },
    },
    mutations : {
        setStatus : function (state, status) {
            state.status = status;
        },
        logUser : function (state, user) {
            state.user = user;
        }
    },
    actions : {
        login : ({commit}, userInfos) => {
            commit('setStatus', 'loading');
            return new Promise((resolve, reject) => {
            instance.post('/login', userInfos)
                .then(function (response) {
                    commit('setStatus', '');
                    commit('logUser', response.data);
                    resolve(response);
                })
                .catch(function (erreur) {
                    commit('setStatus', 'error_login');
                    reject(erreur);
                });
        });
        },
        createAccount : ({commit}, userInfos) => {
            return new Promise((resolve, reject) => {
                commit;
                instance.post('/create', userInfos)
                    .then(function (response) {
                        commit('setStatus', 'created');
                        resolve(response);
                    })
                    .catch(function (erreur) {
                        commit('setStatus', 'error_create');
                        reject(erreur);
                    });
            });
        },

    }
})

export default store;