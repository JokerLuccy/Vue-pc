/*
 * @Author: your name
 * @Date: 2020-11-28 14:58:14
 * @LastEditTime: 2020-12-01 19:59:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue_reception\src\utils\request.js
 */

/**
 * @description:封装拦截器
 * @param {*}
 * @return {*}
 */
import axios from "axios";
import NProgress from "nprogress";
import { Message } from "element-ui";
import "nprogress/nprogress.css";
import store from "@store/index";
const instance = axios.create({
  baseURL: "/api",
});
instance.interceptors.request.use((config) => {
  // Do something before request is sent
  NProgress.start();
  // 携带请求头
  config.headers["userTempId"] = store.state.login.userTempId;
  const token = store.state.login.userInfo.token;
  if (token) {
    config.headers["token"] = token;
  }

  return config;
});
instance.interceptors.response.use(
  (response) => {
    // Do something before response is sent
    NProgress.done();
    if (response.data.code === 200) {
      return response.data.data;
    }
    const { message } = response.data;
    Message.error(message);
    return Promise.reject(response.data.message);
  },
  (error) => {
    // Do something with response error
    NProgress.done();
    const message = error.message || "网络错误";
    Message.error(message);
    return Promise.reject(message);
  }
);
export default instance;
