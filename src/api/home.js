/*
 * @Author: your name
 * @Date: 2020-11-28 18:44:59
 * @LastEditTime: 2020-11-30 21:28:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue_reception\src\api\home.js
 */
import ajax from "@utils/request";
import mockRequest from '@utils/mockRequest'

export const reqGetBaseCategoryList = () =>
  ajax({
    method: "GET",
    url: "/product/getBaseCategoryList",
  });
export const reqLogin = (data) => ajax({ method: 'POST', url: 'user/passport/login', data })
export const reqGetBanners = () => mockRequest({
  method: 'get',
  url: '/banners'
})
export const reqGetFloors = () => mockRequest({
  method: 'get',
  url: '/floors'
})