/** 重置message，防止重复点击重复弹出message弹框 */
import { Message } from 'element-ui';
let messageInstance: any = null;
const customMessage: any = (options: any) => {
    if (messageInstance) {
        messageInstance.close();
    }
    messageInstance = Message(options);
};
['error', 'success', 'info', 'warning'].forEach(type => {
    customMessage[type] = (options: any) => {
        if (typeof options === 'string') {
            options = {
                message: options
            };
        }
        options.type = type;
        return customMessage(options);
    };
});
export const message = customMessage;
