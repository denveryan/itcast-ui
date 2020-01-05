# hcc-ui

基于vue-cli3，参考element-ui封装的一个UI组件库


# dialog组件

## 静态结构

```html
<template>
  <div class="hm-dialog__wrapper">
    <div class="hm-dialog">
      <div class="hm-dialog__header">
        <span class="hm-dialog__title">提示</span>
        <button class="hm-dialog__headerbtn">
          <i class="el-icon-close"></i>
        </button>
      </div>
      <div class="hm-dialog__body">
        <span>这是一段信息</span>
      </div>
      <div class="hm-dialog__footer">
        <hm-button>取消</hm-button>
        <hm-button type="primary">确定</hm-button>
      </div>
    </div>
  </div>
</template>

<script>
import HmButton from '../../button/index'
export default {
  name: 'HmDialog',
  components: {
    HmButton
  }
}
</script>

<style lang="scss">
.hm-dialog__wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0,0,0, .5);

  .hm-dialog {
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,.3);
    box-sizing: border-box;
    width: 30%;

    &__header {
      padding: 20px 20px 10px;
      .hm-dialog__title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .hm-dialog__headerbtn {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        .el-icon-close {
          color: #909399;
        }
      }
    }

    &__body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    &__footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      .hm-button:first-child {
        margin-right: 20px;
      }
    }
  }
}

</style>

```

## title的处理

```html
<slot name="title">
  <span class="hm-dialog__title">{{title}}</span>
</slot>
```

```js
title: {
  type: String,
  default: ''
}
```

## width属性与top属性

```js
<div class="hm-dialog" :style="{width: width, marginTop: top}">
```

```js
width: {
  type: String,
  default: '50%'
},
top: {
  type: String,
  default: '15vh'
}
```



## 内容插槽的处理

```html
<div class="hm-dialog__body">
  <!-- 默认插槽 -->
  <slot></slot>
</div>
```



## 底部插槽的处理

```html
<div class="hm-dialog__footer" v-if="$slots.footer">
  <slot name="footer"></slot>
</div>
```



## 控制显示和隐藏

```HTML
    <div
      v-show="visible"
      class="el-dialog__wrapper"
      @click.self="handleWrapperClick">
```



点击遮罩层关闭

```js
  <div class="hm-dialog__wrapper" v-show="visible" @click.self="handleClose">
```

点击关闭按钮关闭

```html
 <button class="hm-dialog__headerbtn" @click="handleClose">
```

关闭处理

```html
// 支持sync修饰符
handleClose () {
	this.$emit('update:visible', false)
}
```



## 动画支持

```html
<transition name="dialog-fade" @after-enter="afterEnter" @after-leave="afterLeave"></transition>
```



js

```js
    afterEnter () {
      this.$emit('opened')
    },
    afterLeave () {
      this.$emit('closed')
    }
```



样式

```scss
.dialog-fade-enter-active {
  animation: dialog-fade-in .4s;
}

.dialog-fade-leave-active {
  animation: dialog-fade-out .4s;
}

@keyframes dialog-fade-in {
  0% {
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

@keyframes dialog-fade-out {
  0% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  100% {
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
}
```



# 表单组件-input

## input框

基本结构

```html
<template>
  <div class="hm-input">
    <input type="text" class="hm-input__inner">
  </div>
</template>
```

基本样式

```css
.hm-input {
  width: 180px;
  position: relative;
  font-size: 14px;
  display: inline-block;
  .hm-input__inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;

    &:focus {
      outline: none;
      border-color: #409eff;
    }
  }
}
```



## 常见props

+ placeholer

```html
<input type="text" class="hm-input__inner" :placeholder="placeholder">
```

```js
  props: {
    placeholder: {
      type: String,
      default: ''
    }
  }
```

+ type属性-密码框

```html
    <input
      class="hm-input__inner"
      :placeholder="placeholder"
      :type="type"
      :disabled="disabled"
    >
```

```js
    type: {
      type: String,
      default: 'text'
    },
```

+ 禁用按钮

```html
  <div class="hm-input">
    <input
      class="hm-input__inner"
      :class="{'is-disabled': disabled}"
      :placeholder="placeholder"
      :type="type"
      :disabled="disabled"
    >
  </div>
```

js

```js
    disabled: {
      type: Boolean,
      default: false
    }
```

样式

```css
    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
```

## v-model处理

v-model仅仅是一个语法糖

```html
  <div class="hm-input">
    <input
      class="hm-input__inner"
      :class="{'is-disabled': disabled}"
      :placeholder="placeholder"
      :type="type"
      :disabled="disabled"
      v-bind="$attrs"
      :value="value"
      @input="$emit($event.target.value)"
    >
  </div>
```



使用

```js
<hm-input placeholder="请输入用户名" v-model="username"></hm-input><br>
```



## clearable与showPassword处理



