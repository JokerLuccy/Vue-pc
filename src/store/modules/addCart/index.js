/*
 * @Author: your name
 * @Date: 2020-12-03 12:42:53
 * @LastEditTime: 2020-12-06 15:13:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue_reception\src\store\modules\addCart\index.js
 */
import {
  reqAddToCart,
  reqCarShopList,
  reqCheckChart,
  reqDeleteCart,
} from "@api/addCart";
const state = {
  carShopList: [],
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
   * 删除购物车选中的商品
   */
  async deleteCart({ commit }, skuId) {
    await reqDeleteCart(skuId);
    console.log(commit);
  },
};
const mutations = {
  GET_CARSHOP_LIST(state, res) {
    state.carShopList = res;
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
};
const addCart = {
  state,
  actions,
  mutations,
  getters,
};
export default addCart;
