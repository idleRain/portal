<template>
  <footer id="contact" class="bg-neutral-900 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
        <!-- 公司信息 -->
        <div class="sm:col-span-2 lg:col-span-1 space-y-5">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-lg bg-primary-600 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="w-6 h-6"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <span class="text-lg font-bold">北京博信达自动化</span>
          </div>
          <p class="text-neutral-400 text-sm leading-relaxed">
            专注于工业机器人系统集成与自动化解决方案，为企业提供从设计到落地的一站式智能装备服务。
          </p>
        </div>

        <!-- 快速链接 -->
        <div>
          <h4 class="font-semibold text-white mb-5">快速链接</h4>
          <ul class="space-y-3">
            <li v-for="link in quickLinks" :key="link.label">
              <a
                :href="link.href"
                class="text-neutral-400 text-sm hover:text-white transition-colors duration-200"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- 产品中心 -->
        <div>
          <h4 class="font-semibold text-white mb-5">产品中心</h4>
          <ul class="space-y-3">
            <li v-for="product in productLinks" :key="product">
              <a
                href="#products"
                class="text-neutral-400 text-sm hover:text-white transition-colors duration-200"
              >
                {{ product }}
              </a>
            </li>
          </ul>
        </div>

        <!-- 联系方式 -->
        <div>
          <h4 class="font-semibold text-white mb-5">联系方式</h4>
          <ul class="space-y-4">
            <li class="flex items-start gap-3">
              <MapPin class="w-4 h-4 mt-1 shrink-0 text-primary-400" />
              <span class="text-neutral-400 text-sm leading-relaxed">北京市通州区潞苑南大街甲560号B区105-A198</span>
            </li>
            <li class="flex items-center gap-3">
              <Phone class="w-4 h-4 shrink-0 text-primary-400" />
              <a href="tel:13581780577" class="text-neutral-400 text-sm hover:text-white transition-colors">13581780577</a>
            </li>
            <li class="flex items-center gap-3">
              <Mail class="w-4 h-4 shrink-0 text-primary-400" />
              <a href="mailto:carol13@126.com" class="text-neutral-400 text-sm hover:text-white transition-colors">carol13@126.com</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 底部版权栏 -->
    <div class="border-t border-neutral-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p class="text-neutral-500 text-sm">
          &copy; 2026 北京博信达自动化有限公司 All Rights Reserved.
        </p>
        <p class="text-neutral-600 text-xs">
          备案号：京ICP备XXXXXXXX号
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { MapPin, Phone, Mail } from 'lucide-vue-next'

const quickLinks = [
  { label: '首页', href: '#hero' },
  { label: '关于我们', href: '#about' },
  { label: '产品展示', href: '#products' },
  { label: '合作成果', href: '#cases' },
  { label: '联系方式', href: '#contact' },
]

const productLinks = [
  'FlexArm R800',
  'FlexArm R2000',
  'AutoLine S100',
  'AutoLine V200',
  'GripPro E300',
  'VisionSense C100',
]
</script>
