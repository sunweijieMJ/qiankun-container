import Vue, { DirectiveOptions } from 'vue';
import storage from '@/utils/storage';
import filters from '@/utils/filters';
import * as directives from '@/utils/directives/index';

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

// 探测是否支持webp
const canvas = document.createElement('canvas');
if (canvas.getContext && canvas.getContext('2d')) {
    try {
        const isWebp = canvas.toDataURL('image/webp').includes('data:image/webp');
        storage('localstorage').set('isWebp', isWebp);
    } catch (e) {
        console.error(e);
    }
}
