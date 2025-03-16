# 替换为 Naive UI

由于框架默认使用的是 Element Plus 组件库，并且演示源码中大量示例也使用了 Element Plus，如果你需要使用 [Naive UI](https://www.naiveui.com/zh-CN)，请拉取框架源码分支，或者到 [Github Releases](https://github.com/fantastic-admin/basic/releases) 页面下载框架源码压缩包。

专业版用户也同样，请到专业版仓库下载框架源码。

## 安装

```sh
# 安装依赖
pnpm install

# 安装 Naive UI
pnpm add naive-ui -D
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
      "naive-ui/volar" // [!code ++]
    ],
    ...
  }
}
```

整体修改 `/src/ui/provider/index.ts` 文件

```ts
import type { App } from 'vue'
import naive from 'naive-ui'

function install(app: App) {
  app.use(naive)
}

export default { install }
```

整体修改 `/src/ui/provider/index.vue` 文件

```vue
<script setup lang="ts">
import useSettingsStore from '@/store/modules/settings'
import { darkTheme, dateZhCN, zhCN } from 'naive-ui'

const settingsStore = useSettingsStore()
</script>

<template>
  <NConfigProvider :locale="zhCN" :date-locale="dateZhCN" :theme="settingsStore.currentColorScheme === 'dark' ? darkTheme : undefined" style="height: 100%;">
    <NMessageProvider>
      <slot />
      <NGlobalStyle />
    </NMessageProvider>
  </NConfigProvider>
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
      "naive-ui/volar" // [!code ++]
    ],
    ...
  }
}
```

整体修改 `/src/ui/provider/index.ts` 文件

```ts
import type { App } from 'vue'
import naive, { dateEnUS, dateZhCN, dateZhTW, enUS, zhCN, zhTW } from 'naive-ui'

function install(app: App) {
  app.use(naive)
}

// 此处的对象属性和 src/locales/index.ts 中的 messages 对象属性一一对应
const locales: Record<string, any> = {
  'zh-cn': {
    ui: zhCN,
    date: dateZhCN,
  },
  'zh-tw': {
    ui: zhTW,
    date: dateZhTW,
  },
  'en': {
    ui: enUS,
    date: dateEnUS,
  },
}

export default { install }
export { locales }
```

整体修改 `/src/ui/provider/index.vue` 文件

```vue
<script setup lang="ts">
import useSettingsStore from '@/store/modules/settings'
import { darkTheme } from 'naive-ui'
import { locales } from './index'

const settingsStore = useSettingsStore()
</script>

<template>
  <NConfigProvider :locale="locales[settingsStore.lang].ui" :date-locale="locales[settingsStore.lang].date" :theme="settingsStore.currentColorScheme === 'dark' ? darkTheme : undefined" style="height: 100%;">
    <NMessageProvider>
      <slot />
      <NGlobalStyle />
    </NMessageProvider>
  </NConfigProvider>
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

至此，你已经将框架中的 Element Plus 组件库替换为 Naive UI 组件库，并且可以开始使用 Naive UI 进行业务开发了。

## 示例

如果对上述的步骤还有不清楚的地方，可以访问[此仓库](https://github.com/fantastic-admin/naive-example)查看示例源码，以及[此链接](https://fantastic-admin.hurui.me/naive-example/)查看示例网站。

![](/ui-naive.png){data-zoomable}
