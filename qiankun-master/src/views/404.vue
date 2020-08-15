<template>
    <div class="not-found">
        <h2 class="logo">
            <svg class="icon" aria-hidden="true" width="60px" height="60px">
                <use xlink:href="#iconLogo"></use>
            </svg>
        </h2>
        <div class="container">
            <div class="box">
                <img class="img" src="../../static/img/404.png" alt="">
                <h4 class="title">Sorry~</h4>
                <p class="desc">The page is having a rest</p>
                <a class="back" href="/">
                    <span class="text">返回首页</span>
                    <i class="iconfont iconarrow_right"></i>
                </a>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
    name: 'NotFound'
})
export default class NotFound extends Vue {

}
</script>
<style lang="scss" scoped>
    .not-found {
        position: relative;
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        background: url('../../static/img/login_bg1.png') left top no-repeat;
        background-color: #F6F7FB;
        .logo {
            position: absolute;
            left: 32px; top: 34px;
        }
        .container {
            flex: 1;
            margin: 140px 0 0 120px;
            border-radius: 10px 0 0 0;
            background: url('../../static/img/login_bg2.png') right bottom no-repeat;
            background-color: #fff;
            .box {
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 363px;
                margin: 160px auto 0;
            }
            .img {
                width: 363px;
            }
            .title {
                margin-top: 28px;
                font-size: 36px;
                font-weight: 500;
                line-height: 44px;
                color: #F1B7D0;
            }
            .desc {
                margin-top: 12px;
                font-size: 20px;
                line-height: 24px;
                color: #909297;
            }
            .back {
                display: inline-flex;
                align-items: center;
                height: 20px;
                margin-top: 50px;
                .text {
                    font-size: 12px;
                    line-height: 1;
                    color: #909297;
                }
                .iconfont {
                    margin-left: 5px;
                    font-size: 12px;
                    color: #909297;
                }
            }
        }
    }
</style>
