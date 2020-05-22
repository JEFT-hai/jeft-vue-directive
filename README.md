# jeft-vue-directive

## Installation

``` js
npm install jeft-vue-directive
```

## Usage

### 直接引入

``` js
import jeftDirective from 'jeft-vue-directive'
Vue.use(jeftDirective)
```

### 支持按需引入

babel.config.js

``` js
module.exports = {
  plugins: [
    ['import', {
      libraryName: 'jeft-vue-directive',
      libraryDirectory: 'packages'
    }]
  ]
}
```

按需引入

``` js
import { longTap, slide, growHeight, clickOut } from 'jeft-vue-directive'
Vue.use(longTap)
   .use(slide)
   .use(growHeight)
   .use(clickOut)
```

### longTap

- 长按事件
- 支持pc, mobile
- arg: 触发事件的时间(ms), default: 1000ms
- 返回：(e, el) => touchstart/mousedown的event, 触发事件的el

``` html
<div v-longTap:600='longTap'></div>
```

### slide

- 检测用户左右滑动
- 支持pc, mobile
- arg: 触发事件的距离(px), default: 30px
- modifiers支持stop, prevent, self
- 返回：(string) => 'left' or 'right'

``` html
<div v-slide='slide'></div>
```

### growHeight

- textarea自增高
- 支持pc, mobile
- 必须使用v-model才能动态改变高度：就是要触发componentUpdated
- 自增高的高度为line-height的值
- binding.value为额外增加的高度

``` js
<textarea
    class="grow-height-textarea"
    v-model="growHeightContent"
    v-grow-height="0"
    placeholder="自增高"
/>
```

### clickOut

- 点击事件点击非本元素触发
- 支持pc, mobile
- return e => click的event

``` js
<div v-clickOut='clickOut'></div>
```
