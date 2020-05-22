/*
 * @Author: your name
 * @Date: 2020-05-21 09:45:07
 * @LastEditTime: 2020-05-21 11:11:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jeft-vue-plugin\jeft-vue-longtap\packages\index.js
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


const longTap = {
    getFireEvent: function (){
        // 兼容pc端
        let fireEvent = {
            start: 'touchstart',
            move: 'touchmove',
            end: 'touchend'
        }
        if (browserRedirect() === 'pc') {
            fireEvent = {
                start: 'mousedown',
                move: 'mousemove',
                end: 'mouseup'
            }
        }
        return fireEvent
    },
    install: function (Vue) {
        /**
         * @description: 长按事件
         * @param {arg} 触发事件的时间
         * @return: e touchstart事件的event el触发的dom
         * eg: v-longTap:600='longTap'
         */
        // 长按指令
        Vue.directive('longTap', {
            bind (el, binding) {
                const longTime = binding.arg ? binding.arg : 1000
                let timer = null
                if (typeof binding.value !== 'function') {
                    return
                }
                const handler = (e, el) => {
                    binding.value(e, el)
                }
                const touchstart = (e) => {
                    timer = setTimeout (() => {
                        handler(e, el)
                    }, longTime)
                }
                const touchmove = function () {
                    clearTimeout(timer)
                    timer = 0
                }
                const touchend = function () {
                    clearTimeout(timer)
                    timer = 0
                }

                el.__vueTouchStart__ = touchstart
                el.__vueTouchMove__ = touchmove
                el.__vueTouchEnd__ = touchend
                
                const { start, move, end} = longTap.getFireEvent()
                el.addEventListener(start, touchstart)
                el.addEventListener(move, touchmove)
                el.addEventListener(end, touchend)
            },
            unbind(el) {
                const { start, move, end} = longTap.getFireEvent()
                el.addEventListener(start, el.__vueTouchStart__)
                el.addEventListener(move, el.__vueTouchMove__)
                el.addEventListener(end, el.__vueTouchEnd__)
                el.__vueTouchStart__ = null
                el.__vueTouchMove__ = null
                el.__vueTouchEnd__ = null
            }
        })
    }
}

export default longTap
