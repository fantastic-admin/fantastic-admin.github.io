# 替换为 Arco Design Vue

由于框架默认使用的是 Element Plus 组件库，并且演示源码中大量示例也使用了 Element Plus，如果你需要使用 [Arco Design Vue](https://arco.design/vue/docs/start)，请拉取框架源码分支，或者到 [Github Releases](https://github.com/fantastic-admin/basic/releases) 页面下载框架源码压缩包。

专业版用户也同样，请到专业版仓库下载框架源码。

## 安装

```sh
# 安装依赖
pnpm install

# 安装 Arco Design Vue
pnpm add @arco-design/web-vue -D
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
      "element-plus/global", // [!code --]
      ...
    ],
    ...
  }
}
```

整体修改 `/src/ui/provider/index.ts` 文件

```ts
import type { App } from 'vue'
import ArcoVue from '@arco-design/web-vue'
import '@arco-design/web-vue/dist/arco.css'

function install(app: App) {
  app.use(ArcoVue)
}

export default { install }
```

整体修改 `/src/ui/provider/index.vue` 文件

```vue
<script setup lang="ts">
import useSettingsStore from '@/store/modules/settings'
import zhCN from '@arco-design/web-vue/es/locale/lang/zh-cn'

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
      document.body.removeAttribute('arco-theme')
      break
    case 'dark':
      document.body.setAttribute('arco-theme', 'dark')
      break
  }
}
</script>

<template>
  <AConfigProvider :locale="zhCN">
    <slot />
  </AConfigProvider>
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
import ArcoVue from '@arco-design/web-vue'
import '@arco-design/web-vue/dist/arco.css'

import zhCN from '@arco-design/web-vue/es/locale/lang/zh-CN'
import zhTW from '@arco-design/web-vue/es/locale/lang/zh-TW'
import en from '@arco-design/web-vue/es/locale/lang/en-US'

function install(app: App) {
  app.use(ArcoVue)
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
      document.body.removeAttribute('arco-theme')
      break
    case 'dark':
      document.body.setAttribute('arco-theme', 'dark')
      break
  }
}
</script>

<template>
  <AConfigProvider :locale="locales[settingsStore.lang]">
    <slot />
  </AConfigProvider>
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

至此，你已经将框架中的 Element Plus 组件库替换为 Arco Design Vue 组件库，并且可以开始使用 Arco Design Vue 进行业务开发了。

## 示例

如果对上述的步骤还有不清楚的地方，可以访问[此仓库](https://github.com/fantastic-admin/arco-example)查看示例源码，以及[此链接](https://fantastic-admin.hurui.me/arco-example/)查看示例网站。

![](/ui-arco.png){data-zoomable}
