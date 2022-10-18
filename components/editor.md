# Editor 富文本编辑器

基于 TinyMCE 的二次封装，复杂场景使用建议直接修改组件源码。

## Props

| 参数                 | 说明           | 类型    | 可选值 | 默认值 |
| :------------------- | :------------- | :------ | :----- | :----- |
| modelValue / v-model | 编辑器存放内容 | string  | -      | ''     |
| setting              | TinyMCE 配置   | object  | -      | {}     |
| disabled             | 是否禁用       | boolean | -      | false  |
