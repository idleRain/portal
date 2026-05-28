export default defineNuxtPlugin((nuxtApp) => {
  if (!import.meta.client) return

  // 页面完全加载后，强制滚动到顶部
  nuxtApp.hook('page:finish', () => {
    requestAnimationFrame(() => {
      window.scrollTo(0, 0)
    })
  })

  // 首次挂载时也执行一次
  history.scrollRestoration = 'manual'
})
