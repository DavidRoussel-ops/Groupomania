import { createStore } from "vuex"

const axios = require('axios');

const instance = axios.create({
    baseURL : 'http://localhost:3000/user',
});

const store = createStore({
    state : {
    },
    actions : {
        login : ({commit}, userInfos) => {
            commit;
            instance.get('/:id', userInfos)
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (erreur) {
                    console.log(erreur);
                });
        },
        createAccount : ({commit}, userInfos) => {
                commit;
                instance.post('/create', userInfos)
                    .then (function (response) {
                        console.log(response)
                    })
                    .catch (function (erreur) {
                        console.log(erreur)
                    });
        },

    }
})

export default store;