<template>
<div class="detail">
    <van-swipe class="goods-swipe" :autoplay="4000">
        <van-swipe-item v-for="(value,key) in 3" :key="key">
            <img :src="goods.picture.url" >
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
        <van-goods-action-button type="warning" @click="sorry">
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
        [GoodsActionButton.name]: GoodsActionButton
    },
    data() {
        return {
            goods: {picture:{}}
        }
    },
    methods: {
        getList () {
            this.$axios.get(
                `/classes/Goods/${this.$route.params.id}`,
            )
            .then(res => {
                this.goods = res
            })
            .catch(err=>{
                console.log(err)
            })
        },
        sorry() {
            Toast('暂无后续逻辑~');
        }
    },
    created () {
        this.getList()
    }
};
</script>

<style lang="less" scoped>
.goods {
  padding-bottom: 50px;

  &-swipe {
    img {
      width: 100%;
      display: block;
    }
  }

  &-title {
    font-size: 16px;
  }

  &-price {
    color: #f44;
  }

  &-express {
    color: #999;
    font-size: 12px;
    padding: 5px 15px;
  }

  &-cell-group {
    margin: 15px 0;

    .van-cell__value {
      color: #999;
    }
  }

  &-tag {
    margin-left: 5px;
  }
}
</style>
