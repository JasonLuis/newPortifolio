import { quasar } from '@quasar/vite-plugin';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  srcDir: 'src/',
  dir: {
    pages: 'pages',
    assets: 'core/assets',
    layouts: 'core/layouts',
    public: 'core/public',
    middleware: 'core/middleware'
  },

  components: {
    dirs: ['core/components']
  },

  css: [
    '@quasar/extras/roboto-font/roboto-font.css',
    '@quasar/extras/material-icons/material-icons.css',
    '~/core/assets/styles/quasar.sass'
  ],

  build: {
    transpile: ['quasar']
  },

  plugins: ['~/core/plugins/quasar.client.ts'],

  imports: {
    dirs: ['~/core/composables/**']
  },

  // compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  vite: {
    plugins: [
      /* vue({
              template: { transformAssetUrls }
      }), */
      quasar({
        sassVariables: '~/core/assets/styles/quasar.variables.sass'
      })
    ]
  },
  compatibilityDate: '2024-07-20'
})