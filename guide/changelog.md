# 更新日志

只记录 feat/fix 以及破坏性变更。

## v5.2.0

:::info [基础版](https://github.com/fantastic-admin/basic/releases/tag/v5.2.0)
🚨 Breaking Changes

- Radix-vue 迁移到 reka-ui &nbsp;-&nbsp; by @hooray [<samp>(dcad2)</samp>](https://github.com/fantastic-admin/basic/commit/dcad2c6)
- 重写路由 `push/go/replace` 函数，移除 useTabbar 中 `open/go/replace` 函数 &nbsp;-&nbsp; by @hooray [<samp>(2b18c)</samp>](https://github.com/fantastic-admin/basic/commit/2b18c3f)

🚀 Features

- `FaDivider` 增加 class props &nbsp;-&nbsp; by @hooray [<samp>(b533c)</samp>](https://github.com/fantastic-admin/basic/commit/b533c5a)
- Layouts 布局支持 `<Suspense>` &nbsp;-&nbsp; by @hooray [<samp>(ce747)</samp>](https://github.com/fantastic-admin/basic/commit/ce7477b)
- 新增 `FaSlider` 组件 &nbsp;-&nbsp; by @hooray [<samp>(f0229)</samp>](https://github.com/fantastic-admin/basic/commit/f02298b)
- 增加 cursor 配置 &nbsp;-&nbsp; by @hooray [<samp>(b0ac0)</samp>](https://github.com/fantastic-admin/basic/commit/b0ac061)

🐞 Bug Fixes

- `FaContextMenu` z-index 被遮挡 &nbsp;-&nbsp; by @hooray [<samp>(ebf61)</samp>](https://github.com/fantastic-admin/basic/commit/ebf61b0)
- 修复 `FaDrawer` 组件 `contentClass` 设置无效 &nbsp;-&nbsp; by @hooray [<samp>(5bfb3)</samp>](https://github.com/fantastic-admin/basic/commit/5bfb3c8)
- 浏览器不支持 color-mix 时，框架主题不会同步至 element-plus 主题 &nbsp;-&nbsp; by @hooray [<samp>(609e7)</samp>](https://github.com/fantastic-admin/basic/commit/609e77c)
- 在路由守卫中捕获异常时，添加登出逻辑 &nbsp;-&nbsp; by @hooray [<samp>(5fcd3)</samp>](https://github.com/fantastic-admin/basic/commit/5fcd3fe)

🏎 Performance

- 优化导航菜单 &nbsp;-&nbsp; by @hooray [<samp>(5e59d)</samp>](https://github.com/fantastic-admin/basic/commit/5e59d12)
- 优化子菜单过渡效果，支持两套实现方案 &nbsp;-&nbsp; by @hooray [<samp>(10c84)</samp>](https://github.com/fantastic-admin/basic/commit/10c8401)
:::

:::tip [专业版](https://github.com/fantastic-admin/pro/releases/tag/v5.2.0)
🚨 Breaking Changes

- Radix-vue 迁移到 reka-ui &nbsp;-&nbsp; by @hooray [<samp>(5b45b)</samp>](https://github.com/fantastic-admin/pro/commit/5b45b75a)
- 重写路由 `push/go/replace` 函数，移除 useTabbar 中 `open/go/replace` 函数 &nbsp;-&nbsp; by @hooray [<samp>(8ca74)</samp>](https://github.com/fantastic-admin/pro/commit/8ca74642)

🚀 Features

- `FaDivider` 增加 class props &nbsp;-&nbsp; by @hooray [<samp>(73e87)</samp>](https://github.com/fantastic-admin/pro/commit/73e87bda)
- 新增 `FaFlipCard` 组件 &nbsp;-&nbsp; by @hooray [<samp>(87122)</samp>](https://github.com/fantastic-admin/pro/commit/87122797)
- 新增 `FaLinkPreview` 组件 &nbsp;-&nbsp; by @hooray [<samp>(28b3c)</samp>](https://github.com/fantastic-admin/pro/commit/28b3c973)
- 新增 `FaInteractiveButton` 组件 &nbsp;-&nbsp; by @hooray [<samp>(27c12)</samp>](https://github.com/fantastic-admin/pro/commit/27c12b5c)
- 新增 `FaGradientButton` 组件 &nbsp;-&nbsp; by @hooray [<samp>(595c2)</samp>](https://github.com/fantastic-admin/pro/commit/595c2e37)
- 新增 `FaMarquee` 组件 &nbsp;-&nbsp; by @hooray [<samp>(7efc5)</samp>](https://github.com/fantastic-admin/pro/commit/7efc592f)
- 新增 `FaBlurReveal` 组件 &nbsp;-&nbsp; by @hooray [<samp>(b4d6d)</samp>](https://github.com/fantastic-admin/pro/commit/b4d6d32c)
- 新增 `FaParticlesBg` 组件 &nbsp;-&nbsp; by @hooray [<samp>(8f9af)</samp>](https://github.com/fantastic-admin/pro/commit/8f9afb5e)
- 新增 `FaTextHighlight` 组件 &nbsp;-&nbsp; by @hooray [<samp>(9e1a0)</samp>](https://github.com/fantastic-admin/pro/commit/9e1a0cc3)
- 新增 `FaFlipWords` 组件 &nbsp;-&nbsp; by @hooray [<samp>(83e7f)</samp>](https://github.com/fantastic-admin/pro/commit/83e7f32f)
- 新增 `FaGlowyCardWrapper` / `FaGlowyCard` 组件 &nbsp;-&nbsp; by @hooray [<samp>(e3191)</samp>](https://github.com/fantastic-admin/pro/commit/e3191464)
- 新增 `FaAnimatedBeam` 组件 &nbsp;-&nbsp; by @hooray [<samp>(e305e)</samp>](https://github.com/fantastic-admin/pro/commit/e305ed97)
- 新增 `FaSparklesText` 组件 &nbsp;-&nbsp; by @hooray [<samp>(500cf)</samp>](https://github.com/fantastic-admin/pro/commit/500cf410)
- `FaAnimatedBeam` 组件增加虚线光束支持 &nbsp;-&nbsp; by @hooray [<samp>(0fa92)</samp>](https://github.com/fantastic-admin/pro/commit/0fa92486)
- 新增 `FaSpotlightCard` 组件 &nbsp;-&nbsp; by @hooray [<samp>(9792b)</samp>](https://github.com/fantastic-admin/pro/commit/9792b757)
- 新增 `useConfetti` 函数 &nbsp;-&nbsp; by @hooray [<samp>(2d665)</samp>](https://github.com/fantastic-admin/pro/commit/2d665f06)
- 新增 `FaPatternBg` 组件 &nbsp;-&nbsp; by @hooray [<samp>(7a063)</samp>](https://github.com/fantastic-admin/pro/commit/7a06351a)
- 新增 `FaScratchOff` 组件 &nbsp;-&nbsp; by @hooray [<samp>(a09f3)</samp>](https://github.com/fantastic-admin/pro/commit/a09f35d4)
- 新增 `FaBorderBeam` 组件 &nbsp;-&nbsp; by @hooray [<samp>(b290c)</samp>](https://github.com/fantastic-admin/pro/commit/b290c961)
- 增加 `layout.widthModeScope` 应用配置 &nbsp;-&nbsp; by @hooray [<samp>(20d02)</samp>](https://github.com/fantastic-admin/pro/commit/20d02a0f)
- Layouts 布局支持 `<Suspense>` &nbsp;-&nbsp; by @hooray [<samp>(27f8e)</samp>](https://github.com/fantastic-admin/pro/commit/27f8ec12)
- 新增 `FaCarousel` 组件 &nbsp;-&nbsp; by @hooray [<samp>(62806)</samp>](https://github.com/fantastic-admin/pro/commit/62806dec)
- 新增 `FaSlider` 组件 &nbsp;-&nbsp; by @hooray [<samp>(f2c9e)</samp>](https://github.com/fantastic-admin/pro/commit/f2c9e38c)
- 增加 cursor 配置 &nbsp;-&nbsp; by @hooray [<samp>(ec799)</samp>](https://github.com/fantastic-admin/pro/commit/ec79989d)
- `FaCode` 组件增加 class 属性 &nbsp;-&nbsp; by @hooray [<samp>(5b04b)</samp>](https://github.com/fantastic-admin/pro/commit/5b04bf8b)
- 新增 `FaCodePreview` 组件 &nbsp;-&nbsp; by @hooray [<samp>(1be49)</samp>](https://github.com/fantastic-admin/pro/commit/1be49849)

🐞 Bug Fixes

- `FaContextMenu` z-index 被遮挡 &nbsp;-&nbsp; by @hooray [<samp>(511f6)</samp>](https://github.com/fantastic-admin/pro/commit/511f64c4)
- 修复 `FaDrawer` 组件 `contentClass` 设置无效 &nbsp;-&nbsp; by @hooray [<samp>(9215d)</samp>](https://github.com/fantastic-admin/pro/commit/9215d5bd)
- 浏览器不支持 color-mix 时，框架主题不会同步至 element-plus 主题 &nbsp;-&nbsp; by @hooray [<samp>(7e6a9)</samp>](https://github.com/fantastic-admin/pro/commit/7e6a9ca5)
- 修复 `FaGlowyCard` 组件在移动端下导致页面无法滑动的问题 &nbsp;-&nbsp; by @hooray [<samp>(7e420)</samp>](https://github.com/fantastic-admin/pro/commit/7e4200aa)
- 修复路由 `meta.permanent` 参数失效 &nbsp;-&nbsp; by @hooray [<samp>(325d6)</samp>](https://github.com/fantastic-admin/pro/commit/325d68d2)
- 修复页宽模式在移动端布局错乱 &nbsp;-&nbsp; by @hooray [<samp>(2bd6c)</samp>](https://github.com/fantastic-admin/pro/commit/2bd6c317)
- 在路由守卫中捕获异常时，添加登出逻辑 &nbsp;-&nbsp; by @hooray [<samp>(d95ee)</samp>](https://github.com/fantastic-admin/pro/commit/d95ee6c2)
- 修复主导航文字不显示 &nbsp;-&nbsp; by @hooray [<samp>(867f0)</samp>](https://github.com/fantastic-admin/pro/commit/867f03be)

🏎 Performance

- 优化导航菜单 &nbsp;-&nbsp; by @hooray [<samp>(951d0)</samp>](https://github.com/fantastic-admin/pro/commit/951d0f1f)
- 优化子菜单过渡效果，支持两套实现方案 &nbsp;-&nbsp; by @hooray [<samp>(f3858)</samp>](https://github.com/fantastic-admin/pro/commit/f385819c)
:::

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