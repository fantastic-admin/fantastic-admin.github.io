---
url: /guide/migration-from-v5.md
---
# 从 v5 迁移

由于配置结构、部分路由元信息、目录组织以及少量组件命名都做了调整，建议按“**先让项目跑起来，再逐项清理**”的方式迁移。

## 推荐迁移顺序

1. 先复制 `apps/core` 作为你的新应用基础
2. 将旧项目中的业务代码按模块拷贝到新应用中
3. 优先处理不兼容的基础配置，例如 `src/settings.ts`
4. 再逐项修改路由 `meta`、组件引用和目录结构
5. 最后整理 store、mock、环境变量等目录变更，并完成回归测试

## 1. 配置项迁移

配置文件统一放在 `apps/<app>/src/settings.ts` 中。

为了方便从 v5.x 迁移，框架提供了兼容函数 `setSettingsLegacy` ：

```ts {twoslash}
import { setSettingsLegacy } from '@fantastic-admin/settings'

export default setSettingsLegacy({
  // v5.x 配置
})
```

你可以先把 v5.x 的配置整体复制到 `apps/<app>/src/settings.ts` 中，通过 `setSettingsLegacy()` 让项目先正常运行。

项目运行后，浏览器开发者工具中会输出一份转换后的新配置。将它复制回来，替换为正式写法即可：

```ts {twoslash}
import { setSettings } from '@fantastic-admin/settings'

export default setSettings({
  // 新配置
})
```

### 已校验的常见字段映射

下面这些映射已按 `packages/settings/src/utils.ts` 中 `setSettingsLegacy()` 的实现校验：

| v5.x | 新配置 |
| --- | --- |
| `app.enablePermission` | `app.account.auth` |
| `app.loginExpiredMode` | `app.account.expiredMode` |
| `app.routeBaseOn` | `app.routeBaseOn` |
| `app.routeBaseOn = 'filesystem'` | 自动转为 `app.routeBaseOn = 'frontend'` |
| `app.enableDynamicTitle` | `app.dynamicTitle` |
| `app.enableWatermark` | `app.watermark` |
| `app.enableFeedback` | `app.feedback` |
| `app.enableErrorLog` | `app.errorLog` |
| `app.enableCheckUpdates` | `app.checkUpdates` |
| `app.enableMournMode` | `app.rip` |
| `layout.enableMobileAdaptation` | `app.mobile` |
| `layout.widthMode = 'center'` | `app.layout.center = true` |
| `layout.widthModeScope` | `app.layout.centerScope` |
| `home.enable / title / fullPath` | `app.home.enable / title / fullPath` |
| `copyright.*` | `app.copyright.*` |
| `app.themeSync` | `theme.sync` |
| `app.lightTheme / darkTheme` | `theme.light / dark` |
| `app.colorScheme` | `theme.colorScheme` |
| `app.radius` | `theme.radius` |
| `app.enableColorAmblyopiaMode` | `theme.colorAmblyopia` |
| `menu.enableDark` | `menu.dark` |
| `menu.subMenuUniqueOpened` | `menu.subMenuUniqueExpand` |
| `menu.enableSubMenuCollapseButton` | `menu.subMenuCollapseButton` |
| `tabbar.enable` | `topbar.tabbar` |
| `toolbar.enable` | `topbar.toolbar` |
| `tabbar.enableIcon` | `tabbar.icon` |
| `tabbar.enableMemory` | `tabbar.memory` |
| `toolbar.navSearch` | `toolbar.menuSearch.enable` |
| `navSearch.enableHotkeys` | `toolbar.menuSearch.hotkeys` |
| `mainPage.iframeCacheMax` | `page.iframeKeepAliveMax` |
| `app.enableProgress` | `page.progress` |

### 关于基础色配置

当前版本的主题系统已经拆分出“基础色”和“主题色”两层：

* `theme.baseColorLight`
* `theme.baseColorDark`
* `theme.light`
* `theme.dark`

其中：

* `baseColorLight / baseColorDark` 对应基础色，默认都是 `'neutral'`
* `light / dark` 对应主题色，默认都是 `'default'`

v5.x 没有独立的基础色配置，因此迁移时**不需要**从旧配置里寻找对应字段；如果你没有额外需求，保持默认值即可。只有当你希望亮暗模式使用不同的底色体系时，才需要手动补充这两个新字段。

### 关于 `routeBaseOn: 'filesystem'` 的说明

已移除**文件路由系统**，也就是说 `routeBaseOn` 不再支持 `filesystem` 选项。

现在的类型定义中，`routeBaseOn` 只保留：

* `frontend`
* `backend`

