/// <reference types="nuxt" />

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // Configuration pour GitHub Pages
  ssr: true,
  app: {
    baseURL: '/test-edumapper/' // Nom du repo GitHub
  },

  // TypeScript configuration
  typescript: {
    strict: true,
    typeCheck: true
  },

  // CSS configuration
  css: ['~/assets/css/main.css'],

  // PostCSS configuration for Tailwind CSS v3
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },

  // Build configuration
  build: {
    transpile: []
  },

  // Runtime configuration
  runtimeConfig: {
    public: {
      // Add public runtime config here
    }
  }
})
