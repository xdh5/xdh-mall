<template>
  <div id="app">
    <van-notice-bar
    text="本项目为移动端项目，建议在移动端或开发者模式-模拟移动设备中，以获得正常预览效果。"
    left-icon="volume-o"
    v-if="width > 768"
    />
    <router-view name="main" class="main"></router-view>
    <router-view name="footer"></router-view>
  </div>
</template>
<script>
import '@/assets/style/global.css';

import Vue from 'vue';
import { Lazyload, Image, Loading, Icon, NoticeBar } from 'vant';

Vue.use(Lazyload,{
    loading: require('@/assets/images/no-image.jpg'),
    error: require('@/assets/images/no-image.jpg')
})
.use(Loading)
.use(Image)
.use(Icon)
.use(NoticeBar)

export default {
    data () {
        return {
            width: 0
        }
    },
    mounted (){
        this.width = document.body.clientWidth
    },
    components:{
    }
}
</script>

<style>
body {
  font-size: 16px;
  background-color: #f8f8f8;
  -webkit-font-smoothing: antialiased;
}
/* .main{
    margin-bottom: 50px
} */
</style>
