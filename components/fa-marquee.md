# FaMarquee 跑马灯 <Badge type="pro" text="专业版" /> <Badge text="v5.2.0" />

## Props

| 属性名       | 说明               | 类型      | 默认值  |
| ------------ | ------------------ | --------- | ------- |
| class        | 自定义类名         | `string`  | -       |
| reverse      | 是否反向           | `boolean` | `false` |
| pauseOnHover | 是否悬停暂停       | `boolean` | `false` |
| vertical     | 是否垂直滚动       | `boolean` | `false` |
| repeat       | 跑马灯内容重复次数 | `number`  | `4`     |

## Slots

| 插槽名  | 说明     |
| ------- | -------- |
| default | 跑马灯内容 |

## 其他

可以通过设置以下 CSS 变量来自定义项目之间的速度和间距：

- `--duration`：控制动画的速度
- `--gap`：控制项目之间的间距