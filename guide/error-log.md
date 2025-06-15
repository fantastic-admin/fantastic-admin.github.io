---
url: /guide/error-log.md
---
# 错误日志&#x20;

在应用配置中设置：

```ts {2-8}
const globalSettings: Settings.all = {
  app: {
    /**
     * 是否在非开发环境开启错误日志功能，具体业务代码在 `/src/utils/errorLog.ts`
     * @默认值 `false`
     */
    enableErrorLog: true,
  },
}
```

然后需要到 `/src/utils/errorLog.ts` 文件里编写业务代码，框架为方便演示，将错误日志记录在 `sessionStorage` 里。

开发者需要根据实际业务情况修改代码，例如将增加上报信息，记录用户账号、token等数据，并且将错误日志进行上报。

由于开启错误日志监控后，Vue 相关的错误都不会在控制台里显示，所以在开发环境下即使开启错误日志也不会被启用，如果需要在开发环境下测试，可在 `/src/util/errorLog.ts` 里修改开启的条件判断。
