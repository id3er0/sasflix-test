// https://nuxt.com/docs/api/configuration/nuxt-config
// noinspection JSUnusedGlobalSymbols
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  srcDir: 'src/',
  experimental: {
    componentIslands: {
      selectiveClient: 'deep',
    },
  },
  modules: ['@nuxt/eslint', '@nuxtjs/i18n', 'dayjs-nuxt', '@pinia/nuxt', 'pinia-plugin-persistedstate/nuxt', '@vueuse/nuxt'],
  typescript: {
    typeCheck: true,
  },
  eslint: {
    config: {
      standalone: false,
    },
  },
  runtimeConfig: {
    public: {
      // NUXT_PUBLIC_API_HOST
      apiHost: 'https://dummyjson.com',
    },
  },
  dayjs: {
    locales: ['en'],
    plugins: ['relativeTime', 'utc', 'timezone'],
    defaultLocale: 'en',
    defaultTimezone: 'Moscow',
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
});
