export default {
  title: 'Fantastic-admin 官方文档',
  description: '一款开箱即用的 Vue 中后台管理系统框架，采用 Vue3 + Vite2 技术栈。',
  lang: 'zh-CN',
  base: '/fantastic-admin/',
  head: [
    ['link', { rel: 'icon', href: './favicon.ico' }],
    ['meta', { name: 'keywords', content: 'fantastic-admin,后台系统,管理后台,后台模版,vue后台,vue-admin,vue-element-admin,vue-admin-template' }],
    ['keywords', { content: 'fantastic-admin,后台系统,管理后台,后台模版,vue后台,vue-admin,vue-element-admin,vue-admin-template' }],
    ['description', { content: '一款开箱即用的 Vue 中后台管理系统框架，采用 Vue3 + Vite2 技术栈。' }],
    ['script', {}, `var _hmt = _hmt || [];
		_hmt.push(['_requirePlugin', 'UrlChangeTracker', {
			shouldTrackUrlChange: function(newPath, oldPath) {
				return newPath && oldPath;
			}
		}]);
		(function() {
			var hm = document.createElement("script");
			hm.src = "https://hm.baidu.com/hm.js?c31a3e8267162de8420bc73e06d62463";
			var s = document.getElementsByTagName("script")[0];
			s.parentNode.insertBefore(hm, s);
		})();`]
  ],
  themeConfig: {
    logo: '/logo.png',
    footer: {
      copyright: 'Copyright © 2020-present Fantastic-admin'
    },
    nav: [
      {
        text: '文档',
        items: [
          {
            text: '指南',
            link: '/guide/intro',
          },
          {
            text: '组件',
            link: '/components/index',
          }
        ]
      },
      {
        text: '在线演示',
        items: [
          {
            text: '基础版',
            link: 'https://hooray.gitee.io/fantastic-admin-example/'
          },
          {
            text: '专业版',
            link: 'https://hooray.gitee.io/fantastic-admin-pro-example/'
          },
          {
            text: '备用地址',
            items: [
              {
                text: '基础版',
                link: 'https://hooray.github.io/fantastic-admin-example/'
              },
              {
                text: '专业版',
                link: 'https://hooray.github.io/fantastic-admin-pro-example/'
              }
            ]
          }
        ]
      },
      {
        text: '技术支持',
        link: '/support'
      },
      {
        text: '生态',
        items: [
          {
            text: '官方',
            items: [
              {
                text: 'Fantastaic-startkit',
                link: 'https://hooray.gitee.io/fantastic-startkit/'
              },
              {
                text: 'Fantastaic-admin',
                link: 'https://hooray.gitee.io/fantastic-admin/'
              },
              {
                text: 'One-step-admin',
                link: 'https://hooray.gitee.io/one-step-admin/'
              }
            ]
          },
          {
            text: '战略合作',
            items: [
              {
                text: 'VForm 低代码表单',
                link: 'https://www.vform666.com'
              },
              {
                text: 'QuickAdmin 快速开发管理框架',
                link: 'https://gitee.com/sciqtw/quickadmin'
              },
              {
                text: '交换友链 ?',
                link: '/links'
              }
            ]
          }
        ]
      },
      {
        text: '下载 / 购买',
        items: [
          {
            text: '基础版',
            items: [
              {
                text: '去 Gitee 下载',
                link: 'https://gitee.com/hooray/fantastic-admin'
              },
              {
                text: '去 Github 下载',
                link: 'https://github.com/hooray/fantastic-admin'
              }
            ]
          },
          {
            text: '专业版',
            items: [
              {
                text: '购买',
                link: '/buy'
              },
              {
                text: '定制开发',
                link: '/customize'
              }
            ]
          }
        ]
      }
    ],
    socialLinks: [
      {
        icon: {
          svg: '<svg t="1663266323098" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2880" width="200" height="200"><path d="M512 1024C230.4 1024 0 793.6 0 512S230.4 0 512 0s512 230.4 512 512-230.4 512-512 512z m259.2-569.6H480c-12.8 0-25.6 12.8-25.6 25.6v64c0 12.8 12.8 25.6 25.6 25.6h176c12.8 0 25.6 12.8 25.6 25.6v12.8c0 41.6-35.2 76.8-76.8 76.8h-240c-12.8 0-25.6-12.8-25.6-25.6V416c0-41.6 35.2-76.8 76.8-76.8h355.2c12.8 0 25.6-12.8 25.6-25.6v-64c0-12.8-12.8-25.6-25.6-25.6H416c-105.6 0-188.8 86.4-188.8 188.8V768c0 12.8 12.8 25.6 25.6 25.6h374.4c92.8 0 169.6-76.8 169.6-169.6v-144c0-12.8-12.8-25.6-25.6-25.6z" p-id="2881"></path></svg>'
        },
        link: 'https://gitee.com/hooray/fantastic-admin'
      },
      {
        icon: 'github', link: 'https://github.com/hooray/fantastic-admin'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指引',
          items: [
            { text: '文档说明', link: '/guide/intro' },
            { text: '为什么选择我们 ?', link: '/guide/why' }
          ],
          collapsible: true
        },
        {
          text: '入门',
          items: [
            { text: '准备工作', link: '/guide/ready' },
            { text: '开始', link: '/guide/start' },
            { text: '代码规范', link: '/guide/coding-standard' },
            { text: '术语', link: '/guide/term' },
            { text: '配置', link: '/guide/configure' },
            { text: '布局', link: '/guide/layout' },
            { text: '主题', link: '/guide/theme' },
            { text: '路由（导航）', link: '/guide/router' },
            { text: '与服务端交互', link: '/guide/axios' },
            { text: '全局状态管理', link: '/guide/store' },
            { text: '全局资源', link: '/guide/global-resources' },
            { text: '图标', link: '/guide/svg-icon' },
            { text: '构建与预览', link: '/guide/build' }
          ],
          collapsible: true
        },
        {
          text: '高级',
          items: [
            { text: '登录', link: '/guide/login' },
            { text: '权限', link: '/guide/permission' },
            { text: '主页', link: '/guide/home' },
            { text: '动态标题', link: '/guide/title' },
            { text: '导航菜单', link: '/guide/menu' },
            { text: '顶栏', link: '/guide/topbar' },
            { text: '标签栏', link: '/guide/tabbar' },
            { text: '工具栏', link: '/guide/toolbar' },
            { text: '面包屑导航', link: '/guide/breadcrumb' },
            { text: '快捷键', link: '/guide/hotkeys' },
            { text: '版权信息', link: '/guide/copyright' },
            { text: '页面缓存', link: '/guide/keep-alive' },
            { text: '国际化', link: '/guide/i18n' },
            { text: '代码文件自动生成', link: '/guide/plop' },
            { text: '标准模块', link: '/guide/plop-module' },
            { text: '常用 API', link: '/guide/api' },
            { text: '私有 Storage 数据', link: '/guide/storage' },
            { text: '页面水印', link: '/guide/watermark' },
            { text: '错误日志', link: '/guide/error-log' },
            { text: '自定义字体', link: '/guide/font' },
            { text: 'JSX', link: '/guide/jsx' },
            { text: '基于文件系统的路由', link: '/guide/file-system-route' },
            { text: '高级 position:fixed', link: '/guide/position-fixed' }
          ],
          collapsible: true
        },
        {
          text: '其它',
          items: [
            { text: '使用 Composition API 开发', link: '/guide/vue3-composition-api' },
            { text: '框架更新', link: '/guide/upgrade' },
            { text: '从 Vue2 版本迁移', link: '/guide/vue2-to-vue3' },
            { text: '从 vue-element-admin 迁移', link: '/guide/vea-to-fa' },
            { text: '常见问题', link: '/guide/q-a' }
          ],
          collapsible: true
        }
      ],
      '/components/': [
        {
          text: '组件',
          items: [
            { text: '介绍', link: '/components/' },
          ]
        },
        {
          text: '扩展组件',
          items: [
            { text: 'Auth 鉴权', link: '/components/auth' },
            { text: 'AuthAll 鉴权', link: '/components/auth-all' },
            { text: 'PageHeader 页头', link: '/components/page-header' },
            { text: 'PageMain 内容块', link: '/components/page-main' },
            { text: 'FixedActionBar 固定底部操作栏', link: '/components/fixed-action-bar' },
            { text: 'SearchBar 搜索面板', link: '/components/search-bar' },
            { text: 'BatchActionBar 批量操作栏', link: '/components/batch-action-bar' },
            { text: 'ImageUpload 单图上传', link: '/components/image-upload' },
            { text: 'ImagesUpload 多图上传', link: '/components/images-upload' },
            { text: 'FileUpload 文件上传', link: '/components/file-upload' },
            { text: 'ImagePreview 图片预览', link: '/components/image-preview' },
            { text: 'SvgIcon SVG图标', link: '/components/svg-icon' },
            { text: 'Trend 趋势标记', link: '/components/trend' },
            { text: 'PcasCascader 省市区街道联动', link: '/components/pcas-cascader' },
            { text: 'Editor 富文本编辑器', link: '/components/editor' },
            { text: 'LayoutContainer 布局容器', link: '/components/layout-container' },
            { text: 'Chip 纸片', link: '/components/chip' },
            { text: 'ColorfulCard 多彩渐变卡片', link: '/components/colorful-card' },
            { text: 'IconPicker 图标选择器', link: '/components/icon-picker' },
            { text: 'Sparkline 迷你图', link: '/components/sparkline' },
            { text: 'I18nSelector 国际化选择器', link: '/components/i18n-selector' },
            { text: 'SignCanvas 电子签名', link: '/components/sign-canvas' }
          ]
        }
      ],
      '/guide-vue2/': [
        {
          text: '指南',
          items: [
            { text: '开始', link: '/guide-vue2/start' },
            { text: '代码规范', link: '/guide-vue2/coding-standard' },
            { text: '配置', link: '/guide-vue2/configure' },
            { text: '布局', link: '/guide-vue2/layout' },
            { text: '主题', link: '/guide-vue2/theme' },
            { text: '全局资源', link: '/guide-vue2/global-resources' },
            { text: '和服务端交互', link: '/guide-vue2/axios' },
            { text: '组件', link: '/guide-vue2/component' },
            { text: 'Vuex', link: '/guide-vue2/vuex' },
            { text: '路由', link: '/guide-vue2/router' },
            { text: '权限验证', link: '/guide-vue2/permission' },
            { text: '标签栏', link: '/guide-vue2/tabbar' },
            { text: '二级页面缓存', link: '/guide-vue2/keep-alive' },
            { text: '多级页面缓存', link: '/guide-vue2/keep-alive-neste' },
            { text: '自定义字体', link: '/guide-vue2/font' },
            { text: '国际化', link: '/guide-vue2/i18n' },
            { text: '私有 Storage 数据', link: '/guide-vue2/storage' },
            { text: '第三方库', link: '/guide-vue2/library' },
            { text: 'CDN 支持', link: '/guide-vue2/cdn' },
            { text: 'gzip 支持', link: '/guide-vue2/gzip' },
            { text: 'Mock 与联调', link: '/guide-vue2/mock' },
            { text: '构建', link: '/guide-vue2/build' },
            { text: 'Git 钩子', link: '/guide-vue2/git' },
            { text: '错误日志', link: '/guide-vue2/bug' },
            { text: '快速生成文件', link: '/guide-vue2/plop' },
            { text: '标准模块', link: '/guide-vue2/module' },
            { text: '高级 position:fixed', link: '/guide-vue2/position-fixed' },
            { text: '版本升级', link: '/guide-vue2/upgrade' },
            { text: '视频教程', link: 'https://space.bilibili.com/3079082/channel/detail?cid=156985' }
          ]
        }
      ],
      '/': [
        {
          text: '',
          items: [
            { text: '购买专业版', link: '/buy' },
            { text: '定制开发', link: '/customize' },
            { text: '技术支持', link: '/support' },
            { text: '我要交换友链', link: '/links' },
          ]
        }
      ]
    },
    algolia: {
      appId: '97F9CKAB42',
      apiKey: '4e99a9432adb2e0c37178c43c14d3ebc',
      indexName: 'fantastic-admin',
      placeholder: '请输入关键词',
      buttonText: '搜索',
    },
  }
}