---
url: /guide/font.md
---
# 自定义字体&#x20;

用户访问使用了自定义字体的页面时，会自动下载字体文件，字体文件有大有小，所以不建议在非英文环境中使用。

框架预设了 Digital 7 的两套字体，除此之外，你也可以通过以下方法引入你需要的自定义字体。

## 生成字体

字体文件通常为 `.ttf` / `.otf` 格式，不是浏览器支持的字体格式，所以需要转换生成浏览器支持的格式，也就是 `.woff` / `.woff2` 格式。

访问 [transfonter](https://transfonter.org/)，上传 `.ttf` / `.otf` 文件，然后点击 Convert 按钮即可。

## 使用

将上一步下载的压缩包解压并放入 `/src/assets/fonts/` 目录下，注意按文件夹区分，随后引入文件夹中的 `stylesheet.css` 即可使用，以 Digital 7 字体为例：

```scss
@import '../../assets/fonts/digital-7/stylesheet.css';
.digital-7 {
  font-family: 'digital-7regular';
}
```

字体的 `font-family` 名称在 `stylesheet.css` 里查看。

另外你也可以将 `@import '../../assets/fonts/digital-7/stylesheet.css';` 这句代码放到全局引入，这样所有页面就都可以通过设置 `font-family: 'digital-7regular';` 直接使用了。
