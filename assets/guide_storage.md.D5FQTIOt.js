import{_ as t,C as n,c as l,o as p,j as i,al as h,a,G as k}from"./chunks/framework.D5LSOf6M.js";const u=JSON.parse('{"title":"私有 Storage 数据","description":"","frontmatter":{},"headers":[],"relativePath":"guide/storage.md","filePath":"guide/storage.md"}'),r={name:"guide/storage.md"},g={id:"私有-storage-数据",tabindex:"-1"};function o(d,s,E,c,y,F){const e=n("Badge");return p(),l("div",null,[i("h1",g,[s[0]||(s[0]=a("私有 Storage 数据 ")),k(e,{type:"pro",text:"专业版"}),s[1]||(s[1]=a()),s[2]||(s[2]=i("a",{class:"header-anchor",href:"#私有-storage-数据","aria-label":'Permalink to "私有 Storage 数据 <Badge type="pro" text="专业版" />"'},"​",-1))]),s[3]||(s[3]=h(`<p>由于 localStorage 和 sessionStorage 的同源策略，同一域名下的 storage 数据会共享。如果你恰好需要在同一域名下部署两套(及以上)系统，不可避免会出现 storage 数据冲突，框架提供了一个 storage 类来解决这个问题。</p><p>解决同源 storage 数据冲突的方式就是增加前缀区分，首先需要在应用配置中设置一个唯一且不重名的前缀：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> globalSettings</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Settings</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">all</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  app: {</span></span>
<span class="line highlighted"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    /**</span></span>
<span class="line highlighted"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * localStorage/sessionStorage 前缀</span></span>
<span class="line highlighted"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@默认值</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> \`&#39;fa_&#39;\`</span></span>
<span class="line highlighted"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     */</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    storagePrefix: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;fa_&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>然后在需要使用到 storage 的地方引入：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> storage </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@/utils/storage&#39;</span></span></code></pre></div><p>这个类封装了 <code>setItem()</code> ，<code>getItem()</code> ，<code>removeItem()</code> ，<code>clear()</code> 方法，同时还增加了一个 <code>has()</code> 方法用来判断对象是否存在：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// localStorage</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">storage.local.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">has</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(key)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">storage.local.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(key)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">storage.local.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(key, value)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">storage.local.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">remove</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(key)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">storage.local.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">clear</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// sessionStorage</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">storage.session.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">has</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(key)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">storage.session.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(key)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">storage.session.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(key, value)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">storage.session.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">remove</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(key)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">storage.session.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">clear</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">注意</p><p>由于 localStorage 有容量上限，一般为 5M ，如果一同域名下部署两套系统，意味着两套系统共享 5M 容量，所以不建议在同一域名部署太多套系统，避免出现 localStorage 不够用的情况。</p></div>`,8))])}const C=t(r,[["render",o]]);export{u as __pageData,C as default};
