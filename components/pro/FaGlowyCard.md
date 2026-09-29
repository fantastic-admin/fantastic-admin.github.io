---
url: /components/pro/FaGlowyCard.md
---
# FaGlowyCard 发光卡片

具有鼠标跟随光晕效果的卡片组件，支持自定义颜色、光晕大小和边框样式。

## 使用场景

* 具有鼠标跟随光晕效果的卡片组件，支持自定义颜色、光晕大小和边框样式。
* 常见用法：自定义配置、多卡片展示、紫色主题卡片、橙色主题。

## Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| hue | 色相 (0-360) | `number` | `210` |
| saturation | 饱和度 (0-100) | `number` | `100` |
| lightness | 亮度 (0-100) | `number` | `50` |
| size | 光晕尺寸 | `number` | `200` |
| border | 边框宽度 | `number` | `2` |
| radius | 圆角大小 (px) | `number` | `10` |

## Slots

| 组件 | 名称 | 说明 |
|------|------|------|
| FaGlowyCardWrapper | default | 默认插槽，放置 FaGlowyCard |
| FaGlowyCard | default | 默认插槽，放置卡片内容 |

## API

### FaGlowyCard

无 Props，仅作为内容容器使用

## 注意事项

* 无特殊限制，建议按示例中的受控方式接入，并结合业务容器尺寸验证最终展示效果。

## FaGlowyCardWrapper 发光卡片容器

FaGlowyCard 的外层容器组件，用于管理光晕效果的配置和鼠标跟随行为。必须与 FaGlowyCard 配合使用。

## 使用场景

* FaGlowyCard 的外层容器组件，用于管理光晕效果的配置和鼠标跟随行为。必须与 FaGlowyCard 配合使用。

## Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| hue | 色相 (0-360) | `number` | `210` |
| saturation | 饱和度 (0-100) | `number` | `100` |
| lightness | 亮度 (0-100) | `number` | `50` |
| size | 光晕尺寸 | `number` | `200` |
| border | 边框宽度 | `number` | `2` |
| radius | 圆角大小 (px) | `number` | `10` |

## Slots

| 名称 | 说明 |
|------|------|
| default | 默认插槽，放置 FaGlowyCard 组件 |

## 注意事项

### 配合 FaGlowyCard 使用

完整示例请参考 FaGlowyCard 组件。
