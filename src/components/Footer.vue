<template>
    <van-tabbar v-model="active">
        <van-tabbar-item name="index" icon="fire" :to="{name: 'index'}">主页</van-tabbar-item>
        <van-tabbar-item name="goods" icon="bag" :to="{name: 'goods'}">商品</van-tabbar-item>
        <van-tabbar-item name="cart" icon="cart" :to="{name: 'cart'}">购物车</van-tabbar-item>
        <van-tabbar-item name="user" icon="friends" :to="{name: 'user'}">会员中心</van-tabbar-item>
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
            active: 'index'
        }
    }
}
</script>
