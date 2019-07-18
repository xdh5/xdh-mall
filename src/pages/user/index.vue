<template>
  <div class="user-wrapper">
    <div class="user-poster">
        <div class="user-info">
            <img src="@/assets/images/下载.jpg">
            <p>咸蛋黄</p>
        </div>
    </div>
    <van-row class="user-links">
      <van-col span="8">
        <van-icon name="pending-payment" />
        待付款
      </van-col>
      <van-col span="8">
        <van-icon name="records" />
        待发货
      </van-col>
      <van-col span="8">
        <van-icon name="logistics" />
        已发货
      </van-col>
    </van-row>
    <van-cell-group>
        <van-cell icon="records" title="全部订单" is-link />
        <van-cell icon="points" title="个人设置" is-link />
    </van-cell-group>
  </div>
</template>

<script>
import { Row, Col, Icon, Cell, CellGroup } from 'vant';

export default {
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
  }
};
</script>

<style lang="less">
.user {
    &-poster {
        width: 100%;
        height: 53vw;
        display: flex;
        align-items: center;
        justify-content: center;
        background: url('~@/assets/images/background.jpg');
        background-size: cover;
    }
    &-info {
        width: 100px;
        height: 100px;
        text-align: center;
        img{
            width: 100%;
            height: 100%;
            border-radius: 50%;
            margin-bottom: 5px;
        }
    }
    &-group {
        margin-bottom: 15px;
    }
    &-links {
        padding: 15px 0;
        font-size: 12px;
        text-align: center;
        background-color: #fff;
        .van-icon {
        display: block;
        font-size: 24px;
        }
    }
}
.van-cell-group {
    margin-top: 20px;
}
</style>
