/*
 * @Author: your name
 * @Date: 2020-12-01 20:01:13
 * @LastEditTime: 2020-12-01 21:08:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue_reception\src\api\regester.js
 */
import ajax from "@utils/request";
/**
 * @description:获取验证码
 * @param {*}
 * @return {*}
 */
export const reqCode = () =>
  ajax({
    method: "GET",
    url: "/user/passport/code",
  });

/**
 * @description: 注册用户
 * @param {Object} data
 * @return {*}
 */
export const reqRegister = (data) =>
  ajax({ method: "POST", url: "/user/passport/register", data });
