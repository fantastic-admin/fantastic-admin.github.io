---
url: /guide/changelog.md
---
# 更新日志

只记录 feat/fix 以及破坏性变更。

## v5.6.0

:::info [基础版](https://github.com/fantastic-admin/basic/releases/tag/v5.6.0)
🚨 Breaking Changes

* 新增 `FaImageUpload` 组件，移除 `ImageUpload` 和 `ImagesUpload` 组件  -  by @hooray [(b153b)](https://github.com/fantastic-admin/basic/commit/b153bda)
* 新增 `FaFileUpload` 组件，移除 `FileUpload` 组件  -  by @hooray [(0e174)](https://github.com/fantastic-admin/basic/commit/0e174e2)

🚀 Features

* `FaImagePreview` 组件增加函数式调用  -  by @hooray [(ccb8b)](https://github.com/fantastic-admin/basic/commit/ccb8bd9)
* `FaImagePreview` 组件函数式调用增加多图支持  -  by @hooray [(43a85)](https://github.com/fantastic-admin/basic/commit/43a85f5)
* `FaModal` 和 `FaDrawer` 分别增加命令式调用API  -  by @hooray [(d390d)](https://github.com/fantastic-admin/basic/commit/d390dae)
* `FaModal` 和 `FaDrawer` 组件添加 zIndex 属性  -  by @hooray [(06458)](https://github.com/fantastic-admin/basic/commit/0645846)
* `FaSlider` 组件增加 `tooltip` 属性  -  by @hooray [(c19d7)](https://github.com/fantastic-admin/basic/commit/c19d749)
* 增加 `FaTextarea` 组件  -  by @hooray [(9bfe2)](https://github.com/fantastic-admin/basic/commit/9bfe2fb)
* `useFaModal` 和 `useFaDrawer` 页面卸载时自动清理  -  by @hooray [(efc54)](https://github.com/fantastic-admin/basic/commit/efc54f4)

🐞 Bug Fixes

* 修复自动生成 store 文件目录错误  -  by @hooray [(cc9bb)](https://github.com/fantastic-admin/basic/commit/cc9bb1a)
* 修复 `FaButtonGroup` 组件的按钮边框样式，确保在非最后一个和非第一个按钮时正确应用圆角样式  -  by @hooray [(5551c)](https://github.com/fantastic-admin/basic/commit/5551c70)
* 修复 `FaDrawer` and `FaModal` 组件在头部不显示时的警告  -  by @hooray [(3def1)](https://github.com/fantastic-admin/basic/commit/3def174)
* 确保 router.close 方法在 router.push 后处理 tabbar 状态  -  by @hooray [(0b9d1)](https://github.com/fantastic-admin/basic/commit/0b9d11f)
  :::

:::tip [专业版](https://github.com/fantastic-admin/pro/releases/tag/v5.6.0)
🚨 Breaking Changes

* 新增 `FaImageUpload` 组件，移除 `ImageUpload` 和 `ImagesUpload` 组件  -  by @hooray [(e48f1)](https://github.com/fantastic-admin/pro/commit/e48f1aa8)
* 新增 `FaFileUpload` 组件，移除 `FileUpload` 组件  -  by @hooray [(93fe5)](https://github.com/fantastic-admin/pro/commit/93fe5fb3)

🚀 Features

* `FaImagePreview` 组件增加函数式调用  -  by @hooray [(66386)](https://github.com/fantastic-admin/pro/commit/663865c9)
* `FaImagePreview` 组件函数式调用增加多图支持  -  by @hooray [(74f0e)](https://github.com/fantastic-admin/pro/commit/74f0e4f3)
* `FaModal` 和 `FaDrawer` 分别增加命令式调用API  -  by @hooray [(76060)](https://github.com/fantastic-admin/pro/commit/76060cdd)
* `FaModal` 和 `FaDrawer` 组件添加 zIndex 属性  -  by @hooray [(e8968)](https://github.com/fantastic-admin/pro/commit/e8968edf)
* `FaSlider` 组件增加 `tooltip` 属性  -  by @hooray [(4623f)](https://github.com/fantastic-admin/pro/commit/4623f5e9)
* 增加 `FaTextarea` 组件  -  by @hooray [(314fa)](https://github.com/fantastic-admin/pro/commit/314fad7e)
* 增加反馈模块  -  by @hooray [(36d9e)](https://github.com/fantastic-admin/pro/commit/36d9ef3c)
* `useFaModal` 和 `useFaDrawer` 页面卸载时自动清理  -  by @hooray [(c2798)](https://github.com/fantastic-admin/pro/commit/c279808d)

🐞 Bug Fixes

* 修复自动生成 store 文件目录错误  -  by @hooray [(9bcea)](https://github.com/fantastic-admin/pro/commit/9bceaeba)
* 修复 `FaButtonGroup` 组件的按钮边框样式，确保在非最后一个和非第一个按钮时正确应用圆角样式  -  by @hooray [(26eb4)](https://github.com/fantastic-admin/pro/commit/26eb4b6a)
* 修复 `FaDrawer` and `FaModal` 组件在头部不显示时的警告  -  by @hooray [(b9793)](https://github.com/fantastic-admin/pro/commit/b9793564)
* 确保 router.close 方法在 router.push 后处理 tabbar 状态  -  by @hooray [(0feaa)](https://github.com/fantastic-admin/pro/commit/0feaabd7)
  :::

## v5.5.0

:::info [基础版](https://github.com/fantastic-admin/basic/releases/tag/v5.5.0)
🚨 Breaking Changes

* 新增 `FaImagePreview` 组件，并移除 `ImagePreview` 组件  -  by @hooray [(1a0eb)](https://github.com/fantastic-admin/basic/commit/1a0eb39)
* 移除 `useViewTransition` 函数封装  -  by @hooray [(0ac47)](https://github.com/fantastic-admin/basic/commit/0ac4738)
* Pinia store 改为自动导入  -  by @hooray [(8d597)](https://github.com/fantastic-admin/basic/commit/8d59733)
* 扩展路由 `close` 函数，并移除 useTabbar 中 `close` 函数  -  by @hooray [(59e68)](https://github.com/fantastic-admin/basic/commit/59e683c)

🚀 Features

* 新增 `FaButtonGroup` 组件  -  by @hooray [(e553f)](https://github.com/fantastic-admin/basic/commit/e553fef)
* `FaModal` 组件增加 `beforeClose` 回调函数，优化关闭逻辑并支持异步处理  -  by @hooray [(6febf)](https://github.com/fantastic-admin/basic/commit/6febfea)
* 为 `FaTabs` 组件添加 `listClass` 和 `contentClass` 属性，以支持自定义样式  -  by @hooray [(e3aa5)](https://github.com/fantastic-admin/basic/commit/e3aa58e)
* `FaDrawer` 和 `FaModal` 组件新增 `destroyOnClose` 属性  -  by @hooray [(6fc89)](https://github.com/fantastic-admin/basic/commit/6fc8942)
* 个人设置弹窗适配移动端  -  by @hooray [(bfe66)](https://github.com/fantastic-admin/basic/commit/bfe6607)
* 标签页右键菜单补充图标  -  by @hooray [(e2cd4)](https://github.com/fantastic-admin/basic/commit/e2cd484)
* Vite 升级到 7.0  -  by @hooray [(fa537)](https://github.com/fantastic-admin/basic/commit/fa537b7)

🐞 Bug Fixes

* 更新viewport设置以改善移动设备上的显示效果  -  by @hooray [(4ef21)](https://github.com/fantastic-admin/basic/commit/4ef21b7)
* 修复权限未开启时菜单未过滤的问题，并简化菜单过滤逻辑  -  by @hooray [(3859c)](https://github.com/fantastic-admin/basic/commit/3859c26)
* 修复账户按钮移动端次导航下不实现用户名  -  by @hooray [(28cc8)](https://github.com/fantastic-admin/basic/commit/28cc84f)

🏎 Performance

* 优化导航菜单动效执行性能  -  by @hooray [(7ee93)](https://github.com/fantastic-admin/basic/commit/7ee93b0)
  :::

:::tip [专业版](https://github.com/fantastic-admin/pro/releases/tag/v5.5.0)
🚨 Breaking Changes

* 简化页宽模式，仅保留自适应和居中两种模式  -  by @hooray [(37735)](https://github.com/fantastic-admin/pro/commit/377359f9)
* 新增 `FaImagePreview` 组件，并移除 `ImagePreview` 组件  -  by @hooray [(b5251)](https://github.com/fantastic-admin/pro/commit/b52513bc)
* 移除 `useViewTransition` 函数封装  -  by @hooray [(45e3b)](https://github.com/fantastic-admin/pro/commit/45e3bec3)
* Pinia store 改为自动导入  -  by @hooray [(427e9)](https://github.com/fantastic-admin/pro/commit/427e991a)
* 扩展路由 `close` 函数，并移除 useTabbar 中 `close` 函数  -  by @hooray [(2b7aa)](https://github.com/fantastic-admin/pro/commit/2b7aa1ee)
* 路由增加 `meta.tabMerge` 属性，移除应用配置中标签页合并配置项  -  by @hooray [(e717e)](https://github.com/fantastic-admin/pro/commit/e717e2b6)
* Storage 前缀配置移入环境变量配置文件中  -  by @hooray [(6d058)](https://github.com/fantastic-admin/pro/commit/6d058e65)
* 移除 storage 工具函数，重写了 localStorage 和 sessionStorage ，可直接使用原生 API  -  by @hooray [(2470e)](https://github.com/fantastic-admin/pro/commit/2470e627)

🚀 Features

* 新增 `FaMultiStepLoader` 组件  -  by @hooray [(f2f57)](https://github.com/fantastic-admin/pro/commit/f2f57a5c)
* 新增 `FaButtonGroup` 组件  -  by @hooray [(5b455)](https://github.com/fantastic-admin/pro/commit/5b455871)
* `FaModal` 组件增加 `beforeClose` 回调函数，优化关闭逻辑并支持异步处理  -  by @hooray [(0046b)](https://github.com/fantastic-admin/pro/commit/0046bcba)
* `FaTabs` 组件增加 `listClass` 和 `contentClass` 属性以支持自定义样式  -  by @hooray [(588af)](https://github.com/fantastic-admin/pro/commit/588af68f)
* 新增导航栏暗黑模式，可在亮色模式下启用  -  by @hooray [(7e17a)](https://github.com/fantastic-admin/pro/commit/7e17a46b)
* `FaDrawer` 和 `FaModal` 组件新增 `destroyOnClose` 属性  -  by @hooray [(dd5e4)](https://github.com/fantastic-admin/pro/commit/dd5e4053)
* 在 `FaStorageBox` 组件中新增名称验证提示，确保名称不能为空且不重复  -  by @hooray [(02b22)](https://github.com/fantastic-admin/pro/commit/02b22b8f)
* 个人设置弹窗适配移动端  -  by @hooray [(55537)](https://github.com/fantastic-admin/pro/commit/55537882)
* 标签页右键菜单补充图标  -  by @hooray [(1bebb)](https://github.com/fantastic-admin/pro/commit/1bebbcf1)
* Vite 升级到 7.0  -  by @hooray [(010d0)](https://github.com/fantastic-admin/pro/commit/010d0214)

🐞 Bug Fixes

* 更新viewport设置以改善移动设备上的显示效果  -  by @hooray [(fce07)](https://github.com/fantastic-admin/pro/commit/fce07d6c)
* 修复权限未开启时菜单未过滤的问题，并简化菜单过滤逻辑  -  by @hooray [(0023f)](https://github.com/fantastic-admin/pro/commit/0023ff4e)
* 修复标签页移出动画乱飘  -  by @hooray [(27c5f)](https://github.com/fantastic-admin/pro/commit/27c5f982)
* 修复账户按钮移动端次导航下不实现用户名  -  by @hooray [(422a9)](https://github.com/fantastic-admin/pro/commit/422a9ce9)
* 修复暗黑导航栏始终展开菜单字体颜色显示错误  -  by @hooray [(e158c)](https://github.com/fantastic-admin/pro/commit/e158c43b)
* 修复 `FaTimeline` 组件数据少于或等于1条时候报错  -  by @hooray [(8fead)](https://github.com/fantastic-admin/pro/commit/8fead16e)
* 修复页面最大化时边距计算错误  -  by @hooray [(259c3)](https://github.com/fantastic-admin/pro/commit/259c3184)

🏎 Performance

* 优化导航菜单动效执行性能  -  by @hooray [(f1b74)](https://github.com/fantastic-admin/pro/commit/f1b74c37)
  :::

## v5.4.0

:::info [基础版](https://github.com/fantastic-admin/basic/releases/tag/v5.4.0)
🚀 Features

* `FaScrollArea` 组件新增 onScroll 事件  -  by @hooray [(9b500)](https://github.com/fantastic-admin/basic/commit/9b5003f)
* 对未设置 `redirect` 的父路由，访问时将自动重定向到允许访问的子路由  -  by @hooray [(8d4e2)](https://github.com/fantastic-admin/basic/commit/8d4e226)
* 新增 `FaHoverCard` 组件  -  by @hooray [(eb306)](https://github.com/fantastic-admin/basic/commit/eb306b1)
* 新增 `FaProgress` 组件  -  by @hooray [(b7c62)](https://github.com/fantastic-admin/basic/commit/b7c627c)
* 增加请求重试机制  -  by @hooray [(3b889)](https://github.com/fantastic-admin/basic/commit/3b889f6)
* 将 `FaDropdown` 组件插槽名从 `label` 修改为 `header`，并新增 `footer` 插槽  -  by @hooray [(b9741)](https://github.com/fantastic-admin/basic/commit/b974139)

🐞 Bug Fixes

* 优化菜单点击处理逻辑，增加对链接的判断  -  by @hooray [(9f374)](https://github.com/fantastic-admin/basic/commit/9f37438)
* 修复次导航收起时页面展示错误  -  by @hooray [(05261)](https://github.com/fantastic-admin/basic/commit/05261b3)
* 修复激活标签页定位可能不居中的问题  -  by @hooray [(8bfa0)](https://github.com/fantastic-admin/basic/commit/8bfa0f0)
  :::

:::tip [专业版](https://github.com/fantastic-admin/pro/releases/tag/v5.4.0)
🚨 Breaking Changes

* 调整 `FaLayoutContainer` 组件 props  -  by @hooray [(f97c1)](https://github.com/fantastic-admin/pro/commit/f97c17fa)

🚀 Features

* `FaScrollArea` 组件新增 onScroll 事件  -  by @hooray [(46cb9)](https://github.com/fantastic-admin/pro/commit/46cb9df1)
* 新增 `FaTimeline` 组件  -  by @hooray [(f34d6)](https://github.com/fantastic-admin/pro/commit/f34d67dc)
* 对未设置 `redirect` 的父路由，访问时将自动重定向到允许访问的子路由  -  by @hooray [(8c7ab)](https://github.com/fantastic-admin/pro/commit/8c7ab890)
* 新增 `FaHoverCard` 组件  -  by @hooray [(d9ea7)](https://github.com/fantastic-admin/pro/commit/d9ea7865)
* 新增 `FaProgress` 组件  -  by @hooray [(ebbed)](https://github.com/fantastic-admin/pro/commit/ebbedb5f)
* 增加请求重试机制  -  by @hooray [(76e84)](https://github.com/fantastic-admin/pro/commit/76e8470b)
* 将 `FaDropdown` 组件插槽名从 `label` 修改为 `header`，并新增 `footer` 插槽  -  by @hooray [(6cd57)](https://github.com/fantastic-admin/pro/commit/6cd57d44)

🐞 Bug Fixes

* 修复工具栏 i18n 按钮动画只能执行一次  -  by @hooray [(914e9)](https://github.com/fantastic-admin/pro/commit/914e9966)
* 优化 `zoomable` 指令可能会多次创建实例  -  by @hooray [(1203d)](https://github.com/fantastic-admin/pro/commit/1203dd22)
* 优化菜单点击处理逻辑，增加对链接和新窗口的判断  -  by @hooray [(fd88e)](https://github.com/fantastic-admin/pro/commit/fd88e0a7)
* 修复 `FaPagination` 组件修改当前页码后视图不更新的问题  -  by @hooray [(fd47e)](https://github.com/fantastic-admin/pro/commit/fd47e267)
* 修复次导航收起时页面展示错误  -  by @hooray [(37fcb)](https://github.com/fantastic-admin/pro/commit/37fcbda3)
* 修复激活标签页定位可能不居中的问题  -  by @hooray [(8ab76)](https://github.com/fantastic-admin/pro/commit/8ab76aa1)
  :::

## v5.3.0

:::info [基础版](https://github.com/fantastic-admin/basic/releases/tag/v5.3.0)
🚀 Features

* `FileUpload` 组件增加 `onRemove` 事件回调  -  by @hooray [(59560)](https://github.com/fantastic-admin/basic/commit/5956008)
* 将账号信息按钮封装为 `AccountButton` 组件，并优化工具栏和导航栏的显示逻辑  -  by @hooray [(a1d32)](https://github.com/fantastic-admin/basic/commit/a1d3268)
* 新增预设插槽 `header-after-menu`、`main-sidebar-after-menu` 和 `sub-sidebar-after-menu`  -  by @hooray [(d7808)](https://github.com/fantastic-admin/basic/commit/d7808da)
* 新增工具栏全局开关设置  -  by @hooray [(f8794)](https://github.com/fantastic-admin/basic/commit/f8794e2)

🐞 Bug Fixes

* 修复 `FaDrawer` 和 `FaModal` 组件中遗漏的 props  -  by @hooray [(97757)](https://github.com/fantastic-admin/basic/commit/97757e3)
* 修复导航logo在禁用主页时依旧显示可点击状态  -  by @hooray [(3be15)](https://github.com/fantastic-admin/basic/commit/3be15b2)
  :::

:::tip [专业版](https://github.com/fantastic-admin/pro/releases/tag/v5.3.0)
🚀 Features

* `FileUpload` 组件增加 `onRemove` 事件回调  -  by @hooray [(32fcc)](https://github.com/fantastic-admin/pro/commit/32fcc315)
* 新增 `FaAnimatedCountTo` 组件  -  by @hooray [(b3a73)](https://github.com/fantastic-admin/pro/commit/b3a73afd)
* 将账号信息按钮封装为 `AccountButton` 组件，并优化工具栏和导航栏的显示逻辑  -  by @hooray [(fb498)](https://github.com/fantastic-admin/pro/commit/fb498a4b)
* 新增预设插槽 `header-after-menu`、`main-sidebar-after-menu` 和 `sub-sidebar-after-menu`  -  by @hooray [(f850a)](https://github.com/fantastic-admin/pro/commit/f850a606)
* 新增工具栏全局开关设置  -  by @hooray [(06966)](https://github.com/fantastic-admin/pro/commit/06966d77)

🐞 Bug Fixes

* 修复 `FaDrawer` 和 `FaModal` 组件中遗漏的 props  -  by @hooray [(c9d20)](https://github.com/fantastic-admin/pro/commit/c9d20568)
* 修复登录页 copyright 展示位置错误  -  by @hooray [(ce8bf)](https://github.com/fantastic-admin/pro/commit/ce8bf1a3)
* 修复导航logo在禁用主页时依旧显示可点击状态  -  by @hooray [(009d3)](https://github.com/fantastic-admin/pro/commit/009d3c8e)
  :::

## v5.2.0

:::info [基础版](https://github.com/fantastic-admin/basic/releases/tag/v5.2.0)
🚨 Breaking Changes

* Radix-vue 迁移到 reka-ui  -  by @hooray [(dcad2)](https://github.com/fantastic-admin/basic/commit/dcad2c6)
* 重写路由 `push/go/replace` 函数，移除 useTabbar 中 `open/go/replace` 函数  -  by @hooray [(2b18c)](https://github.com/fantastic-admin/basic/commit/2b18c3f)

🚀 Features

* `FaDivider` 增加 class props  -  by @hooray [(b533c)](https://github.com/fantastic-admin/basic/commit/b533c5a)
* Layouts 布局支持 `<Suspense>`  -  by @hooray [(ce747)](https://github.com/fantastic-admin/basic/commit/ce7477b)
* 新增 `FaSlider` 组件  -  by @hooray [(f0229)](https://github.com/fantastic-admin/basic/commit/f02298b)
* 增加 cursor 配置  -  by @hooray [(b0ac0)](https://github.com/fantastic-admin/basic/commit/b0ac061)

🐞 Bug Fixes

* `FaContextMenu` z-index 被遮挡  -  by @hooray [(ebf61)](https://github.com/fantastic-admin/basic/commit/ebf61b0)
* 修复 `FaDrawer` 组件 `contentClass` 设置无效  -  by @hooray [(5bfb3)](https://github.com/fantastic-admin/basic/commit/5bfb3c8)
* 浏览器不支持 color-mix 时，框架主题不会同步至 element-plus 主题  -  by @hooray [(609e7)](https://github.com/fantastic-admin/basic/commit/609e77c)
* 在路由守卫中捕获异常时，添加登出逻辑  -  by @hooray [(5fcd3)](https://github.com/fantastic-admin/basic/commit/5fcd3fe)

🏎 Performance

* 优化导航菜单  -  by @hooray [(5e59d)](https://github.com/fantastic-admin/basic/commit/5e59d12)
* 优化子菜单过渡效果，支持两套实现方案  -  by @hooray [(10c84)](https://github.com/fantastic-admin/basic/commit/10c8401)
  :::

:::tip [专业版](https://github.com/fantastic-admin/pro/releases/tag/v5.2.0)
🚨 Breaking Changes

* Radix-vue 迁移到 reka-ui  -  by @hooray [(5b45b)](https://github.com/fantastic-admin/pro/commit/5b45b75a)
* 重写路由 `push/go/replace` 函数，移除 useTabbar 中 `open/go/replace` 函数  -  by @hooray [(8ca74)](https://github.com/fantastic-admin/pro/commit/8ca74642)

🚀 Features

* `FaDivider` 增加 class props  -  by @hooray [(73e87)](https://github.com/fantastic-admin/pro/commit/73e87bda)
* 新增 `FaFlipCard` 组件  -  by @hooray [(87122)](https://github.com/fantastic-admin/pro/commit/87122797)
* 新增 `FaLinkPreview` 组件  -  by @hooray [(28b3c)](https://github.com/fantastic-admin/pro/commit/28b3c973)
* 新增 `FaInteractiveButton` 组件  -  by @hooray [(27c12)](https://github.com/fantastic-admin/pro/commit/27c12b5c)
* 新增 `FaGradientButton` 组件  -  by @hooray [(595c2)](https://github.com/fantastic-admin/pro/commit/595c2e37)
* 新增 `FaMarquee` 组件  -  by @hooray [(7efc5)](https://github.com/fantastic-admin/pro/commit/7efc592f)
* 新增 `FaBlurReveal` 组件  -  by @hooray [(b4d6d)](https://github.com/fantastic-admin/pro/commit/b4d6d32c)
* 新增 `FaParticlesBg` 组件  -  by @hooray [(8f9af)](https://github.com/fantastic-admin/pro/commit/8f9afb5e)
* 新增 `FaTextHighlight` 组件  -  by @hooray [(9e1a0)](https://github.com/fantastic-admin/pro/commit/9e1a0cc3)
* 新增 `FaFlipWords` 组件  -  by @hooray [(83e7f)](https://github.com/fantastic-admin/pro/commit/83e7f32f)
* 新增 `FaGlowyCardWrapper` / `FaGlowyCard` 组件  -  by @hooray [(e3191)](https://github.com/fantastic-admin/pro/commit/e3191464)
* 新增 `FaAnimatedBeam` 组件  -  by @hooray [(e305e)](https://github.com/fantastic-admin/pro/commit/e305ed97)
* 新增 `FaSparklesText` 组件  -  by @hooray [(500cf)](https://github.com/fantastic-admin/pro/commit/500cf410)
* `FaAnimatedBeam` 组件增加虚线光束支持  -  by @hooray [(0fa92)](https://github.com/fantastic-admin/pro/commit/0fa92486)
* 新增 `FaSpotlightCard` 组件  -  by @hooray [(9792b)](https://github.com/fantastic-admin/pro/commit/9792b757)
* 新增 `useConfetti` 函数  -  by @hooray [(2d665)](https://github.com/fantastic-admin/pro/commit/2d665f06)
* 新增 `FaPatternBg` 组件  -  by @hooray [(7a063)](https://github.com/fantastic-admin/pro/commit/7a06351a)
* 新增 `FaScratchOff` 组件  -  by @hooray [(a09f3)](https://github.com/fantastic-admin/pro/commit/a09f35d4)
* 新增 `FaBorderBeam` 组件  -  by @hooray [(b290c)](https://github.com/fantastic-admin/pro/commit/b290c961)
* 增加 `layout.widthModeScope` 应用配置  -  by @hooray [(20d02)](https://github.com/fantastic-admin/pro/commit/20d02a0f)
* Layouts 布局支持 `<Suspense>`  -  by @hooray [(27f8e)](https://github.com/fantastic-admin/pro/commit/27f8ec12)
* 新增 `FaCarousel` 组件  -  by @hooray [(62806)](https://github.com/fantastic-admin/pro/commit/62806dec)
* 新增 `FaSlider` 组件  -  by @hooray [(f2c9e)](https://github.com/fantastic-admin/pro/commit/f2c9e38c)
* 增加 cursor 配置  -  by @hooray [(ec799)](https://github.com/fantastic-admin/pro/commit/ec79989d)
* `FaCode` 组件增加 class 属性  -  by @hooray [(5b04b)](https://github.com/fantastic-admin/pro/commit/5b04bf8b)
* 新增 `FaCodePreview` 组件  -  by @hooray [(1be49)](https://github.com/fantastic-admin/pro/commit/1be49849)

🐞 Bug Fixes

* `FaContextMenu` z-index 被遮挡  -  by @hooray [(511f6)](https://github.com/fantastic-admin/pro/commit/511f64c4)
* 修复 `FaDrawer` 组件 `contentClass` 设置无效  -  by @hooray [(9215d)](https://github.com/fantastic-admin/pro/commit/9215d5bd)
* 浏览器不支持 color-mix 时，框架主题不会同步至 element-plus 主题  -  by @hooray [(7e6a9)](https://github.com/fantastic-admin/pro/commit/7e6a9ca5)
* 修复 `FaGlowyCard` 组件在移动端下导致页面无法滑动的问题  -  by @hooray [(7e420)](https://github.com/fantastic-admin/pro/commit/7e4200aa)
* 修复路由 `meta.permanent` 参数失效  -  by @hooray [(325d6)](https://github.com/fantastic-admin/pro/commit/325d68d2)
* 修复页宽模式在移动端布局错乱  -  by @hooray [(2bd6c)](https://github.com/fantastic-admin/pro/commit/2bd6c317)
* 在路由守卫中捕获异常时，添加登出逻辑  -  by @hooray [(d95ee)](https://github.com/fantastic-admin/pro/commit/d95ee6c2)
* 修复主导航文字不显示  -  by @hooray [(867f0)](https://github.com/fantastic-admin/pro/commit/867f03be)

🏎 Performance

* 优化导航菜单  -  by @hooray [(951d0)](https://github.com/fantastic-admin/pro/commit/951d0f1f)
* 优化子菜单过渡效果，支持两套实现方案  -  by @hooray [(f3858)](https://github.com/fantastic-admin/pro/commit/f385819c)
  :::

## v5.1.0

:::info [基础版](https://github.com/fantastic-admin/basic/releases/tag/v5.1.0)
🚨 Breaking Changes

* 重构注册路由数据结构  -  by @hooray [(cfb4f)](https://github.com/fantastic-admin/basic/commit/cfb4f23)

🚀 Features

* `FaSelect` 组件增加 class props  -  by @hooray [(eff07)](https://github.com/fantastic-admin/basic/commit/eff07c2)
* 刷新按钮增加按住ctrl使用原生浏览器刷新功能  -  by @hooray [(2100b)](https://github.com/fantastic-admin/basic/commit/2100bbe)
* 增加 vue devtools 启动编辑器环境变量  -  by @hooray [(643d4)](https://github.com/fantastic-admin/basic/commit/643d458)
* `FaPopover` 组件增加手动控制面板显示  -  by @hooray [(6d58f)](https://github.com/fantastic-admin/basic/commit/6d58f1c)

🐞 Bug Fixes

* 导航搜索面板唤起时输入框未聚焦  -  by @hooray [(a6e66)](https://github.com/fantastic-admin/basic/commit/a6e66c3)
* 修复 `useFaModal` 弹窗警告  -  by @hooray [(b3b89)](https://github.com/fantastic-admin/basic/commit/b3b8947)
  :::

:::tip [专业版](https://github.com/fantastic-admin/pro/releases/tag/v5.1.0)
🚨 Breaking Changes

* 重构注册路由数据结构  -  by @hooray [(c0d8b)](https://github.com/fantastic-admin/pro/commit/c0d8b9bf)

🚀 Features

* `FaSelect` 组件增加 class props  -  by @hooray [(83e5a)](https://github.com/fantastic-admin/pro/commit/83e5a9e3)
* 新增 `FaCode` 组件  -  by @hooray [(ac4e1)](https://github.com/fantastic-admin/pro/commit/ac4e1678)
* 刷新按钮增加按住ctrl使用原生浏览器刷新功能  -  by @hooray [(a152b)](https://github.com/fantastic-admin/pro/commit/a152b948)
* `FaLayoutContainer` 组件增加顶部底部区域  -  by @hooray [(66def)](https://github.com/fantastic-admin/pro/commit/66def612)
* 增加 vue devtools 启动编辑器环境变量  -  by @hooray [(f1e86)](https://github.com/fantastic-admin/pro/commit/f1e863d1)
* `FaPopover` 组件增加手动控制面板显示  -  by @hooray [(9c961)](https://github.com/fantastic-admin/pro/commit/9c961713)

🐞 Bug Fixes

* 导航搜索面板唤起时输入框未聚焦  -  by @hooray [(0611c)](https://github.com/fantastic-admin/pro/commit/0611ca1a)
* 修复 `useFaModal` 弹窗警告  -  by @hooray [(a2384)](https://github.com/fantastic-admin/pro/commit/a2384f0e)
  :::

## v5.0.0

**此版本有较多破坏性的变更，如果打算从 v4.x 升级，请仔细阅读并谨慎迁移代码。**

* 引入 [shadcn-vue](https://www.shadcn-vue.com/) ，内建组件和部分扩展组件基于 shadcn-vue 进行重构

* 系统主题重构，挑选了 shadcn-vue 中的 8 款主题并进行定制

* 所有内建组件名均改为 `Fa` 开头，例如 `FaButton` 。部分扩展组件也转为内建组件，例如 `FaPageHeader` 。新增了一系列基于 shadcn-vue 的组件，例如 `FaPopover` 。为与扩展组件做区分，内建组件存放在 `/src/ui/components/` 目录下

* 登录页使用内建组件进行重构，不再依赖 `element-plus` ，更方便迁移其他 UI 组件库

* 新增 `app.themeSync` 应用设置

* 路由 `meta` 配置项调整：

  * 移除 `meta.i18n` ，`meta.title` 支持国际化
  * 移除 `meta.sidebar` ，改为 `meta.menu`
  * 移除 `meta.paddingBottom` ，改为由框架自动处理
  * 新增 `meta.badgeVariant` ，用于设置导航徽章颜色
  * 新增 `meta.query` ，用于设置点击导航时进行路由跳转时，携带的参数
  * 新增 `meta.maximize` ，用于设置访问导航的路由时，是否最大化
  * 新增 `meta.exitMaximize` ，用于设置离开导航的路由时，是否退出最大化
  * 新增 `meta.sort` ，用于设置导航的排序

* 主导航增加徽章和徽章颜色设置

* 新增 `app.loginExpiredMode` 应用设置，设置登录状态过期后的行为

* 新增 `app.enableCheckUpdates` 应用设置，检查网站是否有更新

* 移除 `menu.switchMainMenuAndPageJump` 应用设置，新增 `menu.mainMenuClickMode` 应用设置，更灵活控制主导航的点击行为

* 增加全局插槽，用于在导航、顶栏等位置插入自定义内容

## v4.x

前往 [v4](https://fantastic-admin.hurui.me/v4-docs/guide/changelog.html) 文档查看

## v3.x

前往 [v3](https://fantastic-admin.hurui.me/v3-docs/guide/changelog.html) 文档查看

## v2.x

前往 [v2](https://fantastic-admin.hurui.me/v2-docs/guide/changelog.html) 文档查看
