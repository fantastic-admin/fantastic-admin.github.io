import{_ as e,c as t,o,al as r}from"./chunks/framework.D5LSOf6M.js";const i="/loading.png",m=JSON.parse('{"title":"首屏 Loading","description":"","frontmatter":{},"headers":[],"relativePath":"guide/loading.md","filePath":"guide/loading.md"}'),n={name:"guide/loading.md"};function d(l,a,s,c,p,h){return o(),t("div",null,a[0]||(a[0]=[r('<h1 id="首屏-loading" tabindex="-1">首屏 Loading <a class="header-anchor" href="#首屏-loading" aria-label="Permalink to &quot;首屏 Loading&quot;">​</a></h1><div class="info custom-block"><p class="custom-block-title">INFO</p><p>该特性由 <a href="https://github.com/hooray/vite-plugin-app-loading" target="_blank" rel="noreferrer">vite-plugin-app-loading</a> 提供技术支持。</p></div><p>首屏 Loading 是指首次访问页面，在页面上空白的等待时间时，会展示一个 Loading 动画，直到页面加载完成。</p><p><img src="'+i+'" alt="" data-zoomable=""></p><h2 id="自定义" tabindex="-1">自定义 <a class="header-anchor" href="#自定义" aria-label="Permalink to &quot;自定义&quot;">​</a></h2><p>直接修改根目录下的 <code>/loading.html</code> 文件即可，你可以从 <a href="https://css-loaders.com/" target="_blank" rel="noreferrer">CSS Loaders</a> 网站中找找灵感，它提供了 600+ 个纯 CSS 的加载动画。</p><h2 id="原理" tabindex="-1">原理 <a class="header-anchor" href="#原理" aria-label="Permalink to &quot;原理&quot;">​</a></h2><p>框架会自动读取 <code>/loading.html</code> 文件内容并在 Vite 构建前注入到 <code>/index.html</code> 中，所以它也支持 Vite 的 <a href="https://cn.vitejs.dev/guide/env-and-mode.html#html-env-replacement" target="_blank" rel="noreferrer">HTML 环境变量替换</a>。</p>',8)]))}const _=e(n,[["render",d]]);export{m as __pageData,_ as default};
