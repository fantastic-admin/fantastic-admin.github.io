<script setup>
import { withBase } from 'vitepress'
import { ref } from 'vue'

const infos = ref([
  {
    dir: 'ltr',
    title: '配置丰富, 丰俭由人',
    intro: '丰富的配置项让框架更加灵活，也能让您更从容地面对复杂的业务场景',
    actions: [
      {
        name: '配置项一览',
        video: withBase('/preview-settings.mp4'),
      },
      {
        name: '随机搭配，风格百变',
        video: withBase('/preview-random-style.mp4'),
      },
    ],
    actionIndex: 0,
  },
  {
    dir: 'rtl',
    title: '多功能标签栏, 媲美原生',
    intro: '简约，而不简单',
    actions: [
      {
        name: '多种风格',
        video: withBase('/preview-tabbar-style.mp4'),
      },
      {
        name: '标签页不合并',
        video: withBase('/preview-tabbar-no-merge.mp4'),
      },
      {
        name: '标签页根据路由名称合并',
        video: withBase('/preview-tabbar-merge-routename.mp4'),
      },
      {
        name: '标签页根据 activeMenu 合并',
        video: withBase('/preview-tabbar-merge-activemenu.mp4'),
      },
      {
        name: '刷新记忆',
        video: withBase('/preview-tabbar-memory.mp4'),
      },
      {
        name: '固定',
        video: withBase('/preview-tabbar-pin.mp4'),
      },
      {
        name: '最大化',
        video: withBase('/preview-tabbar-maximize.mp4'),
      },
      {
        name: '快捷键',
        video: withBase('/preview-tabbar-hotkeys.mp4'),
      },
    ],
    actionIndex: 0,
  },
  {
    dir: 'ltr',
    title: '标准模块, 自动生成',
    intro: '标准模块即包含 CRUD (增查改删) 操作的基础模块，可自动生成，并且可实现多种展示与交互',
    actions: [
      {
        name: '列表展示模式',
        video: withBase('/preview-crud-list.mp4'),
      },
      {
        name: '表单展示模式',
        video: withBase('/preview-crud-form.mp4'),
      },
    ],
    actionIndex: 0,
  },
])
</script>

<template>
  <div class="home-preview-block">
    <div class="home-title">
      功能概览
    </div>
    <div v-for="(item, index) in infos" :key="index" class="home-preview" :dir="item.dir">
      <div class="intro">
        <h2>{{ item.title }}</h2>
        <p>{{ item.intro }}</p>
        <div v-if="item.actions && item.actions.length > 0" class="actions">
          <div
            v-for="(action, actionKey) in item.actions" :key="actionKey" class="action" :class="{
              active: item.actionIndex === actionKey,
            }" @click="item.actionIndex = actionKey"
          >
            {{ action.name }}
          </div>
        </div>
      </div>
      <div class="video">
        <Transition v-if="item.actions && item.actions.length > 0" name="video" mode="out-in">
          <video :key="item.actionIndex" :src="item.actions[item.actionIndex].video" controls autoplay />
        </Transition>
        <video v-else :src="item.video" controls autoplay />
      </div>
    </div>
    <div class="home-more">
      以上介绍只是冰山一角<br>更多功能期待您的探索
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-preview-block {
  padding: 100px 24px 0;
  display: flex;
  flex-direction: column;
  gap: 60px;

  .home-title {
    position: relative;
    max-width: 1152px;
    margin: 0 auto;
    font-size: 36px;
    font-weight: bold;
    line-height: 36px;
    text-align: center;

    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      display: block;
      width: 100px;
      height: 4px;
      background-color: var(--vp-c-divider);
      border-radius: 2px;
    }

    &::before {
      left: -120px;
    }

    &::after {
      right: -120px;
    }
  }

  .home-preview {
    width: 100%;
    max-width: 1152px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 80px;

    .intro {
      flex: 0.8;
      display: flex;
      flex-direction: column;
      gap: 20px;

      h2 {
        font-size: 36px;
        font-weight: bold;
        line-height: 36px;
      }

      p {
        line-height: 36px;
        font-size: 20px;
        font-weight: 500;
        white-space: pre-wrap;
        color: var(--vp-c-text-2);
      }

      .actions {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;

        .action {
          display: inline-block;
          border: 1px solid transparent;
          text-align: center;
          font-weight: 600;
          white-space: nowrap;
          transition: color 0.25s, border-color 0.25s, background-color 0.25s;
          border-color: var(--vp-button-alt-border);
          color: var(--vp-button-alt-text);
          background-color: var(--vp-button-alt-bg);
          border-radius: 12px;
          padding: 0 20px;
          line-height: 38px;
          font-size: 14px;
          cursor: pointer;

          &:hover {
            border-color: var(--vp-button-alt-hover-border);
            color: var(--vp-button-alt-hover-text);
            background-color: var(--vp-button-alt-hover-bg);
          }

          &.active {
            border-color: var(--vp-button-brand-border);
            color: var(--vp-button-brand-text);
            background-color: var(--vp-button-brand-bg);
          }
        }
      }
    }

    &[dir="rtl"] {
      .intro .actions {
        direction: ltr;
        justify-content: flex-end;
      }
    }

    .video {
      flex: 1;
      padding: 24px;
      border-radius: 12px;
      background-color: var(--vp-c-bg-soft);
      aspect-ratio: 16 / 9;

      video {
        width: 100%;
        box-shadow: 0 0 0 1px var(--vp-c-divider);
        border-radius: 6px;
        aspect-ratio: 16 / 9;
      }
    }
  }

  .home-more {
    max-width: 1152px;
    margin: 0 auto;
    font-size: 24px;
    font-weight: 500;
    line-height: 36px;
    text-align: center;
    color: var(--vp-c-text-3);
  }
}

@media (max-width: 960px) {
  .home-preview-block {
    .home-preview {
      flex-direction: column;
      gap: 0;

      .intro {
        padding: 24px 0;

        h2 {
          font-size: 24px;
          line-height: 24px;
          text-align: center;
        }

        p {
          font-size: 16px;
          line-height: 32px;
          text-align: center;
        }

        .actions {
          direction: ltr;
          justify-content: center;

          .action {
            padding: 0 12px;
            line-height: 32px;
          }
        }
      }

      &[dir="rtl"] {
        .intro .actions {
          justify-content: center;
        }
      }

      .video {
        padding: 12px;
      }
    }
  }
}

.video-enter-active {
  transition: 0.2s;
}
.video-leave-active {
  transition: 0.15s;
}
.video-enter-from {
  opacity: 0;
}
.video-leave-to {
  opacity: 0;
}
</style>
