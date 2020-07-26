import axios, { AxiosError } from 'axios';
import * as functions from 'firebase-functions';

const { serviceid, apikey } = functions.config().microcms as { [key: string]: string };

const baseUrl = `https://${serviceid}.microcms.io/api`;

export const apiHandler: Parameters<typeof functions.https.onRequest>[0] = (req, resp) => {
  (async () => {
    resp.setHeader('Access-Control-Allow-Origin', '*');
    resp.setHeader('Access-Control-Allow-Methods', ' GET, OPTIONS');
    resp.setHeader('Access-Control-Allow-Headers', '*');

    const response = await axios
      .get(`${baseUrl}${req.originalUrl}`, {
        headers: {
          'X-API-KEY': apikey,
          'User-Agent': 'amon-house',
        },
      })
      .catch((error: AxiosError) => {
        if (error.response) {
          return { data: null, status: error.response.status };
        }
        return { data: null, status: 500 };
      });

    if (response.data !== null) {
      resp.setHeader('Cache-Control', 'public, max-age=600, s-maxage=600');
      resp.status(200).json(response.data);
      return;
    }

    resp.status(response.status).end();
  })();
};
