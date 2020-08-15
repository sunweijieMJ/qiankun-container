import storage from '@/utils/storage';

// 判断浏览器及终端
const os = (u: string = window?.navigator.userAgent): object => {
    return {
        isMobile: !!u.match(/AppleWebKit.*Mobile/i) || !!u.match(/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/),
        isWechat: !!u.match(/MicroMessenger/i),
        isQQ: !!u.match(/QQ/i) && !u.match(/MQQBrowser/i),
        isIos: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
        isAndroid: !!u.match(/(Android);?[\s/]+([\d.]+)?/),
        isiPhone: !!u.match(/(iPhone\sOS)\s([\d_]+)/),
        isSafari: !!u.match(/Safari/),
        isFirefox: !!u.match(/Firefox/),
        isOpera: !!u.match(/Opera/),
        isChrome: u.match(/Chrome/i) !== null && u.match(/Version\/\d+\.\d+(\.\d+)?\sChrome\//i) === null,
        isDeskTop: ((): boolean => {
            const AgentList: Array<string> = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod'];
            return !AgentList.some(item => u.includes(item));
        })()
    };
};

// 时间补零
const fillZero = (n: number): string => n < 10 ? '0' + n : '' + n;

// 图片转换
const handleImage = (url: string, mode: Array<string> = []): string => {
    if (!url) return url;
    if (Object.prototype.toString.call(url) !== '[object String]') {
        return url;
    }

    if (!url.includes('?x-oss-process=image')) {
        url += '?x-oss-process=image';
    }
    if (mode.length) {
        mode.map(item => {
            url += `/${item}`;
        });
    }

    // 支持webp
    if (storage('localstorage').get('isWebp') === 'true') {
        url = url + '/format,webp';
    } else {
        url = url + '/quality,Q_80';
    }

    return url;
};

const genActiveRule = (routerPrefix: string) => {
    return (location: Location) => location.pathname.startsWith(routerPrefix);
};

export {
    os, fillZero, handleImage, genActiveRule
};
