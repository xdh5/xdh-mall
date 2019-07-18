<template>
<div class="wrapper">
    <van-search 
        placeholder="请输入搜索关键词"
        v-model="keyWord"
        show-action
        @search="onSearch"
        @cancel="onCancel"
    />
    <van-sidebar v-model="activeKey" @change="initializeItem">
        <van-sidebar-item title="全部" />
        <van-sidebar-item title="潮流服饰" />
        <van-sidebar-item title="食品酒水" />
        <van-sidebar-item title="家居用品" />
        <van-sidebar-item title="出行户外" />
    </van-sidebar>
    <div class="good-wrapper">
        <div class="tipImage" v-if="totalData.length === 0 && !loading">
            <img src="@/assets/images/empty.png" alt="暂无数据">
        </div>
        <van-grid 
        :column-num="2"
        v-infinite-scroll="getList"
        infinite-scroll-disabled="forbidInfinite"
        infinite-scroll-distance="10"
        >
            <van-grid-item v-for="(value, key) in totalData" :key="key">
                <van-image
                lazy-load
                :src="value.image"
                >
                    <template v-slot:loading>加载中</template>
                    <template v-slot:error>加载失败</template>
                </van-image>
                <span>{{value.name}}</span>
            </van-grid-item>
        </van-grid>
        <van-loading class="tipImage" type="spinner" color="#1989fa" v-show="loading"/>
    </div>
</div>
</template>

<script>
import { Sidebar, SidebarItem, Grid, GridItem, Search } from 'vant';
import { InfiniteScroll } from 'mint-ui';

export default {
    components: {
        [Sidebar.name]: Sidebar,
        [SidebarItem.name]: SidebarItem,
        [Grid.name]: Grid,
        [GridItem.name]: GridItem,
        [Search.name]: Search
    },
    directives: {
        InfiniteScroll
    },
    data() {
        return {
            loading: false,
            activeKey: 0 ,  // 0: 全部, 1: 衣, 2: 食, 3: 住, 4: 行
            totalData: [],
            currentData: [{name: '', image: ''}],
            page: 1,
            limit: 4,
            forbidInfinite: false, //禁止无限滚动
            keyWord: ''
        }
    },
    methods: {
        getList () {
            if(this.currentData.length>0){
                this.loading = true;
                this.forbidInfinite = true
                this.$axios.get('/goods/showGoods', {params:{page:this.page, limit:this.limit, type:this.activeKey}})
                .then(res => {
                    this.currentData = res.data
                    if(this.currentData.length>0){
                        this.totalData = this.totalData.concat(this.currentData)
                        this.page += 1
                    }
                    this.loading = false
                    this.forbidInfinite = false
                })
                .catch(err=>{
                    console.log(err)
                })
            }
        },
        initializeItem () {
            this.totalData = []
            this.currentData = [{name: '', image: ''}]
            this.page = 1
            this.keyWord = ''
            this.getList()
        },
        onSearch () {
            this.totalData = []
            this.currentData = [{name: '', image: ''}]
            this.page = 1
            this.loading = true
            this.forbidInfinite = true
            this.$axios.get('/goods/search', {params:{type: this.activeKey, key: this.keyWord}})
            .then(res => {
                this.totalData = res.data
                this.loading = false
            })
            .catch(err=>{
                console.log(err)
            })
        },
        onCancel(){
            if (this.forbidInfinite = true) {
                this.initializeItem()
            }
            this.keyWord = ''
        }
    },
    created () {
        this.getList()
    }
};
</script>

<style lang="less">
.van-search{
    position: fixed;
    top: 0;
    z-index: 999;
    width: 100%;
}
.van-sidebar-item--select{
    border-color: #1989fa;
    &:hover{
        text-decoration: none
    }
}
.van-sidebar{
    position: fixed;
    top: 54px;
}
.good-wrapper{
    margin: 54px 0 0 85px;
    .van-grid-item{
        span{
            color: #666;
            font-family: "Microsoft YaHei";
            font-size: 10px;
            margin-top:5px;        
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
    }
}
.tipImage{
    text-align: center;
    margin: 20px 0;
}
</style>
