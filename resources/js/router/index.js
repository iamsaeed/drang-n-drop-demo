import { createRouter, createWebHashHistory } from 'vue-router'
import { useAuthStore } from "../stores/authStore";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: () => import('../layouts/AuthLayout.vue'), children : [
        { path: '', name: 'login', component: () => import('../views/Auth/Login.vue') },
        { path: '/register', name: 'register', component: () => import('../views/Auth/Register.vue') },
    ], meta : { auth : false }},

    { path: '/', component: () => import('../layouts/NewLayout.vue'), children : [
        { path: '/dashboard', name: 'dashboard', component: () => import('../views/Dashboard.vue') },
    ], meta : { auth : true }},
  ]
})

router.beforeEach((to, from) => {
    const auth = useAuthStore();

    if (to.meta.auth && !auth.token) {
        return {
            path: '/',
        }
    }

    if (!to.meta.auth && auth.token) {
        return {
            path: '/dashboard',
        }
    }

})

export default router
