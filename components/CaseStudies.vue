<template>
  <section id="cases" class="py-20 lg:py-28 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- 模块标题 -->
      <div ref="titleRef" class="text-center mb-16">
        <span class="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-50 text-primary-600 text-sm font-medium rounded-full mb-4">
          <Award class="w-4 h-4" />
          合作成果
        </span>
        <h2 class="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
          实力见证，成果说话
        </h2>
        <p class="text-neutral-500 max-w-2xl mx-auto">
          深耕工业自动化领域，以专业能力赢得客户信赖
        </p>
      </div>

      <!-- 数据概览 -->
      <div ref="statsRef" class="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20">
        <div
          v-for="stat in overviewStats"
          :key="stat.label"
          class="bg-neutral-900 text-white rounded-2xl p-8 text-center group hover:shadow-elevated transition-shadow duration-300"
        >
          <div class="w-14 h-14 rounded-xl bg-primary-600/20 flex items-center justify-center mx-auto mb-4">
            <component :is="stat.icon" class="w-7 h-7 text-primary-400" />
          </div>
          <div class="text-4xl sm:text-5xl font-bold mb-2">
            <span :ref="(el) => { if (el) statEls[stat.key] = el as HTMLElement }">0</span>
            <span class="text-primary-400">+</span>
          </div>
          <div class="text-neutral-400 text-sm">{{ stat.label }}</div>
        </div>
      </div>

      <!-- 案例展示 -->
      <div class="space-y-16 mb-20">
        <div
          v-for="(caseItem, index) in cases"
          :key="caseItem.name"
          :ref="(el) => { if (el) caseRefs[index] = el as HTMLElement }"
          :class="[
            'grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center',
            index % 2 === 1 ? 'lg:direction-rtl' : '',
          ]"
        >
          <!-- 图片区域 -->
          <div :class="index % 2 === 1 ? 'lg:order-2' : ''">
            <div class="relative rounded-2xl overflow-hidden aspect-video border border-neutral-200/50">
              <img
                :src="caseItem.image"
                :alt="caseItem.name"
                class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div class="absolute bottom-4 left-4">
                <span class="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-xs font-medium text-primary-600 rounded-full border border-primary-100">
                  {{ caseItem.industry }}
                </span>
              </div>
            </div>
          </div>

          <!-- 文案区域 -->
          <div :class="index % 2 === 1 ? 'lg:order-1' : ''" class="space-y-6">
            <h3 class="text-2xl font-bold text-neutral-900">{{ caseItem.name }}</h3>

            <div class="space-y-4">
              <div>
                <div class="flex items-center gap-2 mb-2">
                  <CircleAlert class="w-4 h-4 text-amber-500" />
                  <span class="text-sm font-semibold text-neutral-700">客户需求</span>
                </div>
                <p class="text-neutral-500 text-sm leading-relaxed pl-6">{{ caseItem.need }}</p>
              </div>
              <div>
                <div class="flex items-center gap-2 mb-2">
                  <Lightbulb class="w-4 h-4 text-primary-500" />
                  <span class="text-sm font-semibold text-neutral-700">解决方案</span>
                </div>
                <p class="text-neutral-500 text-sm leading-relaxed pl-6">{{ caseItem.solution }}</p>
              </div>
              <div>
                <div class="flex items-center gap-2 mb-2">
                  <TrendingUp class="w-4 h-4 text-accent-500" />
                  <span class="text-sm font-semibold text-neutral-700">实施成果</span>
                </div>
                <p class="text-neutral-500 text-sm leading-relaxed pl-6">{{ caseItem.result }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 合作品牌墙 -->
      <div ref="brandsRef" class="relative overflow-hidden py-16">
        <h3 class="text-xl font-bold text-neutral-900 mb-12 text-center">信赖合作伙伴</h3>

        <!-- 第一行：慢速 -->
        <div ref="marqueeTrack1Ref" class="flex gap-6 mb-5 will-change-transform">
          <div
            v-for="(brand, i) in marqueeBrands1"
            :key="`m1-${i}`"
            class="flex-shrink-0 flex items-center gap-4 px-6 rounded-xl border border-neutral-200/50 grayscale hover:grayscale-0 transition-all duration-500 group cursor-default"
            :class="cardStyles[i % brands.length]"
          >
            <div class="w-9 h-9 flex items-center justify-center rounded-lg shrink-0" :style="{ background: brand.bg }">
              <div class="text-white font-bold text-xs" v-html="brand.svg" />
            </div>
            <span class="font-medium text-neutral-500 group-hover:text-neutral-800 transition-colors whitespace-nowrap" :class="brand.text">{{ brand.name }}</span>
          </div>
        </div>

        <!-- 第二行：中速 -->
        <div ref="marqueeTrack2Ref" class="flex gap-6 mb-5 will-change-transform">
          <div
            v-for="(brand, i) in marqueeBrands2"
            :key="`m2-${i}`"
            class="flex-shrink-0 flex items-center gap-4 px-6 rounded-xl border border-neutral-200/50 grayscale hover:grayscale-0 transition-all duration-500 group cursor-default"
            :class="cardStyles2[i % brands.length]"
          >
            <div class="w-9 h-9 flex items-center justify-center rounded-lg shrink-0" :style="{ background: brand.bg }">
              <div class="text-white font-bold text-xs" v-html="brand.svg" />
            </div>
            <span class="font-medium text-neutral-500 group-hover:text-neutral-800 transition-colors whitespace-nowrap" :class="brand.text">{{ brand.name }}</span>
          </div>
        </div>

        <!-- 第三行：快速 -->
        <div ref="marqueeTrack3Ref" class="flex gap-6 will-change-transform">
          <div
            v-for="(brand, i) in marqueeBrands3"
            :key="`m3-${i}`"
            class="flex-shrink-0 flex items-center gap-4 px-6 rounded-xl border border-neutral-200/50 grayscale hover:grayscale-0 transition-all duration-500 group cursor-default"
            :class="cardStyles3[i % brands.length]"
          >
            <div class="w-9 h-9 flex items-center justify-center rounded-lg shrink-0" :style="{ background: brand.bg }">
              <div class="text-white font-bold text-xs" v-html="brand.svg" />
            </div>
            <span class="font-medium text-neutral-500 group-hover:text-neutral-800 transition-colors whitespace-nowrap" :class="brand.text">{{ brand.name }}</span>
          </div>
        </div>

        <!-- 左右渐隐遮罩 -->
        <div class="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
        <div class="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  Award,
  Bot,
  Factory,
  CircleAlert,
  Lightbulb,
  TrendingUp,
  Building2,
} from 'lucide-vue-next'

