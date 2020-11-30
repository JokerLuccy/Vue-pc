/*
 * @Author: your name
 * @Date: 2020-11-30 10:12:32
 * @LastEditTime: 2020-11-30 10:39:00
 * @LastEditors: Please set LastEditors
 * @Description: Actions 
 * @FilePath: \vue_reception\src\store\modules\home\actions.js
 */
import { GET_CATEGORY_LIST } from './mutations-type'
import { reqGetBaseCategoryList } from '@api/home'
const actions = {
    async getCategoryList({ commit }) {
        const categoryList = await reqGetBaseCategoryList()
        commit(GET_CATEGORY_LIST, categoryList)
    }
}
export default actions