const axios = require('axios');
const express = require('express');
const functions = require('firebase-functions');
const { Nuxt } = require('nuxt');

const app = express();

const nuxt = new Nuxt({
  dev: false,
  modules: ['@nuxtjs/axios', '@nuxtjs/sitemap'],
  sitemap: {
    hostname: 'https://amon.house',
    async routes() {
      const q = {
        limit: 1000,
        fields: ['id', 'updatedAt'].join(','),
      };
      const qs = Object.entries(q)
        .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
        .join('&');

      const response = await axios
        .get(`https://${functions.config().microcms.serviceid}.microcms.io/api/v1/posts?${qs}`, {
          headers: {
            'X-API-KEY': functions.config().microcms.apikey,
          },
        })
        .catch((error) => {
          return { data: null, status: error.response.status };
        });

      if (response.data === null) {
        return [];
      }

      return response.data.contents.map((post) => ({
        url: `/posts/${post.id}`,
        lastmod: post.updatedAt,
      }));
    },
  },
});

app.use((req, res) => {
  (async () => {
    await nuxt.ready();
    nuxt.render(req, res);
  })();
});

exports.ssr = app;
