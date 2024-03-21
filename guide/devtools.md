# 开发者工具 <Badge type="tip" text="v4.5.0 新增" />

:::info
该特性由 [Vue DevTools Next](https://github.com/vuejs/devtools-next) 提供技术支持。
:::

## 使用介绍

在 `.env.development` 开发环境配置文件中开启：

```yaml
# 是否开启开发者工具
VITE_OPEN_DEVTOOLS = true
```

开启后，在本地运行时，默认会在页面底部中间显示一个开发者工具按钮，点击即可打开开发者工具。

![](/devtools.gif){data-zoomable}

:::warning 注意
请确保框架当前的明暗模式与开发者工具的明暗模式一致，否则可能会出现样式错乱的情况。
:::
