// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "@nuxtjs/i18n"],
  tailwindcss: {
    cssPath: "~/assets/css/input.css",
  },
  i18n: {
    locales: ['es','pt'],
    defaultLocale: 'es',
    vueI18n: {
      legacy: false,
      locale: "es",
    },
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',  // recommended
    }
  },
});
