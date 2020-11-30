/*
 * @Author: your name
 * @Date: 2020-11-27 14:13:36
 * @LastEditTime: 2020-11-30 10:11:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue_reception\src\main.js
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from './store'
import "./styles/reset.css";
import './plugins/element.js'
Vue.config.productionTip = false;

new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
  render: (h) => h(App),
  router,
  store
}).$mount("#app");
