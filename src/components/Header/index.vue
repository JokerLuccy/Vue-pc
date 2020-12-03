<!--
 * @Author: your name
 * @Date: 2020-11-27 15:45:15
 * @LastEditTime: 2020-12-02 21:13:16
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
          <span v-if="userInfo.token">
            尚品汇欢迎您! 请

            <span>{{ userInfo.name }}</span>

            <a href="###" @click="loginOut">退出</a>
          </span>

          <span v-else>
            尚品汇欢迎您! 请
            <router-link to="/login">
              <a href="###">登录</a>
            </router-link>
            <router-link to="/register">
              <a href="###"> 免费注册</a>
            </router-link>
          </span>
        </div>

        <div class="header-typeList">
          <a href="###">我的订单</a>
          <router-link to="/carshop">
            <a href="###">我的购物车</a>
          </router-link>

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
        <img src="./images/logo.png" alt="logo" @click="$router.push('/')" />
      </h1>
      <div class="header-bottom-searchArea">
        <form>
          <input type="text" v-model="searchContent" />
          <button type="button" @click="search">搜索</button>
        </form>
      </div>
    </div>
  </header>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Header",
  data() {
    return {
      searchContent: "",
    };
  },
  computed: {
    ...mapState({
      userInfo: (state) => state.login.userInfo,
    }),
  },
  methods: {
    ...mapActions(["userLoginOut"]),
    /**
     * @description: 搜索跳转
     * @param {*}
     * @return {*}
     */
    search() {
      const { $router, searchContent } = this,
        location = {
          name: "search",
        };
      if (searchContent) {
        location.params = {
          searchContent,
        };
      }
      const { categoryName } = this.$route.query;
      if (categoryName) {
        location.query = this.$route.query;
      }
      /**
       * 根据地址栏选择跳转方式,解决回退到主页的问题
       */
      if (this.$route.path.includes("/search")) {
        $router.replace(location);
      } else {
        $router.push(location);
      }
    },
    /**
     * @description：退出登录
     * @param {*}
     * @return {*}
     */
    loginOut() {
      if (confirm("确定要退出？")) {
        this.userLoginOut();
        this.$router.push("/login");
      }
    },
  },
  watch: {
    /**
     * 监听地址栏，清空search内容
     */
    $route: {
      handler() {
        if (this.$route.path === "/") this.searchContent = "";
      },
      immediate: true,
    },
  },
  mounted() {
    /**清空搜索框的文字 */
    this.$bus.$on("clearKeyWord", () => {
      this.searchContent = "";
    });
  },
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
      margin-top: 15px;
      padding: 0px 4px;
      border: 2px solid #ea4a36;
      float: left;
    }
    button {
      height: 32px;
      width: 68px;
      margin-top: 15px;
      background-color: #ea4a36;
      border: none;
      color: #fff;
      float: left;
      cursor: pointer;
    }
  }
}
</style>
