/*
 * @Author: your name
 * @Date: 2020-11-27 20:43:48
 * @LastEditTime: 2020-11-27 20:54:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue_reception\src\api\index.js
 */
import ajax from "./api";
export const reqLogin = (phone, password) =>
  ajax(
    "http://182.92.128.115/api/user/passport/login",
    { phone, password },
    "POST"
  );
