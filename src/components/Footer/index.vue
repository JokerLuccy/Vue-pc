<!--
 * @Author: your name
 * @Date: 2020-11-27 15:45:23
 * @LastEditTime: 2020-11-27 19:07:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue_reception\src\components\Footer\index.vue
-->
<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-list">
        <div class="footer-Item">
          <h4>购物指南</h4>
          <ul>
            <li>购物流程</li>
            <li>会员介绍</li>
            <li>生活旅行/团购</li>
            <li>常见问题</li>
            <li>购物指南</li>
          </ul>
        </div>
        <div class="footer-Item">
          <h4>配送方式</h4>
          <ul>
            <li>上门自提</li>
            <li>211限时达</li>
            <li>配送服务查询</li>
            <li>配送费收取标准</li>
            <li>海外配送</li>
          </ul>
        </div>
        <div class="footer-Item">
          <h4>支付方式</h4>
          <ul class="footer-Item-Con">
            <li>货到付款</li>
            <li>在线支付</li>
            <li>分期付款</li>
            <li>邮局汇款</li>
            <li>公司转账</li>
          </ul>
        </div>
        <div class="footer-Item">
          <h4>售后服务</h4>
          <ul class="footer-Item-Con">
            <li>售后政策</li>
            <li>价格保护</li>
            <li>退款说明</li>
            <li>返修/退换货</li>
            <li>取消订单</li>
          </ul>
        </div>
        <div class="footer-Item">
          <h4>特色服务</h4>
          <ul class="footer-Item-Con">
            <li>夺宝岛</li>
            <li>DIY装机</li>
            <li>延保服务</li>
            <li>尚品汇E卡</li>
            <li>尚品汇通信</li>
          </ul>
        </div>
        <div class="footer-Item">
          <h4>购物指南</h4>
          <ul class="footer-Item-Con">
            <li>购物流程</li>
            <li>会员介绍</li>
            <li>生活旅行/团购</li>
            <li>常见问题</li>
            <li>购物指南</li>
          </ul>
        </div>
        <div class="footer-Item">
          <h4>帮助中心</h4>
          <img src="./images/wx_cz.jpg" alt="wx_cz" />
        </div>
      </div>
      <CopyRight></CopyRight>
    </div>
  </footer>
</template>

<script>
import CopyRight from "./copyRight";
export default {
  name: "Footer",
  components: {
    CopyRight,
  },
};
</script>

<style lang="less" scoped>
.footer {
  background-color: #eaeaea;
}
.footer-container {
  width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}
.footer-list {
  padding: 20px;
  border-bottom: 1px solid #e4e1e1;
  border-top: 1px solid #e4e1e1;
  overflow: hidden;
  padding-left: 40px;
  display: flex;
}
.footer-Item {
  width: 16.6666667%;
  float: left;
  h4 {
    font-size: 14px;
  }
}
img {
  width: 121px;
  border: none;
}
</style>
