// https://nuxt.com/docs/api/configuration/nuxt-
import en from './locales/en.json'
import pt from './locales/pt.json'
import gn from './locales/gn.json'
import es from './locales/es.json'
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "@nuxtjs/i18n", '@nuxtjs/robots','@vite-pwa/nuxt', '@nuxt/image-edge',],
  tailwindcss: {
    cssPath: "~/assets/css/input.css",
  },
  app: {
    head: {
      title: 'Lubrimaster',
      charset: 'utf-16',
      meta: [
        { name: 'description', content: 'My amazing site.' },
        { name: 'msapplication-TileColor', content: '#ffc40d' },
        { name: 'theme-color', content: '#ffffff' },
        // <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
        // <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
        // <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
        // <link rel="manifest" href="/site.webmanifest">
        // <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
        // <meta name="msapplication-TileColor" content="#ffc40d">
        // <meta name="theme-color" content="#ffffff">
      ],
      link: [
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'apple-touch-icon', href: '/site.webmanifest' },
        { rel: 'icon', href: '/site.webmanifest' },
        { rel: 'icon', href: '/site.webmanifest' },
        { rel: 'manifest', href: '/site.webmanifest' },
      ]
    }
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
