---
url: /components/pro/FaIconPicker.md
---
# FaIconPicker 图标选择器

从 Iconify 图标库中选择图标的选择器组件，支持搜索和分类浏览。

## 使用场景

* 菜单图标配置
* 按钮图标选择
* 表单字段图标
* 标签页图标
* 导航图标设置
* 状态图标配置

## Props

### Model

| 名称 | 类型 | 说明 |
|------|------|------|
| `modelValue` | `string` | 选中的图标名称 |
| `icons` | `IconPickerCollection[]` | 图标集合数据 |

## Slots

| 名称 | 说明 |
|------|------|
| `default` | 自定义触发器，slot props: `{ icon: string }` |

## 注意事项

1. **图标格式**：选中的图标格式为 `前缀：图标名`，如 `i-lucide:home`
2. **图标来源**：图标来自项目配置的 Iconify 图标集
3. **搜索功能**：支持在弹窗内搜索图标
4. **分类浏览**：左侧显示图标集分类，右侧显示具体图标
5. **分页加载**：每个图标集分页显示，支持翻页

## 注意

使用该组件前，先执行 `pnpm run -F <app> generate:icons` 命令，并按照指引完成操作后，图标选择器才能正常显示需要的图标集。
