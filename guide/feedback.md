---
url: /guide/feedback.md
---
# 反馈 &#x20;

帮助系统管理员更高效的收集使用者的反馈信息。

## 使用

在应用配置中设置：

```ts {2-8}
const globalSettings: Settings.all = {
  app: {
    /**
     * 是否开启反馈
     * @默认值 `false`
     */
    enableFeedback: true
  },
}
```

效果如下：

![](/feedback.gif){data-zoomable}

![](/feedback.png){data-zoomable}

该模块不涉及具体业务，需开发者自行扩展完善，相关文件为 `/src/components/AccountButton/feedback.vue` 。
