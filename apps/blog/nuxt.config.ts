// https://nuxt.com/docs/api/configuration/nuxt-config
// noinspection JSUnusedGlobalSymbols
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  srcDir: 'src/',
  modules: ['@nuxt/eslint', '@nuxtjs/i18n', '@pinia/nuxt', 'dayjs-nuxt'],
  eslint: {
    config: {
      standalone: false,
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
