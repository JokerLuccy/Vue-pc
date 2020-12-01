/*
 * @Author: your name
 * @Date: 2020-12-01 16:45:37
 * @LastEditTime: 2020-12-01 17:48:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue_reception\src\store\modules\search\index.js
 */
import { reqGetProductList } from "@api/search";
const state = {
  productList: {
    trademarkList: [],
    attrsList: [],
    goodsList: [],
  },
};
const actions = {
  async getProductList({ commit }, data = {}) {
    const res = await reqGetProductList(data);
    commit("GET_PRODUCT_LIST", res);
  },
};
const mutations = {
  GET_PRODUCT_LIST(state, res) {
    state.productList = res;
  },
};
const getters = {
  trademarkList(state) {
    return state.productList.trademarkList;
  },
  attrsList(state) {
    return state.productList.attrsList;
  },
  goodsList(state) {
    return state.productList.goodsList;
  },
};
const search = {
  state,
  actions,
  mutations,
  getters,
};
export default search;
