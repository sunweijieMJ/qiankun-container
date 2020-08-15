import CustomImage from './custom-image.vue';
import CustomChart from './custom-chart.vue';
import CustomToast from './custom-toast.vue';
import CustomModalbox from './custom-modalbox.vue';
const components = [CustomImage, CustomChart];

const install = (Vue: any) => {
    components.forEach(component => {
        Vue.component(component.name, component);
    });

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
};

export default {
    install,
    CustomImage,
    CustomChart,
    CustomToast,
    CustomModalbox
};
