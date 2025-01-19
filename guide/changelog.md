# 更新日志

只记录 feat/fix 以及破坏性变更。

<!-- ## v5.1.0

:::info [基础版](https://github.com/fantastic-admin/basic/releases/tag/v5.1.0)
:::

:::tip [专业版](https://github.com/fantastic-admin/pro/releases/tag/v5.1.0)
::: -->

## v5.0.0

**此版本有较多破坏性的变更，如果打算从 v4.x 升级，请仔细阅读并谨慎迁移代码。**

- 引入 [shadcn-vue](https://www.shadcn-vue.com/) ，内建组件和部分扩展组件基于 shadcn-vue 进行重构
- 所有内建组件名均改为 `Fa` 开头，例如 `FaButton` 。部分扩展组件也转为内建组件，例如 `FaPageHeader` 。为与扩展组件做区分，内建组件存放在 `/src/ui/components/` 目录下
- 登录页使用内建组件进行重构，不再依赖 `element-plus` ，更方便迁移其他 UI 组件库
- 系统主题重构，挑选了 shadcn-vue 中的 8 款主题并进行定制
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
- 新增 `app.enableCheckUpdates` 和 `app.checkUpdatesInterval` 应用设置，检查网站是否有更新，并提示更新
- 移除 `menu.switchMainMenuAndPageJump` 应用设置，新增 `menu.mainMenuClickMode` 应用设置，更灵活控制主导航的点击行为
- 增加全局插槽，用于在导航、顶栏等位置插入自定义内容

## v4.x

前往 [v4](https://fantastic-admin.hurui.me/v4-docs/guide/changelog.html) 文档查看

## v3.x

前往 [v3](https://fantastic-admin.hurui.me/v3-docs/guide/changelog.html) 文档查看

## v2.x

前往 [v2](https://fantastic-admin.hurui.me/v2-docs/guide/changelog.html) 文档查看