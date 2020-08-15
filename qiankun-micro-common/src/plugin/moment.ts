import Vue from 'vue';
import * as moment from 'moment';

// 全局挂载moment
Vue.prototype.$moment = moment;

export default moment;
