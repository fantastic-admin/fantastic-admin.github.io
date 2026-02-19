import{_ as a,c as i,o as n,aj as l}from"./chunks/framework.Dgeddbvw.js";const p="/settings.png",o=JSON.parse('{"title":"配置","description":"","frontmatter":{},"headers":[],"relativePath":"guide/configure.md","filePath":"guide/configure.md"}'),e={name:"guide/configure.md"};function t(h,s,k,d,E,r){return n(),i("div",null,[...s[0]||(s[0]=[l(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /guide/configure.md for this page in Markdown format</div><h1 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h1><h2 id="环境配置" tabindex="-1">环境配置 <a class="header-anchor" href="#环境配置" aria-label="Permalink to &quot;环境配置&quot;">​</a></h2><p>默认提供三套环境配置，分别为：</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-hJx4s" id="tab-9SNE9Rs" checked><label data-title=".env.development 开发环境" for="tab-9SNE9Rs">.env.development 开发环境</label><input type="radio" name="group-hJx4s" id="tab-XplzgwY"><label data-title=".env.test 测试环境" for="tab-XplzgwY">.env.test 测试环境</label><input type="radio" name="group-hJx4s" id="tab-_w4II1E"><label data-title=".env.production 生产环境" for="tab-_w4II1E">.env.production 生产环境</label></div><div class="blocks"><div class="language-yaml vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 应用配置面板</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">VITE_APP_SETTING = true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 页面标题</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">VITE_APP_TITLE = Fantastic-admin</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 接口请求地址，会设置到 axios 的 baseURL 参数上</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">VITE_APP_API_BASEURL = /</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 调试工具，可设置 eruda 或 vconsole，如果不需要开启则留空</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">VITE_APP_DEBUG_TOOL =</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 是否禁用开发者工具，可防止被调试</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">VITE_APP_DISABLE_DEVTOOL = false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 是否开启代理</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">VITE_OPEN_PROXY = false</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 是否开启开发者工具</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">VITE_OPEN_DEVTOOLS = false</span></span></code></pre></div><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 应用配置面板</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">VITE_APP_SETTING = false</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 页面标题</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">VITE_APP_TITLE = Fantastic-admin</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 接口请求地址，会设置到 axios 的 baseURL 参数上</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">VITE_APP_API_BASEURL = /</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 调试工具，可设置 eruda 或 vconsole，如果不需要开启则留空</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">VITE_APP_DEBUG_TOOL =</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 是否禁用开发者工具，可防止被调试</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">VITE_APP_DISABLE_DEVTOOL = false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 是否在打包时启用 Mock</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">VITE_BUILD_MOCK = true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在构建时生成 sourcemap</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">VITE_BUILD_SOURCEMAP = true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在构建时开启压缩，支持 gzip 和 brotli</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">VITE_BUILD_COMPRESS =</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 是否在打包后生成存档，支持 zip 和 tar</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">VITE_BUILD_ARCHIVE =</span></span></code></pre></div><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 应用配置面板</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">VITE_APP_SETTING = false</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 页面标题</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">VITE_APP_TITLE = Fantastic-admin</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 接口请求地址，会设置到 axios 的 baseURL 参数上</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">VITE_APP_API_BASEURL = /</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 调试工具，可设置 eruda 或 vconsole，如果不需要开启则留空</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">VITE_APP_DEBUG_TOOL =</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 是否禁用开发者工具，可防止被调试</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">VITE_APP_DISABLE_DEVTOOL = false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 是否在打包时启用 Mock</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">VITE_BUILD_MOCK = false</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在构建时生成 sourcemap</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">VITE_BUILD_SOURCEMAP = false</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在构建时开启压缩，支持 gzip 和 brotli</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">VITE_BUILD_COMPRESS = gzip,brotli</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 是否在打包后生成存档，支持 zip 和 tar</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">VITE_BUILD_ARCHIVE =</span></span></code></pre></div></div></div><p>其中 <code>VITE_APP_SETTING</code> <code>VITE_APP_TITLE</code> <code>VITE_APP_API_BASEURL</code> <code>VITE_APP_DEBUG_TOOL</code> <code>VITE_APP_DISABLE_DEVTOOL</code> 为必要配置，即不管是在开发、测试，还是生产环境都需要使用到。而其余配置则在不同环境下有不同用途，例如开发环境用于本地开发使用，测试环境和生产环境用于构建使用。</p><p>开发者可根据实际业务需求进行扩展，如果对这块不熟悉，请阅读 <a href="https://cn.vitejs.dev/guide/env-and-mode.html" target="_blank" rel="noreferrer">Vite - 环境变量和模式</a> 章节。</p><div class="warning custom-block"><p class="custom-block-title">注意</p><p><code>VITE_APP_SETTING</code> 该变量是开启应用配置面板，目的是方便开发者在开发阶段调试，生产环境下默认关闭，也建议关闭。</p><p>如果希望提供用户一些定制化的能力，可以开启偏好设置，详细可阅读《<a href="./preferences.html">用户偏好设置</a>》。</p></div><h2 id="应用配置-框架配置" tabindex="-1">应用配置（框架配置） <a class="header-anchor" href="#应用配置-框架配置" aria-label="Permalink to &quot;应用配置（框架配置）&quot;">​</a></h2><p>请在 <code>/src/settings.ts</code> 文件中进行配置，而不是在 <code>/src/settings.default.ts</code> 文件中，后者为框架的完整默认配置。</p><p>关于配置的类型定义，可以在 <code>/src/types/globals.d.ts</code> 文件中查阅。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 这是基础版演示源码里的自定义配置示例</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> globalSettings</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Settings</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">all</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  app: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    enablePermission: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    enableDynamicTitle: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  layout: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    enableMobileAdaptation: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  menu: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    enableSubMenuCollapseButton: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    enableHotkeys: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  topbar: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    mode: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;fixed&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  toolbar: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    enableFullscreen: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    enablePageReload: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    enableColorScheme: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">注意</p><p>文档中提供的配置介绍，如果在本地的开发环境使用中报错或者无法生效，说明你使用的版本不支持或者配置参数有变动，你可以打开 <code>/src/settings.default.ts</code> 查看当前版本的完整配置作为参考。</p><p>并且如果你使用的是 Visual Studio Code ，鼠标悬浮到属性上时，会有属性的介绍：</p><p><img src="`+p+'" alt="" data-zoomable=""></p></div>',13)])])}const g=a(e,[["render",t]]);export{o as __pageData,g as default};
