/**
 * 集成Abstract
 * @date 2020-5-29
 */
import Abstract from '../abstract';
import {
    AuthLoginType
} from '../types';

class Basic extends Abstract {
    /**
     * 登录
     * @param {string} account 用户
     * @param {string} password 密码
     * @param {string} captchaCode 图形码
     * @param {string} captchaCodeToken 图形码token
     */
    authLogin(data: AuthLoginType) {
        return this.postReq({ url: 'Basic.AuthLogin', data });
    }
}

// 单列模式返回对象
let instance;
export default (() => {
    if (instance) return instance;
    instance = new Basic();
    return instance;
})();
