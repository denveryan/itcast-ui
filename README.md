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

## input框与v-model

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







# 表单组件-checkbox



# 表单组件-radio



# 表单组件-开关



# 表单组件-form与form-item



## provide与inject的使用



# 表单组件-表单的校验