const overviewStats = [
  { key: 'robots', value: 500, label: '台机械臂交付', icon: Bot },
  { key: 'companies', value: 120, label: '家服务企业', icon: Building2 },
  { key: 'industries', value: 15, label: '个覆盖行业', icon: Factory },
]

const pexels = (id: number, suffix = '') =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}${suffix}.jpeg?w=800&h=600&fit=crop`

const cases = [
  {
    name: '某汽车零部件企业自动化升级',
    industry: '汽车制造',
    need: '人工焊接效率低、一致性差',
    solution: '部署 6 台 FlexArm R800 组建焊接工作站',
    result: '效率提升 40%，良品率从 92% → 99.2%',
    image: pexels(19233057, '/free-photo-of-assembling-machines-in-factory'),
  },
  {
    name: '某家电龙头柔性装配线改造',
    industry: '家电制造',
    need: '多型号混产，换型时间长',
    solution: '部署 AutoLine S100 模块化柔性产线',
    result: '换型时间缩短 80%，产能提升 50%',
    image: pexels(5554948),
  },
  {
    name: '某食品企业智能分拣系统',
    industry: '食品加工',
    need: '人工分拣速度慢、易出错',
    solution: '视觉引导 AutoLine V200 分拣系统',
    result: '分拣速度提升 3 倍，错误率降至 0.1%',
    image: pexels(18631424, '/free-photo-of-bottles-of-water-in-factory'),
  },
]

const brands = [
  {
    name: '华为',
    bg: '#CF0A2C',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/><path d="M12 6v12M6 12h12"/></svg>`,
    text: 'text-xs',
  },
  {
    name: '比亚迪',
    bg: '#4A4A4A',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><path d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7l3-7z"/></svg>`,
    text: 'text-xs',
  },
  {
    name: '三一重工',
    bg: '#E31837',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M1 12h4M19 12h4"/></svg>`,
    text: 'text-xs',
  },
  {
    name: '格力电器',
    bg: '#005BAC',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><path d="M6 14L12 3l6 11"/><path d="M4 21h16"/><path d="M8 14h8"/></svg>`,
    text: 'text-xs',
  },
  {
    name: '富士康',
    bg: '#008B4A',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9l3 3-3 3M15 9l-3 3 3 3"/></svg>`,
    text: 'text-xs',
  },
  {
    name: '美的集团',
    bg: '#0072BC',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><path d="M2 20L12 4l10 16"/><path d="M6 16h12"/></svg>`,
    text: 'text-xs',
  },
  {
    name: '宁德时代',
    bg: '#1A6B37',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M8 10h8M8 14h4"/></svg>`,
    text: 'text-xs',
  },
  {
    name: '海尔智家',
    bg: '#00A1DE',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
    text: 'text-xs',
  },
  {
    name: '徐工集团',
    bg: '#F7941E',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M10 12h4"/></svg>`,
    text: 'text-xs',
  },
  {
    name: '长城汽车',
    bg: '#1A1A1A',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><rect x="1" y="6" width="22" height="10" rx="3"/><circle cx="6" cy="16" r="2"/><circle cx="18" cy="16" r="2"/><path d="M16 6l2 4M6 6l-2 4"/></svg>`,
    text: 'text-xs',
  },
  {
    name: '中联重科',
    bg: '#003D7A',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><path d="M3 21V8l9-5 9 5v13"/><path d="M3 21h18"/><path d="M12 4v17"/></svg>`,
    text: 'text-xs',
  },
  {
    name: '大疆创新',
    bg: '#1A1A2E',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><path d="M12 2l4 6-4 4-4-4 4-6z"/><path d="M2 12l6-4 4 4-4 4-6-4z"/><path d="M22 12l-6-4-4 4 4 4 6-4z"/><path d="M12 22l-4-6 4-4 4 4-4 6z"/></svg>`,
    text: 'text-xs',
  },
]

// ---- 不规则排列的头尾衔接滚动 ----

const statEls = ref<Record<string, HTMLElement>>({})
const caseRefs = ref<HTMLElement[]>([])

const { gsap, createContext, prefersReducedMotion } = useGSAP()

const titleRef = ref<HTMLElement>()
const statsRef = ref<HTMLElement>()
const brandsRef = ref<HTMLElement>()
const marqueeTrack1Ref = ref<HTMLElement>()
const marqueeTrack2Ref = ref<HTMLElement>()
const marqueeTrack3Ref = ref<HTMLElement>()

// 不同高度的卡片样式用于不规则效果
const cardStyles = [
  'py-5 text-sm bg-neutral-50 shadow-sm',
  'py-7 text-base bg-white shadow-md',
  'py-4 text-xs bg-neutral-50/80',
  'py-6 text-sm bg-white shadow-sm',
  'py-5 text-sm bg-neutral-50',
  'py-8 text-base bg-white shadow-md',
  'py-4 text-xs bg-neutral-50/80',
  'py-6 text-sm bg-white shadow-sm',
  'py-5 text-sm bg-neutral-50 shadow-sm',
  'py-7 text-base bg-white shadow-md',
  'py-4 text-xs bg-neutral-50/80',
  'py-6 text-sm bg-white shadow-sm',
]
const cardStyles2 = [
  'py-6 text-sm bg-white shadow-sm',
  'py-4 text-xs bg-neutral-50/80',
  'py-8 text-base bg-white shadow-md',
  'py-5 text-sm bg-neutral-50 shadow-sm',
  'py-7 text-base bg-white shadow-md',
  'py-4 text-xs bg-neutral-50/80',
  'py-6 text-sm bg-white shadow-sm',
  'py-5 text-sm bg-neutral-50',
  'py-8 text-base bg-white shadow-md',
  'py-4 text-xs bg-neutral-50/80',
  'py-7 text-base bg-white shadow-sm',
  'py-5 text-sm bg-neutral-50 shadow-sm',
]
const cardStyles3 = [
  'py-5 text-sm bg-white shadow-sm',
  'py-7 text-base bg-neutral-50',
  'py-4 text-xs bg-white shadow-sm',
  'py-6 text-sm bg-neutral-50/80',
  'py-5 text-sm bg-white',
  'py-8 text-base bg-neutral-50 shadow-sm',
  'py-5 text-xs bg-white shadow-md',
  'py-6 text-sm bg-neutral-50',
  'py-4 text-sm bg-white shadow-sm',
  'py-7 text-base bg-neutral-50/80',
  'py-5 text-xs bg-white shadow-sm',
  'py-6 text-sm bg-neutral-50 shadow-sm',
]

// 复制数据实现无缝头尾衔接
const marqueeBrands1 = computed(() => [...brands, ...brands, ...brands])
const marqueeBrands2 = computed(() => [...brands, ...brands, ...brands])
const marqueeBrands3 = computed(() => [...brands, ...brands, ...brands])

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

    // 数字递增动画
    if (statsRef.value) {
      gsap.from(statsRef.value.children, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: statsRef.value,
          start: 'top 80%',
        },
      })

      overviewStats.forEach((stat) => {
        const el = statEls.value[stat.key]
        if (el) {
          const obj = { val: 0 }
          gsap.to(obj, {
            val: stat.value,
            duration: 2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: statsRef.value,
              start: 'top 80%',
            },
            onUpdate() {
              el.textContent = Math.round(obj.val).toString()
            },
          })
        }
      })
    }

    // 案例入场
    caseRefs.value.forEach((el, index) => {
      gsap.from(el, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
        },
        delay: index * 0.1,
      })
    })

    // ---- 品牌墙：从右向左滚动 ----
    function startMarquee(track: HTMLElement | undefined, speed: number) {
      if (!track) return
      // 原始宽度（一份 brands 数据）
      const itemWidth = track.scrollWidth / 3
      // 初始位置已在最左端（translateX(0)），先向右偏移一份数据宽度
      gsap.set(track, { x: -itemWidth })

      gsap.to(track, {
        x: -itemWidth * 2,
        duration: speed,
        ease: 'none',
        repeat: -1,
        scrollTrigger: {
          trigger: track.parentElement || track,
          start: 'top 95%',
          end: 'bottom 5%',
          toggleActions: 'play none none reverse',
        },
      })
    }

    startMarquee(marqueeTrack1Ref.value, 50)
    startMarquee(marqueeTrack2Ref.value, 38)
    startMarquee(marqueeTrack3Ref.value, 28)
  })
})
</script>
