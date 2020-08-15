import Vue, { DirectiveOptions } from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import store from './store/vuex';
import routes from './router';
import { i18n } from './plugin';
import './public-path';

Vue.config.productionTip = false;

declare module 'vue/types/vue' {
    interface Vue {
        $moment: any;
        $modalbox: any;
    }
}
declare global {
    interface Window {
        env: any;
        axios: any;
        elementUi: any;
        moment: any;
        vue: any;
        vuex: any;
        vueI18n: any;
        vueRouter: any;
        vueClassComponent: any;
        vuePropertyDecorator: any;
        vuexModuleDecorators: any;
        xlsx: any;
        __POWERED_BY_QIANKUN__: any;
        __INJECTED_PUBLIC_PATH_BY_QIANKUN__: any;
    }
}

let router = null;
let instance: any = null;
const __qiankun__ = window.__POWERED_BY_QIANKUN__;

export async function bootstrap({ pager, storage, filters, directives, CustomComponent, basicState, basicStore }: any) {
    // 子应用全局挂载注册呼机
    Vue.prototype.$pager = pager;
    // 子应用全局挂载storage
    Vue.prototype.$storage = storage;
    // 注册全局过滤器
    for (const key in filters) {
        Vue.filter(key, (...args: Array<unknown>) => {
            return filters[key](...args);
        });
    }
    // 挂载全局指令
    Object.keys(directives).forEach(key => {
        Vue.directive(key, (directives as { [key: string]: DirectiveOptions })[key]);
    });
    // 注册主应用下发的组件
    Vue.use(CustomComponent);
}

export async function mount({ pager, basicState, basicStore, ROUTES, routePath }: any = {}) {
    router = new VueRouter({
        base: '/',
        mode: 'history',
        routes
    });
    router.afterEach((to) => {
        // 通知父应用路由改变
        pager.next({
            name: 'routeChange',
            to
        });
    });

    instance = new Vue({
        i18n,
        store,
        router,
        render: h => h(App)
    }).$mount('#app');
    // 注册主应用下发store
    store.registerModule('basic', basicStore);
    Object.assign(store.state, basicState);
}

export async function unmount() {
    instance.$destroy();
    instance = null;
    router = null;
    store.unregisterModule('basic');
}

// 单独开发环境
__qiankun__ || mount();
