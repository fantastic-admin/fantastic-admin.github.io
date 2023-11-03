# 替换为 Vexip UI

::: warning 注意
本文适用于 v4.0 及之后的版本，v4.0 之前的版本不支持替换组件库。
:::

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

### 基础版

修改 `/tsconfig.json` 文件

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

修改 `/src/main.ts` 文件

```ts
...
import ElementPlus from 'element-plus' // [!code --]
import 'element-plus/dist/index.css' // [!code --]
import 'element-plus/theme-chalk/dark/css-vars.css' // [!code --]
import { install } from 'vexip-ui' // [!code ++]
import 'vexip-ui/css/index.css' // [!code ++]
import 'vexip-ui/css/dark/index.css' // [!code ++]
...
app.use(ElementPlus) // [!code --]
app.use(install, { // [!code ++]
  prefix: 'vxp', // [!code ++]
}) // [!code ++]
...
```

修改 `/src/App.vue` 文件

```vue
<script setup lang="ts">
...
import elementPlusLocaleZhCN from 'element-plus/es/locale/lang/zh-cn.mjs' // [!code --]
import { zhCNLocale } from 'vexip-ui' // [!code ++]
...
</script>

<template>
  <ElConfigProvider :locale="elementPlusLocaleZhCN" :button="{ autoInsertSpace: true }"> // [!code --]
  <VxpConfigProvider :locale="zhCNLocale()"> // [!code ++]
    ...
  </VxpConfigProvider> // [!code ++]
  </ElConfigProvider> // [!code --]
</template>
```

### 专业版

修改 `/tsconfig.json` 文件

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

修改 `/src/main.ts` 文件

```ts
...
import ElementPlus from 'element-plus' // [!code --]
import 'element-plus/dist/index.css' // [!code --]
import 'element-plus/theme-chalk/dark/css-vars.css' // [!code --]
import { install } from 'vexip-ui' // [!code ++]
import 'vexip-ui/css/index.css' // [!code ++]
import 'vexip-ui/css/dark/index.css' // [!code ++]
...
app.use(ElementPlus) // [!code --]
app.use(install, { // [!code ++]
  prefix: 'vxp', // [!code ++]
}) // [!code ++]
...
```

修改 `/src/App.vue` 文件

```vue
<template>
  <ElConfigProvider :locale="UILocales[settingsStore.settings.app.defaultLang].ui" :button="{ autoInsertSpace: true }"> // [!code --]
  <VxpConfigProvider :locale="UILocales[settingsStore.settings.app.defaultLang].ui"> // [!code ++]
    ...
  </VxpConfigProvider> // [!code ++]
  </ElConfigProvider> // [!code --]
</template>
```

修改 `/src/locales/index.ts` 文件

```ts
...
import elementPlusLocaleZhCN from 'element-plus/es/locale/lang/zh-cn.mjs' // [!code --]
import elementPlusLocaleZhTW from 'element-plus/es/locale/lang/zh-tw.mjs' // [!code --]
import elementPlusLocaleEn from 'element-plus/es/locale/lang/en.mjs' // [!code --]
import { zhCNLocale, zhTWLocale, enUSLocale } from 'vexip-ui' // [!code ++]
...
function getUILocales() {
  const locales: {
    [key: string]: any
  } = {}
  for (const key in messages) {
    locales[key] = {}
    switch (key) {
      case 'zh-cn':
        Object.assign(locales[key], { labelName: '中文(简体)' }, { ui: elementPlusLocaleZhCN }) // [!code --]
        Object.assign(locales[key], { labelName: '中文(简体)' }, { ui: zhCNLocale() }) // [!code ++]
        break
      case 'zh-tw':
        Object.assign(locales[key], { labelName: '中文(繁體)' }, { ui: elementPlusLocaleZhTW }) // [!code --]
        Object.assign(locales[key], { labelName: '中文(繁體)' }, { ui: zhTWLocale() }) // [!code ++]
        break
      case 'en':
        Object.assign(locales[key], { labelName: 'English' }, { ui: elementPlusLocaleEn }) // [!code --]
        Object.assign(locales[key], { labelName: 'English' }, { ui: enUSLocale() }) // [!code ++]
        break
    }
  }
  return locales
}
...
```

## 删除文件

### 基础版

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

### 专业版

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

## 修改登录页

由于登录页使用了 Element Plus 组件，并且删除会导致框架无法正常使用，所以此处需要开发者自行修改或者重新制作登录页。

## 卸载

```sh
# 卸载 Element Plus
pnpm remove element-plus
```

## 完成

至此，你已经将框架中的 Element Plus 组件库替换为 Vexip UI 组件库，并且可以开始使用 Vexip UI 进行业务开发了。

## 示例

如果对上述的步骤还有不清楚的地方，可以访问[此仓库](https://github.com/fantastic-admin/vexip-example)查看示例源码，以及[此链接](https://fantastic-admin.github.io/vexip-example/)查看示例网站。

![](/ui-vexip.png){data-zoomable}