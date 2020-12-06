<!--
 * @Author: your name
 * @Date: 2020-12-02 20:58:06
 * @LastEditTime: 2020-12-06 15:23:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue_reception\src\views\CarShop\index.vue
-->
<template>
  <div class="cart">
    <h4>全部商品</h4>
    <div class="cart-main">
      <div class="cart-th">
        <div class="cart-th1">全部</div>
        <div class="cart-th2">商品</div>
        <div class="cart-th3">单价(元)</div>
        <div class="cart-th4">数量</div>
        <div class="cart-th5">小计(元)</div>
        <div class="cart-th6">操作</div>
      </div>
      <div class="cart-body" v-for="carShop in carShopList" :key="carShop.id">
        <ul class="cart-list">
          <li class="cart-list-con1">
            <input
              type="checkbox"
              name="chk_list"
              :checked="carShop.isChecked === 1"
              @change="check_Chart(carShop.skuId, carShop.isChecked)"
            />
          </li>
          <li class="cart-list-con2">
            <img :src="carShop.imgUrl" alt="product-list" />
            <div class="img-msg">{{ carShop.skuName }}</div>
          </li>
          <li class="cart-list-con4">
            <span class="price">{{ carShop.skuPrice }}</span>
          </li>
          <li class="cart-list-con5">
            <a class="mins" @click="mins(carShop.skuId)">-</a>
            <input
              type="text"
              class="itxt"
              autocomplete="off"
              :value="carShop.skuNum"
            />
            <a class="plus" @click="plus(carShop.skuId)">+</a>
          </li>
          <li class="cart-list-con6">
            <span class="sum">{{ carShop.cartPrice }}</span>
          </li>
          <li class="cart-list-con7">
            <a class="sindelet" @click="delCart(carShop.skuId)">删除</a>
            <br />
            <a> 移到收藏</a>
          </li>
        </ul>
      </div>
      <div class="cart-tool">
        <div class="select-all">
          <input
            type="checkbox"
            class="chooseAll"
            v-model="isCheckAll"
            @change="check_All"
          />
          <span>全选</span>
        </div>
        <div class="option">
          <a @click="clearSelectCart">删除选中的商品</a>
          <a>移到我的关注</a>
          <a>清除下柜商品</a>
        </div>
        <div class="money-box">
          <div class="chosed">
            已选择
            <span>{{ checkedTotal }}</span>
            件商品
          </div>
          <div class="sumprice">
            <em>总价(不含运费):</em>
            <i class="summoney">{{ totalPrice }}</i>
          </div>
          <div class="sumbtn">
            <a class="sum-btn" @click="settlement">结算</a>
          </div>
        </div>
      </div>
      <CopyRight></CopyRight>
    </div>
  </div>
</template>

<script>
import CopyRight from "@comps/Footer/copyRight";
import { mapActions, mapState, mapGetters } from "vuex";
export default {
  name: "CarShop",
  data() {
    return {
      isCheckAll: true,
    };
  },
  computed: {
    ...mapState({
      carShopList: (state) => state.addCart.carShopList,
    }),
    ...mapGetters(["checkedTotal", "totalPrice"]),
  },
  watch: {
    carShopList(val) {
      const res = val.every((item) => item.isChecked !== 0);
      this.isCheckAll = res;
    },
  },
  methods: {
    ...mapActions([
      "getCarShopList",
      "addCart",
      "checkChart",
      "checkAll",
      "deleteCart",
    ]),
    /**
     * 增加
     */
    async plus(skuId) {
      await this.addCart({ skuId, skuNum: 1 });
      await this.getCarShopList();
    },
    /**
     * 减少
     */
    async mins(skuId) {
      await this.addCart({ skuId, skuNum: -1 });
      await this.getCarShopList();
    },
    /**
     * 切换商品状态
     */
    async check_Chart(skuId, isChecked) {
      const is_Checked = isChecked ? 0 : 1;
      await this.checkChart({ skuId, isChecked: is_Checked });
      await this.getCarShopList();
    },
    /**
     * 选中所有
     */
    async check_All() {
      const { carShopList, isCheckAll } = this;
      const isChecked = isCheckAll ? 1 : 0;
      carShopList.forEach((item) => {
        item.isChecked = isChecked;
        this.checkChart({ skuId: item.skuId, isChecked: item.isChecked });
      });
    },
    /**
     * 删除购物车选中的
     */
    clearSelectCart() {
      const { carShopList, deleteCart } = this;

      carShopList.forEach(async (item) => {
        if (item.isChecked) {
          await deleteCart(item.skuId);
          await this.getCarShopList();
          if (!this.carShopList.length) this.isCheckAll = false;
        }
      });
    },
    /**
     * 删除单个购物清单
     */
    async delCart(skuId) {
      if (confirm("确定要删除吗")) {
        await this.deleteCart(skuId);
        await this.getCarShopList();
        if (!this.carShopList.length) this.isCheckAll = false;
      }
    },
    /**
     * 结算
     */
    settlement() {
      const userInfo = JSON.parse(window.localStorage.getItem("user_info"));
      if (!this.carShopList.length) {
        confirm("请添加商品再结算");
        return;
      }
      userInfo ? this.$router.push("/trade") : this.$router.push("/login");
    },
  },
  mounted() {
    // 获取购物车列表
    this.getCarShopList();
  },
  components: {
    CopyRight,
  },
};
</script>

