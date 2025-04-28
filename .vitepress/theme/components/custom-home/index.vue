<script setup lang="ts">
import { useData, useRouter } from 'vitepress'
import { useTemplateRef } from 'vue'
import AnimatedBeam from './AnimatedBeam/index.vue'
import BlurReveal from './BlurReveal/index.vue'
import Button2 from './Button2/index.vue'
import Button3 from './Button3/index.vue'
import Button4 from './Button4/index.vue'
import Button from './Button/index.vue'
import FlipWords from './FlipWords/index.vue'
import GlowyCard from './GlowyCard/index.vue'
import GlowyCardWrapper from './GlowyCardWrapper/index.vue'
import InteractiveButton from './InteractiveButton/index.vue'
import Marquee from './Marquee/index.vue'
import ParticlesBg from './ParticlesBg/index.vue'
import SparklesText from './SparklesText/index.vue'
import SpotlightCard from './SpotlightCard/index.vue'
import TextHighlight from './TextHighlight/index.vue'

const { isDark } = useData()
const router = useRouter()

const stackRef = useTemplateRef('stackRef')
const logoRef = useTemplateRef('logoRef')
const viteRef = useTemplateRef('viteRef')
const vueRef = useTemplateRef('vueRef')
const vueuseRef = useTemplateRef('vueuseRef')
const piniaRef = useTemplateRef('piniaRef')
const unocssRef = useTemplateRef('unocssRef')
const tsRef = useTemplateRef('tsRef')

const uiRef = useTemplateRef('uiRef')
const logo2Ref = useTemplateRef('logo2Ref')
const epRef = useTemplateRef('epRef')
const antdvRef = useTemplateRef('antdvRef')
const arcoRef = useTemplateRef('arcoRef')
const naiveRef = useTemplateRef('naiveRef')
const tdesignRef = useTemplateRef('tdesignRef')
const vexipRef = useTemplateRef('vexipRef')
const iduxRef = useTemplateRef('iduxRef')

const features = [
  { icon: 'i-mdi:palette-outline', title: '风格百变', intro: '通过布局与主题组合搭配，可实现上百种不同风格的界面外观' },
  { icon: 'i-streamline:page-setting', title: '组件丰富', intro: '提供 60+ 内建组件，不仅满足日常开发需求，更能让页面脱颖而出' },
  { icon: 'i-tabler:layout-sidebar', title: '多功能导航栏', intro: '通过路由自动生成导航栏，轻松实现导航嵌套、图标、徽章、权限等特性' },
  { icon: 'i-codicon:key', title: '全场景权限验证', intro: '内置鉴权组件、鉴权指令和鉴权函数，真正实现各种场景下的权限验证' },
  { icon: 'i-octicon:cache-24', title: '页面缓存', intro: '支持无限层级路由的页面缓存，并提供简单易懂的缓存策略配置' },
  { icon: 'i-icon-park-outline:international', title: '面向国际', intro: '内置通用国际化解决方案，简单配置即可实现多国语言切换' },
  { icon: 'i-gg:website', title: '丰富的业务页面', intro: '从真实场景和需求中，沉淀出数十个常见业务页面，方便开发人员直接使用' },
  { icon: 'i-ph:dev-to-logo', title: '注重开发体验', intro: '享受丝滑般的开发体验，让编码过程变得轻松愉快' },
]

