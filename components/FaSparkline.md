---
url: /components/FaSparkline.md
---
# FaSparkline 迷你图组件

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

## 示例

### 基础用法

```vue
<template>
  <FaSparkline :value="[10, 20, 15, 25, 30, 20, 35]" />
</template>
```

### 基础迷你图

```vue
<template>
  <FaSparkline :value="[10, 20, 15, 25, 30, 20, 35]" />
</template>
```

### 自定义尺寸

```vue
<template>
  <FaSparkline :value="[10, 20, 15, 25, 30]" :width="150" :height="50" />
</template>
```

### 自定义颜色

```vue
<template>
  <FaSparkline 
    :value="[10, 20, 15, 25, 30]"
    stroke-color="#10b981"
  />
</template>
```

### 自动渐变填充

```vue
<template>
  <FaSparkline 
    :value="[10, 20, 15, 25, 30, 25, 35]"
    stroke-color="#10b981"
  />
</template>
```

### 圆润曲线过渡

```vue
<template>
  <FaSparkline
    :value="[10, 28, 14, 32, 20, 30, 24]"
    smooth
  />
</template>
```

### 带提示信息

```vue
<script setup lang="ts">
const data = [
  { value: 10, tooltip: '第 1 天：10' },
  { value: 20, tooltip: '第 2 天：20' },
  { value: 15, tooltip: '第 3 天：15' },
  { value: 25, tooltip: '第 4 天：25' },
  { value: 30, tooltip: '第 5 天：30' },
]
</script>

<template>
  <FaSparkline :value="data" :tooltip="true" />
</template>
```

### 数据卡片

```vue
<template>
  <FaCard>
    <div class="flex justify-between items-center">
      <div>
        <p class="text-sm text-muted-foreground">本周收入</p>
        <p class="text-2xl font-bold">¥12,345</p>
      </div>
      <FaSparkline 
        :value="[1200, 1800, 1500, 2200, 1900, 2500, 2800]"
        :width="100"
        :height="40"
        stroke-color="#10b981"
      />
    </div>
  </FaCard>
</template>
```

### 多数据对比

```vue
<script setup lang="ts">
const metrics = [
  { name: '访问量', value: 12345, trend: [1200, 1500, 1800, 1600, 2000, 2200, 2400], color: '#3b82f6' },
  { name: '转化率', value: '3.2%', trend: [2.5, 2.8, 3.0, 2.9, 3.1, 3.3, 3.2], color: '#10b981' },
  { name: '销售额', value: 98765, trend: [8000, 9500, 11000, 10500, 12000, 13500, 14000], color: '#8b5cf6' },
]
</script>

<template>
  <div class="space-y-4">
    <div v-for="metric in metrics" :key="metric.name" class="flex justify-between items-center">
      <div>
        <p class="text-sm text-muted-foreground">{{ metric.name }}</p>
        <p class="text-xl font-semibold">{{ metric.value }}</p>
      </div>
      <FaSparkline 
        :value="metric.trend"
        :stroke-color="metric.color"
      />
    </div>
  </div>
</template>
```

### 表格中的趋势列

```vue
<script setup lang="ts">
const products = [
  { name: '产品 A', sales: 12345, trend: [100, 150, 200, 180, 250, 300, 350] },
  { name: '产品 B', sales: 8765, trend: [200, 180, 150, 120, 100, 80, 60] },
  { name: '产品 C', sales: 5432, trend: [150, 150, 150, 150, 150, 150, 150] },
]
</script>

<template>
  <table class="w-full">
    <thead>
      <tr>
        <th>产品</th>
        <th>销售额</th>
        <th>趋势</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in products" :key="product.name">
        <td>{{ product.name }}</td>
        <td>{{ product.sales }}</td>
        <td>
          <FaSparkline :value="product.trend" :width="80" :height="30" />
        </td>
      </tr>
    </tbody>
  </table>
</template>
```

## 注意事项

1. **数据格式**：支持简单数字数组或带 tooltip 的对象数组
2. **自动渐变**：填充区域会基于 `strokeColor` 自动生成从上到下透明的渐变
3. **圆润曲线**：开启 `smooth` 后，折角会过渡成平滑曲线
4. **响应式重绘**：数据和尺寸变化后会自动重新绘制，并带平滑过渡动画
5. **无坐标轴**：仅显示趋势线，无坐标轴和标签
6. **SVG 渲染**：使用 SVG 绘制，清晰度高
