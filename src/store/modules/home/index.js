/*
 * @Author: your name
 * @Date: 2020-11-30 18:13:07
 * @LastEditTime: 2020-11-30 20:39:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue_reception\src\store\modules\home\index.js
 */
import { reqGetBaseCategoryList, reqGetBanners, reqGetFloors } from '@api/home'
const state = {
    categoryList: [],
    banners: [],
    floors: []
}
const actions = {
    // 获取首页三级列表
    async getBaseCategoryList({ commit }) {
        const categoryList = await reqGetBaseCategoryList()
        commit('GET_BASE_CATEGORY_LIST', categoryList)
    },
    // 获取随机轮播图
    async getBanners({ commit }) {
        console.log(1)
        const banners = await reqGetBanners()
        commit('GET_BANNERS', banners)
    },

    // 获取楼楼层数据
    async getFloors({ commit }) {
        const floors = await reqGetFloors()
        commit('GET_FLOORS', floors)
    }

}
const mutations = {
    GET_BASE_CATEGORY_LIST(state, categoryList) {
        state.categoryList = categoryList.slice(0, 15)
    },
    GET_BANNERS(state, banners) {
        state.banners = banners
    },
    GET_FLOORS(state, floors) {
        state.floors = floors
    }
}
const getters = {}
const home = {
    state,
    actions,
    mutations,
    getters
}
export default home