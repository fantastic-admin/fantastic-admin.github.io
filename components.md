---
url: /components.md
---
# 介绍

框架提供一系列的组件方便快速开发。

## 内建组件

为满足 UI 组件库可替换的特性，框架提供了一批内建组件。这些组件的设计仅满足于框架自身需求，如果在业务中使用并且无法满足业务需求，建议使用更为专业的 UI 组件库。

内建组件存放在 `packages/components/src/` 目录下，并通过 `@fantastic-admin/components` 及对应 resolver 提供自动引入。

:::tip 说明
如果内建组件有提供 `class` 属性，或者类似于 `class` 的属性，例如 `contentClass` ，意味着你可以通过 UnoCSS 提供的原子类来修改组件的默认样式，并且不会产生样式冲突。

其背后的原理是因为框架通过 `cn()` 函数来管理组件的 `class`：

```ts
import type { ClassValue } from 'clsx'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

:::

## 扩展组件

扩展组件也就是开发者自定义的组件，存放在 `apps/<app>/src/components/` 目录下，我们也建议开发者将自定义组件存放在该目录下，方便后续框架迁移升级。
