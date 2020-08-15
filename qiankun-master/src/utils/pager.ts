/**
 * 使用rxjs解决应用间通信问题
 * @date 2020-8-5
 */
import { Subject } from 'rxjs';

const pager = new Subject();

// 全局监听子应用消息
pager.subscribe((v: any) => {
    switch (v.name) {
        // 设置页面标题
        case 'routeChange':
            document.title = v.to.meta.title;
            break;
        default:
            break;
    }
});

export default pager;
