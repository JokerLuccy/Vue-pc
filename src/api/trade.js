/*
 * @Author: your name
 * @Date: 2020-12-06 12:54:28
 * @LastEditTime: 2020-12-06 12:55:34
 * @LastEditors: Please set LastEditors
 * @Description: trade
 * @FilePath: \vue_reception\src\api\trade.js
 */
import ajax from "@utils/request";
// 获取订单交易页信息
export const reqTrade = () => ajax.get("/order/auth/trade");
