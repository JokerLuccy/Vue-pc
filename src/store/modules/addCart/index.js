/*
 * @Author: your name
 * @Date: 2020-12-03 12:42:53
 * @LastEditTime: 2020-12-04 09:53:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue_reception\src\store\modules\addCart\index.js
 */
import { reqAddToCart, reqCarShopList, reqCheckChart } from "@api/addCart";
const state = {
  carShopList: [],
  checkedAll: false,
};
const actions = {
  /**
   * 添加到购物车
   */
  async addCart({ commit }, { skuId, skuNum }) {
    await reqAddToCart(skuId, skuNum);
    console.log(commit);
  },
  /**
   * 获取购物车列表
   */
  async getCarShopList({ commit }) {
    const res = await reqCarShopList();

    commit("GET_CARSHOP_LIST", res);
  },

  /**
   * 切换商品状态
   */
  async checkChart({ commit }, { skuId, isChecked }) {
    console.log(commit);
    await reqCheckChart(skuId, isChecked);
  },
  /**
   * 全选
   */
  checkAll({ commit }, checkedAll) {
    commit("CHECK_ALL", checkedAll);
  },
};
const mutations = {
  GET_CARSHOP_LIST(state, res) {
    state.carShopList = res;
  },
  CHECK_ALL(state, checkedAll) {
    state.checkedAll = checkedAll;
  },
};
const getters = {
  checkedTotal(state) {
    return state.carShopList.reduce((p, c) => {
      if (c.isChecked) {
        return p + c.skuNum;
      } else {
        return p;
      }
    }, 0);
  },
  totalPrice(state) {
    return state.carShopList.reduce((p, c) => {
      if (c.isChecked) {
        return p + c.cartPrice * c.skuNum;
      } else {
        return p;
      }
    }, 0);
  },
  checkAllList(state) {
    const isChecked = state.checkAll ? 1 : 0;
    return state.carShopList.forEach((item) => {
      item.isChecked = isChecked;
      console.log(item);
    });
  },
};
const addCart = {
  state,
  actions,
  mutations,
  getters,
};
export default addCart;
