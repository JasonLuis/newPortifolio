import { quasar } from '@quasar/vite-plugin';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  srcDir: 'src/',
  modules: [
  "nuxt-nodemailer"
  ],
  nodemailer: {
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '465'),
    secure: process.env.SECURE === 'true',
    auth: {
      user: process.env.USER,
      pass: process.env.PASSWORD
    }
  },
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

  plugins: [
    //'~/core/plugins/quasar.client.ts'
    { src: '~/core/plugins/quasar.client.ts', mode: 'client' },
  ],

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
        sassVariables: '~/core/assets/styles/quasar.variables.sass',
      })
    ]
  },
  compatibilityDate: '2025-04-27',
})