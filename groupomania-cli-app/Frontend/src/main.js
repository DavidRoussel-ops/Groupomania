import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';

createApp(App).use(router).use(store).mount('#app')

/*import { createApp } from 'vue'
import { createRouter , createWebHashHistory } from 'vue-router'
import App from './App.vue'
import Create from './components/AddUser'
import Edit from './components/EditUser'
import Index from './components/UserList'

createApp.use(createRouter)

const routes = [
    {
        name: 'Create',
        path: '/create',
        component: Create
    },
    {
        name: 'Edit',
        path: '/edit/:id',
        component: Edit
    },
    {
        name: 'Index',
        path: '/',
        component: Index
    },
];

const router = new createRouter({ mode : createWebHashHistory, routes : routes })

new createApp({
    router,
    render : h => h(App),
}).mount('#app');*/
