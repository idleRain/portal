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
            <div class="relative rounded-2xl overflow-hidden bg-gradient-to-br from-neutral-100 to-neutral-50 aspect-video flex items-center justify-center border border-neutral-200/50">
              <component :is="caseItem.icon" class="w-20 h-20 text-primary-400/60" />
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
                  <AlertCircle class="w-4 h-4 text-amber-500" />
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
      <div ref="brandsRef" class="text-center">
        <h3 class="text-xl font-bold text-neutral-900 mb-8">信赖合作伙伴</h3>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <div
            v-for="brand in brands"
            :key="brand.name"
            class="flex items-center justify-center gap-2 px-4 py-4 bg-neutral-50 rounded-xl border border-neutral-200/50 grayscale hover:grayscale-0 transition-all duration-300 hover:shadow-card hover:border-primary-200 group cursor-default"
          >
            <component :is="brand.icon" class="w-5 h-5 text-neutral-400 group-hover:text-primary-500 transition-colors duration-300" />
            <span class="text-sm font-medium text-neutral-500 group-hover:text-neutral-900 transition-colors duration-300">{{ brand.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  Award,
  Bot,
  Factory,
  PackageCheck,
  AlertCircle,
  Lightbulb,
  TrendingUp,
  Building2,
  Cpu,
  Truck,
  Zap,
  Smartphone,
  HardHat,
  Car,
  Wind,
  Plane,
  Battery,
} from 'lucide-vue-next'

const overviewStats = [
  { key: 'robots', value: 500, label: '台机械臂交付', icon: Bot },
  { key: 'companies', value: 120, label: '家服务企业', icon: Building2 },
  { key: 'industries', value: 15, label: '个覆盖行业', icon: Factory },
]

const cases = [
  {
    name: '某汽车零部件企业自动化升级',
    industry: '汽车制造',
    need: '人工焊接效率低、一致性差',
    solution: '部署 6 台 FlexArm R800 组建焊接工作站',
    result: '效率提升 40%，良品率从 92% → 99.2%',
    icon: Car,
  },
  {
    name: '某家电龙头柔性装配线改造',
    industry: '家电制造',
    need: '多型号混产，换型时间长',
    solution: '部署 AutoLine S100 模块化柔性产线',
    result: '换型时间缩短 80%，产能提升 50%',
    icon: Smartphone,
  },
  {
    name: '某食品企业智能分拣系统',
    industry: '食品加工',
    need: '人工分拣速度慢、易出错',
    solution: '视觉引导 AutoLine V200 分拣系统',
    result: '分拣速度提升 3 倍，错误率降至 0.1%',
    icon: PackageCheck,
  },
]

const brands = [
  { name: '华为', icon: Smartphone },
  { name: '比亚迪', icon: Car },
  { name: '三一重工', icon: HardHat },
  { name: '格力电器', icon: Wind },
  { name: '富士康', icon: Cpu },
  { name: '美的集团', icon: Zap },
  { name: '宁德时代', icon: Battery },
  { name: '海尔智家', icon: Smartphone },
  { name: '徐工集团', icon: Truck },
  { name: '长城汽车', icon: Car },
  { name: '中联重科', icon: HardHat },
  { name: '大疆创新', icon: Plane },
]

const statEls = ref<Record<string, HTMLElement>>({})
const caseRefs = ref<HTMLElement[]>([])

const { gsap, createContext, prefersReducedMotion } = useGSAP()

const titleRef = ref<HTMLElement>()
const statsRef = ref<HTMLElement>()
const brandsRef = ref<HTMLElement>()

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

      // 数字从0递增
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

    // 品牌墙入场
    if (brandsRef.value) {
      gsap.from(brandsRef.value.children, {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.05,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: brandsRef.value,
          start: 'top 85%',
        },
      })
    }
  })
})
</script>
