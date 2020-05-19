const express = require('express');
const { Nuxt } = require('nuxt');

const app = express();

const nuxt = new Nuxt({
  dev: false,
  serverMiddleware: [
    '~/src/nuxt/cacheControl.js',
  ],
});

app.use((req, res) => {
  (async () => {
    await nuxt.ready();
    nuxt.render(req, res);
  })();
});

exports.ssr = app;
