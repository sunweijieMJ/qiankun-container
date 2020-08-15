<template>
    <div class="custom-chart" ref="myChart"></div>
</template>
<script lang="ts">
import { echarts } from '@/plugin';
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({
    name: 'CustomChart'
})
export default class CustomChart extends Vue {
    @Prop() private options!: object
    @Prop() private theme!: string | object // 主题
    @Prop() private opts!: object // 附加参数

    private myChart: any = null

    mounted() {
        // 调用绘制图表的方法
        this.draw();
    }

    private draw() {
        // 实例化
        this.myChart = echarts.init(this.$refs.myChart, this.theme, this.opts);

        // 绘制
        this.myChart.setOption(this.options);
    }
}
</script>
<style lang="scss" scoped>
</style>
