<template>
<div class="wrapper">
    <van-swipe :autoplay="4000" indicator-color="white">
        <van-swipe-item  v-for="(value,key) in swipeImages" :key="key">
            <img v-lazy="value.image">  
        </van-swipe-item>
    </van-swipe>
    <div class="line-block line-block-gray">
        <div class="lineblock-title">
            <span class="lineblock-font">最热商品推荐</span>
        </div>
    </div>
    <div class="may-like">
        <div class="tipImage" v-if="totalData.length === 0 && !loading">
            <img src="@/assets/images/empty.png" alt="暂无数据">
        </div>
        <ul
        class="clearfix"
        v-infinite-scroll="getList"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10"
        >
        <li class="goods-item" v-for="(value,key) in totalData" :key="key">
            <div class="img-box">
            <van-image
            lazy-load
            :src="value.image"
            >
                <template v-slot:loading>加载中</template>
                <template v-slot:error>加载失败</template>
            </van-image>
            </div>
            <div class="detail">
                <div class="title">{{value.name}}</div>
                <div class="price">￥{{value.currentPrice}}</div>
            </div> 
        </li>
        <van-loading class="tipImage" type="spinner" color="#1989fa" v-if="loading"/>
        </ul>
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
import { Swipe, SwipeItem, Image } from 'vant';
import { InfiniteScroll } from 'mint-ui';

export default {
    components: {
        [Swipe.name]: Swipe,
        [SwipeItem.name]: SwipeItem,
        [Image.name]: Image
    },
    directives: {
        InfiniteScroll
    },
    data() {
        return {
            loading: false,
            swipeImages:[],
            totalData: [],
            currentData: [{name: '', currentPrice: '', image: ''}],
            page: 1,
            limit: 4
        }
    },
    methods: {
        getList () {
            if(this.currentData.length>0){
                this.loading = true;
                this.$axios.get('index/mayLike', {params:{page:this.page, limit:this.limit}})
                .then(res => {
                    this.currentData = res.data
                    if(this.currentData.length>0){
                        this.totalData = this.totalData.concat(this.currentData)
                        this.page += 1
                    }
                    this.loading = false
                })
                .catch(err=>{
                    console.log(err)
                })
            }
        },
        getCarousel () {  
            this.$axios.get('index/carousel')
            .then(res => {
                this.swipeImages = res.data
            })
            .catch(err=>{
                console.log(err)
            })
        }
    },
    created () {
        this.getList()
        this.getCarousel ()
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
.line-block{
    margin:15px 0;
    &:before {
        content: "";
        display: block;
        margin: 15px
    }
    .lineblock-title {
        display: block;
        text-align: center;
        margin-top: -22px;
        line-height: 14px
    }
    &.line-block-gray{
        &:before {
            border-top: 1px solid #eee
        }
        .lineblock-font {
            font-size:14px;
            color: #999;
            background-color: #f8f8f8
        }
    }
}
.may-like{
    .goods-item{
        box-sizing: border-box;
        width: 50%;
        padding:0 5px;
        float: left;
        margin:5px 0;
        img{
            width: 100%;
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
    img{
        margin: 30px 0;
    }
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
