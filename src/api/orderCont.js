/*
 * @Author: your name
 * @Date: 2020-12-07 19:12:08
 * @LastEditTime: 2020-12-07 19:13:20
 * @LastEditors: Please set LastEditors
 * @Description: 订单详情
 * @FilePath: \vue_reception\src\api\orderCont.js
 */
import ajax from "@utils/request";
// 获取订单列表
export const reqOrderAuth = (page, limit) =>
  ajax.get(`/order/auth/${page}/${limit}`);