const evaluates = [
  { name: 'c***@msn.com', content: '从较低的上手难度，到完善的细节设计；从完善的示例，到详细而循序渐进的文档。无不体现作者作为一个技术专家之上的产品意识，这是诸多“开发框架”所达不到的理念高度。' },
  { name: 't***@126.com', content: '售后服务及时，耐心解答各种问题，源码讲解耐心，努力帮助客户了解系统架构，从而更好的服务客服体系，界面美观，集成快捷，非常棒的框架。' },
  { name: 'l***@163.com', content: '可以说是目前最简单、易上手的 Vue3 中后台框架，框架本身已经涵盖了开发中几乎所有的基础功能，可以让开发者更注重业务本身的开发。' },
  { name: '3***@qq.com', content: '无论从颜值、组件丰富程度来说都是非常优秀的，对后端开发十分友好，代码规范清晰，即便不是很熟悉前端的后端开发人员也能快速上手。' },
  { name: 't***@163.com', content: 'Fantastic-admin 的设计、交互都十分现代化，文档健全，售后及时，最重要的是，它几乎没有什么 Bug ，使用体验太丝滑了。' },
  { name: 'y***@163.com', content: '作为一个16年开发经验的老程序员，一看到这套框架就被深深的吸引，在对比开发成本和购买成本后，果断选择了专业版。' },
  { name: '4***@qq.com', content: '做为个人开发者，本人兼任前端和后端的工作。Fantastic-admin 拿来即用，解决了没有前端，没有美工的困扰。' },
  { name: 'b***@gmail.com', content: '我觉得 Fantastic-admin 最大的优势和吸引人的地方是产品性很强，前两年就买了专业版，一直在用。' },
  { name: 'r***@aliyun.com', content: '我是搞后端的，这个模板好好用，期待加入更多的页面可以直接用。' },
  { name: 'a***@163.com', content: '厉害👍🏻，是后台系统里见过最好的框架。' },
]

function open(url: string) {
  window.open(url, '_blank')
}
</script>

