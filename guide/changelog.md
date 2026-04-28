---
url: /guide/changelog.md
---
# 更新日志

只记录 feat/fix 以及破坏性变更。

## v6.0

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
