import CustomImage from './custom-image.vue';
import CustomToast from './custom-toast.vue';
import CustomModalbox from './custom-modalbox.vue';

export default {
    install(Vue: any) {
        // CustomImage
        Vue.component('CustomImage', CustomImage);

        // CustomToast
        Vue.prototype.$toast = ({ message = '自定义toast', duration = 2000 }) => {
            const ToastConstructor = Vue.extend(CustomToast);
            const ToastInstance = new ToastConstructor({ data: { message, duration } }).$mount();
            document.body.appendChild(ToastInstance.$el);
            ToastInstance.isShow = true;
            // 销毁
            setTimeout(() => {
                ToastInstance.isShow = false;
            }, duration);
        };

        // CustomModalbox
        Vue.prototype.$modalbox = (data: object) => {
            const ConfirmConstructor = Vue.extend(CustomModalbox);
            const ConfirmInstance = new ConfirmConstructor({ data }).$mount();
            document.body.appendChild(ConfirmInstance.$el);
            return ConfirmInstance.callback();
        };
    }
};
