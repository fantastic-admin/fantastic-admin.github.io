---
url: /components/fa-dropdown.md
---
# FaDropdown 下拉菜单

## Props

| 属性名           | 说明     | 类型                                                                                          | 默认值     |
| ---------------- | -------- | --------------------------------------------------------------------------------------------- | ---------- |
| align            | 对齐方式 | `'start' \| 'center' \| 'end'`                                                                | `'center'` |
| alignOffset      | 对齐偏移 | `number`                                                                                      | `0`        |
| side             | 方向     | `'top' \| 'right' \| 'bottom' \| 'left'`                                                      | `'top'`    |
| sideOffset       | 方向偏移 | `number`                                                                                      | `0`        |
| collisionPadding | 碰撞填充 | `number \| Partial<Record<'top' \| 'right' \| 'bottom' \| 'left', number>>`                   | `0`        |
| items            | 菜单项   | `{label: string, icon?: string, disabled?: boolean, hide?: boolean, handle?: () => void}[][]` | -          |
