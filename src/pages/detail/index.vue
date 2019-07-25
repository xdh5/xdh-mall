<template>
<div class="detail">
    <div v-if="loading" class="center" >
        <van-loading type="spinner" color="#1989fa"/>
    </div>
    <div v-else>
        <GoBack></GoBack>
        <van-swipe class="goods-swipe" :autoplay="4000">
            <van-swipe-item v-for="(value,key) in 3" :key="key">
                <van-image
                fit="cover"
                :src="good.picture.url"
                >
                </van-image>
            </van-swipe-item>
        </van-swipe>
        <van-cell-group>
            <van-cell>
                <div class="goods-title">{{ good.name }}</div>
                <div class="goods-price">￥{{ good.price }}</div>
            </van-cell>
            <van-cell class="goods-express">
                <van-col span="10">运费：{{ good.fare }}</van-col>
                <van-col span="14">销量：{{ good.saleVolume }}</van-col>
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
</div>
</template>

<script>
import { Tag, Col, Cell, CellGroup, Swipe, Toast, SwipeItem, GoodsAction, GoodsActionIcon, GoodsActionButton, Loading } from 'vant';
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
            loading: false,
            finish: true,  // 防止连点购物车，请求完成后才能发起新请求

            good: {},  // 商品列表
            cartId: null,   // 购物车Id
            cartQuantity: 0,    // 购物车数量
        }
    },
    methods: {
        getList () {
            return this.$axios.get(
                `/classes/Goods/${this.$route.params.id}`,
            )
        },
        getCart () {
            return this.$axios.get(
                '/classes/cart',
                {params: {
                    where: {
                        'good_id': this.$route.params.id,
                        'username': this.$store.state.username
                    }
                }}
            )
        },
        addCart () {
            this.finish = false
            this.$axios.post(
                '/classes/cart',
                {
                    good_id: this.good.objectId,
                    name: this.good.name,
                    url: this.good.picture.url,
                    price: this.good.price,
                    username: this.$store.state.username,
                    quantity: 1
                }
            )
            .then(res => {
                this.cartId = res.objectId
                this.cartQuantity = 1
                this.finish = true
                Toast('已加入购物车~')
            })
            .catch(err=>{
                this.finish = true
                Toast('加入购物车失败，请重试')
            })
        },
        putCart () {
            this.finish = false
            this.cartQuantity += 1
            this.$axios.put(
                `/classes/cart/${this.cartId}`,{
                    quantity: this.cartQuantity
            })
            .then(res => {
                this.finish = true
                Toast('已加入购物车~')
            })
            .catch(err=>{
                this.finish = true
                this.cartQuantity -= 1
                Toast('加入购物车失败，请重试')
            })
        },
        changeCart () {
            if(this.$store.state.token){
                if(this.finish){
                    this.cartId ? this.putCart() : this.addCart()
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
        this.loading = true
        this.$axios.all([this.getList(), this.getCart()])
        .then(this.$axios.spread((good, cart) => {
            this.$nextTick(() => {
                this.good = good
            })
            if(cart.results[0]){
                this.cartId = cart.results[0].objectId
                this.cartQuantity = cart.results[0].quantity
            }
        }))
        .catch(err => {
        })
        .finally(() => {
            document.title = this.good.name
            this.loading = false
        })
    }
}
</script>

<style lang="less" scoped>
.center{
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center
}
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
