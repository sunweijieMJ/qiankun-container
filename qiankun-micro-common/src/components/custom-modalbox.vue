<template>
    <el-dialog custom-class="custom-modalbox" :visible.sync="isShow" :modal="false" :show-close="false" @close="closePopup">
        <div class="el-message-box">
            <div class="el-message-box__header">
                <div class="el-message-box__title">
                    <span>{{title || '标题'}}</span>
                </div>
                <button type="button" aria-label="Close" class="el-message-box__headerbtn" @click.prevent="handleAction('cancel')">
                    <i class="el-message-box__close el-icon-close"></i>
                </button>
            </div>
            <div class="el-message-box__content">
                <div class="el-message-box__container">
                    <div class="el-message-box__status el-icon-warning"></div>
                    <div class="el-message-box__message">
                        <p>{{content || '内容'}}</p>
                    </div>
                </div>
                <div class="el-message-box__input" style="display: none;">
                    <div class="el-input">
                        <input type="text" autocomplete="off" placeholder="" class="el-input__inner">
                    </div>
                    <div class="el-message-box__errormsg" style="visibility: hidden;"></div>
                </div>
            </div>
            <div class="el-message-box__btns">
                <button type="button" class="el-button el-button--default el-button--small" @click.prevent="handleAction('cancel')">
                    <span>{{cancelButtonText || '取消'}}</span>
                </button>
                <button type="button" class="el-button el-button--default el-button--small el-button--primary " @click.prevent="handleAction('confirm')">
                    <span>{{confirmButtonText || '确认'}}</span>
                </button>
            </div>
        </div>
    </el-dialog>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

export interface PromiseType {
  resolve?: Function;
  reject?: Function;
}

@Component({
    name: 'CustomModalbox'
})
export default class extends Vue {
    private isShow = false
    private title = ''
    private content = ''
    private confirmButtonText = ''
    private cancelButtonText = ''
    private promiseStatus: PromiseType = {}

    // 关闭弹窗回调
    callback() {
        this.isShow = true;
        return new Promise((resolve, reject) => {
            this.promiseStatus = { resolve, reject };
        });
    }

    // 点击类型
    handleAction(action: string) {
        if (action === 'confirm') {
            this.promiseStatus && (this.promiseStatus.resolve as Function)();
        } else if (action === 'cancel') {
            this.promiseStatus && (this.promiseStatus.reject as Function)();
        }
        this.closePopup();
    }

    // 关闭弹窗
    closePopup() {
        this.isShow = false;
    }
}
</script>
<style lang="scss">
    .custom-modalbox {
        width: 422px;
        height: 136px;
        margin: 0 auto !important;
        top: 50%;
        transform: translateY(-50%);
        .el-dialog__header {
            padding: 0;
        }
        .el-dialog__body {
            padding: 0;
        }
    }
</style>
