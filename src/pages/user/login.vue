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
    <div class="tip">
        <p>如果用户名不存在，将自动注册。</p>
    </div>
  </div>
</template>

<script>
import { CellGroup, Field, Button, Dialog } from 'vant';
import AsyncValidator from 'async-validator'

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
        savaUser (res) {
            localStorage.setItem('token', res.sessionToken)
            localStorage.setItem('username', res.username)
            this.$store.commit('setState', {key: 'token', value: res.sessionToken})
            this.$store.commit('setState', {key: 'username', value: res.username})
        },
        login () {
            this.$axios.get(
                '/login',
                {params:{ 
                    'username': this.username,
                    'password': this.password
                }}
            )
            .then(res => {
                this.savaUser(res)
                Dialog({
                    message: '登录成功'
                }).then(() => {
                    this.$router.push('/index')
                })
            })
            .catch(err => {
                switch (err.code) {
                    case 210:
                        Dialog({
                            message: '用户名和密码不匹配'
                        })                
                        break
                    case 211:
                        Dialog.confirm({
                            message: '用户名不存在，是否自动注册？'
                        }).then(() => {
                            this.register()
                        })
                        break
                    default:
                        Dialog({
                            message: '登录失败。'
                        }) 
                        break
                }
            })
        },
        register () {
            this.$axios.post(
                '/users',
                {
                    'username': this.username,
                    'password': this.password,
                }
            )
            .then(res => {
                this.savaUser(res)
                Dialog({
                    message: '注册成功'
                }).then(() => {
                    this.$router.push('/index')
                })
            })
            .catch(err => {
                switch (err.code) {
                    case 217:
                        Dialog({
                            message: '注册失败，请输入用户名。'
                        })
                        break;
                    case 218:
                        Dialog({
                            message: '注册失败，请输入密码。'
                        })
                        break;
                    case 202:
                        Dialog({
                            message: '注册失败，用户名已存在。'
                        })
                        break;
                    default:
                        Dialog({
                            message: '注册失败。'
                        })
                        break;
                }
            })
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
.tip{
    color: red;
    text-align: center;
    p{
        display: inline-block;
    }
}
.button{
    margin: 50px 0;
    text-align: center;
    .van-button{
        width: 100px;
        &:first-child{
            margin-right: 40px
        }
    }
}
</style>