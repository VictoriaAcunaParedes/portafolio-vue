import { createRouter, createWebHistory } from 'vue-router'

import HeroView from '@/views/HeroView.vue'
import AboutView from '@/views/AboutView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import ContactView from '@/views/ContactView.vue'


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
        path:'/',
        name: 'home',
        component: HeroView
        },
        {
        path:'/about',
        name: 'about',
        component: AboutView
        },
        {
        path:'/projects',
        name: 'projects',
        component: ProjectsView
        },
        {
        path:'/contact',
        name: 'contact',
        component: ContactView
        },
        
    ],

    scrollBehavior() {
        return { top: 0 }
    }
})

export default router
