---
url: /components/fa-multi-step-loader.md
---
# FaMultiStepLoader 多步骤加载器 &#x20;

## Props

| 属性名       | 说明         | 类型      | 默认值  |
| ------------ | ------------ | --------- | ------- |
| loading      | 是否加载中   | `boolean` | `false` |
| steps        | 步骤数组     | `Step[]`  | `[]`    |
| preventClose | 是否阻止关闭 | `boolean` | `false` |

```ts
interface Step {
  text: string // 步骤文本
  afterText?: string // 步骤完成后的文本
  name?: string // 步骤返回数据对象名称
  action?: (context: StepContext) => Promise<any> // 步骤执行的函数
}
```
