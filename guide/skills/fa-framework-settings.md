---
url: /guide/skills/fa-framework-settings.md
---
# fa-framework-settings

## 适用场景

* 需要修改 `apps/<app>/src/settings.ts`
* 例如开关水印、锁屏、更新检查、国际化按钮、全屏按钮
* 例如切换菜单模式、标签栏风格、布局模式、主题模式
* 例如调整 `theme.sync`、`baseColorLight`、`baseColorDark`、`light`、`dark`

## 使用方式

直接说明以下信息即可：

* 目标应用，例如 `example`
* 要调整哪些设置项
* 期望效果

示例：

```text
在 example 应用里修改框架设置：
打开水印，菜单改为顶部模式，标签栏改成 fashion。
主题改为不同步，亮色基础色用 stone，暗色基础色用 taupe，暗色主题用 blue。
```

## 结果

通常会修改：

* `apps/<app>/src/settings.ts`

必要时会参考但不会直接修改：

* `packages/settings/types.ts`
* `packages/settings/src/default.ts`
* `packages/themes/index.ts`
