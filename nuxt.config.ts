import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-05-28',
  devtools: { enabled: true },

  modules: ['@nuxtjs/robots', '@nuxtjs/sitemap'],

  app: {
    head: {
      titleTemplate: '%s | 北京博信达自动化',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '北京博信达自动化有限公司 - 专注于工业机器人系统集成与自动化解决方案' },
        { name: 'keywords', content: '工业机器人,自动化,机械臂,系统集成,博信达,北京博信达自动化' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
      ],
      script: [
        { children: 'history.scrollRestoration="manual"', tagPosition: 'head' },
      ],
    },
  },

  // Vite 配置 - 集成 Tailwind CSS v4
  vite: {
    plugins: [tailwindcss()],
  },

  // CSS 入口
  css: ['~/assets/css/main.css'],

  // 静态生成配置
  nitro: {
    preset: 'static',
  },

  // SSR 模式
  ssr: true,

  // Robots.txt 配置
  robots: {
    UserAgent: '*',
    Allow: '/',
    Disallow: ['/api/', '/_nuxt/'],
    Sitemap: 'https://www.boxinda.com/sitemap.xml',
  },

  // Sitemap 配置
  sitemap: {
    hostname: 'https://www.boxinda.com',
    gzip: true,
  },

  // Site 配置
  site: {
    url: 'https://www.boxinda.com',
    name: '北京博信达自动化',
  },
})
