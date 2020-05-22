/*
 * @Author: your name
 * @Date: 2020-05-21 22:50:37
 * @LastEditTime: 2020-05-22 10:25:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jeft-vue-plugin\jeft-vue-directive\packages\slide.js
 */
function browserRedirect() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
        return 'phone'
    } else {
        return 'pc'
    }
}

const slide = {
    getFireEvent: function (){
        // 兼容pc端
        let fireEvent = {
            start: 'touchstart',
            move: 'touchmove',
            end: 'touchend',
            device: 'mobile'
        }
        if (browserRedirect() === 'pc') {
            fireEvent = {
                start: 'mousedown',
                move: 'mousemove',
                end: 'mouseup',
                device: 'pc'
            }
        }
        return fireEvent
    },
    install: function (Vue) {
        /**
         * @description: 滑动指令
         * @param {arg} 触发事件的滑动距离 
         * @return: {string} 'left' or 'right'
         * @eg v-slide:50='slide'
         */
        Vue.directive('slide', {
            bind(el, binding) {
                const { start, end } = slide.getFireEvent()
                const arg = Number(binding.arg)
                const distance = !isNaN(arg) ? Number(binding.arg) : 30
                /**
                 * 取出修饰符（和v-on的一样）
                 */
                let {
                    stop,
                    prevent,
                    self
                } = binding.modifiers

                let startX = 0
                let endX = 0

                const handler = (e) => {
                    binding.value(e)
                }
                const touchstart = (e) => {
                    // 配置判断
                    if (stop) e.stopPropagation()
                    if (prevent) e.preventDefault()
                    if (self && e.target !== e.currentTarget) return
                    startX = e.touches ? e.touches[0].clientX : e.clientX
                }
                const touchend = function (e) {
                    endX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX

                    if (startX - endX > distance) {
                        handler('left')
                    }

                    if (startX - endX < -distance) {
                        handler('right')
                    }

                    startX = 0
                    endX = 0
                }

                el.__vueTouchStart__ = touchstart
                el.__vueTouchEnd__ = touchend
                
                el.addEventListener(start, touchstart)
                el.addEventListener(end, touchend)
            },
            unbind(el) {
                const { start, end } = slide.getFireEvent()
                el.addEventListener(start, el.__vueTouchStart__)
                el.addEventListener(end, el.__vueTouchEnd__)
                el.__vueTouchStart__ = null
                el.__vueTouchEnd__ = null
            }
        })
    }
}

export default slide
