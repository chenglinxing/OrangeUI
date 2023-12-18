---
category: Components
subtitle: 弹窗
title: Dialog 弹窗
demo:
  cols: 2
group:
  title: 反馈
  order: 1
---

# Dialog 对话框

需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮层，承载相应的操作。

# 何时使用

## 基础使用

<code src="./demos/basic.tsx">

## 三种大小

<code src="./demos/size.tsx">

## 前置后置标签

<code src="./demos/prepandOrAppend.tsx">

## 展示数字

<code src="./demos/showNumber.tsx">

## 密码框

<code src="./demos/password.tsx">

## 可删除

<code src="./demos/clearable.tsx">

## API

通过设置 Button 的属性来产生不同的按钮样式

按钮的属性说明如下：

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| size | 默认 default | string `lg` \| `default` \| `sm` | default |  |
| showCount | 展示输入的长度，可以控制最大或最小输入长度 | boolean | false |  |
| append | 后置标签 | string \| `ReactNode` | - |  |
| prepend | 前置标签 | string \| `ReactNode` | - |  |
| disabled | 禁用 | boolean | false |  |
| clearable | 展示清空按钮 | boolean | false |  |

<style>
.orange-input-group-wrapper {
  margin: 16px 0;
}

.__dumi-default-previewer{
  width:50%
}
</style>