## 其他事件的处理

blur change focus等事件



# 表单组件-checkbox

基本结构

```html
<template>
  <label class="hm-checkbox">
    <span class="hm-checkbox__input">
      <span class="hm-checkbox__inner"></span>
      <input type="checkbox" class="hm-checkbox__original">
    </span>
    <span class="hm-checkbox__label" v-if="$slots.default">
      <slot></slot>
    </span>
  </label>

</template>
```



样式

```scss

<style lang="scss">
.hm-checkbox {
  color: #606266;
  font-weight: 500;
  font-size: 14px;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  user-select: none;
  margin-right: 30px;
  .hm-checkbox__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .hm-checkbox__inner {
      display: inline-block;
      position: relative;
      border: 1px solid #dcdfe6;
      border-radius: 2px;
      box-sizing: border-box;
      width: 14px;
      height: 14px;
      background-color: #fff;
      z-index: 1;
      transition: border-color .25s cubic-bezier(.71,-.46,.29,1.46),background-color .25s cubic-bezier(.71,-.46,.29,1.46);
      &:after {
        box-sizing: content-box;
        content: "";
        border: 1px solid #fff;
        border-left: 0;
        border-top: 0;
        height: 7px;
        left: 4px;
        position: absolute;
        top: 1px;
        transform: rotate(45deg) scaleY(0);
        width: 3px;
        transition: transform .15s ease-in .05s;
        transform-origin: center;
      }
    }
    .hm-checkbox__original {
      opacity: 0;
      outline: none;
      position: absolute;
      margin: 0;
      width: 0;
      height: 0;
      z-index: -1;
    }
  }
  .hm-checkbox__label {
    display: inline-block;
    padding-left: 10px;
    line-height: 19px;
    font-size: 14px;
  }
}
</style>

```





# 表单组件-radio

## 基本结构

```html
<template>
  <label class="hm-radio">
    <!-- 小圆 -->
    <span class="hm-radio__input">
      <span class="hm-radio__inner"></span>
      <input
        class="hm-radio__original"
        type="radio"
        v-model="model"
      >
    </span>
    <span class="hm-radio__label">
      <slot></slot>
    </span>
  </label>
</template>
```



```scss
<style lang="scss">
.hm-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  .hm-radio__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .hm-radio__inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
    }
    .hm-radio__original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }
  .hm-radio__label {
    font-size: 14px;
    padding-left: 10px;
  }
}
</style>
```

# 表单组件-switch

基本结构

```html
<template>
  <div class="hm-switch" @click="handleChange" :class="{ 'is-checked': this.value }">
    <span class="hm-switch__core" ref="core">
      <span class="hm-switch__button" :style="style"></span>
    </span>
  </div>
</template>
```

基本样式

```scss
.hm-switch {
  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  vertical-align: middle;
  .hm-switch__input {
    // 隐藏
    // position: absolute;
    // width: 0;
    // height: 0;
    // opacity: 0;
    // margin: 0;
  }
  .hm-switch__core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color .3s,background-color .3s;
    vertical-align: middle;
    .hm-switch__button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all .3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
}

.hm-switch.is-checked {
  .hm-switch__core {
    border-color: #409eff;
    background-color: #409eff;
  }
}
```



## 切换功能-支持v-model双向绑定

```js
export default {
  name: 'HmSwitch',
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleChange () {
      this.$emit('input', !this.value)
    }
  }
}
```



控制小球的位置

```css
.hm-switch__button {
	transform: translateX(20px);
}
```



## name属性的支持

 我们在模板中加了一个 type：checkbox 的input。这不是摆设，当switch组件用在表单中的时候，可能会用到`form.name.checked`。所以，我们需要在值改变的时候，也改变input.chekced属性。 

 **这里存在一个时机问题，因为v-model绑定了值到组件中，组件中不能直接修改这个值为true来进行改变，需要触发input事件，所以，这里checked的改变需要等到下一次渲染的时候，再进行设置**。 

```js
  mounted () {
    this.$refs.input.checked = this.value
  },
  methods: {
    async handleChange () {
      this.$emit('input', !this.value)
      // 修改checkbox的值
      await this.$nextTick()
      this.$refs.input.checked = this.value
    }
  }
```



```css
  .hm-switch__input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }
```



## 自定义背景颜色

```js
    activeColor: {
      type: String,
      default: ''
    },
    inactiveColor: {
      type: String,
      default: ''
    }

    setBackgroundColor () {
      if (this.activeColor || this.inactiveColor) {
        let newColor = this.value ? this.activeColor : this.inactiveColor
        this.$refs.core.style.borderColor = newColor
        this.$refs.core.style.backgroundColor = newColor
      }
    }


    watch: {
      value () {
        this.setBackgroundColor()
      }
    }
```





# 表单组件-form与form-item



## provide与inject的使用

# 表单组件-表单的校验



