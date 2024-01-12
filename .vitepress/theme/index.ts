import { h, nextTick, onMounted, watch } from 'vue'
import Theme from 'vitepress/theme'
import { useRoute } from 'vitepress'
import './fonts/fira_code/fira_code.css'
import './styles/var.css'
import mediumZoom from 'medium-zoom'
import SponsorsAside from './components/SponsorsAside.vue'
import HomePreview from './components/HomePreview.vue'
import ZoomImg from './components/ZoomImg.vue'
import CustomerEvaluate from './components/CustomerEvaluate.vue'

export default {
  ...Theme,
  Layout() {
    return h(Theme.Layout, null, {
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
    app.component('ZoomImg', ZoomImg)
    app.component('CustomerEvaluate', CustomerEvaluate)
  },
}
