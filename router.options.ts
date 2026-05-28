import type { RouterConfig } from '@nuxt/schema'

export default {
  scrollBehavior(to, from, savedPosition) {
    // 始终从顶部开始，不恢复滚动位置
    return { top: 0, left: 0 }
  },
} satisfies RouterConfig
