# 构建与预览

## 构建

项目开发完成之后，可以执行 `pnpm run build` 命令进行构建，构建打包成功之后，会在根目录生成 dist 文件夹，里面就是构建打包好的文件。

如果是需要构建测试环境，则执行 `pnpm run build:test` 命令，对应会在根目录生成 dist-test 文件夹。

## 预览

生成好的 dist 文件夹一般需要部署至服务器才算部署发布成功，但为了保证构建出来的文件能正常运行，开发者通常希望能在本地先预览一下，可执行 `pnpm run serve` 或 `pnpm run serve:test` 命令预览不同环境构建出的文件夹。

## 压缩

在环境配置文件里设置 `VITE_BUILD_COMPRESS` 即可在构建时生成 `.gz` 或 `.br` 文件。

```
# 单独开启 gzip
VITE_BUILD_COMPRESS = gzip

# 单独开启 brotli ，brotli 是比 gzip 压缩率更高的算法
VITE_BUILD_COMPRESS = brotli

# 或者也可以都开启，两者可以共存
VITE_BUILD_COMPRESS = gzip,brotli

```

两者均需要 nginx 安装指定模块并开启后才会生效。

## 其它设置

在环境配置文件里除了可以设置压缩选项，还可设置：

```
# 是否在打包时生成 sourcemap
VITE_BUILD_SOURCEMAP = true
# 是否在打包时删除 console 代码
VITE_BUILD_DROP_CONSOLE = true
```

### 生成 PWA 应用 <sup class="pro-badge" />

在环境配置文件里开启 PWA 支持。

```
# 是否在打包时候生成PWA
VITE_BUILD_PWA = true
```

然后分别在 `/src/main.js` 和 `/src/App.vue` 里取消注释，引入 PWA 所需的相关文件。

<!-- TODO 等 vitepress 更新后，使用 code group 代替 -->

```js
// PWA
import './pwa'
```

```vue {2,8}
<script setup>
import ReloadPrompt from '@/pwa/reloadPrompt.vue'
</script>

<template>
    <el-config-provider :locale="locales[$store.state.settings.defaultLang]">
        <RouterView />
        <ReloadPrompt />
    </el-config-provider>
</template>
```

最后在 `/vite/plugins/pwa.js` 文件里修改 manifest 信息，对应的图片目录为 `/public/pwa_icons/` 。

当准备好这一切并构建部署到生产环境后，你就可以在浏览器的地址栏里看到多了一个小图标，点击后会提示你可以安装应用。

<ZoomImg src="/pwa1.png" />

并且以后再次构建部署，访问地址时，如果浏览器存在缓存，导致页面没有载入最新的资源，在页面右下角还会出现相关提示框。

<ZoomImg src="/pwa2.png" />