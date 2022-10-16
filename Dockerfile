FROM node:16-alpine

WORKDIR /usr/src

COPY package*.json ./

RUN npm install

COPY src .

ENTRYPOINT ["node", "main.js"]