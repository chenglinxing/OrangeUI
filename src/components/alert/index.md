---
category: Components
subtitle: 警告提示
title: Alert
demo:
  cols: 2
group:
  title: 反馈
  order: 6
---

# Alert 警告提示

警告提示，展现需要关注的信息。

# 何时使用

- 当某个页面需要向用户显示警告的信息时。
- 非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭。


## 基础使用

<code src="./demos/basic.tsx">



## 含有辅助性文字介绍的警告提示

<code src="./demos/description.tsx">

## 可添加图标让信息类型更加醒目

<code src="./demos/icon.tsx">

## 可关闭的警告提示

<code src="./demos/close.tsx">

## API

通过设置 Button 的属性来产生不同的按钮样式

按钮的属性说明如下：

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| closable | 默认不显示关闭按钮 | boolean | - |  |
| closeText | 警告提示的辅助性文字介绍 | ReactNode | - |  |
| description | 内容	 | ReactNode | - |  |
| message | 警告提示内容 | ReactNode | - |  |
| showIcon | 是否显示辅助图标 | boolean | false |  |
| type | 指定警告提示的样式，有四种选择 | `success` \| `info` \| `warning` \| `error`  | `info`  |  |
| onClose | 关闭时触发的回调函数 | (event) => void | - |  |


<style>
.alert {
  margin-bottom: 16px;
}
</style>
