---
url: /components/pro/FaCarousel.md
---
# FaCarousel 轮播图

功能丰富的轮播图组件，支持自动播放、淡入淡出、自动滚动等效果。

## 使用场景

* 首页 Banner 轮播
* 产品展示轮播
* 图片画廊
* 客户评价轮播
* 新闻公告轮播
* 功能特性介绍

## Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `opts` | `CarouselProps['opts']` | - | 轮播配置选项 |
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | 滚动方向 |
| `autoplay` | `AutoplayOptionsType` | - | 自动播放配置 |
| `autoScroll` | `AutoScrollOptionsType` | - | 自动滚动配置 |
| `fade` | `boolean` | `false` | 是否启用淡入淡出效果 |
| `class` | `HTMLAttributes['class']` | - | 容器 CSS 类 |
| `contentClass` | `HTMLAttributes['class']` | - | 内容区 CSS 类 |
| `itemClass` | `HTMLAttributes['class']` | - | 单个项目 CSS 类 |

## Slots

| 名称 | 说明 |
|------|------|
| `default` | 轮播内容（幻灯片列表） |

## 注意事项

1. **内容结构**：`default` slot 应该直接包含轮播项目，不要用其他元素包裹
2. **自动播放**：设置 `autoplay` 后会自动轮播，用户交互后会暂停
3. **切换按钮**：组件内置左右切换按钮
4. **响应式**：轮播图会自动适应容器宽度
5. **循环模式**：默认支持循环滚动
