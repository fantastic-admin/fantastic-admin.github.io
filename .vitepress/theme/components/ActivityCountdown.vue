<script setup lang="ts">
import { onMounted, ref } from 'vue'

const isVisible = ref(false)

const start = new Date('2024/5/1').getTime()
const deadline = new Date('2024/5/6').getTime()
const text = ref('')
const countdownInterval = ref()

function clickBanner() {
  location.href = '/buy.html'
}

function closeBanner() {
  clearInterval(countdownInterval.value)
  isVisible.value = false
  document.documentElement.classList.remove('mirror-site-menu-fixed')
}

onMounted(() => {
  isVisible.value = new Date().getTime() > start && new Date().getTime() < deadline
  if (isVisible.value) {
    countdownInterval.value = setInterval(() => {
      const distance = deadline - new Date().getTime()
      isVisible.value = distance > 0
      if (distance < 0) {
        closeBanner()
      }
      else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24))
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((distance % (1000 * 60)) / 1000)
        text.value = `专业版限时优惠，购买立返 100 元，点击购买<i style="margin-left: 20px; font-size: 0.75em;">距离活动结束还有 ${days} 天 ${hours} 小时 ${minutes} 分钟 ${seconds} 秒</i>`
      }
    }, 1000)
    document.documentElement.classList.add('mirror-site-menu-fixed')
  }
})
</script>

<template>
  <div v-if="isVisible" class="banner-wrapper" role="banner">
    <div id="banner" @click="clickBanner">
      <div class="content" v-html="text" />
      <button id="banner-close" @click.stop="closeBanner">
        <span class="close">&times;</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.banner-wrapper {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 61;
  width: 100%;
  height: 100%;
  max-height: 40px;
  background: linear-gradient(45deg, #0a2b4e, #835ec2);
  overflow: hidden;
  margin: 0;
  transition: background-size 0.25s cubic-bezier(0.39, 0.575, 0.565, 1);
}

#banner {
  position: relative;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
}

#banner .content {
  margin: 0;
  padding: 0;
  font-weight: bold;
  font-size: 18px;
  letter-spacing: 2px;
  text-align: center;
  background: linear-gradient(145deg, #c3ffac, #86ec87);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

#banner-close {
  position: absolute;
  width: 40px;
  height: 100%;
  top: 0;
  right: 0;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
}

#banner-close:hover > .close {
  color: #86ec87;
}

#banner-close > .close {
  font-size: 20px;
  font-weight: 600;
}

@media screen and (max-width: 767px) {
  #banner .content {
    font-size: 14px;
  }
}
</style>

<style>
html.mirror-site-menu-fixed {
  --vp-layout-top-height: 40px;
}
html.mirror-site-menu-fixed .VPNav,
html.mirror-site-menu-fixed .VPSidebar {
  top: 40px;
}
html.mirror-site-menu-fixed {
  scroll-padding-top: 104px;
  overflow: auto;
}
html.mirror-site-menu-fixed {
  margin-top: 42px;
}
@media (max-width: 960px) {
  html.mirror-site-menu-fixed .VPNav,
  html.mirror-site-menu-fixed .VPSidebar {
    top: 0;
  }
}
</style>
