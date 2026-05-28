<template>
  <section id="about" class="py-20 lg:py-28 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- 模块标题 -->
      <div ref="titleRef" class="text-center mb-16">
        <span class="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-50 text-primary-600 text-sm font-medium rounded-full mb-4">
          <Building2 class="w-4 h-4" />
          关于我们
        </span>
        <h2 class="text-3xl sm:text-4xl font-bold text-neutral-900">
          深耕工业自动化，驱动智造升级
        </h2>
      </div>

      <!-- Bento Grid -->
      <div ref="gridRef" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 auto-rows-auto">
        <!-- 卡片1: 公司概述 (大卡片) -->
        <div class="md:col-span-2 lg:col-span-2 lg:row-span-2 relative text-white rounded-2xl overflow-hidden group hover:shadow-elevated transition-shadow duration-300 min-h-[300px] lg:min-h-0">
          <!-- 全幅背景图 -->
          <img
            src="https://images.pexels.com/photos/30335865/pexels-photo-30335865/free-photo-of-modern-architecture-of-van-nelle-factory-rotterdam.jpeg?w=1200&h=800&fit=crop"
            alt="工厂"
            class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          <!-- 左侧半透明遮罩 -->
          <div class="absolute inset-0 bg-gradient-to-r from-neutral-900/90 via-neutral-900/70 to-transparent" />
          <!-- 内容 -->
          <div class="relative z-10 flex flex-col lg:flex-row h-full min-h-[300px] lg:min-h-0">
            <div class="flex-1 p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <div class="w-12 h-12 rounded-xl bg-primary-600/20 backdrop-blur-sm flex items-center justify-center mb-6">
                  <Factory class="w-6 h-6 text-primary-400" />
                </div>
                <h3 class="text-2xl font-bold mb-4">公司概述</h3>
                <p class="text-neutral-200 leading-relaxed text-base [text-shadow:0_1px_3px_rgba(0,0,0,0.3)]">
                  北京博信达自动化有限公司成立于 2018 年，专注于工业机器人系统集成与非标自动化设备研发制造。总部位于北京，业务覆盖全国主要工业城市，致力于为制造企业提供高效、可靠的智能化生产解决方案。
                </p>
              </div>
              <div class="mt-8 flex items-center gap-4">
                <div class="flex -space-x-2">
                  <div class="w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center text-xs font-bold text-white ring-2 ring-neutral-900">博</div>
                  <div class="w-8 h-8 rounded-full bg-accent-500 flex items-center justify-center text-xs font-bold text-white ring-2 ring-neutral-900">信</div>
                  <div class="w-8 h-8 rounded-full bg-primary-400 flex items-center justify-center text-xs font-bold text-white ring-2 ring-neutral-900">达</div>
                </div>
                <span class="text-sm text-neutral-300">始于 2018 · 扎根北京</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 卡片2: 核心优势 (中卡片) -->
        <div class="md:col-span-2 lg:col-span-2 bg-neutral-50 rounded-2xl p-8 group hover:shadow-elevated transition-shadow duration-300">
          <div class="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center mb-6">
            <Trophy class="w-6 h-6 text-primary-600" />
          </div>
          <h3 class="text-xl font-bold text-neutral-900 mb-6">核心优势</h3>
          <div class="space-y-5">
            <div v-for="advantage in advantages" :key="advantage.title" class="flex gap-4">
              <div class="w-10 h-10 rounded-lg bg-white flex items-center justify-center shrink-0 shadow-sm">
                <component :is="advantage.icon" class="w-5 h-5 text-primary-600" />
              </div>
              <div>
                <h4 class="font-semibold text-neutral-900 text-sm">{{ advantage.title }}</h4>
                <p class="text-neutral-500 text-sm mt-1 leading-relaxed">{{ advantage.desc }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 卡片3: 联系方式 (中卡片) -->
        <div class="md:col-span-2 lg:col-span-2 bg-primary-600 text-white rounded-2xl p-8 group hover:shadow-elevated transition-shadow duration-300">
          <div class="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-6">
            <Phone class="w-6 h-6 text-white" />
          </div>
          <h3 class="text-xl font-bold mb-6">联系方式</h3>
          <div class="space-y-4">
            <div class="flex items-start gap-3">
              <MapPin class="w-5 h-5 mt-0.5 shrink-0 text-primary-200" />
              <span class="text-primary-100 text-sm leading-relaxed">北京市通州区潞苑南大街甲560号B区105-A198</span>
            </div>
            <div class="flex items-center gap-3">
              <Phone class="w-5 h-5 shrink-0 text-primary-200" />
              <a href="tel:13581780577" class="text-primary-100 text-sm hover:text-white transition-colors">13581780577</a>
            </div>
            <div class="flex items-center gap-3">
              <Mail class="w-5 h-5 shrink-0 text-primary-200" />
              <a href="mailto:carol13@126.com" class="text-primary-100 text-sm hover:text-white transition-colors">carol13@126.com</a>
            </div>
          </div>
        </div>

        <!-- 卡片4: 企业愿景 (宽卡片) -->
        <div class="md:col-span-2 lg:col-span-4 bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 lg:p-10 group hover:shadow-elevated transition-shadow duration-300">
          <div class="flex flex-col lg:flex-row items-start lg:items-center gap-6">
            <div class="w-14 h-14 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm">
              <Target class="w-7 h-7 text-primary-600" />
            </div>
            <div>
              <h3 class="text-xl font-bold text-neutral-900 mb-2">企业愿景</h3>
              <p class="text-neutral-600 leading-relaxed">
                以技术创新驱动产业升级，成为国内领先的工业自动化系统集成服务商。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  Building2,
  Factory,
  Trophy,
  Phone,
  Mail,
  MapPin,
  Target,
  Lightbulb,
  Wrench,
  Zap,
} from 'lucide-vue-next'

const advantages = [
  {
    title: '自主研发能力',
    desc: '拥有多项核心专利技术，可针对客户需求定制开发',
    icon: Lightbulb,
  },
  {
    title: '全周期服务',
    desc: '从方案设计、设备集成到售后维护，提供一站式交钥匙工程',
    icon: Wrench,
  },
  {
    title: '快速交付',
    desc: '标准化项目管理流程，平均交付周期较行业缩短 30%',
    icon: Zap,
  },
]

const { gsap, createContext, prefersReducedMotion } = useGSAP()

const titleRef = ref<HTMLElement>()
const gridRef = ref<HTMLElement>()

onMounted(() => {
  if (prefersReducedMotion.value) return

  createContext(() => {
    // 标题入场
    if (titleRef.value) {
      gsap.from(titleRef.value.children, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: titleRef.value,
          start: 'top 85%',
        },
      })
    }

    // Bento Grid 卡片入场
    if (gridRef.value) {
      gsap.from(gridRef.value.children, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: gridRef.value,
          start: 'top 80%',
        },
      })
    }
  })
})
</script>