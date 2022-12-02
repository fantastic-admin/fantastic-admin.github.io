# 动态标题

让网页标题显示路由配置的 `meta.title` 字段。

## 使用

在应用配置中设置：

```ts {2-4}
const globalSettings: Settings.all = {
  app: {
    enableDynamicTitle: true,
  },
}
```

效果如下：

<ZoomImg src="/dynamic-title.gif" />

## 自定义标题

有时候，我们需要在某个页面显示自定义的标题，而不是 `meta.title` 字段，比如在编辑用户的页面，显示当前用户的名称。

```ts
import useSettingsStore from '@/store/modules/settings'
const settingsStore = useSettingsStore()

onMounted(() => {
  settingsStore.setTitle('自定义标题')
})
```