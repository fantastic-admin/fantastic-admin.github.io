# FaImageUpload 图片上传 <Badge text="v5.6.0" />

## Props

| 属性名      | 说明                                  | 类型                                           | 默认值            |
| ----------- | ------------------------------------- | ---------------------------------------------- | ----------------- |
| modelValue  | 绑定值                                | `string[]`                                     | -                 |
| action      | 上传地址                              | `string`                                       | -                 |
| method      | 上传方法                              | `string`                                       | `'post'`          |
| headers     | 请求头                                | `Headers \| Record<string, any>`               | -                 |
| data        | 请求数据                              | `Record<string, any>`                          | -                 |
| name        | 文件名                                | `string`                                       | `'file'`          |
| afterUpload | 上传成功后回调                        | `(response: any) => string \| Promise<string>` | -                 |
| multiple    | 是否多选                              | `boolean`                                      | `false`           |
| ext         | 文件扩展名                            | `string[]`                                     | -                 |
| max         | 最大上传数量，为0则不限制             | `number`                                       | `1`               |
| width       | 图片宽度                              | `number`                                       | `100`             |
| height      | 图片高度                              | `number`                                       | `100`             |
| dimension   | 图片建议尺寸                          | `{ width: number; height: number }`            | -                 |
| size        | 最大上传大小，单位为字节，为0则不限制 | `number`                                       | `5 * 1024 * 1024` |
| hideTips    | 隐藏提示                              | `boolean`                                      | `false`           |
| disabled    | 是否禁用                              | `boolean`                                      | `false`           |

## Events

| 事件名    | 说明     | 参数                                  |
| --------- | -------- | ------------------------------------- |
| onSuccess | 上传成功 | `(response: any, file: File) => void` |

## Slots

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |