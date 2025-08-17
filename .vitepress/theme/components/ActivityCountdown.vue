<script setup lang="ts">
import { onMounted, ref } from 'vue'

const isVisible = ref(false)
const isCountdownToStart = ref(false) // 是否为活动开始倒计时
const isClickable = ref(true) // 是否可以点击跳转

const start = new Date('2025/09/17').getTime()
const deadline = new Date('2025/10/18').getTime()
const preStartTime = start - (5 * 24 * 60 * 60 * 1000) // 活动开始前5天的时间

const text = ref('')
const countdownInterval = ref()

function clickBanner() {
  if (isClickable.value) {
    location.href = '/buy-anniversary'
  }
}

function closeBanner() {
  clearInterval(countdownInterval.value)
  isVisible.value = false
  document.documentElement.classList.remove('mirror-site-menu-fixed')
}

function formatTime(distance: number) {
  const days = Math.floor(distance / (1000 * 60 * 60 * 24))
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((distance % (1000 * 60)) / 1000)
  return `${days} 天 ${hours} 小时 ${minutes} 分钟 ${seconds} 秒`
}

onMounted(() => {
  const now = new Date().getTime()

  // 判断是否在显示时间范围内（活动开始前7天到活动结束）
  const shouldShow = now >= preStartTime && now < deadline

  if (shouldShow) {
    isVisible.value = true
    isCountdownToStart.value = now < start
    isClickable.value = now >= start // 只有在活动开始后才能点击

    countdownInterval.value = setInterval(() => {
      const currentTime = new Date().getTime()

      if (currentTime >= deadline) {
        // 活动结束
        closeBanner()
        return
      }

      if (currentTime < start) {
        // 活动开始前倒计时
        isCountdownToStart.value = true
        isClickable.value = false
        const distance = start - currentTime
        text.value = `Fantastic-admin 五周年庆即将开始<i style="margin-left: 20px; font-size: 0.75em;">距离活动开始还有 ${formatTime(distance)}</i>`
      }
      else {
        // 活动进行中倒计时
        isCountdownToStart.value = false
        isClickable.value = true
        const distance = deadline - currentTime
        text.value = `Fantastic-admin 五周年庆，全年最低价，点击查看<i style="margin-left: 20px; font-size: 0.75em;">距离活动结束还有 ${formatTime(distance)}</i>`
      }
    }, 1000)

    document.documentElement.classList.add('mirror-site-menu-fixed')
  }
})
</script>

<template>
  <div v-if="isVisible" class="banner-wrapper" role="banner">
    <div id="banner" :class="{ 'clickable': isClickable, 'non-clickable': !isClickable }" @click="clickBanner">
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
  background: #131A24;
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
  transition: all 0.3s ease;
}

#banner.clickable {
  cursor: pointer;
}

#banner.clickable:hover {
  background: rgba(255, 255, 255, 0.05);
}

#banner.non-clickable {
  cursor: default;
  opacity: 0.8;
}

#banner .content {
  margin: 0;
  padding: 0;
  font-weight: bold;
  font-size: 18px;
  letter-spacing: 2px;
  text-align: center;
  background: linear-gradient(145deg, #FFB800, #FF1A7A);
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
</style>
