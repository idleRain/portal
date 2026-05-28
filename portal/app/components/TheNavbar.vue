<template>
  <nav
    ref="navbarRef"
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled
        ? 'bg-white/80 backdrop-blur-lg shadow-card border-b border-neutral-200/50'
        : 'bg-transparent',
    ]"
    role="navigation"
    aria-label="主导航"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 lg:h-20">
        <!-- Logo & Brand -->
        <a
          href="#hero"
          class="flex items-center gap-3 group"
          aria-label="北京博信达自动化 - 回到首页"
        >
          <div
            class="w-10 h-10 rounded-lg bg-primary-600 flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
          >
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
          <span
            :class="[
              'text-lg font-bold transition-colors duration-300',
              isScrolled ? 'text-neutral-900' : 'text-white',
            ]"
          >
            北京博信达自动化
          </span>
        </a>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center gap-1">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            :class="[
              'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
              isScrolled
                ? 'text-neutral-600 hover:text-primary-600 hover:bg-primary-50'
                : 'text-white/80 hover:text-white hover:bg-white/10',
            ]"
          >
            {{ link.label }}
          </a>
          <a
            href="#contact"
            class="ml-4 px-5 py-2.5 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition-colors duration-200"
          >
            获取方案
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button
          class="lg:hidden p-2 rounded-lg transition-colors duration-200"
          :class="isScrolled ? 'text-neutral-700 hover:bg-neutral-100' : 'text-white hover:bg-white/10'"
          aria-label="打开导航菜单"
          :aria-expanded="isMobileMenuOpen"
          @click="toggleMobileMenu"
        >
          <Menu v-if="!isMobileMenuOpen" class="w-6 h-6" />
          <X v-else class="w-6 h-6" />
        </button>
      </div>
    </div>

    <!-- Mobile Menu Overlay -->
    <Teleport to="body">
      <Transition name="overlay">
        <div
          v-if="isMobileMenuOpen"
          class="fixed inset-0 bg-black/50 z-40 lg:hidden"
          @click="closeMobileMenu"
        />
      </Transition>
    </Teleport>

    <!-- Mobile Menu Panel -->
    <Transition name="slide">
      <div
        v-if="isMobileMenuOpen"
        class="fixed top-0 right-0 h-full w-72 bg-white shadow-elevated z-50 lg:hidden"
      >
        <div class="flex items-center justify-between p-4 border-b border-neutral-200">
          <span class="text-lg font-bold text-neutral-900">导航菜单</span>
          <button
            class="p-2 rounded-lg hover:bg-neutral-100 text-neutral-700"
            aria-label="关闭导航菜单"
            @click="closeMobileMenu"
          >
            <X class="w-5 h-5" />
          </button>
        </div>
        <div class="p-4 space-y-1">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="block px-4 py-3 rounded-lg text-neutral-700 hover:text-primary-600 hover:bg-primary-50 font-medium transition-colors duration-200"
            @click="closeMobileMenu"
          >
            {{ link.label }}
          </a>
          <a
            href="#contact"
            class="block mt-4 px-4 py-3 bg-primary-600 text-white text-center font-medium rounded-lg hover:bg-primary-700 transition-colors duration-200"
            @click="closeMobileMenu"
          >
            获取方案
          </a>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup lang="ts">
import { Menu, X } from 'lucide-vue-next'

const navLinks = [
  { label: '首页', href: '#hero' },
  { label: '关于我们', href: '#about' },
  { label: '产品展示', href: '#products' },
  { label: '合作成果', href: '#cases' },
  { label: '联系方式', href: '#contact' },
]

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  document.body.style.overflow = isMobileMenuOpen.value ? 'hidden' : ''
}

function closeMobileMenu() {
  isMobileMenuOpen.value = false
  document.body.style.overflow = ''
}

onMounted(() => {
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 20
  }
  window.addEventListener('scroll', handleScroll, { passive: true })
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
})
</script>

<style scoped>
.overlay-enter-active,
.overlay-leave-active {
  transition: opacity 0.3s ease;
}
.overlay-enter-from,
.overlay-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
</style>
