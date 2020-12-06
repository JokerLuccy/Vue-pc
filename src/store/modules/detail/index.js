/*
 * @Author: your name
 * @Date: 2020-12-04 18:55:37
 * @LastEditTime: 2020-12-05 12:37:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue_reception\src\store\modules\detail\index.js
 */
import { reqProductDetail } from "@api/detail";
import { reqAddToCart } from "@api/addCart";
const state = {
  productDetail: {
    price: 0,
    categoryView: {}, // 商品分类
    spuSaleAttrList: {}, // 商品可选信息
    skuInfo: {
      skuImageList: [],
    }, // 商品文字信息,图片
  },
};
const actions = {
  /**
   * 获取商品信息
   */
  async getProductDetail({ commit }, id) {
    const res = await reqProductDetail(id);
    commit("GET_PRODUCT_DETAIL", res);
  },
  /**
   * 添加到购物车
   */
  async addToCart({ commit }, { skuId, skuNum }) {
    console.log(commit);
    await reqAddToCart(skuId, skuNum);
  },
};
const mutations = {
  GET_PRODUCT_DETAIL(state, res) {
    state.productDetail = res;
  },
};
const getters = {
  categoryView(state) {
    return state.productDetail.categoryView;
  },
  spuSaleAttrList(state) {
    return state.productDetail.spuSaleAttrList;
  },
  skuInfo(state) {
    return state.productDetail.skuInfo;
  },
  price(state) {
    return state.productDetail.price;
  },
  skuImageList(state) {
    return state.productDetail.skuInfo.skuImageList;
  },
};
const detail = {
  state,
  actions,
  mutations,
  getters,
};
export default detail;
