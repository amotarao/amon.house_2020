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
    {
      hid: 'description',
      name: 'description',
      content: 'さわむらあもんの記録',
    },
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
