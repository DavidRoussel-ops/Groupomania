import { createStore } from "vuex"

const axios = require('axios');

const instance = axios.create({
    baseURL : 'http://localhost:3000/user',
});

/*let user = localStorage.getItem('user');
if (!user) {
    user = {
        userId : '',
        token : '',
    }
} else {
    try {
        user = JSON.parse(user);
        instance.defaults.headers.common['Authorization'] = user.token;
    } catch (ex) {
        user = {
            userId : '',
            token : '',
        };
    }

}*/

const store = createStore({
    state : {
        status : '',
        user : {
            userId : '',
            token : '',
        },
    },
    mutations : {
        setStatus : function (state, status) {
            state.status = status;
        },
        logUser : function (state, user) {
            instance.defaults.headers.common['Authorization'] = user.token;
            //localStorage.setItem('user', JSON.stringify(user.userId[0]));
            state.user = user;
        },
        userInfos: function (state, userInfos) {
            state.userInfos = userInfos;
        },
        /*userLocal : function () {
            localStorage.getItem(user)
        },*/
        logout : function (state) {
            state.user = {
                userId : '',
                token : '',
            }
            localStorage.removeItem('user');
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
                commit('setStatus', 'loading');
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
        showUserById: ({ commit}) => {
            instance.get('/',{
                headers : {
                    'Content-Type' : 'application/json',
                    Authorization : `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MzQ3Mjc0MTcsImV4cCI6MTYzNDgxMzgxN30.piXS6uwPQ6uSLSZ3Xdh6nCeqMLxJ-ThtIlVoDujflAM`,
                }
            })
                .then(function () {
                    //commit('setStatus', 'userInfos');
                    //this.user = response.data;
                    commit('userInfos');
                })
                .catch(function (erreur) {
                    console.log(erreur);
                });
        }
    }
})

export default store;