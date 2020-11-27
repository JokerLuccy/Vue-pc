<!--
 * @Author: your name
 * @Date: 2020-11-27 15:45:15
 * @LastEditTime: 2020-11-27 18:22:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue_reception\src\components\Header\index.vue
-->
<template>
  <header class="header">
    <!-- header First line -->
    <div class="header-top">
      <div class="header-container">
        <div class="header-login">
          <span>
            尚品汇欢迎您! 请
            <router-link to="/login">
              <a href="###">登录</a>
            </router-link>
            <router-link to="/register">
              <a href="###">免费注册</a>
            </router-link>
          </span>
        </div>

        <div class="header-typeList">
          <a href="###">我的订单</a>
          <a href="###">我的购物车</a>
          <a href="###">我的尚品汇</a>
          <a href="###">尚品汇会员</a>
          <a href="###">企业采购</a>
          <a href="###">关注尚品汇</a>
          <a href="###">合作招商</a>
          <a href="###">商家后台</a>
        </div>
      </div>
    </div>
    <!-- header Second line -->
    <div class="header-bottom">
      <h1 class="header-bottom-logoArea">
        <img src="./images/logo.png" alt="logo" />
      </h1>
      <div class="header-bottom-searchArea">
        <form>
          <input type="text" />
          <button>搜索</button>
        </form>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>
<style lang="less" scoped>
.header {
  .header-top {
    background-color: #eaeaea;
    height: 30px;
    line-height: 30px;
  }
  .header-container {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    .header-login {
      a {
        text-decoration: none;
        color: #666;
        padding: 0 3px;

        cursor: pointer;
      }
    }
    .header-typeList {
      a {
        text-decoration: none;
        color: #666;
        padding: 0 10px;
        cursor: pointer;
      }
    }
  }
  .header-bottom {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    img {
      border: none;
    }
    input {
      box-sizing: border-box;
      width: 490px;
      height: 32px;
      padding: 0px 4px;
      border: 2px solid #ea4a36;
      float: left;
    }
    button {
      height: 32px;
      width: 68px;
      background-color: #ea4a36;
      border: none;
      color: #fff;
      float: left;
      cursor: pointer;
    }
  }
}
</style>
