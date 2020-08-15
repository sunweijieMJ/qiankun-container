<template>
    <div class="home">
        {{msg}}
        <el-button @click="logout">注销</el-button>
    </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import storage from '@/utils/storage';

@Component({
    name: 'Home'
})
export default class Home extends Vue {
    private msg = 'this is test1'

    private logout() {
        storage().remove('token');
        window.location.href = '/login';
    }
}
</script>
<style lang="scss" scoped>

</style>
