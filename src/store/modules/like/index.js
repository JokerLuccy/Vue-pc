/*
 * @Author: your name
 * @Date: 2020-12-01 15:31:18
 * @LastEditTime: 2020-12-01 16:35:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue_reception\src\store\modules\like\index.js
 */
import { reqGetLikes } from "@api/home";
const state = {
  likesList: {},
};
const actions = {
  async getLikes({ commit }) {
    const res = await reqGetLikes();
    commit("GET_LIKES", res);
  },
};
const mutations = {
  GET_LIKES(state, res) {
    state.likesList = res;
  },
};
const like = {
  state,
  actions,
  mutations,
};
export default like;
