/**
 * 集成Abstract
 * @date 2020-8-14
 */
import Abstract from '../abstract';
import {
    MicroApp
} from '../types';

class Common extends Abstract {
    /**
     * 子应用1
     */
    getMicroApp(params: MicroApp) {
        return this.getReq({ url: 'Common.MicroApp', params });
    }
}

// 单列模式返回对象
let instance;
export default (() => {
    if (instance) return instance;
    instance = new Common();
    return instance;
})();
