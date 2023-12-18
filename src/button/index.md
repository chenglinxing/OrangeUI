---
title: Button 按钮
nav:
    title: Button 按钮
    path: /components
---

# Button

按钮一般用于点击触发一个操作

# 何时使用

标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

## 基础使用

<code src="./demos/basic.tsx">

## 按钮尺寸

<code src="./demos/size.tsx">



## 不可用状态

<code src="./demos/disabled.tsx">

## 加载中状态

<code src="./demos/loading.tsx">


## API

通过设置 Button 的属性来产生不同的按钮样式

按钮的属性说明如下：

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| disabled | 按钮失效状态 | boolean | false |  |
| href | 点击跳转的地址，指定此属性 button 的行为和 a 链接一致 | string | - |  |
| htmlType | 设置 `button` 原生的 `type` 值，可选值请参考 [HTML 标准](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type) | string | `button` |  |
| size | 设置按钮大小 | `large` \| `middle` \| `small` | `middle` |  |
| target | 相当于 a 链接的 target 属性，href 存在时生效 | string | - |  |
| type | 设置按钮类型 | `primary` \| `danger` \| `dashed` \| `link` \| `text` \| `default` |  |  |
| onClick | 点击按钮时的回调 | (event) => void | - |  |

支持原生 button 的其他所有属性。
<!-- | block | 将按钮宽度调整为其父宽度的选项 | boolean | false |  |
| icon | 设置按钮的图标组件 | ReactNode | - |  |
| loading | 设置按钮载入状态 | boolean \| { delay: number } | false |  |
| shape | 设置按钮形状 | `default` \| `circle` \| `round` | 'default' |  | -->