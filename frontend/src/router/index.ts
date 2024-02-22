import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import home from '~/pages/home.vue';
import signIn from '~/pages/signIn.vue';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'home',
        component: home,
    },
    {
        path: '/auth',
        name: 'auth',
        component: signIn,
    },
    // Not found
    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: home,
    },
];

const router = createRouter({ history: createWebHistory(), routes });

router.beforeEach((to, from, next) => {
    if (import.meta.env.DEV) {
        console.log(`Navigating to: ${String(to.name)}\nParameters: ${JSON.stringify(to.query)}`);
    }
    to.meta.from = {
        name: from.name,
        params: from.params,
        query: from.query,
    };
    next();
});
export default router;
