<!--
 * @Author: your name
 * @Date: 2020-11-27 15:56:54
 * @LastEditTime: 2020-12-02 08:39:31
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
        <input
          type="text"
          placeholder="请输入手机号"
          name="phone"
          v-model="phone"
          v-validate="{ required: true, regex: /^1\d{10}$/ }"
          :class="{ invalid: errors.has('phone') }"
        />
        <span class="error-msg">{{ errors.first("phone") }}</span>
      </div>
      <div class="content">
        <label>验证码</label>
        <input
          type="text"
          placeholder="请输入验证码"
          name="code"
          v-model="code"
          v-validate="{ required: true, regex: /^\d{4}$/ }"
          :class="{ invalid: errors.has('code') }"
        />
        <img
          src="/api/user/passport/code"
          alt="code"
          @click="getCode"
          ref="code"
        />
        <span class="error-msg">{{ errors.first("code") }}</span>
      </div>
      <div class="content">
        <label>登录密码</label>
        <input
          type="password"
          placeholder="请输入密码"
          name="password"
          v-model="password"
          v-validate="{ required: true, regex: /^\d{6}$/ }"
          :class="{ invalid: errors.has('password') }"
        />
        <span class="error-msg">{{ errors.first("password") }}</span>
      </div>
      <div class="content">
        <label>确认密码</label>
        <input
          type="password"
          placeholder="请再次输入确认你密码"
          name="confirPwd"
          v-model="confirPwd"
          v-validate="{ required: true, is: password }"
          :class="{ invalid: errors.has('confirPwd') }"
        />
        <span class="error-msg">{{ errors.first("confirPwd") }}</span>
      </div>
      <div class="controls">
        <input
          type="checkbox"
          name="协议"
          v-model="isAgree"
          v-validate="{ agree: true }"
          :class="{ invalid: errors.has('协议') }"
        />
        <span>同意协议并注册《尚品汇用户协议》</span>
        <span class="error-msg">{{ errors.first("协议") }}</span>
      </div>
      <div class="btn">
        <button :disabled="!isAgree" @click="getRegister">完成注册</button>
      </div>
    </div>
    <CopyRight></CopyRight>
  </div>
</template>

<script>
import { reqRegister } from "@api/register";
import CopyRight from "../../components/Footer/copyRight";

export default {
  name: "Register",
  data() {
    return {
      phone: "",
      code: "",
      password: "",
      confirPwd: "",
      isAgree: false,
    };
  },
  methods: {
    getCode() {
      this.$refs.code.src = "/api/user/passport/code";
    },
    async getRegister() {
      const { phone, password, code, $router } = this;
      const data = {
        phone,
        password,
        code,
      };
      await reqRegister(data);
      $router.push("/login");
    },
  },
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
  img {
    position: relative;
    top: 6px;
  }
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
