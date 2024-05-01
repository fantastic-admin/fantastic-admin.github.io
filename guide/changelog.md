# 更新日志

只记录 feat/fix 以及破坏性变更。

## 4.8.0

:::info [基础版](https://github.com/fantastic-admin/basic/releases/tag/v4.8.0)
🚨 Breaking Changes

- 路由 `meta.auth` 保持元信息默认合并行为，路由访问改为通过 `route.matched` 进行逐级鉴权 &nbsp;-&nbsp; by @hooray [<samp>(4911a)</samp>](https://github.com/fantastic-admin/basic/commit/4911aff)

🚀 Features

- 登录页增加扫码登录参考 &nbsp;-&nbsp; by @hooray [<samp>(98d21)</samp>](https://github.com/fantastic-admin/basic/commit/98d2184)

🐞 Bug Fixes

- 修复一级路由设置 `meta.menu: false` 无效 &nbsp;-&nbsp; by @hooray [<samp>(cb53f)</samp>](https://github.com/fantastic-admin/basic/commit/cb53f4c)
- 标签栏右键菜单自定义样式没在指定 class 范围内生效 &nbsp;-&nbsp; by @hooray [<samp>(5269d)</samp>](https://github.com/fantastic-admin/basic/commit/5269dba)
- 标签栏解绑错误快捷键 &nbsp;-&nbsp; by @hooray [<samp>(14583)</samp>](https://github.com/fantastic-admin/basic/commit/14583bb)
- 修复类型定义 &nbsp;-&nbsp; by @hooray [<samp>(44949)</samp>](https://github.com/fantastic-admin/basic/commit/449495f)
:::

:::tip [专业版](https://github.com/fantastic-admin/pro/releases/tag/v4.8.0)
🚨 Breaking Changes

- 路由 `meta.auth` 保持元信息默认合并行为，路由访问改为通过 `route.matched` 进行逐级鉴权 &nbsp;-&nbsp; by @hooray [<samp>(aad34)</samp>](https://github.com/fantastic-admin/pro/commit/aad3408d)
- 路由`meta.title`支持设置i18n的key，同时`meta.i18n`进入弃用过渡期 &nbsp;-&nbsp; by @hooray [<samp>(68e5c)</samp>](https://github.com/fantastic-admin/pro/commit/68e5ce3e)

🚀 Features

- `LayoutContainer` 组件支持设置侧边栏默认显示状态 &nbsp;-&nbsp; by @hooray [<samp>(28708)</samp>](https://github.com/fantastic-admin/pro/commit/28708912)
- 登录页增加扫码登录参考 &nbsp;-&nbsp; by @hooray [<samp>(3a561)</samp>](https://github.com/fantastic-admin/pro/commit/3a561264)

🐞 Bug Fixes

- 修复水印开启报错 &nbsp;-&nbsp; by @hooray [<samp>(06729)</samp>](https://github.com/fantastic-admin/pro/commit/06729004)
- 修复一级路由设置 `meta.menu: false` 无效 &nbsp;-&nbsp; by @hooray [<samp>(39522)</samp>](https://github.com/fantastic-admin/pro/commit/39522ac9)
- 标签栏右键菜单自定义样式没在指定 class 范围内生效 &nbsp;-&nbsp; by @hooray [<samp>(d8934)</samp>](https://github.com/fantastic-admin/pro/commit/d8934471)
- 标签栏解绑错误快捷键 &nbsp;-&nbsp; by @hooray [<samp>(368ac)</samp>](https://github.com/fantastic-admin/pro/commit/368accda)
- 修复类型定义 &nbsp;-&nbsp; by @hooray [<samp>(13bd9)</samp>](https://github.com/fantastic-admin/pro/commit/13bd94b7)
:::

## 4.7.0

:::info [基础版](https://github.com/fantastic-admin/basic/releases/tag/v4.7.0)
🚀 Features

- 路由增加 `meta.menu` 配置，同时 `meta.sidebar` 进入弃用过渡期 &nbsp;-&nbsp; by @hooray [<samp>(04fa3)</samp>](https://github.com/fantastic-admin/basic/commit/04fa39c)

🐞 Bug Fixes

- 修复 mock 模板请求无响应数据 &nbsp;-&nbsp; by @hooray [<samp>(73074)</samp>](https://github.com/fantastic-admin/basic/commit/7307410)
- 修复顶部导航鼠标滚动回弹 &nbsp;-&nbsp; by @hooray [<samp>(107e8)</samp>](https://github.com/fantastic-admin/basic/commit/107e820)
- 修复顶部导航数量过多，导致工具栏被遮挡 &nbsp;-&nbsp; by @hooray [<samp>(a105d)</samp>](https://github.com/fantastic-admin/basic/commit/a105df6)
- 修复后端返回路由时，因为父级auth为空字符串或数组导致子级权限失效的问题 &nbsp;-&nbsp; by @hooray [<samp>(c6167)</samp>](https://github.com/fantastic-admin/basic/commit/c61675b)
- 文件路由系统下,用户权限变化后,菜单不更新 &nbsp;-&nbsp; by @hooray [<samp>(79184)</samp>](https://github.com/fantastic-admin/basic/commit/79184f4)
:::

:::tip [专业版](https://github.com/fantastic-admin/pro/releases/tag/v4.7.0)
🚀 Features

- 提供 `$t` 函数,用于路由 `meta.i18n` 能在 VSCode I18n Ally 插件下正确显示 &nbsp;-&nbsp; by @hooray [<samp>(641cd)</samp>](https://github.com/fantastic-admin/pro/commit/641cdc39)
- 工具栏部分按钮增加交互动效 &nbsp;-&nbsp; by @hooray [<samp>(26003)</samp>](https://github.com/fantastic-admin/pro/commit/260030d8)
- 支持 RTL 模式 &nbsp;-&nbsp; by @hooray [<samp>(89879)</samp>](https://github.com/fantastic-admin/pro/commit/8987913b)
- 偏好设置增加默认语言 &nbsp;-&nbsp; by @hooray [<samp>(f8727)</samp>](https://github.com/fantastic-admin/pro/commit/f8727869)
- 路由增加 `meta.menu` 配置，同时 `meta.sidebar` 进入弃用过渡期 &nbsp;-&nbsp; by @hooray [<samp>(a9ab0)</samp>](https://github.com/fantastic-admin/pro/commit/a9ab0901)
- RTL 模式下标签栏禁用拖拽排序 &nbsp;-&nbsp; by @hooray [<samp>(64f58)</samp>](https://github.com/fantastic-admin/pro/commit/64f58765)
- 路由增加 `meta.auths` 配置 &nbsp;-&nbsp; by @hooray [<samp>(54833)</samp>](https://github.com/fantastic-admin/pro/commit/548333fb)
- 路由增加 `meta.alwaysOpened` 配置项，支持始终展开 &nbsp;-&nbsp; by @hooray [<samp>(86a16)</samp>](https://github.com/fantastic-admin/pro/commit/86a165ba)

🐞 Bug Fixes

- 修复 mock 模板请求无响应数据 &nbsp;-&nbsp; by @hooray [<samp>(051d9)</samp>](https://github.com/fantastic-admin/pro/commit/051d92e0)
- 修复 RTL 模式在移动端下展示 bug &nbsp;-&nbsp; by @hooray [<samp>(f5f6a)</samp>](https://github.com/fantastic-admin/pro/commit/f5f6a70e)
- 修复顶部导航鼠标滚动回弹 &nbsp;-&nbsp; by @hooray [<samp>(afcb3)</samp>](https://github.com/fantastic-admin/pro/commit/afcb35a0)
- 修复顶部导航数量过多，导致工具栏被遮挡 &nbsp;-&nbsp; by @hooray [<samp>(a1e3a)</samp>](https://github.com/fantastic-admin/pro/commit/a1e3a135)
- 修复部分图标在 RTL 模式下的显示 &nbsp;-&nbsp; by @hooray [<samp>(54b83)</samp>](https://github.com/fantastic-admin/pro/commit/54b8357d)
- 修复后端返回路由时，因为父级auth为空字符串或数组导致子级权限失效的问题 &nbsp;-&nbsp; by @hooray [<samp>(96a59)</samp>](https://github.com/fantastic-admin/pro/commit/96a597bf)
- 文件路由系统下,用户权限变化后,菜单不更新 &nbsp;-&nbsp; by @hooray [<samp>(4161d)</samp>](https://github.com/fantastic-admin/pro/commit/4161d8ae)
:::

## 4.6.2

:::info [基础版](https://github.com/fantastic-admin/basic/releases/tag/v4.6.2)
无重大变化
:::

:::tip [专业版](https://github.com/fantastic-admin/pro/releases/tag/v4.6.2)
无重大变化
:::

## 4.6.1

:::info [基础版](https://github.com/fantastic-admin/basic/releases/tag/v4.6.1)
无重大变化
:::

:::tip [专业版](https://github.com/fantastic-admin/pro/releases/tag/v4.6.1)
无重大变化
:::

## 4.6.0

:::info [基础版](https://github.com/fantastic-admin/basic/releases/tag/v4.6.0)
无重大变化
:::

:::tip [专业版](https://github.com/fantastic-admin/pro/releases/tag/v4.6.0)
🚀 Features

- 路由增加 `meta.singleMenu` 配置项 &nbsp;-&nbsp; by @hooray [<samp>(2a9cb)</samp>](https://github.com/fantastic-admin/pro/commit/2a9cb248)

🐞 Bug Fixes

- 修复 IconPicker 组件样式错乱 &nbsp;-&nbsp; by @hooray [<samp>(17ed3)</samp>](https://github.com/fantastic-admin/pro/commit/17ed3ba0)
:::

## 4.5.0

:::info [基础版](https://github.com/fantastic-admin/basic/releases/tag/v4.5.0)
🚀 Features

- 引入 unplugin-turbo-console 优化开发体验 &nbsp;-&nbsp; by @hooray [<samp>(36c9a)</samp>](https://github.com/fantastic-admin/basic/commit/36c9a73)
- 增加打包后生成存档文件支持 &nbsp;-&nbsp; by @hooray [<samp>(06d6e)</samp>](https://github.com/fantastic-admin/basic/commit/06d6e18)
- 增加图片支持，整站图标改用 unocss icon 方式使用，方便在内网环境使用 &nbsp;-&nbsp; by @hooray [<samp>(52b25)</samp>](https://github.com/fantastic-admin/basic/commit/52b25d1)
- 增加标签页支持 &nbsp;-&nbsp; by @hooray [<samp>(a55f3)</samp>](https://github.com/fantastic-admin/basic/commit/a55f301)
- 导航菜单收起时，无二级的一级导航增加 tooltip 展示 &nbsp;-&nbsp; by @hooray [<samp>(f9c1c)</samp>](https://github.com/fantastic-admin/basic/commit/f9c1c2d)
- 明暗模式设置为跟随系统时，支持动态切换 &nbsp;-&nbsp; by @hooray [<samp>(a8b41)</samp>](https://github.com/fantastic-admin/basic/commit/a8b41c7)
- Vite-plugin-vue-devtools 替换 vite-plugin-vue-inspector &nbsp;-&nbsp; by @hooray [<samp>(b4e0e)</samp>](https://github.com/fantastic-admin/basic/commit/b4e0e97)

🐞 Bug Fixes

- Mock 数据修复 &nbsp;-&nbsp; by @hooray [<samp>(1dd16)</samp>](https://github.com/fantastic-admin/basic/commit/1dd1677)
- 修复导航模式切换到 single 时有几率报错 &nbsp;-&nbsp; by @hooray [<samp>(0dfdb)</samp>](https://github.com/fantastic-admin/basic/commit/0dfdb0f)
- 修复顶部模式下页面载入进度条被遮挡 &nbsp;-&nbsp; by @hooray [<samp>(57044)</samp>](https://github.com/fantastic-admin/basic/commit/5704453)
- 修复标签栏未开启时调用 useTabbar 内函数报错 &nbsp;-&nbsp; by @hooray [<samp>(b6023)</samp>](https://github.com/fantastic-admin/basic/commit/b602360)
:::

:::tip [专业版](https://github.com/fantastic-admin/pro/releases/tag/v4.5.0)
🚨 Breaking Changes

- 重构用户偏好模块，偏好设置可存放在 localStorage &nbsp;-&nbsp; by @hooray [<samp>(880d2)</samp>](https://github.com/fantastic-admin/pro/commit/880d2a9e)
- 重构页面水印，支持动态更新 &nbsp;-&nbsp; by @hooray [<samp>(ba7b4)</samp>](https://github.com/fantastic-admin/pro/commit/ba7b4564)
- 移除内置 v-waves 指令，使用第三方 v-wave 插件 &nbsp;-&nbsp; by @hooray [<samp>(491fb)</samp>](https://github.com/fantastic-admin/pro/commit/491fb4bb)

🚀 Features

- 引入 unplugin-turbo-console 优化开发体验 &nbsp;-&nbsp; by @hooray [<samp>(b8a8b)</samp>](https://github.com/fantastic-admin/pro/commit/b8a8bef0)
- 增加打包后生成存档文件支持 &nbsp;-&nbsp; by @hooray [<samp>(0eeb3)</samp>](https://github.com/fantastic-admin/pro/commit/0eeb3133)
- 增加图片支持，整站图标改用 unocss icon 方式使用，方便在内网环境使用 &nbsp;-&nbsp; by @hooray [<samp>(8b666)</samp>](https://github.com/fantastic-admin/pro/commit/8b666262)
- 标签页增加默认样式 &nbsp;-&nbsp; by @hooray [<samp>(d8434)</samp>](https://github.com/fantastic-admin/pro/commit/d84344f3)
- 导航菜单收起时，无二级的一级导航增加 tooltip 展示 &nbsp;-&nbsp; by @hooray [<samp>(a22bc)</samp>](https://github.com/fantastic-admin/pro/commit/a22bc6da)
- 明暗模式设置为跟随系统时，支持动态切换 &nbsp;-&nbsp; by @hooray [<samp>(9ff39)</samp>](https://github.com/fantastic-admin/pro/commit/9ff3976f)
- Vite-plugin-vue-devtools 替换 vite-plugin-vue-inspector &nbsp;-&nbsp; by @hooray [<samp>(01462)</samp>](https://github.com/fantastic-admin/pro/commit/014629b2)
- 增加 `v-zoomable` 图片预览指令 &nbsp;-&nbsp; by @hooray [<samp>(45b75)</samp>](https://github.com/fantastic-admin/pro/commit/45b75c92)

🐞 Bug Fixes

- Mock 数据修复 &nbsp;-&nbsp; by @hooray [<samp>(ba9ff)</samp>](https://github.com/fantastic-admin/pro/commit/ba9ffb8e)
- 修复导航模式切换到 single 时有几率报错 &nbsp;-&nbsp; by @hooray [<samp>(2c853)</samp>](https://github.com/fantastic-admin/pro/commit/2c853b21)
- 修复标签栏下拉菜单内标签项文字过长挤压图标的问题 &nbsp;-&nbsp; by @hooray [<samp>(1e73d)</samp>](https://github.com/fantastic-admin/pro/commit/1e73d3fc)
- 调整侧边栏阴影显示逻辑 &nbsp;-&nbsp; by @hooray [<samp>(b2738)</samp>](https://github.com/fantastic-admin/pro/commit/b2738af1)
- 修复标签栏关闭标签页动效失效 &nbsp;-&nbsp; by @hooray [<samp>(344f9)</samp>](https://github.com/fantastic-admin/pro/commit/344f928c)
- 修复标签栏鼠标滚动回弹 &nbsp;-&nbsp; by @hooray [<samp>(046e3)</samp>](https://github.com/fantastic-admin/pro/commit/046e3496)
- 修复标签栏标签页文字太长图标不显示 &nbsp;-&nbsp; by @hooray [<samp>(cf9f1)</samp>](https://github.com/fantastic-admin/pro/commit/cf9f1ac5)
- 修复顶部模式下页面载入进度条被遮挡 &nbsp;-&nbsp; by @hooray [<samp>(6206e)</samp>](https://github.com/fantastic-admin/pro/commit/6206eba1)
- 阻止标签栏关闭按钮双击事件冒泡，修复快速点击时导致标签页最大化 &nbsp;-&nbsp; by @hooray [<samp>(de084)</samp>](https://github.com/fantastic-admin/pro/commit/de084c44)
- 修复标签栏未开启时调用 useTabbar 内函数报错 &nbsp;-&nbsp; by @hooray [<samp>(2fbfd)</samp>](https://github.com/fantastic-admin/pro/commit/2fbfd70a)
:::

## 4.4.0

:::info [基础版](https://github.com/fantastic-admin/basic/releases/tag/v4.4.0)
🚨 Breaking Changes

- 应用配置 `toolbar` 对象内属性调整 &nbsp;-&nbsp; by @hooray [<samp>(75d81)</samp>](https://github.com/fantastic-admin/basic/commit/75d815d)
- Vite-plugin-fake-server 替换 vite-plugin-mock &nbsp;-&nbsp; by @hooray [<samp>(548ea)</samp>](https://github.com/fantastic-admin/basic/commit/548eac5)

🐞 Bug Fixes

- 修复路由 HTML5 模式下点击导航刷新页面的问题 &nbsp;-&nbsp; by @hooray [<samp>(2b8a1)</samp>](https://github.com/fantastic-admin/basic/commit/2b8a198)
- 修复 FixedActionBar 组件阴影样式未生效 &nbsp;-&nbsp; by @hooray [<samp>(d908f)</samp>](https://github.com/fantastic-admin/basic/commit/d908f3c)
- 修复次导航高度变化时，底部阴影不变化 &nbsp;-&nbsp; by @hooray [<samp>(8dee9)</samp>](https://github.com/fantastic-admin/basic/commit/8dee916)
- 修复工具栏显示/隐藏逻辑 &nbsp;-&nbsp; by @hooray [<samp>(d39f5)</samp>](https://github.com/fantastic-admin/basic/commit/d39f5c3)
:::

:::tip [专业版](https://github.com/fantastic-admin/pro/releases/tag/v4.4.0)
🚨 Breaking Changes

- 应用配置 `toolbar` 对象内属性调整 &nbsp;-&nbsp; by @hooray [<samp>(a4014)</samp>](https://github.com/fantastic-admin/pro/commit/a4014ac6)
- Vite-plugin-fake-server 替换 vite-plugin-mock &nbsp;-&nbsp; by @hooray [<samp>(35288)</samp>](https://github.com/fantastic-admin/pro/commit/3528894d)

🚀 Features

- 应用配置新增 `menu.subMenuAutoCollapse` ，支持次导航收起时，鼠标悬停临时展开 &nbsp;-&nbsp; by @hooray [<samp>(132b6)</samp>](https://github.com/fantastic-admin/pro/commit/132b6ee4)
- 应用配置新增 `toolbar.layout` 属性，支持工具栏自定义布局 &nbsp;-&nbsp; by @hooray [<samp>(df50e)</samp>](https://github.com/fantastic-admin/pro/commit/df50eb66)

🐞 Bug Fixes

- 修复路由 HTML5 模式下点击导航刷新页面的问题 &nbsp;-&nbsp; by @hooray [<samp>(694e4)</samp>](https://github.com/fantastic-admin/pro/commit/694e4b53)
- 标签栏风格为方块时颜色缺失 &nbsp;-&nbsp; by @hooray [<samp>(cc779)</samp>](https://github.com/fantastic-admin/pro/commit/cc779cab)
- 修复 FixedActionBar 组件阴影样式未生效 &nbsp;-&nbsp; by @hooray [<samp>(0f500)</samp>](https://github.com/fantastic-admin/pro/commit/0f500385)
- 修复次导航高度变化时，底部阴影不变化 &nbsp;-&nbsp; by @hooray [<samp>(fecd4)</samp>](https://github.com/fantastic-admin/pro/commit/fecd497a)
- 修复标签栏相关提示信息在快速操作下反复出现的问题 &nbsp;-&nbsp; by @hooray [<samp>(f1ca3)</samp>](https://github.com/fantastic-admin/pro/commit/f1ca3a31)
- 修复工具栏显示/隐藏逻辑 &nbsp;-&nbsp; by @hooray [<samp>(e2f8d)</samp>](https://github.com/fantastic-admin/pro/commit/e2f8d528)
:::

## 4.3.0

:::info [基础版](https://github.com/fantastic-admin/basic/releases/tag/v4.3.0)
🚨 Breaking Changes

- 应用配置 app.enableAppSetting 迁移到环境变量文件中 &nbsp;-&nbsp; by @hooray [<samp>(8311a)</samp>](https://github.com/fantastic-admin/basic/commit/8311afa)
:::

:::tip [专业版](https://github.com/fantastic-admin/pro/releases/tag/v4.3.0)
🚨 Breaking Changes

- 应用配置中 app.defaultLang 默认为空时，将不会在运行时被自动赋值 &nbsp;-&nbsp; by @hooray [<samp>(cfafb)</samp>](https://github.com/fantastic-admin/pro/commit/cfafb44b)
- 应用配置 app.enableAppSetting 迁移到环境变量文件中 &nbsp;-&nbsp; by @hooray [<samp>(9efbc)</samp>](https://github.com/fantastic-admin/pro/commit/9efbc8f6)

🐞 Bug Fixes

- 全局搜索补充遗漏未处理的 i18n 字段 &nbsp;-&nbsp; by @hooray [<samp>(c3c29)</samp>](https://github.com/fantastic-admin/pro/commit/c3c29ca1)
:::

## 4.2.0

:::info [基础版](https://github.com/fantastic-admin/basic/releases/tag/v4.2.0)
🚀 Features

- 应用配置增加 `home.fullPath` &nbsp;-&nbsp; by @hooray [<samp>(28b8d)</samp>](https://github.com/fantastic-admin/basic/commit/28b8df7)
:::

:::tip [专业版](https://github.com/fantastic-admin/pro/releases/tag/v4.2.0)
🚀 Features

- 导航路由增加 newWindow 配置，支持在新窗口中打开 &nbsp;-&nbsp; by @hooray [<samp>(767b7)</samp>](https://github.com/fantastic-admin/pro/commit/767b7897)
- 标签栏新增新窗口打开功能 &nbsp;-&nbsp; by @hooray [<samp>(24757)</samp>](https://github.com/fantastic-admin/pro/commit/24757171)
- 水印支持手动换行 &nbsp;-&nbsp; by @hooray [<samp>(0deef)</samp>](https://github.com/fantastic-admin/pro/commit/0deeff69)
- 应用配置增加 `home.fullPath` &nbsp;-&nbsp; by @hooray [<samp>(61847)</samp>](https://github.com/fantastic-admin/pro/commit/61847e25)

🐞 Bug Fixes

- 导航精简模式下，主导航激活状态有时会失效 &nbsp;-&nbsp; by @hooray [<samp>(5be6a)</samp>](https://github.com/fantastic-admin/pro/commit/5be6aeb8)
:::

## 4.1.0

:::info [基础版](https://github.com/fantastic-admin/basic/releases/tag/v4.1.0)
🐞 Bug Fixes

- 修复次导航第一个导航无子级路由时不显示 &nbsp;-&nbsp; by @hooray [<samp>(7ba47)</samp>](https://github.com/fantastic-admin/basic/commit/7ba4787)
- 修复次导航的显隐逻辑 &nbsp;-&nbsp; by @hooray [<samp>(2e982)</samp>](https://github.com/fantastic-admin/basic/commit/2e98278)
:::

:::tip [专业版](https://github.com/fantastic-admin/pro/releases/tag/v4.1.0)
🚨 Breaking Changes

- 标准模块中 SearchBar 组件调整为 grid 布局 &nbsp;-&nbsp; by @hooray [<samp>(269a6)</samp>](https://github.com/fantastic-admin/pro/commit/269a64a0)

🚀 Features

- 全局搜索支持拼音 &nbsp;-&nbsp; by @hooray [<samp>(8d44c)</samp>](https://github.com/fantastic-admin/pro/commit/8d44c529)
:::

## 4.0.3

:::info [基础版](https://github.com/fantastic-admin/basic/releases/tag/v4.0.3)
🐞 Bug Fixes

- 修复文件系统路由下，导航栏无法展开多级和一级导航无法点击 &nbsp;-&nbsp; by @hooray [<samp>(4df19)</samp>](https://github.com/fantastic-admin/basic/commit/4df198c)
- 搜索界面弹出时动画失效 &nbsp;-&nbsp; by @hooray [<samp>(8aba0)</samp>](https://github.com/fantastic-admin/basic/commit/8aba058)
:::

:::tip [专业版](https://github.com/fantastic-admin/pro/releases/tag/v4.0.3)
🐞 Bug Fixes

- 修复收藏夹默认存储位置错误 &nbsp;-&nbsp; by @hooray [<samp>(a9e52)</samp>](https://github.com/fantastic-admin/pro/commit/a9e521e7)
- 修复文件系统路由下，导航栏无法展开多级和一级导航无法点击 &nbsp;-&nbsp; by @hooray [<samp>(cd3b4)</samp>](https://github.com/fantastic-admin/pro/commit/cd3b4b75)
- 搜索界面弹出时动画失效 &nbsp;-&nbsp; by @hooray [<samp>(85a7a)</samp>](https://github.com/fantastic-admin/pro/commit/85a7ac50)
:::

## 4.0.2

:::info [基础版](https://github.com/fantastic-admin/basic/releases/tag/v4.0.2)
无重大变化
:::

:::tip [专业版](https://github.com/fantastic-admin/pro/releases/tag/v4.0.2)
🐞 Bug Fixes

- 修复 ColorfulCard 组件图标溢出 &nbsp;-&nbsp; by @hooray [<samp>(865bb)</samp>](https://github.com/fantastic-admin/pro/commit/865bbead)
:::

## 4.0.1

:::info [基础版](https://github.com/fantastic-admin/basic/releases/tag/v4.0.1)
🐞 Bug Fixes

- 修复火狐下样式兼容性问题 &nbsp;-&nbsp; by @hooray [<samp>(95748)</samp>](https://github.com/fantastic-admin/basic/commit/95748fe)
- 修复 HTabList 组件文字不居中的问题 &nbsp;-&nbsp; by @hooray [<samp>(ff2dd)</samp>](https://github.com/fantastic-admin/basic/commit/ff2dd31)
- 修复导航跳转时如果被中断，高亮位置不正确 &nbsp;-&nbsp; by @hooray [<samp>(197d3)</samp>](https://github.com/fantastic-admin/basic/commit/197d302)
- 修复 plop 无法使用 &nbsp;-&nbsp; by @hooray [<samp>(2e4af)</samp>](https://github.com/fantastic-admin/basic/commit/2e4af7c)
:::

:::tip [专业版](https://github.com/fantastic-admin/pro/releases/tag/v4.0.1)
🐞 Bug Fixes

- 修复火狐下样式兼容性问题 &nbsp;-&nbsp; by @hooray [<samp>(31b6d)</samp>](https://github.com/fantastic-admin/pro/commit/31b6d6e1)
- 修复 HTabList 组件文字不居中的问题 &nbsp;-&nbsp; by @hooray [<samp>(e7acb)</samp>](https://github.com/fantastic-admin/pro/commit/e7acb3ee)
- 修复导航跳转时如果被中断，高亮位置不正确 &nbsp;-&nbsp; by @hooray [<samp>(13073)</samp>](https://github.com/fantastic-admin/pro/commit/13073512)
- 修复 plop 无法使用 &nbsp;-&nbsp; by @hooray [<samp>(e9987)</samp>](https://github.com/fantastic-admin/pro/commit/e9987a97)
:::

## 4.0.0

- 拥抱原子化 CSS ，启用 UnoCSS ，并对框架部分组件样式进行了重构

  > 如果你正在将老版本的业务代码向新版本迁移，推荐安装 [UnoCSS](https://marketplace.visualstudio.com/items?itemName=antfu.unocss) 这个 VSCode 插件，它能高亮显示 UnoCSS 的代码。如果你的业务页面代码中定义的 class 和 UnoCSS 的 class 重名，也可以通过这个插件快速识别到并修改。

- 与 Element Plus 组件库解耦，方便替换成其他第三方 UI 组件库，详细可阅读：
  - 《[替换为 Ant Design Vue](/guide/replace-to-antd)》
  - 《[替换为 Arco Design Vue](/guide/replace-to-arco)》
  - 《[替换为 Naive UI](/guide/replace-to-naive)》
  - 《[替换为 TDesign](/guide/replace-to-tdesign)》
  - 《[替换为 Vexip UI](/guide/replace-to-vexip)》
  - 《[替换为 iDux](/guide/replace-to-idux)》

- ESLint 配置文件格式调整，详细可阅读《[代码规范 - ESLint 配置](/guide/coding-standard#eslint-配置)》

  > ESLint 提供了全新的配置方式，所有配置项将都在一个 `eslint.config.js` 文件中实现。

- 基础版现在可以使用 Iconify 完整图标库，详细可阅读《[图标 - Iconify 图标](/guide/svg-icon#iconify-图标)》

- 全新的主题配色方案，详细可阅读《[主题 - 框架主题](/guide/theme#框架主题)》

- 移除 Element Plus 自定义主题配置

  > 如果你依旧需要自定义 Element Plus 的主题，可以阅读 Element Plus 官方文档《[自定义主题](https://element-plus.gitee.io/zh-CN/guide/theming.html)》，或者参考下面提供的最佳实践。
  >
  > 在 `/src/assets/styles/` 目录下分别新建 `element-plus.scss` 和 `element-plus.dark.scss` 并写入下面的代码：
  >
  > ```scss
  > // element-plus.scss
  > @forward "element-plus/theme-chalk/src/common/var.scss" with (
  >   $colors: (
  >     "primary": (
  >       "base": green
  >     )
  >   )
  > );
  > @use "element-plus/theme-chalk/src/index.scss" as *;
  > @use "./element-plus.dark.scss" as *;
  > ```
  >
  > ```scss
  > // element-plus.dark.scss
  > @forward "element-plus/theme-chalk/src/dark/var.scss" with (
  >   $bg-color: (
  >     "page": #0a0a0a,
  >     "": #141414,
  >     "overlay": #1d1e1f,
  >   )
  > );
  > @use "element-plus/theme-chalk/src/dark/css-vars.scss" as *;
  > ```
  >
  > 修改 `/src/ui-provider/index.ts`
  > ```ts
  > ...
  > import ElementPlus from 'element-plus'
  > import 'element-plus/dist/index.css' // [!code --]
  > import 'element-plus/theme-chalk/dark/css-vars.css' // [!code --]
  > import '@/assets/styles/element-plus.scss' // [!code ++]
  > ...
  > ```

- 移除应用配置中 Element Plus 默认尺寸的配置项

  > 如果你依旧需要全局配置 Element Plus 的默认尺寸，可以参考《[Config Provider 全局配置](http://element-plus.org/zh-CN/component/config-provider.html)》并在 `/src/App.vue` 中进行修改。

- 移除精灵图支持

  > 原有 `/src/assets/sprites/` 目录中的图片，现在可以移动到 `/src/assets/images/` 目录中，并修改代码中的使用方式。

- 应用配置中导航栏填充风格的配置项名称变更 <Badge type="pro" text="专业版" />

  ```ts
  const globalSettings: Settings.all = {
    menu: {
      /** // [!code --]
      * 留空默认 // [!code --]
      * radius 圆角 // [!code --]
      */ // [!code --]
      menuFillStyle: '', // [!code --]
      // 导航栏是否圆角 // [!code ++]
      isRounded: false, // [!code ++]
    },
  }
  ```

## 3.2.4

:::info [基础版](https://github.com/fantastic-admin/basic/releases/tag/v3.2.4)
🐞 Bug Fixes

- 修复搜索结果列表图标展示过大 &nbsp;-&nbsp; by @hooray [<samp>(33294)</samp>](https://github.com/fantastic-admin/basic/commit/33294c5)
:::

:::tip [专业版](https://github.com/fantastic-admin/pro/releases/tag/v3.2.4)
🐞 Bug Fixes

- 修复常驻标签页不显示图标 &nbsp;-&nbsp; by @hooray [<samp>(86013)</samp>](https://github.com/fantastic-admin/pro/commit/86013efa)
:::

## 3.2.3

:::info [基础版](https://github.com/fantastic-admin/basic/releases/tag/v3.2.3)
🐞 Bug Fixes

- 修复 403/404 页面图标尺寸 &nbsp;-&nbsp; by @hooray [<samp>(39ade)</samp>](https://github.com/fantastic-admin/basic/commit/39ade14)
:::

:::tip [专业版](https://github.com/fantastic-admin/pro/releases/tag/v3.2.3)
🐞 Bug Fixes

- 标签页开启缓存时，主页标题显示异常 &nbsp;-&nbsp; by @hooray [<samp>(5dad2)</samp>](https://github.com/fantastic-admin/pro/commit/5dad20cc)
- 修复后端返回路由 component 字段为空导致link/iframe导航失效 &nbsp;-&nbsp; by @hooray [<samp>(f25eb)</samp>](https://github.com/fantastic-admin/pro/commit/f25eb2f7)
- 修复 403/404 页面图标尺寸 &nbsp;-&nbsp; by @hooray [<samp>(ce571)</samp>](https://github.com/fantastic-admin/pro/commit/ce571213)
:::

## 3.2.2

:::info [基础版](https://github.com/fantastic-admin/basic/releases/tag/v3.2.2)
无重大变化
:::

:::tip [专业版](https://github.com/fantastic-admin/pro/releases/tag/v3.2.2)
🐞 Bug Fixes

- 修复明暗切换动画浏览器兼容性 &nbsp;-&nbsp; by @hooray [<samp>(da483)</samp>](https://github.com/fantastic-admin/pro/commit/da4839d8)
:::

## 3.2.1

:::info [基础版](https://github.com/fantastic-admin/basic/releases/tag/v3.2.1)
🐞 Bug Fixes

- Plop 模板读取增加校验 &nbsp;-&nbsp; by @hooray [<samp>(86d0f)</samp>](https://github.com/fantastic-admin/basic/commit/86d0fc6)
:::

:::tip [专业版](https://github.com/fantastic-admin/pro/releases/tag/v3.2.1)
🐞 Bug Fixes

- Plop 模板读取增加校验 &nbsp;-&nbsp; by @hooray [<samp>(07b7d)</samp>](https://github.com/fantastic-admin/pro/commit/07b7d637)
:::

## 3.2.0

:::info [基础版](https://github.com/fantastic-admin/basic/releases/tag/v3.2.0)
🚨 Breaking Changes

- Copyright 组件移动到 layouts 目录下 &nbsp;-&nbsp; by @hooray [<samp>(0f347)</samp>](https://github.com/fantastic-admin/basic/commit/0f347b6)
- 移除 el-icon 使用 &nbsp;-&nbsp; by @hooray [<samp>(1a852)</samp>](https://github.com/fantastic-admin/basic/commit/1a8529f)
:::

:::tip [专业版](https://github.com/fantastic-admin/pro/releases/tag/v3.2.0)
🚨 Breaking Changes

- Copyright 组件移动到 layouts 目录下 &nbsp;-&nbsp; by @hooray [<samp>(2e9bd)</samp>](https://github.com/fantastic-admin/pro/commit/2e9bdffc)
- 移除 el-icon 使用 &nbsp;-&nbsp; by @hooray [<samp>(781a7)</samp>](https://github.com/fantastic-admin/pro/commit/781a76f2)
:::

## 3.1.1

:::info [基础版](https://github.com/fantastic-admin/basic/releases/tag/v3.1.1)
无重大变化
:::

:::tip [专业版](https://github.com/fantastic-admin/pro/releases/tag/v3.1.1)
🐞 Bug Fixes

- 修复偏好设置无法配置 `menu.subMenuCollapse` &nbsp;-&nbsp; by @hooray [<samp>(6da44)</samp>](https://github.com/fantastic-admin/pro/commit/6da4478a)
:::

## 3.1.0

:::info [基础版](https://github.com/fantastic-admin/basic/releases/tag/v3.1.0)
🚨 Breaking Changes

- 使用 `defineOptions` 设置组件 name &nbsp;-&nbsp; by @hooray [<samp>(bcbe5)</samp>](https://github.com/hooray/fantastic-admin/commit/bcbe576)

🚀 Features

- 引入vite legacy插件 &nbsp;-&nbsp; by @hooray [<samp>(41750)</samp>](https://github.com/hooray/fantastic-admin/commit/4175084)

🐞 Bug Fixes

- 移除模板代码中的 `$route` &nbsp;-&nbsp; by @hooray [<samp>(84e06)</samp>](https://github.com/hooray/fantastic-admin/commit/84e0630)
:::

:::tip [专业版](https://github.com/fantastic-admin/pro/releases/tag/v3.1.0)
🚨 Breaking Changes

- 使用 `defineOptions` 设置组件 name &nbsp;-&nbsp; by @hooray [<samp>(c233a)</samp>](https://github.com/fantastic-admin/pro/commit/c233aabe)
- 重构动态设置标题 &nbsp;-&nbsp; by @hooray [<samp>(f70b7)</samp>](https://github.com/fantastic-admin/pro/commit/f70b750a)

🚀 Features

- 增加明暗切换过渡动效 &nbsp;-&nbsp; by @hooray [<samp>(bc0da)</samp>](https://github.com/fantastic-admin/pro/commit/bc0da167)
- 新增 StorageBox 组件 &nbsp;-&nbsp; by @hooray [<samp>(c5e55)</samp>](https://github.com/fantastic-admin/pro/commit/c5e558a0)

🐞 Bug Fixes

- 移除模板代码中的 `$route` &nbsp;-&nbsp; by @hooray [<samp>(f8274)</samp>](https://github.com/fantastic-admin/pro/commit/f82748b8)
- 修复固定路由`meta.i18n`不生效的问题 &nbsp;-&nbsp; by @hooray [<samp>(f3267)</samp>](https://github.com/fantastic-admin/pro/commit/f3267847)
- 修复 `useMainPage()` 几处使用bug &nbsp;-&nbsp; by @hooray [<samp>(e97a9)</samp>](https://github.com/fantastic-admin/pro/commit/e97a9548)
:::

## 3.0.0

:::info [基础版](https://github.com/fantastic-admin/basic/releases/tag/v3.0.0)
🚨 Breaking Changes

- 重构 `SearchBar` 组件 &nbsp;-&nbsp; by @hooray [<samp>(247b5)</samp>](https://github.com/hooray/fantastic-admin/commit/247b5aa)
- 重构接口请求，统一管理接口请求模块 &nbsp;-&nbsp; by @hooray [<samp>(2109c)</samp>](https://github.com/hooray/fantastic-admin/commit/2109c19)
- 移除 `BatchActionBar` 组件 &nbsp;-&nbsp; by @hooray [<samp>(11e68)</samp>](https://github.com/hooray/fantastic-admin/commit/11e68df)

🐞 Bug Fixes

- 修复主页无法引入请求 api 并使用的问题 &nbsp;-&nbsp; by @hooray [<samp>(d6d7d)</samp>](https://github.com/hooray/fantastic-admin/commit/d6d7dad)
:::

:::tip [专业版](https://github.com/fantastic-admin/pro/releases/tag/v3.0.0)
🚨 Breaking Changes

- 重构 `SearchBar` 组件 &nbsp;-&nbsp; by @hooray [<samp>(59920)</samp>](https://github.com/fantastic-admin/pro/commit/59920e47)
- 调整标准模块内 `SearchBar` 组件代码逻辑 &nbsp;-&nbsp; by @hooray [<samp>(de316)</samp>](https://github.com/fantastic-admin/pro/commit/de31619b)
- 重构接口请求，统一管理接口请求模块 &nbsp;-&nbsp; by @hooray [<samp>(0dc9e)</samp>](https://github.com/fantastic-admin/pro/commit/0dc9e11f)
- 移除 `BatchActionBar` 组件 &nbsp;-&nbsp; by @hooray [<samp>(a1cda)</samp>](https://github.com/fantastic-admin/pro/commit/a1cdaa70)

🚀 Features

- 标准模块增加接口请求 api 文件生成 &nbsp;-&nbsp; by @hooray [<samp>(d2026)</samp>](https://github.com/fantastic-admin/pro/commit/d202644d)
- `useTabbar` 增加 `go` 函数 &nbsp;-&nbsp; by @hooray [<samp>(d9ed3)</samp>](https://github.com/fantastic-admin/pro/commit/d9ed32a6)

🐞 Bug Fixes

- 修复主页无法引入请求 api 并使用的问题 &nbsp;-&nbsp; by @hooray [<samp>(e2c55)</samp>](https://github.com/fantastic-admin/pro/commit/e2c55d80)
:::

## 2.11.0

:::info [基础版](https://github.com/fantastic-admin/basic/releases/tag/v2.11.0)
🚨 Breaking Changes

- 调整应用配置的配置项，并将应用配置按钮从工具栏删除 &nbsp;-&nbsp; by @hooray [<samp>(1be22)</samp>](https://github.com/hooray/fantastic-admin/commit/1be22ab)

🚀 Features

- 引入 stylelint-stylistic 插件 &nbsp;-&nbsp; by @hooray [<samp>(ff9d0)</samp>](https://github.com/hooray/fantastic-admin/commit/ff9d037)
:::

:::tip [专业版](https://github.com/fantastic-admin/pro/releases/tag/v2.11.0)
🚨 Breaking Changes

- 调整应用配置的配置项，并将应用配置按钮从工具栏删除 &nbsp;-&nbsp; by @hooray [<samp>(69823)</samp>](https://github.com/fantastic-admin/pro/commit/698233ae)

🚀 Features

- 主题配置增加次导航logo背景色和文字颜色 &nbsp;-&nbsp; by @hooray [<samp>(0bd02)</samp>](https://github.com/fantastic-admin/pro/commit/0bd028e1)
- 引入 stylelint-stylistic 插件 &nbsp;-&nbsp; by @hooray [<samp>(7e604)</samp>](https://github.com/fantastic-admin/pro/commit/7e604e53)
- 增加收藏夹功能 &nbsp;-&nbsp; by @hooray [<samp>(a237f)</samp>](https://github.com/fantastic-admin/pro/commit/a237fa2d)
- 增加标签栏固定标签页存储位置配置项 &nbsp;-&nbsp; by @hooray [<samp>(9b0c0)</samp>](https://github.com/fantastic-admin/pro/commit/9b0c0db1)

🐞 Bug Fixes

- 修复标签页拖动排序后数据未更新 &nbsp;-&nbsp; by @hooray [<samp>(714d7)</samp>](https://github.com/fantastic-admin/pro/commit/714d7c96)
- 修复收藏夹从服务端复原报错 &nbsp;-&nbsp; by @hooray [<samp>(db82c)</samp>](https://github.com/fantastic-admin/pro/commit/db82ce11)
:::

## 2.10.0

:::info [基础版](https://github.com/fantastic-admin/basic/releases/tag/v2.10.0)
无重大变化
:::

:::tip [专业版](https://github.com/fantastic-admin/pro/releases/tag/v2.10.0)
🚀 Features

- 增加页面切换动画开关和配置 &nbsp;-&nbsp; by @hooray [<samp>(6c856)</samp>](https://github.com/fantastic-admin/pro/commit/6c8563c)
- 增加用户偏好设置 &nbsp;-&nbsp; by @hooray [<samp>(ab118)</samp>](https://github.com/fantastic-admin/pro/commit/ab1185f)
- 标签页记忆功能增加配置项开关 &nbsp;-&nbsp; by @hooray [<samp>(53427)</samp>](https://github.com/fantastic-admin/pro/commit/534275b)

🐞 Bug Fixes

- 修复在开启标签页记忆功能时，常驻标签页会被重复记录的bug &nbsp;-&nbsp; by @hooray [<samp>(d0a08)</samp>](https://github.com/fantastic-admin/pro/commit/d0a0883)
:::

## 2.9.0

:::info [基础版](https://github.com/fantastic-admin/basic/releases/tag/v2.9.0)
🚀 Features

- 用户权限变更后，自动更新导航菜单和页面权限，无需刷新页面或者重新登录 &nbsp;-&nbsp; by @hooray [<samp>(df9fd)</samp>](https://github.com/hooray/fantastic-admin/commit/df9fd2a)

🐞 Bug Fixes

- 修复 axios baseURL 配置，解决构建后 baseURL 不生效的问题 &nbsp;-&nbsp; by @hooray [<samp>(4ba5e)</samp>](https://github.com/hooray/fantastic-admin/commit/4ba5ea2)
:::

:::tip [专业版](https://github.com/fantastic-admin/pro/releases/tag/v2.9.0)
🚀 Features

- 用户权限变更后，自动更新导航菜单和页面权限，无需刷新页面或者重新登录 &nbsp;-&nbsp; by @hooray [<samp>(50d45)</samp>](https://github.com/fantastic-admin/pro/commit/50d450f)
- 标签栏增加记忆功能，刷新页面不丢失标签页 &nbsp;-&nbsp; by @hooray [<samp>(88cff)</samp>](https://github.com/fantastic-admin/pro/commit/88cff88)

🐞 Bug Fixes

- 修复 axios baseURL 配置，解决构建后 baseURL 不生效的问题 &nbsp;-&nbsp; by @hooray [<samp>(628f3)</samp>](https://github.com/fantastic-admin/pro/commit/628f312)
- 修复登出时页面报错 &nbsp;-&nbsp; by @hooray [<samp>(042bc)</samp>](https://github.com/fantastic-admin/pro/commit/042bc94)
- 增加 dropdown 组件外边框的临时解决方案 &nbsp;-&nbsp; by @hooray [<samp>(88de1)</samp>](https://github.com/fantastic-admin/pro/commit/88de127)
:::

## 2.8.0

:::info [基础版](https://github.com/fantastic-admin/basic/releases/tag/v2.8.0)
🚨 Breaking Changes

- 移除 vite-plugin-html 插件 &nbsp;-&nbsp; by @hooray [<samp>(b3a59)</samp>](https://github.com/hooray/fantastic-admin/commit/b3a590d)

🚀 Features

- 增加403无权限页面 &nbsp;-&nbsp; by @hooray [<samp>(2c1df)</samp>](https://github.com/hooray/fantastic-admin/commit/2c1dfe3)
- 自动生成页面模板增加基于文件系统路由的配置项 &nbsp;-&nbsp; by @hooray [<samp>(1e2b2)</samp>](https://github.com/hooray/fantastic-admin/commit/1e2b21f)

🐞 Bug Fixes

- 修复路由`meta.auth`设置为`''`/`[]`时，权限判断为无权限的问题 &nbsp;-&nbsp; by @hooray [<samp>(6a0b6)</samp>](https://github.com/hooray/fantastic-admin/commit/6a0b659)
- 修复登录页标题未正常显示 &nbsp;-&nbsp; by @hooray [<samp>(e889f)</samp>](https://github.com/hooray/fantastic-admin/commit/e889f38)
:::

:::tip [专业版](https://github.com/fantastic-admin/pro/releases/tag/v2.8.0)
🚨 Breaking Changes

- 移除 vite-plugin-html 插件 &nbsp;-&nbsp; by @hooray [<samp>(f636c)</samp>](https://github.com/fantastic-admin/pro/commit/f636c50)

🚀 Features

- 增加403无权限页面 &nbsp;-&nbsp; by @hooray [<samp>(ba868)</samp>](https://github.com/fantastic-admin/pro/commit/ba86822)
- 自动生成页面模板增加基于文件系统路由的配置项 &nbsp;-&nbsp; by @hooray [<samp>(3f2ae)</samp>](https://github.com/fantastic-admin/pro/commit/3f2ae0b)

🐞 Bug Fixes

- 修复路由`meta.auth`设置为`''`/`[]`时，权限判断为无权限的问题 &nbsp;-&nbsp; by @hooray [<samp>(80cef)</samp>](https://github.com/fantastic-admin/pro/commit/80cef4d)
- 修复登录页标题未正常显示 &nbsp;-&nbsp; by @hooray [<samp>(a2939)</samp>](https://github.com/fantastic-admin/pro/commit/a29398d)
:::

## 2.7.0

:::info [基础版](https://github.com/fantastic-admin/basic/releases/tag/v2.7.0)
无重大变化
:::

:::tip [专业版](https://github.com/fantastic-admin/pro/releases/tag/v2.7.0)
🚀 Features

- 增加 timeago 指令和组合式函数 &nbsp;-&nbsp; by @hooray [<samp>(b1236)</samp>](https://github.com/fantastic-admin/pro/commit/b12364e)
:::

## v2.6.2

:::info [基础版](https://github.com/fantastic-admin/basic/releases/tag/v2.6.2)
🐞 Bug Fixes

- 修复面包屑导航显示bug &nbsp;-&nbsp; by @hooray [<samp>(25569)</samp>](https://github.com/hooray/fantastic-admin/commit/25569b1)
:::

:::tip [专业版](https://github.com/fantastic-admin/pro/releases/tag/v2.6.2)
🚀 Features

- IconPicker 组件增加 `size` 属性 &nbsp;-&nbsp; by @hooray [<samp>(9e46f)</samp>](https://github.com/fantastic-admin/pro/commit/9e46f2d)

🐞 Bug Fixes

- 修复搜索未开启时，标签栏快捷搜索入口依旧显示的问题 &nbsp;-&nbsp; by @hooray [<samp>(ea94a)</samp>](https://github.com/fantastic-admin/pro/commit/ea94a29)
- 修复 IconPicker 组件设置图标集外的值报错的问题 &nbsp;-&nbsp; by @hooray [<samp>(39ed8)</samp>](https://github.com/fantastic-admin/pro/commit/39ed8a1)
- 调整 IconPicker 组件预览图标不对齐 &nbsp;-&nbsp; by @hooray [<samp>(23314)</samp>](https://github.com/fantastic-admin/pro/commit/23314a6)
- 修复面包屑导航显示bug &nbsp;-&nbsp; by @hooray [<samp>(5f88d)</samp>](https://github.com/fantastic-admin/pro/commit/5f88d50)
:::

## v2.6.1

:::info [基础版](https://github.com/fantastic-admin/basic/releases/tag/v2.6.1)
无重大变化
:::

:::tip [专业版](https://github.com/fantastic-admin/pro/releases/tag/v2.6.1)
🚨 Breaking Changes

- 移除 SignCanvas 组件 &nbsp;-&nbsp; by @hooray [<samp>(db862)</samp>](https://github.com/fantastic-admin/pro/commit/db862da)

🐞 Bug Fixes

- 解决低版本浏览器不支持 `at()` API &nbsp;-&nbsp; by @hooray [<samp>(1c856)</samp>](https://github.com/fantastic-admin/pro/commit/1c8563d)
- 修复标准模块模板返回按钮逻辑判断错误 &nbsp;-&nbsp; by @hooray [<samp>(6bab6)</samp>](https://github.com/fantastic-admin/pro/commit/6bab647)
- 修复多个 iframe 路由相互跳转无法缓存的问题 &nbsp;-&nbsp; by @hooray [<samp>(82e2c)</samp>](https://github.com/fantastic-admin/pro/commit/82e2c2a)
:::

## v2.6.0

:::info [基础版](https://github.com/fantastic-admin/basic/releases/tag/v2.6.0)
🚨 Breaking Changes

- Pinia store 改为 setup 写法 &nbsp;-&nbsp; by @hooray [<samp>(800e7)</samp>](https://github.com/hooray/fantastic-admin/commit/800e729)

🚀 Features

- 引入 vite-plugin-vue-inspector 插件 &nbsp;-&nbsp; by @hooray [<samp>(b7b94)</samp>](https://github.com/hooray/fantastic-admin/commit/b7b949c)

🐞 Bug Fixes

- 修复应用配置中复制配置按钮，复制内容过多的问题 &nbsp;-&nbsp; by @hooray [<samp>(7ee5b)</samp>](https://github.com/hooray/fantastic-admin/commit/7ee5bcb)
- 修复预览图片无法完整覆盖 el-table 固定列 &nbsp;-&nbsp; by @hooray [<samp>(2e461)</samp>](https://github.com/hooray/fantastic-admin/commit/2e4610a)
- 修复次导航收起时图标不居中 &nbsp;-&nbsp; by @hooray [<samp>(4c351)</samp>](https://github.com/hooray/fantastic-admin/commit/4c3512a)
:::

:::tip [专业版](https://github.com/fantastic-admin/pro/releases/tag/v2.6.0)
🚨 Breaking Changes

- Pinia store 改为 setup 写法 &nbsp;-&nbsp; by @hooray [<samp>(57496)</samp>](https://github.com/fantastic-admin/pro/commit/574968b)

🚀 Features

- 引入 vite-plugin-vue-inspector 插件 &nbsp;-&nbsp; by @hooray [<samp>(09821)</samp>](https://github.com/fantastic-admin/pro/commit/098210e)
- Layout-container 组件增加隐藏切换按钮属性 &nbsp;-&nbsp; by @hooray [<samp>(7963a)</samp>](https://github.com/fantastic-admin/pro/commit/7963a85)
- 标准模块增加表格高度自适应配置 &nbsp;-&nbsp; by @hooray [<samp>(79503)</samp>](https://github.com/fantastic-admin/pro/commit/79503da)

🐞 Bug Fixes

- 修复应用配置中复制配置按钮，复制内容过多的问题 &nbsp;-&nbsp; by @hooray [<samp>(1baa1)</samp>](https://github.com/fantastic-admin/pro/commit/1baa1ba)
- 修复预览图片无法完整覆盖 el-table 固定列 &nbsp;-&nbsp; by @hooray [<samp>(03918)</samp>](https://github.com/fantastic-admin/pro/commit/03918e7)
- 修复次导航收起时图标不居中 &nbsp;-&nbsp; by @hooray [<samp>(6b640)</samp>](https://github.com/fantastic-admin/pro/commit/6b6406c)
:::

## v2.5.0

:::info [基础版](https://github.com/fantastic-admin/basic/releases/tag/v2.5.0)
🚨 Breaking Changes

- 顶栏增加粘性模式 &nbsp;-&nbsp; by @hooray [<samp>(7882c)</samp>](https://github.com/hooray/fantastic-admin/commit/7882cd8)
- 将类型定义 d.ts 文件统一存放到 /src/types/ 目录下 &nbsp;-&nbsp; by @hooray [<samp>(6f885)</samp>](https://github.com/hooray/fantastic-admin/commit/6f88513)

🐞 Bug Fixes

- 修复导航栏a标签href异常 &nbsp;-&nbsp; by @hooray [<samp>(b9e48)</samp>](https://github.com/hooray/fantastic-admin/commit/b9e4884)
:::

:::tip [专业版](https://github.com/fantastic-admin/pro/releases/tag/v2.5.0)
🚨 Breaking Changes

- 顶栏增加粘性模式 &nbsp;-&nbsp; by @hooray [<samp>(cce12)</samp>](https://github.com/fantastic-admin/pro/commit/cce12f6)
- 将类型定义 d.ts 文件统一存放到 /src/types/ 目录下 &nbsp;-&nbsp; by @hooray [<samp>(db5d2)</samp>](https://github.com/fantastic-admin/pro/commit/db5d2a1)

🚀 Features

- 增加标签页搜索 &nbsp;-&nbsp; by @hooray [<samp>(a868d)</samp>](https://github.com/fantastic-admin/pro/commit/a868ddb)

🐞 Bug Fixes

- 修复导航栏a标签href异常 &nbsp;-&nbsp; by @hooray [<samp>(66a24)</samp>](https://github.com/fantastic-admin/pro/commit/66a248f)
:::

## v2.4.0

:::info [基础版](https://github.com/fantastic-admin/basic/releases/tag/v2.4.0)
🚨 Breaking Changes

- 增加外链路由跳转提示页面，重构外链路由的配置方式 &nbsp;-&nbsp; by @hooray [<samp>(0c430)</samp>](https://github.com/hooray/fantastic-admin/commit/0c43078)

🐞 Bug Fixes

- 修复 eslint 警告 &nbsp;-&nbsp; by @hooray [<samp>(7474a)</samp>](https://github.com/hooray/fantastic-admin/commit/7474a19)
:::

:::tip [专业版](https://github.com/fantastic-admin/pro/releases/tag/v2.4.0)
🚨 Breaking Changes

- Iframe 路由支持页面缓存 &nbsp;-&nbsp; by @hooray [<samp>(2e8e2)</samp>](https://github.com/fantastic-admin/pro/commit/2e8e2cb)
- 增加外链路由跳转提示页面，重构外链路由的配置方式 &nbsp;-&nbsp; by @hooray [<samp>(5388d)</samp>](https://github.com/fantastic-admin/pro/commit/5388d11)

🚀 Features

- 应用配置增加 iframe 最大缓存数 &nbsp;-&nbsp; by @hooray [<samp>(4184a)</samp>](https://github.com/fantastic-admin/pro/commit/4184aeb)

🐞 Bug Fixes

- 修复 eslint 警告 &nbsp;-&nbsp; by @hooray [<samp>(4ecf6)</samp>](https://github.com/fantastic-admin/pro/commit/4ecf64f)
- 修复路由或导航后端生成错误 &nbsp;-&nbsp; by @hooray [<samp>(e5470)</samp>](https://github.com/fantastic-admin/pro/commit/e5470a9)
- 修复后端返回iframe路由访问错误 &nbsp;-&nbsp; by @hooray [<samp>(19132)</samp>](https://github.com/fantastic-admin/pro/commit/19132a6)
:::

## v2.3.0

:::info [基础版](https://github.com/fantastic-admin/basic/releases/tag/v2.3.0)
🚨 Breaking Changes

- 移除自定义 Route.recordRaw 类型，改用 RouteRecordRaw 类型 &nbsp;-&nbsp; by @hooray [<samp>(e2443)</samp>](https://github.com/hooray/fantastic-admin/commit/e24431c)

🚀 Features

- 路由`meta.title`修改为非必须 &nbsp;-&nbsp; by @hooray [<samp>(776fe)</samp>](https://github.com/hooray/fantastic-admin/commit/776fe7a)

🐞 Bug Fixes

- 修复文件系统路由模式下，全局搜索列表 icon 显示不全 &nbsp;-&nbsp; by @hooray [<samp>(f85a9)</samp>](https://github.com/hooray/fantastic-admin/commit/f85a911)
- 修复标题显示异常 &nbsp;-&nbsp; by @hooray [<samp>(5c649)</samp>](https://github.com/hooray/fantastic-admin/commit/5c64949)
:::

:::tip [专业版](https://github.com/fantastic-admin/pro/releases/tag/v2.3.0)
🚨 Breaking Changes

- 移除自定义 Route.recordRaw 类型，改用 RouteRecordRaw 类型 &nbsp;-&nbsp; by @hooray [<samp>(e1edd)</samp>](https://github.com/fantastic-admin/pro/commit/e1eddbf)

🚀 Features

- 路由`meta.title`修改为非必须 &nbsp;-&nbsp; by @hooray [<samp>(bbde5)</samp>](https://github.com/fantastic-admin/pro/commit/bbde595)
- 文件系统路由模式下，`meta.title`修改为非必须 &nbsp;-&nbsp; by @hooray [<samp>(17393)</samp>](https://github.com/fantastic-admin/pro/commit/173932e)
- 主导航增加`meta.activeIcon`设置项 &nbsp;-&nbsp; by @hooray [<samp>(3a6d9)</samp>](https://github.com/fantastic-admin/pro/commit/3a6d94e)

🐞 Bug Fixes

- 修复文件系统路由模式下，全局搜索列表 icon 显示不全 &nbsp;-&nbsp; by @hooray [<samp>(5e1b6)</samp>](https://github.com/fantastic-admin/pro/commit/5e1b6e2)
:::

## v2.2.0

:::info [基础版](https://github.com/fantastic-admin/basic/releases/tag/v2.2.0)
🚨 Breaking Changes

- 控制台修改为主页，路由调整为根路由 &nbsp;-&nbsp; by @hooray [<samp>(b2e33)</samp>](https://github.com/hooray/fantastic-admin/commit/b2e33ca)

🐞 Bug Fixes

- 修复文件系统路由下，次导航无法按层级依次展开 &nbsp;-&nbsp; by @hooray [<samp>(f0a52)</samp>](https://github.com/hooray/fantastic-admin/commit/f0a523f)
:::

:::tip [专业版](https://github.com/fantastic-admin/pro/releases/tag/v2.2.0)
🚨 Breaking Changes

- 控制台修改为主页，路由调整为根路由 &nbsp;-&nbsp; by @hooray [<samp>(0ba3b)</samp>](https://github.com/fantastic-admin/pro/commit/0ba3bd3)
- 新增标签页合并规则 &nbsp;-&nbsp; by @hooray [<samp>(38594)</samp>](https://github.com/fantastic-admin/pro/commit/38594d4)

🚀 Features

- 支持标签页宽度自适应 &nbsp;-&nbsp; by @hooray [<samp>(6addf)</samp>](https://github.com/fantastic-admin/pro/commit/6addf68)

🐞 Bug Fixes

- 修复移动端下标签页拖动禁用失效 &nbsp;-&nbsp; by @hooray [<samp>(30c61)</samp>](https://github.com/fantastic-admin/pro/commit/30c6161)
- 动态设置标题导致面包屑导航上主导航显示错乱 &nbsp;-&nbsp; by @hooray [<samp>(2a9f4)</samp>](https://github.com/fantastic-admin/pro/commit/2a9f47f)
- 修复标签栏快捷操作下拉菜单里，当前激活标签页不显示关闭按钮 &nbsp;-&nbsp; by @hooray [<samp>(376cf)</samp>](https://github.com/fantastic-admin/pro/commit/376cfa8)
:::

## v2.1.3

:::info [基础版](https://github.com/fantastic-admin/basic/releases/tag/v2.1.3)
无重大变化
:::

:::tip [专业版](https://github.com/fantastic-admin/pro/releases/tag/v2.1.3)
无重大变化
:::

## v2.1.2

:::tip [专业版](https://github.com/fantastic-admin/pro/releases/tag/v2.1.2)
🐞 Bug Fixes

- 修复标准模块里 useTabbar() 使用报错 &nbsp;-&nbsp; by @hooray [<samp>(ee5e4)</samp>](https://github.com/fantastic-admin/pro/commit/ee5e471)
:::

## v2.1.1

:::info [基础版](https://github.com/fantastic-admin/basic/releases/tag/v2.1.1)
🚀 Features

- Logo 支持非正方形图片 &nbsp;-&nbsp; by @hooray [<samp>(57b18)</samp>](https://github.com/hooray/fantastic-admin/commit/57b18c2)
:::

:::tip [专业版](https://github.com/fantastic-admin/pro/releases/tag/v2.1.1)
🚀 Features

- Logo 支持非正方形图片 &nbsp;-&nbsp; by @hooray [<samp>(0285a)</samp>](https://github.com/fantastic-admin/pro/commit/0285acf)
:::

## v2.1.0

:::info [基础版](https://github.com/fantastic-admin/basic/releases/tag/v2.1.0)
🚨 Breaking Changes

- UseCurrentInstance() 重命名为 useGlobalProperties() &nbsp;-&nbsp; by @hooray [<samp>(c091c)</samp>](https://github.com/hooray/fantastic-admin/commit/c091c68)

🐞 Bug Fixes

- 修复类型报错 &nbsp;-&nbsp; by @hooray [<samp>(fe6d8)</samp>](https://github.com/hooray/fantastic-admin/commit/fe6d81c)
:::

:::tip [专业版](https://github.com/fantastic-admin/pro/releases/tag/v2.1.0)
🚨 Breaking Changes

- UseCurrentInstance() 重命名为 useGlobalProperties() &nbsp;-&nbsp; by @hooray [<samp>(5db74)</samp>](https://github.com/fantastic-admin/pro/commit/5db7401)

🚀 Features

- UseTabbar 增加 open 函数 &nbsp;-&nbsp; by @hooray [<samp>(7aeca)</samp>](https://github.com/fantastic-admin/pro/commit/7aecaaa)
- UseTabbar 的 closeById 函数增加参数默认值 &nbsp;-&nbsp; by @hooray [<samp>(a1797)</samp>](https://github.com/fantastic-admin/pro/commit/a1797d5)
- 支持在面包屑导航上显示主导航 &nbsp;-&nbsp; by @hooray [<samp>(068b5)</samp>](https://github.com/fantastic-admin/pro/commit/068b535)
- 支持在标签栏上显示图标 &nbsp;-&nbsp; by @hooray [<samp>(2aff6)</samp>](https://github.com/fantastic-admin/pro/commit/2aff683)
- 标签栏增加快捷操作下拉菜单 &nbsp;-&nbsp; by @hooray [<samp>(cf231)</samp>](https://github.com/fantastic-admin/pro/commit/cf2311d)

🐞 Bug Fixes

- 修复类型报错 &nbsp;-&nbsp; by @hooray [<samp>(2f9a4)</samp>](https://github.com/fantastic-admin/pro/commit/2f9a457)
- 修改 element plus 全屏 loading 的层级 &nbsp;-&nbsp; by @hooray [<samp>(90eea)</samp>](https://github.com/fantastic-admin/pro/commit/90eea04)
- 修复配置合并后部分配置项消失的问题 &nbsp;-&nbsp; by @hooray [<samp>(65853)</samp>](https://github.com/fantastic-admin/pro/commit/6585342)
- 修复面包屑导航开启显示主导航后，访问控制台页面报错的问题 &nbsp;-&nbsp; by @hooray [<samp>(2ee44)</samp>](https://github.com/fantastic-admin/pro/commit/2ee44ee)
- 修复在文件路由系统下标签页显示报错 &nbsp;-&nbsp; by @hooray [<samp>(9044b)</samp>](https://github.com/fantastic-admin/pro/commit/9044b9e)
- 修复刷新按钮点击报错 &nbsp;-&nbsp; by @hooray [<samp>(c850c)</samp>](https://github.com/fantastic-admin/pro/commit/c850cf5)
- 修复 SignCanvas 组件类型报错 &nbsp;-&nbsp; by @hooray [<samp>(9484a)</samp>](https://github.com/fantastic-admin/pro/commit/9484a2a)
- 修复开发环境保存后当前标签页选中效果失效 &nbsp;-&nbsp; by @hooray [<samp>(5b3bf)</samp>](https://github.com/fantastic-admin/pro/commit/5b3bf98)
:::

## v2.0.2

:::info [基础版](https://github.com/fantastic-admin/basic/releases/tag/v2.0.2)
🐞 Bug Fixes

- 修复获取侧边栏导航最深一级路由可能返回为空的问题 &nbsp;-&nbsp; by @hooray [<samp>(07b9e)</samp>](https://github.com/hooray/fantastic-admin/commit/07b9e31)
- 调整部分定位组件的z-index层级 &nbsp;-&nbsp; by @hooray [<samp>(925ee)</samp>](https://github.com/hooray/fantastic-admin/commit/925ee00)
:::

:::tip [专业版](https://github.com/fantastic-admin/pro/releases/tag/v2.0.2)
🐞 Bug Fixes

- 补充遗漏的文件生成模式 &nbsp;-&nbsp; by @hooray [<samp>(feaec)</samp>](https://github.com/fantastic-admin/pro/commit/feaec07)
- 修复获取侧边栏导航最深一级路由可能返回为空的问题 &nbsp;-&nbsp; by @hooray [<samp>(f2a50)</samp>](https://github.com/fantastic-admin/pro/commit/f2a5030)
- 调整部分定位组件的z-index层级 &nbsp;-&nbsp; by @hooray [<samp>(37b1a)</samp>](https://github.com/fantastic-admin/pro/commit/37b1a18)
:::

## v2.0.1

:::info [基础版](https://github.com/fantastic-admin/basic/releases/tag/v2.0.1)
🐞 Bug Fixes

- 修改 mock 文件引入后缀 &nbsp;-&nbsp; by @hooray [<samp>(5a75e)</samp>](https://github.com/hooray/fantastic-admin/commit/5a75e56)
:::

:::tip [专业版](https://github.com/fantastic-admin/pro/releases/tag/v2.0.1)
无重大变化
:::

## v2.0.0

:::info [基础版](https://github.com/fantastic-admin/basic/releases/tag/v2.0.0)
🚨 Breaking Changes

- TypeScript 支持 &nbsp;-&nbsp; by @hooray [<samp>(f17fd)</samp>](https://github.com/hooray/fantastic-admin/commit/f17fd5e)
:::

:::tip [专业版](https://github.com/fantastic-admin/pro/releases/tag/v2.0.0)
🚨 Breaking Changes

- TypeScript 支持 &nbsp;-&nbsp; by @hooray [<samp>(8958a)</samp>](https://github.com/fantastic-admin/pro/commit/8958a8e)
:::

## v1.0.0

:::info [基础版](https://github.com/fantastic-admin/basic/releases/tag/v1.0.0)
JS 版本存档，框架下次更新将切换到 TS 版本，JS 版本将不再维护。
:::

:::tip [专业版](https://github.com/fantastic-admin/pro/releases/tag/v1.0.0)
JS 版本存档，框架下次更新将切换到 TS 版本，JS 版本将不再维护。
:::