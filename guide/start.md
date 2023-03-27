# 开始

做好准备工作后，请在项目根目录下依次执行以下命令：

```sh
# 安装依赖
# 注意，必须使用 pnpm 安装依赖，请勿使用 npm 或 yarn 安装依赖
pnpm install

# 运行
pnpm run dev
```

运行成功后，会自动访问页面，默认地址为 `http://localhost:9000`

::: warning 报错
安装依赖时提示 404 ，或者安装结束后，运行时提示「 'vite' 不是内部或外部命令，也不是可运行的程序或批处理文件 」，都些都是依赖未安装成功导致的。可以尝试执行 `pnpm config set registry https://registry.npmmirror.com/` 切换为国内 npmmirror 源（也可以使用 [nrm](https://github.com/Pana/nrm) 一键切换源），然后删除根目录下 `/node_modules` 文件夹并重新安装依赖。

如果依旧无法运行（基本不太可能），可尝试删除根目录下 `/node_modules` 文件夹与 `pnpm-lock.yaml` 文件后，再删除 `package.json` 中 `"preinstall": "npx only-allow pnpm"` 这句脚本，最后使用 `npm / yarn` 进行安装依赖。但需要清楚一点，这样操作后，将无法与官方环境锁定的依赖包版本保持一致，可能会出现无法预知的问题，非必要情况下，请勿使用该方案。
:::