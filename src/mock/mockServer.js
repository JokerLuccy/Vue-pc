/*
 * @Author: your name
 * @Date: 2020-11-30 19:12:28
 * @LastEditTime: 2020-12-01 15:29:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue_reception\src\mock\mockServer.js
 */
import Mock from "mockjs";
import banners from "./rBanners.json";
import floors from "./rFloors.json";
import like from "./rLike.json";
/*
    一旦运行就会拦截get请求，请求地址 /mock/banners
*/
Mock.mock("/mock/banners", "get", {
  code: 200,
  "data|4": banners,
});
Mock.mock("/mock/floors", "get", {
  code: 200,
  "data|2": floors,
});
Mock.mock("/mock/like", "get", {
  code: 200,
  "data|6": like,
});
