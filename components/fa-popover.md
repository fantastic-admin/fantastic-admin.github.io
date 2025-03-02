# FaPopover 浮动面板

## Props

| 属性名                       | 说明             | 类型                                                                        | 默认值     |
| ---------------------------- | ---------------- | --------------------------------------------------------------------------- | ---------- |
| open <Badge text="v5.1.0" /> | 手动控制是否打开 | `boolean`                                                                   | -          |
| align                        | 对齐方式         | `'start' \| 'center' \| 'end'`                                              | `'center'` |
| alignOffset                  | 对齐偏移         | `number`                                                                    | `0`        |
| side                         | 方向             | `'top' \| 'right' \| 'bottom' \| 'left'`                                    | `'top'`    |
| sideOffset                   | 方向偏移         | `number`                                                                    | `0`        |
| collisionPadding             | 碰撞填充         | `number \| Partial<Record<'top' \| 'right' \| 'bottom' \| 'left', number>>` | `0`        |
| class                        | 自定义类名       | `string`                                                                    | -          |

## Slots

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |
| panel   | 面板内容       |
