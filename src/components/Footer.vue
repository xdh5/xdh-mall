<template>
    <van-tabbar v-model="active" @change="goPage(active)">
        <van-tabbar-item name="index" icon="fire">主页</van-tabbar-item>
        <van-tabbar-item name="goods" icon="bag">商品</van-tabbar-item>
        <van-tabbar-item name="cart" icon="cart">购物车</van-tabbar-item>
        <van-tabbar-item name="user" icon="friends">会员中心</van-tabbar-item>
    </van-tabbar>
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
            active: sessionStorage.getItem("tabbarItem") || 'index'
        }
    },
    methods: {
        goPage(active){
            sessionStorage.setItem("tabbarItem", active)
            this.$router.push(`${active}`)
        }
    }
}
</script>
