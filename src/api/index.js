/*
 * @Author: your name
 * @Date: 2020-11-27 20:43:48
 * @LastEditTime: 2020-11-28 15:21:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue_reception\src\api\index.js
 */
import ajax from "@utils/request";
/**
 * @description:登录请求
 * @param {*} phone 手机号
 * @param {*} password  密码
 * @return {*}
 */
export const reqLogin = (phone, password) =>
  ajax({
    method: "POST",
    url: "/user/passport/login",
    data: {
      phone,
      password,
    },
  });
