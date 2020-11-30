/*
 * @Author: your name
 * @Date: 2020-11-30 19:12:28
 * @LastEditTime: 2020-11-30 20:48:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue_reception\src\mock\mockServer.js
 */
import Mock from 'mockjs'
import banners from './rBanners.json'
import floors from './rFloors.json'
/*
    一旦运行就会拦截get请求，请求地址 /mock/banners
*/
Mock.mock('/mock/banners', 'get', {
    code: 200,
    'data|4': banners
})
Mock.mock('/mock/floors', 'get', {
    code: 200,
    'data|2': floors
})