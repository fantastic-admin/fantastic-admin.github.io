# 检查更新 <Badge type="pro" text="专业版" />

## 使用

在应用配置中设置：

```ts {2-8}
const globalSettings: Settings.all = {
  app: {
    /**
     * 是否开启检查更新
     * @默认值 `false`
     */
    enableCheckUpdates: true
  },
}
```

效果如下：

![](/check-updates.png){data-zoomable}

## 自定义检查更新

框架默认采用轮询请求 `index.html`，并获取响应头中的 `etag` 或 `last-modified` 作为版本标识的方法来判断页面是否有更新。

你也可以修改 `/src/ui/components/FaCheckUpdates/index.vue` 文件中的 `getVersionTag` 方法，实现自定义检查更新。