<template>
  <div id="app">
    <router-view class="main"></router-view>
    <Footer></Footer>
  </div>
</template>
<script>
import '@/assets/style/global.css';

import Vue from 'vue';
import Footer from '@/components/Footer'
import { Lazyload, Image  } from 'vant';
import { Loading } from 'vant';

Vue.use(Lazyload,{
    loading: require('@/assets/images/no-image.jpg'),
    error: require('@/assets/images/no-image.jpg')
});
Vue.use(Loading);
Vue.use(Image);

export default {
    components:{
        Footer
    }
}
</script>

<style>
body {
  font-size: 16px;
  background-color: #f8f8f8;
  -webkit-font-smoothing: antialiased;
}
.main{
    margin-bottom: 50px
}
</style>
