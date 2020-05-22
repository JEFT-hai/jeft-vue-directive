/*
 * @Author: your name
 * @Date: 2020-05-21 10:38:34
 * @LastEditTime: 2020-05-22 17:50:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jeft-vue-plugin\jeft-vue-directive\babel.config.js
 */ 
module.exports = {
  presets: [
    // '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
      'import',
      {
        // 组件库的名字，需要和 package.json 里的 name 相同
        "libraryName": "jeft-vue-directive",
        // 存放组件的文件夹，如果不想配置此项，默认文件夹的名字为 lib
      }
    ]
  ]
}
