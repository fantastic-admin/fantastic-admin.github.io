# 代码规范

## 准备

代码规范主要基于 ESLint 和 stylelint 运行，所以为保证代码风格统一，请统一使用 [VS Code](https://code.visualstudio.com/) 做为开发工具，并安装以下扩展：

- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) 安装完后需切换到 v0.87.6 版本，最新版无法使用

安装完后在 `settings.json` 中增加如下配置：

```json
"editor.codeActionsOnSave": {
	"source.fixAll.eslint": true,
	"source.fixAll.stylelint": true
}
```

完成以上配置，并确保项目已安装好依赖，便可查看最终效果：在保存代码时，会自动对当前文件进行代码格式化操作。

## 配置

配置文件主要有 3 处，分别为 IDE 配置（`.editorconfig`）、ESLint 配置（`.eslintrc.js` 和 `.eslintignore`）、StyleLint 配置（`.stylelintrc` 和 `.stylelintignore`）。

以代码缩进举例，框架默认是以 4 空格进行缩进，如果要调整为 2 空格，则需要在 `.editorconfig` 里修改：

```
indent_size = 2
```

在 `.eslintrc.js` 里修改：

```
'indent': [2, 2, {
    'SwitchCase': 1
}],

...

'vue/html-indent': [2, 2],

...

'vue/script-indent': [2, 2, {
    'switchCase': 1
}]
```

在 `.stylelintrc` 里修改：

```
"indentation": 2
```

修改完毕后，再分别执行下面两句命令：

```bash
yarn run lint
yarn run stylelint
```

该操作会将代码进行一次格式校验，如果规则支持自动修复，则会将不符合规则的代码自动进行格式化。以上面的例子，当缩进规则调整后，我们无需手动去每个文件调整，通过命令可以自动应用新的缩进规则。