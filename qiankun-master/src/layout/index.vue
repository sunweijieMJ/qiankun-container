<template>
    <div class="layout">
        <div id="micro-app"></div>
    </div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import basic from '@/store';
import basicStore from '@/store/modules/basic';
import CustomComponent from '@/components';
import { genActiveRule } from '@/utils/tools';
import pager from '@/utils/pager';
import storage from '@/utils/storage';
import filters from '@/utils/filters';
import * as directives from '@/utils/directives';

// 导入乾坤函数
import {
    registerMicroApps, // 注册子应用方法
    setDefaultMountApp, // 设默认启用的子应用
    // runAfterFirstMounted, // 有个子应用加载完毕回调
    start, // 启动qiankun
    addGlobalUncaughtErrorHandler // 添加全局未捕获异常处理器
} from 'qiankun';

@Component({
    name: 'Layout'
})
export default class Layout extends Vue {

    created() {
        this.register();
    }

    private register = () => {
        // 异步注册表
        setTimeout(() => {
            const menuList = [
                {
                    name: '子应用1',
                    entry: 'http://localhost:7001/',
                    routeName: 'common',
                    routePath: 'common'
                }
            ];
            // 处理子应用注册数据
            const microApps: any = [];
            let defaultApp = null;
            const msg = {
                pager,
                storage,
                filters,
                directives,
                CustomComponent,
                basicState: basic.state,
                basicStore
            };
            menuList.forEach((item) => {
                microApps.push({
                    name: 'micro-' + item.routePath,
                    entry: item.entry,
                    container: '#micro-app',
                    activeRule: genActiveRule('/' + item.routePath),
                    props: { ...msg, ROUTES: item, routePath: '/' + item.routePath }
                });
            });

            // 注册子应用
            registerMicroApps(microApps, {
                // beforeLoad: [
                //     app => {
                //         console.log("before load", app);
                //     }
                // ],
                // beforeMount: [
                //     app => {
                //         // console.log("before mount", app);
                //     }
                // ],
                // afterUnmount: [
                //     app => {
                //         // console.log("after unload", app);
                //     }
                // ]
            });
            // 设置默认子应用
            if (window.location.pathname.split('/')[1]) {
                defaultApp = '/' + window.location.pathname.split('/')[1];
            }
            if (!defaultApp) defaultApp = '/' + menuList[0].routePath;
            setDefaultMountApp(defaultApp);
            // 第一个子应用加载完毕回调
            // runAfterFirstMounted((app) => {
            //     console.log('app', app)
            // });
            // 启动微服务
            start({ prefetch: true });
            // 设置全局未捕获一场处理器
            addGlobalUncaughtErrorHandler(event => console.log(event));
        }, 3000);
    };
}
</script>
<style lang="scss" scoped>
    .layout {
        display: flex;
        width: 100%;
        height: 100vh;
    }
</style>
