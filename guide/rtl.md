# RTL 模式 <Badge type="pro" text="专业版" />

## 使用

在应用配置中设置：

```ts {2-9}
const globalSettings: Settings.all = {
  app: {
    /**
     * 文字方向
     * @默认值 `'ltr'` 从左到右
     * @可选值 `'rtl'` 从右到左
     */
    direction: 'rtl',
  },
}
```

效果如下：

![](/rtl.png){data-zoomable}