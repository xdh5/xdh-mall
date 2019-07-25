<template>
<div class="wrapper">
    <van-swipe :autoplay="4000" indicator-color="white">
        <van-swipe-item  v-for="(value,key) in 3" :key="key">
            <img src="@/assets/images/banner1.jpg">
        </van-swipe-item>
    </van-swipe>
    <van-divider>猜你喜欢</van-divider>
    <div class="may-like">
        <div class="tipImage" v-if="totalData.length === 0 && !loading">
            <img src="@/assets/images/empty.png" alt="暂无数据">
        </div>
        <ul
        class="clearfix"
        v-infinite-scroll="getList"
        infinite-scroll-disabled="forbidInfinite"
        infinite-scroll-distance="10"
        >
        <li class="goods-item" v-for="(value,key) in totalData" :key="key">
            <div class="img-box">
                <router-link :to="{name: 'detail', params: {id:value.objectId}}">
                <van-image
                fit="cover"
                lazy-load
                :src="value.picture.url"
                >
                    <template v-slot:loading>加载中</template>
                </van-image>
                </router-link>
            </div>
            <div class="detail">
                <div class="title">{{value.name}}</div>
                <div class="price">￥{{value.price}}</div>
            </div> 
        </li>
        </ul>
        <van-loading class="tipImage" type="spinner" color="#1989fa" v-show="loading"/>
    </div>
    <div class="information" v-if="currentData.length === 0 && totalData.length>0">
        <dl>
            <dt>联系作者</dt>
            <dd>Email: <a href="mailto:zhaozy086@163.com">zhaozy086@163.com</a></dd>
            <dd>Github: <a href="https://github.com/xdh5" target="_blank">https://github.com/xdh5</a></dd>
        </dl>
    </div>
</div>
</template>

<script>
import { Swipe, SwipeItem, Divider } from 'vant';
import { InfiniteScroll } from 'mint-ui';

export default {
    components: {
        [Swipe.name]: Swipe,
        [SwipeItem.name]: SwipeItem,
        [Divider.name]: Divider
    },
    directives: {
        InfiniteScroll
    },
    data() {
        return {
            loading: false,
            totalData: [],
            currentData: [undefined], // 保证初始值不为空，触发无限滚动
            page: 1,
            forbidInfinite: false, // 禁止无限滚动
        }
    },
    methods: {
        getList () {
            this.loading = true;
            this.forbidInfinite = true
            this.$axios.get(
                '/classes/Goods',
                {params: {
                    keys: 'name,price,picture',
                    order: '-saleVolume',
                    limit: 4,
                    skip: (this.page-1)*4,
                }}
            )
            .then(res => {
                this.currentData = res.results
                if(this.currentData.length>0){
                    this.totalData = this.totalData.concat(this.currentData)
                    this.page += 1
                    this.forbidInfinite = false
                }
                this.loading = false
            })
            .catch(err=>{
                this.loading = false
            })
        }
    },
    created () {
        this.getList()
    }
}
</script>

<style lang="less" scoped>
.van-swipe{
    height: 60vw;
    img{
        width: 100%;
        height: 100%;
    }
}
.may-like{
    .goods-item{
        box-sizing: border-box;
        width: 50%;
        padding: 0 5px;
        float: left;
        margin: 5px 0;
        .van-image{
            width: 177px;
            height: 177px;
        }
        .detail{
            background: white;
            padding:10px;
        }
        .title{
            color: #666;
            font-size: 14px;
            padding-bottom:15px;        
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
        .price{
            font-size: 12px;
            color: #ff525e;
            font-weight: bold;
        }
    }
}
.tipImage{
    text-align: center;
    margin: 20px 0;
}
.information{
    font-size: 12px;
    color: white;
    background: black;
    padding: 10px 15px;
    dt{
        font-weight: bold;
        margin:5px 0 10px 0;
    }
    dd{
        margin:10px 0
    }
    a{
        color: white;
        cursor: pointer;
    }
}
</style>
