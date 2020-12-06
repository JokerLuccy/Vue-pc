/*
 * @Author: your name
 * @Date: 2020-11-28 16:04:46
 * @LastEditTime: 2020-12-06 22:36:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue_reception\src\plugins\element.js
 */
import Vue from "vue";
import { Button, Pagination, InputNumber, Dialog, Message } from "element-ui";

Vue.use(Button);
Vue.use(Pagination);
Vue.use(InputNumber);
Vue.use(Dialog);
Vue.prototype.$message = Message;
