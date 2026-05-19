---
url: /guide/changelog.md
---
# 更新日志

只记录 feat/fix 以及破坏性变更。

## v6.1.0

:::info [基础版](https://github.com/fantastic-admin/basic/releases/tag/v6.1.0)
🚨 Breaking Changes

* 移除 FaRadioGroup 组件的 orientation 属性  -  by @hooray [(c0bc3)](https://github.com/fantastic-admin/basic/commit/c0bc31f7)
* 因上游 vite-plugin-fake-server 插件问题，暂时移动 fake 文件目录  -  by @hooray [(1b0dc)](https://github.com/fantastic-admin/basic/commit/1b0dc3b9)

🚀 Features

* 增强 dev 脚本匹配逻辑，支持以 'dev:' 开头的脚本名称  -  by @hooray [(e55e9)](https://github.com/fantastic-admin/basic/commit/e55e9474)
* FaImageUpload / FaFileUpload 增加粘贴上传功能  -  by @hooray [(1c811)](https://github.com/fantastic-admin/basic/commit/1c811156)
* FaImageUpload 组件增加入场、出场、排序动画  -  by @hooray [(38e6a)](https://github.com/fantastic-admin/basic/commit/38e6abab)
* 将生成图标脚本提取到公用子包  -  by @hooray [(1ccbd)](https://github.com/fantastic-admin/basic/commit/1ccbd640)
* 主题色调整  -  by @hooray and **Copilot** [(1d86e)](https://github.com/fantastic-admin/basic/commit/1d86ef87)
* 添加 FaSelect 组件的定位模式支持  -  by @hooray and **Copilot** [(81bed)](https://github.com/fantastic-admin/basic/commit/81beda6e)
* 新增 FaRadioGroup 组件  -  by @hooray [(bb3bd)](https://github.com/fantastic-admin/basic/commit/bb3bd479)
* 新增 FaCheckboxGrou 组件，并重构 FaCheckbox API  -  by @hooray [(5ba6d)](https://github.com/fantastic-admin/basic/commit/5ba6d08d)
* 更新 FaDrawer 和 FaModal 组件，强制关闭自带遮罩  -  by @hooray [(fc2c8)](https://github.com/fantastic-admin/basic/commit/fc2c89fa)
* 扩展 FaInput 组件的 type 属性  -  by @hooray [(70b29)](https://github.com/fantastic-admin/basic/commit/70b29edb)

🐞 Bug Fixes

* 修复 FaDrawer 和 FaModal 组件开启时警告错误  -  by @hooray [(cf4a7)](https://github.com/fantastic-admin/basic/commit/cf4a7eae)
* 修复icon生成脚本错误  -  by @hooray [(84eb9)](https://github.com/fantastic-admin/basic/commit/84eb9b7a)
* 修复登录页“记住我”无法勾选  -  by @hooray [(244e6)](https://github.com/fantastic-admin/basic/commit/244e6cb4)
  :::

:::tip [专业版](https://github.com/fantastic-admin/pro/releases/tag/v6.1.0)
🚨 Breaking Changes

* 移除 FaRadioGroup 组件的 orientation 属性  -  by @hooray [(3fc28)](https://github.com/fantastic-admin/pro/commit/3fc28063)
* 因上游 vite-plugin-fake-server 插件问题，暂时移动 fake 文件目录  -  by @hooray [(05ade)](https://github.com/fantastic-admin/pro/commit/05ade0cf)

🚀 Features

* 增强 dev 脚本匹配逻辑，支持以 'dev:' 开头的脚本名称  -  by @hooray [(7cfaa)](https://github.com/fantastic-admin/pro/commit/7cfaa3bd)
* FaImageUpload / FaFileUpload 增加粘贴上传功能  -  by @hooray [(ff29d)](https://github.com/fantastic-admin/pro/commit/ff29de71)
* FaImageUpload 组件增加入场、出场、排序动画  -  by @hooray [(57211)](https://github.com/fantastic-admin/pro/commit/57211cf7)
* 新增 useTiks 交互音效  -  by @hooray [(1f1b4)](https://github.com/fantastic-admin/pro/commit/1f1b4939)
* 多账号弹窗增加自动聚焦  -  by @hooray [(f07e9)](https://github.com/fantastic-admin/pro/commit/f07e9381)
* 将生成图标脚本提取到公用子包  -  by @hooray [(5afd0)](https://github.com/fantastic-admin/pro/commit/5afd0ee4)
* 重构主题设计，并同步 shadcn-vue 的基础色和主题色  -  by @hooray [(5401b)](https://github.com/fantastic-admin/pro/commit/5401be42)
* 添加 FaSelect 组件的定位模式支持  -  by @hooray [(96006)](https://github.com/fantastic-admin/pro/commit/96006daa)
* 新增 FaRadioGroup 组件  -  by @hooray [(71b97)](https://github.com/fantastic-admin/pro/commit/71b97063)
* 新增 FaCheckboxGrou 组件，并重构 FaCheckbox API  -  by @hooray [(b8ccb)](https://github.com/fantastic-admin/pro/commit/b8ccb1e6)
* 更新 FaDrawer 和 FaModal 组件，强制关闭自带遮罩  -  by @hooray [(1dbb3)](https://github.com/fantastic-admin/pro/commit/1dbb3c8e)
* 扩展 FaInput 组件的 type 属性  -  by @hooray [(03dd7)](https://github.com/fantastic-admin/pro/commit/03dd7fcc)
* 添加 FaTree 组件的虚拟化支持，并使用 reka-ui 重构  -  by @hooray [(bc98d)](https://github.com/fantastic-admin/pro/commit/bc98df00)
* 新增 `FaCombobox` 组件  -  by @hooray [(55732)](https://github.com/fantastic-admin/pro/commit/55732fc5)

🐞 Bug Fixes

* 修复 FaDrawer 和 FaModal 组件开启时警告错误  -  by @hooray [(691dd)](https://github.com/fantastic-admin/pro/commit/691dd905)
* 修复icon生成脚本错误  -  by @hooray [(497fa)](https://github.com/fantastic-admin/pro/commit/497faad0)
* 修复 FaScrollingText 向下滚动时鼠标悬停时跳动  -  by @hooray [(34409)](https://github.com/fantastic-admin/pro/commit/34409eee)
* 修复工具栏布局条件判断  -  by @hooray [(50695)](https://github.com/fantastic-admin/pro/commit/50695260)
* 修复 `VITE_APP_SETTING` 关闭后导致偏好设置无响应  -  by @hooray [(5f286)](https://github.com/fantastic-admin/pro/commit/5f28686f)
* 为 FaButton 组件添加 type 属性以确保按钮行为一致  -  by @hooray [(e6abd)](https://github.com/fantastic-admin/pro/commit/e6abd179)
* 修复登录页“记住我”无法勾选  -  by @hooray [(af1c9)](https://github.com/fantastic-admin/pro/commit/af1c93ab)
* 修复默认语言如果为跟随浏览器语言时，未命中框架内语言包时报错，增加国际化回退语言  -  by @hooray [(5423a)](https://github.com/fantastic-admin/pro/commit/5423af28)
  :::

## v6.0.0

![](/v6-released.png)

如果你是从 v5.x 迁移到 v6.0 ，请先阅读《[从 v5 迁移](./migration-from-v5)》，以下是 v6.0 新特性概览：

* 采用 PNPM monorepo 架构
* 内置 AI Skills
* UnoCSS 预设从 `presetWind3` 升级为 `presetWind4`
* 提供 `setSettingsLegacy` 配置迁移函数，支持从 v5.x 配置快速过渡到 v6
* 偏好设置支持更细粒度的自定义开启方式
  * 可以按整个模块开放
  * 也可以只开放某几个子项
* 新增路由元信息能力
  * 支持 `layout` 路由级布局配置
  * 支持 `localeAuth` 区域权限配置
* 新增锁屏功能
* 新增多账号功能
* 工具栏消息通知全新设计
* RTL 模式支持跟随语言设置自动切换
* 新增布局顶部和底部插槽
* 新增内建组件
  * `FaEmpty`
  * `FaKbdGroup`
  * `FaNumberField`
  * `FaQrcode`
  * `FaScrollingText`
  * `FaCascader`
  * `FaTextShiny`
  * `FaMention`
* 大量内建组件进行了重构
