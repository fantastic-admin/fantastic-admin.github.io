# FaAnimatedBeam 动画光束 <Badge type="pro" text="专业版" /> <Badge text="v5.2.0" />

## Props

| 属性名             | 说明                       | 类型          | 默认值      |
| ------------------ | -------------------------- | ------------- | ----------- |
| containerRef       | 容器元素                   | `HTMLElement` | -           |
| fromRef            | 起始元素                   | `HTMLElement` | -           |
| toRef              | 结束元素                   | `HTMLElement` | -           |
| curvature          | 曲率，数值越大，路径越弯曲 | `number`      | `0`         |
| reverse            | 是否反向                   | `boolean`     | `false`     |
| pathColor          | 路径颜色                   | `string`      | `gray`      |
| pathWidth          | 路径宽度                   | `number`      | `2`         |
| pathOpacity        | 路径透明度                 | `number`      | `0.2`       |
| gradientStartColor | 光束渐变动画起始颜色       | `string`      | `#FFAA40`   |
| gradientStopColor  | 光束渐变动画结束颜色       | `string`      | `#9C40FF`   |
| delay              | 动画延迟时间               | `number`      | `0`         |
| duration           | 动画持续时间               | `number`      | 随机 4-7 秒 |
| startXOffset       | 起始点 X 偏移量            | `number`      | `0`         |
| startYOffset       | 起始点 Y 偏移量            | `number`      | `0`         |
| endXOffset         | 结束点 X 偏移量            | `number`      | `0`         |
| endYOffset         | 结束点 Y 偏移量            | `number`      | `0`         |
| class              | 自定义类名                 | `string`      | -           |
