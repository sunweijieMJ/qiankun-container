let global = {
    // 正则表达式
    form: {
        rule: {
            requied: /\S/,
            illegal: /[`~!@#$%^&*()+<>?:"{},/;'[\]]|[·！#￥（——）：；“”‘、，|《。》？、【】[\]]/im,
            email: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]+$/i,
            password: /^[a-zA-Z0-9]{6,8}$/i,
            tel: /^1\d{10}$/,
            num: /^\d+$/i,
            filter: /^[\w\u4e00-\u9fa5]+$/i,
            phone: /^[2-9][0-9]{6,7}$/i,
            zone: /^0[0-9]{2,3}$/i,
            picCode: /^[a-zA-Z0-9]{6,6}$/i,
            smsCode: /^[0-9]{6,6}$/i,
            areaTel: /^((\+?86)|(\+?96)|(\+?06))?1\d{10}$/,
            passLength: /^[a-zA-Z0-9]{6,15}$/,
            cnen: /^[\u4e00-\u9fa5a-zA-Z]+$/i
        }
    },
    // 防抖白名单
    whitelist: []
};

export default global;

export function configOverride(obj: object): void {
    global = Object.assign(global, obj);
}
