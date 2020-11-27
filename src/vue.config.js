/*
 * @Author: your name
 * @Date: 2020-11-27 20:37:33
 * @LastEditTime: 2020-11-27 20:39:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue_reception\src\vue.config.js
 */
module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://182.92.128.115", // 转发的目标了url
        changeOrigin: true,
      },
    },
  },
};
