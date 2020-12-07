<!--
 * @Author: your name
 * @Date: 2020-12-07 08:48:29
 * @LastEditTime: 2020-12-07 21:17:09
 * @LastEditors: Please set LastEditors
 * @Description: 支付成功界面
 * @FilePath: \vue_reception\src\views\pay\paysuccess\index.vue
-->
<template>
  <div class="paysuccess">
    <div class="success">
      <h3>
        <i class="iconfont icon-gou"></i>
        恭喜您，支付成功啦！
      </h3>
      <div class="paydetail">
        <p class="btn">
          <a class="btn-look" @click="$router.replace('/center')">查看订单</a>
          <a class="btn-goshop" @click="$router.replace('/')">继续购物</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PaySuccess",
};
</script>

<style lang="less" scoped>
.paysuccess {
  margin: 20px auto;
  padding: 25px;
  border: 1px solid #d3d3d3;
  width: 1200px;
  width: 1148px;
  .success {
    width: 500px;
    margin: 0 auto;
    h3 {
      margin: 20px 0;
      font-weight: 700;
      font-size: 20px;
      line-height: 30px;
      i {
        background-color: #fff;
        border: 2px solid #6aaf04;
        padding: 3px;
        margin-right: 8px;
        border-radius: 15px;
      }
    }
    .paydetail {
      margin-left: 66px;
      font-size: 15px;
      .btn {
        margin: 30px 0;
        line-height: 26px;
        .btn-look {
          width: 114px;
          height: 32px;
          margin-right: 13px;
          color: #fff;
          background-color: #e1251b;
          border: 1px solid #e1251b;
        }
        .btn-goshop {
          color: #666;
          background-color: #eee;
          border: 1px solid #e1e1e1;
        }
      }
    }
  }
}
</style>