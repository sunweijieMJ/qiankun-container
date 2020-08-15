import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);
// 解决两次访问相同路由地址报错
const VueRouterPush: any = VueRouter.prototype.push;
VueRouter.prototype.push = function push(to: RouteConfig) {
    return VueRouterPush.call(this, to).catch((err: Error) => err);
};

const routes: Array<RouteConfig> = [
    {
        path: '/',
        redirect: '/common'
    },
    {
        path: '/common',
        name: 'common',
        component: () => import('@/views/Home.vue'),
        meta: {
            title: '子应用1'
        }
    }
];

export default routes;
