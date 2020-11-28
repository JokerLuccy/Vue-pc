/*
 * @Author: your name
 * @Date: 2020-11-28 14:58:14
 * @LastEditTime: 2020-11-28 15:23:37
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
const instance = axios.create({
  baseURL: "/api",
});
instance.interceptors.request.use((config) => {
  // Do something before request is sent
  return config;
});
instance.interceptors.response.use(
  (response) => {
    // Do something before response is sent
    if (response.data.code === 200) {
      return response.data.data;
    }
    return Promise.reject(response.data.message);
  },
  (error) => {
    // Do something with response error
    const message = error.message || "网络错误";
    return Promise.reject(message);
  }
);
export default instance;
