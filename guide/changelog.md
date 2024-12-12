# 更新日志

只记录 feat/fix 以及破坏性变更。

## v4.12.1

:::info [基础版](https://github.com/fantastic-admin/basic/releases/tag/v4.12.1)
🐞 Bug Fixes

- 修复文件系统路由模式下主导航高亮效果不更新 &nbsp;-&nbsp; by @hooray [<samp>(d40c4)</samp>](https://github.com/fantastic-admin/basic/commit/d40c42a)
- 修复退出登录后Tab页不清除的问题 &nbsp;-&nbsp; by @ResJI and @hooray in https://github.com/fantastic-admin/basic/issues/46 [<samp>(88900)</samp>](https://github.com/fantastic-admin/basic/commit/88900d6)
:::

:::tip [专业版](https://github.com/fantastic-admin/pro/releases/tag/v4.12.1)
🐞 Bug Fixes

- 修复文件系统路由模式下主导航高亮效果不更新 &nbsp;-&nbsp; by @hooray [<samp>(7a031)</samp>](https://github.com/fantastic-admin/pro/commit/7a03105f)
- 修复双击标签页可关闭固定或常驻标签的问题 &nbsp;-&nbsp; by @hooray [<samp>(9a836)</samp>](https://github.com/fantastic-admin/pro/commit/9a836f9f)
- 修复导航顶部面板模式切换路由时会自动显示bug &nbsp;-&nbsp; by @hooray [<samp>(68aa3)</samp>](https://github.com/fantastic-admin/pro/commit/68aa3339)
:::

## v4.12.0

:::info [基础版](https://github.com/fantastic-admin/basic/releases/tag/v4.12.0)
🚨 Breaking Changes

- 重构鉴权指令、鉴权组件 &nbsp;-&nbsp; by @hooray [<samp>(c34c2)</samp>](https://github.com/fantastic-admin/basic/commit/c34c2d1)

🐞 Bug Fixes

- 修复顶部相关布局时，工具栏重复渲染 &nbsp;-&nbsp; by @hooray [<samp>(026df)</samp>](https://github.com/fantastic-admin/basic/commit/026dfdb)
- 修复顶部相关布局时，移动端下工具栏不显示 &nbsp;-&nbsp; by @hooray [<samp>(efd85)</samp>](https://github.com/fantastic-admin/basic/commit/efd8536)
- 修复vscode无法校验css文件 &nbsp;-&nbsp; by @hooray [<samp>(5fcfc)</samp>](https://github.com/fantastic-admin/basic/commit/5fcfcb7)

🏎 Performance

- 优化导航菜单折叠 &nbsp;-&nbsp; by @hooray [<samp>(15983)</samp>](https://github.com/fantastic-admin/basic/commit/1598324)
:::

:::tip [专业版](https://github.com/fantastic-admin/pro/releases/tag/v4.12.0)
🚨 Breaking Changes

- 使用 watermark-js-plus 重构水印功能 &nbsp;-&nbsp; by @hooray [<samp>(3cce7)</samp>](https://github.com/fantastic-admin/pro/commit/3cce73ce)
- 重构鉴权指令、鉴权组件 &nbsp;-&nbsp; by @hooray [<samp>(f70e5)</samp>](https://github.com/fantastic-admin/pro/commit/f70e5d6c)

🚀 Features

- Dayjs 国际化跟随框架设置 &nbsp;-&nbsp; by @hooray [<samp>(8226c)</samp>](https://github.com/fantastic-admin/pro/commit/8226c68d)

🐞 Bug Fixes

- 修复应用配置里工具栏关闭的功能依旧会在在偏好设置里显示的bug &nbsp;-&nbsp; by @hooray [<samp>(00089)</samp>](https://github.com/fantastic-admin/pro/commit/00089514)
- 修复顶部相关布局时，工具栏重复渲染 &nbsp;-&nbsp; by @hooray [<samp>(d0ad1)</samp>](https://github.com/fantastic-admin/pro/commit/d0ad1deb)
- 修复顶部相关布局时，移动端下工具栏不显示 &nbsp;-&nbsp; by @hooray [<samp>(d7107)</samp>](https://github.com/fantastic-admin/pro/commit/d71075d8)
- 修复vscode无法校验css文件 &nbsp;-&nbsp; by @hooray [<samp>(e2d64)</samp>](https://github.com/fantastic-admin/pro/commit/e2d64439)

🏎 Performance

- 优化导航菜单折叠 &nbsp;-&nbsp; by @hooray [<samp>(2cfe6)</samp>](https://github.com/fantastic-admin/pro/commit/2cfe6b5c)
:::

## v4.11.0

:::info [基础版](https://github.com/fantastic-admin/basic/releases/tag/v4.11.0)
🚨 Breaking Changes

- 重构登录页面 &nbsp;-&nbsp; by @hooray [<samp>(cb230)</samp>](https://github.com/fantastic-admin/basic/commit/cb230f7)

🚀 Features

- 扩充 unocss 自定义 shortcuts &nbsp;-&nbsp; by @hooray [<samp>(6f59d)</samp>](https://github.com/fantastic-admin/basic/commit/6f59ddf)
- SvgIcon 组件支持传入本地图片，网络图片增加载入和失败状态 &nbsp;-&nbsp; by @hooray [<samp>(e79bd)</samp>](https://github.com/fantastic-admin/basic/commit/e79bd1d)
- 引入 postcss-nested &nbsp;-&nbsp; by @hooray [<samp>(2fe0f)</samp>](https://github.com/fantastic-admin/basic/commit/2fe0fc9)

🐞 Bug Fixes

- 修复带参路由无法记录到标签栏中 &nbsp;-&nbsp; by @hooray [<samp>(1e155)</samp>](https://github.com/fantastic-admin/basic/commit/1e15536)
:::

:::tip [专业版](https://github.com/fantastic-admin/pro/releases/tag/v4.11.0)
🚨 Breaking Changes

- 重构登录页面 &nbsp;-&nbsp; by @hooray [<samp>(cedbb)</samp>](https://github.com/fantastic-admin/pro/commit/cedbbaf1)
- 移除 I18nSelector 组件 &nbsp;-&nbsp; by @hooray [<samp>(c6444)</samp>](https://github.com/fantastic-admin/pro/commit/c6444b61)

🚀 Features

- Iframe路由支持动态传入src &nbsp;-&nbsp; by @hooray [<samp>(0faf5)</samp>](https://github.com/fantastic-admin/pro/commit/0faf5f68)
- 扩展组件增加 i18n 支持 &nbsp;-&nbsp; by @hooray [<samp>(30a33)</samp>](https://github.com/fantastic-admin/pro/commit/30a33f66)
- 手动登出时，清空非固定和非常驻的标签页 &nbsp;-&nbsp; by @hooray [<samp>(7c88a)</samp>](https://github.com/fantastic-admin/pro/commit/7c88ae30)
- 扩充 unocss 自定义 shortcuts &nbsp;-&nbsp; by @hooray [<samp>(23b9b)</samp>](https://github.com/fantastic-admin/pro/commit/23b9b165)
- SvgIcon 组件支持传入本地图片，网络图片增加载入和失败状态 &nbsp;-&nbsp; by @hooray [<samp>(818c8)</samp>](https://github.com/fantastic-admin/pro/commit/818c8a25)
- 固定或常驻标签页可在相邻且同类型的标签页间拖动 &nbsp;-&nbsp; by @hooray [<samp>(59fd4)</samp>](https://github.com/fantastic-admin/pro/commit/59fd43f0)
- 标准模块增加搜索项重置 &nbsp;-&nbsp; by @hooray [<samp>(c4342)</samp>](https://github.com/fantastic-admin/pro/commit/c4342314)
- 引入 postcss-nested &nbsp;-&nbsp; by @hooray [<samp>(1c631)</samp>](https://github.com/fantastic-admin/pro/commit/1c631579)

🐞 Bug Fixes

- 修复标签页可以拖动到固定或常驻标签页前面的问题 &nbsp;-&nbsp; by @hooray [<samp>(089e0)</samp>](https://github.com/fantastic-admin/pro/commit/089e0c6a)
:::

## v4.10.0

:::info [基础版](https://github.com/fantastic-admin/basic/releases/tag/v4.10.0)
🚨 Breaking Changes

- 移除`createInjectionKey`函数 &nbsp;-&nbsp; by @hooray [<samp>(9a733)</samp>](https://github.com/fantastic-admin/basic/commit/9a7331f)

🚀 Features

- 次导航支持隐藏 &nbsp;-&nbsp; by @hooray [<samp>(23d36)</samp>](https://github.com/fantastic-admin/basic/commit/23d3643)
- 上传组件增加自定义上传 &nbsp;-&nbsp; by @hooray [<samp>(66c0e)</samp>](https://github.com/fantastic-admin/basic/commit/66c0e4f)
- FileUpload 组件文件列表增加下载功能 &nbsp;-&nbsp; by @hooray [<samp>(bd5c9)</samp>](https://github.com/fantastic-admin/basic/commit/bd5c921)
:::

:::tip [专业版](https://github.com/fantastic-admin/pro/releases/tag/v4.10.0)
🚨 Breaking Changes

- 移除 `menu.subMenuOnlyOneHide` 应用配置项，修改为根据路由 `meta.menu` 配置实现相同效果 &nbsp;-&nbsp; by @hooray [<samp>(85b56)</samp>](https://github.com/fantastic-admin/pro/commit/85b56695)
- 移除`createInjectionKey`函数，全局provide的`generateI18nTitle`函数放到`useMenu()`里提供 &nbsp;-&nbsp; by @hooray [<samp>(fd2a5)</samp>](https://github.com/fantastic-admin/pro/commit/fd2a57e3)
- 调整 `menu.enableSubMenuCollapseButton` 的展示逻辑 &nbsp;-&nbsp; by @hooray [<samp>(64b73)</samp>](https://github.com/fantastic-admin/pro/commit/64b733bd)

🚀 Features

- 上传组件增加自定义上传 &nbsp;-&nbsp; by @hooray [<samp>(10295)</samp>](https://github.com/fantastic-admin/pro/commit/10295742)
- FileUpload 组件文件列表增加下载功能 &nbsp;-&nbsp; by @hooray [<samp>(29fc0)</samp>](https://github.com/fantastic-admin/pro/commit/29fc0c36)

🐞 Bug Fixes

- 修复导航模式为精简和面板模式时，点击无子导航的主导航路由报错 &nbsp;-&nbsp; by @hooray [<samp>(d99f2)</samp>](https://github.com/fantastic-admin/pro/commit/d99f2a63)
- 修复主题跟随系统且系统为明亮模式时，水印不生效 &nbsp;-&nbsp; by @hooray [<samp>(038b4)</samp>](https://github.com/fantastic-admin/pro/commit/038b4656)
:::

## v4.9.0

:::info [基础版](https://github.com/fantastic-admin/basic/releases/tag/v4.9.0)
🚨 Breaking Changes

- 配置项 `menu.menuMode` 变更为 `menu.mode` &nbsp;-&nbsp; by @hooray [<samp>(57fcd)</samp>](https://github.com/fantastic-admin/basic/commit/57fcd27)

🚀 Features

- 增加禁用开发者工具环境变量 &nbsp;-&nbsp; by @hooray [<samp>(90b58)</samp>](https://github.com/fantastic-admin/basic/commit/90b5880)
- 新增哀悼模式和色弱模式 &nbsp;-&nbsp; by @hooray [<samp>(456ef)</samp>](https://github.com/fantastic-admin/basic/commit/456ef83)

🐞 Bug Fixes

- 修复vscode失效配置 &nbsp;-&nbsp; by @hooray [<samp>(3c8b4)</samp>](https://github.com/fantastic-admin/basic/commit/3c8b488)
- 修复主导航 children 为空时报错 &nbsp;-&nbsp; by @hooray [<samp>(9e444)</samp>](https://github.com/fantastic-admin/basic/commit/9e444c8)
:::

:::tip [专业版](https://github.com/fantastic-admin/pro/releases/tag/v4.9.0)
🚨 Breaking Changes

- 配置项 `menu.menuActiveStyle` 变更为 `menu.style` &nbsp;-&nbsp; by @hooray [<samp>(d055f)</samp>](https://github.com/fantastic-admin/pro/commit/d055f821)
- 配置项 `menu.menuMode` 变更为 `menu.mode` &nbsp;-&nbsp; by @hooray [<samp>(d4ce5)</samp>](https://github.com/fantastic-admin/pro/commit/d4ce59cf)

🚀 Features

- 增加2种导航栏模式 `side-panel` / `head-panel` &nbsp;-&nbsp; by @hooray [<samp>(14996)</samp>](https://github.com/fantastic-admin/pro/commit/14996568)
- 新增`tabbar.dblclickAction`标签页双击执行动作配置项 &nbsp;-&nbsp; by @hooray [<samp>(5092f)</samp>](https://github.com/fantastic-admin/pro/commit/5092fdb7)
- 增加禁用开发者工具环境变量 &nbsp;-&nbsp; by @hooray [<samp>(b0037)</samp>](https://github.com/fantastic-admin/pro/commit/b003752a)
- 新增哀悼模式和色弱模式 &nbsp;-&nbsp; by @hooray [<samp>(ea5ad)</samp>](https://github.com/fantastic-admin/pro/commit/ea5ade1f)

🐞 Bug Fixes

- 修复类型警告 &nbsp;-&nbsp; by @hooray [<samp>(26bd1)</samp>](https://github.com/fantastic-admin/pro/commit/26bd1d27)
- 移除无用逻辑判断 &nbsp;-&nbsp; by @hooray [<samp>(55ee2)</samp>](https://github.com/fantastic-admin/pro/commit/55ee281e)
- 修复vscode失效配置 &nbsp;-&nbsp; by @hooray [<samp>(031db)</samp>](https://github.com/fantastic-admin/pro/commit/031dbf0b)
- 修复主导航 children 为空时报错 &nbsp;-&nbsp; by @hooray [<samp>(62b56)</samp>](https://github.com/fantastic-admin/pro/commit/62b56ba0)
:::

## v4.8.2

:::info [基础版](https://github.com/fantastic-admin/basic/releases/tag/v4.8.2)
🏎 Performance

- 优化标签栏滚动体验 &nbsp;-&nbsp; by @hooray [<samp>(03e5e)</samp>](https://github.com/fantastic-admin/basic/commit/03e5e99)
:::

:::tip [专业版](https://github.com/fantastic-admin/pro/releases/tag/v4.8.2)
🏎 Performance

- 优化标签栏滚动体验 &nbsp;-&nbsp; by @hooray [<samp>(971d9)</samp>](https://github.com/fantastic-admin/pro/commit/971d9341)
:::

## v4.8.1

:::info [基础版](https://github.com/fantastic-admin/basic/releases/tag/v4.8.1)
🐞 Bug Fixes

- 修复后端返回路由数据中 children 为空数组导致菜单无法正常生成 &nbsp;-&nbsp; by @hooray [<samp>(e0236)</samp>](https://github.com/fantastic-admin/basic/commit/e023671)
:::

:::tip [专业版](https://github.com/fantastic-admin/pro/releases/tag/v4.8.1)
🐞 Bug Fixes

- 修复后端返回路由数据中 children 为空数组导致菜单无法正常生成 &nbsp;-&nbsp; by @hooray [<samp>(3c8e2)</samp>](https://github.com/fantastic-admin/pro/commit/3c8e2f15)
:::

## v4.8.0

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

## v4.7.0

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

## v4.6.2

:::info [基础版](https://github.com/fantastic-admin/basic/releases/tag/v4.6.2)
无重大变化
:::

:::tip [专业版](https://github.com/fantastic-admin/pro/releases/tag/v4.6.2)
无重大变化
:::

## v4.6.1

:::info [基础版](https://github.com/fantastic-admin/basic/releases/tag/v4.6.1)
无重大变化
:::

:::tip [专业版](https://github.com/fantastic-admin/pro/releases/tag/v4.6.1)
无重大变化
:::

## v4.6.0

:::info [基础版](https://github.com/fantastic-admin/basic/releases/tag/v4.6.0)
无重大变化
:::

:::tip [专业版](https://github.com/fantastic-admin/pro/releases/tag/v4.6.0)
🚀 Features

- 路由增加 `meta.singleMenu` 配置项 &nbsp;-&nbsp; by @hooray [<samp>(2a9cb)</samp>](https://github.com/fantastic-admin/pro/commit/2a9cb248)

🐞 Bug Fixes

- 修复 IconPicker 组件样式错乱 &nbsp;-&nbsp; by @hooray [<samp>(17ed3)</samp>](https://github.com/fantastic-admin/pro/commit/17ed3ba0)
:::

## v4.5.0

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

## v4.4.0

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

## v4.3.0

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

## v4.2.0

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

## v4.1.0

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

## v4.0.3

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

## v4.0.2

:::info [基础版](https://github.com/fantastic-admin/basic/releases/tag/v4.0.2)
无重大变化
:::

:::tip [专业版](https://github.com/fantastic-admin/pro/releases/tag/v4.0.2)
🐞 Bug Fixes

- 修复 ColorfulCard 组件图标溢出 &nbsp;-&nbsp; by @hooray [<samp>(865bb)</samp>](https://github.com/fantastic-admin/pro/commit/865bbead)
:::

## v4.0.1

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

## v4.0.0

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

  > 如果你依旧需要自定义 Element Plus 的主题，可以阅读 Element Plus 官方文档《[自定义主题](https://element-plus.org/zh-CN/guide/theming.html)》，或者参考下面提供的最佳实践。
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

  > 如果你依旧需要全局配置 Element Plus 的默认尺寸，可以参考《[Config Provider 全局配置](http://element-plus.org/zh-CN/component/config-provider.html)》并在 `/src/ui-provider/index.vue` 中进行修改。

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

## v3.x

前往 [v3](https://fantastic-admin.hurui.me/v3-docs/guide/changelog.html) 文档查看

## v2.x

前往 [v2](https://fantastic-admin.hurui.me/v2-docs/guide/changelog.html) 文档查看