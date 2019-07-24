<template>
    <van-icon class="goback" name="arrow-left" @click="goBack"/>
</template>
<script>
export default {
    methods: {
        goBack(){
            this.$router.go(-1)
        }
    }
}
</script>
<style lang="less" scoped>
.van-icon{
    position: absolute;
    left: 10px;
    top: 10px;
    padding-right: 20px;
    z-index: 999;
}
</style>
