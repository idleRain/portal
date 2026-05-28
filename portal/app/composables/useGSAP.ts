import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onMounted, onUnmounted } from 'vue'

/**
 * useGSAP - 管理 GSAP 动画生命周期的 composable
 * 组件卸载时自动清理所有动画实例和 ScrollTrigger
 * 内置 matchMedia 支持，移动端可降级动画
 * 支持 prefers-reduced-motion 用户
 */
export function useGSAP() {
  const animations: gsap.core.Tween[] = []
  const scrollTriggers: ScrollTrigger[] = []
  const contexts: gsap.Context[] = []

  const prefersReducedMotion = ref(false)

  onMounted(() => {
    if (import.meta.client) {
      gsap.registerPlugin(ScrollTrigger)
      const mql = window.matchMedia('(prefers-reduced-motion: reduce)')
      prefersReducedMotion.value = mql.matches

      const handler = (e: MediaQueryListEvent) => {
        prefersReducedMotion.value = e.matches
      }
      mql.addEventListener('change', handler)
      onUnmounted(() => {
        mql.removeEventListener('change', handler)
      })
    }
  })

  /**
   * 创建一个 gsap.context，自动管理生命周期
   */
  function createContext(fn: () => void, scope?: Element | string | object) {
    if (!import.meta.client) return

    const ctx = gsap.context(fn, scope)
    contexts.push(ctx)
    return ctx
  }

  /**
   * 在 matchMedia 内执行动画，支持响应式降级
   */
  function matchMedia(queries: Record<string, () => void>) {
    if (!import.meta.client) return

    const ctx = gsap.context(() => {
      gsap.matchMedia().add(queries)
    })
    contexts.push(ctx)
  }

  /**
   * 创建 tween 动画，自动追踪以便清理
   */
  function to(targets: gsap.TweenTarget, vars: gsap.TweenVars) {
    if (!import.meta.client) return

    const tween = gsap.to(targets, vars)
    animations.push(tween)
    return tween
  }

  /**
   * 创建 from 动画
   */
  function from(targets: gsap.TweenTarget, vars: gsap.TweenVars) {
    if (!import.meta.client) return

    const tween = gsap.from(targets, vars)
    animations.push(tween)
    return tween
  }

  /**
   * 创建 fromTo 动画
   */
  function fromTo(
    targets: gsap.TweenTarget,
    fromVars: gsap.TweenVars,
    toVars: gsap.TweenVars,
  ) {
    if (!import.meta.client) return

    const tween = gsap.fromTo(targets, fromVars, toVars)
    animations.push(tween)
    return tween
  }

  /**
   * 创建 timeline
   */
  function timeline(vars?: gsap.TimelineVars) {
    if (!import.meta.client) return

    const tl = gsap.timeline(vars)
    return tl
  }

  /**
   * 创建 ScrollTrigger
   */
  function createScrollTrigger(vars: ScrollTrigger.Vars) {
    if (!import.meta.client) return

    const st = ScrollTrigger.create(vars)
    scrollTriggers.push(st)
    return st
  }

  // 组件卸载时清理所有动画
  onUnmounted(() => {
    contexts.forEach((ctx) => ctx.revert())
    contexts.length = 0
    animations.forEach((anim) => anim.kill())
    animations.length = 0
    scrollTriggers.forEach((st) => st.kill())
    scrollTriggers.length = 0
  })

  return {
    gsap,
    ScrollTrigger,
    prefersReducedMotion,
    createContext,
    matchMedia,
    to,
    from,
    fromTo,
    timeline,
    createScrollTrigger,
  }
}
