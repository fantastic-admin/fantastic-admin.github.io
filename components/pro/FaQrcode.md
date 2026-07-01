---
url: /components/pro/FaQrcode.md
---
# FaQrcode 二维码

生成可自定义样式和带 Logo 的二维码，支持状态显示和下载功能。

## 使用场景

* 网站/小程序分享二维码
* 支付二维码
* 名片二维码
* 下载链接二维码
* 活动报名二维码

## Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `value` | `string` | - | **必需**。二维码内容 |
| `size` | `number` | `200` | 二维码尺寸 (px) |
| `errorCorrectionLevel` | `'L' \| 'M' \| 'Q' \| 'H'` | `'H'` | 容错级别，越高可添加的 Logo 越大 |
| `logo` | `string` | - | Logo 图片 URL（支持本地和网络图片） |
| `logoSize` | `number` | `0.2` | Logo 相对二维码的比例（0-1） |
| `logoBackgroundColor` | `string` | `'#ffffff'` | Logo 背景颜色 |
| `foregroundColor` | `string` | `'#000000'` | 二维码前景色 |
| `backgroundColor` | `string` | `'#ffffff'` | 二维码背景色 |
| `status` | `string` | - | 状态：`loading` / `expired` / `scanned` / `error` 等 |
| `class` | `HTMLAttributes['class']` | - | 自定义 CSS 类 |

## Slots

| 名称 | 说明 |
|------|------|
| `statusRender` | 自定义状态渲染，slot props: `{ status: string }` |

## Events

| 事件名 | 参数 | 说明 |
|--------|------|------|
| `statusRender` | `status: string` | 状态变化时触发 |

## Exposed Methods

| 方法名 | 参数 | 说明 |
|--------|------|------|
| `download` | `filename?: string` | 下载二维码图片，默认文件名 `qrcode.png` |

## 注意事项

1. **容错级别选择**：
   * 添加 Logo 时建议使用 `'H'`（最高容错）
   * 无 Logo 时可使用 `'M'` 或 `'Q'`

2. **Logo 图片**：
   * 支持本地导入和 URL
   * 网络图片需确保跨域可访问
   * Logo 不宜过大，建议不超过二维码的 30%

3. **尺寸设置**：
   * `size` 控制显示尺寸
   * 内部使用 400px 固定分辨率生成，保证清晰度

4. **状态遮罩**：
   * 设置 `status` 后会显示半透明遮罩层
   * 默认仅 `loading` 状态有旋转动画
