---
url: /components/pro/FaTimeAgo.md
---
# FaTimeAgo 相对时间

显示相对时间的组件，如"刚刚"、"5 分钟前"、"昨天"等。

## 使用场景

* 显示相对时间的组件，如"刚刚"、"5 分钟前"、"昨天"等。
* 常见用法：显示秒数、自定义消息、文章发布时间、评论列表。

## Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| date | 日期对象 | `Date` | `new Date()` |
| max | 最大单位 | `UseTimeAgoUnitNamesDefault` | `undefined` |
| messages | 自定义消息 | `UseTimeAgoMessages` | 中文默认配置 |
| showSecond | 是否显示秒 | `boolean` | `false` |
| updateInterval | 更新间隔 (ms) | `number` | `30000` |

## API

### 默认消息配置

```typescript
{
  justNow: '刚刚',
  past: n => `${n}前`,
  future: n => `${n}后`,
  month: (n, past) => n === 1 ? (past ? '上个月' : '下个月') : `${n} 月`,
  year: (n, past) => n === 1 ? (past ? '去年' : '明年') : `${n} 年`,
  day: (n, past) => n === 1 ? (past ? '昨天' : '明天') : `${n} 天`,
  week: (n, past) => n === 1 ? (past ? '上周' : '下周') : `${n} 周`,
  hour: n => `${n} 小时`,
  minute: n => `${n} 分钟`,
  second: n => `${n} 秒`,
  invalid: '',
}
```

## 注意事项

* 无特殊限制，建议按示例中的受控方式接入，并结合业务容器尺寸验证最终展示效果。
