<!--
 * @Author: your name
 * @Date: 2020-11-27 15:56:54
 * @LastEditTime: 2020-11-27 20:31:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue_reception\src\views\Register\index.vue
-->
<template>
  <div class="register-container">
    <div class="register">
      <h3>
        注册新用户
        <span class="go"
          >我有账号,去
          <a href="/#/login">登录</a>
        </span>
      </h3>
      <div class="content">
        <label>手机号</label>
        <input type="text" placeholder="请输入手机号" name="phone" />
        <span class="error-msg"></span>
      </div>
      <div class="content">
        <label>验证码</label>
        <input type="text" placeholder="请输入验证码" name="code" />
        <span class="error-msg"></span>
      </div>
      <div class="content">
        <label>登录密码</label>
        <input type="password" placeholder="请输入密码" name="password" />
        <span class="error-msg"></span>
      </div>
      <div class="content">
        <label>确认密码</label>
        <input
          type="password"
          placeholder="请再次输入确认你密码"
          name="confimPwd"
        />
        <span class="error-msg"></span>
      </div>
      <div class="controls">
        <input type="checkbox" name="协议" />
        <span>同意协议并注册《尚品汇用户协议》</span>
        <span class="error-msg"></span>
      </div>
      <div class="btn">
        <button>完成注册</button>
      </div>
    </div>
    <CopyRight></CopyRight>
  </div>
</template>

<script>
import CopyRight from "../../components/Footer/copyRight";
export default {
  name: "Register",
  components: {
    CopyRight,
  },
};
</script>

<style lang="less" scoped>
.register {
  width: 1200px;
  height: 445px;
  border: 1px solid #dfdfdf;
  margin: 0 auto;
  h3 {
    background: #ececec;
    margin: 0;
    padding: 6px 15px;
    color: #333;
    border-bottom: 1px solid #dfdfdf;
    font-size: 20.04px;
    line-height: 30.06px;
    .go {
      font-size: 14px;
      float: right;
      a {
        color: #e1251b;
      }
    }
  }
}
div:nth-of-type(1) {
  margin-top: 40px;
}
.content {
  padding-left: 390px;
  margin-bottom: 18px;
  position: relative;
  label {
    font-size: 14px;
    width: 96px;
    text-align: right;
    display: inline-block;
  }
  input {
    width: 270px;
    height: 38px;
    padding-left: 8px;
    box-sizing: border-box;
    margin-left: 5px;
    outline: none;
    border: 1px solid #999;
  }
  span {
    position: absolute;
    top: 100%;
    left: 495px;
    color: red;
  }
}
.controls {
  text-align: center;
  position: relative;
  input {
    vertical-align: middle;
  }
  .error-msg {
    position: absolute;
    top: 100%;
    left: 495px;
    color: red;
  }
}
.btn {
  text-align: center;
  line-height: 36px;
  margin: 17px 0 0 55px;
  button {
    outline: none;
    width: 270px;
    height: 36px;
    background: #e1251b;
    color: #fff !important;
    display: inline-block;
    font-size: 16px;
  }
}
</style>
