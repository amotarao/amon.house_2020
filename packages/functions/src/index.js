const functions = require('firebase-functions');
const { ssr } = require('./nuxt/handler');

const ssrRunWith = {
  memory: '512MB',
  timeoutSeconds: 10,
}

exports.ssrDev = functions.runWith(ssrRunWith).https.onRequest(ssr);
exports.ssrProd = functions.runWith(ssrRunWith).https.onRequest(ssr);
