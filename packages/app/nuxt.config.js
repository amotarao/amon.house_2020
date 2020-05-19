import Sass from 'sass';
import Fiber from 'fibers';
import { config } from 'dotenv';

config();

const isProduction = process.env.NODE_ENV === 'production';

const head = {
  htmlAttrs: {
    lang: 'ja-jp',
  },
  titleTemplate: (title) => (title ? `${title} - あもんはうす` : 'あもんはうす'),
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { hid: 'description', name: 'description', content: 'さわむらあもんの記録' },
    { hid: 'og:type', property: 'og:type', content: 'website' },
    { hid: 'og:title', property: 'og:title', content: 'あもんはうす' },
    { hid: 'og:description', property: 'og:description', content: 'さわむらあもんの記録' },
    { hid: 'og:site_name', property: 'og:site_name', content: 'あもんはうす' },
    {
      hid: 'og:image',
      property: 'og:image',
      content: `https://i.imgg.app/${process.env.IMGG_USER_ID}/${process.env.IMGG_IMAGE_ID}/jpg?title=%E3%81%82%E3%82%82%E3%82%93%E3%81%AF%E3%81%86%E3%81%99`,
    },
    { hid: 'og:image:width', property: 'og:image:width', content: '1200' },
    { hid: 'og:image:height', property: 'og:image:height', content: '630' },
    { hid: 'twitter:site', name: 'twitter:site', content: '@amotarao' },
    { hid: 'twitter:creator', name: 'twitter:creator', content: '@amotarao' },
    { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'apple-touch-icon', type: 'image/png', href: '/apple-touch-icon.png' },
    { rel: 'icon', type: 'image/png', href: '/icon-192.png' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap' },
  ],
};

if (process.env.NOINDEX === 'true') {
  head.meta.push({
    hid: 'robots',
    name: 'robots',
    content: 'noindex',
  });
}

export default {
  mode: 'universal',
  srcDir: 'src',
  head,
  loading: { color: '#fff' },
  css: ['~/assets/scss/global.scss'],
  plugins: [],
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/dotenv'],
  modules: ['@nuxtjs/axios', '@nuxtjs/pwa'],
  dotenv: {
    path: './',
  },
  axios: {},
  pwa: {
    meta: {
      name: 'あもんはうす',
      description: 'さわむらあもんの記録',
      lang: 'ja',
    },
    manifest: {
      name: 'あもんはうす',
      short_name: 'あもんはうす',
      description: 'さわむらあもんの記録',
      lang: 'ja',
    },
  },
  build: {
    loaders: {
      cssModules: {
        modules: {
          localIdentName: isProduction ? '[hash:base64:5]' : '[name]_[local]_[hash:base64:5]',
        },
      },
      scss: {
        implementation: Sass,
        sassOptions: {
          fiber: Fiber,
        },
      },
    },
  },
};
