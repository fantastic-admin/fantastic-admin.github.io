---
url: /guide/changelog.md
---
# 更新日志

只记录 feat/fix 以及破坏性变更。

## v5.1.0

:::info [基础版](https://github.com/fantastic-admin/basic/releases/tag/v5.1.0)
🚨 Breaking Changes

- 重构注册路由数据结构 &nbsp;-&nbsp; by @hooray [<samp>(cfb4f)</samp>](https://github.com/fantastic-admin/basic/commit/cfb4f23)

🚀 Features

- `FaSelect` 组件增加 class props &nbsp;-&nbsp; by @hooray [<samp>(eff07)</samp>](https://github.com/fantastic-admin/basic/commit/eff07c2)
- 刷新按钮增加按住ctrl使用原生浏览器刷新功能 &nbsp;-&nbsp; by @hooray [<samp>(2100b)</samp>](https://github.com/fantastic-admin/basic/commit/2100bbe)
- 增加 vue devtools 启动编辑器环境变量 &nbsp;-&nbsp; by @hooray [<samp>(643d4)</samp>](https://github.com/fantastic-admin/basic/commit/643d458)
- `FaPopover` 组件增加手动控制面板显示 &nbsp;-&nbsp; by @hooray [<samp>(6d58f)</samp>](https://github.com/fantastic-admin/basic/commit/6d58f1c)

🐞 Bug Fixes

- 导航搜索面板唤起时输入框未聚焦 &nbsp;-&nbsp; by @hooray [<samp>(a6e66)</samp>](https://github.com/fantastic-admin/basic/commit/a6e66c3)
- 修复 `useFaModal` 弹窗警告 &nbsp;-&nbsp; by @hooray [<samp>(b3b89)</samp>](https://github.com/fantastic-admin/basic/commit/b3b8947)
:::

:::tip [专业版](https://github.com/fantastic-admin/pro/releases/tag/v5.1.0)
🚨 Breaking Changes

- 重构注册路由数据结构 &nbsp;-&nbsp; by @hooray [<samp>(c0d8b)</samp>](https://github.com/fantastic-admin/pro/commit/c0d8b9bf)

🚀 Features

- `FaSelect` 组件增加 class props &nbsp;-&nbsp; by @hooray [<samp>(83e5a)</samp>](https://github.com/fantastic-admin/pro/commit/83e5a9e3)
- 新增 `FaCode` 组件 &nbsp;-&nbsp; by @hooray [<samp>(ac4e1)</samp>](https://github.com/fantastic-admin/pro/commit/ac4e1678)
- 刷新按钮增加按住ctrl使用原生浏览器刷新功能 &nbsp;-&nbsp; by @hooray [<samp>(a152b)</samp>](https://github.com/fantastic-admin/pro/commit/a152b948)
- `FaLayoutContainer` 组件增加顶部底部区域 &nbsp;-&nbsp; by @hooray [<samp>(66def)</samp>](https://github.com/fantastic-admin/pro/commit/66def612)
- 增加 vue devtools 启动编辑器环境变量 &nbsp;-&nbsp; by @hooray [<samp>(f1e86)</samp>](https://github.com/fantastic-admin/pro/commit/f1e863d1)
- `FaPopover` 组件增加手动控制面板显示 &nbsp;-&nbsp; by @hooray [<samp>(9c961)</samp>](https://github.com/fantastic-admin/pro/commit/9c961713)

🐞 Bug Fixes

- 导航搜索面板唤起时输入框未聚焦 &nbsp;-&nbsp; by @hooray [<samp>(0611c)</samp>](https://github.com/fantastic-admin/pro/commit/0611ca1a)
- 修复 `useFaModal` 弹窗警告 &nbsp;-&nbsp; by @hooray [<samp>(a2384)</samp>](https://github.com/fantastic-admin/pro/commit/a2384f0e)
:::

## v5.0.0

**此版本有较多破坏性的变更，如果打算从 v4.x 升级，请仔细阅读并谨慎迁移代码。**

- 引入 [shadcn-vue](https://www.shadcn-vue.com/) ，内建组件和部分扩展组件基于 shadcn-vue 进行重构
- 系统主题重构，挑选了 shadcn-vue 中的 8 款主题并进行定制
- 所有内建组件名均改为 `Fa` 开头，例如 `FaButton` 。部分扩展组件也转为内建组件，例如 `FaPageHeader` 。新增了一系列基于 shadcn-vue 的组件，例如 `FaPopover` 。为与扩展组件做区分，内建组件存放在 `/src/ui/components/` 目录下
- 登录页使用内建组件进行重构，不再依赖 `element-plus` ，更方便迁移其他 UI 组件库
- 新增 `app.themeSync` 应用设置
- 路由 `meta` 配置项调整：

  - 移除 `meta.i18n` ，`meta.title` 支持国际化
  - 移除 `meta.sidebar` ，改为 `meta.menu`
  - 移除 `meta.paddingBottom` ，改为由框架自动处理
  - 新增 `meta.badgeVariant` ，用于设置导航徽章颜色
  - 新增 `meta.query` ，用于设置点击导航时进行路由跳转时，携带的参数
  - 新增 `meta.maximize` ，用于设置访问导航的路由时，是否最大化
  - 新增 `meta.exitMaximize` ，用于设置离开导航的路由时，是否退出最大化
  - 新增 `meta.sort` ，用于设置导航的排序

- 主导航增加徽章和徽章颜色设置
- 新增 `app.loginExpiredMode` 应用设置，设置登录状态过期后的行为
- 新增 `app.enableCheckUpdates` 应用设置，检查网站是否有更新
- 移除 `menu.switchMainMenuAndPageJump` 应用设置，新增 `menu.mainMenuClickMode` 应用设置，更灵活控制主导航的点击行为
- 增加全局插槽，用于在导航、顶栏等位置插入自定义内容

## v4.x

前往 [v4](https://fantastic-admin.hurui.me/v4-docs/guide/changelog.html) 文档查看

## v3.x

前往 [v3](https://fantastic-admin.hurui.me/v3-docs/guide/changelog.html) 文档查看

## v2.x

前往 [v2](https://fantastic-admin.hurui.me/v2-docs/guide/changelog.html) 文档查看
