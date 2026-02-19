---
url: /components/fa-modal.md
---
# FaModal 弹窗

## Props

| 属性名                                 | 说明                              | 类型                                                                   | 默认值   |
| -------------------------------------- | --------------------------------- | ---------------------------------------------------------------------- | -------- |
| modelValue(v-model)                    | 是否显示                          | `boolean`                                                              | -        |
| zIndex          | 层级                              | `number`                                                               | `2000`   |
| title                                  | 标题                              | `string`                                                               | -        |
| description                            | 描述                              | `string`                                                               | -        |
| icon                                   | 图标                              | `'info' \| 'success' \| 'warning' \| 'error'`                          | -        |
| loading                                | 是否加载中                        | `boolean`                                                              | -        |
| closable                               | 是否显示关闭按钮                  | `boolean`                                                              | `true`   |
| maximize                               | 是否最大化                        | `boolean`                                                              | `false`  |
| maximizable                            | 是否显示最大化按钮                | `boolean`                                                              | `false`  |
| draggable                              | 是否可拖动                        | `boolean`                                                              | `false`  |
| center                                 | 是否内容居中                      | `boolean`                                                              | `false`  |
| border                                 | 是否显示边框                      | `boolean`                                                              | `true`   |
| alignCenter                            | 是否窗口居中                      | `boolean`                                                              | `false`  |
| overlay                                | 是否显示遮罩                      | `boolean`                                                              | `true`   |
| overlayBlur                            | 是否开启遮罩模糊                  | `boolean`                                                              | `false`  |
| showConfirmButton                      | 是否显示确认按钮                  | `boolean`                                                              | `true`   |
| showCancelButton                       | 是否显示取消按钮                  | `boolean`                                                              | `false`  |
| confirmButtonText                      | 确认按钮文本                      | `string`                                                               | `'确认'` |
| cancelButtonText                       | 取消按钮文本                      | `string`                                                               | `'取消'` |
| confirmButtonDisabled                  | 确认按钮是否禁用                  | `boolean`                                                              | `false`  |
| confirmButtonLoading                   | 确认按钮是否加载中                | `boolean`                                                              | `false`  |
| beforeClose     | 关闭前的回调，会暂停 Modal 的关闭 | `(action: 'confirm' \| 'cancel' \| 'close', done: () => void) => void` | -        |
| header                                 | 是否显示头部内容                  | `boolean`                                                              | `true`   |
| footer                                 | 是否显示底部内容                  | `boolean`                                                              | `true`   |
| closeOnClickOverlay                    | 是否点击遮罩关闭                  | `boolean`                                                              | `true`   |
| closeOnPressEscape                     | 是否按下 ESC 关闭                 | `boolean`                                                              | `true`   |
| destroyOnClose  | 是否在关闭时销毁                  | `boolean`                                                              | `true`   |
| class                                  | 自定义类名                        | `string`                                                               | -        |
| headerClass                            | 头部自定义类名                    | `string`                                                               | -        |
| contentClass                           | 内容自定义类名                    | `string`                                                               | -        |
| footerClass                            | 底部自定义类名                    | `string`                                                               | -        |

## Slots

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |
| header  | 头部内容       |
| footer  | 底部内容       |

## Events

| 事件名  | 说明               | 回调参数     |
| ------- | ------------------ | ------------ |
| open    | 打开时触发         | `() => void` |
| opened  | 打开动画结束时触发 | `() => void` |
| close   | 关闭时触发         | `() => void` |
| closed  | 关闭动画结束时触发 | `() => void` |
| confirm | 确认时触发         | `() => void` |
| cancel  | 取消时触发         | `() => void` |
