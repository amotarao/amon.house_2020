import * as functions from 'firebase-functions';
import { apiHandler } from './handler';

const runtimeOptions: functions.RuntimeOptions = {
  memory: '512MB',
  timeoutSeconds: 10,
};

export const apiProd = functions.runWith(runtimeOptions).https.onRequest(apiHandler);
export const apiDev = functions.runWith(runtimeOptions).https.onRequest(apiHandler);
