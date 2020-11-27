<!--
 * @Author: your name
 * @Date: 2020-11-27 19:04:51
 * @LastEditTime: 2020-11-27 19:05:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue_reception\src\components\Footer\copyRight\index.vue
-->
<template>
  <div class="footer-copyRight">
    <ul class="helpLink">
      <li>关于我们</li>
      <li>联系我们</li>
      <li>关于我们</li>
      <li>商家入驻</li>
      <li>营销中心</li>
      <li>友情链接</li>
      <li>关于我们</li>
      <li>关于我们</li>
      <li>友情链接</li>
      <li>关于我们</li>
    </ul>
    <p>地址：北京市昌平区宏福科技园综合楼6层</p>
    <p>京ICP备19006430号</p>
  </div>
</template>

<script>
export default {
  name: "CopyRight",
};
</script>

<style lang="less" scoped>
.footer-copyRight {
  padding: 20px;

  ul {
    text-align: center;
    li {
      display: inline;
      margin-right: 10px;
    }
  }
  p {
    margin: 10px 0;
    text-align: center;
  }
}
</style>
