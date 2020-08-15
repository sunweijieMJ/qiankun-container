import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

import Layout from '@/layout/index.vue';

Vue.use(VueRouter);
// 解决两次访问相同路由地址报错
const VueRouterPush: any = VueRouter.prototype.push;
VueRouter.prototype.push = function push(to: RouteConfig) {
    return VueRouterPush.call(this, to).catch((err: Error) => err);
};

const routes: Array<RouteConfig> = [
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/Login.vue'),
        meta: {
            title: '登录'
        }
    },
    {
        path: '/403',
        name: 'Forbidden',
        component: () => import('@/views/403.vue'),
        meta: {
            title: '暂无权限'
        }
    },
    {
        path: '/503',
        name: 'ServerError',
        component: () => import('@/views/503.vue'),
        meta: {
            title: '服务不可用'
        }
    },
    {
        path: '*',
        name: 'Layout',
        component: Layout,
        meta: {
            title: '子应用'
        }
    }
];

const createRouter = () => new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior() {
        return { x: 0, y: 0 };
    }
});

export default createRouter();
