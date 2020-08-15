const trimStr = (str: string): string => {
    // 去除空白
    if (!str) return '';
    str = str.replace(/^\s+|\s+$/g, '');
    return str;
};

export default trimStr;
