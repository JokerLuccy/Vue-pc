/*
 * @Author: your name
 * @Date: 2020-11-28 18:44:59
 * @LastEditTime: 2020-11-28 19:10:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue_reception\src\api\home.js
 */
import ajax from "@utils/request";
export const reqGetBaseCategoryList = () =>
  ajax({
    method: "GET",
    url: "/product/getBaseCategoryList",
  });
