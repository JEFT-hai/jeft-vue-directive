/*
 * @Author: your name
 * @Date: 2020-05-21 10:38:34
 * @LastEditTime: 2020-05-21 23:35:10
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \jeft-vue-plugin\jeft-vue-directive\examples\main.js
 */ 
import Vue from 'vue'
import App from './App.vue'

import jeftDirective from '../packages/index'
Vue.use(jeftDirective)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
