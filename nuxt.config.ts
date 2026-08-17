import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/google-fonts',
    '@vueuse/nuxt',
    '@nuxt/eslint',
    '@nuxt/icon',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/fonts'
  ],

  googleFonts: {
    families: {
      'Nunito': [700, 800, 900],
      'Inter': [400, 500, 600, 700]
    }
  },

  compatibilityDate: '2026-05-25',
  devtools: { enabled: true },

  css: ['~/assets/css/tailwind.css'],

  alias: {
    '@': '/app'
  },

  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: true
    },
    optimizeDeps: {
      include: ['@lucide/vue', 'reka-ui']
    }
  }
   
  
})