// https://nuxt.com/docs/api/configuration/nuxt-config
// noinspection JSUnusedGlobalSymbols
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  srcDir: 'src/',
  modules: ['@nuxt/eslint', '@pinia/nuxt'],
  eslint: {
    config: {
      standalone: false,
    },
  },
});
