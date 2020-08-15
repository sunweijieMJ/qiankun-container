<template>
    <el-image class="custom-image"
        :src="currentSrc" :alt="alt" :fit="fit" :lazy="lazy" :referrer-policy="referrerPolicy"
        :scroll-container="scrollContainer" :preview-src-list="srcList" :z-index="zIndex"
        @load="load" @error="error">
        <div slot="placeholder" class="image-slot">
            <img class="default" src="https://devops01.oss-cn-shanghai.aliyuncs.com/staticImg/image_loading.jpg" alt="">
        </div>
        <div v-if="currentSrc" slot="error" class="image-slot">
            <img class="default" src="https://devops01.oss-cn-shanghai.aliyuncs.com/staticImg/image_error.jpg" alt="">
        </div>
        <div v-else slot="error" class="image-slot">
            <img class="default" src="https://devops01.oss-cn-shanghai.aliyuncs.com/staticImg/image_null.jpg" alt="">
        </div>
    </el-image>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { handleImage } from '@/utils/tools';

@Component({
    name: 'CustomImage'
})
export default class CustomImage extends Vue {
    @Prop() private src!: string // 图片源
    @Prop() private alt!: string // 原生 alt
    @Prop({ default: 'contain' }) private fit!: string // 原生 object-fit
    @Prop() private referrerPolicy!: string // 原生 referrerPolicy
    @Prop() private srcList!: object // 开启图片预览功能
    @Prop({ default: () => [] }) private mode!: Array<string> // oss图片裁切方式
    @Prop({ default: true }) private lazy!: boolean // 是否开启懒加载
    @Prop({ default: 2000 }) private zIndex!: number // 设置图片预览的 z-index
    @Prop({ // 开启懒加载后，监听 scroll 事件的容器
        validator: value => ['string', 'object'].includes(typeof value)
    }) private scrollContainer!: boolean

    // 裁切后的src
    get currentSrc() {
        return handleImage(this.src, this.mode);
    }

    // 图片加载成功
    load(evt: EventTarget) {
        this.$emit('load', evt);
    }

    // 图片加载失败
    error(evt: EventTarget) {
        this.$emit('error', evt);
    }
}
</script>
<style lang="scss" scoped>
    .custom-image {
        width: inherit;
        height: inherit;
        pointer-events: none;
        .image-slot, .image-slot .default {
            width: inherit;
            height: inherit;
        }
    }
</style>
