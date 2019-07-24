<template>
<div class="detail">
    <GoBack></GoBack>
    <van-swipe class="goods-swipe" :autoplay="4000">
        <van-swipe-item v-for="(value,key) in 3" :key="key">
            <van-image
            fit="cover"
            :src="goods.picture.url"
            >
            </van-image>
        </van-swipe-item>
    </van-swipe>
    <van-cell-group>
        <van-cell>
            <div class="goods-title">{{ goods.name }}</div>
            <div class="goods-price">￥{{ goods.price }}</div>
        </van-cell>
        <van-cell class="goods-express">
            <van-col span="10">运费：{{ goods.fare }}</van-col>
            <van-col span="14">销量：{{ goods.saleVolume }}</van-col>
        </van-cell>
    </van-cell-group>
    <van-cell-group class="goods-cell-group">
        <van-cell value="进入店铺" icon="shop-o" is-link @click="sorry">
            <template slot="title">
                <span class="van-cell-text">蛋黄之家</span>
                <van-tag class="goods-tag" type="danger">官方</van-tag>
            </template>
        </van-cell>
        <van-cell title="线下门店" icon="location-o" is-link @click="sorry" />
    </van-cell-group>
    <van-cell-group class="goods-cell-group">
        <van-cell title="查看商品详情" is-link @click="sorry" />
    </van-cell-group>
    <van-goods-action>
        <van-goods-action-icon icon="chat-o" @click="sorry">
            客服
        </van-goods-action-icon>
        <van-goods-action-icon icon="cart-o" @click="$router.push('/cart')">
            购物车
        </van-goods-action-icon>
        <van-goods-action-button type="warning" @click="changeCart">
            加入购物车
        </van-goods-action-button>
        <van-goods-action-button type="danger" @click="sorry">
            立即购买
        </van-goods-action-button>
    </van-goods-action>
</div>
</template>

<script>
import { Tag, Col, Cell, CellGroup, Swipe,  Toast, SwipeItem, GoodsAction, GoodsActionIcon, GoodsActionButton } from 'vant';
import GoBack from '@/components/GoBack'

export default {
    components: {
        [Tag.name]: Tag,
        [Col.name]: Col,
        [Cell.name]: Cell,
        [CellGroup.name]: CellGroup,
        [Swipe.name]: Swipe,
        [SwipeItem.name]: SwipeItem,
        [GoodsAction.name]: GoodsAction,
        [GoodsActionIcon.name]: GoodsActionIcon,
        [GoodsActionButton.name]: GoodsActionButton,
        GoBack
    },
    data() {
        return {
            goods: {picture:{}},
            cartInfo: {}
        }
    },
    methods: {
        getList () {
            this.$axios.get(
                `/classes/Goods/${this.$route.params.id}`,
            )
            .then(res => {
                this.goods = res
                this.ifInCart()
            })
            .catch(err=>{
                console.log(err)
            })
        },
        ifInCart () {
            this.$axios.get(
                '/classes/cart',
                {params: {
                    where: {
                        'goods_id': this.goods.goods_id,
                        'username': localStorage.getItem('username')
                    }
                }}
            )
            .then(res => {
                this.cartInfo = res.results[0]
            })
            .catch(err=>{
                console.log(err)
            })
        },
        addCart () {
            this.$axios.post(
                '/classes/cart',
                {
                    goods_id: this.goods.goods_id,
                    name: this.goods.name,
                    url: this.goods.picture.url,
                    price: this.goods.price,
                    username: localStorage.getItem('username'),
                    quantity: 1
                }
            )
            .then(res => {
                this.ifInCart()
                Toast('已加入购物车~')
            })
            .catch(err=>{
                console.log(err)
            })
        },
        putCart () {
            this.$axios.put(
                `/classes/cart/${this.cartInfo.objectId}`,
                {
                    quantity: this.cartInfo.quantity + 1
                }
            )
            .then(res => {
                this.ifInCart()
                Toast('已加入购物车~')
            })
            .catch(err=>{
                console.log(err)
            })
        },
        changeCart () {
            if(this.$store.state.token){
                if(this.cartInfo){
                    this.putCart()
                } else{
                    this.addCart()
                }    
            } else {
                this.$router.push('/user/login')
            }
        },
        sorry() {
            Toast('暂无后续逻辑~')
        }
    },
    created () {
        this.getList()
    }
};
</script>

<style lang="less" scoped>
.detail {
    padding-bottom: 50px;
    .goback{
        color: white;
    }
    .van-image {
        width: 100vw;
        height: 60vw;
    }
    .goods-title {
        font-size: 16px;
    }
    .goods-price {
        color: #f44;
    }
    .goods-express {
        color: #999;
        font-size: 12px;
        padding: 5px 15px;
    }
    .goods-cell-group {
        margin: 15px 0;

        .van-cell__value {
        color: #999;
        }
    }
    .goods-tag {
        margin-left: 5px;
    }
}
</style>
