# 与服务端交互

框架使用 [Axios](https://axios-http.com/zh/) 做为异步请求工具，并进行了简单的封装。

## 接口请求

### 设置 baseURL

在根目录 `.env.*` 文件里的 `VITE_APP_API_BASEURL` 这个参数就是配置 axios 的 `baseURL` 。

例如项目的真实接口请求地址为：

- `http://api.test.com/news/list`
- `http://api.test.com/news/create`
- `http://api.test.com/shop/info`

则可设置为 `VITE_APP_API_BASEURL = http://api.test.com/` 。

### 请求调用

常用的 GET 和 POST 请求可使用以下的方法：

```ts
import api from '@/api'

// GET 请求
api.get('news/list', {
  params: {
    page: 1,
    size: 10,
  },
}).then((res) => {
  // 后续业务代码
})

// POST 请求
api.post('news/create', {
  title: '新闻标题',
  content: '新闻内容',
}).then((res) => {
  // 后续业务代码
})
```

### 拦截器

在 `/src/api/index.ts` 文件里实例化了 axios 对象，并对 `request` 和 `response` 设置了拦截器，拦截器的用处就是拦截每一次的请求和响应，然后做一些全局的处理。例如接口响应报错，可以在拦截器里用统一的报错提示来展示，方便业务开发。但因为每个公司提供的接口标准不同，所以该文件拦截器部分的代码，需要开发者根据实际情况去修改调整。

代码很简单，首先初始化 axios 对象，然后 `axios.interceptors.request.use()` 和 `axios.interceptors.response.use()` 就分别是请求和响应的拦截代码了。

参考代码里只做了简单的拦截处理，例如请求的时候会自动带上 token ，响应的时候会根据错误信息判断是登录失效还是接口报错，并做相应动作。

## 跨域处理

生产环境的跨域需要服务端去解决，开发环境的跨域问题可在本地设置代理解决。如果本地开发环境请求接口提示跨域，可以设置 `.env.development` 文件里 `VITE_OPEN_PROXY = true` 开启代理。

```ts
import api from '@/api'

api.get('news/list')  // http://localhost:3000/proxy/news/list
api.post('news/add')  // http://localhost:3000/proxy/news/add
```

开启代理后，原有请求都会被指向到本地 `http://localhost:3000/proxy` ，因为 `/proxy` 匹配到了 vite.config.ts 里代理部分的设置，所以实际是请求依旧是 `VITE_APP_API_BASEURL` 所设置的地址。

```ts {2-9}
server: {
  // vite.config.ts 中 proxy 配置，该配置即用于代理 API 请求
  proxy: {
    '/proxy': {
      target: loadEnv(mode, process.cwd()).VITE_APP_API_BASEURL,
      changeOrigin: command === 'serve' && loadEnv(mode, process.cwd()).VITE_OPEN_PROXY == 'true',
      rewrite: path => path.replace(/\/proxy/, ''),
    },
  },
},
```

## 多数据源

如果项目里需要从多个不同地址的数据源请求数据，你有两种方式可以实现。

如果只是几个接口需求从其它数据源请求，你可以使用覆盖 `baseURL` 的方式：

```ts
import api from '@/api'

api.get('/new/list', {
  baseURL: 'http://baidu.com/', // 直接覆盖 baseURL
})
```

这种方式的前提是，两个数据源的 `request` 和 `response` 规则要保持一致，因为只是覆盖 `baseURL` ，拦截器还是用的同一套规则。

所以如果两个数据源的请求和响应是完全不同的标准，你需要给第二个数据源单独实例化一个 axios 对象。首先在 `.env.*` 文件里配置第二个数据源的 `baseURL` ：

```
# 命名可随意，以 VITE_APP_ 开头即可
VITE_APP_API_BASEURL_2 = 此处填写接口地址
```

然后把 `/src/api/index.ts` 文件复制一份，例如就叫 `/src/api/index2.ts` ，并且将代码中使用到 `VITE_APP_API_BASEURL` 也替换为 `VITE_APP_API_BASEURL_2` ，这样你就可以在页面中通过引入不同的文件分别请求两个数据源了：

```ts
import api from '@/api'
import api2 from '@/api/index2'

// 请求默认数据源
api.get('/new/list')
// 请求第 2 个数据源
api2.get('/new/list')
```

需注意，如果第二个数据源也需要开启跨域处理的话，需要在 `/src/api/index2.ts` 里定一个新的 proxy 路径，例如 `/proxy2/` ：

```ts {2}
const api = axios.create({
  baseURL: import.meta.env.DEV && import.meta.env.VITE_OPEN_PROXY === 'true' ? '/proxy2/' : import.meta.env.VITE_APP_API_BASEURL_2,
  timeout: 10000,
  responseType: 'json',
})
```

同时在 vite.config.ts 里增加一段新的 proxy 配置：

```ts {9-13}
server: {
  // vite.config.ts 中 proxy 配置，该配置即用于代理 API 请求
  proxy: {
    '/proxy': {
      target: loadEnv(mode, process.cwd()).VITE_APP_API_BASEURL,
      changeOrigin: command === 'serve' && loadEnv(mode, process.cwd()).VITE_OPEN_PROXY == 'true',
      rewrite: path => path.replace(/\/proxy/, ''),
    },
    '/proxy2': {
      target: loadEnv(mode, process.cwd()).VITE_APP_API_BASEURL_2,
      changeOrigin: command === 'serve' && loadEnv(mode, process.cwd()).VITE_OPEN_PROXY == 'true',
      rewrite: path => path.replace(/\/proxy2/, ''),
    },
  },
},
```

## Mock

Mock 数据是前端开发过程中必不可少的一环，是分离前后端开发的关键链路。通过预先跟服务器端约定好的接口，模拟请求数据甚至逻辑，能够让前端开发独立自主，不会被服务端的开发所阻塞。

:::tip
模板使用 [vite-plugin-mock](https://github.com/anncwb/vite-plugin-mock) 提供开发和生产模拟服务。

Mock 数据编写规则请阅读 [Mockjs](https://github.com/nuysoft/Mock) 官方文档。
:::

### 开发环境 mock

mock 文件存放在 `/src/mock/` 下，建议按照不同模块区分文件夹。文件新增或修改后会自动更新，不需要手动重启，可以在代码控制台查看日志信息。

以下为示例代码：

```ts
export default [
  {
    url: '/mock/news/list',
    method: 'get',
    response: ({ query }) => {
      return {
        error: '',
        status: 1,
        data: {
          'list|5-10': [
            {
              'title': '@ctitle'
            },
          ],
        },
      }
    },
  },
]
```

参数获取：

- GET：`({ query }) => { }`
- POST：`({ body }) => { }`

为了让 mock 接口与真实接口共存，即项目开发中，部分请求 mock 接口，部分请求真实接口。需要在配置 mock 接口的时候，给 `url` 参数统一设置 `/mock/` 前缀，并在调用接口的时候，使用 `baseURL` 强制修改此次请求的地址。

如下所示，其中 `news/list` 会请求本地的 mock 接口，而 `news/add` 依旧请求真实接口，即使开启跨域代理也不影响。

```ts {4}
import api from '@/api'

api.get('news/list', {
  baseURL: '/mock/',
  params: {
    page: 1,
    size: 10,
  },
}).then((res) => {
  // 后续业务代码
})

api.post('news/create', {
  title: '新闻标题',
  content: '新闻内容',
}).then((res) => {
  // 后续业务代码
})
```

### 生产环境 mock

:::warning 注意
生产环境一般都是调用真实接口，如果需要使用 mock 也只适用于一些简单的示例网站及预览网站。
:::

模板默认已经配置好生产环境 mock ，如果不想让生产环境里的请求走 mock ，可在接口调用处删除 baseURL 设置，或直接删除 mock 接口文件。

需要注意一点，如果项目中有涉及到上传功能，请彻底关闭线上环境 mock ，在环境配置里设置 `VITE_BUILD_MOCK = false` ，不然线上环境将会报错。

开发环境与生产环境使用 mock 差异不大，比较大的区别是生产环境里调用 mock 接口，在控制台内看不到接口请求日志。

更多介绍请移步 [vite-plugin-mock](https://github.com/anncwb/vite-plugin-mock)