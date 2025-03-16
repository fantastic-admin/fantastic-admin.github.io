# FaSlider 滑块 <Badge text="v5.2.0" />

## Props

| 属性名              | 说明                                   | 类型                         | 默认值         |
| ------------------- | -------------------------------------- | ---------------------------- | -------------- |
| modelValue(v-model) | 值                                     | `number[]`                   | -              |
| defaultValue        | 默认值，当您不需要控制滑块的状态时使用 | `number[]`                   | `[0]`          |
| disabled            | 是否禁用                               | `boolean`                    | `false`        |
| inverted            | 是否反转                               | `boolean`                    | `false`        |
| max                 | 最大值                                 | `number`                     | `100`          |
| min                 | 最小值                                 | `number`                     | `0`            |
| step                | 步长                                   | `number`                     | `1`            |
| orientation         | 方向                                   | `'horizontal' \| 'vertical'` | `'horizontal'` |
| thumbAlignment      | 滑块对齐方式                           | `'contain' \| 'overflow'`    | `'contain'`    |
| class               | 自定义类名                             | `string`                     | -              |
