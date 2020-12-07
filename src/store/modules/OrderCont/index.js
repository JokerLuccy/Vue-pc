/*
 * @Author: your name
 * @Date: 2020-12-07 19:07:49
 * @LastEditTime: 2020-12-07 21:21:01
 * @LastEditors: Please set LastEditors
 * @Description: 订单列表
 * @FilePath: \vue_reception\src\store\modules\OrderCont\index.js
 */
import { reqOrderAuth } from "@api/orderCont";
const state = {
  records: [],
  orderAuthList: {},
};
const actions = {
  /**
   * @description:获取订单详情列表
   * @param {string} page 页码
   * @param {string} limit 每页显示的数量
   * @return {}
   */
  async getRecords({ commit }, { page, limit }) {
    const res = await reqOrderAuth(page, limit);
    console.log(res);
    commit("SAVE_RECORDS", res);
  },
};
const mutations = {
  SAVE_RECORDS(state, res) {
    state.orderAuthList = res;
  },
};
const getters = {
  orderTotalPrice(state) {
    return state.orderAuthList.records.reduce((p, c) => {
      return (
        p +
        c.orderDetailList.reduce((t, v) => {
          return t + v.orderPrice * v.skuNum;
        }, 0)
      );
    }, 0);
  },
};
const orderCont = {
  state,
  actions,
  mutations,
  getters,
};
export default orderCont;
