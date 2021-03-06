export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    // title: process.env.npm_package_name || '',
    title: 'Resume - Sarawut Nawawisitkul' || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    '@/assets/scss/argon.scss',
    '@/assets/vendor/nucleo/css/nucleo.css',
    '@/assets/vendor/font-awesome/css/font-awesome.css',
    './node_modules/timeline-vuejs/dist/timeline-vuejs.css',
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    {
      src: '~/plugins/argon-dashboard.js',
      ssr: false,
    },
    {
      src: '~/plugins/lazyload.js',
      ssr: false,
      mode: 'client',
    },
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    publicPath: '/assets/', // for build file ext : git hub page
    extend(config, ctx) {}, // eslint-disable-line
    // babel: {
    //   compact: true,
    // },
  },

  // for github page
  router: {
    base: process.env.DEPLOY_ENV === 'GH_PAGES' ? '/resume/' : '',
  },
}
