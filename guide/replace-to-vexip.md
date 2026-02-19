---
url: /guide/replace-to-vexip.md
---
# 替换为 Vexip UI

由于框架默认使用的是 Element Plus 组件库，并且演示源码中大量示例也使用了 Element Plus，如果你需要使用 [Vexip UI](https://www.vexipui.com/zh-CN/)，请拉取框架源码分支，或者到 [Github Releases](https://github.com/fantastic-admin/basic/releases) 页面下载框架源码压缩包。

专业版用户也同样，请到专业版仓库下载框架源码。

## 安装

```sh
# 安装依赖
pnpm install

# 安装 Vexip UI
pnpm add vexip-ui
```

## 代码调整

::: details 基础版

修改 `/tsconfig.app.json` 文件

```json
{
  "compilerOptions": {
    ...
    "types": [
      ...
      "element-plus/global" // [!code --]
    ],
    ...
  }
}
```

整体修改 `/src/ui/provider/index.ts` 文件

```ts
import type { App } from 'vue'
import { install as vexipInstall } from 'vexip-ui'
import 'vexip-ui/css/index.css'
import 'vexip-ui/css/dark/index.css'

function install(app: App) {
  app.use(vexipInstall, {
    prefix: 'vxp',
  })
}

export default { install }
```

整体修改 `/src/ui/provider/index.vue` 文件

```vue
<script setup lang="ts">
import { zhCNLocale } from 'vexip-ui'
</script>

<template>
  <VxpConfigProvider :locale="zhCNLocale()">
    <slot />
  </VxpConfigProvider>
</template>
```

:::

::: details 专业版

修改 `/tsconfig.app.json` 文件

```json
{
  "compilerOptions": {
    ...
    "types": [
      ...
      "element-plus/global" // [!code --]
    ],
    ...
  }
}
```

整体修改 `/src/ui/provider/index.ts` 文件

```ts
import type { App } from 'vue'
import { install as vexipInstall, zhCNLocale, zhTWLocale, enUSLocale } from 'vexip-ui'
import 'vexip-ui/css/index.css'
import 'vexip-ui/css/dark/index.css'

function install(app: App) {
  app.use(vexipInstall, {
    prefix: 'vxp',
  })
}

// 此处的对象属性和 src/locales/index.ts 中的 messages 对象属性一一对应
const locales: Record<string, any> = {
  'zh-cn': zhCNLocale(),
  'zh-tw': zhTWLocale(),
  'en': enUSLocale(),
}

export default { install }
export { locales }
```

整体修改 `/src/ui/provider/index.vue` 文件

```vue
<script setup lang="ts">
import { locales } from './index'

const settingsStore = useSettingsStore()
</script>

<template>
  <VxpConfigProvider :locale="locales[settingsStore.lang]">
    <slot />
  </VxpConfigProvider>
</template>
```

删除相关文件

```
.
├─ plop-templates
│  └─ module // 标准模块模板基于 Element Plus 开发，需要删除
└─ src
   └─ components // 下列扩展组件基于 Element Plus 二次封装，需要删除
     └─ PcasCascader
```

:::

## 卸载

```sh
# 卸载 Element Plus
pnpm remove element-plus
```

## 完成

至此，你已经将框架中的 Element Plus 组件库替换为 Vexip UI 组件库，并且可以开始使用 Vexip UI 进行业务开发了。

## 示例

如果对上述的步骤还有不清楚的地方，可以访问[此仓库](https://github.com/fantastic-admin/vexip-example)查看示例源码，以及[此链接](https://fantastic-admin.hurui.me/vexip-example/)查看示例网站。

![](/ui-vexip.png){data-zoomable}
