/*
 * @Author: your name
 * @Date: 2020-12-06 12:35:21
 * @LastEditTime: 2020-12-06 13:35:54
 * @LastEditors: Please set LastEditors
 * @Description: 结算界面
 * @FilePath: \vue_reception\src\store\modules\trade\index.js
 */
import { reqTrade } from "@api/trade";
const state = {
  tradeList: {},
};
const actions = {
  async getTradeList({ commit }) {
    const res = await reqTrade();
    commit("GET_TRADE_LIST", res);
  },
};
const mutations = {
  GET_TRADE_LIST(state, res) {
    state.tradeList = res;
  },
};
const trade = {
  state,
  actions,
  mutations,
};
export default trade;
