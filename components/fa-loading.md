---
url: /components/fa-loading.md
---
# FaLoading 加载遮罩

## 示例

```ts
import { loadingHide, loadingShow } from '@/ui/components/FaLoading'

loadingShow({
  type: 'plane',
  size: 50,
  text: '加载中...',
})

setTimeout(() => {
  loadingHide()
}, 2000)
```

## Props

| 属性名 | 说明         | 类型                                                                                                                                    | 默认值    |
| ------ | ------------ | --------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| type   | 加载图案类型 | `'plane' \| 'chase' \| 'bounce' \| 'wave' \| 'pulse' \| 'flow' \| 'swing' \| 'circle' \| 'circle-fade' \| 'grid' \| 'fold' \| 'wander'` | `'plane'` |
| size   | 加载图案大小 | `number`                                                                                                                                | `50`      |
| text   | 加载文本     | `string`                                                                                                                                | -         |
