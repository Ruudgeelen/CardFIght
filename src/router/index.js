import { createRouter, createWebHistory } from 'vue-router'

import Homepage from '../views/Homepage.vue'
import Cards from '../views/Cards.vue'
import Settings from '../views/Settings.vue'
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/homepage'
        },
        {
            path: '/homepage',
            component: Homepage
        },
        {
            path: '/cards',
            component: Cards
        },
        {
            path: '/settings',
            component: Settings
        }
    ]
})

export default router