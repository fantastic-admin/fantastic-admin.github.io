---
url: /guide/hotkeys.md
---
# 快捷键

在用户下拉列表中可查看当前启用的所有快捷键。

![](/hotkeys.gif){data-zoomable}

你可以分别在 [`menu.hotkeys`](settings/menu#快捷键)、[`tabbar.hotkeys`](settings/tabbar#快捷键)、[`page.hotkeys`](settings/page#快捷键) 中选择开启/关闭快捷键。

## 业务扩展快捷键

框架内建快捷键维护在：

* `apps/<app>/src/hotkeys/registry.ts`

业务自定义快捷键建议维护在：

* `apps/<app>/src/hotkeys/registry.extend.ts`

### 1. 定义业务快捷键

```ts
// apps/<app>/src/hotkeys/registry.extend.ts
import type { HotkeyBinding } from './types'

export const EXT_HOTKEY_ID = {
  demoOpen: 'demo.open',
} as const

export const extendGlobalHotkeyBindings: HotkeyBinding[] = [
  {
    id: EXT_HOTKEY_ID.demoOpen,
    keys: ['command+j', 'ctrl+j'],
    help: {
      group: 'global',
      titleKey: 'global.demoOpen',
      order: 90,
      displayKeys: {
        default: ['Ctrl', 'J'],
        mac: ['⌘', 'J'],
      },
    },
  },
]
```

`registry.ts` 会自动引入并聚合这些扩展定义。

### 2. 在业务组件中注册 handler

```ts
import { EXT_HOTKEY_ID } from '@/hotkeys/registry.extend'
import { useHotkeyBindings } from '@/hotkeys/useHotkeys'

useHotkeyBindings({
  [EXT_HOTKEY_ID.demoOpen]: () => {
    isShow.value = true
  },
})
```

### 3. 局部快捷键

如果快捷键只在某个弹窗或局部区域生效，也可以写在 `registry.extend.ts` 中：

```ts
export const EXT_HOTKEY_ID = {
  demoConfirm: 'demo.confirm',
  demoClose: 'demo.close',
} as const

export const extendScopedHotkeyBindings: HotkeyBinding[] = [
  {
    id: EXT_HOTKEY_ID.demoConfirm,
    keys: ['enter'],
  },
  {
    id: EXT_HOTKEY_ID.demoClose,
    keys: ['esc'],
  },
]
```

然后在组件中配合 `active` 使用：

```ts
useHotkeyBindings({
  [EXT_HOTKEY_ID.demoConfirm]: () => {
    handleConfirm()
  },
  [EXT_HOTKEY_ID.demoClose]: () => {
    isShow.value = false
  },
}, () => isShow.value)
```

### 约定

* 系统级快捷键放 `registry.ts` 中，请勿修改
* 业务级快捷键优先放 `registry.extend.ts`
* 不要在组件中直接写 `hotkeys(...)`
* 需要显示在帮助面板中的快捷键，记得补充 `help`
