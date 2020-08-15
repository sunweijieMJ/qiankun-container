import Vue from 'vue';
import VueI18n from 'vue-i18n';
import ElementLocale from 'element-ui/lib/locale';
import enElement from 'element-ui/lib/locale/lang/en';
import zhElement from 'element-ui/lib/locale/lang/zh-CN';
import storage from '@/utils/storage';
// 语言包
import enLocal from '@/locale/en';
import zhLocal from '@/locale/zh';

Vue.use(VueI18n);
if (!storage('localstorage').get('i18n')) {
    storage('localstorage').set('i18n', 'zh-CN');
}
const i18n = new VueI18n({
    locale: storage('localstorage').get('i18n'),
    messages: {
        'zh-CN': Object.assign({}, zhLocal, zhElement),
        en: Object.assign({}, enLocal, enElement)
    }
});
ElementLocale.i18n((key: string, value: string) => i18n.t(key, value));

export default i18n;
