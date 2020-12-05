/*
 * @Author: your name
 * @Date: 2020-12-03 10:41:46
 * @LastEditTime: 2020-12-04 19:05:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue_reception\src\api\addCart.js
 */
import ajax from "@utils/request";

// 添加到购物(改动物品数量)
export const reqAddToCart = (skuId, skuNum) =>
  ajax.post(`/cart/addToCart/${skuId}/${skuNum}`);
// 获取购物车列表
export const reqCarShopList = () => ajax.get("/cart/cartList");
// 切换商品选中状态
export const reqCheckChart = (skuId, isChecked) =>
  ajax.get(`/cart/checkCart/${skuId}/${isChecked}`);
