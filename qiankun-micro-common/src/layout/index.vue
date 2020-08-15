<template>
    <div class="custom-main">
        <router-view></router-view>
    </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
    name: 'Layout'
})
export default class Layout extends Vue {

}
</script>
<style lang="scss" scoped>
    .custom-main {
        display: flex;
        flex-direction: column;
        margin: 0 20px 0 44px;
    }
</style>
