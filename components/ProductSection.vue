<template>
  <section id="products" class="py-20 lg:py-28 bg-neutral-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- 模块标题 -->
      <div ref="titleRef" class="text-center mb-12">
        <span class="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-50 text-primary-600 text-sm font-medium rounded-full mb-4">
          <Package class="w-4 h-4" />
          产品展示
        </span>
        <h2 class="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
          全方位自动化产品矩阵
        </h2>
        <p class="text-neutral-500 max-w-2xl mx-auto">
          从高精度机械臂到智能产线，从末端执行器到视觉系统，为您提供完整的自动化解决方案
        </p>
      </div>

      <!-- Tab 切换栏 -->
      <div class="flex justify-center mb-10">
        <div class="inline-flex bg-white rounded-xl p-1.5 shadow-card border border-neutral-200/50">
          <button
            v-for="tab in tabs"
            :key="tab.key"
            :class="[
              'px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200',
              activeTab === tab.key
                ? 'bg-primary-600 text-white shadow-sm'
                : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50',
            ]"
            @click="activeTab = tab.key"
          >
            {{ tab.label }}
          </button>
        </div>
      </div>

      <!-- 产品卡片网格 -->
      <TransitionGroup
        ref="gridRef"
        tag="div"
        name="card"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <div
            v-for="product in filteredProducts"
            :key="product.name"
            class="bg-white rounded-2xl overflow-hidden border border-neutral-200/50 group hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
          >
            <!-- 产品图片区域 -->
            <div class="relative h-48 overflow-hidden">
              <img
                :src="product.image"
                :alt="product.name"
                class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div class="absolute top-3 right-3">
                <span class="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium text-primary-600 rounded-full border border-primary-100">
                  {{ product.category }}
                </span>
              </div>
            </div>

            <!-- 产品信息 -->
            <div class="p-6">
              <h3 class="text-lg font-bold text-neutral-900 mb-2">{{ product.name }}</h3>
              <p class="text-neutral-500 text-sm leading-relaxed mb-4">{{ product.desc }}</p>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tag in product.tags"
                  :key="tag"
                  class="px-3 py-1 bg-neutral-100 text-neutral-600 text-xs font-medium rounded-lg"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </TransitionGroup>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Package } from 'lucide-vue-next'

const tabs = [
  { key: 'all', label: '全部' },
  { key: 'robot', label: '机械臂' },
  { key: 'line', label: '自动化产线' },
  { key: 'end', label: '末端执行器' },
]

const activeTab = ref('all')

const pexels = (id: number, suffix = '') =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}${suffix}.jpeg?w=800&h=600&fit=crop`

const products = [
  {
    name: 'FlexArm R800',
    category: '机械臂',
    type: 'robot',
    desc: '高精度六轴工业机械臂，适用于焊接、搬运、装配',
    tags: ['载荷 8kg', '精度 ±0.03mm', '6轴'],
    image: pexels(34207359, '/free-photo-of-industrial-robot-arm-in-a-manufacturing-facility'),
  },
  {
    name: 'FlexArm R2000',
    category: '机械臂',
    type: 'robot',
    desc: '重载型工业机械臂，满足大型工件搬运与加工需求',
    tags: ['载荷 20kg', '精度 ±0.05mm', '6轴'],
    image: pexels(16544054, '/free-photo-of-close-up-of-modern-robotic-mechanism'),
  },
  {
    name: 'AutoLine S100',
    category: '自动化产线',
    type: 'line',
    desc: '模块化智能装配产线，支持快速换型与柔性生产',
    tags: ['节拍 3s/pcs', '换型时间 <5min', '模块化'],
    image: pexels(13974251),
  },
  {
    name: 'AutoLine V200',
    category: '自动化产线',
    type: 'line',
    desc: '视觉引导的智能分拣与包装产线',
    tags: ['AI视觉定位', '分拣速度 120件/min', '兼容多品类'],
    image: pexels(36522029, '/free-photo-of-automated-circuit-board-inspection-system'),
  },
  {
    name: 'GripPro E300',
    category: '末端执行器',
    type: 'end',
    desc: '电动自适应夹爪，支持力控与位置双模式',
    tags: ['夹持力 5-100N', '自适应', '即插即用'],
    image: pexels(8438863),
  },
  {
    name: 'VisionSense C100',
    category: '末端执行器',
    type: 'end',
    desc: '3D 视觉定位系统，高精度识别与引导',
    tags: ['精度 ±0.1mm', '视野 500×500mm', '适配多品牌'],
    image: pexels(36776919, '/free-photo-of-close-up-of-camera-sensor-on-wooden-surface'),
  },
]

const filteredProducts = computed(() => {
  if (activeTab.value === 'all') return products
  return products.filter((p) => p.type === activeTab.value)
})

const { gsap, createContext, prefersReducedMotion } = useGSAP()

const titleRef = ref<HTMLElement>()
const gridRef = ref<HTMLElement>()

onMounted(() => {
  if (prefersReducedMotion.value) return

  createContext(() => {
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
  })
})
</script>

<style scoped>
.card-enter-active {
  transition: all 0.4s ease;
}
.card-leave-active {
  transition: all 0.3s ease;
  position: absolute;
}
.card-move {
  transition: all 0.4s ease;
}
.card-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.card-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>