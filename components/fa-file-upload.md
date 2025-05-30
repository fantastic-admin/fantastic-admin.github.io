# FaFileUpload 文件上传 <Badge text="v5.6.0" />

## Props

| 属性名      | 说明                                  | 类型                                           | 默认值            |
| ----------- | ------------------------------------- | ---------------------------------------------- | ----------------- |
| modelValue  | 绑定值                                | `FileItem[]`                                     | -                 |
| action      | 上传地址                              | `string`                                       | -                 |
| method      | 上传方法                              | `string`                                       | `'post'`          |
| headers     | 请求头                                | `Headers \| Record<string, any>`               | -                 |
| data        | 请求数据                              | `Record<string, any>`                          | -                 |
| name        | 文件名                                | `string`                                       | `'file'`          |
| afterUpload | 上传成功后回调                        | `(response: any) => string \| Promise<string>` | -                 |
| multiple    | 是否多选                              | `boolean`                                      | `false`           |
| ext         | 文件扩展名                            | `string[]`                                     | -                 |
| max         | 最大上传数量，为0则不限制             | `number`                                       | `1`               |
| size        | 最大上传大小，单位为字节，为0则不限制 | `number`                                       | `5 * 1024 * 1024` |
| hideTips    | 隐藏提示                              | `boolean`                                      | `false`           |
| disabled    | 是否禁用                              | `boolean`                                      | `false`           |

```ts
interface FileItem {
  name: string
  size: number
  url?: string
  status?: 'uploading' | 'success' | 'error'
  progress?: number
  file?: File
}
```

## Events

| 事件名    | 说明     | 参数                                          |
| --------- | -------- | --------------------------------------------- |
| onSuccess | 上传成功 | `(response: any, file: File) => void`         |
| onClick   | 点击     | `(fileItem: FileItem, index: number) => void` |
