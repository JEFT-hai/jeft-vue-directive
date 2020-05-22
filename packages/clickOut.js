/*
 * @Author: your name
 * @Date: 2020-05-22 10:30:28
 * @LastEditTime: 2020-05-22 10:41:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jeft-vue-directive\packages\clickout.js
 */ 
const clickOut = {
    /**
     * @description: 点击外围元素触发事件
     * @param {modifiers.bubble} 
     * @return: e 点击event
     */
    install: function(Vue) {
        Vue.directive('clickOut', {
            bind(el, binding) {
              if (typeof binding.value !== 'function') {
                return
              }
              const bubble = binding.modifiers.bubble
              console.log(binding.modifiers)
              const handler = e => {
                if (bubble || (!el.contains(e.target) && el !== e.target)) {
                  binding.value(e)
                }
              }
              el.__vueClickOutside__ = handler
              document.addEventListener('click', handler)
            },
            unbind(el) {
              document.removeEventListener('click', el.__vueClickOutside__)
              el.__vueClickOutside__ = null
            }
          })
    }
}

export default clickOut
