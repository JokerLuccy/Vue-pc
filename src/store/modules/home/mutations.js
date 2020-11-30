/*
 * @Author: your name
 * @Date: 2020-11-30 10:12:38
 * @LastEditTime: 2020-11-30 15:14:22
 * @LastEditors: Please set LastEditors
 * @Description: MutAtions
 * @FilePath: \vue_reception\src\store\modules\home\mutations.js
 */
import { GET_CATEGORY_LIST } from './mutations-type'
const mutations = {
    [GET_CATEGORY_LIST](state, categoryList) {
        state.categoryList = categoryList.slice(0, 15)
    }
}
export default mutations