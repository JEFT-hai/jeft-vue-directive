/*
 * @Author: your name
 * @Date: 2020-05-21 09:53:23
 * @LastEditTime: 2020-05-21 10:59:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jeft-vue-plugin\jeft-vue-directive\vue.config.js
 */ 
module.exports = {
    // 将 examples 目录添加为新的页面
    pages: {
      index: {
        // page 的入口
        entry: 'examples/main.js',
        // 模板来源
        template: 'public/index.html',
        // 输出文件名
        filename: 'index.html'
      }
    },
    css: {
      extract: true
    }
}