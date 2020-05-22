<!--
 * @Author: your name
 * @Date: 2020-05-21 10:38:34
 * @LastEditTime: 2020-05-22 10:47:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jeft-vue-plugin\jeft-vue-directive\examples\components\HelloWorld.vue
--> 
<template>
  <div class="directive-wrap">
    <h1 class="directive-page-title">jeft-directive</h1>
    <ul class="directive-list">
      <li class="directive-list-item">
        <div class="directive-item-title">longTap</div>
        <div class="directive-item-content" v-longTap:800='longTap'>长按事件</div>
        <div class="directive-item-provide">pc, mobile</div>
      </li>
      <li class="directive-list-item">
        <div class="directive-item-title">slide</div>
        <div class="directive-item-content" v-slide='slide'>左右滑动事件</div>
        <div class="directive-item-provide">pc, mobile</div>
      </li>
      <li class="directive-list-item">
        <div class="directive-item-title">growHeight</div>
        <div class="directive-item-content" v-longTap:800='longTap'>
          <textarea
              class="grow-height-textarea"
              v-model="growHeightContent"
              v-grow-height="0"
              placeholder="自增高"
            />
        </div>
        <div class="directive-item-provide">pc, mobile</div>
      </li>
      <li class="directive-list-item">
        <div class="directive-item-title">clickOut</div>
        <div class="directive-item-content" v-clickOut='clickOut'>点击元素不是这个触发</div>
        <div class="directive-item-provide">pc, mobile</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      growHeightContent: ''
    }
  },
  methods: {
    longTap (e, el) {
      console.log(e, 'event')
      console.log(el, '触发元素')
      alert('您触发了长按事件')
    },
    slide (e) {
      console.log(e, 'slide')
    },
    clickOut (e) {
      console.log(e, '触发点击外围事件')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.directive-page-title{
  height: 80px;
  line-height: 80px;
}
html, body{
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  
}
.directive-wrap{
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
}
.directive-list{
  width: 100%;
  /* height: 100%; */
  display: flex;
  flex-wrap: wrap;
}
.directive-list-item{
  /* flex: 1; */
  user-select: none;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 200px;
  height: 200px;
  border: 1px solid #e0e0e0;
  box-sizing: border-box;
}
.directive-item-title{
  height: 60px;
  line-height: 60px;
}
.directive-item-content{
  flex: 1;
  background-color: #f0f0f0;
  padding: 20px;
  box-sizing: border-box;
}
.directive-item-provide{
  height: 40px;
  line-height: 40px;
  font-size: 12px;
}
/* growHeight */
.grow-height-textarea {
  /* display: flex;
  align-items: center; */
  width: 80%;
  height: 20px;
  line-height: 20px;
  padding: 5px 30px 5px 12px;
  margin-bottom: 3px;
  font-size: 16px;
  border: none;
  outline: none;
  border: 1px solid rgb(208, 208, 208);
  border-radius: 20px;
  background: rgb(245, 245, 245);
  box-sizing: content-box;
  resize: none;
}
@media screen and (max-width: 440px) {
  .directive-list-item{
    width: 100%;
  }
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
html, body, ul, li {
  padding: 0;
  margin: 0;
}
</style>
