---
url: /components/FaTextShiny.md
---
# FaTextShiny 流光文字

通过扫光渐变为文字增加持续流动的高光效果，适合做标题、强调词和品牌文案。

## 使用场景

* 首页标题、Banner 文案、营销口号
* 卡片标题中的关键数字或关键字
* 行内强调品牌名、动作词、状态词
* 需要一点动态感，但不希望页面过度花哨的场景

## Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| duration | 单次扫光动画时长，单位秒 | `number` | `1.5` |
| delay | 首次开始动画的延迟，单位秒 | `number` | `1.5` |
| class | 自定义类名，文字颜色由 `currentColor` 决定 | `HTMLAttributes['class']` | `undefined` |

## Slots

| 名称 | 说明 |
|------|------|
| default | 要显示的文字或行内内容 |

## 示例

### 基础用法

```vue
<template>
  <FaTextShiny class="text-4xl font-black text-sky-600 dark:text-sky-400">
    Fantastic-admin
  </FaTextShiny>
</template>
```

### 调整节奏

```vue
<template>
  <FaTextShiny :duration="1.1" :delay="0" class="text-3xl font-bold text-amber-600 dark:text-amber-400">
    快速扫光
  </FaTextShiny>
</template>
```

### 行内强调

```vue
<template>
  <p class="text-2xl font-bold">
    适合做
    <FaTextShiny class="text-rose-600 dark:text-rose-400">
      行内重点强调
    </FaTextShiny>
    。
  </p>
</template>
```

## 注意事项

* 更适合 1 到 2 行以内的短文字，字数过多时高光会显得分散
* 建议搭配较大字号或较粗字重使用，扫光层次会更清晰
* 如果背景本身已经很复杂，先确认文字本体仍然有足够可读性
* 想强调重点时用它做局部点缀即可，不建议把整段正文都做成扫光效果
