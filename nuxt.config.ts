// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        pageTransition: {
            name: 'fade',
            mode: 'out-in' // default
          },
          layoutTransition: {
            name: 'slide',
            mode: 'out-in' // default
          }
    },
    modules: ['@nuxtjs/tailwindcss','nuxt-icon'],
    tailwindcss: {
        cssPath: '~/assets/css/input.css'
    }
},

)
