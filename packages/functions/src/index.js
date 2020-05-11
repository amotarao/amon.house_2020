const functions = require('firebase-functions');
const { ssr } = require('./nuxt/handler');

exports.ssrDev = functions.https.onRequest(ssr);
exports.ssrProd = functions.https.onRequest(ssr);
