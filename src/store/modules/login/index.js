/*
 * @Author: your name
 * @Date: 2020-11-30 21:19:01
 * @LastEditTime: 2020-12-05 16:12:03
 * @LastEditors: Please set LastEditors
 * @Description: Login 的 Vuex
 * @FilePath: \vue_reception\src\store\modules\login\index.js
 */
import { reqLogin, reqLoginOut } from "@api/user";
import {
  saveUserInfo,
 
  getUserInfo,
  removeUserInfo,
} from "@utils/storageUtils ";
const state = {
  userInfo: getUserInfo(), // 当前登录用户的信息
 
};
const actions = {
  /**
   * @description: 登录
   * @param {Object} data 手机号和密码
   * @return {*}
   */
  async userLogin({ commit }, data) {
    const res = await reqLogin(data);
    const userInfo = res;
    saveUserInfo(userInfo);
    commit("RECEIVE_USER_INFO", userInfo);
  },
  /**
   * @description:退出登录
   * @param {*}
   * @return {*}
   */
  async userLoginOut({ commit }) {
    await reqLoginOut();
    removeUserInfo();
    commit("RESET_USER_INFO");
  },
};
const mutations = {
  /**
   * @description: 登录
   * @param {Object} state
   * @param {Object} userInfo 用户信息
   * @return {*}
   */
  RECEIVE_USER_INFO(state, userInfo) {
    state.userInfo = userInfo;
    
  },
  /**
   * @description: 退出登录
   * @param {Object} state
   * @param {Object} userInfo
   * @return {*}
   */
  RESET_USER_INFO(state) {
    state.userInfo = {};
   
  },
};

const login = {
  state,
  actions,
  mutations,
};
export default login;
