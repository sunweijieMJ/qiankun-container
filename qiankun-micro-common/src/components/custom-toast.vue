<template>
    <transition name="toast">
        <div class="custom-toast" v-if="isShow">
            {{message}}
        </div>
    </transition>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
    name: 'CustomToast'
})
export default class extends Vue {
    private isShow = false
    private message = ''
}
</script>
<style lang="scss" scoped>
    .custom-toast {
        position: fixed;
        top: 50%; left: 50%;
        z-index: 4000;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px 18px;
        border-radius: 4px;
        font-size: 12px;
        font-weight: 400;
        color: #fff;
        background-color: rgba(51,51,51,0.9);
        transform: translateX(-50%) translateY(-50%);
    }

    .toast-enter-active, .toast-leave-active {
        transition: 0.3s ease-out;
    }

    .toast-enter {
        opacity: 0;
    }

    .toast-leave-to {
        opacity: 0;
    }
</style>
