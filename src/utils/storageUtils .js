/*
 * @Author: your name
 * @Date: 2020-11-30 22:52:38
 * @LastEditTime: 2020-12-01 18:37:31
 * @LastEditors: Please set LastEditors
 * @Description: localstory 函数管理工具
 * @FilePath: \vue_reception\src\utils\storageUtils .js
 */
import store from "store";
import { v4 as uuidv4 } from "uuid";
const USER_INFO = "user_info"; //用户登录信息
const USER_TEMP_ID_KEY = "user_temp_id_key"; // 用户的临时id
/**
 * @description: 保存/删除用户信息
 * @param {*} user
 * @return {*}
 */
export function saveUserInfo(user) {
  store.set(USER_INFO, user);
}
export function getUserInfo() {
  // 如果没有,就是空对象
  return store.get(USER_INFO) || {};
}
export function removeUserInfo() {
  store.remove(USER_INFO);
}
/**
 * @description: 获取用户临时token
 * @param {*}
 * @return {*}
 */
export function getUserTempId() {
  let userTempId = store.get(USER_TEMP_ID_KEY);
  if (!userTempId) {
    userTempId = uuidv4();
    store.set(USER_TEMP_ID_KEY, userTempId);
  }
  return userTempId;
}
