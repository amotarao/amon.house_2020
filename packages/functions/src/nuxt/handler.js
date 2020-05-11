const express = require('express');
const { Nuxt, Builder } = require('nuxt');
const port = process.env.PORT || 3000;

const app = express();

const nuxt = new Nuxt({
  dev: false,
});

app.use(nuxt.render);

exports.ssr = app;
