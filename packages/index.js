/*
 * @Author: your name
 * @Date: 2020-05-21 10:42:48
 * @LastEditTime: 2020-05-22 10:37:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jeft-vue-plugin\jeft-vue-directive\packages\index.js
 */ 
import longTap from './longTap'
import growHeight from './growHeight'
import slide from './slide'
import clickOut from './clickOut'

const jeftDirective = {
    longTap,
    growHeight,
    slide,
    install: function (Vue) {
        Vue.use(longTap)
        Vue.use(growHeight)
        Vue.use(slide)
        Vue.use(clickOut)
    }
}


export  default jeftDirective
