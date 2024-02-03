import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    { 
        path: '/',
        component: () => import('../pages/Home.vue'),
    },
    { 
        path: '/wishlist',
        component: () => import('../pages/Wishlist.vue'),
    },
    { 
        path: '/id',
        component: () => import('../pages/store/IndividualProduct.vue'),
    },
    { 
        path: '/profile',
        component: () => import('../pages/user/userPage/Profile.vue'),
    },
    { 
        path: '/contact',
        component: () => import('../pages/user/forms/Contact.vue'),
    },
    { 
        path: '/login',
        component: () => import('../pages/user/forms/Login.vue'),
    },
    { 
        path: '/signup',
        component: () => import('../pages/user/forms/Signup.vue'),
    },
    { 
        path: '/shop',
        component: () => import('../pages/store/Shop.vue'),
    },
    {
        path: '/:pathMatch(.*)*',
        component: () => import('../shared/NotFound404.vue'),
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router