<style lang="less" scoped>
.cart {
  width: 1200px;
  margin: 0 auto;
}
h4 {
  margin: 9px 0;
  font-size: 14px;
  line-height: 21px;
}
.cart-th {
  background: #f5f5f5;
  border: 1px solid #ddd;
  padding: 10px;
  overflow: hidden;
  display: flex;
}
.cart-th1 {
  width: 5%;
}
.cart-th2 {
  width: 35%;
}

.cart-th3 {
  width: 15%;
}
.cart-th4 {
  width: 15%;
}
.cart-th5 {
  width: 15%;
}
.cart-th6 {
  width: 15%;
}
.cart-body {
  margin: 15px 0;
  border: 1px solid #ddd;
}

.cart-body {
  padding: 10px;
  border-bottom: 1px solid #ddd;
  overflow: hidden;

  .cart-list {
    display: flex;
    .cart-list-con1 {
      width: 5%;
    }
    .cart-list-con2 {
      width: 35%;
      display: flex;

      img {
        width: 82px;
        height: 82px;
      }
      .img-msg {
        width: 150px;
        margin: 0 10px;
        line-height: 18px;
      }
    }
    .cart-list-con4 {
      width: 15%;
    }
    .cart-list-con5 {
      width: 15%;
      display: flex;
      a {
        text-decoration: none;
      }
      .mins {
        border-right: 0;
        color: #666;
        width: 6px;
        text-align: center;
        padding: 8px;
        height: 33px;
      }
      .plus {
        border-left: 0;
        height: 33px;

        color: #666;
        width: 6px;
        text-align: center;
        padding: 8px;
      }
      input {
        border: 1px solid #ddd;
        width: 40px;
        height: 33px;

        text-align: center;
        font-size: 14px;
      }
    }
    .cart-list-con6 {
      width: 15%;
      font-size: 14px;
    }
    .cart-list-con7 {
      width: 15%;
      a {
        color: #666;
      }
    }
  }
}
.cart-tool {
  overflow: hidden;
  border: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  .select-all {
    display: flex;
    align-items: center;
    overflow: hidden;
    padding: 10px;
  }
  .option {
    display: flex;
    padding: 10px;
    overflow: hidden;
    a {
      padding: 10px;
      overflow: hidden;
    }
  }
  .money-box {
    display: flex;
    align-items: center;
    .chosed {
      padding: 10px;
      line-height: 26px;
    }
    .sumprice {
      display: flex;
      align-items: center;
      padding: 0 10px;
      width: 200px;
      line-height: 22px;
      i {
        color: #c81623;
        font-size: 16px;
      }
    }
    .sumbtn {
      .sum-btn {
        display: block;
        position: relative;
        width: 96px;
        height: 52px;
        line-height: 52px;
        color: #fff;
        text-align: center;
        font-size: 18px;
        font-family: "Microsoft YaHei";
        background: #e1251b;
        overflow: hidden;
      }
    }
  }
}
</style>