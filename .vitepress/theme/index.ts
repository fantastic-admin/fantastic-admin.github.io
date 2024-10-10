import mediumZoom from 'medium-zoom'
import { useRoute } from 'vitepress'
import Theme, { VPBadge } from 'vitepress/theme'
import { h, nextTick, onMounted, watch } from 'vue'
// import Activity from './components/Activity.vue'
import ActivityCountdown from './components/ActivityCountdown.vue'
import CustomerEvaluate from './components/CustomerEvaluate.vue'
import HomePreview from './components/HomePreview.vue'
import SponsorsAside from './components/SponsorsAside.vue'
import ZoomImg from './components/ZoomImg.vue'
import './fonts/fira_code/fira_code.css'
import './styles/var.css'

export default {
  ...Theme,
  Layout() {
    return h(Theme.Layout, null, {
      'layout-top': () => h(ActivityCountdown),
      'home-features-after': () => h(HomePreview),
      'aside-bottom': () => h(SponsorsAside),
    })
  },
  setup() {
    const route = useRoute()
    const initZoom = () => {
      mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' })
    }
    onMounted(() => initZoom())
    watch(
      () => route.path,
      () => nextTick(() => initZoom()),
    )
  },
  enhanceApp({ app }) {
    app.component('Badge', VPBadge)
    app.component('ZoomImg', ZoomImg)
    app.component('CustomerEvaluate', CustomerEvaluate)
  },
}
