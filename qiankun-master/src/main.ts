import axios from 'axios';
import elementUi from 'element-ui';
import moment from 'moment';
import Vue from 'vue';
import vuex from 'vuex';
import VueRouter from 'vue-router';
import VueI18n from 'vue-i18n';
import vueClassComponent from 'vue-class-component';
import * as vuePropertyDecorator from 'vue-property-decorator';
import * as vuexModuleDecorators from 'vuex-module-decorators';
import xlsx from 'xlsx';

import App from './App.vue';
import store from './store';
import router from './router';
import { i18n } from './plugin';
import CustomComponent from '@/components';
// 路由拦截注册
import './router/intercept';

Vue.config.productionTip = false;

Vue.use(CustomComponent);

// 类型声明
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
        microApps: any;
    }
}

// 公共依赖挂载
window.axios = axios;
window.elementUi = elementUi;
window.moment = moment;
window.vue = Vue;
window.vuex = vuex;
window.vueI18n = VueI18n;
window.vueRouter = VueRouter;
window.vueClassComponent = vueClassComponent;
window.vuePropertyDecorator = vuePropertyDecorator;
window.vuexModuleDecorators = vuexModuleDecorators;
window.xlsx = xlsx;

new Vue({
    i18n,
    store,
    router,
    render: h => h(App)
}).$mount('#container');
