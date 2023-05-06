import {createRouter, createWebHistory} from 'vue-router'
import vCart from '../components/v-cart.vue'
import vCatalog from '../components/v-catalog.vue'

const routes = [
    {
        path: '/',
        name: 'catalog',
        component: vCatalog
    },

    {
        path: '/cart',
        name: 'cart',
        component: vCart,
        props: true,
    }

];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
