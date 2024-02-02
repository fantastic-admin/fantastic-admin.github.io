<script setup lang="ts">
import { onMounted, ref } from 'vue'

const isVisible = ref(false)
const nameStorage = 'GITEE-MIRROR-SITE'

function switchToMirrorSite() {
  window.location.href = location.href.replace(
    'github.io',
    'gitee.io',
  )
}

function closeBanner() {
  isVisible.value = false
  localStorage.setItem(nameStorage, String(true))
  document.documentElement.classList.remove('mirror-site-menu-fixed')
}

onMounted(() => {
  isVisible.value = !localStorage.getItem(nameStorage) && location.href.includes('github.io')
  if (isVisible.value)
    document.documentElement.classList.add('mirror-site-menu-fixed')
})
</script>

<template>
  <div v-if="isVisible" class="banner-wrapper" role="banner">
    <div id="banner" @click="switchToMirrorSite">
      <div class="content">
        官网访问慢？试试国内镜像地址吧！
      </div>
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
  background: linear-gradient(145deg, #c3ffac, #86ec87, #38a56a);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

#banner-close {
  position: absolute;
  right: 12px;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
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
