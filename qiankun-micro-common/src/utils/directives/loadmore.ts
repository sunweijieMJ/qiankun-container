import { DirectiveOptions } from 'vue';

export const loadmore: DirectiveOptions = {
    bind(el, binding) {
        // 获取element-ui定义好的scroll盒子
        const SELECTWRAP_DOM = el.querySelector('.el-select-dropdown .el-select-dropdown__wrap');
        (SELECTWRAP_DOM as Element).addEventListener('scroll', function(this: any) {
            const CONDITION = this.scrollHeight - this.scrollTop <= this.clientHeight;
            if (CONDITION) {
                binding.value();
            }
        });
    }
};
