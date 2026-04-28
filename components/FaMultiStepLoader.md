---
url: /components/FaMultiStepLoader.md
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

## 示例

### 基础用法

```vue
<script setup lang="ts">
const loading = ref(false)
const steps = [
  { text: '正在初始化...' },
  { text: '正在加载数据...' },
  { text: '正在处理...' },
  { text: '完成！' },
]
</script>

<template>
  <FaButton @click="loading = true">
    开始处理
  </FaButton>

  <FaMultiStepLoader
    v-model:loading="loading"
    :steps="steps"
  />
</template>
```

### 带回调函数

```vue
<script setup lang="ts">
const steps = [
  {
    text: '连接服务器',
    afterText: '连接成功',
    action: async () => {
      // 执行异步操作
      await connectServer()
    }
  },
  {
    text: '上传文件',
    afterText: '上传完成',
    action: async () => {
      await uploadFile()
    }
  },
  {
    text: '处理数据',
    afterText: '处理完成',
    action: async () => {
      await processData()
    }
  },
]
</script>
```

### 数据导入流程

```vue
<script setup lang="ts">
const loading = ref(false)

const importSteps = [
  {
    text: '验证文件格式',
    afterText: '格式验证通过',
    action: async () => {
      const valid = await validateFile()
      if (!valid) throw new Error('文件格式不正确')
    }
  },
  {
    text: '解析文件内容',
    afterText: '解析完成',
    action: async () => {
      const data = await parseFile()
      return data
    }
  },
  {
    text: '保存到数据库',
    afterText: '保存成功',
    action: async (context) => {
      await saveToDatabase(context.data)
    }
  },
  {
    text: '生成统计报告',
    afterText: '报告已生成',
  },
]

function handleComplete() {
  faToast.success('导入完成！')
}

function handleError(error: Error, index: number) {
  faToast.error(`第 ${index + 1} 步失败：${error.message}`)
}
</script>

<template>
  <FaButton @click="loading = true">
    导入数据
  </FaButton>

  <FaMultiStepLoader
    v-model:loading="loading"
    :steps="importSteps"
    @complete="handleComplete"
    @error="handleError"
  />
</template>
```

### 系统初始化

```vue
<script setup lang="ts">
const loading = ref(true)

const initSteps = [
  { text: '检查系统环境', afterText: '环境检查完成' },
  { text: '加载配置文件', afterText: '配置已加载' },
  { text: '初始化数据库', afterText: '数据库就绪' },
  { text: '启动服务', afterText: '服务已启动' },
  { text: '欢迎使用系统' },
]
</script>

<template>
  <FaMultiStepLoader
    v-model:loading="loading"
    :steps="initSteps"
    :prevent-close="true"
  />
</template>
```

## 注意事项

* 无特殊限制，建议按示例中的受控方式接入，并结合业务容器尺寸验证最终展示效果。
