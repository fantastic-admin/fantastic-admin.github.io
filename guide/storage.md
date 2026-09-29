---
url: /guide/storage.md
---
# 私有 Storage 数据&#x20;

由于 localStorage 和 sessionStorage 的同源策略，同一域名下的 storage 数据会共享。如果你恰好需要在同一域名下部署两套(及以上)系统，不可避免会出现 storage 数据冲突，框架提供了一个 storage 类来解决这个问题。

解决同源 storage 数据冲突的方式就是增加前缀区分。

首先需要在环境变量中设置一个唯一且不重名的前缀：

```env
# localStorage/sessionStorage 前缀
# localStorage/sessionStorage prefix
VITE_APP_STORAGE_PREFIX = fa_
```

然后就可以继续使用 `localStorage` 和 `sessionStorage` 了，框架重写了 `localStorage` 和 `sessionStorage` ，所以使用方式和原来一样，并且还增加了 2 个 API：

* `localStorage.has(key)` / `sessionStorage.has(key)` 判断对象是否存在
* `localStorage.length` / `sessionStorage.length` 获取对象数量（只统计带前缀的 key）
