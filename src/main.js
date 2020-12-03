/*
 * @Author: your name
 * @Date: 2020-11-27 14:13:36
 * @LastEditTime: 2020-12-02 16:17:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue_reception\src\main.js
 */
import Vue from "vue";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "@utils/validate";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./styles/reset.css";
import "./plugins/element.js";
import "./mock/mockServer";
import "./styles/iconfont.css";
Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper);

new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
