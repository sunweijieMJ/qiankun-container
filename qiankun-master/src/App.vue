<template>
    <div id="root">
        <router-view/>
    </div>
</template>
<style lang="scss">
    // 重置样式
    @import './assets/scss/_reset.scss';
    /* 通用样式 */
    @import './assets/scss/_common.scss';
    // 覆盖element样式
    @import './assets/scss/component/_element.scss';
    // 修改element变量&图标
    @import './assets/theme/_element-theme.scss';
    // nprogress
    @import '~nprogress/nprogress.css';

    html, body, #container {
        min-width: 1260px;
        min-height: 100vh;
        background-color: #fff;
    }
</style>
