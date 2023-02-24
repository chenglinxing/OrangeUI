---
title: Input 输入框
nav:
  title: Input 输入框
  path: /components
---

# Input 输入框

通过鼠标或键盘输入内容，是最基础的表单域的包装

# 何时使用

## 基础使用

<code src="./demos/basic.tsx">

## 三种大小

<code src="./demos/size.tsx">

## 前置后置标签

<code src="./demos/prepandOrAppend.tsx">

<!-- ## 可关闭的警告提示

<code src="./demos/close.tsx"> -->

## API

通过设置 Button 的属性来产生不同的按钮样式

按钮的属性说明如下：

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| closable | 默认不显示关闭按钮 | boolean | - |  |
| closeText | 警告提示的辅助性文字介绍 | ReactNode | - |  |
| description | 内容 | ReactNode | - |  |
| message | 警告提示内容 | ReactNode | - |  |
| showIcon | 是否显示辅助图标 | boolean | false |  |
| type | 指定警告提示的样式，有四种选择 | `success` \| `info` \| `warning` \| `error` | `info` |  |
| onClose | 关闭时触发的回调函数 | (event) => void | - |  |

<style>
.orange-input-group-wrapper {
  margin: 16px 0;
}
</style>
