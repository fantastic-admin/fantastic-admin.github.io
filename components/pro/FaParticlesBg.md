---
url: /components/pro/FaParticlesBg.md
---
# FaParticlesBg 粒子背景

动态粒子背景组件，粒子会随鼠标移动产生互动效果。

## 使用场景

* 动态粒子背景组件，粒子会随鼠标移动产生互动效果。
* 常见用法：自定义配置、深色背景粒子、彩色粒子、低密度粒子。

## Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| color | 粒子颜色 (十六进制) | `string` | `'#FFF'` |
| quantity | 粒子数量 | `number` | `100` |
| staticity | 静态程度 (值越小粒子越活跃) | `number` | `50` |
| ease | 平滑度 (值越大越平滑) | `number` | `50` |
| class | 自定义类名 | `HTMLAttributes['class']` | `undefined` |

## 注意事项

* 涉及动画、预览或状态反馈时，建议结合实际页面密度控制同屏实例数量与刷新频率。
