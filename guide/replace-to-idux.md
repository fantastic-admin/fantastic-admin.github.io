# 替换为 iDux

::: warning 注意
v4.0 之前的版本不支持替换组件库，本文适用于 v4.3.0 及之后的版本。

版本号 ≥ v4.0 且 < v4.3.0 请查看[历史文档](https://github.com/fantastic-admin/fantastic-admin.github.io/blob/01be97f74f8ae7b14ccdec108941b5fd5b58bd28/guide/replace-to-idux.md)。
:::

由于框架默认使用的是 Element Plus 组件库，并且演示源码中大量示例也使用了 Element Plus，如果你需要使用 [iDux](https://idux.site/)，请拉取框架源码分支，或者到 [Github Releases](https://github.com/fantastic-admin/basic/releases) 页面下载框架源码压缩包。

专业版用户也同样，请到专业版仓库下载框架源码。

## 安装

```sh
# 安装依赖
pnpm install

# 安装 iDux
pnpm add @idux/cdk @idux/components
```

## 代码调整

::: details 基础版

修改 `/tsconfig.json` 文件

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

整体修改 `/src/ui-provider/index.ts` 文件

```ts
import type { App } from 'vue'
import IduxCdk from '@idux/cdk'
import IduxComponents from '@idux/components'
import { IDUX_ICON_DEPENDENCIES, addIconDefinitions } from '@idux/components/icon'
import { createGlobalConfig } from '@idux/components/config'
import { zhCN } from '@idux/components/locales'
import '@idux/components/index.full.css'

function install(app: App) {
  addIconDefinitions(IDUX_ICON_DEPENDENCIES)
  app.use(IduxCdk).use(IduxComponents).use(createGlobalConfig({ locale: zhCN }))
}

export default { install }
```

整体修改 `/src/ui-provider/index.vue` 文件

```vue
<script setup lang="ts">
import useSettingsStore from '@/store/modules/settings'

const settingsStore = useSettingsStore()
</script>

<template>
  <IxThemeProvider :preset-theme="settingsStore.currentColorScheme === 'dark' ? 'dark' : 'default'">
    <IxMessageProvider>
      <slot />
    </IxMessageProvider>
  </IxThemeProvider>
</template>
```

删除相关文件

```
.
└─ src
   └─ components // 下列扩展组件基于 Element Plus 二次封装，需要删除
     ├─ FileUpload
     ├─ ImagePreview
     ├─ ImagesUpload
     ├─ ImageUpload
     └─ PcasCascader
```

:::

::: details 专业版

修改 `/tsconfig.json` 文件

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

整体修改 `/src/ui-provider/index.ts` 文件

```ts
import type { App } from 'vue'
import IduxCdk from '@idux/cdk'
import IduxComponents from '@idux/components'
import { IDUX_ICON_DEPENDENCIES, addIconDefinitions } from '@idux/components/icon'
import { enUS, zhCN } from '@idux/components/locales'
import '@idux/components/index.full.css'

// 此处的对象属性和 src/locales/index.ts 中的 messages 对象属性一一对应
const locales: Record<string, any> = {
  'zh-cn': zhCN,
  'zh-tw': zhCN,
  'en': enUS,
}

function install(app: App) {
  addIconDefinitions(IDUX_ICON_DEPENDENCIES)
  app.use(IduxCdk).use(IduxComponents)
}

export default { install }
```

整体修改 `/src/ui-provider/index.vue` 文件

```vue
<script setup lang="ts">
import { useGlobalConfig } from '@idux/components/config'
import { locales } from './index'
import useSettingsStore from '@/store/modules/settings'

const settingsStore = useSettingsStore()

const [, setLocale] = useGlobalConfig('locale', locales[settingsStore.lang])
watch(() => settingsStore.lang, val => setLocale(locales[settingsStore.lang]))
</script>

<template>
  <IxThemeProvider :preset-theme="settingsStore.currentColorScheme === 'dark' ? 'dark' : 'default'">
    <IxMessageProvider>
      <slot />
    </IxMessageProvider>
  </IxThemeProvider>
</template>
```

删除相关文件

```
.
├─ plop-templates
│  └─ module // 标准模块模板基于 Element Plus 开发，需要删除
└─ src
   └─ components // 下列扩展组件基于 Element Plus 二次封装，需要删除
     ├─ FileUpload
     ├─ IconPicker
     ├─ ImagePreview
     ├─ ImagesUpload
     ├─ ImageUpload
     └─ PcasCascader
```

:::

## 修改登录页

由于登录页使用了 Element Plus 组件，并且删除会导致框架无法正常使用，所以此处需要开发者自行修改或者重新制作登录页，或者也可以参考下方示例中已经修改好的登录页。

## 卸载

```sh
# 卸载 Element Plus
pnpm remove element-plus
```

## 完成

至此，你已经将框架中的 Element Plus 组件库替换为 iDux 组件库，并且可以开始使用 iDux 进行业务开发了。

## 示例

如果对上述的步骤还有不清楚的地方，可以访问[此仓库](https://github.com/fantastic-admin/idux-example)查看示例源码，以及[此链接](https://fantastic-admin.github.io/idux-example/)查看示例网站。

![](/ui-idux.png){data-zoomable}
