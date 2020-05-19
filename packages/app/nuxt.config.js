import Sass from 'sass';
import Fiber from 'fibers';

const head = {
  htmlAttrs: {
    lang: 'ja-jp',
  },
  title: 'Amon Sawamura',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      hid: 'description',
      name: 'description',
      content: 'さわむらあもんのページ',
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
  css: [],
  plugins: [],
  buildModules: ['@nuxt/typescript-build'],
  modules: ['@nuxtjs/axios', '@nuxtjs/pwa'],
  axios: {},
  pwa: {
    meta: {
      name: 'Amon Sawamura',
      description: 'さわむらあもんのページ',
      lang: 'ja',
    },
    manifest: {
      name: 'Amon Sawamura',
      short_name: 'あもん',
      description: 'さわむらあもんのページ',
      lang: 'ja',
    },
  },
  build: {
    loaders: {
      scss: {
        implementation: Sass,
        sassOptions: {
          fiber: Fiber,
        },
      },
    },
  },
};
