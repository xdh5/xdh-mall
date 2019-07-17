<template>
  <div class="wrapper">
        <van-sidebar v-model="activeKey" @change="getList">
            <van-sidebar-item title="全部" />
            <van-sidebar-item title="潮流服饰" />
            <van-sidebar-item title="食品酒水" />
            <van-sidebar-item title="家居用品" />
            <van-sidebar-item title="出行户外" />
            <van-sidebar-item title="标签名称" />
        </van-sidebar>
  </div>
</template>

<script>
import { Sidebar, SidebarItem } from 'vant';

export default {
    components: {
        [Sidebar.name]: Sidebar,
        [SidebarItem.name]: SidebarItem,
    },
    data() {
        return {
            activeKey: 0 ,  // 0: 全部, 1: 衣, 2: 食, 3: 住, 4: 行
        }
    },
    methods: {
        getList(index){
            console.log(index)
        }
    }
};
</script>

<style lang="less">
.van-sidebar-item--select{
    border-color: #1989fa;
    &:hover{
        text-decoration: none
    }
}
</style>
