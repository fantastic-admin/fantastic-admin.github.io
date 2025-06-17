---
url: /components/fa-image-preview.md
---
# FaImagePreview 图片预览&#x20;

## Props

| 属性名 | 说明       | 类型     | 默认值 |
| ------ | ---------- | -------- | ------ |
| src    | 图片地址   | `string` | -      |
| class  | 自定义类名 | `string` | -      |

## Events

| 事件名 | 说明     | 参数         |
| ------ | -------- | ------------ |
| load   | 加载成功 | `() => void` |
| error  | 加载失败 | `() => void` |

## Slots

| 名称     | 说明     |
| -------- | -------- |
| loading  | 加载中   |
| error    | 加载失败 |
