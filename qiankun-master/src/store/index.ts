import Vue from 'vue';
import Vuex from 'vuex';
import basic from './modules/basic';

Vue.use(Vuex);

const store: any = new Vuex.Store({
    modules: {
        basic
    }
});
export default store;
