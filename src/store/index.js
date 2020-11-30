/*
 * @Author: your name
 * @Date: 2020-11-30 10:08:33
 * @LastEditTime: 2020-11-30 10:40:05
 * @LastEditors: Please set LastEditors
 * @Description: Store的主文件
 * @FilePath: \vue_reception\src\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'
Vue.use(Vuex)
const state = {}
const actions = {}
const mutations = {}
const getters = {}
const store = new Vuex.Store({
    state,
    actions,
    mutations,
    getters,
    modules
})
export default store