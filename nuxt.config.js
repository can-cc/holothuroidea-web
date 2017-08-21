var axios = require('axios');

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'holothuroidea-web',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Chenfangwei Mico Blog(experience)' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  generate: {
    routes: function() {
      return axios.get('http://localhost:3000/data/_summary.json').then(res => {
        return ['/c'].concat(
          res.data.map(category => {
            return '/c/' + category.name;
          })
        );
      });
    }
  },
  loading: { color: '#999' },
  css: [
    { src: '~assets/scss/main.scss', lang: 'scss' } // 指定 scss 而非 sass
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    extend(config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    }
  }
};
