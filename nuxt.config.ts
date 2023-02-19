// https://nuxt.com/docs/api/configuration/nuxt-
import en from './locales/en.json'
import pt from './locales/pt.json'
import gn from './locales/gn.json'
import es from './locales/es.json'
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "@nuxtjs/i18n"],
  tailwindcss: {
    cssPath: "~/assets/css/input.css",
  },
  i18n: {
    locales: ['es','pt', 'en', 'gn'],
    defaultLocale: 'es',
    vueI18n: {
      legacy: false,
      locale: "es",
      messages: {
        en,
        es,
        gn,
        pt
      }
    },
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',  // recommended
    }
  },
});
