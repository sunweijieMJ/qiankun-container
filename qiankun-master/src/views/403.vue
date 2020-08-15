<template>
    <div class="forbidden">
        <div class="container">
            <div class="box">
                <img class="img" src="../../static/img/403.png" alt="">
                <h4 class="title">Sorry~</h4>
                <p class="desc">暂无权限，请联系管理员</p>
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
    name: 'Forbidden'
})
export default class Forbidden extends Vue {

}
</script>
<style lang="scss" scoped>
    .forbidden {
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
</style>
