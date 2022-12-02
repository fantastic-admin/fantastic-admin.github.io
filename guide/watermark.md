# 页面水印

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

<ZoomImg src="/watermark.png" />

## 设置水印内容

在 `/src/utils/composables/useWatermark.ts` 中可修改水印展示内容，以及其他水印相关配置。