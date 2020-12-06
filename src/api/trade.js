/*
 * @Author: your name
 * @Date: 2020-12-06 12:54:28
 * @LastEditTime: 2020-12-06 22:42:50
 * @LastEditors: Please set LastEditors
 * @Description: trade
 * @FilePath: \vue_reception\src\api\trade.js
 */
import ajax from "@utils/request";
// 获取订单交易页信息
export const reqTrade = () => ajax.get("/order/auth/trade");
// 提交订单
export const reqSubmitOrder = (tradeNo, data) =>
  ajax.post(`/order/auth/submitOrder?tradeNo=${tradeNo}`, data);
// 获取订单支付信息
export const reqCreateNative = (orderId) =>
  ajax.get(`/payment/weixin/createNative/${orderId}`);
