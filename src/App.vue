<!--
 * @Author: your name
 * @Date: 2020-11-27 14:13:36
 * @LastEditTime: 2020-11-28 16:06:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue_reception\src\App.vue
-->
<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer v-if="!$route.meta.isHideFooter"></Footer>
  </div>
</template>

<script>
import Header from "@comps/Header";
import Footer from "@comps/Footer";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="less" scoped></style>