因此如果你的 v5 项目里使用过：

```ts
app: {
  routeBaseOn: 'filesystem',
}
```

迁移时需要改为前端路由方案。兼容迁移函数 `setSettingsLegacy()` 会自动把它转换成：

```ts
app: {
  routeBaseOn: 'frontend',
}
```

这也意味着：**原先依赖文件路由的组织方式，需要手动调整为当前的路由模块组织方式。**

### 一个需要手动迁移的点

`setSettingsLegacy()` **不会**把旧版 `userPreferences` 自动转换成新版 `app.preferences` 的细粒度配置。

也就是说，如果你的 v5 项目开启过用户偏好设置，迁移后需要你**手动改写**为：

```ts
export default setSettings({
  app: {
    preferences: {
      theme: true,
      menu: true,
      topbar: true,
      tabbar: true,
      toolbar: true,
      page: true,
    },
  },
})
```

如果你需要做更细粒度的偏好设置控制，例如只开放某几个子项，建议继续阅读《[用户偏好设置](./settings/app#用户偏好设置)》。

## 2. 配置结构重构

配置项做了重新分层，顶层配置大致分为：

* `app`：应用级配置
* `theme`：主题配置
* `menu`：导航菜单配置
* `topbar`：顶栏配置
* `tabbar`：标签栏配置
* `toolbar`：工具栏配置
* `page`：页面行为配置

其中：

* `app` 是应用级配置，**不允许动态修改**
* 其它配置项都可以按需开放给用户做偏好设置

详细配置可继续阅读：

* [应用配置简介](./settings/)
* [应用](./settings/app)
* [导航菜单](./settings/menu)
* [顶栏](./settings/topbar)
* [标签栏](./settings/tabbar)
* [工具栏](./settings/toolbar)
* [页面](./settings/page)

## 3. 偏好设置改造

v5.x 及之前版本的偏好设置相对复杂，现在改为按配置树精细控制。

```ts
import { setSettings } from '@fantastic-admin/settings'

export default setSettings({
  app: {
    preferences: {
      theme: true,
      menu: {
        style: false,
        subMenuCollapseButton: true,
        hotkeys: true,
      },
    },
  },
})
```

含义如下：

* `theme: true`：允许用户自定义 `theme` 下的全部配置
* `menu.style: false`：不允许用户修改菜单风格
* `menu.subMenuCollapseButton: true`：允许用户修改次导航折叠按钮
* `menu.hotkeys: true`：允许用户修改该项相关偏好

另外，偏好设置相关界面已合并到 `layouts/components/AppSetting/index.vue` 中，后续维护会更简单。

## 4. 内建组件调整

### 迁出部分组件

将部分**和框架强相关、但不属于通用 UI 组件**的内容，从原先的内建组件体系中迁出，统一放到 `apps/<app>/src/components/` 目录下，并改为 `App*` 命名。

迁移时涉及到的组件调整包括：

* `FaAuth` → `AppAuth`
* `FaBackToTop` → `AppBackToTop`
* `FaCheckUpdates` → `AppCheckUpdates`
* `FaCopyright` → `AppCopyright`
* `FaNotAllowed` → `AppNotAllowed`
* `FaSystemInfo` → `AppSystemInfo`

其中通常只需要重点关注 `FaAuth`，因为它更可能被业务页面直接使用。

### 组件名称调整

* `FaPinInput` → `FaInputOTP`

### 移除组件

* `FaNotification` 已移除

如果你的旧项目里直接使用过 `FaNotification`，需要在迁移时手动删除或替换。

## 5. 路由元信息迁移

部分路由 `meta` 配置做了合并或重命名，下面这些写法已与 `packages/types/types.ts` 当前定义核对。

### `icon` + `activeIcon`

```ts
// 旧
meta: {
  icon: 'i-twemoji:face-without-mouth',
  activeIcon: 'i-twemoji:grinning-face-with-big-eyes',
}

// 新
meta: {
  icon: ['i-twemoji:face-without-mouth', 'i-twemoji:grinning-face-with-big-eyes'],
}
```

如果没有激活态图标，则仍然可以直接写字符串：

```ts
meta: {
  icon: 'i-twemoji:face-without-mouth',
}
```

### `badge` + `badgeVariant`

```ts
// 旧
meta: {
  badge: 'PRO',
  badgeVariant: 'destructive',
}

// 新
meta: {
  badge: ['PRO', 'destructive'],
}
```

如果不需要颜色方案：

```ts
meta: {
  badge: 'PRO',
}
```

### `cache` + `noCache`

```ts
// 旧
meta: {
  cache: true,
  noCache: 'xxx',
}

// 新
meta: {
  keepAlive: true,
  noKeepAlive: 'xxx',
}
```

更多说明可阅读：[页面保活](./keep-alive)

### `maximize` + `exitMaximize`

```ts
// 旧
meta: {
  maximize: true,
  exitMaximize: true,
}

// 新
meta: {
  maximize: true,
}
```

这里移除了 `exitMaximize`。离开该路由时会自动退出最大化。

如果你希望页面处于**强制最大化**状态，可以写成：

```ts
meta: {
  maximize: [true, true],
}
```

### `defaultOpened` + `alwaysOpened`

```ts
// 旧
meta: {
  defaultOpened: true,
  alwaysOpened: true,
}

// 新
meta: {
  expand: [true, true],
}
```

如果只需要默认展开：

```ts
meta: {
  expand: true,
}
```

### `permanent`

```ts
// 旧
meta: {
  permanent: true,
}

// 新
meta: {
  tabPermanent: true,
}
```

### 新增配置项

新增了一些路由元信息，例如：

```ts
meta: {
  layout: {
    center: true,
    centerScope: 'inner',
    centerWidth: 1400,
  },
  localeAuth: ['zh-cn', 'zh-tw'],
}
```

其中：

* `layout`：可为单个路由开启居中布局
* `localeAuth`：可控制路由的区域权限

更多字段说明可阅读：[路由（导航菜单）](./router)

## 6. Store 目录调整

新增了 `apps/<app>/src/store/modules/app/` 目录，用于存放和框架强相关的 store。

框架内置模块包括：

* `account`
* `settings`
* `menu`
* `tabbar`
* `keepAlive`
* `preferences`
* `favorites`
* `notification`
* `watermark`
* `route`
* `iframe`

迁移建议：

* 框架内置能力相关 store 放到 `apps/<app>/src/store/modules/app/`
* 业务自定义 store 继续放在 `apps/<app>/src/store/modules/` 下按模块管理

这样做的好处是，后续升级框架时更容易区分“框架代码”和“业务代码”。

更多说明可阅读：[全局状态管理](./store)

## 7. Mock 与相关目录变更

下面这些目录变更可直接按当前目录结构处理：

### Mock 文件迁移

原先 `src/mock` 目录下的文件已迁移到 `apps/<app>/src/api/modules/`，并使用 `*.fake.ts` 命名。

例如：

* `apps/example/src/api/modules/app.fake.ts`

更多说明可阅读：[与服务端交互 / 假数据](./axios#假数据)

## 8. 其它需要关注的迁移项

除了上面的核心迁移点，还建议你逐项检查以下内容：

* 工具栏消息通知已重新设计；如果旧项目启用了该能力，需要对照现在的通知中心实现重新检查交互和业务接入，相关代码位于 `apps/<app>/src/layouts/components/Topbar/Toolbar/Notification/`
* RTL 模式改为跟随语言设置自动切换，可在 `apps/<app>/src/locales/index.ts` 中配置各语言的 `direction`
* 标签页宽度相关配置移入 `tabbar.minMaxWidth`
* 部分环境变量名称有调整，建议直接对照 `apps/<app>/.env.*` 模板和 [环境变量文档](./env)
* 移除 `plop`

## 9. 建议的迁移检查清单

迁移完成前，建议至少确认以下项目：

* \[ ] `apps/<app>/src/settings.ts` 已从 `setSettingsLegacy()` 切换到 `setSettings()`
* \[ ] 如果旧项目使用过 `userPreferences`，已手动改写为 `app.preferences`
* \[ ] 偏好设置项已按需重新开放
* \[ ] 旧的 `Fa*` 非 UI 组件命名已改为 `App*`
* \[ ] 路由 `meta` 中的旧字段已完成替换
* \[ ] 如旧项目使用过文件路由，已改为当前的路由模块组织方式
* \[ ] 框架相关 store 已整理到 `src/store/modules/app/`
* \[ ] mock 文件已迁移到 `src/api/modules/*.fake.ts`
* \[ ] 环境变量已对照 `docs/guide/env.md` 与 `.env.*` 模板完成核对
* \[ ] 关键页面已完成回归测试

## 10. 迁移建议

如果你的 v5 项目改动较多，不建议一次性全面重构，推荐按下面方式逐步迁移：

1. 先用 `setSettingsLegacy()` 兼容旧配置
2. 让项目先运行起来
3. 优先手动处理 `app.preferences`、路由 `meta` 和旧组件引用
4. 每迁移一类能力，就做一次页面回归测试

这样成本更低，也更容易定位问题。
