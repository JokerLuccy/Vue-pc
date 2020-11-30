<!--
 * @Author: your name
 * @Date: 2020-11-27 15:56:49
 * @LastEditTime: 2020-11-30 21:30:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue_reception\src\views\Login\index.vue
-->
<template>
  <div>
    <div class="login-wrap">
      <div class="login">
        <div class="loginform">
          <ul class="tab">
            <li>
              <a href="###">扫描登陆</a>
            </li>
            <li>
              <a href="###">账号登陆</a>
            </li>
          </ul>
          <div class="content">
            <form>
              <div class="input-text">
                <i></i>
                <input type="text" placeholder="请输入手机号" v-model="phone" />
              </div>
              <div class="input-text">
                <i class="pwd"></i>
                <input
                  type="password"
                  placeholder="请输入密码"
                  v-model="password"
                />
              </div>
              <div class="setting">
                <label class="checkBox">
                  <input type="checkbox" name="m1" />
                  自动登录
                </label>
                <span class="forget"> 忘记密码? </span>
              </div>
              <button class="btn" @click="login">登录</button>
            </form>
            <div>
              <router-link to="/register">
                <a href="###" class="register">立即注册</a>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <CopyRight />
    </div>
  </div>
</template>

<script>
import CopyRight from "@comps/Footer/copyRight";
import { mapActions } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      phone: "",
      password: "",
    };
  },
  methods: {
    /**
     * @description:登录请求
     * @param {*}
     * @return {*}
     */
    ...mapActions([''])
    login() {},
  },
  components: {
    CopyRight,
  },
};
</script>

<style lang="less" scoped>
.login-wrap {
  height: 487px;
  background-color: #e93854;
}
li {
  width: 50%;
  float: left;
  text-align: center;
  a {
    width: 100%;
    display: block;
    height: 50px;
    line-height: 50px;
    font-size: 20px;
    font-weight: 700;
    color: #333;
    border: 1px solid #ddd;
    box-sizing: border-box;
    text-decoration: none;
  }
}
.login {
  width: 1200px;
  height: 487px;
  margin: 0 auto;
  background: url("./images/loginbg.png") no-repeat;
}
.loginform {
  width: 420px;
  height: 406px;
  box-sizing: border-box;
  background: #fff;
  float: right;
  top: 45px;
  position: relative;
  padding: 20px;
}
.content {
  width: 380px;
  height: 316px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-top: none;
  padding: 18px;
  margin-top: 50px;
  form {
    margin: 15px 0 18px 0;
    font-size: 12px;
    line-height: 18px;

    .input-text {
      margin-bottom: 22px;
      position: relative;
      i {
        float: left;
        width: 37px;
        height: 32px;
        border: 1px solid #ccc;
        background: url("../../assets/images/icons.png") no-repeat -10px -201px;
        box-sizing: border-box;
        border-radius: 2px 0 0 2px;
      }
      input {
        width: 302px;
        height: 32px;
        box-sizing: border-box;
        border: 1px solid #ccc;
        border-left: none;
        float: left;
        padding-top: 6px;
        padding-bottom: 6px;
        font-size: 14px;
        line-height: 22px;
        padding-right: 8px;
        padding-left: 8px;
        border-radius: 0 2px 2px 0;
        outline: none;
      }
      .pwd {
        background-position: -72px -201px;
      }
    }
    .setting {
      label {
        margin-top: 20px;
        float: left;
      }
      .forget {
        margin-top: 20px;

        float: right;
      }
    }
    .btn {
      background-color: #e1251b;
      padding: 6px;
      border-radius: 0;
      font-size: 16px;
      font-family: 微软雅黑;
      word-spacing: 4px;
      border: 1px solid #e1251b;
      color: #fff;
      width: 100%;
      height: 36px;
      margin-top: 25px;
      outline: none;
    }
  }
  .register {
    float: right;
    font-size: 15px;
    line-height: 38px;
  }
}
</style>
