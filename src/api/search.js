/*
 * @Author: your name
 * @Date: 2020-12-01 16:43:44
 * @LastEditTime: 2020-12-01 16:45:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue_reception\src\api\search.js
 */
import ajax from "@utils/request";
export const reqGetProductList = (data = {}) =>
  ajax({
    method: "POST",
    url: "/list",
    data,
  });