<template>
  <div class="h-full w-full">
    <ParticlesBg
      class="fixed inset-0 -z-1"
      :color="isDark ? '#fff' : '#000'"
      :quantity="200"
      :ease="100"
      :staticity="10"
    />
    <div class="px-4 pb-20">
      <div class="h-[calc(100vh-4rem)] flex-col-center gap-8 pb-20">
        <div class="flex items-center justify-center">
          <img src="/logo.svg" class="size-40 lg:size-80">
        </div>
        <h1 class="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
          一款
          <TextHighlight
            class="rounded-xl from-pink-500 to-violet-500 bg-gradient-to-r px-2 py-2"
            text-end-color="hsl(var(--accent))"
          >
            <FlipWords
              :words="['开箱即用的', '风格百变的', '广受好评的']"
              :duration="3000"
            />
          </TextHighlight>
          管理系统框架
        </h1>
        <div class="text-center text-lg text-gray-600 sm:text-xl dark:text-gray-200">
          无需众里寻他，使用 <span class="text-[#42B883] font-bold">Fantastic-admin</span> 即可轻松构建令人惊叹的管理系统
        </div>
        <div class="w-full flex flex-wrap items-center justify-center gap-4">
          <Button @click="router.go('/guide/intro')">
            立即开始
          </Button>
          <Button2 @click="router.go('/guide/why')">
            为什么选择我们 ?
          </Button2>
          <Button2 @click="router.go('/guide/changelog')">
            更新日志
          </Button2>
        </div>
        <div class="w-full flex flex-wrap items-center justify-center gap-4">
          <Button3 @click="open('https://fantastic-admin.hurui.me/basic-example')">
            演示：基础版
          </Button3>
          <Button3 @click="open('https://fantastic-admin.hurui.me/pro-example')">
            演示：专业版
          </Button3>
          <Button4 @click="router.go('/get-v1-pro')">
            免费领取 v1 专业版
          </Button4>
        </div>
      </div>
      <div class="flex flex-col items-center justify-center">
        <BlurReveal :delay="0" :duration="1">
          <div class="from-black to-gray-200/80 bg-gradient-to-b bg-clip-text py-12 text-center text-3xl text-transparent font-semibold dark:from-white dark:to-slate-900/10 sm:pt-36 sm:text-4xl">
            特性一览
          </div>
        </BlurReveal>
      </div>
      <div class="mx-auto mb-4 hidden max-w-7xl gap-4 lg-flex">
        <div class="flex-1 border border-neutral-950/10 rounded-3xl border-solid bg-white/[.012] p-2 dark:border-white/10">
          <SpotlightCard class="rounded-2xl backdrop-blur-sm">
            <div ref="stackRef" class="relative h-100 flex items-center justify-center overflow-hidden p-10">
              <SparklesText text="一流技术栈" :colors="{ first: '#9E7AFF', second: '#FE8BBB' }" :sparkles-count="3" class="absolute inset-s-1/2 top-12 text-4xl -translate-x-1/2" />
              <div class="size-full w-full flex flex-col items-stretch justify-between">
                <div class="flex flex-row items-center justify-between">
                  <div ref="viteRef" class="z-10 flex items-center justify-center border-2 border-[var(--vp-c-divider)] rounded-3xl border-solid bg-[var(--vp-c-bg-soft)] p-4 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]">
                    <div class="i-logos:vitejs size-8" />
                  </div>
                  <div ref="piniaRef" class="z-10 flex items-center justify-center border-2 border-[var(--vp-c-divider)] rounded-3xl border-solid bg-[var(--vp-c-bg-soft)] p-4 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]">
                    <div class="i-logos:pinia size-8" />
                  </div>
                </div>
                <div class="flex flex-row items-center justify-between">
                  <div ref="vueRef" class="z-10 flex items-center justify-center border-2 border-[var(--vp-c-divider)] rounded-3xl border-solid bg-[var(--vp-c-bg-soft)] p-4 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]">
                    <div class="i-logos:vue size-8" />
                  </div>
                  <div ref="logoRef" class="z-10 flex items-center justify-center border-2 border-[var(--vp-c-divider)] rounded-3xl border-solid bg-[var(--vp-c-bg-soft)] p-4 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]">
                    <img src="/logo.svg" class="size-20">
                  </div>
                  <div ref="unocssRef" class="z-10 flex items-center justify-center border-2 border-[var(--vp-c-divider)] rounded-3xl border-solid bg-[var(--vp-c-bg-soft)] p-4 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]">
                    <div class="i-logos:unocss size-8" />
                  </div>
                </div>
                <div class="flex flex-row items-center justify-between">
                  <div ref="vueuseRef" class="z-10 flex items-center justify-center border-2 border-[var(--vp-c-divider)] rounded-3xl border-solid bg-[var(--vp-c-bg-soft)] p-4 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]">
                    <div class="i-logos:vueuse size-8" />
                  </div>
                  <div ref="tsRef" class="z-10 flex items-center justify-center border-2 border-[var(--vp-c-divider)] rounded-3xl border-solid bg-[var(--vp-c-bg-soft)] p-4 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]">
                    <div class="i-logos:typescript-icon size-8" />
                  </div>
                </div>
              </div>
              <AnimatedBeam
                :container-ref="stackRef"
                :from-ref="viteRef"
                :to-ref="logoRef"
                :curvature="-75"
                :end-y-offset="-10"
              />
              <AnimatedBeam
                :container-ref="stackRef"
                :from-ref="vueRef"
                :to-ref="logoRef"
              />
              <AnimatedBeam
                :container-ref="stackRef"
                :from-ref="vueuseRef"
                :to-ref="logoRef"
                :curvature="75"
                :end-y-offset="10"
              />
              <AnimatedBeam
                :container-ref="stackRef"
                :from-ref="piniaRef"
                :to-ref="logoRef"
                :curvature="-75"
                :end-y-offset="-10"
              />
              <AnimatedBeam
                :container-ref="stackRef"
                :from-ref="unocssRef"
                :to-ref="logoRef"
              />
              <AnimatedBeam
                :container-ref="stackRef"
                :from-ref="tsRef"
                :to-ref="logoRef"
                :curvature="75"
                :end-y-offset="10"
              />
            </div>
          </SpotlightCard>
        </div>
        <div class="flex-1 border border-neutral-950/10 rounded-3xl border-solid bg-white/[.012] p-2 dark:border-white/10">
          <SpotlightCard class="rounded-2xl backdrop-blur-sm">
            <div ref="uiRef" class="relative h-100 p-10">
              <SparklesText text="UI 可替换" :colors="{ first: '#9E7AFF', second: '#FE8BBB' }" :sparkles-count="3" class="absolute inset-s-1/2 top-12 text-4xl -translate-x-1/2" />
              <div class="size-full w-full flex flex-col items-stretch justify-between gap-8 pt-20">
                <div class="flex flex-row items-center justify-center">
                  <div ref="logo2Ref" class="z-10 flex items-center justify-center border-2 border-[var(--vp-c-divider)] rounded-12 border-solid bg-[var(--vp-c-bg-soft)] p-4 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]">
                    <img src="/logo.svg" class="size-20">
                  </div>
                </div>
                <div class="flex flex-row items-end justify-between">
                  <div ref="epRef" class="z-10 mb-12 flex items-center justify-center border-2 border-[var(--vp-c-divider)] rounded-3xl border-solid bg-[var(--vp-c-bg-soft)] p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]">
                    <div class="i-logos:element size-8" />
                  </div>
                  <div ref="antdvRef" class="z-10 mb-6 flex items-center justify-center border-2 border-[var(--vp-c-divider)] rounded-3xl border-solid bg-[var(--vp-c-bg-soft)] p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]">
                    <div class="i-logos:ant-design size-8" />
                  </div>
                  <div ref="arcoRef" class="z-10 mb-2 flex items-center justify-center border-2 border-[var(--vp-c-divider)] rounded-3xl border-solid bg-[var(--vp-c-bg-soft)] p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]">
                    <img src="https://unpkg.byted-static.com/latest/byted/arco-config/assets/favicon.ico" class="size-8">
                  </div>
                  <div ref="naiveRef" class="z-10 flex items-center justify-center border-2 border-[var(--vp-c-divider)] rounded-3xl border-solid bg-[var(--vp-c-bg-soft)] p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]">
                    <div class="i-logos:naiveui size-8" />
                  </div>
                  <div ref="tdesignRef" class="z-10 mb-2 flex items-center justify-center border-2 border-[var(--vp-c-divider)] rounded-3xl border-solid bg-[var(--vp-c-bg-soft)] p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]">
                    <img src="https://static.tdesign.tencent.com/favicon.ico" class="size-8">
                  </div>
                  <div ref="vexipRef" class="z-10 mb-6 flex items-center justify-center border-2 border-[var(--vp-c-divider)] rounded-3xl border-solid bg-[var(--vp-c-bg-soft)] p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]">
                    <img src="https://www.vexipui.com/vexip-ui.svg" class="size-8">
                  </div>
                  <div ref="iduxRef" class="z-10 mb-12 flex items-center justify-center border-2 border-[var(--vp-c-divider)] rounded-3xl border-solid bg-[var(--vp-c-bg-soft)] p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]">
                    <img src="https://idux.site/favicon.ico" class="size-8">
                  </div>
                </div>
              </div>
              <AnimatedBeam
                :container-ref="uiRef"
                :from-ref="logo2Ref"
                :to-ref="epRef"
                :curvature="-150"
                dotted
              />
              <AnimatedBeam
                :container-ref="uiRef"
                :from-ref="logo2Ref"
                :to-ref="antdvRef"
                :curvature="-150"
                dotted
              />
              <AnimatedBeam
                :container-ref="uiRef"
                :from-ref="logo2Ref"
                :to-ref="arcoRef"
                :curvature="-150"
                dotted
              />
              <AnimatedBeam
                :container-ref="uiRef"
                :from-ref="logo2Ref"
                :to-ref="naiveRef"
                dotted
              />
              <AnimatedBeam
                :container-ref="uiRef"
                :from-ref="logo2Ref"
                :to-ref="tdesignRef"
                :curvature="-150"
                dotted
              />
              <AnimatedBeam
                :container-ref="uiRef"
                :from-ref="logo2Ref"
                :to-ref="vexipRef"
                :curvature="-150"
                dotted
              />
              <AnimatedBeam
                :container-ref="uiRef"
                :from-ref="logo2Ref"
                :to-ref="iduxRef"
                :curvature="-150"
                dotted
              />
            </div>
          </SpotlightCard>
        </div>
      </div>
      <GlowyCardWrapper :hue="220" :saturation="80" :lightness="50" class="grid grid-cols-12 mx-auto max-w-7xl gap-4">
        <GlowyCard v-for="(item, index) in features" :key="index" class="col-span-12 rounded-lg lg:col-span-3 sm:col-span-6">
          <div class="flex flex-col gap-2 rounded p-6 lg:p-8">
            <div class="text-left">
              <div class="inline-flex border border-[var(--vp-c-divider)] rounded-xl border-solid p-3">
                <div :class="item.icon" class="flex-center inline-flex text-3xl" />
              </div>
            </div>
            <h1 class="text-2xl font-medium">
              {{ item.title }}
            </h1>
            <p class="text-sm font-normal leading-6 dark-text-gray-5">
              {{ item.intro }}
            </p>
          </div>
        </GlowyCard>
      </GlowyCardWrapper>
      <div class="flex flex-col items-center justify-center">
        <BlurReveal :delay="0" :duration="1">
          <div class="from-black to-gray-300/80 bg-gradient-to-b bg-clip-text py-12 text-center text-3xl text-transparent font-semibold dark:from-white dark:to-slate-900/10 sm:pt-36 sm:text-4xl">
            来自用户的声音
          </div>
        </BlurReveal>
      </div>
      <div class="relative mx-auto h-100 max-w-7xl overflow-hidden border border-[var(--vp-c-divider)] rounded-xl border-solid bg-white shadow-lg dark:bg-dark">
        <div class="pointer-events-none absolute left-1/2 top-8 z-20 my-4 border border-[var(--vp-c-divider)] rounded-3xl border-solid bg-white/30 p-2 backdrop-blur-md -translate-x-1/2">
          <img src="/logo.svg" class="size-20">
        </div>
        <div class="pointer-events-none absolute inset-0 z-10 mt-30 flex flex-col items-center justify-center px-4 text-center">
          <h3 class="mb-2 text-4xl font-bold sm:text-5xl">
            你,还在等什么?
          </h3>
          <p class="m-4 flex flex-col text-lg sm:inline sm:flex-row">
            <span>立即使用 Fantastic-admin </span>
            <span>构建你的管理系统吧 😄</span>
          </p>
          <InteractiveButton text="立即开始" class="pointer-events-auto" @click="router.go('/guide/intro')" />
        </div>
        <div class="pointer-events-none absolute inset-0 overflow-hidden">
          <Marquee
            v-for="i in 4"
            :key="i"
            :pause-on-hover="false"
            :reverse="i % 2 === 0"
            :repeat="4"
            class="[--duration:60s] absolute left-[-20%] w-[140%]"
            :style="{ transform: `translateY(${(i - 1) * 13.5 - 12}rem) rotate(-16deg)` }"
          >
            <figure v-for="(evaluate, index) in (i % 2 === 0 ? evaluates.slice(0, 5) : evaluates.slice(5))" :key="index" class="h-48 w-64 overflow-hidden border border-gray-950/[.1] rounded-xl border-solid bg-gray-950/[.01] p-4 dark:border-gray-50/[.1] dark:bg-gray-50/[.10]">
              <div class="flex flex-row items-center gap-2">
                <img :src="`https://avatar.vercel.sh/${evaluate.name}`" class="size-8 rounded-full">
                <div class="flex flex-col">
                  <span class="text-base font-medium dark:text-white">
                    {{ evaluate.name }}
                  </span>
                </div>
              </div>
              <blockquote class="mt-2 text-pretty text-sm">
                {{ evaluate.content }}
              </blockquote>
            </figure>
          </Marquee>
        </div>
        <!-- Gradient overlay to fade to white at the bottom -->
        <div class="pointer-events-none absolute inset-0 from-white to-transparent bg-gradient-to-t dark:from-dark" />
      </div>
    </div>
  </div>
</template>
