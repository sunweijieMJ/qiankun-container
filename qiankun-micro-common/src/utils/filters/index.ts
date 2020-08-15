import trimStr from './trimStr';

interface FilterType {
    [key: string]: Function;
}

const filters: FilterType = {
    trimStr
};

// 导出在一个对象上
export default filters;
