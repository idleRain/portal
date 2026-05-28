<template>
  <section
    id="hero"
    class="relative min-h-screen flex items-center overflow-hidden bg-neutral-900"
  >
    <!-- 背景层 -->
    <div ref="bgLayerRef" class="absolute inset-0 will-change-transform">
      <div class="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-neutral-900 to-primary-950/80" />
      <!-- 网格装饰 -->
      <div class="absolute inset-0 opacity-10">
        <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" stroke-width="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </div>

    <!-- 前景内容 -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0 w-full">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- 左侧文案 -->
        <div ref="contentRef" class="space-y-8">
          <div class="space-y-4">
            <span class="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-500/20 text-primary-300 text-sm font-medium rounded-full border border-primary-500/30">
              <Zap class="w-4 h-4" />
              工业自动化解决方案专家
            </span>
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              智造未来，<br />精准赋能
            </h1>
            <p class="text-lg sm:text-xl text-neutral-300 max-w-lg leading-relaxed">
              专注于工业机器人系统集成与自动化解决方案，为企业提供从设计到落地的一站式智能装备服务
            </p>
          </div>

          <!-- 关键数据 -->
          <div class="flex flex-wrap gap-8 sm:gap-12">
            <div v-for="(stat, index) in stats" :key="stat.label" class="space-y-1">
              <div class="text-3xl sm:text-4xl font-bold text-white">
                <span :ref="(el) => { if (el) statEls[index] = el as HTMLElement }">0</span>
                <span class="text-primary-400">{{ stat.suffix }}</span>
              </div>
              <div class="text-sm text-neutral-400">{{ stat.label }}</div>
            </div>
          </div>

          <!-- CTA 按钮 -->
          <div class="flex flex-wrap gap-4">
            <a
              class="inline-flex items-center gap-2 px-8 py-3.5 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-all duration-200 hover:shadow-lg hover:shadow-primary-600/25"
              @click.prevent="scrollTo('products')"
            >
              了解产品
              <ArrowRight class="w-4 h-4" />
            </a>
            <a
              class="inline-flex items-center gap-2 px-8 py-3.5 border border-white/20 text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-200"
              @click.prevent="scrollTo('contact')"
            >
              联系我们
              <Phone class="w-4 h-4" />
            </a>
          </div>
        </div>

        <!-- 右侧动态视觉 -->
        <div ref="visualRef" class="hidden lg:flex items-center justify-center">
          <div class="relative w-full max-w-lg aspect-square">
            <!-- 旋转外环 -->
            <div class="absolute inset-0 rounded-full border border-primary-500/20 animate-spin-slow" />
            <div class="absolute inset-8 rounded-full border border-primary-400/15 animate-spin-slower" />
            <div class="absolute inset-16 rounded-full border border-primary-300/10" />

            <!-- 中心图标 -->
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="w-32 h-32 rounded-2xl bg-primary-600/20 backdrop-blur-sm border border-primary-500/30 flex items-center justify-center">
                <Cpu class="w-16 h-16 text-primary-400" />
              </div>
            </div>

            <!-- 浮动装饰节点 -->
            <div class="absolute top-8 right-16 w-12 h-12 rounded-lg bg-accent-500/20 border border-accent-500/30 flex items-center justify-center animate-float">
              <Bot class="w-6 h-6 text-accent-400" />
            </div>
            <div class="absolute bottom-16 left-8 w-12 h-12 rounded-lg bg-primary-500/20 border border-primary-500/30 flex items-center justify-center animate-float-delayed">
              <Settings class="w-6 h-6 text-primary-300" />
            </div>
            <div class="absolute top-1/3 left-4 w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center animate-float-slow">
              <CircuitBoard class="w-5 h-5 text-white/70" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部渐变过渡 -->
    <div class="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none" />
  </section>
</template>

<script setup lang="ts">
function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

import {
  ArrowRight,
  Phone,
  Zap,
  Cpu,
  Bot,
  Settings,
  CircuitBoard,
} from 'lucide-vue-next'

const stats = [
  { value: 500, suffix: '+', label: '台机械臂交付' },
  { value: 120, suffix: '+', label: '家合作企业' },
  { value: 98, suffix: '%', label: '客户满意度' },
]

const { gsap, ScrollTrigger, createContext, prefersReducedMotion } = useGSAP()

const bgLayerRef = ref<HTMLElement>()
const contentRef = ref<HTMLElement>()
const visualRef = ref<HTMLElement>()
const statEls = ref<HTMLElement[]>([])

onMounted(() => {
  if (prefersReducedMotion.value) return

  createContext(() => {
    // 视差效果
    if (bgLayerRef.value) {
      gsap.to(bgLayerRef.value, {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: '#hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
    }

    // 内容入场动画
    if (contentRef.value) {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.from(contentRef.value.children, {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
      })
    }

    // 右侧视觉入场
    if (visualRef.value) {
      gsap.from(visualRef.value, {
        x: 80,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.5,
      })
    }

    // 数字递增动画
    stats.forEach((stat, index) => {
      const el = statEls.value[index]
      if (el) {
        const obj = { val: 0 }
        gsap.to(obj, {
          val: stat.value,
          duration: 2,
          ease: 'power2.out',
          delay: 0.8 + index * 0.2,
          onUpdate() {
            el.textContent = Math.round(obj.val).toString()
          },
        })
      }
    })
  })
})
</script>

<style scoped>
@keyframes spin-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
@keyframes spin-slower {
  from { transform: rotate(360deg); }
  to { transform: rotate(0deg); }
}
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-12px); }
}
@keyframes float-delayed {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}
@keyframes float-slow {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
}

.animate-spin-slow {
  animation: spin-slow 30s linear infinite;
}
.animate-spin-slower {
  animation: spin-slower 45s linear infinite;
}
.animate-float {
  animation: float 4s ease-in-out infinite;
}
.animate-float-delayed {
  animation: float-delayed 5s ease-in-out infinite 1s;
}
.animate-float-slow {
  animation: float-slow 6s ease-in-out infinite 0.5s;
}
</style>