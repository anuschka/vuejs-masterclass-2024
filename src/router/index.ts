
import { createRouter, createWebHistory } from "vue-router";


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path: '/',
            name: 'home',
            component: () => import('@/views/HomeView.vue') // dynamic import
        },
        {
            path: '/projects',
            name: 'projects',
            component: () => import('@/views/ProjectsView.vue')
        },
        {
            path: '/projects/:id', //dynamic route
            name: 'single-project',
            component: () => import('@/views/SingleProject.vue')
        }
    ]
})

export default router