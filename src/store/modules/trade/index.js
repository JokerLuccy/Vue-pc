/*
 * @Author: your name
 * @Date: 2020-12-06 12:35:21
 * @LastEditTime: 2020-12-06 22:45:19
 * @LastEditors: Please set LastEditors
 * @Description: 结算界面
 * @FilePath: \vue_reception\src\store\modules\trade\index.js
 */
import { reqTrade, reqSubmitOrder, reqCreateNative } from "@api/trade";
const state = {
  tradeList: {},
  orderId: "",
  nativeList: {},
};
const actions = {
  // 获取订单交易页信息
  async getTradeList({ commit }) {
    const res = await reqTrade();
    commit("GET_TRADE_LIST", res);
  },
  // 提交订单
  async submitOrder({ commit }, { tradeNo, data }) {
    const res = await reqSubmitOrder(tradeNo, data);
    commit("SAVE_ORDERID", res);
  },
  // 12.获取订单支付信息
  async getCreateNative({ commit }, orderId) {
    const res = await reqCreateNative(orderId);
    commit("GET_CREATE_NATIVE", res);
  },
};
const mutations = {
  GET_TRADE_LIST(state, res) {
    state.tradeList = res;
  },
  // 保存订单号
  SAVE_ORDERID(state, res) {
    state.orderId = res;
  },
  GET_CREATE_NATIVE(state, res) {
    state.nativeList = res;
  },
};
const trade = {
  state,
  actions,
  mutations,
};
export default trade;
