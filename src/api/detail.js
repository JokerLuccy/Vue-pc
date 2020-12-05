/*
 * @Author: your name
 * @Date: 2020-12-04 19:05:28
 * @LastEditTime: 2020-12-04 19:12:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue_reception\src\api\detail.js
 */
import ajax from "@utils/request";
// 获取商品详情
export const reqProductDetail = (skuId) => ajax.get(`/item/${skuId}`);
