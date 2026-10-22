---
url: /components/pro/FaSparkline.md
---
# FaSparkline 迷你图

简洁的折线迷你图组件，用于展示数据趋势。

## 使用场景

* 数据看板趋势展示
* 表格中的趋势列
* 股票/基金走势
* 访问量/销量趋势
* 温度/湿度变化
* 性能指标监控

## Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `value` | `number[] \| Array<{ value: number, tooltip?: string }>` | **必需** | 数据值 |
| `width` | `number` | `100` | 图表宽度（px） |
| `height` | `number` | `30` | 图表高度（px） |
| `strokeWidth` | `number` | `2` | 线条宽度 |
| `strokeColor` | `string` | `'oklch(var(--primary))'` | 线条颜色，同时决定下方渐变填充和端点颜色 |
| `cursorColor` | `string` | `跟随 strokeColor` | 光标颜色 |
| `smooth` | `boolean` | `false` | 是否开启圆润曲线过渡 |
| `tooltip` | `boolean` | `false` | 是否显示提示 |

## 注意事项

1. **数据格式**：支持简单数字数组或带 tooltip 的对象数组
2. **自动渐变**：填充区域会基于 `strokeColor` 自动生成从上到下透明的渐变
3. **圆润曲线**：开启 `smooth` 后，折角会过渡成平滑曲线
4. **响应式重绘**：数据和尺寸变化后会自动重新绘制，并带平滑过渡动画
5. **无坐标轴**：仅显示趋势线，无坐标轴和标签
6. **SVG 渲染**：使用 SVG 绘制，清晰度高
