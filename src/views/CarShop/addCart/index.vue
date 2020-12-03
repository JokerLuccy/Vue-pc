<!--
 * @Author: your name
 * @Date: 2020-12-03 10:54:18
 * @LastEditTime: 2020-12-03 14:34:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue_reception\src\views\CarShop\addCart\index.vue
-->
<template>
  <div class="cart-complete-wrap">
    <div class="cart-complete">
      <h3>
        <i class="iconfont icon-gou"></i>
        商品已成功加入购物车！
      </h3>
      <div class="goods">
        <div class="left-good">
          <div class="left-pic">
            <img :src="skuDefaultImg" alt="product-pic" />
          </div>
          <div class="right-info">
            <p class="title">{{ skuName }}</p>
            <p class="attr">
              颜色：WFZ5099IH/5L钛金釜内胆 数量：{{ $route.query.skuNum }}
            </p>
          </div>
        </div>
        <div class="right-gocart">
          <a class="sui-btn btn-xlarge">查看商品详情</a>
          <a @click="goToCart">去购物结算</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddCart",
  data() {
    return {
      skuName: "",
      skuDefaultImg: "",
    };
  },
  methods: {
    ...mapActions(["getPorductDeatils"]),
    /**
     * 跳转到购物车结算界面
     */
    goToCart() {
      this.$router.push("/carhop");
    },
  },
  mounted() {
    const skuInfo = JSON.parse(window.sessionStorage.getItem("SKU_INFO"));
    this.skuName = skuInfo.skuName;
    this.skuDefaultImg = skuInfo.skuDefaultImg;
  },
};
</script>

<style lang="less" scoped>
.cart-complete-wrap {
  background-color: #f4f4f4;
}
.cart-complete {
  width: 1200px;
  margin: 0 auto;

  h3 {
    font-weight: 400;
    font-size: 16px;
    color: #6aaf04;
    padding-top: 15px;
    padding-bottom: 15px;
    margin: 0;
    i {
      background-color: #fff;
      border: 2px solid #6aaf04;
      padding: 3px;
      margin-right: 8px;
      border-radius: 15px;
    }
  }
  .goods {
    overflow: hidden;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    .left-good {
      display: flex;
      .left-pic {
        border: 1px solid #dfdfdf;
        width: 60px;
        img {
          width: 60px;
          height: 60px;
        }
      }
      .right-info {
        color: #444;
        margin-left: 10px;
        .title {
          width: 100%;
          line-height: 28px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-size: 14px;
        }
        .attr {
          color: #aaa;
        }
      }
    }
    .right-gocart {
      a {
        padding: 7px 36px;
        font-size: 15px;
        line-height: 22px;
        color: #333;
        background-color: #eee;
        text-decoration: none;
        box-sizing: border-box;
        border: 1px solid #e1e1e1;
      }
    }
  }
}
</style>