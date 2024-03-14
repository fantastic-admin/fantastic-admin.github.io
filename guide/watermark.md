# 页面水印 <Badge type="pro" text="专业版" />

## 使用

在应用配置中设置：

```ts {2-4}
const globalSettings: Settings.all = {
  app: {
    enableWatermark: true,
  },
}
```

效果如下：

![](/watermark.png){data-zoomable}

## 设置水印内容

在 `/src/store/modules/watermark.ts` 中可修改水印展示内容，以及其他水印相关配置。

水印同时支持动态更新，示例：

```vue
<script setup lang="ts">
import useWatermarkStore from '@/store/modules/watermark'

const watermarkStore = useWatermarkStore()

watermarkStore.update({
  text: '设置水印',
  // 更多设置项请查看 /src/utils/watermark.ts 中 settingsType 类型定义
})

// 重置水印，恢复到默认设置
watermarkStore.update()
</script>
```