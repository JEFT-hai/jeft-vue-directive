/*
 * @Author: your name
 * @Date: 2020-05-21 10:42:48
 * @LastEditTime: 2020-05-22 17:51:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jeft-vue-plugin\jeft-vue-directive\packages\index.js
 */ 
import longTap from './long-tap'
import growHeight from './grow-height'
import slide from './slide'
import clickOut from './click-out'

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
