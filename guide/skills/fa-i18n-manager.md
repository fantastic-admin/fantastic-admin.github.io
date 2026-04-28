---
url: /guide/skills/fa-i18n-manager.md
---
# fa-i18n-manager&#x20;

## 适用场景

* 页面或组件需要支持多语言
* 需要新增翻译 key
* 需要检查缺失翻译
* 需要新增语言或启用语言切换器

## 使用方式

直接说明以下信息即可：

* 目标应用，例如 `example`
* 需要新增或修改的翻译 key
* 需要支持哪些语言
* 是否要检查缺失 key

示例：

```text
在 example 应用里给用户管理页面补齐中英文翻译。
新增 route.system.user、user.form.name、user.form.status。
并检查一下当前语言文件缺了哪些 key。
```

## 结果

根据需求，通常会：

* 修改 `apps/<app>/src/locales/lang/**/*.json`
* 修改 `apps/<app>/src/locales/index.ts`
* 修改 `apps/<app>/src/settings.ts`（启用语言切换器时）
* 输出缺失翻译报告（检查场景）
