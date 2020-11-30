/*
 * @Author: your name
 * @Date: 2020-11-30 10:12:38
 * @LastEditTime: 2020-11-30 10:40:57
 * @LastEditors: Please set LastEditors
 * @Description: MutAtions
 * @FilePath: \vue_reception\src\store\modules\home\mutations.js
 */
import { GET_CATEGORY_LIST } from './mutations-type'
const mutations = {
    [GET_CATEGORY_LIST](state, categoryList) {
        state.categoryList = categoryList
    }
}
export default mutations