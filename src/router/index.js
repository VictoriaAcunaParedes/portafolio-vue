import { createRouter, createWebHistory } from 'vue-router'

import Hero from '@/views/Hero.vue'
import About from '@/views/About.vue'
import Projects from '@/views/Projects.vue'
import Contact from '@/views/Contact.vue'


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
        path:'/',
        name: 'home',
        component: Hero
        },
        {
        path:'/about',
        name: 'about',
        component: About
        },
        {
        path:'/projects',
        name: 'projects',
        component: Projects
        },
        {
        path:'/contact',
        name: 'contact',
        component: Contact
        },
        
    ],

    scrollBehavior() {
        return { top: 0 }
    }
})

export default router
