// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  buildModules: [
    '@nuxtjs/style-resources',
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: ``
        },
      },
    },
  },
})
