/*
 * @Author: your name
 * @Date: 2020-11-27 20:35:38
 * @LastEditTime: 2020-11-27 20:53:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue_reception\src\api\api.js
 */
import axios from "axios";

function ajax(url, data = {}, type = "GET") {
  return new Promise((resolve) => {
    let promise;
    type === "GET"
      ? (promise = axios.get(url, { params: data }))
      : (promise = axios.post(url, data));
    promise
      .then((res) => resolve(res.data))
      .catch((err) => console.log("请求出错", err));
  });
}
export default ajax;
