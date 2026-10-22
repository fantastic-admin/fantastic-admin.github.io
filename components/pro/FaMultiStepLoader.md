---
url: /components/pro/FaMultiStepLoader.md
---
# FaMultiStepLoader 多步骤加载器

全屏多步骤加载器组件，适用于需要按顺序执行多个异步任务的场景。

## 使用场景

* 全屏多步骤加载器组件，适用于需要按顺序执行多个异步任务的场景。
* 常见用法：带回调函数、数据导入流程、系统初始化。

## Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| loading | 是否显示加载器 | `boolean` | `false` |
| steps | 步骤配置数组 | `Step[]` | `required` |
| preventClose | 是否禁止关闭 | `boolean` | `false` |

## Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| stateChange | 步骤变化时触发 | `(currentIndex: number)` |
| complete | 所有步骤完成时触发 | `-` |
| close | 关闭时触发 | `-` |
| error | 发生错误时触发 | `(error: Error, index: number)` |

## API

### Step 配置

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| text | 步骤显示文本 | `string` | `required` |
| afterText | 步骤完成后的文本 | `string` | `undefined` |
| name | 步骤返回数据对象名称 | `string` | `undefined` |
| action | 步骤执行的函数 | `(context: StepContext) => Promise<any>` | `undefined` |

## 注意事项

* 无特殊限制，建议按示例中的受控方式接入，并结合业务容器尺寸验证最终展示效果。
