<template>
<div class="wrapper">
    <header class="clearfix">
        <div class="left">
            <h1>购物车</h1>
            <p>共<span> {{goods.length}} </span>件</p>
        </div>
        <button class="right edit">编辑</button>
    </header>
    <van-checkbox-group class="card-goods" v-model="checkedGoods">
        <van-checkbox
            class="card-goods__item"
            v-for="item in goods"
            :key="item.id"
            :name="item.id"
        >
        <van-swipe-cell>
            <van-card
            :title="item.title"
            :desc="item.desc"
            :price="formatPrice(item.price)"
            :thumb="item.thumb"
            :num="item.num">
            <div slot="num">
                <van-stepper v-model="value" />
            </div>
            </van-card>
            <template slot="right">
                <van-button square type="danger" text="删除" />
            </template>
        </van-swipe-cell>
        </van-checkbox>
    </van-checkbox-group>
    <van-submit-bar
    :price="totalPrice"
    :disabled="!checkedGoods.length"
    :button-text="submitBarText"
    @submit="onSubmit">
    <van-checkbox class="all-checked">全选</van-checkbox>
    </van-submit-bar>
</div>
</template>

<script>
import { Card, Checkbox, CheckboxGroup, SubmitBar, Stepper, SwipeCell, Button } from 'vant';

export default {
  components: {
    [Card.name]: Card,
    [Checkbox.name]: Checkbox,
    [CheckboxGroup.name]: CheckboxGroup,
    [SubmitBar.name]: SubmitBar,
    [Stepper.name]: Stepper,
    [SwipeCell.name]: SwipeCell,
    [Button.name]: Button
  },

  data() {
    return {
      checkedGoods: [],
      goods: [{
        id: '1',
        title: '进口香蕉',
        desc: '约250g，2根',
        price: 200,
        num: 1,
        thumb: 'https://img.yzcdn.cn/public_files/2017/10/24/2f9a36046449dafb8608e99990b3c205.jpeg'
      }, {
        id: '2',
        title: '陕西蜜梨',
        desc: '约600g',
        price: 690,
        num: 1,
        thumb: 'https://img.yzcdn.cn/public_files/2017/10/24/f6aabd6ac5521195e01e8e89ee9fc63f.jpeg'
      }, {
        id: '3',
        title: '美国伽力果',
        desc: '约680g/3个',
        price: 2680,
        num: 1,
        thumb: 'https://img.yzcdn.cn/public_files/2017/10/24/320454216bbe9e25c7651e1fa51b31fd.jpeg'
      }]
    };
  },

  computed: {
    submitBarText() {
      const count = this.checkedGoods.length;
      return '结算' + (count ? `(${count})` : '');
    },

    totalPrice() {
      return this.goods.reduce((total, item) => total + (this.checkedGoods.indexOf(item.id) !== -1 ? item.price : 0), 0);
    }
  },

  methods: {
    formatPrice(price) {
      return (price / 100).toFixed(2);
    },

    onSubmit() {
    }
  }
};
</script>

<style lang="less" scoped>
header{
    padding: 10px;
    background: white;
    h1{
        color: #1989fa;
        font-size: 20px;
        margin-bottom: 5px;
    }
    p{
        font-size: 14px
    }
    span{
        color: #1989fa;
        font-weight: bold      
    }
    .edit{
        color: #1989fa;
        margin-top:10px;
        border: none
    }
}
 /deep/ .card-goods{
    background-color: #fff;
    &__item{
        position: relative;
        background-color: #fafafa;
        .van-checkbox__label{
            width: 100%  !important;
            height: auto; // temp
            box-sizing: border-box;
            padding-left: 20px;
        }
        .van-checkbox__icon{
            top: 50%;
            z-index: 1;
            left:5px;
            position: absolute;
            margin-top: -10px;
        }
    }
    .van-swipe-cell{
        .van-button{
            height: 100px;
        }
    }
}
.all-checked{
    margin-left: 10px;
}
</style>
