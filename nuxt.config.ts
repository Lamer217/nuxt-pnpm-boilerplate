// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  telemetry: false,
  modules: ['@nuxt/eslint', '@nuxt/fonts'],
  fonts: {
    // Add Google Font Montserrat example
    // families: [{ name: 'montserrat', provider: 'google' }],
  },
});
