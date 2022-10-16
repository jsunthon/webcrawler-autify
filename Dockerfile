FROM node:16-alpine

RUN apk add --no-cache bash

WORKDIR /usr/src

COPY package*.json ./

RUN npm install

COPY src .

ENTRYPOINT ["node", "main.js"]