module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'quicktips',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Obukhow&apos;s quick tips' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    { src: '~assets/css/fontello-embedded.css' },
    { src: 'highlight.js/styles/night-owl.css', lang: 'css'}
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#1657af' },
  /*
  ** Build configuration
  */
  build: {
    vendor: ["axios"]
  }
}

