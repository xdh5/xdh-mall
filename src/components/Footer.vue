<template>
<div class="footer">
    <van-tabbar v-model="$store.state.active" @change="goPage($store.state.active)">
        <van-tabbar-item name="index" ref="index" icon="fire">主页</van-tabbar-item>
        <van-tabbar-item name="goods" ref="goods" icon="bag">商品</van-tabbar-item>
        <van-tabbar-item name="cart" ref="cart" icon="cart">购物车</van-tabbar-item>
        <van-tabbar-item name="user" ref="user" icon="friends">会员中心</van-tabbar-item>
    </van-tabbar>
</div>
</template>
<script>
import { Tabbar, TabbarItem } from 'vant';

export default {
    components: {
        [Tabbar.name]: Tabbar,
        [TabbarItem.name]: TabbarItem,
    },
    data() {
        return {
            // active: this.$store.state.active //不明原因无法响应vuex，所以直接调用
        }
    },
    methods: {
        goPage (index) {
            this.$router.push(`/${index}`)
        }
    }
}
</script>
<style lang="less" scoped>
.footer{
    padding-top: 50px;
}
</style>
