<template>
  <div class="login">
    <div class="login-poster">
        <div class="login-info">
            <img src="@/assets/images/login.jpg">
        </div>
    </div>
    <van-cell-group>
        <van-field
            v-model="username"
            required
            label="用户名"
            placeholder="请输入用户名"
        />
        <van-field
            v-model="password"
            type="password"
            label="密码"
            placeholder="请输入密码"
            required
        />
    </van-cell-group>
    <div class="button">
        <van-button type="default" @click="login">登录</van-button>
        <van-button type="info" @click="register">注册</van-button>
    </div>
  </div>
</template>

<script>
import { CellGroup, Field, Button, Dialog } from 'vant';

export default {
    components: {
        [Field.name]: Field,
        [CellGroup.name]: CellGroup,
        [Button.name]: Button,
    },
    data () {
        return {
            username: '',
            password: '',
        }
    },
    methods: {
        login () {
            this.$axios.get(
                '/login',
                {params:{ 
                    'username': this.username,
                    'password': this.password
                }}
            )
            .then(res => {
                localStorage.setItem("token", res.sessionToken)
                localStorage.setItem("username", res.username)
                this.$store.commit('setToken', res.sessionToken)
                Dialog({
                    message: '登录成功'
                }).then(() => {
                    this.$router.push('/index')
                })
            })
            .catch(err=>{
                Dialog({
                    message: '登录失败'
                })
            })
        },
        register () {
            this.$router.push('/user/register')
        }
    }
};
</script>

<style lang="less" scoped>
.login {
    &-poster {
        width: 100%;
        height: 53vw;
        display: flex;
        align-items: center;
        justify-content: center;
        background: url('~@/assets/images/background.jpg');
        background-size: cover;
    }
    &-info {
        width: 100px;
        height: 100px;
        text-align: center;
        img{
            width: 100%;
            height: 100%;
            border-radius: 50%;
            margin-bottom: 5px;
        }
    }
}
.van-cell-group {
    margin-top: 20px;
}
.button{
    margin-top: 40px;
    text-align: center;
    .van-button{
        width: 100px;
        &:first-child{
            margin-right: 40px
        }
    }
}
</style>