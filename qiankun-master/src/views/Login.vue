<template>
    <div class="login">
        <el-button @click="skip">登录</el-button>
    </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import storage from '@/utils/storage';

@Component({
    name: 'Login'
})
export default class Login extends Vue {
    private skip() {
        storage().set('token', 'asdasd');
        window.location.href = '/common'
    }
}
</script>
<style lang="scss" scoped>
    .login {

    }
</style>

