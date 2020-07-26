FROM node:10-slim

WORKDIR /usr/src/app
COPY . .

ARG GA_ID
ENV GA_ID $GA_ID

RUN yarn install --silent
RUN yarn build

CMD [ "yarn", "start" ]
