<template>
  <div id="app">
    <router-view name="main" class="main"></router-view>
    <router-view name="footer"></router-view>
  </div>
</template>
<script>
import '@/assets/style/global.css';

import Vue from 'vue';
import { Lazyload, Image, Loading, Icon  } from 'vant';

Vue.use(Lazyload,{
    loading: require('@/assets/images/no-image.jpg'),
    error: require('@/assets/images/no-image.jpg')
})
.use(Loading)
.use(Image)
.use(Icon)

export default {
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
