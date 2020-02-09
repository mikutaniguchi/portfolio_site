
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: "stylesheet", href: "https://use.fontawesome.com/releases/v5.6.1/css/all.css" },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'swiper/dist/css/swiper.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~plugins/vue-awesome-swiper', ssr: false },
    { src: "~/plugins/vue-scrollto", ssr: false },
    { src: "~/plugins/firebase.js" },
    { src: '@/plugins/vee-validate' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    'nuxt-webfontloader',
    '@nuxtjs/style-resources',
    '@nuxtjs/dotenv'
  ],
  webfontloader: {
    google: {
      families: ['Lato:400,700'] //Loads Lato font with weights 400 and 700
    }
  },
  styleResources: {
    scss: [
      '~/assets/scss/_index.scss'
    ]
  },
  //envファイルの内容
  env: {
    FB_API_KEY: process.env.FB_API_KEY,
    FB_AUTH_DOMAIN: process.env.FB_AUTH_DOMAIN,
    FB_DATABASE_URL: process.env.FB_DATABASE_URL,
    FB_PROJECTID: process.env.FB_PROJECTID,
    FB_STORAGE_BUCKET: process.env.FB_STORAGE_BUCKET,
    FB_MESSAGING_SENDER_ID: process.env.FB_MESSAGING_SENDER_ID
  },
  /*
  ** Build configuration
  */
  build: {
    vendor: [
      'vue-awesome-swiper'
    ],
    transpile: [
      "vee-validate/dist/rules"
    ],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }

}
