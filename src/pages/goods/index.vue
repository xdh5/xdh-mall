<template>
<div class="wrapper">
    <van-search 
        placeholder="请输入搜索关键词"
        v-model="keyWord"
        show-action
        @search="onSearch"
        @cancel="onCancel"
    />
    <van-sidebar v-model="activeKey" @change="changeSide">
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
                <router-link :to="{name: 'detail', params: {id:value.objectId}}">
                <van-image
                lazy-load
                fit="cover"
                :src="value.picture.url"
                >
                    <template v-slot:loading>加载中</template>
                    <template v-slot:error>加载失败</template>
                </van-image>
                <span>{{value.name}}</span>
                </router-link>
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
            forbidInfinite: false, //禁止无限滚动

            activeKey: 0 ,  // 0: 全部, 1: 衣, 2: 食, 3: 住, 4: 行
            totalData: [],
            currentData: [undefined],
            page: 1,
            
            keyWord: ''
        }
    },
    methods: {
        initializeItem () {
            this.totalData = []
            this.currentData = [undefined]
            this.page = 1
            // this.keyWord = ''
        },  //  初始化数据

        getList () {
            this.loading = true;
            this.forbidInfinite = true
            this.$axios.get(
                '/classes/Goods',
                {params: {
                    keys: 'name,picture',
                    limit: 4,
                    skip: (this.page-1)*4,
                    where: {'type': this.activeKey ===0 ?{"$in":[1,2,3,4]} : this.activeKey}
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
                console.log(err)
                this.loading = false
            })
        },
        changeSide () {
            this.initializeItem()
            this.getList()
        },
        onSearch () {
            this.initializeItem()
            this.forbidInfinite = true
            this.loading = true
            this.$axios.get(
                '/classes/Goods',
                {params: {
                    keys: 'name,picture',
                    where: {
                        'type': this.activeKey ===0 ?{"$in":[1,2,3,4]} : this.activeKey,
                        'name': {"$regex":`.*${this.keyWord}.*`}
                    }
                }}
            )
            .then(res => {
                this.totalData = res.results
                this.loading = false
            })
            .catch(err=>{
                console.log(err)
                this.loading = false
            })
        },
        onCancel(){
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
        img{
            width: 120px;
            height: 120px;
        }
        span{
            color: #666;
            font-family: "Microsoft YaHei";
            font-size: 10px;
            margin-top:5px;        
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            display: inline-block;
            width: 120px;
        }
    }
}
.tipImage{
    text-align: center;
    margin: 20px 0;
}
</style>
