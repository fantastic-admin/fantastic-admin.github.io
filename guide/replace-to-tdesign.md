# 替换为 TDesign

由于框架默认使用的是 Element Plus 组件库，并且演示源码中大量示例也使用了 Element Plus，如果你需要使用 [TDesign](https://tdesign.tencent.com/vue-next)，请拉取框架源码分支，或者到 [Github Releases](https://github.com/fantastic-admin/basic/releases) 页面下载框架源码压缩包。

专业版用户也同样，请到专业版仓库下载框架源码。

## 安装

```sh
# 安装依赖
pnpm install

# 安装 TDesign
pnpm add tdesign-vue-next
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
  },
  ...
  "include": [
    "src/**/*.ts",
    "src/**/*.d.ts",
    "src/**/*.tsx",
    "src/**/*.vue" // [!code --]
    "src/**/*.vue", // [!code ++]
    "node_modules/tdesign-vue-next/global.d.ts" // [!code ++]
  ]
}
```

整体修改 `/src/ui/provider/index.ts` 文件

```ts
import type { App } from 'vue'
import TDesign from 'tdesign-vue-next'
import 'tdesign-vue-next/es/style/index.css'

function install(app: App) {
  app.use(TDesign)
}

export default { install }
```

整体修改 `/src/ui/provider/index.vue` 文件

```vue
<script setup lang="ts">
import useSettingsStore from '@/store/modules/settings'
import { merge } from 'es-toolkit'
import zhCN from 'tdesign-vue-next/es/locale/zh_CN'

const settingsStore = useSettingsStore()

const prefersColorScheme = window.matchMedia('(prefers-color-scheme: dark)')
watch(() => settingsStore.settings.app.colorScheme, (colorScheme) => {
  if (colorScheme === '') {
    prefersColorScheme.addEventListener('change', updateTheme)
  }
  else {
    prefersColorScheme.removeEventListener('change', updateTheme)
  }
  nextTick(() => {
    updateTheme()
  })
}, {
  immediate: true,
})
function updateTheme() {
  switch (settingsStore.currentColorScheme) {
    case 'light':
      document.documentElement.removeAttribute('theme-mode')
      break
    case 'dark':
      document.documentElement.setAttribute('theme-mode', 'dark')
      break
  }
}
</script>

<template>
  <TConfigProvider :global-config="merge(zhCN, {})">
    <slot />
  </TConfigProvider>
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
     └─ ImageUpload
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
  },
  ...
  "include": [
    "src/**/*.ts",
    "src/**/*.d.ts",
    "src/**/*.tsx",
    "src/**/*.vue" // [!code --]
    "src/**/*.vue", // [!code ++]
    "node_modules/tdesign-vue-next/global.d.ts" // [!code ++]
  ]
}
```

整体修改 `/src/ui/provider/index.ts` 文件

```ts
import type { App } from 'vue'
import TDesign from 'tdesign-vue-next'
import 'tdesign-vue-next/es/style/index.css'

import zhCN from 'tdesign-vue-next/es/locale/zh_CN'
import zhTW from 'tdesign-vue-next/es/locale/zh_TW'
import en from 'tdesign-vue-next/es/locale/en_US'

function install(app: App) {
  app.use(TDesign)
}

// 此处的对象属性和 src/locales/index.ts 中的 messages 对象属性一一对应
const locales: Record<string, any> = {
  'zh-cn': zhCN,
  'zh-tw': zhTW,
  'en': en,
}

export default { install }
export { locales }
```

整体修改 `/src/ui/provider/index.vue` 文件

```vue
<script setup lang="ts">
import useSettingsStore from '@/store/modules/settings'
import { merge } from 'es-toolkit'
import { locales } from './index'

const settingsStore = useSettingsStore()

const prefersColorScheme = window.matchMedia('(prefers-color-scheme: dark)')
watch(() => settingsStore.settings.app.colorScheme, (colorScheme) => {
  if (colorScheme === '') {
    prefersColorScheme.addEventListener('change', updateTheme)
  }
  else {
    prefersColorScheme.removeEventListener('change', updateTheme)
  }
  nextTick(() => {
    updateTheme()
  })
}, {
  immediate: true,
})
function updateTheme() {
  switch (settingsStore.currentColorScheme) {
    case 'light':
      document.documentElement.removeAttribute('theme-mode')
      break
    case 'dark':
      document.documentElement.setAttribute('theme-mode', 'dark')
      break
  }
}
</script>

<template>
  <TConfigProvider :global-config="merge(locales[settingsStore.lang], {})">
    <slot />
  </TConfigProvider>
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
     ├─ ImagePreview
     ├─ ImagesUpload
     ├─ ImageUpload
     └─ PcasCascader
```

:::

## 卸载

```sh
# 卸载 Element Plus
pnpm remove element-plus
```

## 完成

至此，你已经将框架中的 Element Plus 组件库替换为 TDesign 组件库，并且可以开始使用 TDesign 进行业务开发了。

## 示例

如果对上述的步骤还有不清楚的地方，可以访问[此仓库](https://github.com/fantastic-admin/tdesign-example)查看示例源码，以及[此链接](https://fantastic-admin.hurui.me/tdesign-example/)查看示例网站。

![](/ui-tdesign.png){data-zoomable}
