/**
 * API 相关配置文件
 * API URL Dict api 字典
 */

interface UrlDictType {
    [key: string]: {
        [key: string]: string;
    };
}

const urlDict: UrlDictType = {
    Common: {
        MicroApp: 'test',
    }
};

const getUrl = (biz: string, UrlName: string): string => {
    try {
        const bizKeys = Object.keys(urlDict);
        if (bizKeys.indexOf(biz) < 0) {
            throw new Error('biz not in Dict');
        }
        let hostname = urlDict[biz][UrlName];
        if (!hostname) {
            throw new Error('url not in Dict');
        }
        if (hostname.substr(0, 1) === '/') {
            hostname = hostname.substr(1);
        }
        return hostname;
    } catch (err) {
        console.error(err);
        return '';
    }
};

export default getUrl;
